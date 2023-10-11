import React from 'react'

const Title = (props) => {
    const { primaryText, secondaryText } = props;
    return (
        <props.as className='text-2xl uppercase font-semibold'>
            <span className='text-blue-1000'>{primaryText}</span>
            &nbsp;{secondaryText}
        </props.as>
    )
}

export default Title;
