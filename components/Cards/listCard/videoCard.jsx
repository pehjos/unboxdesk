import React from 'react';
import { Player } from 'video-react';

function videoCard() {
  return (
    <div className='video'>
           <div className='video_vid'>
           <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
        
        </div>
        <div className='video_content'>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
        
        </div>
    </div>
  )
}

export default videoCard