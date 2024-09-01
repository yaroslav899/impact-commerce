import ProductTitle from '@components/plp/ProductTitle';
import ProductTileImage from '@components/plp/ProductTileImage';
import Price from '@/components/Price';
import Text from '@/components/Text';
import { ProductInterface } from '@/app/types';
import styles from './ProductTile.module.css';

type ClickHandler = () => void;

interface ProductTilePropsInterface {
    product: ProductInterface;
    clickHandler: ClickHandler;
}

export default function ProductTile({product, clickHandler}: ProductTilePropsInterface) {
    return (
        <div className={styles.productTile}>
            <ProductTileImage image={product.image} className={styles.productImage} />
            <div className={styles.productDetails}>
                <ProductTitle title={product.title} />
                <Price price={product.price} currency={'$'} />
                <button className={styles.addToCartButton} onClick={clickHandler}>
                    <Text text={'Add to Cart'} />
                </button>
            </div>
        </div>
    );
}
