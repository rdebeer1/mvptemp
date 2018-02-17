import React, {Component} from 'react';

class Movie extends Component {

  render() {
    const {movie} = this.props
    return (
      <div>
        <h4>Movie Details</h4>
        <img src={movie.Poster}/>
        <h5>Title: {movie.Title}</h5>
        <h5>Actors: {movie.Actors}</h5>
        <h5>Director: {movie.Director}</h5>
        <h5>Plot: {movie.Plot}</h5>
        <h5>Released: {movie.Released}</h5>
        <h5>Rated: {movie.Rated}</h5>
        <h5>Awards: {movie.Awards}</h5>
        <h5>IMDB Rating: {movie.ImdbRating}</h5>
      </div>
    )
  }
}

export default Movie;