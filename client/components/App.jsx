import React, { Component, Fragment } from 'react';
import axios from 'axios';


class App extends Component {
  constructor() {
    super();

    this.state = {
      gallery: []
    };

    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/img_carousel/5')
      .then(response => this.setState({
        gallery: response.data
      })
      )
      .catch(console.log);
  }


  render() {
    return (
      this.state.gallery.map(element => {
        return <div>{element.id}</div>;
      })
    );
  }
}

export default App;