import React from 'react';

const FlexContainer = (props) => {
    const { children } = props;
    return (
        <div className='flex space-y-6 flex-col md:flex-row md:justify-center md:flex-wrap md:gap-3 md:space-y-0 pb-10 md:pb-0'>
            {children}
        </div>
    )
}

export default FlexContainer;
