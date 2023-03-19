import Head from 'next/head'
import Home from '../views/home/Home'

export default function HomeLayout() {
  return (
    <div >
  
  <Head>
        <title>Best Review - Best Products & Services Buying Guides & Ratings</title>
        <meta name="description" content="Gadget Review is a resource for the best electronics, appliances and services for your home. Our reviews are based on research and hand's-on testing." />
        <meta name="keywords" content="Unboxdesk,Iphone, computers" />
        <meta name="author" content="Peh Joseph" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.unboxdesk.com/" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1446397159695121"
     crossorigin="anonymous"></script>
      </Head>
      <div className="App">
  <Home/>
    </div>
    </div>
  )
}
