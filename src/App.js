import React, {Component} from 'react';
import Movie from './Movie';
import {RaisedButton} from 'material-ui';
import {Paper} from 'material-ui';
import TextField from 'material-ui/TextField';
import './App.css';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const config = require('./config.js');


class App extends Component {
  state = {
    movie: {},
  }
  
  getMovie = () => {
    const title = this.refs.title.input.value
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
      margin: 12,
    },
    input: {
      fontSize: 16,
    },
    container: {
      display: 'flex',
    },
    form: {
      flex: 1,
      flexWrap: 'wrap',
      width: 'auto',
      marginBottom: 80,
      marginTop: 20,

    },
    main: { 
      textAlign: 'center',
      height: '100vh',
      minWidth: '25%',
      flex: 1,
      paddingTop: '1%',
      margin: '1%',
    },
    overlay: {
      flex: 1,
      height: '100vh',
      minWidth: '65%',
      overflow: 'scroll',
    },
    image: {
      border: '5px solid white',
      borderRadius: 20,
      width: 275,
      height: 375,
    },
    App: {

    }
  }
    const { movie } = this.state
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Paper className='App' style={styles.App}>
          <div style={styles.container}>
            <div style={styles.main} >
              <form style={styles.form} noValidate autoComplete='off'>
                <TextField style={styles.input} ref='title' type='text' floatingLabelText='Search'/>
                <RaisedButton style={styles.button} onClick={this.getMovie} secondary={true} label='Get Title' labelPosition='before' icon={<i class="material-icons">search</i>}/>
              </form>
              <img style={styles.image} src={movie.Poster} alt='' />
            </div>
            <div style={styles.overlay}>  
              <Movie movie={movie}/>
            </div>
          </div>
        </Paper>
      </MuiThemeProvider>
    )
  }
}

export default App;
