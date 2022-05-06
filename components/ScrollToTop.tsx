import { IoIosArrowUp } from 'react-icons/io'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const rootElement = document.getElementById('container')!

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(rootElement.scrollTop > 300)
        }
        rootElement.addEventListener('scroll', handleScroll)
        return () => {
            rootElement.removeEventListener('scroll', handleScroll)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const scrollToTop = () => {
        rootElement.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return createPortal(
        <>
            {isVisible && (
                <button
                    className='fixed bottom-[10%] right-10  grid h-12 w-12 animate-slideInFromBottom items-center justify-center rounded-full bg-blue-300 p-1 text-white shadow-xl outline-none outline-offset-4 hover:bg-blue-300 focus-visible:outline-blue-300'
                    onClick={scrollToTop}
                >
                    <IoIosArrowUp className='h-full w-full' />
                </button>
            )}
        </>,
        document.getElementById('myPortal')!
    )
}

export default ScrollToTop
