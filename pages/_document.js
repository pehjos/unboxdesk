import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="Gadget Review is your go-to resource for the latest electronics, gadgets, appliances, and services. Our experts provide unbiased reviews, in-depth buying guides, and helpful tips to help you make informed decisions." />
          <link rel="shortcut icon" type="image/x-icon" href="/ub.jpg"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet"/>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XGZ66XTVNQ"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-XGZ66XTVNQ');
            `}
          </Script> 
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1446397159695121"
            crossOrigin="anonymous" strategy="lazyOnload"></script>  
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
