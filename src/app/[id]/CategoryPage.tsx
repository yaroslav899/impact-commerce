'use client';

import Breadcrumbs from '@components/Breadcrumbs';
import Title from '@components/Title';
import Text from '@/components/Text';
import ProductTile from '@components/plp/ProductTile';
import useSessionStorage from '@hooks/useSessionStorage';
import { CategoryPagePropsInterface, CartItemInterface } from './types';
import { ProductInterface } from '@/app/types';
import { basketStorageKey, defaultQuantity } from '@constants';
import styles from './CategoryPage.module.css';

export default function CategoryPage({ title, products }: CategoryPagePropsInterface) {
    const [data, setValue] = useSessionStorage<CartItemInterface[]>(basketStorageKey, []);

    const clickHandler = (product: ProductInterface) => {
        let updatedbasketData = [...data];
        const foundBasketProduct = updatedbasketData.find(basketProduct => basketProduct?.id === product?.id);

        if (foundBasketProduct) {
            foundBasketProduct.quantity += defaultQuantity;
        } else {
            const productData: CartItemInterface = {
                quantity: defaultQuantity,
                ...product
            };
            updatedbasketData = [...updatedbasketData, productData];
        }

        setValue(updatedbasketData);
    };

    return (
        <>
            <Breadcrumbs pages={[title]} />
            <div className={styles.header}>
                <Title title={title} />
                <Text text={`${products.length} products`} />
            </div>
            <div className={styles.productGrid}>
                {products.map((product) => (
                    <ProductTile key={product.id} product={product} clickHandler={() => clickHandler(product)} />
                ))}
            </div>
        </>
    );
}