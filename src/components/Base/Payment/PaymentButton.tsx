// import axios from 'axios';
// import { useState } from 'react';
// import { useUser } from '@clerk/nextjs'; // Import the useUser hook
// import { Button } from '@/components/ui/button';

// declare const window: any;

// interface PaymentButtonProps {
//     jobId: string;
//     amount: number;
// }

// const PaymentButton = ({ jobId, amount }: PaymentButtonProps) => {
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);

//     // Get user status from Clerk's hook
//     const { isSignedIn } = useUser();

//     const handlePayment = async () => {
//         setIsLoading(true);
//         setError(null);

//         try {
//             // REMOVED: No need to pass userId anymore. The backend gets it from the session.
//             const { data } = await axios.post('/api/payment/initiate', {
//                 jobId,
//                 amount,
//             });

//             const { access_key } = data;
//             if (!access_key) throw new Error("Could not retrieve access key.");

//             const easebuzzCheckout = new window.Easebuzz({
//                 key: process.env.NEXT_PUBLIC_EASEBUZZ_KEY,
//                 access_key: access_key,
//                 onResponse: (response: any) => {
//                     if (response.status === "success") {
//                         window.location.href = `/payment/success?txnid=${response.txnid}`;
//                     } else {
//                         window.location.href = `/payment/failure?txnid=${response.txnid}&reason=${response.error_Message}`;
//                     }
//                 },
//                 theme: "#123456"
//             });

//             easebuzzCheckout.initiatePayment();

//         } catch (err: any) {
//             console.error(err);
//             setError(err.response?.data?.error || 'Payment failed. Please try again.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div>
//             <Button variant={"secondary"} onClick={handlePayment} disabled={isLoading || !isSignedIn}>
//                 {isLoading ? 'Processing...' : `Pay ₹${amount}`}
//             </Button>
//             {!isSignedIn && <p style={{ color: 'gray', fontSize: 'small' }}>Please sign in to pay.</p>}
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//         </div>
//     );
// };

// export default PaymentButton;

// No need to import axios anymore
import { useState } from 'react';
// import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

declare const window: any;

interface PaymentButtonProps {
    jobId: string;
    amount: number;
}

const PaymentButton = ({ jobId, amount }: PaymentButtonProps) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    // const { isSignedIn } = useUser();
    const isSignedIn = true; // Temporarily set to true for build

    const handlePayment = async () => {
        if (!isSignedIn) {
            setError('You must be signed in to make a payment.');
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/payment/initiate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ jobId, amount }),
            });

            // UPDATED: More robust error handling block
            if (!response.ok) {
                let errorMessage = `Error: ${response.status} ${response.statusText}`;
                try {
                    // First, try to parse the response as JSON.
                    // This will succeed if your API route correctly sends back a { error: "..." } object.
                    const errorData = await response.json();
                    errorMessage = errorData.error || errorMessage;
                } catch (e) {
                    // If parsing as JSON fails, it means the body was not JSON (e.g., empty or HTML).
                    // We'll stick with the default HTTP status error message.
                    console.warn("Could not parse error response as JSON.");
                }
                // Throw the determined error message.
                throw new Error(errorMessage);
            }

            const data = await response.json();
            const { access_key } = data;

            if (!access_key) {
                throw new Error("Could not retrieve payment access key.");
            }

            const easebuzzCheckout = new window.Easebuzz({
                key: process.env.NEXT_PUBLIC_EASEBUZZ_KEY,
                access_key: access_key,
                onResponse: (easebuzzResponse: any) => {
                    if (easebuzzResponse.status === "success") {
                        window.location.href = `/payment/success?txnid=${easebuzzResponse.txnid}`;
                    } else {
                        window.location.href = `/payment/failure?txnid=${easebuzzResponse.txnid}&reason=${easebuzzResponse.error_Message}`;
                    }
                },
                theme: "#123456"
            });

            easebuzzCheckout.initiatePayment();

        } catch (err: any) {
            console.error(err);
            setError(err.message || 'Payment failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <Button onClick={handlePayment} disabled={isLoading || !isSignedIn}>
                {isLoading ? 'Processing...' : `Pay ₹${amount}`}
            </Button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default PaymentButton;