'use client';

import Text from '@/components/Text';

export default function GlobalError({
    // eslint-disable-next-line no-unused-vars
    error,
    reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
    return (
    // global-error must include html and body tags
        <html>
            <body>
                <h2><Text text={'Something went wrong!'} /></h2>
                <button onClick={() => reset()}><Text text={'Try again'} /></button>
            </body>
        </html>
    );
}