import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image'
function ProductCard({img,url,btn,post,price,content}) {
  // open post
const router = useRouter();

const openPost = (id) => {
  router.push({ pathname: '/details',query: { id }});

};
  return (
    <div className='product_card' >
        
        <div className='product_card_cont' onClick={() => openPost(post._id)}>
          <div className='img_sec'>
        <Image width={100} height={100} src={img} blurDataURL={img} placeholder="blur" alt="best reviews"/>

        <div className='text' dangerouslySetInnerHTML={{ __html: content}} />
        </div>
        
        </div>

  

    </div>
  )
}

export default ProductCard