import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Banner from './Banner';
import Carousel from './Carousel';
import StayModal from './StayModal';

const Wrapper = styled.div`
  background-color: rgba(247, 247, 247, 1);
  height: auto;
  width: auto;
`;
const AppContainer = styled.div`
  font-family: Nunito Sans;
  margin: 5%;
  align: center;
  display: flex;
  flex-wrap: wrap;
  width: 250%;
  max-width: 1200px;
  height: 400px;
  padding-left: 3%;
  align-items: center;
  justify-content: center;

`;

const modalRoot = document.getElementById('modal-root');

class App extends Component {
  constructor(props) {
    super(props);

    const { id } = props;

    this.state = {
      dataId: id,
      gallery: [],
      // stayList: [],
      page: 1,
      showModal: false,
    };

    this.getData = this.getData.bind(this);
    this.scrollPage = this.scrollPage.bind(this);
    this.toggleIsLiked = this.toggleIsLiked.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  getData() {
    const { dataId } = this.state;
    axios.get(`/api/img_carousel/${dataId}`)
      .then((response) => this.setState({
        gallery: response.data[0].ImgUrls,
        // stayList: response.data[0].stayList,
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

  toggleIsLiked(id, data) {
    const { dataId } = this.state;
    axios.patch(`/api/img_carousel/${dataId}/${id}`, { data })
      .then(this.getData)
      .catch((err) => { throw err; });
  }

  render() {
    const { page, gallery, showModal } = this.state;
    return (
      <>
        <Wrapper>
          <AppContainer>
            <Banner
              direction={this.scrollPage}
              page={page}
              maxPage={Math.ceil(gallery.length / 4)}
            />
            <Carousel
              toggleLiked={this.toggleIsLiked}
              gallery={gallery}
              page={page}
            />
          </AppContainer>
        </Wrapper>
        <button onClick={this.handleShow}>show</button>
        {showModal ? <StayModal handleHide={this.handleHide} />
          : null}

      </>
    );
  }
}

export default App;
