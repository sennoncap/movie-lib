import { gql } from '@apollo/client'

const MOVIES = gql`
    query Movies($query: String!) {
        searchMovies(query: $query) {
            id
            name
            releaseDate
            genres {
                id
                name
            }
            poster {
                medium
            }
            score
        }
    }
`

const RELATED_MOVIES = gql`
    query Related_Movies($year: Int, $genres: [ID!]) {
        discoverMovies(filter: { year: $year, withGenres: { include: $genres } }) {
            id
            name
            releaseDate
            poster {
                medium
            }
            score
        }
    }
`

export { MOVIES, RELATED_MOVIES }
