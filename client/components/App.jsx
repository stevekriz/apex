import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  border:bold;
`;


class App extends Component {
  constructor() {
    super();

    this.state = {
      gallery: [],
      stayList: [],
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
        <Title>
          Hello World!
        </Title>
      </Wrapper>
    );
  }
}

export default App;