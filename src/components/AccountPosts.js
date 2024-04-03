import React from 'react';
import Navigation from "./Navigation";
import { useState } from 'react';
import AccountPost from './AccountPost';

const AccountPosts = ({profilePic, username}) => {
    return (
      <>
        <div className='flex flex-col'>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
                <AccountPost title={'lorum ipsum'} postPic={'/awesomeHat.webp'}/>
                <AccountPost title={'lorum ipsum'} postPic={'/quinnpfp.jpg'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
                <AccountPost title={'lorum ipsum'} postPic={'/quinnpfp.jpg'}/>
                <AccountPost title={'lorum ipsum'} postPic={'/awesomeHat.webp'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
                <AccountPost title={'lorum ipsum'} postPic={'/awesomeHat.webp'}/>
                <AccountPost title={'lorum ipsum'} postPic={'/quinnpfp.jpg'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
                <AccountPost title={'lorum ipsum'} postPic={'/quinnpfp.jpg'}/>
                <AccountPost title={'lorum ipsum'} postPic={'/awesomeHat.webp'}/>
            </div>
        </div>
      </>
    );
  }
  
  export default AccountPosts;
  