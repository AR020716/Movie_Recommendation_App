import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';

function Hero() {
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
    const [movie, setMovie] = useState(null);
    const [surpriseMovie, setSurpriseMovie] = useState(null);
    const [showSurprise, setShowSurprise] = useState(false);

    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = () => {
        GlobalApi.getPopularMovies()
            .then((resp) => {
                const result = resp.data.results;
                setMovie(result[4]);
            })
            .catch((err) => {
                console.error("Error fetching popular movies:", err);
            });
    };

    const getRandomMovie = () => {
        GlobalApi.getHighlyRatedMovies()
            .then((resp) => {
                const results = resp.data.results;
                const randomIndex = Math.floor(Math.random() * results.length);
                setSurpriseMovie(results[randomIndex]);
                setShowSurprise(true);
            })
            .catch((err) => {
                console.error("Error fetching random movie:", err);
            });
    };

    return (
        <div className="relative">
            {/* Main Hero Section */}
            <div>
                <div className='absolute h-[85vh] bg-gradient-to-t from-[#1e2126] via-transparent to-transparent w-full'></div>
                <div className='absolute mt-[370px] md:mt[350px] px-10 md:px-[24px]'>
                    <h2 className='text-white text-[52px] lg:text-[64px] font-bold tracking-wide drop-shadow-lg'>{movie?.original_title}</h2>
                    <div className='flex gap-5 mt-[1px]'>
                        <button>PLAY</button>
                        <button className='bg-transparent border-2 border-white text-white cursor-pointer'>DETAILS</button>
                    </div>
                </div>
                {movie?.backdrop_path ? (
                    <img
                        src={IMAGE_BASE_URL + movie.backdrop_path}
                        alt={movie.title}
                        width={1920} height={1080} className="h-[85vh] object-cover"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-800 text-white">
                        Loading...
                    </div>
                )}
            </div>

            {/* Surprise Me Button */}
            <div className="flex justify-center mt-8">
                <button 
                    onClick={getRandomMovie}
                    className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Surprise Me!
                </button>
            </div>

            {/* Surprise Movie Modal */}
            {showSurprise && surpriseMovie && (
                <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
                    <div className="max-w-4xl w-full">
                        <img
                            src={IMAGE_BASE_URL + surpriseMovie.backdrop_path}
                            alt={surpriseMovie.title}
                            className="w-full h-[60vh] object-cover rounded-lg"
                        />
                        <h3 className="text-white text-3xl font-bold mt-4 text-center">
                            {surpriseMovie.title}
                        </h3>
                        <div className="flex justify-center gap-4 mt-6">
                            <button
                                onClick={getRandomMovie}
                                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
                            >
                                Try One More Time
                            </button>
                            <button
                                onClick={() => setShowSurprise(false)}
                                className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;



