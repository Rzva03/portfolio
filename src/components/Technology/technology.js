import React from 'react';
import { Card } from 'primereact/card';
import useTechnology from './useTechnology';

const Technology = (props) => {
    const { id, name, handleOnClick } = props;
    const {
        getIcon
    } = useTechnology(
        { id }
    );
    return (
        <Card
            className='technology w-full md:w-1/5 hover:cursor-pointer'
            onClick={handleOnClick}
        >
            <div className='flex flex-col justify-center items-center space-y-2'>
                {getIcon(id, name)}
                <h6>{name}</h6>
            </div>
        </Card>
    )
}

export default Technology;
