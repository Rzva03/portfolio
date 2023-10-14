import React from 'react'
import SocialMedia from '../SocialMedia/socialMedia';
import ContactInfo from '../ContactInfo/contactInfo';

const Info = () => {
    return (
        <div className='flex flex-col items-start space-y-8'>
            <ContactInfo />
            <SocialMedia />
        </div>
    )
}

export default Info;
