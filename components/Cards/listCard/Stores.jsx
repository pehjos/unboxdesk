import React from 'react'
import { useRouter } from 'next/router';
import {NextSeo} from 'next-seo';
import Image from 'next/image'
function ListCard({img,content,post}) {
// open post
const router = useRouter();

  const openPost = (id) => {
    router.push({ pathname: '/details',query: { id }});

  };


  return (
    <>
 
    <div className='listCard' onClick={() => openPost(post._id)} >
            <div className='listCard_image'>
        <Image width={900} height={900} src={img} alt="best product" placeholder="blur" blurDataURL={img}/>
        
        </div>
        <div className='listCard_content'>
        <div dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
    </>
  )
}

export default ListCard