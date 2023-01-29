import React from 'react'
import { useRouter } from 'next/router';
function ListCard({img,content,msg,storeimg,post}) {
  // open post
const router = useRouter();

const openPost = (id) => {
  router.push({ pathname: '/details',query: { id }});

};
  return (
    <div className='listCard1' onClick={() => openPost(post._id)}>
            <div className='listCard_image1'>
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