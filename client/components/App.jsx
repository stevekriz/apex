import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner';
import Carousel from './Carousel';

const Wrapper = styled.section`
  margin: 5%;
  align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  height: 400px;
  background-color: rgba(247, 247, 247, 1);
`;

class App extends Component {
  constructor() {
    super();

    this.state = {
      dataId: window.location.pathname.match(/\/(\d+)\//),
      gallery: [],
      stayList: [],
      page: 1,
    };

    this.getData = this.getData.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get(`/api/img_carousel/${window.location.pathname.match(/\/(\d+)\//)[1]}`)
      .then((response) => this.setState({
        gallery: response.data[0].ImgUrls,
        stayList: response.data[0].stayList,
      }))
      .catch((error) => { throw error; });
  }

  scrollPage(direction) {
    const maxPage = Math.ceil(this.state.gallery.length / 4);
    if (direction === 'right') {
      if (this.state.page === maxPage) {
        this.setState({
          page: 1,
        });
      } else {
        this.setState({
          page: this.state.page + 1,
        });
      }
    } else if (direction === 'left') {
      if (this.state.page === 1) {
        this.setState({
          page: maxPage,
        });
      } else {
        this.setState({
          page: this.state.page - 1,
        });
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <Banner
          direction={this.scrollPage}
          page={this.state.page}
          maxPage={Math.ceil(this.state.gallery.length / 4)}
        />
        <Carousel
          gallery={this.state.gallery}
          page={this.state.page}
        />
      </Wrapper>
    );
  }
}

export default App;
