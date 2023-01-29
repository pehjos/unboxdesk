import React from 'react'
import { useRouter } from 'next/router';
function ListCard({img,content,post}) {
// open post
const router = useRouter();

  const openPost = (id) => {
    router.push({ pathname: '/details',query: { id }});

  };


  return (
    <div className='listCard' onClick={() => openPost(post._id)} >
            <div className='listCard_image'>
        <img src={img}/>
        
        </div>
        <div className='listCard_content'>
        <div dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
  )
}

export default ListCard