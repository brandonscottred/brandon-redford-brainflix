import './HeroVideo.scss'

function HeroVideo (props) {

    const currentVideo = props.heroVideo

    return (
        <section className='mainvideo'>
            <div className='videoplayer-wrapper'>
                <video className='mainvideo__videoplayer'poster={currentVideo?.image} controls  >
                    Your Browser Does Not Support Video File Type
                </video>
            </div>
        </section>
    )
}

export default HeroVideo;