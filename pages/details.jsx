import React from 'react'
import Head from 'next/head'
import Footer from '../components/Cards/listCard/Footer'
import Appbar from '../components/appbar/Appbar'
import ListCard from '../components/Cards/listCard/ListCard'
import ListRoute from '../components/route/ListRoute'
import useSWR from 'swr'
import Magnifier from '../components/Cards/listCard/Magnifier'
import { useRouter } from 'next/router';
import Stores from '../components/Cards/listCard/Details'
const fetcher = (...args) => fetch(...args).then((res) => res.json())
function Details() { 
  
  const router = useRouter();
  const {id}  = router.query;
  console.log(id)
  const { data, error } = useSWR(`api/details/${id}`, fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
console.log(data,"booooom")
let h1Text
const firstPost = data;
if (firstPost && firstPost.content) {
  const content = firstPost.content;
  const h1 = new DOMParser().parseFromString(content, 'text/html')
               .querySelector('h1');
   h1Text = h1 ? h1.textContent : null;
  console.log(h1Text);
}



  return (
    <div className='details'>

<Head>
        <title>{h1Text}</title>
  

  <meta name="description" content="Unboxdesk is your one-stop shop for all electronics, including laptops, smartphones, cameras, and more. Shop our wide selection of products from top brands like Apple, Samsung, and Canon." />
  <meta name="keywords" content="Unboxdesk, electronics, laptops, smartphones, cameras, Apple, Samsung, Canon" />
  <meta name="author" content="Peh Joseph" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="canonical" href="https://www.unboxdesk.com/" />


      </Head>
   <Appbar/>   
   <ListRoute/>
      <div className='details_content'>
     
      <div className='left_content'>
      <div className='left'>
      <div className="magnifier">
{data.image !==""?(
 
<Magnifier 
        
        src={data.image}
      />):<video src={data.video} controls />
}
</div>
       {/* <a href={data?.store_link}> */}
<div className='content_details'>
        <div dangerouslySetInnerHTML={{ __html: data?.content}} /> 
         {/* <a href={data?.store_link}>
      <button className='downloadBtn'>Buy Now</button>
      </a> */}
        </div>
      
{/* <div className='source'>
  <p>Get the product with low price from </p>
  <img src={data?.storelogo_link}/>
</div> */}


</div>
</div>



<div className='details_right'>
<Stores/>
</div>
      </div>
      <Footer/>
    </div>
  )
}

export default Details