export type CategoriesResponseType = string[];

export interface HomePagePropsInterface {
    categories: string[];
}

export interface ProductInterface {
    category: string;
    description: string;
    id: string;
    image: string;
    price: number;
    rating: {
        rate: number;
        count: number;
    };
    title: string;
}
