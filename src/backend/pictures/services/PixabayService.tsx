import DefaultService from './DefaultService';
import { key } from './credentials/pixabay';
import { ImagesRequestData, ImagesResponseData } from './types';

// API - https://pixabay.com/api/docs/
class PixabayService extends DefaultService {
    private key: string;

    constructor() {
        super();
        this.key = key;
        this.apiUrl = 'https://pixabay.com/api/';
    }

    getUrl(perPage: number): string {
        const url = `${this.apiUrl}?key=${this.key}&per_page=${perPage}&q={{category}}`;

        return url;
    }

    async getImagesByCategories({
        categories,
        perPage
    }: ImagesRequestData): Promise<ImagesResponseData> {
        const data: ImagesResponseData = {};
        const url = this.getUrl(perPage);

        const fetchPromises = categories.map((category) => {
            const categoryUrl = url.replace('{{category}}', encodeURIComponent(category));

            return fetch(categoryUrl, {
                headers: {
                    'Cache-Control': 'max-age=14400'
                }
            }).then((response) => response.json());
        });

        const responses = await Promise.allSettled(fetchPromises);

        responses.forEach((response, i) => {
            if (response.status === 'fulfilled' && response?.value?.hits && response?.value?.hits?.length > 0) {
                data[categories[i]] = response?.value?.hits[0]?.webformatURL;
            } else {
                data[categories[i]] = '';
            }
        });

        return data;
    }
}

export default PixabayService;