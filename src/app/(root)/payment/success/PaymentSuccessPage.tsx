// /app/payment/success/PaymentSuccessPage.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const PaymentSuccessPage = () => {
    const searchParams = useSearchParams()
    const txnid = searchParams.get('txnid')

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-green-600">Payment Successful!</h1>
            <p className="mt-4 text-lg">Thank you for your purchase.</p>
            {txnid && <p className="mt-2 text-sm text-gray-500">Transaction ID: {txnid}</p>}
            <Link href="/dashboard/overview">
                <Button className="mt-8">Go to Dashboard</Button>
            </Link>
        </div>
    )
}

export default PaymentSuccessPage
