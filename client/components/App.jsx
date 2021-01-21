import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner';
import Carousel from './Carousel';

const Wrapper = styled.div`
  font-family: Circular !important;
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
  constructor(props) {
    super(props);

    const { id } = props;

    this.state = {
      dataId: id,
      gallery: [],
      stayList: [],
      page: 1,
    };

    this.getData = this.getData.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
    this.toggleIsLiked = this.toggleIsLiked.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { dataId } = this.state;
    axios.get(`/api/img_carousel/${dataId}`)
      .then((response) => this.setState({
        gallery: response.data[0].ImgUrls,
        stayList: response.data[0].stayList,
      }))
      .catch((error) => { throw error; });
  }

  scrollPage(direction) {
    const { gallery, page } = this.state;
    const maxPage = Math.ceil(gallery.length / 4);
    if (direction === 'right') {
      if (page === maxPage) {
        this.setState({
          page: 1,
        });
      } else {
        this.setState({
          page: page + 1,
        });
      }
    } else if (direction === 'left') {
      if (page === 1) {
        this.setState({
          page: maxPage,
        });
      } else {
        this.setState({
          page: page - 1,
        });
      }
    }
  }

  toggleIsLiked(id) {
    console.log(id);
    axios.patch(`/api/img_carousel/${id}`)
      .then(this.getData)
      .catch((err) => { throw err; });
  }

  render() {
    const { page, gallery } = this.state;
    return (
      <Wrapper>
        <Banner
          direction={this.scrollPage}
          page={page}
          maxPage={Math.ceil(gallery.length / 4)}
        />
        <Carousel
          gallery={gallery}
          page={page}
        />
      </Wrapper>
    );
  }
}

export default App;
