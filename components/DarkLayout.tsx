import React, { ReactElement } from 'react'
import { createPortal } from 'react-dom'

interface DarkLayoutProps {
    children: ReactElement
}

const DarkLayout: React.FC<DarkLayoutProps> = ({ children }: DarkLayoutProps) => {
    return createPortal(
        <div className='fixed top-0 left-0 z-40 flex h-screen w-screen items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm'>
            {children}
        </div>,
        document.getElementById('myPortal')!
    )
}

export default DarkLayout
