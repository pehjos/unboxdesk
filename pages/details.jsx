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


  return (
    <div className='details'>
  <Head>
  <title>{data.category}</title>
  <meta name="description" content="2023 products review |iphone |sumsung" />
  <meta property="og:title" content="This is the latest review blog post" />
  <meta property="og:description" content="Unboxdesk provide the latest review of apple products" />
  <meta property="og:url" content="https:/unboxdesk.com/news" />
  <meta property="og:type" content="website" />
 
</Head>
   <Appbar/>   
   <ListRoute/>
      <div className='details_content'>
     
      <div className='left_content'>
      <div className='left'>
     
{/* <img src={data.image}/> */}
{data.image !==""?(
<Magnifier
        width={"100%"}
        src={data.image}
      />):<video src={data.video} controls />
}
       <a href={data?.store_link}>
<div className='content_details'>
        <div dangerouslySetInnerHTML={{ __html: data?.content}} /> 
        <h2>price:{data.price}</h2>
        </div>
      
<div className='source'>
  <p>Get the product with low price from </p>
  <img src={data?.storelogo_link}/>
</div>

</a>
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