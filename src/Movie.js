import React, {Component} from 'react';

class Movie extends Component {

  render() {
    const styles = {
      box: {
        flex: 1,
        display: 'inline-block',
        fontStyle: 'bolder',
      },
      header: {
        fontFamily: 'Archivo Narrow',
        textAlign: 'left',
        fontSize: '18px',
        float: 'center',
        paddingLeft: '25px',
        paddingTop: '20px',
        paddingBottom: '20px',
        fontStyle: 'bold',
        color: '#50525f',
        borderTop: '2px solid #5b83fb'
        
      },
      info: {
        fontFamily: 'Archivo Narrow',
        fontSize: '18px',
        padding: '2px',
        postion: 'fixed',
        color: '#f46868',

      },
      details: {
        fontFamily: 'Archivo Narrow',
        paddingTop: '30px',
        paddingBottom: '20px',
        fontStyle: 'bolder',
        float: 'center',
        fontSize: '32px',
        color: '#2acabf',

      },
      flex: {
        flex: 1,
        display: 'flex',
      }
    }
    const {movie} = this.props
    return (
      <div style={styles.flex}>
        <div style={styles.box}>
          <div style={styles.details}>Title Details</div>
          <div style={styles.header}>Title: <span style = {styles.info}>{movie.Title}</span> </div>
          <div style={styles.header}>Actors: <span style = {styles.info}>{movie.Actors}</span></div>
          <div style={styles.header}>Director: <span style={styles.info}>{movie.Director}</span></div>
          <div style={styles.header}>Released: <span style={styles.info}>{movie.Released}</span></div>
          <div style={styles.header}>Rated: <span style={styles.info}>{movie.Rated}</span></div>
          <div style={styles.header}>Awards: <span style={styles.info}>{movie.Awards}</span></div>
          <div style={styles.header}>IMDB Rating: <span style={styles.info}>{movie.ImdbRating}</span></div>
          <div style={styles.header}>Plot: <span style={styles.info}>{movie.Plot}</span></div>
        </div>
      </div>
    )
  }
}

export default Movie;