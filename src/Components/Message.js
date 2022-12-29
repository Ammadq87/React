import './Styles/Message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut, faThumbsUp, faHeart, faFaceLaughSquint, faFaceSurprise, faFaceFrown, faFaceAngry} from '@fortawesome/free-solid-svg-icons';

export const Message = (props) => {
    return (
        <div className='message'>
          <div className='userInfo'>
            
            {
              !props.message.sentPrev && 
              <div className='header'>
                <div className='profilePic' style={{border: `2px solid ${props.message.submitter.color}`}}>
                  <FontAwesomeIcon icon={faUserAstronaut} />
                </div>
                <p className='username' style={{color: props.message.submitter.color}}>{props.message.submitter.name}</p>
                <p className='date-time'>{props.message.date}</p>
              </div> 
            }

          </div>
          
          <div className='message-content'>
            <div>{props.message.content}</div>
            <div className='actions'>
              <button><FontAwesomeIcon style={{color: 'gold', marginRight: '0px'}} title='Like' icon={faThumbsUp} /></button>
              <button><FontAwesomeIcon style={{color: 'red', marginRight: '0px'}} title='Heart' icon={faHeart} /></button>
              <button><FontAwesomeIcon style={{color: 'gold', marginRight: '0px'}} title='Laugh' icon={faFaceLaughSquint} /></button>
              <button><FontAwesomeIcon style={{color: 'gold', marginRight: '0px'}} title='Surprise' icon={faFaceSurprise} /></button>
              <button><FontAwesomeIcon style={{color: 'gold', marginRight: '0px'}} title='Sad' icon={faFaceFrown} /></button>
              <button><FontAwesomeIcon style={{color: 'gold', marginRight: '0px'}} title='Angry' icon={faFaceAngry} /></button>
            </div>
          </div>

          <div className='reactions'>
            <p><FontAwesomeIcon style={{color: 'gold', fontSize: '15px', marginRight: '3px'}} title='Like' icon={faThumbsUp} /> 1</p>
          </div>

        </div>
    )
}
