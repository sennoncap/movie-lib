import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import logo from 'public/logo_transparent.png'

const Header: React.FC = () => {
    const router = useRouter()

    return (
        <div className={`fixed top-0 left-0 z-20 h-[120%] w-[120%]`}>
            <div onClick={() => router.push('/')} className='animate-textFocus cursor-pointer select-none'>
                <Image src={logo} alt='logo' width={120} height={120} />
                <div className='fixed left-28 top-10'>
                    <span className='font-mono text-2xl text-slate-100'>Movie</span>
                    <span className='font-mono text-2xl text-slate-500'>Lib</span>
                </div>
            </div>
        </div>
    )
}

export default Header
