import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { MOVIES } from 'graphql/queries'
import { NextPage } from 'next'
import { Movie } from 'components'
import { useRouter } from 'next/router'
import { MovieSchema } from 'types/movie'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('components/Loading'), { ssr: false })

const Movies: NextPage = () => {
    const { query } = useRouter()

    const { data } = useQuery(MOVIES, {
        variables: { query: query.query },
        onCompleted(myData) {
            console.log(myData)
        },
        onError(error) {
            alert(error)
        },
    })

    if (!data) return <DynamicComponentWithNoSSR />
    return (
        <>
            <Head>
                <title>Movie Lib | Movies</title>
            </Head>
            <div className='grid max-w-[75%] animate-slideInFromBottom grid-cols-fluid items-center justify-items-center gap-10'>
                {data.searchMovies.map((movie: MovieSchema) => (
                    <Movie key={movie.id} movieData={movie} />
                ))}
            </div>
        </>
    )
}

export default Movies
