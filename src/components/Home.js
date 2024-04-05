import React from 'react';
import Navigation from "./Navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import HomePost from './HomePost';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <>
        <div className="fixed top-4 right-4 z-10 bg-amber-500 p-1.5 w-8 h-8 rounded-full flex items-center">  
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white mr-1.5' />
        </div>
        <div className='flex flex-col'>
            <div className="flex flex-row justify-between align-middle w-full">
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
            </div>
            <div className="flex flex-row justify-between align-middle w-full">
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
            </div>
            <div className="flex flex-row justify-between align-middle w-full">
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
                <HomePost className='h-1/3' img={'/awesomeHat.webp'} title={'Awesome Hat'} user={'quinnliu'} profilePic={'/quinnpfp.jpg'} rating={4.8} time={5} difficulty={'Easy'} stitch={3}/>
            </div>
        </div>
        
        <div className="fixed inset-x-0 bottom-0 z-20">  
            <Navigation />
        </div>
      </>
    );
  }
  
  export default Home;
  