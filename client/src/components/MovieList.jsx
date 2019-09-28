import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => {
        return <MovieListItem movie={movie} key={index} />
      })}
    </div>
  );
};

export default MovieList;