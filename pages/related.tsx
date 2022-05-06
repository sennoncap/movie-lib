import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { RELATED_MOVIES } from 'graphql/queries'
import { NextPage } from 'next'
import { Movie } from 'components'
import { useRouter } from 'next/router'
import { MovieSchema } from 'types/movie'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('components/Loading'), { ssr: false })

const Related: NextPage = () => {
    const { query } = useRouter()
    const genres = query['genres[]'] && (query['genres[]'] as string)!.split(',').map((el) => parseInt(el))
    const year = parseInt(query.year as string)

    const { data, loading } = useQuery(RELATED_MOVIES, {
        variables: { genres: genres, year: year },
        onError(error) {
            alert(error)
        },
    })

    if (loading) return <DynamicComponentWithNoSSR />
    if (!data) return null
    return (
        <>
            <Head>
                <title>Movie Lib | Related</title>
            </Head>
            <div className='grid max-w-[75%] animate-slideInFromBottom grid-cols-fluid items-center justify-items-center gap-10'>
                {data.discoverMovies.map((movie: MovieSchema) => (
                    <Movie key={movie.id} movieData={movie} />
                ))}
            </div>
        </>
    )
}

export default Related
