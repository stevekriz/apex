import React, { Component } from 'react';
import styled from 'styled-components';
import CarouselEntry from './CarouselEntry.jsx';

const CarouselContainer = styled.div`
  display: flex;
  position: relative;
  border-style: solid;
  width: 120%;
  height: 320px;
  right: -20px;
  flex-wrap: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    width: 0 !important
  }

`;

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <CarouselContainer translate={this.props.page}>
        {this.props.gallery.map((entry) => {
          return <CarouselEntry key={entry.imgId} entry={entry}/>
        }
      )}
      </CarouselContainer>
    );
  }
}

export default Carousel;
