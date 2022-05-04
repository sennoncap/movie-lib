import DarkLayout from './DarkLayout'

const Loading: React.FC = () => {
    return (
        <DarkLayout>
            <div className='flex space-x-4'>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_infinite] rounded-full bg-slate-700'></div>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_0.4s_infinite] rounded-full bg-blue-400'></div>
                <div className='relative top-9 h-4 w-4 animate-[jumpingDots_1.2s_0.8s_infinite] rounded-full bg-slate-200'></div>
            </div>
        </DarkLayout>
    )
}

export default Loading
