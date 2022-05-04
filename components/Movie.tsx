import { MovieSchema } from 'types/movie'
import notFound from 'public/undraw_page_not_found_re_e9o6.svg'
import Image from 'next/image'
import { useDate } from 'hooks'
interface MovieProps {
    movieData: MovieSchema
}

const calculateColor = (score: number) => {
    if (score >= 7) return 'ring-teal-500'
    if (score < 5) return 'ring-pink-800'
    return 'ring-yellow-500'
}

const Movie: React.FC<MovieProps> = ({ movieData }: MovieProps) => {
    const { formatDate } = useDate()

    return (
        <div className='relative h-full w-[14rem] overflow-clip rounded-md bg-white shadow-md ring transition-all duration-150 ease-in-out hover:scale-105 hover:ring-blue-300'>
            <Image
                src={movieData.poster ? movieData.poster.medium : notFound}
                alt={movieData.poster ? 'poster' : 'not-found'}
                width={230}
                height={300}
            />
            <div
                className={`absolute top-2 right-2 inline-block h-8 w-8 rounded-full bg-gray-800 p-0.5 text-center text-gray-100 opacity-90 ring ${calculateColor(
                    movieData.score
                )}`}
            >
                {movieData.score.toFixed(1)}
            </div>
            <div className='w-full p-2'>
                <div className='font-medium text-slate-800'>{movieData.name}</div>
                <div className='font-medium text-slate-500'>{formatDate(movieData.releaseDate)}</div>
            </div>
        </div>
    )
}

export default Movie
