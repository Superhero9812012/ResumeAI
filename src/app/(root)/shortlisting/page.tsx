'use client';

// import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Loader from '@/components/Global/Loader'; // Adjust if your loader is elsewhere
import Page from './ShortlistingWrapper'; // This is your full existing shortlisting page

const page = () => {
    // const { isLoaded, isSignedIn } = useUser();
    // const router = useRouter();

    // useEffect(() => {
    //     if (isLoaded && !isSignedIn) {
    //         router.replace('/auth/sign-in');
    //     }
    // }, [isLoaded, isSignedIn, router]);

    // if (!isLoaded || !isSignedIn) {
    //     return (
    //         <div className='min-h-[calc(100vh_-_60px)] flex flex-col items-center justify-center'>
    //             <Loader />
    //         </div>
    //     )
    // }

    return <Page />;
}

export default page