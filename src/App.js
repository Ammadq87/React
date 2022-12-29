import './App.css';
import {UserModel} from './Models/UserModel';
import { Message } from './Components/Message';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faUserLarge, faFaceSmileBeam, faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Navbar } from './Components/Navbar';
import {SwitchUser} from './Components/SwitchUser'

const currentUsers = [new UserModel('millibyte','red'), new UserModel('OG original tamil', 'green'), new UserModel('short son-in-law', 'blue'), new UserModel('Stochastic Processes', 'indigo'), new UserModel('TheTamilThatActuallyKnowsTamil', 'yellow'), new UserModel('transgenderTamil', 'violet'), new UserModel('will have sex for pc', 'lime')];


function App() {

  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [currentUser, setCurrentUser] = useState(currentUsers[0]);
  const [showOptions, setShowOptions] = useState(false);
  const [reaction, setReaction] = useState({reaction: '', amount: 0});

  const getMessage = (event) => {
    setMessage(event.target.value);
  }

  const addToMessageList = () => {
    if (message !== undefined && message.trim().length > 0){
      setMessageList([...messageList, createMessageObj(message, messageList, currentUser)]);
    }
    let objDiv = document.getElementById('chatWindow');
    objDiv.scrollTop = objDiv.scrollHeight;
  }

  const showSwitchUserOption = () => {
    setShowOptions(!showOptions);
  }

  const getSelectedUser = (user) => {
    setCurrentUser(user);
  }

  const addReactionToMessage = (msg, reactionNumber) => {
    messageList.filter((m) => {
      
    })
  }

  return (
    <div className="App">
        <Navbar/>

      <div className='chatWindow' id='chatWindow'>
        <div className='intro-title'>
          <p id='icon'><FontAwesomeIcon id="hashtag" style={{fontSize: '30px'}} icon={faHashtag}/></p>
          <div id='title-header'>
            <p id='title'>Welcome to the #cs-tings</p>
            <p id='subMsg'>This is the start of the #cs-tings channel</p>          
          </div>
        </div>


      
        {messageList.map((msg) => {
          return <Message userInfo={currentUser} message={msg}/>
        })}
      
      </div>
      <div className='input-content'>
            <div className='avatarSwitch'>
                <button onClick={showSwitchUserOption}><FontAwesomeIcon style={{color: currentUser.color}} icon={faUserLarge}/></button>
                {
                  showOptions && 
                  <SwitchUser setShowOptions={showSwitchUserOption} users={currentUsers} value={getSelectedUser}/>
                }
            </div>
            <div className='messageInput'>
                <input onChange={getMessage} type='text' placeholder='Message #channel' className='input' id='input'/>
                <button  className='emoji-Btn'><FontAwesomeIcon icon={faFaceSmileBeam}/></button>
                <button onClick={addToMessageList} className='send-btn'><FontAwesomeIcon icon={faCircleChevronRight}/></button>
            </div>
        
        </div>
    </div>
  );
}

function createMessageObj (msg, messageList, currentUser) {

  /*
  reactions = [{reaction: '', amount: 0}]
  */

  const userObj = {
    content: msg,
    date: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()} at ${new Date().toLocaleTimeString()}`,
    submitter: currentUser,
    sentPrev: false,
    reactions: [],
    messageId: generateMessageId()
  };

  if (messageList.length > 0)
    userObj.sentPrev = messageList[messageList.length-1].submitter === userObj.submitter;

  return userObj;
}

function generateMessageId () {
  return parseInt(`${Math.random()}`.substring(2,11));
}

export default App;