import './MainVideo.css'
import video from '../../data/videos.json'
import videoDetails from '../../data/video-details.json'

function MainVideo () {

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video controls className='videoplayer' poster=''>
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
            <h1 className='mainvideo__title'>
                BMX Rampage: 2021 Highlights
            </h1>
            
        </section>
    )
}

export default MainVideo;