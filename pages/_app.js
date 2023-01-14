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
    <ThemeProvider>
    <RecoilRoot>
    <ChakraProvider>
 
   <Component {...pageProps} />
  
   </ChakraProvider>
   </RecoilRoot>
   </ThemeProvider>
  )
}

export default MyApp
