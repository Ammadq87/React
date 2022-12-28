import './Styles/Message.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut} from '@fortawesome/free-solid-svg-icons';

export const Message = (props) => {
    return (
        <div className='message'>
          <div className='userInfo'>
            
            {
              !props.message.sentPrev && 
              <div className='header'>
                <div className='profilePic' style={{border: `2px solid ${props.message.user.color}`}}>
                  <FontAwesomeIcon icon={faUserAstronaut} />
                </div>
                <p className='username' style={{color: props.message.user.color}}>{props.message.submitter}</p>
                <p className='date-time'>{props.message.date}</p>
              </div> 
            }

          </div>
          <div className='message-content'>
            <p>{props.message.content}</p>

          </div>
        </div>
    )
}