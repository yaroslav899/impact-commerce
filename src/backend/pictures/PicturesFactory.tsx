import PixabayProvider from '@backend/pictures/providers/PixabayProvider';
import DefaultProvider from '@backend/pictures/providers/DefaultProvider';

import { Provider } from '@/backend/pictures/types';

class PicturesFactory {
    static createProvider(type: string): Provider {
        switch (type) {
        case 'pixabay':
            return new PixabayProvider();
        default:
            return new DefaultProvider();
        }
    }
}

export default PicturesFactory;
