import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner.jsx';

const Wrapper = styled.section`
  display: flex;
  width: 100%;
  height: 400px;
  border-style: solid;
  background: papayawhip;
  border:bold;
`;


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
      <Wrapper>
        <Banner />
      </Wrapper>
    );
  }
}

export default App;