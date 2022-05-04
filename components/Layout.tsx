import Image from 'next/image'
import mountain from 'public/mountain.jpg'
import { Footer, Header } from 'components'
import { useMoveBackground } from 'hooks'
import React, { ReactElement } from 'react'

interface LayoutProps {
    children: ReactElement
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    const ref = useMoveBackground()

    return (
        <>
            <div id='index' className='relative flex h-screen w-screen animate-textFocus overflow-hidden'>
                <div ref={ref} className={`absolute top-0 left-0 h-[120%] w-[120%]`}>
                    <Image src={mountain} alt='mountain-bg' layout='fill' />
                </div>
                <div className='absolute top-0 left-0 flex h-full w-full flex-col items-center overflow-y-auto'>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Layout
