import React from 'react'
import defaultStyles from './home.module.css';
import { IconDev } from '../Icons/icons';
import Presentation from '../Presentation/presentation';

const Home = () => {
    return (
        <div className='home flex flex-col space-y-5 md:flex-row md:justify-center md:space-y-0 md:space-x-10'>
            <div className={`${defaultStyles.homeProfile} flex flex-col items-center`}>
                <IconDev />
            </div>
            <Presentation />
        </div>
    )
}

export default Home;
