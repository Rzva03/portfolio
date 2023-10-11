import React, { Fragment } from 'react'
import defaultStyles from './skeleton.module.css';

const Skeleton = () => {
    return (
        <Fragment>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
            <div className="animate-pulse flex space-x-4">
                <div className={`rounded bg-slate-300 h-44 w-64 ${defaultStyles.skeleton}`}></div>
            </div>
        </Fragment>

    )
}

export default Skeleton;
