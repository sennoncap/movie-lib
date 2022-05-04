import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from 'public/logo_transparent.png'

const Header: React.FC = () => {
    const router = useRouter()

    return (
        <div className='flex h-max w-full'>
            <div onClick={() => router.push('/')} className='flex w-max animate-textFocus cursor-pointer select-none items-center'>
                <Image src={logo} alt='logo' width={120} height={120} />
                <div className='relative -top-1'>
                    <span className='font-mono text-2xl text-slate-100'>Movie</span>
                    <span className='font-mono text-2xl text-slate-500'>Lib</span>
                </div>
            </div>
        </div>
    )
}

export default Header
