// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => {
return (
<div className={styles.sidebar}>
    <h2>Navegación</h2>
    
    <text ><Link href="/">Home</Link></text>
    <text><Link href="/productos">Productos</Link></text>
    <text><Link href="/detalleprod">detalleProd</Link></text>
    <text><Link href="/contacto">Contactanos</Link></text>
    
</div>
);
};

export default Sidebar;