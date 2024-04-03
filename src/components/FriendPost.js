import React from 'react';
import Navigation from "./Navigation";
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'; 


const FriendPost = ({title, postPic, postTime, description, username, profilePic}) => {
    return (
      <>
        <div className='flex flex-col pt-4'>
            <img className='w-full rounded-md object-cover h-36' src={postPic} alt=""></img>
            <p className='text-gray-800 font-bold text-md pt-2'>{title}</p>
            <div className='flex flex-row justify-between py-2'>
                <div className='flex flex-row items-center bg-green-500 p-1.5 rounded-full w-28'>
                    <img src={profilePic} alt='' className='w-6 h-6 rounded-full' />
                    <p className='pl-2 text-sm text-white font-semibold'>{username}</p>
                </div>
                <div className='flex flex-row'>
                    <div className='flex items-center justify-center bg-green-500 p-1.5 w-8 h-8 rounded-full'>
                        <FontAwesomeIcon icon={faComment} className='text-white' />
                    </div>
                    <div className='px-1'></div>
                    <div className='flex items-center justify-center  bg-green-500 p-1.5 w-8 h-8 rounded-full'>
                        <FontAwesomeIcon icon={faHeart} className='text-white' />
                    </div>
                </div>
            </div>
            <p className='text-sm'>{description}</p>
            <div className='border-t border-gray-400 w-full my-2'></div>
        </div>
      </>
    );
  }
  
  export default FriendPost;
  