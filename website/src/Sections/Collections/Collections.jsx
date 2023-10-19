import React, { useState, useEffect } from 'react';
import GetCallback from './GetCallback';
import GuideOffers from './GuideOffers';

const Collections = () => {
    // State variables to manage dynamic data
    const [backgroundImage, setBackgroundImage] = useState(
        '../public/assets/explore/India/coverImage.jpg'
    );
    const [content, setContent] = useState('India');

    // Simulate fetching data (You can replace this with actual data fetching)
    useEffect(() => {
        // Fetch your data here and update the state variables
        // For example:
        // setBackgroundImage('new-image-url.jpg');
        // setContent('New Content');
    }, []);

    return (
        <>
            <div className="w-full border-2 widthFullSized">
                <div
                    className="w-full lg:h-[40rem] relative"
                    style={{
                        backgroundImage: `url('${backgroundImage}')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'bottom',
                        border: '2px solid red',
                    }}
                >
                    {/* Dynamic content */}
                    <div className="absolute z-10 left-1/5 top-1/3">
                        <h1 className="text-white text-6xl">{content}</h1>
                    </div>
                </div>
            </div>
            <GetCallback />
            <div className='w-full max-w-[1200px] justify-between flex mx-auto  mt-24' >
                <div className='w-[60%]'>
                    <GuideOffers />
                </div>
                <div className='w-[30%] border-2 border-red-500'>
                    AI Chatbot
                </div>
            </div>

        </>
    );
};

export default Collections;
