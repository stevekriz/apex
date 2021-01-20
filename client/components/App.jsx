import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner.jsx';
import Carousel from './Carousel.jsx';

const Wrapper = styled.section`
  margin: 5%;
  align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
  height: 400px;
  background-color: rgba(247, 247, 247, 1);
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      stayList: [],
      page: 2,
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/img_carousel/7')
      .then((response) => this.setState({
        gallery: response.data[0].ImgUrls,
        stayList: response.data[0].stayList,
      }))
      .catch((error) => {throw error});
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