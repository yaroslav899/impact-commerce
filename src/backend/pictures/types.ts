/* eslint-disable no-unused-vars */
export interface Provider {
    getImagesByCategories: (categories: string[]) => Promise<any>;
}
