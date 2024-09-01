import CartHeader from '@components/header/CartHeader';
import HeaderLogo from '@components/header/HeaderLogo';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <CartHeader />
        </header>
    );
}
