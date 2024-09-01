import Link from 'next/link';
import { memo } from 'react';
import Text from '@/components/Text';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
    pages: string[];
}

const Breadcrumbs = ({pages} : BreadcrumbsProps ) => {
    return (
        <nav className={styles.breadcrumbs}>
            <ul>
                <li>
                    <Link href='/'>
                        <Text text={'Home'} />
                    </Link>
                </li>
                {pages.map(page => (
                    <li key={page} aria-current="page">{page}</li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Breadcrumbs);
