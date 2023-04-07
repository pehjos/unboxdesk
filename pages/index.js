import Head from 'next/head';
import Home from '../views/home/Home';

export default function HomeLayout() {
  const pageTitle = 'unboxdesk';
  const pageDescription = 'Find the best deals on tech products';

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="tech, deals, products" />
        <meta name="author" content="Peh Joseph" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </Head>
      <div className="App">
        <Home />
      </div>
    </div>
  );
}
