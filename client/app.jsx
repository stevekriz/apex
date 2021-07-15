import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'axios';
import styled from 'styled-components';

import Banner from './components/Banner';
import Carousel from './components/Carousel';

const CarouselAppBackdrop = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(247, 247, 247, 1);
  height: auto;
`;

const CarouselAppContainer = styled.div`
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif Sans;
  margin: 5%;
  align: center;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

class CarouselApp extends React.Component {
  constructor(props) {
    super(props);

    const { primaryListingId } = props;

    this.state = {
      primaryListingId,
      gallery: [],
      stayList: [],
      page: 1,
      isLoading: true,
    };

    this.getData = this.getData.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const { primaryListingId } = this.state;
    get(`/api/similar_listings/${primaryListingId}`)
      .then((response) => {
        this.setState({
          gallery: response.data.rows,
          isLoading: false,
        });
      })
      .catch((err) => {
        throw err;
      });
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

  render() {
    const { page, gallery, stayList, isLoading } = this.state;

    if (isLoading) {
      return <CarouselAppBackdrop>...Loading</CarouselAppBackdrop>;
    }

    return (
      <CarouselAppBackdrop>
        <CarouselAppContainer>
          <Banner
            direction={this.scrollPage}
            page={page}
            maxPage={Math.ceil(gallery.length / 4)}
          />
          <Carousel stayList={stayList} gallery={gallery} page={page} />
        </CarouselAppContainer>
      </CarouselAppBackdrop>
    );
  }
}

export default CarouselApp;

CarouselApp.propTypes = {
  primaryListingId: PropTypes.number.isRequired,
};
