
import { memo } from 'react';
import { placeholderImage } from '@constants';

interface ProductTileImageInterface {
    image: string;
    className: string;
}

const ProductTileImage = ({image, className}: ProductTileImageInterface) => {
    return (
        <div
            className={className}
            style={{ backgroundImage: `url(${image || placeholderImage})` }}
        >
        </div>
    );
};

export default memo(ProductTileImage);
