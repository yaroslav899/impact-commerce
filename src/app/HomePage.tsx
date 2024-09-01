'use client';

import Link from 'next/link';
import useImagesCategories from '@hooks/useImagesCategories';
import { HomePagePropsInterface } from './types';
import { placeholderImage } from '@constants';
import styles from './HomePage.module.css';

export default function HomePage({ categories }: HomePagePropsInterface) {
    const { images, loading } = useImagesCategories(categories);

    return (
        <div className={styles.tileContainer}>
            {categories.map((category) => (
                <Link
                    key={category}
                    href={`${encodeURIComponent(category.toLowerCase())}`}
                    className={styles.tile}
                    style={{
                        backgroundImage: loading
                            ? `url(${placeholderImage})`
                            : `url(${images[category] || placeholderImage})`
                    }}
                >
                    <div className={styles.tileContent}>
                        <h2>{category}</h2>
                    </div>
                </Link>
            ))}
        </div>
    );
}
