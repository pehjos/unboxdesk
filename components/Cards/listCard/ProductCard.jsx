import React from 'react'

function ProductCard({img,url,btn,price,content}) {
  return (
    <div className='product_card'>
        
        <div className='product_card_cont'>
        <img src={img}/>

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