'use client';

import { useEffect, useState } from 'react';
import { GET_IMAGES_BY_QUERY } from '@constants';

interface ImagesState {
    [key: string]: string;
}

interface UseFetchImagesResult {
    images: ImagesState;
    loading: boolean;
}

const useImagesCategories = (categories: string[]): UseFetchImagesResult => {
    const [images, setImages] = useState<ImagesState>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchImages = async () => {
            if (categories.length > 0) {
                try {
                    const categoriesURL = categories.join(',');
                    const url = `${GET_IMAGES_BY_QUERY}/?&categories=${encodeURIComponent(categoriesURL)}`;
                    const request = await fetch(url, { cache: 'force-cache' });
                    const fetchedImages: ImagesState = await request.json();
                    setImages(fetchedImages);
                } catch (error) {
                    console.error('Error fetching images:', error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchImages();
    }, [categories]);

    return { images, loading };
};

export default useImagesCategories;
