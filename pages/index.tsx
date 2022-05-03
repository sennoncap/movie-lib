import type { NextPage } from 'next'
import Head from 'next/head'
import { Button, InputField } from 'components'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { InputFieldRefProps } from 'components/InputField'

const Home: NextPage = () => {
    const router = useRouter()
    const ref = useRef<InputFieldRefProps>(null)

    return (
        <>
            <Head>
                <title>Movie Lib | Search</title>
            </Head>
            <div className='z-20 grid w-full max-w-[30rem] animate-textFocus flex-col gap-4 text-slate-100'>
                <InputField ref={ref} label='Enter movie title' />
                <div className='w-[10rem]'>
                    <Button type='primary' label='Search' handler={() => router.push(`/results?query=${ref.current!.getInputValue()}`)} />
                </div>
            </div>
        </>
    )
}

export default Home
