import React from 'react';
import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import FriendPost from './FriendPost';

const FriendFeed = ({profilePic, username}) => {
    return (
      <>
        <div className='flex flex-col py-20 px-8'>
            <div className='fixed inset-x-8 top-0 bg-white'>
                <p className='text-2xl font-bold pt-8 pb-4'>Friends Feed</p>
            </div>     
            
            <FriendPost title={'Look at this cool hat I am making!'} postPic={'/awesomeHat.webp'} postTime={'45 min ago'} description={'I really like this hat. This hat is awesome. I really like the flames, I feel like lightning mcqueen.'} profilePic={'/quinnpfp.jpg'} username={'quinnliu'} />
            
            <FriendPost title={'Look at this cool hat I am making!'} postPic={'/awesomeHat.webp'} postTime={'45 min ago'} description={'I really like this hat. This hat is awesome. I really like the flames, I feel like lightning mcqueen.'} profilePic={'/quinnpfp.jpg'} username={'quinnliu'} />

            <FriendPost title={'Look at this cool hat I am making!'} postPic={'/awesomeHat.webp'} postTime={'45 min ago'} description={'I really like this hat. This hat is awesome. I really like the flames, I feel like lightning mcqueen.'} profilePic={'/quinnpfp.jpg'} username={'quinnliu'} />

            <FriendPost title={'Look at this cool hat I am making!'} postPic={'/awesomeHat.webp'} postTime={'45 min ago'} description={'I really like this hat. This hat is awesome. I really like the flames, I feel like lightning mcqueen.'} profilePic={'/quinnpfp.jpg'} username={'quinnliu'} />

        </div>
        <div className="fixed inset-x-0 bottom-0">  
          <Navigation />
        </div>
      </>
    );
  }
  
  export default FriendFeed;
  