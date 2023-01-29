import React from 'react'
import { useRouter } from 'next/router';
function ProductCard({img,url,btn,post,price,content}) {
  // open post
const router = useRouter();

const openPost = (id) => {
  router.push({ pathname: '/details',query: { id }});

};
  return (
    <div className='product_card' >
        
        <div className='product_card_cont' onClick={() => openPost(post._id)}>
        <img src={img} />

        <div dangerouslySetInnerHTML={{ __html: content}} />

        
        </div>

  

    </div>
  )
}

export default ProductCard