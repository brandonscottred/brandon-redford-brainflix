import './HeroVideo.scss'
import { useParams } from 'react-router-dom';



function HeroVideo (props) {

    const currentVideo = props.videoProps

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video className='mainvideo__videoplayer' poster={currentVideo.image} controls  >
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
        </section>
    )
}

export default HeroVideo;