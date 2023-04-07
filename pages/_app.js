import '../styles/globals.css'
import "../node_modules/video-react/dist/video-react.css"; // import css
import "../node_modules/react-quill/dist/quill.snow.css";
import '../styles/nav.css'
import { ThemeProvider } from 'next-themes';
import Head from 'next/head'
import '../styles/search.css'
import '../styles/listcard.css'
import '../styles/menucard.css'
import '../styles/details.css'
import '../styles/menucard.css'
import '../styles/productcard.css'
import '../styles/route.css'
import '../styles/footer.css'
import {DefaultSeo} from 'next-seo';

import '../styles/form.css'
import '../styles/videocard.css'

import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Unboxdesk - Your Ultimate Guide to the Best Gadgets and Electronics</title>
      </Head>
      
      <DefaultSeo
        title="Unboxdesk - Your Ultimate Guide to the Best Gadgets and Electronics"
        description="Unboxdesk is your go-to resource for the latest and greatest gadgets, electronics, and appliances for your home. Discover expert reviews, buying guides, and top-rated products to take your home to the next level."
        canonical="https://www.unboxdesk.com/"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.unboxdesk.com/',
          site_name: 'Unboxdesk',
          images: [
            {
              url: 'https://www.unboxdesk.com/images/og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Unboxdesk - Your Ultimate Guide to the Best Gadgets and Electronics',
            },
          ],
        }}
        twitter={{
          handle: '@unboxdesk',
          site: '@unboxdesk',
          cardType: 'summary_large_image',
        }}
      />
         
      <ThemeProvider>
        <RecoilRoot>
          <ChakraProvider>
            <Component {...pageProps} />
          </ChakraProvider>
        </RecoilRoot>
      </ThemeProvider>
    </>
  )
}

export default MyApp
