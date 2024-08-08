import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <title>Wigan Central Masjid</title>
        <meta name="description" content="Wigan Central Masjid & Community Centre, by Create Next App" />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}