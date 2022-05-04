type Genre = {
    id: number
    name: string
}

type Person = {
    id: number
    name: string
}

type Cast = {
    person: Person[]
}

type Poster = {
    medium: string
}

export type MovieSchema = {
    id: number
    name: string
    overview: string
    releaseDate: string
    runtime: number
    genres: Genre[]
    cast: Cast
    poster: Poster
    score: number
}
