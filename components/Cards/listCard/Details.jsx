
import Store from './Stores'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../../../atoms/postAtom";
function Home({post}) {
   const [topPosts, settopPosts] = useState([]);
   const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);
   const [StorePosts, setStorePosts] = useState([]);
   const [handlePost, setHandlePost] = useRecoilState(handlePostState);
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
  return (
    <div className='home_store'>
<div className='right'>
<div className='home_list'>

{
StorePosts?.map((post) => <Store
 content={post.content} img={post.image} key={post._id} 

 post={post} />)
    }
</div>
</div>     
</div>
  )
}
export default Home