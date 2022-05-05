import { useEffect, useRef } from 'react'

const useMoveBackground = () => {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!ref) return

        const moveBackground = (e: MouseEvent) => {
            const x = e.pageX
            const y = e.pageY

            ref.current!.style.top = -y / 70 - 80 + 'px'
            ref.current!.style.left = -x / 60 - 80 + 'px'
        }
        document.addEventListener('mousemove', moveBackground)

        return () => document.removeEventListener('mousemove', moveBackground)
    }, [])

    return ref
}

export default useMoveBackground
