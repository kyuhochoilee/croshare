import React from 'react';
import Navigation from "../Navigation";
import { useState } from 'react';

const AccountPost = ({title, postPic}) => {
    return (
      <>
        <div className='flex flex-col px-2 w-1/2'>
            <img className='w-full rounded-md object-cover h-35' src={postPic} alt=""></img>
            <p>{title}</p>
        </div>
      </>
    );
  }
  
  export default AccountPost;
  