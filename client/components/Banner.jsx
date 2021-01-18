import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  border-style: solid;
  width: 1128px;
  height: 56px;
`;

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <h1>More places to stay</h1>
      </Wrapper>

    );
  }
}

export default Banner;
