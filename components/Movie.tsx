import { MovieSchema } from 'types/movie'

interface MovieProps {
    movieData: MovieSchema
}

const Movie: React.FC<MovieProps> = ({ movieData }: MovieProps) => {
    return (
        <div className='h-[25rem] max-w-[14rem] overflow-y-auto rounded bg-white'>
            <div>{movieData.name}</div>
            <div>{movieData.overview}</div>
        </div>
    )
}

export default Movie
