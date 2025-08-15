// /app/payment/failure/page.tsx
import { Suspense } from 'react'
import PaymentFailurePage from './PaymentFailurePage'

export default function Page() {
    return (
        <Suspense fallback={<div className="text-center p-6">Loading...</div>}>
            <PaymentFailurePage />
        </Suspense>
    )
}
