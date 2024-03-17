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
          <img className='comments__avatar' src={avatar} />
          <form id="commentsForm" action="" class="comments__form">
            <label className="comments__form--label" for="Comment">JOIN THE CONVERSATION</label>
            <textarea className="comments__form--comment" name="Comment" id="" cols="30" rows="10" placeholder=" Add a new comment" type="text"></textarea>
            <input className="comments__form--cta" type="submit" value="COMMENT"/>
            <div className="divider"></div>
          </form>

          {props.videoPropsComments.map((comments) => {
            console.log(props.videoPropsComments);
            return (
              <div className='comments__default'>
              <img src={''} />
              <p>{comments.name}</p>
              <p>{formatDate(comments.timestamp)}</p>
              <p>{comments.comment}</p>
              <div className='divider'></div>
              </div>
            )
            })}


        </section>
    ) 
}

export default Comments