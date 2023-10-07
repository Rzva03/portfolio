import React from 'react';
import Home from '../Home/home';
import Skill from '../Skill/skill';
import Project from '../Project/project';
import Contact from '../Contact/contact';

const Main = (props) => {
    const {
        activeIndex
    } = props;
    return (
        <main className='flex pt-10 md:pt-0 justify-center md:items-center h-full w-full'>
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
