import { memo } from 'react';
import { numberDigitsAfterDecimalPoint } from '@constants';

interface PriceInterface {
    price: number;
    currency: string,
}

const Price = ({price, currency}: PriceInterface) => {
    return <p>{currency} {price.toFixed(numberDigitsAfterDecimalPoint)}</p>;
};

export default memo(Price);
