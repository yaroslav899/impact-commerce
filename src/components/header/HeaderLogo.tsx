import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@constants';
import styles from './HeaderLogo.module.css';

export default function HeaderLogo() {
    return (
        <div className={styles.logo}>
            <Link href="/">
                <Image
                    src={logo}
                    width={150}
                    height={25}
                    alt="Picture"
                    loading='lazy'
                    className={styles.logoImage}
                />
            </Link>
        </div>
    );
}
