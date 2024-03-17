import './Comments.scss'
import avatar from '../../assets/images/Mohan-muruge.jpg'


function formatDate(timestamp) {
  let toDate = new Date(timestamp).getDate();
  let toMonth = new Date(timestamp).getMonth()+1;
  let toYear = new Date(timestamp).getFullYear();
  let original_date = toMonth+'/'+toDate+'/'+toYear;
  return(original_date)
}


function Comments(props) {

    return(
        <section className='comments'>
          <h3 className='comments__title'>
            3 Comments
          </h3>
          <div className='comments-container'>
            <img className='comments__avatar' src={avatar} />
            <form className="comments__form" id="commentsForm" action="" >
              <div id='label-text'>
                <label className="comments__form--label" htmlFor="comment">JOIN THE CONVERSATION</label>
                <textarea className="comments__form--comment" name="Comment" id="comment" placeholder=" Add a new comment" type="text"></textarea>
              </div>
               <input className="comments__form--cta" type="submit" value="COMMENT"/>
            </form>
          </div>
          <div className="divider"></div>

          {props.videoPropsComments.map((comments) => {
            return (
              <>
              <div className='comments__default' key={comments.id} >
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