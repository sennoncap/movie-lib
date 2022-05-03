import { gql } from '@apollo/client'

const MOVIES = gql`
    query Movies($query: String!) {
        searchMovies(query: $query) {
            id
            name
            overview
            releaseDate
            runtime
            genres {
                id
                name
            }
            cast {
                person {
                    id
                    name
                }
            }
            poster {
                medium
            }
            score
        }
    }
`

export { MOVIES }
