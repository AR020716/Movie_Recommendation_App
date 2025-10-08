import React from 'react'

function MovieCard({ movie }) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    
    if (!movie) return null;

    const imageUrl = movie.backdrop_path 
        ? IMAGE_BASE_URL + movie.backdrop_path
        : movie.poster_path 
            ? IMAGE_BASE_URL + movie.poster_path 
            : null;

    if (!imageUrl) return null;

    return (
        <div className='inline-block m-2 md:m-3 cursor-pointer group'>
            <img 
                src={imageUrl}
                alt={movie.title || movie.original_title || 'Movie'}
                className='w-[220px] md:w-[240px] object-cover rounded-2xl
                group-hover:border-[3px] border-gray-400 p-3 transition-all duration-100 ease-in-out'
            />
            <h2 className='text-white mt-1 transition-all md:text-[18px]
                group-hover:font-bold w-[180px] md:w-[200px] truncate'>
                {movie.title || movie.original_title || 'Untitled'}
            </h2>
        </div>
    )
}

export default MovieCard