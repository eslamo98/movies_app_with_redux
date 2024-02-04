import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link to="/" className="logo">
            <div >Movie App</div>
        </Link>
        <div className="user-img">
        <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </header>
  )
}

export default Header