
import { memo } from 'react';
import Price from '@/components/Price';
import Text from '@/components/Text';
import styles from './CartTotal.module.css';

interface CartTotalInterface {
    totalPrice: number;
}

const CartTotal = ({totalPrice}: CartTotalInterface ) => {
    return (
        <div className={styles.totalPrice}>
            <Text text={'Total Price:'} /> <Price price={totalPrice} currency={'$'} />
        </div>
    );
};

export default memo(CartTotal);
