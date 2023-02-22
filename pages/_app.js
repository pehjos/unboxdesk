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
     <DefaultSeo
                title="Best Gadget Review - Best Products & Services Buying Guides & Ratings"
                description="Gadget Review is a resource for the best electronics, appliances and services for your home. Our reviews are based on research and hand's-on testing."
                openGraph={{
                    type: 'website',
                    locale: 'en_US',
                    url: 'https://www.unboxdesk.com/',
                    siteName: 'unboxdesk',
                }}
                twitter={{
                    handle: '@pehjos',
                    site: '@unboxdesk.com',
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
