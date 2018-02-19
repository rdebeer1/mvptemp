import React, {Component} from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { RaisedButton } from 'material-ui';
import { Paper } from 'material-ui';
import Divider from 'material-ui/Divider';
class Movie extends Component {


  render() {
    const styles = {
      box: {
        display: 'inline',
      },
      header: {
        textAlign: 'left',
        fontSize: 18,
        margin: 15,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
        flex: 1,
        
      },
      info: {
        position: 'relative',
        fontSize: 16,
        fontStyle: 'italic',
        bottom: 6,
        left: 8,
        display: 'inline-block',
        width: 700,
      },
      details: {
        textAlign: 'center',
        display: 'flex',
        float: 'center',
        fontSize: 24,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
        margin: 20,

      },
      icons: {
        fontSize: 24,
        float: 'center',
        margin: 'auto',
        color: '#00BCD4',
        marginBottom: 2,
      },
      plot: {
        position: 'relative',
        fontSize: 16,
        fontStyle: 'italic',
        bottom: -2,
        left: 8,
        display: 'inline-block',
        width: 700,
      }
    }
    const {movie} = this.props
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <div style={styles.box}>
          <div style={styles.details}>Details</div>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">local_movies</i><span style = {styles.info}>{movie.Title}</span> </Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">people</i><span style = {styles.info}>{movie.Actors}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">videocam</i><span style={styles.info}>{movie.Director}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">event</i><span style={styles.info}>{movie.Released}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">priority_high</i><span style={styles.info}>{movie.Rated}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">grade</i><span style={styles.info}>{movie.Awards}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">trending_up</i><span style={styles.info}>{movie.ImdbRating}</span></Paper>
          <Paper style={styles.header} zDepth={5}><i style={styles.icons} class="material-icons">short_text</i><span style={styles.plot}>{movie.Plot}</span></Paper>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Movie;