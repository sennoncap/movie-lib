import Head from 'next/head'
import { useQuery } from '@apollo/client'
import { MOVIES } from 'graphql/queries'
import { NextPage } from 'next'
import { Loading } from 'components'
import { useRouter } from 'next/router'

const Results: NextPage = () => {
    const { query } = useRouter()

    const { data, loading } = useQuery(MOVIES, {
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
            <div>results</div>
        </>
    )
}

export default Results
