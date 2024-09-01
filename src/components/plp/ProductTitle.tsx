import { memo } from 'react';

interface ProductTitleInterface {
    title: string;
}

const ProductTitle = ({title}: ProductTitleInterface) => {
    return <h3>{title}</h3>;
};

export default memo(ProductTitle);