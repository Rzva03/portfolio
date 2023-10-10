import React from 'react';
import technologies from '../../data/technologies.json';
import Technology from '../Technology/technology';
import useSkill from './useSkill';

const Skill = () => {
    const {
        handleOnClick,
        isLightTheme
    } = useSkill();

    return (
        <div className={`h-full home flex flex-col md:justify-center items-center space-y-5 w-full font-semibold ${isLightTheme ? 'lightTheme' : 'darkTheme'}`}>
            <h1 className='text-2xl uppercase'>
                <span className='text-blue-1000'>My</span>
                &nbsp;Skill
            </h1>
            <div className='flex space-y-6 flex-col md:flex-row md:justify-center md:flex-wrap md:gap-3 md:space-y-0 pb-10 md:pb-0'>
                {technologies.map((technology => (
                    <Technology
                        {...technology}
                        key={`techCard-${technology.name}`}
                        handleOnClick={() => handleOnClick(technology.url)}
                    />
                )))}
            </div>
        </div>
    )
}

export default Skill;
