import React from 'react';
import Navigation from "../Navigation";
import { useState } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountPost = ({title, postPic, likes}) => {
    return (
      <>
        <div className='flex flex-col px-2 w-1/2'>
            <img className='w-full rounded-md object-cover h-35' src={postPic} alt=""></img>
            <div className='flex flex-row justify-between items-center pt-1'>
              <p className='text-sm' >{title}</p>
              <div className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faHeart} className="text-xs text-gray-700" />
                <p className='text-sm pl-1.5'>{likes}</p>
              </div>
            </div>
        </div>
      </>
    );
  }
  
  export default AccountPost;
  