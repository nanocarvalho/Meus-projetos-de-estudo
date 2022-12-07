import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover' />
        <meta name="language" content="en" />
        <title>LocalStorage database</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
