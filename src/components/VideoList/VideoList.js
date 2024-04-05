import React from 'react'
import './VideoList.scss'

const VideoList = (props) => {

  

  return (
    <div className='container'>
        <h1 className='title'>NEXT VIDEOS</h1>
        {props.videoList.map((video, index) => {

            return (
                <div className='videolist' key={video.id} onClick={()=>props.handleVideoChange(index)} >
                  <img className='videolist__image' src={video.image} />
                  <div>
                    <p className='videolist__title'>{video.title}</p>
                    <p className='videolist__channel'>{video.channel}</p>
                  </div>
                </div>
            )
        })}
    </div>
  )
}

export default VideoList