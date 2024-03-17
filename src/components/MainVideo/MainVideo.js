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
    console.log(currentVideo.comments)

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video poster={currentVideo.image} controls className='videoplayer' >
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
            <h1 className='mainvideo__title'>{currentVideo.title}</h1>
            <div className='mainvideo__icons'>
                <p>By {currentVideo.channel}</p>
                <p>{formatDate(currentVideo.timestamp)}</p>
                <img src={views}/>
                <p>{currentVideo.views}</p>
                <img src={likes}/>
                <p>{currentVideo.likes}</p>
            </div>
            <p className='mainvideo__description'>{currentVideo.description}</p>   
        </section>
    )
}

export default MainVideo;