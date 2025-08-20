import React from 'react'

async function fetchMovie(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

async function MoviesData(props) {
  const movieId = props.params.movieId;
  const movieData = await fetchMovie(movieId);
  console.log(movieData);
  return (
    <div>Movies Data Page for {movieId}</div>
  )
}

export default MoviesData