import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto mt-4">
      <Head>
        <title>BWAMICRO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Saya Halaman Utama</h1>
      </main>
    </div>
  );
}
