import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <p>Hello World</p>
        <ul>
          {this.props.data.map((movie) => {
            return <li>{movie.title}</li>
          })}
          </ul>
        </div>

    )
  }
}

export default App;

