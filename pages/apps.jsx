import Head from 'next/head'

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";

import dynamic from 'next/dynamic';
const  Appbar = dynamic(() => import('../components/appbar/Appbar'), { ssr: false })
const  ListCard = dynamic(() => import('../components/Cards/listCard/ListCard'), { ssr: false })
const  ListRoute = dynamic(() => import('../components/route/ListRoute'), { ssr: false })
const  Search = dynamic(() => import('../components/search/Search'), { ssr: false })
const  Store = dynamic(() => import('../components/Cards/listCard/Stores'), { ssr: false })
const  Footer = dynamic(() => import('../components/Cards/listCard/Footer'), { ssr: false })

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
   }, []);
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
 }, []);
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
 }, []);
topPosts
// fetch news
useEffect(() => {
  const fetchVideo = async () => {
    const response = await fetch("api/apps", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
setNewsPosts(responseData);
    setHandlePost(false);
    setUseSSRPosts(false);
  };

  fetchVideo();
}, []);
NewsPosts
  // extract the first h1 tag from the content, if it exists
  let h1Text
  const firstPost = NewsPosts[0];
  if (firstPost && firstPost.content) {
    const content = firstPost.content;
    const h1 = new DOMParser().parseFromString(content, 'text/html')
                 .querySelector('h1');
     h1Text = h1 ? h1.textContent : null;
    console.log(h1Text);
  }



  return (
    <div className='home'>
    <Head>
      <title>{h1Text}</title>
      <meta name="description" content="Find the latest top stories, softwares, and popular stores on UnboxDesk - your go-to source for technology news and reviews." />
      <meta name="keywords" content="UnboxDesk, technology news, software, popular stores" />
      <meta name="author" content="Peh Joseph" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href="https://www.unboxdesk.com/apps" />
    </Head>
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
            <h2>Top Stories</h2>
            {topPosts?.map((post) => (
              <ListCard
                content={post.content}
                img={post.image}
                key={post._id}
                post={post}
              />
            ))}
          </div>
        </div>
        <div className='middle'>
          <div className='home_list'>
            <h2>Softwares</h2>
            <div className='videodisp'>
              {NewsPosts?.map((post) => (
                <ProductCard
                  content={post.content}
                  img={post.image}
                  key={post._id}
                  post={post}
                  price={post.price}
                  btn="Buy"
                />
              ))}
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='home_list'>
            <h2>Popular Stores</h2>
            {StorePosts?.map((post) => (
              <Store
                content={post.content}
                img={post.image}
                key={post._id}
                post={post}
              />
            ))}
          </div>
        </div>
      </div> 
    </div> 
    <Footer/>       
  </div>
  
  )
}

export default Home