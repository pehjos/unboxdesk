import React from 'react'

function ProductCard({img,url,btn,price,content}) {
  return (
    <div className='product_card'>
        
        <div className='product_card_cont'>
        <img src={img}/>

        <div dangerouslySetInnerHTML={{ __html: content}} />

        
        </div>

  

    </div>
  )
}

export default ProductCard