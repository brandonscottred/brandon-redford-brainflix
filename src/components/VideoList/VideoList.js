import React from 'react'
import './VideoList.scss'
import { Link } from 'react-router-dom';


const VideoList = (props) => {

  return (
    <div className='container'>
        <h1 className='title'>NEXT VIDEOS</h1>

        {props.videoList.map((video) => {

            return (
              <Link className='link' to={`/video/${video.id}`} onClick={window.scroll(0,0)}>
                <div className='videolist' key={video.id} >
                  <img alt='' className='videolist__image' src={video.image} />
                  <div className='videolist__info'>
                    <p className='videolist__info--title'>{video.title}</p>
                    <p className='videolist__info--channel'>{video.channel}</p>
                  </div>
                </div>
              </Link>
            )
        })}
        
    </div>
  )
}

export default VideoList