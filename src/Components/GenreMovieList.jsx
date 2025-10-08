import React from 'react';
import GenresList from '../Constant/GenresList';
import { IoChevronForwardSharp } from 'react-icons/io5';
import MovieList from './MovieList';

function GenreMovieList() {
  return (
    <div className="mt-24 px-10 py-5 md:px-20">
      {GenresList.genre.map((item, index) => (
        <div key={item.id || index} className="mb-10">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-white text-[20px] font-bold">{item.name}</h2>
            <div className="text-white text-[16px] font-normal cursor-pointer flex items-center hover:underline">
              VIEW ALL
              <IoChevronForwardSharp className="ml-1" />
            </div>
          </div>
          <MovieList genreId={item.id} />
        </div>
      ))}
    </div>
  );
}

export default GenreMovieList;
