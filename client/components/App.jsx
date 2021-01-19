import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner.jsx';
import Carousel from './Carousel.jsx';

const Wrapper = styled.section`
  font-family: Circular;
  margin: 5%;
  align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
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
      page: 0
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
        <Carousel
          gallery={this.state.gallery}
          page={this.state.page}
        />
      </Wrapper>
    );
  }
}

export default App;