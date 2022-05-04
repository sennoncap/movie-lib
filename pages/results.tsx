import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { MOVIES } from 'graphql/queries'
import { NextPage } from 'next'
import { Loading, Movie } from 'components'
import { useRouter } from 'next/router'
import { MovieSchema } from 'types/movie'

const Results: NextPage = () => {
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

    if (!data) return <Loading />
    return (
        <>
            <Head>
                <title>Movie Lib | Results</title>
            </Head>
            <div className='grid w-[75%] grid-cols-fluid items-center justify-items-center gap-10'>
                {data.searchMovies.map((movie: MovieSchema) => (
                    <Movie key={movie.id} movieData={movie} />
                ))}
            </div>
        </>
    )
}

export default Results
