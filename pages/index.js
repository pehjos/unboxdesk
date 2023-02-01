import Head from 'next/head'
import Home from '../views/home/Home'


export default function HomeLayout() {
  return (
    <div >
      <Head>
        <title>unboxdesk</title>
        <link
          rel="canonical"
          href="https://unboxdesk.com/"
          key="canonical"
        />
        <meta name="description" content="unboxdesk.com provides yoiu with the latest technology gadget information" />
        <link rel="icon" href="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.landing-big_2x.jpg" />

      </Head>
      <div className="App">
  <Home/>
    </div>
    </div>
  )
}
