import React from 'react'

function ListCard({img,content,msg,storeimg}) {
  return (
    <div className='listCard1'>
            <div className='listCard_image'>
        <img src={img}/>
        
        </div>
        <div className='listCard_content'>
        <div dangerouslySetInnerHTML={{ __html: content}} />
        </div>
        <div className='ft'>
          <p>{msg}</p>
          <img src={storeimg}/>
        </div>
    </div>
  )
}

export default ListCard