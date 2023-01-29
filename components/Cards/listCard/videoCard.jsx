import React from 'react';
import { Player } from 'video-react';
import { useRouter } from 'next/router';
function VideoCard({poster,video,content,post}) {
  // open post
const router = useRouter();

const openPost = (id) => {
  router.push({ pathname: '/details',query: { id }});

};
  return (
    <div className='video' >
           <div className='video_vid'>
           <Player
      playsInline
      poster={poster}
      src={video}
    />
        
        </div>
        <div className='video_content' onClick={() => openPost(post._id)}>
        <div className='cont' dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
  )
}

export default VideoCard