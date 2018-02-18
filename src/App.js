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
  const styles = {
    button: {
      flex: 1,
      textAlign: 'center',
      float: 'center',
      fontSize: '25px',
      fontFamily: 'Archivo Narrow',
      clear: 'both',
      paddingBottom: '1px',
    },
    input: {
      color: 'black',
      fontSize: '25px',
      fontFamily: 'Archivo Narrow',
      border: '1px solid grey',
    },
    container: {
      display: 'flex',
    },
    form: {
      flex: 1,
      borderRadius: '24px',
      fontSize: '32px',
      paddingTop: '50px',
      paddingBottom: '50px',
      textAllign: 'center',
      float: 'center',
      color: 'black'
    },
    main: { 
      flex: 3,
      textAllign: 'center',
      background: '#f46868',
      height: '100vh',
    },
    overlay: {
      display: 'flex',
      height:'100vh',
      flex: 4,
      backgroundColor: 'white',
      borderLeft: '5px solid #5b83fb',
    },
    image: {
      flex: 1,
      border: '3px solid white',
      borderRadius: '20px',
      width: '275px',
      height: '375px',
    },
    App: {
      textAlign: 'center',
    }
  }
    const { movie } = this.state
    return (
      <div className='App'>
        <div style={styles.container}>
          <div style={styles.main}>
            <div style={styles.form}>
              <input style={styles.input} type='text' placeholder='Enter a title' ref='title' />
              <button style={styles.button} onClick={this.getMovie}>Get Title</button>
            </div>
            <img style={styles.image} src={movie.Poster} />
          </div>
          <div style={styles.overlay}>  
            <Movie movie={movie}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
