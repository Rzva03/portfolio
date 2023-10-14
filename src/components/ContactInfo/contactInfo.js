import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const EMAIL = 'avictor.zrodriguez@gmail.com';
const LOCATION = 'Oaxaca, Mexico';
const PHONE_NUMBER = '+52 951 567 60 93';
const EMAIL_BODY = 'I%20want%20to%20work%20with%20you!';

const ContactInfo = () => {
    return (
        <div className='flex flex-col items-start space-y-2'>
            <h2 className='text-xl uppercas'>Contact Info</h2>
            <div className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-2'>
                    <FontAwesomeIcon icon={faEnvelope} className='text-blue-1000' />
                    <a href={`mailto:${EMAIL}?body=${EMAIL_BODY}`} className='hover:underline'>
                        <span className='text-sm'>{EMAIL}</span>
                    </a>
                </div>
                <div className='flex items-center space-x-2'>
                    <FontAwesomeIcon icon={faMapMarkerAlt} className='text-blue-1000' />
                    <span className='text-sm'>{LOCATION}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    <FontAwesomeIcon icon={faPhone} className='text-blue-1000' />
                    <span className='text-sm'>{PHONE_NUMBER}</span>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo;
