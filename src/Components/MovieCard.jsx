import React from 'react'

function MovieCard(movie) {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className='inline-block m-2 md:m-3 cursor-pointer group'>
        <img src={IMAGE_BASE_URL+ movie.movie.backdrop_path}
        className='w-[220px] md:w-[240px] object-cover rounded-2xl
         group-hover:border-[3px] border-gray-400 p-3 transition-all duration-100 ease-in-out'/>
        <h2 className='text-white mt-1 transition-all md:text-[18px]
         group-hover:font-bold w-[180px] md:w-[200px] truncate'>{movie.movie.title || movie.movie.original_title}</h2>
    </div>
  )
}

export default MovieCard