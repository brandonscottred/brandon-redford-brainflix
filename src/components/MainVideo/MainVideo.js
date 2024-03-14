import './MainVideo.css'
import video from '../../data/videos.json'
import videoDetails from '../../data/video-details.json'
import likes from '../../assets/icons/likes.svg'
import views from '../../assets/icons/views.svg'


function MainVideo (props) {

    const currentVideo = props.videoProps

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video poster={currentVideo.image} controls className='videoplayer' >
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
            <h1 className='mainvideo__title'>
                BMX Rampage: 2021 Highlights
            </h1>
            <div className='mainvideo__icons'>
                <p>By Red Crow</p>

                <img src={views}/>
                <p>{currentVideo.views}</p>
                <img src={likes}/>
                <p>{currentVideo.likes}</p>
            </div>
            <p className='mainvideo__description'> On a gusty day in Southern Utah, a group of 25
                daring mountain bikers blew the doors off what
                is possible on two wheels, unleashing some of
                the biggest moments the sport has ever seen.
                While mother nature only allowed for one full run
                before the conditions made it impossible to ride,
                that was all that was needed for event veteran
                Kyle Strait, who won the event for the second
                time -- eight years after his first Red Cow
                Rampage title
            </p>
            
        </section>
    )
}

export default MainVideo;