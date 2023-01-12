import React from 'react'

function ListCard({img,content}) {
  return (
    <div className='listCard'>
            <div className='listCard_image'>
        <img src={img}/>
        
        </div>
        <div className='listCard_content'>
        <p>{content}</p>
        
        </div>
    </div>
  )
}

export default ListCard