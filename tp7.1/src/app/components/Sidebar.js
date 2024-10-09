// components/Sidebar.js
import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';


const Sidebar = () => {
return (
<div className={styles.sidebar}>
    <h2>Navegación</h2>
    <ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/productos">Productos</Link></li>
    <li><Link href="/detalleprod">detalleProd</Link></li>
    <li><Link href="/contacto">Contactanos</Link></li>
    </ul>
</div>
);
};

export default Sidebar;