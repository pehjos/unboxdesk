import '../styles/globals.css'
import "../node_modules/video-react/dist/video-react.css"; // import css
import '../styles/nav.css'
import { ThemeProvider } from 'next-themes';
import '../styles/search.css'
import '../styles/listcard.css'
import '../styles/menucard.css'
import '../styles/productcard.css'
import '../styles/route.css'
import { NextSeo } from "next-seo";

import '../styles/home.css'
import '../styles/form.css'
import '../styles/videocard.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/accodion.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {

  return(
    <>
    <NextSeo
        title="Best tech reviews for 2023"
        titleTemplate="review gadget 2023"
        defaultTitle="Technology news and release"
        description="The number one stop for reviewing your gadget before buying them in 2023"
        canonical="unboxdesk.com"
        openGraph={{
          url: "unboxdesk.com",
          title: "unbox your new device with reviews",
          description: "unboxdesk provide news feed for latest technology news you need to know",
          images: [
            {
              url: "https://cdn.mos.cms.futurecdn.net/JMZ7CUFKVmQvdCYaxVrkWa-970-80.jpeg.webp",
              width: 800,
              height: 420,
              alt: "iphone",
            },
          ],
        }}
        twitter={{
          handle: "@pehjos",
          site: "hookwal.com",
          cardType: "hookwal from @Pehjos Inc",
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
