import React from 'react'

function ProductCard({img,url,btn,price,content}) {
  return (
    <div className='product_card'>
        
        <div className='product_card_cont'>
        <img src={img}/>

<p>{content}</p>

        
        </div>

  

    </div>
  )
}

export default ProductCard