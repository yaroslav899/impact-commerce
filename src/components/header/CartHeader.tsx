'use client';

import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { basketStorageKey } from '@constants';
import { CartProductItemInterface } from '@/app/cart/types';
import styles from './CartHeader.module.css';

export default function CartHeader() {
    const [cartCount, setCartCount] = useState<number>(0);

    const handleStorage = useCallback(() => {
        const storedCart = sessionStorage.getItem(basketStorageKey);

        if (storedCart) {
            try {
                const cart: CartProductItemInterface[] = JSON.parse(storedCart);
                const value = cart.reduce((acc, product) => acc + product?.quantity, 0);
                setCartCount(value);
            } catch (error) {
                console.error('Cart Header component', error);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartCount]);

    useEffect(() => {
        handleStorage();

        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
        };
    }, [handleStorage]);

    return (
        <Link href="/cart" className={styles.cartLink}>
            <ShoppingCartIcon />
            <span>{cartCount}</span>
        </Link>
    );
}
