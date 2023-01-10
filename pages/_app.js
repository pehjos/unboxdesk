import '../styles/globals.css'

import '../styles/nav.css'

import '../styles/search.css'
import '../styles/route.css'
import { NextSeo } from "next-seo";

import '../styles/home.css'
import '../styles/form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/accodion.css'
import { ChakraProvider } from '@chakra-ui/react'
import { RecoilRoot } from "recoil";
function MyApp({ Component, pageProps }) {

  return(
    <RecoilRoot>
    <ChakraProvider>
        
   <Component {...pageProps} />
   </ChakraProvider>
   </RecoilRoot>
  )
}

export default MyApp
