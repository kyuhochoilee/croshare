import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChartBar, faClock } from '@fortawesome/free-regular-svg-icons'; 
import { faUserPlus, faAlignCenter } from '@fortawesome/free-solid-svg-icons'; 

const HomePost = ({img, title, user, profilePic, rating, time, difficulty, stitch}) => {
    return (
      <>
        <div className='flex flex-col w-1/2 pb-4'>
            <div className="flex flex-col relative" style={{ height: '33.33vh' }}>
                <img src={img} alt='' className='object-cover h-full' />
                <div className='flex flex-row items-center'>
                    <div className='absolute bottom-0 left-2 transform translate-y-1/2 flex flex-row items-center bg-green-500 p-1.5 rounded-2xl'>
                        <img src={profilePic} alt='' className='w-7 h-7 rounded-full' />
                        <p className='pl-2 text-sm text-white font-semibold'>{user}</p>
                        <FontAwesomeIcon icon={faUserPlus} className='text-white pl-2' />
                    </div>
                    <div className='flex items-center justify-center absolute bottom-0 right-2 transform translate-y-1/2 bg-green-500 p-1.5 w-8 h-8 rounded-full'>
                        <FontAwesomeIcon icon={faHeart} className='text-white' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='relative flex flex-row items-center pt-8 px-4'>
                    <p className='absolute left-4 font-semibold'>{title}</p>
                    <p className='absolute right-4 font-semibold'>{rating}</p>
                </div>
                <div className='relative flex flex-row pt-6 px-4 justify-between text-xs'>
                    <div className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faClock} className='text-black mr-1.5' />
                        <p>{time}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faChartBar} className='text-black mr-1.5' />
                        <p>{difficulty}</p>
                    </div>
                    <div className='flex flex-row items-center'>
                        <FontAwesomeIcon icon={faAlignCenter} className='text-black mr-1.5' />
                        <p>{stitch} stiches</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default HomePost;
  