import { MovieSchema } from 'types/movie'
import Image from 'next/image'

interface MovieProps {
    movieData: MovieSchema
}

const Movie: React.FC<MovieProps> = ({ movieData }: MovieProps) => {
    return (
        <div className='h-full max-w-[14rem] overflow-clip rounded-md bg-white shadow-md'>
            {movieData.poster && <Image src={movieData.poster?.medium} alt='poster' width={230} height={300} />}
            <div className='w-full p-2'>
                <div className='font-medium text-slate-800'>{movieData.name}</div>
                <div>{movieData.score}</div>
                <div>{movieData.releaseDate}</div>
            </div>
        </div>
    )
}

export default Movie
