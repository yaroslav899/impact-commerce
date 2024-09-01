import { notFound } from 'next/navigation';
import CategoryPage from './CategoryPage';
import { GET_CATEGORY_API_URL } from '@constants';
import { ProductInterface } from '@/app/types';

export const revalidate = 14400;

async function fetchProductsFromCategory(id: string): Promise<ProductInterface[]> {
    const url = GET_CATEGORY_API_URL.replace('{{category}}', id);

    try {
        const request  = await fetch(url, { next: { revalidate: 14400 } });
        const response: ProductInterface[] = await request.json();

        return response;
    } catch (error) {
        return [];
    }
}

export default async function Page({ params }: { params: { id: string } }) {
    const products = await fetchProductsFromCategory(params?.id);

    if (!products || !products.length) {
        notFound();
    }
    const decodedCategoryID = decodeURI(params?.id);
    const title = decodedCategoryID.charAt(0).toUpperCase() + decodedCategoryID.slice(1);

    return <CategoryPage title={title} products={products} />;
}
