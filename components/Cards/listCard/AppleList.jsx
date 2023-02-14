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
    <>
    <NextSeo
            title={content.replaceAll(/<\/?[^>]+(>|$)/gi, "")}
            description={content.replaceAll(/<\/?[^>]+(>|$)/gi, "")}
        
            openGraph={{
                type: 'article',
                article: {
          
                    authors: [
                        'unbodesk',
                        'Pehjos',
                    ],
                    tags: ['review', 'gadget', 'technology'],
                },
              
                images: {
                    url: img,
                    width: 850,
                    height: 650,
                    alt: img,
                },
                site_name: 'unboxdesk'
            }}
        />
    <div className='listCard' onClick={() => openPost(post._id)} >
            <div className='listCard_image'>
        <Image width={500} height={400} src={img} blurDataURL={img} placeholder="blur" alt="buy product"/>
        
        </div>
        <div className='listCard_content'>
        <div dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
    </>
  )
}

export default ListCard