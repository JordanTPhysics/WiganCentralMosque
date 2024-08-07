import '../app/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
    <Head>
      <title>G Rate Places Dashboard</title>
      <meta name="description" content="Wigan Central Masjid & Community Centre, by Create Next App" />
      <link rel="icon" href="/resources/WCMLogo.jpeg" />

    </Head>
      <Component {...pageProps} />
    </>

  )
}