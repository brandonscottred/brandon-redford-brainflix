import './VideoUploadPage.scss'
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import postComment from '../../assets/icons/publish.svg'
import axios from 'axios'


function VideoUploadPage() {

    const formRef = useRef();

    const handleSubmit = () => {
        const form = formRef.current;
        const title = form.title.value;
        const description = form.description.value;

        const data = {
            "title": title,
            "description": description
        }

        if (!title || !description) {
            alert('Please fill in both title and description values')
        } else {
        axios.post('http://localhost:8080/videos', data)
        alert('Congratulations, your video has been published!')
        }
    }

    return (
        <>
          <div className='divider'></div>
          <form className='form' ref={formRef}>
            <h1 className='form__title'>Upload Video</h1>
            <div className='divider'></div>
            <label className='form__label'>
                VIDEO THUMBNAIL  <img alt='' className='form__label--img' src={videoThumbnail}/>
            </label>
            <label className='form__label'>
                TITLE YOUR VIDEO <input className='form__label--title' type='text' name='title' placeholder='Add a title to your video' />
            </label>
            <label className='form__label'>
                ADD A VIDEO DESCTIPTION <textarea className='form__label--description' type='text' name='description' placeholder='Add a description to your video' />
            </label>
            <div className='divider'></div>
            <div className='form__btn'>
            <button className='form__btn--publish' type='button' onClick={handleSubmit}>PUBLISH</button>
            <img alt='' className='form__btn--icon' src={postComment}/>
            </div>
            <Link className='form__cancel' to='/'>
            <h2>CANCEL</h2>
            </Link>
          </form>
        </>
    )
};

export default VideoUploadPage;