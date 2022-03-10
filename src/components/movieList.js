import React from 'react';
import MovieCard from './card';

function MovieList(props) {

    return (
        props.movies.map
        (
            (movie,i)=>{
            return <MovieCard movie={movie} key={movie.id}/>}
        )
      );
}

export default MovieList;