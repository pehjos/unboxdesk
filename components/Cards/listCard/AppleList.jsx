import React from 'react'

function ListCard({img,content}) {
  return (
    <div className='listCard2'>
            <div className='listCard_image'>
        <img src={img}/>
        
        </div>
        <div className='listCard_content2'>
        <div dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
  )
}

export default ListCard