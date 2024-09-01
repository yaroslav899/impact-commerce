class DefaultService {
    public apiUrl: string;
    public mock: boolean;

    constructor() {
        this.apiUrl = '';
        this.mock = false;
    }

    setMockMode(mock: boolean) {
        this.mock = mock;
    }
}

export default DefaultService;
