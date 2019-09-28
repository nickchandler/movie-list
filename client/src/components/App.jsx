import React from 'react';
import MovieList from './MovieList.jsx';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies : []

    }
    this.getMovies = this.getMovies.bind(this);
  }

  getMovies() {
    Axios.get('/movies')
    .then((movies) => {
      this.setState({
        movies: movies.data
      })
      }
    )
  }

  componentDidMount() {
    this.getMovies();
  }




  render() {
    return (
      <div>
        <MovieList movies={this.props.data}/>
      </div>
    )
  }
}

export default App;

