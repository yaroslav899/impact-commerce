import ProductTitle from '@components/plp/ProductTitle';
import Price from '@/components/Price';
import Text from '@/components/Text';
import ProductTileImage from '@components/plp/ProductTileImage';
import { CartProductItemInterface } from '@/app/cart/types';
import styles from './CartItem.module.css';

interface CartItemPropsInterface {
    cartProduct: CartProductItemInterface;
    // eslint-disable-next-line no-unused-vars
    quantityHandler: (id: string, newQuantity: number) => void;
    // eslint-disable-next-line no-unused-vars
    removeHandler: (id: string) => void;
}

export default function CartItem({ cartProduct, quantityHandler, removeHandler }: CartItemPropsInterface) {
    return (
        <div className={styles.cartItem}>
            <ProductTileImage image={cartProduct.image} className={styles.productImage} />
            <div className={styles.productDetails}>
                <ProductTitle title={cartProduct.title} />
                <Price price={cartProduct.price} currency={'$'} />
                <div className={styles.quantityControl}>
                    <button
                        onClick={() => {
                            quantityHandler(
                                cartProduct.id,
                                Math.max(1, cartProduct.quantity - 1)
                            );
                        }}
                    >
                        <Text text={'-'} />
                    </button>
                    <span>{cartProduct.quantity}</span>
                    <button
                        onClick={() => {
                            quantityHandler(
                                cartProduct.id,
                                cartProduct.quantity + 1
                            );
                        }}
                    >
                        <Text text={'+'} />
                    </button>
                </div>
                <button
                    onClick={() => removeHandler(cartProduct.id)}
                    className={styles.removeButton}
                >
                    <Text text={'Remove'} />
                </button>
            </div>
        </div>
    );
}
