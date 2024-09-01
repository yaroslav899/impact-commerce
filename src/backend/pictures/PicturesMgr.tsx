import PicturesFactory from '@backend/pictures/PicturesFactory';
import { Provider } from '@/backend/pictures/types';

class PicturesMgr {
    private provider: Provider;

    constructor(providerType: string) {
        this.provider = PicturesFactory.createProvider(
            providerType,
        ) as Provider;
    }

    async getImagesByCategories(categories: string): Promise<any> {
        const categoriesData = categories.split(',') || [];
        let images: any[] = [];

        if (!categoriesData.length) {
            return images;
        }

        images = await this.provider.getImagesByCategories(categoriesData);

        return images;
    }

    static get(providerType: string): PicturesMgr {
        return new PicturesMgr(providerType);
    }
}

export default PicturesMgr;
