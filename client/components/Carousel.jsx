import React, { Component } from 'react';
import styled from 'styled-components';
import CarouselEntry from './CarouselEntry.jsx';

const Wrapper = styled.div`
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
      <Wrapper>
        {this.props.gallery.map((entry) => {
          return <CarouselEntry key={entry.imgId} entry={entry}/>
        }
      )}
      </Wrapper>
    );
  }
}

export default Carousel;
