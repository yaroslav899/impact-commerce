'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import Text from '@/components/Text';

export default function Error({
    error,
    reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    useEffect(() => {
    // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2><Text text={'Something went wrong!'} /></h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                <Text text={'Try again'} />
            </button>
        </div>
    );
}