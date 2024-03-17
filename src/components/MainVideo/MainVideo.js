import './MainVideo.scss'

import likes from '../../assets/icons/likes.svg'
import views from '../../assets/icons/views.svg'



function formatDate(timestamp) {
    let toDate = new Date(timestamp).getDate();
    let toMonth = new Date(timestamp).getMonth()+1;
    let toYear = new Date(timestamp).getFullYear();
    let original_date = toMonth+'/'+toDate+'/'+toYear;
    return(original_date)
}

function MainVideo (props) {

    const currentVideo = props.videoProps

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video className='mainvideo__videoplayer' poster={currentVideo.image} controls  >
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
            <h1 className='mainvideo__title'>{currentVideo.title}</h1>
            <div className='divider mainvideo__divider'></div>
            <div className='mainvideo__icons'>
                <div id='icons-container'>
                    <p className='mainvideo__icons--channel'>By {currentVideo.channel}</p>
                    <p className='mainvideo__icons--date'>{formatDate(currentVideo.timestamp)}</p>
                </div>
                <div id='icons-container'>
                    <div className='mainvideo__icons--container'>
                    <img className='mainvideo__icons--views' src={views}/>
                    <p className='mainvideo__icons--views'>{currentVideo.views}</p>
                    </div>
                    
                    <div className='mainvideo__icons--container'>
                    <img className='mainvideo__icons--likes' src={likes}/>
                    <p className='mainvideo__icons--likes'>{currentVideo.likes}</p>
                    </div>
                </div>


            </div>
            <div className='divider'></div>
            <p className='mainvideo__description'>{currentVideo.description}</p>   
        </section>
    )
}

export default MainVideo;