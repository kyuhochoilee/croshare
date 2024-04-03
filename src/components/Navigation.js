import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
    return (
      <>
        <div className="flex flex-row justify-between align-middle w-full p-4 text-3xl bg-white">
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faUserGroup} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </>
    );
  }
  
  export default Navigation;
  