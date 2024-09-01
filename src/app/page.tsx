import HomePage from './HomePage';
import { GET_ALL_CATEGORIES_API_URL } from '@constants';
import { CategoriesResponseType } from './types';

export const revalidate = 14400;

async function fetchCategories(): Promise<CategoriesResponseType> {
    try {
        const request  = await fetch(GET_ALL_CATEGORIES_API_URL, { next: { revalidate: 14400 } });
        const response: CategoriesResponseType = await request.json();

        return response;
    } catch (error) {
        return [];
    }
}

export default async function Page() {
    const categories = await fetchCategories();

    return <HomePage categories={categories}/>;
}
