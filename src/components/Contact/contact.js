import React from 'react';
import Title from '../Title/title';
import FormContact from '../FormContact/formContact';
import Info from '../Info/info';

const Contact = () => {
    return (
        <div className='flex flex-col py-10 md:py-0 md:justify-center items-center space-y-5 w-full font-semibold'>
            <Title primaryText='Contact' secondaryText='me' as="h2"/>
            <div className='flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-8 w-full justify-center items-start'>
                <FormContact />
                <Info />
            </div>
        </div>
    )
}

export default Contact;
