import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

const Home: NextPage = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref) return

        const moveBackground = (e: MouseEvent) => {
            const x = e.pageX
            const y = e.pageY

            ref.current!.style.top = -y / 70 + 'px'
            ref.current!.style.left = -x / 60 + 'px'
        }
        document.addEventListener('mousemove', moveBackground)

        return () => document.removeEventListener('mousemove', moveBackground)
    }, [])
    return (
        <div>
            <Head>
                <title>Movie Lib</title>
            </Head>

            <div id='index' className='relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden'>
                <div ref={ref} className={`absolute top-0 left-0 z-20 h-[120%] w-[120%]`}>
                    <Image src={mountain} alt='mountain-bg' layout='fill' />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
