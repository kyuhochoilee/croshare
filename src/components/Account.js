import React from 'react';
import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HomePost from './HomePost';
import { Link } from 'react-router-dom';


const Account = () => {
    return (
      <>
        <p>account page</p>
        <div className="fixed inset-x-0 bottom-0">  
            <Navigation />
        </div>
      </>
    );
  }
  
  export default Account;
  