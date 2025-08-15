// /app/payment/failure/PaymentFailurePage.tsx
'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const PaymentFailurePage = () => {
    const searchParams = useSearchParams()
    const reason = searchParams.get('reason')
    const txnid = searchParams.get('txnid')

    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600">Payment Failed</h1>
            <p className="mt-4 text-lg">Unfortunately, your payment could not be processed.</p>
            {reason && <p className="mt-2 text-sm text-gray-500">Reason: {reason}</p>}
            {txnid && <p className="mt-1 text-sm text-gray-500">Transaction ID: {txnid}</p>}
            <Link href="/">
                <Button variant="outline" className="mt-8">Try Again</Button>
            </Link>
        </div>
    )
}

export default PaymentFailurePage
