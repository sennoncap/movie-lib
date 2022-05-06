import Link from 'next/link'
import { BsGithub, BsTwitter } from 'react-icons/bs'

const Footer: React.FC = () => {
    return (
        <footer className='relative bottom-0 mt-auto flex w-full items-center justify-start py-10 px-2 text-slate-200 sm:px-8'>
            <div className='mr-auto text-sm'>2022 | Created by Denes Beck</div>
            <div className='flex space-x-6'>
                <Link href='https://github.com/denesbeck'>
                    <button className='h-7 w-7 rounded-full outline-none outline-offset-4 hover:text-slate-400 focus-visible:outline-blue-300'>
                        <BsGithub className='h-full w-full' />
                    </button>
                </Link>
                <Link href='https://twitter.com/denesbeck'>
                    <button className='h-7 w-7 rounded-full outline-none outline-offset-4 hover:text-slate-400 focus-visible:outline-blue-300'>
                        <BsTwitter className='h-full w-full' />
                    </button>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
