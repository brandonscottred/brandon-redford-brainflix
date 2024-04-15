import './Comments.scss'
import likes from '../../assets/icons/likes.svg'
import views from '../../assets/icons/views.svg'
import avatar from '../../assets/images/Mohan-muruge.jpg'
import postComment from '../../assets/icons/add_comment.svg'

function formatDate(timestamp) {
  let toDate = new Date(timestamp).getDate();
  let toMonth = new Date(timestamp).getMonth()+1;
  let toYear = new Date(timestamp).getFullYear();
  let original_date = toMonth+'/'+toDate+'/'+toYear;
  return(original_date)
}


function Comments(props) {
  console.log('comments', props)

    const currentVideoComments = props.heroVideoInfo;
    console.log('currentVideoComments', currentVideoComments)


    return(
      <section className='comments'>
        <h1 className='comments-mainvideo__title'>{currentVideoComments.title}</h1>
        <div className='divider comments-mainvideo__divider'></div>  
        <div className='comments-mainvideo__icons'>
          <div id='icons-container'>
            <p className='comments-mainvideo__icons--channel'>By {currentVideoComments.channel}</p>
            <p className='comments-mainvideo__icons--date'>{formatDate(currentVideoComments.timestamp)}</p>
          </div>
          <div id='icons-container'>
            <div className='comments-mainvideo__icons--container'>
              <img className='comments-mainvideo__icons--views' src={views}/>
              <p className='comments-mainvideo__icons--views'>{currentVideoComments.views}</p>
            </div>
            <div className='comments-mainvideo__icons--container'>
              <img className='comments-mainvideo__icons--likes' src={likes}/>
              <p className='comments-mainvideo__icons--likes'>{currentVideoComments.likes}</p>
           </div>
          </div>
        </div>
        <div className='divider'></div>
        <p className='comments-mainvideo__description'>{currentVideoComments.description}</p> 
          <h3 className='comments__title'>
            3 Comments
          </h3>
          <div className='comments-container'>
            <img className='comments__avatar' src={avatar} />
            <form className="comments__form" id="commentsForm" action="" >
              <div id='label-text'>
                <label className="comments__form--label" htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea className="comments__form--comment" name="comment" id="comment" placeholder=" Add a new comment" type="text"></textarea>
              </div>
              <div className='comments__form--cta'>
                <img className='comments__form--cta-icon' src={postComment}/>
                <input className="comments__form--cta-comment" type="submit" value="COMMENT"/>
              </div>
            </form>
          </div>
          <div className="divider"></div>

          {props.comments.map((comments) => {
            return (
              <>
              <div className='comments__default'  key={comments.id} >
                <div className='comments__default--avatar'>
                  <img src=' ' />
                </div>
                <div className='comments__default--container'>
                  <div id='name-date'>
                    <p>{comments.name}</p>
                    <p>{formatDate(comments.timestamp)}</p>
                  </div>
                  <p>{comments.comment}</p>
                </div>
              </div>
              <div className='divider'></div>
              </>
            )
            })}
        </section>
    ) 
}

export default Comments