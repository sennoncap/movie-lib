import { IoIosArrowUp } from 'react-icons/io'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, [])

    // const handleScroll = () => {
    //     setIsVisible(window.scrollY > 300)
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // })

    const scrollToTop = () => {
        const rootElement = document.documentElement

        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return createPortal(
        <>
            {isVisible && (
                <button
                    className='fixed bottom-10 right-10 grid h-12 w-12 animate-slideInFromBottom cursor-pointer items-center justify-center rounded-full bg-blue-400 p-1 shadow-xl outline-none outline-4 hover:bg-blue-300 focus-visible:outline-blue-300'
                    onClick={scrollToTop}
                >
                    <IoIosArrowUp className='xs:h-6 xs:w-6 relative h-full w-full text-white' />
                </button>
            )}
        </>,
        document.getElementById('myPortal')!
    )
}

export default ScrollToTop
