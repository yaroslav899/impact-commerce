import { NextResponse, NextRequest } from 'next/server';
import PicturesMgr from '@backend/pictures/PicturesMgr';

export const revalidate = 14400;

// Implementation to get random pictures by query data. small AI :)
export async function GET(req: NextRequest) {
    try {
        const requestUrl = req.nextUrl.searchParams;
        const categoriesQuery = requestUrl.get('categories') || '';

        if (!categoriesQuery.length) {
            throw new Error('query is empty');
        }

        const picturesProviderType = 'pixabay';
        const picturesMgr = PicturesMgr.get(picturesProviderType);
        const pictures = await picturesMgr.getImagesByCategories(categoriesQuery);
        const jsonResponse = NextResponse.json(pictures, {
            headers: {
                'Cache-Control': 'public, max-age=14400'
            }
        });

        return jsonResponse;
    } catch (error) {
        return NextResponse.json(
            { error: error },
            { status: 500 },
        );
    }
}
