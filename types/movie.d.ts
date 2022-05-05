type Genre = {
    id: number
    name: string
}

type Poster = {
    medium: string
}

export type MovieSchema = {
    id: number
    name: string
    releaseDate: string
    genres?: Genre[]
    poster: Poster
    score: number
}
