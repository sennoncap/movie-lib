import { BsGithub, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className='z-20 flex h-20 w-full items-center justify-start px-2 text-slate-200 sm:px-8'>
            <div className='mr-auto text-sm'>Created by Denes Beck</div>
            <div className='flex space-x-6'>
                <button className='h-7 w-7 rounded-full outline-none outline-offset-4 hover:text-slate-400 focus-visible:outline-blue-300'>
                    <BsGithub className='h-full w-full' />
                </button>
                <button className='h-7 w-7 rounded-full outline-none outline-offset-4 hover:text-slate-400 focus-visible:outline-blue-300'>
                    <BsTwitter className='h-full w-full' />
                </button>
            </div>
        </footer>
    )
}

export default Footer
