import React from 'react';
import Navigation from "./Navigation";
import { useState } from "react";

const AddPost = () => {

    const [isPost, setPosts] = useState(true);

    return (
        <>
            <div className="fixed inset-x-8 top-0 bg-white">
                <p className="text-2xl font-bold pt-4 pb-3">Add Post</p>
            </div>
            <div className='flex flex-col items-center py-16'>
                <div onClick={() => setPosts(!isPost)}>
                    {isPost ? (
                        <div className="flex flex-row w-2/3 justify-between items-center">
                            <p className="bg-blue-300 py-1 px-8 rounded-l-md font-semibold text-white text-sm whitespace-nowrap">
                                Social Post
                            </p>
                            <p className="bg-gray-400 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm whitespace-nowrap">
                                Pattern
                            </p>
                        </div>
                    ) : (
                        <div className="flex flex-row w-2/3 justify-between align-center">
                            <p className="bg-gray-400 py-1 px-8 rounded-l-md font-semibold text-white text-sm whitespace-nowrap">
                                Social Post
                            </p>
                            <p className="bg-blue-300 flex-grow py-1 px-8 rounded-r-md font-semibold text-white text-sm whitespace-nowrap">
                                Pattern
                            </p>
                        </div>
                    )}
                </div>
                {isPost ? (
                    // <div>
                    //     Social Post Making

                    //     Image, Title, Caption, User, Date/Time
                    // </div>
                    <div>

                    </div>
                ) : (
                    <div>
                        Pattern Post Making

                        Image,  Time, Difficulty, Stitches, Colors
                    </div>
                )}
            </div>
            <div className="fixed inset-x-0 bottom-0 z-20">
                <Navigation />
            </div>
        </>
    );
  }
  
  export default AddPost;
  