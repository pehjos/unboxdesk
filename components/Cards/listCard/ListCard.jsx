import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
import {NextSeo} from 'next-seo';
function ListCard({img,content,post}) {
// open post
const router = useRouter();

  const openPost = (id) => {
    router.push({ pathname: '/details',query: { id }});

  };


  return (

    <div className='listCard' onClick={() => openPost(post._id)} >
            <div className='listCard_image'>
        <Image width={900} height={900} src={img} blurDataURL={img} placeholder="blur" alt="buy cheap"/>
        
        </div>
        <div className='listCard_content'>
        <h1 dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>

  )
}

export default ListCard