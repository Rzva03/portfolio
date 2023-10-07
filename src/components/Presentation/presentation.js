import React from 'react';
import SocialNetwork from '../SocialNetwork/socialNetwork';
import DownloadCV from '../DownloadCV/downloadCV';

const Presentation = () => {

    return (
        <div className='flex flex-col justify-center items-center md:items-start space-y-4 font-semibold'>
            <h1 className='text-gray-800 text-xl uppercase'>Hi there! I'm</h1>
            <h2 className='text-3xl uppercase'>
                <span className='text-blue-1000'>Victor</span>
                &nbsp;Rodriguez
            </h2>
            <p className='text-center md:text-left'>
                A <span className='text-blue-1000 font-bold'>Front-End Web Developer</span>
                &nbsp;passionate about creating interative applications and experiencies on the web.
            </p>
            <div className='flex space-x-10'>
                <DownloadCV />
                <SocialNetwork />
            </div>
        </div>
    )
}

export default Presentation;