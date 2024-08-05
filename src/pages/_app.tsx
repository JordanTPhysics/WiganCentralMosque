import '../app/styles/globals.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'
 
export default function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
    <Head>
      <title>Wigan Central Mosque</title>
      <meta name="description" content="Wigan Central Mosque & Community Centre, by Create Next App" />
      <link rel="icon" href="/resources/WCMLogo.jpeg" />

    </Head>
      <Component {...pageProps} />
    </>

  )
}