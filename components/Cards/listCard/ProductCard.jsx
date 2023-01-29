import React from 'react'
import { useRouter } from 'next/router';
function ProductCard({img,url,post,btn,price,content}) {
  // open post
const router = useRouter();

const openPost = (id) => {
  router.push({ pathname: '/details',query: { id }});

};
  return (
    <div className='product_card' >
        
        <div className='product_card_cont' onClick={() => openPost(post._id)}>
        <img src={img||'https://drive.google.com/file/d/1vlVfW7lXPJ1W7Sml712kS9Hxwwr6fDRy/view?usp=share_link'} />

        <div className='cont' dangerouslySetInnerHTML={{ __html: content}} />

        
        </div>

        <div className='product_card_footer'>
        <p>{price}</p>
        <h3>{btn}</h3>



        
        </div>

    </div>
  )
}

export default ProductCard