
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
    <Head>
      <title>Wigan Central Masjid</title>
      <meta name="description" content="Wigan Central Masjid & Community Centre, by Create Next App" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

    </Head>
    <Header />
      <Component {...pageProps}/>
    <Footer />
    </div>

  )
}