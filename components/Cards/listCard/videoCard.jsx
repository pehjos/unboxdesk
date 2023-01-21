import React from 'react';
import { Player } from 'video-react';

function videoCard({poster,video,content}) {
  return (
    <div className='video'>
           <div className='video_vid'>
           <Player
      playsInline
      poster={poster}
      src={video}
    />
        
        </div>
        <div className='video_content'>
        <div className='cont' dangerouslySetInnerHTML={{ __html: content}} />
        
        </div>
    </div>
  )
}

export default videoCard