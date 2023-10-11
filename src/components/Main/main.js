import React from 'react';
import Home from '../Home/home';
import Skill from '../Skill/skill';
import Project from '../Project/project';
import Contact from '../Contact/contact';
import defaultStyles from './main.module.css';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

const SKILL_INDEX = 1;

const Main = (props) => {
    const {
        activeIndex
    } = props;
    const { isMobile } = useCheckMobileScreen();
    return (
        <main
            className={`flex px-4 md:px-0 md:pt-0 justify-center items-center ${defaultStyles.main} ${activeIndex === SKILL_INDEX && isMobile ? 'overflow-scroll' : ''}`}
        >
            {activeIndex === 0 && (
                <Home />
            )}
            {activeIndex === 1 && (
                <Skill />
            )}
            {activeIndex === 2 && (
                <Project />
            )}
            {activeIndex === 3 && (
                <Contact />
            )}
        </main>
    )
}

export default Main;
