import { Button } from 'components'
import { GiVintageRobot } from 'react-icons/gi'
import { useRouter } from 'next/router'

const Zero = () => {
    const router = useRouter()
    return (
        <div className='flex h-full w-full animate-textFocus flex-col items-center justify-center text-slate-200'>
            <div className='flex items-center space-x-4'>
                <GiVintageRobot className='h-32 w-32' />
                <div className='break-words text-3xl'>Server returned zero results!</div>
            </div>
            <div className='max-w-[10rem]'>
                <Button type='primary' label='Go Back' handler={() => router.push('/')} />
            </div>
        </div>
    )
}

export default Zero
