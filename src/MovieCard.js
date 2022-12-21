import React from 'react';
import './MovieCard.css';

const MovieCard = ( {movie} ) => {
    return (
        <div className='movie'>
            <div>
                <p>{movie.year}</p>
            </div>
            <div>
                <img src={movie.posterUrl} alt={movie.title}  onClick={() => {window.open('https://www.youtube.com/results?search_query=' + movie.title)}}/>
            </div>
            <div>
                <h3>{movie.title}</h3>
            </div>                    
        </div>
    );
}

export default MovieCard;