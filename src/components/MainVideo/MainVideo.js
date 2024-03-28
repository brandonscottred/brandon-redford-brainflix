import './MainVideo.scss'


function MainVideo (props) {

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

export default MainVideo;