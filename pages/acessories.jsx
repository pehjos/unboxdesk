import Head from 'next/head'
import Appbar from '../components/appbar/Appbar'
import ListCard from '../components/Cards/listCard/ListCard'
import ListRoute from '../components/route/ListRoute'
import Search from '../components/search/Search'
import {NextSeo} from 'next-seo';
import Store from '../components/Cards/listCard/Stores'
import Footer from '../components/Cards/listCard/Footer'

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
const  HeadlineCard = dynamic(() => import('../components/head/headCard'), { ssr: false })
import dynamic from 'next/dynamic';

const  ProductCard = dynamic(() => import('../components/Cards/listCard/ProductCard'), { ssr: false })
function Home({post}) {
   const [realtimePosts, setRealtimePosts] = useState([]);
   const [topPosts, settopPosts] = useState([]);
   const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
   const [videoPosts, setVideoPosts] = useState([]);
   const [StorePosts, setStorePosts] = useState([]);
   const [ApplePosts, setApplePosts] = useState([]);
   const [NewsPosts, setNewsPosts] = useState([]);
   const [handlePost, setHandlePost] = useRecoilState(handlePostState);

   useEffect(() => {
     const fetchPosts = async () => {
       const response = await fetch("/api/posts/", {
         method: "GET",
         headers: { "Content-Type": "application/json" },
       });
       const responseData = await response.json();
       setRealtimePosts(responseData);
       setHandlePost(false);
       setUseSSRPosts(false);
     };
 
     fetchPosts();
   }, [handlePost]);
   realtimePosts
//  console.log(realtimePosts,"posts")


// top stories
useEffect(() => {
   const fetchTop = async () => {
     const response = await fetch("api/top", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     });
     const responseData = await response.json();
 settopPosts(responseData);
     setHandlePost(false);
     setUseSSRPosts(false);
   };

   fetchTop();
 }, [handlePost]);
 topPosts



// fetch store
useEffect(() => {
   const fetchStore = async () => {
     const response = await fetch("api/store", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     });
     const responseData = await response.json();
 setStorePosts(responseData);
     setHandlePost(false);
     setUseSSRPosts(false);
   };

   fetchStore();
 }, [handlePost]);
topPosts
// fetch news
useEffect(() => {
  const fetchVideo = async () => {
    const response = await fetch("api/acessories", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
setNewsPosts(responseData);
    setHandlePost(false);
    setUseSSRPosts(false);
  };

  fetchVideo();
}, [handlePost]);
NewsPosts

  return (
    <>
    <div className='home'>
    <NextSeo
            title="buy auto parts review"
            description="best accessories cheap to buy for iphone"
            canonical="www.unboxdesk.com/acessories"
            openGraph={{
                type: 'article',
                article: {
                    publishedTime: '2022-06-21T23:04:13Z',
                    modifiedTime: '2022-01-21T18:04:43Z',
                    authors: [
                        'Peh Atta Joseph',
                        'Pehjos',
                    ],
                    tags: ['car', 'iphone', 'sumsung','tv', 'technology', 'tiktok'],
                },
                url: 'www.unboxdesk.com/acessories',
                images: {
                    url: 'https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/smallrig_3327_moft_x_snap_on_stand_1619786847_1636566.jpg',
                    width: 850,
                    height: 650,
                    alt: 'iphone cover',
                },
                site_name: 'unboxdesk'
            }}
        />
  <div>
      
    <Appbar/>
    <Search/>
    <div className='headflex'>
{/* head section breadcrum */}
  </div>
   
    <ListRoute/>
    <div className='home_center' >
     <div className='first_list'>
   <div className='home_list' >
      <p>TOP STORIES </p>
  { topPosts?.map((post) => <ListCard
 content={post.content} img={post.image} key={post._id} 
 post={post} />)

    }

</div>
</div>

  <div className='middle'>
<div className='home_list'>
   <p>ACCESSORIES </p>
   <div className='videodisp'>

   { NewsPosts?.map((post) => <ProductCard
 content={post.content} img={post.image} key={post._id} 
 post={post}
 price={post.price}
btn="Buy"
/>)
}

</div>
</div>

</div>


<div className='right'>
<div className='home_list'>
<p>POPULAR STORES </p>

{
StorePosts?.map((post) => <Store
 content={post.content} img={post.image} key={post._id} 


 post={post} />)

    }



</div>
</div>

</div> 
</div> 
<Footer/>       
</div>
</>
  )
}

export default Home