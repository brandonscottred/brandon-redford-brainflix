import './VideoUploadPage.scss'
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg'


function VideoUploadPage() {

    return (
        <>
          <div className='divider'></div>
          <div className='form'>
            <h1 className='form__title'>Upload Video</h1>
            <div className='form__thumbnail'>
                <h3 className='form__thumbnail-title'>VIDEO THUMBNAIL</h3>
                <img className='form__thumbnail-img' src={videoThumbnail}/>
            </div>
          </div>
        </>
    )
};

// do not have to do upload comments, click on 'upload' should do an alert or take you to seperate page with back button

export default VideoUploadPage;