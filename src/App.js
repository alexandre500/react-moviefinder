import React, {useEffect, useState} from 'react';
import './App.css';
import DB_MOVIES from './data/db-movies.json'; //case of a react-local-database-file
import MovieCard from './MovieCard';
import Topbar from './TopBar';

//const API_URL = 'https://pokeapi.co/api/v2/';

const App = () => {
    const [moviesArr, setMoviesArr] = useState([]); //this is what happens when you depend on external http request
    const [keywordTyped, setKeywordTyped] = useState('');

    const searchMovies = async () => {
        //case of http request:
        //const resp = await fetch(API_URL + '?country=' + countryVar);
        //const data = await resp.json();

        //case of a react-local-database-file
        console.log(DB_MOVIES.movies[1]);
        setMoviesArr(DB_MOVIES.movies.filter((obj) => obj.title.toLowerCase().startsWith(keywordTyped.toLowerCase())));
    }

    useEffect( ()=> {
        searchMovies();
    },[keywordTyped])

    return (
        <div className="app">            
            <Topbar/>
            <h1>Movies finder</h1>
            <div className='search'>
                <input 
                    placeholder='...search for movies'
                    onChange={(e)=> { setKeywordTyped(e.target.value) }}
                />
                <img
                    src='https://cdn.doein.com.br/images\icons\search24.png'
                    alt='search'
                    onClick={()=>{}}
                />
            </div>
            {            
            moviesArr.length  > 0
                ? 
                (
                    <div className='container'>
                        {moviesArr.map( 
                            (movie)=> {
                                return <MovieCard movie={movie}/>  
                            } 
                        )}
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2> No movies found </h2>
                    </div>
                )

            
            }
        </div>
    );
}

export default App; //allow other components to import it