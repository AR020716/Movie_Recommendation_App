import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function MovieList({ genreId }) {
    const elementRef = useRef(null);
    const [movieList, setMovieList] = useState([]);

    const getMovieListByGenreId = React.useCallback(() => {
        GlobalApi.getMoviesByGenreID(genreId).then((resp) => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    }, [genreId]);

    useEffect(() => {
        getMovieListByGenreId();
    }, [genreId, getMovieListByGenreId]); // <-- re-fetch if genreId changes

    const slideRight = (element) => {
        element.scrollLeft +=500;
    }
    const slideLeft = (element) => {
        element.scrollLeft -=500;
    }

    
   return (
    <div className='flex items-center relative'>
        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)}  className='text-[40px] text-white bg-black p-2 z-10 cursor-pointer rounded-full'/>
        <div id='slider' ref={elementRef} className="w-full overflow-x-auto scroll-smooth whitespace-nowrap
        scrollbar-hide ml-[-40px] ">
            {movieList.slice(0, 7).map((item, index) => (
                <div key={item?.id || index} className="inline-block mr-4">
                    <MovieCard movie={item} />
                </div>
            ))}
        </div>
        <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)} className='text-[40px] text-white bg-black p-2 z-10
        cursor-pointer rounded-full'/>
    </div>
);
}

export default MovieList;
