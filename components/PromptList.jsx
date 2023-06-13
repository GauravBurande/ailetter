import React, { Fragment } from 'react'

const PromptList = ({ list }) => {
    return (
        <Fragment>
            <div className='flex items-center justify-center p-10 gap-10 flex-wrap'>
                {list.map((listItem) => {
                    return (
                        <div key={listItem} className='bg-orange-200 flex items-center w-[27rem] min-h-[5rem] p-3 max-w-md'>
                            <p>{listItem}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default PromptList
