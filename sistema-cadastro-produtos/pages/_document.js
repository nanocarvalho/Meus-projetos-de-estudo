import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* google fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
		    <meta name="language" content="pt-BR" />
		    <meta name="description" content="Portfólio do Nano Carvalho " />
		    <meta name="robots" content="all" />
		    <meta name="author" content="Nano Carvalho" />
		    <meta name="keywords" content="portfolio, projetos, frontend" />
		    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 220">
          <path fill="#FFCE43" fill-opacity="1" d="M0,128L30,112C60,96,120,64,180,74.7C240,85,300,139,360,170.7C420,203,480,213,540,186.7C600,160,660,96,720,85.3C780,75,840,117,900,122.7C960,128,1020,96,1080,85.3C1140,75,1200,85,1260,112C1320,139,1380,181,1410,202.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
        </svg>
      </body>
    </Html>
  )
}