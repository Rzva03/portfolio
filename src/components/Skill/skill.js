import React from 'react';
import technologies from '../../data/technologies.json';
import Technology from '../Technology/technology';
import useSkill from './useSkill';
import SkillSkeleton from '../Skeleton/skeleton';
import Title from '../Title/title';
import FlexContainer from '../FlexContainer/flexContainer';

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
            <Title primaryText='My' secondaryText='Skills' as="h1" />
            <FlexContainer>
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
            </FlexContainer>
        </div>
    )
}

export default Skill;
