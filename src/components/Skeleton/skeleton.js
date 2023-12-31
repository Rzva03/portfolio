import React, { Fragment } from 'react';

const Skeleton = () => {
    return (
        <Fragment>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-44 lg:w-64'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-44 lg:w-64'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-44 lg:w-64'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-44 lg:w-64'></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-44 lg:w-64'></div>
            </div>
            <div className="animate-pulse flex space-x-4 lg:hidden">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-48 lg:w-72'></div>
            </div>
            <div className="animate-pulse flex space-x-4 md:hidden">
                <div className='rounded bg-slate-300 h-44 w-64 md:w-48 md:h-24 lg:h-48 lg:w-72'></div>
            </div>
        </Fragment>

    )
}

export default Skeleton;
