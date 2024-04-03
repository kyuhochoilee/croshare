import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HomePost from './HomePost';

const Home = () => {
    return (
      <>
        <div className='flex flex-col'>
            <div className="flex flex-row justify-between align-middle w-full">
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
            </div>
            <div className="flex flex-row justify-between align-middle w-full">
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
            </div>
        </div>  
      </>
    );
  }
  
  export default Home;
  