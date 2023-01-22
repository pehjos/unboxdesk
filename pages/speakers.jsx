import Head from 'next/head'
import Appbar from '../components/appbar/Appbar'
import ListCard from '../components/Cards/listCard/ListCard'
import ListRoute from '../components/route/ListRoute'
import Search from '../components/search/Search'
import VideoCard from '../components/Cards/listCard/videoCard'
import MenuCard from '../components/Cards/listCard/MenuCard'
import BrandCard from '../components/Cards/listCard/ProductImage'
import Store from '../components/Cards/listCard/Stores'
import Footer from '../components/Cards/listCard/Footer'
import ImageCard from '../components/Cards/listCard/ProductImage'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
const  HeadlineCard = dynamic(() => import('../components/head/headCard'), { ssr: false })
import dynamic from 'next/dynamic';

const  ProductCard = dynamic(() => import('../components/Cards/listCard/ProductCard'), { ssr: false })
function Home({post}) {
   const [realtimePosts, setRealtimePosts] = useState([]);
   const [topPosts, settopPosts] = useState([]);
   const [trendingPosts, setTrendingPosts] = useState([]);
   const [videoPosts, setVideoPosts] = useState([]);
   const [StorePosts, setStorePosts] = useState([]);
   const [ApplePosts, setApplePosts] = useState([]);
   const [NewsPosts, setNewsPosts] = useState([]);
   const [handlePost, setHandlePost] = useRecoilState(handlePostState);
   const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
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
// fetch Apple
useEffect(() => {
   const  fetchApple = async () => {
     const response = await fetch("api/apple", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     });
     const responseData = await response.json();
 setApplePosts(responseData);
     setHandlePost(false);
     setUseSSRPosts(false);
   };

   fetchApple();
 }, [handlePost]);
ApplePosts

// fetch Trending
useEffect(() => {
   const fetchTrend = async () => {
     const response = await fetch("api/trending", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     });
     const responseData = await response.json();
 setTrendingPosts(responseData);
     setHandlePost(false);
     setUseSSRPosts(false);
   };

   fetchTrend();
 }, [handlePost]);
topPosts
// fetch videos
useEffect(() => {
   const fetchvideo = async () => {
     const response = await fetch("api/video", {
       method: "GET",
       headers: { "Content-Type": "application/json" },
     });
     const responseData = await response.json();
 setVideoPosts(responseData);
     setHandlePost(false);
     setUseSSRPosts(false);
   };

   fetchvideo();
 }, [handlePost]);
videoPosts
// fetch news
useEffect(() => {
  const fetchVideo = async () => {
    const response = await fetch("api/news", {
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
    <div className='home'>
      <Head>Trending products on amazon</Head>  
  <div>
      
    <Appbar/>
    <Search/>
    <div className='headflex'>
{/* head section breadcrum */}
  </div>
   
    <ListRoute/>
   <div className='home_center' >
   <div className='home_list' >
      <p>TOP STORIES </p>
  { topPosts?.map((post) => <ListCard
 content={post.content} img={post.image} key={post._id} 
 post={post} />)

    }

<div className='home_list'>

</div>
</div>
<div>
<div className='home_list'>
   <p>SPEAKERS</p>
   <div className='videodisp'>

   { trendingPosts?.map((post) => <ProductCard
 content={post.content} img={post.image} key={post._id} 
 post={post}
 price={post.price}
btn="Buy"
/>)
}


</div>

</div>
<div className='home_list'>
   <p>VIDEO </p>
   <div className='videodisp'>

   { videoPosts?.map((post) => <VideoCard
 content={post.content} video={post.video} key={post._id} 
 post={post}
 poster={post.poster}

/>)
}
</div>
</div>
<div className='home_list'>
   <p>APPLE HOME </p>
   {ApplePosts?.map((post) => <ListCard
 content={post.content} img={post.image} key={post._id} 
 post={post}


/>)
}
</div>
<div className='home_list'>

 
</div>

<div className='home_list'>
   <p>NEWS </p>
   <div className='videodisp'>
  { NewsPosts?.map((post) => <ImageCard
 content={post.content} img={post.image} key={post._id} 
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
 content={post.content} img={post.img_link} key={post._id} 

 storeimg={post.storelogo_link}
 post={post} />)

    }



</div>
</div>
</div> 
</div> 
<Footer/>       
</div>
  )
}

export default Home