import React, { useContext } from 'react';
import Title from '../Title/title';
import FlexContainer from '../FlexContainer/flexContainer';
import Skeleton from '../Skeleton/skeleton';
import { ThemeContext } from '../../context/ThemeContext';
import projects from '../../data/projects.json';
import ProjectItem from '../ProjectItem/projectItem';
import useProject from './useProject';

const Project = () => {
    const { state } = useContext(ThemeContext);
    const { isLightTheme } = state;
    const { isLoading } = useProject();

    return (
        <div
            className={`h-full flex flex-col md:justify-center items-center space-y-5 w-full font-semibold ${isLightTheme ? 'lightTheme' : 'darkTheme'}`}
        >
            <Title primaryText='My' secondaryText='Projects' as="h1" />
            <FlexContainer>
                {isLoading ? (
                    <Skeleton />
                ) : (
                    projects.map((project) => (
                        <ProjectItem {...project} key={`project-${project.name}`} />
                    ))
                )}
            </FlexContainer>
        </div>
    )
}

export default Project;
