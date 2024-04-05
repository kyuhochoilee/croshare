import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeart, faChartBar, faClock, faStar } from '@fortawesome/free-regular-svg-icons'; 
import { faUserPlus, faAlignCenter, faHeart as faSolidHeart, faAngleLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import HomePostDetails from "./HomePostDetails";
import { useState } from 'react';
import Navigation from './Navigation';

const HomePost = ({img, title, user, profilePic, rating, time, difficulty, stitch}) => {
    const [postClicked, setClicked] = useState(false);
    const [liked, setLiked] = useState(false);
    return (
      <>
        {!postClicked ? 
        (<div className='flex flex-col w-1/2 pb-4'>
        <div className="flex flex-col relative" style={{ height: '33.33vh' }}>
            <img src={img} alt='' className='object-cover h-full' onClick={() => setClicked(!postClicked)}/>
            <div className='flex flex-row items-center'>
                <Link to={'/account'} className='absolute bottom-0 left-2 transform translate-y-1/2 flex flex-row items-center bg-green-500 p-1.5 rounded-2xl z-10'>
                    <img src={profilePic} alt='' className='w-7 h-7 rounded-full' />
                    <p className='pl-2 text-sm text-white font-semibold'>{user}</p>
                    <FontAwesomeIcon icon={faUserPlus} className='text-white pl-2' />
                </Link>
                
                <div className='flex items-center justify-center absolute bottom-0 right-2 transform translate-y-1/2 bg-green-500 p-1.5 w-8 h-8 rounded-full' onClick={() => setLiked(!liked)}>
                    {liked ? (
                        <FontAwesomeIcon icon={faSolidHeart} className='text-white' />
                    ) :
                    (
                        <FontAwesomeIcon icon={faHeart} className='text-white' />
                    )}
                    
                </div>
            </div>
        </div>
            <div className='flex flex-col' onClick={() => setClicked(!postClicked)}>
                <div className='relative flex flex-row items-center pt-8 px-4'>
                    <p className='absolute left-4 font-semibold'>{title}</p>
                    <div className='absolute right-4 flex flex-row items-center text-sm'>
                        <FontAwesomeIcon icon={faStar} />
                        <p className='font-semibold pl-1'>{rating}</p>
                    </div>
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
        </div>) : 
        (
            <div className='absolute inset-0 z-50 bg-white'>
                <div className='flex flex-col items-center justify-center min-h-screen'>
                <div className='bg-amber-300 h-96 w-4/5 rounded-md flex flex-col items-start justify-start'>
                    <FontAwesomeIcon className='text-2xl p-4' onClick={() => setClicked(!postClicked)} icon={faAngleLeft}/>
                    <p>{difficulty}</p>
                </div>
                    <div className="fixed inset-x-0 bottom-0 z-20">  
                        <Navigation />
                    </div>
                </div>
            </div>
        )}
      </>
    );
  }
  
  export default HomePost;
  