import React from 'react';

const DownloadCV = () => {
    return (
        <a className='p-button p-component hover:text-white hover:bg-indigo-600' href='../../assets/cedula.pdf' download aria-label='Resume'>
            <span className='p-button-label p-c'>
                Resume
            </span>
        </a>
    )
}

export default DownloadCV;
