import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';
const config = require('./config.js');

class App extends Component {
  state = {
    movie: {}
  }
  getMovie = () => {
    const title = this.refs.title.value
    fetch(`http://www.omdbapi.com/?t=${title}&apikey=${config.MY_KEY}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          movie: {
            Poster: data.Poster,
            Title: data.Title,
            Actors: data.Actors,
            Director: data.Director,
            Plot: data.Plot,
            Released: data.Released,
            Rated: data.Rated,
            Awards: data.Awards,
            ImdbRating: data.imdbRating,
          }
        })
      })
  }

  render() {
    const { movie } = this.state
    return (
      <div className='App'>
        <input type='text' placeholder='Enter a title' ref='title' />
        <button onClick={this.getMovie}>Title Details</button>
        <Movie movie={movie}/>
      </div>
    )
  }
}

export default App;
