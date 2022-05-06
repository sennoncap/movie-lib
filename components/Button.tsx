import React, { ElementType } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    type: 'primary' | 'secondary' | 'danger'
    label: string
    icon?: IconType
    handler?: () => void
    disabled?: boolean
}

const BUTTON_TYPES = {
    secondary: 'bg-slate-800 text-slate-200 hover:bg-slate-700',
    primary: 'bg-blue-400 text-slate-200 hover:bg-blue-300',
    danger: 'bg-pink-800 text-slate-200 hover:bg-pink-700',
}

const Button: React.FC<ButtonProps> = ({ type, label, icon, handler, disabled = false }: ButtonProps) => {
    const TheIcon = icon as ElementType

    return (
        <button
            disabled={disabled}
            className={`${BUTTON_TYPES[type]} flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2 font-medium outline-none outline-offset-4 focus-visible:outline-slate-200`}
            onClick={handler}
        >
            {icon && <TheIcon className='h-6 w-6' />}
            <div>{label}</div>
        </button>
    )
}

export default Button
