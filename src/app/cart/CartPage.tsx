'use client';

import { useState, useEffect, useMemo } from 'react';
import Title from '@components/Title';
import Text from '@components/Text';
import CartItem from '@components/cart/CartItem';
import CartTotal from '@components/cart/CartTotal';
import useSessionStorage from '@hooks/useSessionStorage';
import { basketStorageKey } from '@constants';
import { CartProductItemInterface } from '@/app/cart/types';
import styles from './CartPage.module.css';

export default function CartPage() {
    const [cart, setCart] = useState<CartProductItemInterface[]>([]);
    const [storedCart, setStoredCart] = useSessionStorage<CartProductItemInterface[]>(basketStorageKey, []);

    useEffect(() => {
        setCart(storedCart);
    }, [storedCart]);

    const removeHandler = (id: string) => {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);
        setStoredCart(updatedCart);
    };

    const quantityHandler = (id: string, newQuantity: number) => {
        const updatedCart = cart.map((product) =>
            product.id === id && newQuantity !== 0
                ? { ...product, quantity: newQuantity }
                : product
        );
        setCart(updatedCart);
        setStoredCart(updatedCart);
    };

    const totalPrice = useMemo(() => {
        return cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
    }, [cart]);

    return (
        <>
            <Title title={'Your Cart'} />
            <div className={styles.cartItems}>
                {cart.length === 0 ? (
                    <Text text={'Your cart is empty.'} />
                ) : (
                    cart.map((cartProduct) => (
                        <CartItem
                            key={cartProduct.id}
                            cartProduct={cartProduct}
                            quantityHandler={quantityHandler}
                            removeHandler={removeHandler} />
                    ))
                )}
            </div>
            <CartTotal totalPrice={totalPrice} />
        </>
    );
}