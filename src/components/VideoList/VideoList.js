import React from 'react'
import './VideoList.scss'

const VideoList = (props) => {

  

  return (
    <div>
        <h1>NEXT VIDEOS</h1>
        {props.videoList.map((video, index) => {

            return (
                <div key={video.id} onClick={()=>props.handleVideoChange(index)} className='videolist'>
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