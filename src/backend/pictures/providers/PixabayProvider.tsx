import DefaultProvider from './DefaultProvider';
import PixabayService from '../services/PixabayService';

class PixabayProvider extends DefaultProvider {
    private perPage: number;

    constructor() {
        super();
        this.perPage = 3; // minimum available value
        this.service = new PixabayService();
    }

    async getImagesByCategories(categories: string[]): Promise<any> {
        const images = await this.service.getImagesByCategories({
            categories: categories,
            perPage: this.perPage
        });

        return images;
    }
}

export default PixabayProvider;
