import { Container } from '@mui/material';
import Link from 'next/link';
import styles from './layout.module.css';

export default function Layout({ children, image }) {
    return <div className="container">
      <div className={styles.header} style={{backgroundImage: `url("${image}")`}}></div>
      <h2>
        <Link href="/">
          <a>&lt; Back home</a>
        </Link>
      </h2>
      <Container maxWidth="sm">
        {children}
      </Container>
    </div>;
}