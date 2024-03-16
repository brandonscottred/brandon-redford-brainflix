import './Comments.css'
import avatar from '../../assets/images/Mohan-muruge.jpg'


function Comments(props) {

    return(
        <>
          <h3 className='comments__title'>
            3 Comments
          </h3>
          <img className='comments__avatar' src={avatar} />
          <form id="commentsForm" action="" class="comments__form">
            <label className="comments__label" for="Comment">JOIN THE CONVERSATION</label>
            <textarea className="comments__comment" name="Comment" id="" cols="30" rows="10" placeholder=" Add a new comment" type="text"></textarea>
            <input className="comments__cta" type="submit" value="COMMENT"/>
            <div className="divider"></div>
          </form>
          <p>{props.comments}</p>

        </>
    ) 
}

export default Comments