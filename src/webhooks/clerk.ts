import { NextApiRequest, NextApiResponse } from 'next';
import { Webhook } from 'svix';
import { buffer } from 'micro';
import { PrismaClient } from '@prisma/client'; // Assuming prisma is instantiated here or imported from a lib file

const prisma = new PrismaClient(); // Or your singleton instance: import prisma from '@/lib/db';
const webhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

export const config = {
    api: {
        bodyParser: false,
    },
};

// UPDATED: A more specific and accurate type based on Clerk's payload
type EventType = 'user.created' | 'user.updated' | 'user.deleted';

interface EventData {
    id: string;
    email_addresses: {
        id: string;
        email_address: string;
    }[];
    username: string | null;
    first_name: string | null;
    last_name: string | null;
    image_url: string; // Clerk provides the image URL
}

interface SvixEvent {
    data: EventData;
    object: 'event';
    type: EventType;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const payload = (await buffer(req)).toString();
    const headers = req.headers;

    const wh = new Webhook(webhookSecret);
    let evt: SvixEvent;

    try {
        evt = wh.verify(payload, headers as any) as SvixEvent;
    } catch (err) {
        console.error('Webhook verification failed:', err);
        return res.status(400).json({ message: 'Invalid webhook signature' });
    }

    const eventType = evt.type;
    const { id, email_addresses, username, first_name, last_name, image_url } = evt.data;

    // NOTE: It's good practice to ensure there is at least one email
    if (!email_addresses || email_addresses.length === 0) {
        return res.status(400).json({ error: 'No email address found for the user' });
    }

    try {
        // --- CONSOLIDATED LOGIC for user creation and updates ---
        if (eventType === 'user.created' || eventType === 'user.updated') {
            await prisma.user.upsert({
                where: { id: id },
                // Data to use if UPDATING an existing user
                update: {
                    email: email_addresses[0].email_address,
                    username: username,
                    name: `${first_name || ''} ${last_name || ''}`.trim(),
                    // You might want to add image_url to your Prisma schema as well
                },
                // Data to use if CREATING a new user
                create: {
                    id: id,
                    email: email_addresses[0].email_address,
                    username: username,
                    name: `${first_name || ''} ${last_name || ''}`.trim(),
                },
            });
            console.log(`User ${id} was created or updated in the database.`);
        }

        // --- SAFER LOGIC for user deletion ---
        if (eventType === 'user.deleted') {
            // Use deleteMany to avoid an error if the user doesn't exist.
            // This is idempotent and safer for webhooks.
            await prisma.user.deleteMany({
                where: {
                    id: id,
                },
            });
            console.log(`User ${id} was deleted from the database.`);
        }

        res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Error processing webhook:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}