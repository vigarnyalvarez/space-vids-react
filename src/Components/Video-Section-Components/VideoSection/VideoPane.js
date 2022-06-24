import React from 'react'
import './video-pane.css'

const VideoPane = ({ name, location }) => {
  return (
    <div className='flex flex-column ma3'>
      <span className='f2 ma2'>{name}</span>
      <video className="h5 w5-xs" controls >
            <source src={location} type="video/mp4"/>
      </video>
    </div>
  );
};

export default VideoPane;