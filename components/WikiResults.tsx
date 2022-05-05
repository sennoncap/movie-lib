import { RefObject, useEffect, useState } from 'react'
import { useClickOutside } from 'hooks'
import DarkLayout from './DarkLayout'
import Link from 'next/link'
import { Loading } from 'components'
import { AiOutlineClose } from 'react-icons/ai'

interface WikiResultsProps {
    searchString: string
    close: () => void
}

interface WikiPageSchema {
    pageid: number
    ns: number
    title: string
    extract: string
    index: number
}

const WikiResults = ({ searchString, close }: WikiResultsProps) => {
    const [wikiPages, setWikiPages] = useState<WikiPageSchema[]>()
    const { ref } = useClickOutside(close)

    const fetchWikiData = async () => {
        var url = 'https://en.wikipedia.org/w/api.php'

        var params = {
            action: 'query',
            generator: 'search',
            prop: 'extracts',
            gsrsearch: searchString,
            gsrlimit: 10,
            exintro: 1,
            explaintext: 1,
            exchars: 350,
            exlimit: 10,
            format: 'json',
        }
        url = url + '?origin=*'

        Object.keys(params).forEach((key) => {
            url += '&' + key + '=' + params[key as keyof Object]
        })
        const response = await fetch(url)
        const json = await response.json()

        const keys = Object.keys(json.query.pages)
        const data = keys.map((key) => {
            return json.query.pages[key]
        })

        setWikiPages(data)
    }

    useEffect(() => {
        fetchWikiData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!wikiPages) return <Loading />
    return (
        <DarkLayout>
            <div className='relative flex w-max justify-center' ref={ref as RefObject<HTMLDivElement>}>
                <div className='relative max-h-[30rem] w-[90%] max-w-[50rem] space-y-4 overflow-y-auto rounded-md bg-white p-6 ring hover:ring-blue-300'>
                    {wikiPages.map((wikiPage: any, index: number) => {
                        return (
                            <a
                                href={`http://en.wikipedia.org/wiki?curid=${wikiPage.pageid}`}
                                key={index}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <div className='group cursor-pointer'>
                                    <div className='text-2xl text-slate-800 group-hover:text-blue-300'>{wikiPage.title}</div>
                                    <div className='text-slate-600 group-hover:text-slate-500'>{wikiPage.extract}</div>
                                </div>
                            </a>
                        )
                    })}
                </div>
                <button
                    className='absolute right-0 -top-9 h-6 w-6 rounded text-slate-200 outline-none transition-all duration-300 ease-in-out hover:text-blue-300 focus-visible:outline-blue-300 sm:top-0'
                    onClick={close}
                >
                    <AiOutlineClose className='h-full w-full' />
                </button>
            </div>
        </DarkLayout>
    )
}

export default WikiResults
