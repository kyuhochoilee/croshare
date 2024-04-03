import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <>
        <div className="flex flex-row justify-between items-center w-full py-3 px-12 text-2xl bg-white">
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <FontAwesomeIcon icon={faUserGroup} />
          <Link to="/account">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </>
    );
  }
  
  export default Navigation;
  