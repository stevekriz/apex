import React, { Component } from 'react';
import styled from 'styled-components';
import CarouselEntry from './CarouselEntry.jsx';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  border-style: solid;
  width: 95%;
  height: 300px;
  right: -20px;
`;

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        {this.props.gallery.map( (entry) => {
          let page = Math.floor((entry.imgId) / 4);
          if (page === this.props.page) {
            return <CarouselEntry key={entry.imgId} entry={entry}/>;
          }
        })}
      </Wrapper>
    );
  }
}

export default Carousel;