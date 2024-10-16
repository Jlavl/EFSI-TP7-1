// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/navbar.module.css';


const Navbar = () => {
return (
<div className={styles.navbar}>
    <h2>Navegación</h2>
    
    <text><Link href="/">Home</Link></text>
    <text><Link href="/productos">Productos</Link></text>
    <text><Link href="/detalleprod">detalleProd</Link></text>
    <text><Link href="/contacto">Contactanos</Link></text>
    
</div>
);
};

export default Navbar;