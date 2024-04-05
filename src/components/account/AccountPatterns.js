import React from 'react';
import Navigation from "../Navigation";
import { useState } from 'react';
import AccountPost from './AccountPost';

const AccountPatterns = ({profilePic, username}) => {
    return (
      <>
        <div className='flex flex-col'>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/quinnpfp.jpg'}/>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/awesomeHat.webp'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/awesomeHat.webp'}/>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/quinnpfp.jpg'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/quinnpfp.jpg'}/>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/awesomeHat.webp'}/>
            </div>
            <div className='flex flex-row w-full justify-between px-8 pb-4 items-center'>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/awesomeHat.webp'}/>
              <AccountPost title={'lorum ipsum 2: the sequel'} postPic={'/quinnpfp.jpg'}/>
            </div>
        </div>
      </>
    );
  }
  
  export default AccountPatterns;
  