import { ProductInterface } from '@/app/types';

export interface CartItemInterface {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

export interface CategoryPagePropsInterface {
    title: string,
    products: ProductInterface[];
}

