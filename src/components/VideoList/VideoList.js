import React from 'react'
import './VideoList.scss'
import { Link } from 'react-router-dom';


const VideoList = (props) => {

  return (
    <div className='container'>
        <h1 className='title'>NEXT VIDEOS</h1>

        {props.videoList.map((video) => {

            return (
              <Link to={`/video/${video.id}`} >
                <div className='videolist' key={video.id} >
                  <img className='videolist__image' src={video.image} />
                  <div>
                    <p className='videolist__title'>{video.title}</p>
                    <p className='videolist__channel'>{video.channel}</p>
                  </div>
                </div>
              </Link>
            )
        })}
        
    </div>
  )
}

export default VideoList