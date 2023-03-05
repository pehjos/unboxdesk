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
        <meta name="description" content={data.content.replaceAll(/<\/?[^>]+(>|$)/gi, "")} />
        <meta name="keywords" content="Unboxdesk,Iphone, computers" />
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
         <a href={data?.store_link}>
      <button className='downloadBtn'>Buy Now</button>
      </a>
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