'use client';

import { useState, useEffect, Dispatch, SetStateAction } from 'react';

function useSessionStorage<T>(
    key: string,
    defaultValue: T,
): [T, Dispatch<SetStateAction<T>>] {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return defaultValue;
        }

        let currentValue: T;

        try {
            const storedValue = sessionStorage.getItem(key);
            currentValue = storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, JSON.stringify(value));
            window.dispatchEvent(new Event('storage'));
        }
    }, [value, key]);

    return [value, setValue];
}

export default useSessionStorage;
