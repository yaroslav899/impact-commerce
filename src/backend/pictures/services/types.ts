export interface ImageRequestData {
    category?: string,
    perPage?: number;
}

export interface ImagesRequestData {
    categories: string[];
    perPage: number;
}

export interface ImagesResponseData {
    [key: string]: string; // Changed to string to store a single webformatURL
}