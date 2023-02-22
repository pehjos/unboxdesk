import Head from 'next/head'
import Home from '../views/home/Home'

import {NextSeo} from 'next-seo';
export default function HomeLayout() {
  return (
    <div >
  
     <NextSeo
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
      <Head>
            
      <link rel="shortcut icon" href="../assets/ub.jpg" />
        <title>Best Gadget Review - Best Products & Services Buying Guides & Ratings</title>
     
        <meta name="description" content="Gadget Review is a resource for the best electronics, appliances and services for your home. Our reviews are based on research and hand's-on testing." />
   
      </Head>
      <div className="App">
  <Home/>
    </div>
    </div>
  )
}
