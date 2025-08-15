// src/app/api/payment/initiate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server'; // Correct import for App Router
import crypto from 'crypto';
import prisma from '@/lib/db';

const generateHash = (data: any, salt: string) => {
    const hashString = `${data.key}|${data.txnid}|${data.amount}|${data.productinfo}|${data.firstname}|${data.email}|${data.udf1}|${data.udf2}|${data.udf3}|${data.udf4}|${data.udf5}|${data.udf6}|${data.udf7}|${data.udf8}|${data.udf9}|${data.udf10}|${salt}`;
    return crypto.createHash('sha512').update(hashString).digest('hex');
};

// 1. Export a named function for the HTTP method, e.g., POST
export async function POST(req: NextRequest) {
    try {
        // 2. Use the new `auth()` helper from Clerk, not `getAuth`
        const { userId } = await auth();
        if (!userId) {
            // 3. Return a NextResponse for responses
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // 4. Get the request body by awaiting req.json()
        const { jobId, amount } = await req.json();
        if (!jobId || !amount) {
            return NextResponse.json({ error: 'Missing jobId or amount' }, { status: 400 });
        }

        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return NextResponse.json({ error: 'User not found in database.' }, { status: 404 });
        }

        // The core logic remains the same
        const key = process.env.EASEBUZZ_KEY!;
        const salt = process.env.EASEBUZZ_SALT!;
        const txnid = `OPT-${jobId.slice(0, 8)}-${Date.now()}`;

        const paymentData = {
            key,
            txnid,
            amount: parseFloat(amount).toFixed(2),
            productinfo: `Payment for Optimization Job ${jobId}`,
            firstname: user.name || user.username || 'Customer',
            email: user.email,
            phone: '',
            surl: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/verify`,
            furl: `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/verify`,
            udf1: jobId,
            udf2: userId,
            udf3: '', udf4: '', udf5: '', udf6: '', udf7: '', udf8: '', udf9: '', udf10: '',
        };

        const hash = generateHash(paymentData, salt);

        await prisma.payment.create({
            data: {
                amount: parseFloat(amount),
                status: 'PENDING',
                easebuzzTxnId: txnid,
                user: { connect: { id: userId } },
                optimizationJob: { connect: { id: jobId } },
            },
        });

        const formData = new URLSearchParams();
        Object.entries(paymentData).forEach(([k, v]) => formData.append(k, String(v)));
        formData.append('hash', hash);

        const easebuzzUrl = process.env.NODE_ENV === 'production'
            ? 'https://pay.easebuzz.in/payment/initiateLink'
            : 'https://testpay.easebuzz.in/payment/initiateLink';

        const easebuzzApiResponse = await fetch(easebuzzUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: formData.toString(),
        });

        if (!easebuzzApiResponse.ok) {
            throw new Error(`Easebuzz API request failed with status: ${easebuzzApiResponse.status}`);
        }

        const easebuzzResponse = await easebuzzApiResponse.json();

        if (easebuzzResponse.status !== 1) {
            throw new Error('Easebuzz failed to initiate payment.');
        }

        // 5. Return a NextResponse for success
        return NextResponse.json({ access_key: easebuzzResponse.data });

    } catch (error: any) {
        console.error("Payment initiation failed:", error);
        return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
    }
}