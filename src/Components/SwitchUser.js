import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import './Styles/SwitchUser.css'

export const SwitchUser = (props) => {
    return (
        <div className='switch-user-box'>
            {props.users.map((u) => {
                return (
                    <div className='option'>
                        <FontAwesomeIcon id='icon' style={{color: u.color}} icon={faGamepad}/>

                        <button onClick={() => {props.value(u); props.setShowOptions()}}><p style={{color: u.color}}>{u.name}</p></button>
                    </div>
                );
            })}
        </div>
    )
}