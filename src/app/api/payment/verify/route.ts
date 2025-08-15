import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import prisma from '@/lib/db';

// Hash verification function for the RESPONSE from Easebuzz
const verifyResponseHash = (data: any, salt: string, key: string) => {
    const hashString = `${salt}|${data.status}|${data.udf10}|${data.udf9}|${data.udf8}|${data.udf7}|${data.udf6}|${data.udf5}|${data.udf4}|${data.udf3}|${data.udf2}|${data.udf1}|${data.email}|${data.firstname}|${data.productinfo}|${data.amount}|${data.txnid}|${key}`;
    const generatedHash = crypto.createHash('sha512').update(hashString).digest('hex');
    return generatedHash === data.hash;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const responseData = req.body;
    const salt = process.env.EASEBUZZ_SALT!;
    const key = process.env.EASEBUZZ_KEY!;

    const isHashValid = verifyResponseHash(responseData, salt, key);

    if (!isHashValid) {
        console.error("CRITICAL: Invalid hash received from Easebuzz. Potential tampering.", responseData);
        return res.redirect(302, '/payment/failure?error=invalid_hash');
    }

    const { txnid, status, amount } = responseData;
    const paymentStatus = status === 'success' ? 'SUCCESS' : 'FAILED';

    try {
        await prisma.payment.update({
            where: { easebuzzTxnId: txnid },
            data: {
                status: paymentStatus,
                paymentDetails: responseData,
            },
        });

        if (paymentStatus === 'SUCCESS') {
            res.redirect(302, `/payment/success?txnid=${txnid}`);
        } else {
            res.redirect(302, `/payment/failure?txnid=${txnid}&reason=${responseData.error_Message}`);
        }

    } catch (error) {
        console.error("Error updating payment status:", error);
        res.redirect(302, '/payment/failure?error=db_update_failed');
    }
}