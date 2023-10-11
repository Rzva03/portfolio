import React from 'react';
import technologies from '../../data/technologies.json';
import Technology from '../Technology/technology';
import useSkill from './useSkill';
import SkillSkeleton from './skillSkeleton';
import Title from '../Title/title';

const Skill = () => {
    const {
        handleOnClick,
        isLightTheme,
        isLoading
    } = useSkill();
    return (
        <div
            className={`h-full flex flex-col md:justify-center items-center space-y-5 w-full font-semibold ${isLightTheme ? 'lightTheme' : 'darkTheme'}`}
        >
            <Title primaryText='My' secondaryText='Skill' as="h1"/>
            <div className='flex space-y-6 flex-col md:flex-row md:justify-center md:flex-wrap md:gap-3 md:space-y-0 pb-10 md:pb-0'>
                {isLoading ? (
                    <SkillSkeleton />
                ) : (
                    technologies.map((technology => (
                        <Technology
                            {...technology}
                            key={`techCard-${technology.name}`}
                            handleOnClick={() => handleOnClick(technology.url)}
                        />
                    )))
                )}
            </div>
        </div>
    )
}

export default Skill;
