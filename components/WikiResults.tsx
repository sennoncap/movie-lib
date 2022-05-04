import { useEffect, useState } from 'react'
import DarkLayout from './DarkLayout'
import Link from 'next/link'

interface WikiResultsProps {
    searchString: string
}

const WikiResults = ({ searchString }: WikiResultsProps) => {
    const [wikiPages, setWikiPages] = useState<any>()

    const fetchWikiData = async () => {
        var url = 'https://en.wikipedia.org/w/api.php'

        var params: any = {
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
            url += '&' + key + '=' + (params as any)[key]
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

    if (!wikiPages) return null
    return (
        <DarkLayout>
            <div className='max-h-[30rem] max-w-[50rem] space-y-4 overflow-y-auto rounded-md bg-white p-6 ring hover:ring-blue-300'>
                {wikiPages.map((wikiPage: any, index: number) => {
                    return (
                        <Link href={`http://en.wikipedia.org/wiki?curid=${wikiPage.pageid}`} key={index}>
                            <div className='group cursor-pointer'>
                                <div className='text-2xl text-slate-800 group-hover:text-blue-400'>{wikiPage.title}</div>
                                <div className='text-slate-600'>{wikiPage.extract}</div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </DarkLayout>
    )
}

export default WikiResults
