import { Fragment } from 'react'
import { MdOutlineContentCopy } from 'react-icons/md'
import { Toaster, toast } from 'sonner'

const PromptList = ({ list }) => {

    return (
        <Fragment>
            <Toaster position="top-right" closeButton />
            <div className='flex items-center justify-center p-10 gap-10 flex-wrap'>
                {list.map((listItem) => {
                    return (
                        <div key={listItem} className='bg-orange-200 pr-5 relative flex items-center w-[27rem] min-h-[5rem] p-3 max-w-md'>
                            <button onClick={() => { navigator.clipboard.writeText(listItem); toast.success(' Prompt Copied✨') }} className='absolute hover:text-orange-700 p-1 right-1 top-1'>
                                <MdOutlineContentCopy />
                            </button>
                            <p>{listItem}</p>
                        </div>
                    )
                })}
            </div>
        </Fragment>
    )
}

export default PromptList
