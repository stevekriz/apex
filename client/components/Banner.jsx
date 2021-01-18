import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border-style: solid;
  position: relative;
  right: -20px;
  top: 15px;
  width: 95%;
  height: 56px;
`;

const HeaderText = styled.h2`
  font-family: Circular;
  font-size: 22px;
  display: flex;
  position: relative;
  float: left;
  width: 200px;
  height: auto:
`;

const PageIndicator = styled.div`
  float: right;
`;

const PageScrollButton = styled.button`
  border-color: rgba( 255, 255, 255, 0.9);
  border-bottom-color: rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  cursor: pointer
  display: inline-flex;
  float: right;
  line-height: normal;
  height: 32px;
  width; auto;
`;


class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Wrapper>
        <HeaderText>
          More places to stay
        </HeaderText>
        <PageScrollButton> B </PageScrollButton>
        <PageScrollButton> B </PageScrollButton>
        <PageIndicator> 1/3 </PageIndicator>
      </Wrapper>

    );
  }
}

export default Banner;
