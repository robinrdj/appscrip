import Head from 'next/head';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta name="description" content="Browse curated quality products handcrafted for style and function." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className={styles.header}>
        <div className={styles.logo}>LOGO</div>
        <nav className={styles.nav}>
          <a href="#">Shop</a>
          <a href="#">Skills</a>
          <a href="#">Stories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main>
        <h1 className={styles.title}>DISCOVER OUR PRODUCTS</h1>
        <h2 className={styles.subtitle}>Curated picks made with care, creativity, and attention to detail.</h2>

        <section className={styles.grid}>
          {products.map(product => (
            <div className={styles.card} key={product.id}>
              <img src={product.image} alt={product.title} className={styles.image} />
              <h3 className={styles.name}>{product.title.slice(0, 30)}...</h3>
              <p className={styles.price}>${product.price}</p>
            </div>
          ))}
        </section>
      </main>

      <NewsletterSection />
      <Footer />
    </div>
  );
}
