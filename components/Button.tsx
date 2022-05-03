import { ElementType } from 'react'
import { IconType } from 'react-icons'

interface ButtonProps {
    type: 'primary' | 'secondary' | 'danger'
    label: string
    icon?: IconType
    handler?: () => void
    disabled?: boolean
}

const BUTTON_TYPES = {
    secondary: 'bg-slate-800 text-slate-200 hover:ring-blue-400 hover:bg-slate-700',
    primary: 'bg-blue-300 text-slate-200 hover:ring-slate-200 hover:bg-blue-400',
    danger: 'bg-pink-800 text-slate-200 hover:ring-blue-400 hover:bg-pink-700',
}

const Button = ({ type, label, icon, handler, disabled = false }: ButtonProps) => {
    const TheIcon = icon as ElementType

    return (
        <button
            disabled={disabled}
            className={`${BUTTON_TYPES[type]} flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2 font-medium ring-2 ring-transparent focus:outline-none focus:ring-blue-400`}
            onClick={handler}
        >
            {icon && <TheIcon className='h-6 w-6' />}
            <div>{label}</div>
        </button>
    )
}

export default Button
