import React, { Fragment } from 'react'

const Skeleton = () => {
    return (
        <Fragment>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className="rounded bg-slate-300 h-44 w-64"></div>
            </div>
        </Fragment>
        
    )
}

export default Skeleton;
