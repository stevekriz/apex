import React, { Component, Fragment } from 'react';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      stayList: [],
    };

    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/img_carousel/5')
      .then(response => this.setState({
        gallery: response.data[0].ImgUrls,
        stayList: response.data[0].stayList
      })
      )
      .catch(console.log);
  }


  render() {
    return (
      <>
        <h1>More places to stay</h1>
        <div>hello</div>
      </>

    );
  }
}

export default App;