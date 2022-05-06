import Image from 'next/image'
import main_background from 'public/main_background.jpg'
import { Footer, Header } from 'components'
import { useMoveBackground } from 'hooks'
import React, { ReactElement } from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('components/ScrollToTop'), { ssr: false })

interface LayoutProps {
    children: ReactElement
}
const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    const ref = useMoveBackground()

    return (
        <>
            <div className='relative flex h-screen w-screen animate-textFocus overflow-hidden'>
                <div ref={ref} className='absolute -top-20 -left-20 h-[130%] w-[130%]'>
                    <Image src={main_background} alt='main_background' layout='fill' className='blur-sm brightness-75 grayscale' />
                </div>
                <div id='container' className='absolute top-0 left-0 flex h-full w-full flex-col items-center overflow-y-auto'>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </div>
            <DynamicComponentWithNoSSR />
        </>
    )
}

export default Layout
