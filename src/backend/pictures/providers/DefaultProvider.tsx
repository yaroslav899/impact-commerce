class DefaultProvider {
    public service: any;

    constructor() {
        this.service = null;
    }

    // eslint-disable-next-line no-unused-vars
    async getImagesByCategories(categories: string[]): Promise<any> {
        return {};
    }
}

export default DefaultProvider;
