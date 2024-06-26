import Head from 'next/head'
import Appbar from '../../components/appbar/Appbar'
import ListCard from '../../components/Cards/listCard/ListCard'
import AppleList from '../../components/Cards/listCard/AppleList'
import ListRoute from '../../components/route/ListRoute'
import Search from '../../components/search/Search'
import VideoCard from '../../components/Cards/listCard/videoCard'
import MenuCard from '../../components/Cards/listCard/MenuCard'
import BrandCard from '../../components/Cards/listCard/Brands'
import ImageCard from '../../components/Cards/listCard/ProductImage'
import Store from '../../components/Cards/listCard/Stores'
import Footer from '../../components/Cards/listCard/Footer'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import AdBanner from '../../components/Cards/listCard/AdsBanner'
import { handlePostState, useSSRPostsState } from "../../atoms/postAtom";
const  HeadlineCard = dynamic(() => import('../../components/head/headCard'), { ssr: false })
import dynamic from 'next/dynamic';

const  ProductCard = dynamic(() => import('../../components/Cards/listCard/ProductCard'), { ssr: false })
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
      <Head>Best Reviews</Head>  
  
      
    <Appbar/>
    <Search/>
    <div className='headflex'>

    {
realtimePosts?.map((post) => <HeadlineCard
 content={post.content} image={post.image} key={post._id} 
 name={post.name}
 type={post.category}
 post={post} />)

    }
       {/* <HeadlineCard
    image="https://m.media-amazon.com/images/I/7189iXimfWL.__AC_SY300_SX300_QL70_FMwebp_.jpg"
    /> */}
 
  </div>
   <div className='route_lis'>
    <ListRoute/>
    </div>
    {/*home center start  */}
   <div className='home_center' >
     {/* top stories */}
     <div className='first_list'>
   <div className='home_list' >
      <p>TOP STORIES </p>
  { topPosts?.map((post) => <ListCard
 content={post.content} img={post.image} key={post._id} 
 post={post} />)

    }

</div>
</div>
{/* top stories end */}

{/* middle starting */}

  <div className='middle'>
<div className='home_list'>
   <p>PRODUCTS </p>
 <MenuCard/>
</div>
<div className='home_list'>
   <p>TOP TRENDING PRODUCTS </p>
   <div className='videodisp'>

   { trendingPosts?.map((post) => <ProductCard
 content={post.content} img={post.image} key={post._id} 
 post={post}
 price={post.price}
btn="Buy"
/>)
}


</div>
<AdBanner
           data-ad-slot="6631234174"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
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
   {ApplePosts?.map((post) => <AppleList
 content={post.content} img={post.image} key={post._id} 
 post={post}


/>)
}
</div>


<div className='home_list'>
   <p>NEWS </p>
   <div className='videodisp'>
  { NewsPosts?.map((post) => <ImageCard
 content={post.content} img={post.image} key={post._id} 
 post={post}
/>)

    }


</div>
   </div>
</div>


{/* middle end */}

{/* right starting */}
<div className='right'>
<div className='home_list'>
<p>POPULAR STORES </p>

{
StorePosts?.map((post) => <Store
 content={post.content} img={post.image} key={post._id} 

 storeimg={post.storelogo_link}
 post={post} />)

    }



</div>
</div>
{/* right end */}

</div> 
{/* home center end */}

<Footer/>       
</div>
  )
}

export default Home