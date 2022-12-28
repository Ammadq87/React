import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Styles/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag, faBell, faThumbTack, faUserGroup } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

    return (
        <div className='navbar'>
            <div className='channel-title'>
                <FontAwesomeIcon icon={faHashtag} style={{color: 'darkgray', fontSize:'21px'}} />
                <p style={{display: 'inline', color: 'white'}}>channel</p>    
            </div>
            <div className='menu'>
                <Router>
                    <div>
                        <Link><FontAwesomeIcon id="navbar-icon" icon={faBell} style={{display: 'inline', marginRight: '20px', fontSize:'18px', color: 'white'}} /></Link>
                        <Link><FontAwesomeIcon id="navbar-icon" icon={faThumbTack} style={{display: 'inline', marginRight: '20px', fontSize:'18px', color: 'white'}} /></Link>
                        <Link><FontAwesomeIcon id="navbar-icon" icon={faUserGroup} style={{display: 'inline', marginRight: '20px', fontSize:'18px', color: 'white'}} /></Link>
                    </div>

                    <Routes>

                    </Routes>

                </Router>
            </div>

        </div>
    )
}