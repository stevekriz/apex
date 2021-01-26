import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StayModal from './StayModal';

const StarContainer = styled.span`
  width: 20px;
  height: 20px;
  color: #ff385c;
`;

const ReviewCount = styled.span`
  color: #717175;
`;

const Entry = styled.div`
  font-size: 16px;
  display: inline-block;
  position: relative;
  alignment: left;
  box-sizing: border-box;
  width: 23.2%;
  height: auto;
  cursor: pointer;
  padding-top: 20px;
  margin: 10px;
  transform: translateX(-${(props) => (props.page - 1) * 1187}px);
  transition: transform 0.3s ease-in;
`;

const ImgContainer = styled.div`
  position: relative;
  align-items: center;
  display: flex;
  height: 190px;
  width: 270px;
`;

const Img = styled.img`
  position: relative;
  display: inline-flex;
  border-radius: 8px;
  height: 100%;
  width: 100%;
`;

const IsSuperHost = styled.div`
  font-size: 11px;
  font-weight: bold;
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  background-color: rgba(255, 255, 255, 0.95);
  color: rgb(34, 34, 34);
  line-height: 20px;
  text-align: center;
  position: absolute;
  background-color: white;
  border-radius: 3px;
  display: inline-flex;
  width: 32%;
  height: 2%;
  z-index: 2;
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 12px;
  padding-bottom: 20px;
  margin: 10px;
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px, rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

const IsLikedContainer = styled.div`
  position: absolute;
  display: inline-flex;
  float: right;
  z-index: 2;
  height: 34px;
  width: 32px;
  right: 18px;
  top: 25px;
`;

const IsLikedButton = styled.button`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  border-radius: 0px;
  outline: none;
  background: transparent;
  height: 100%;
  width 100%;
  border: none;
  display: block;
`;

const IsLikedSVG = styled.svg`
  display: block;
  fill: ${(props) => (props.isClicked ? 'rgb(255, 56, 92)' : 'rgba(0, 0, 0, 0.5)')};
  height: 24px;
  width: 24px;
  stroke:
  rgb(255, 255, 255);
  stroke-width: 2;
  overflow: visible;
`;

const StarSVG = styled.svg`
  height: 14px;
  width: 14px;
  fill: currentcolor;
`;
const HouseInfo = styled.div`
  position: relative;
  line-height: 20px;
  padding-top: 10px;
  max-width: 95%;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

class CarouselEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
      showModal: false,
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.toggleLiked = this.toggleLiked.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleNotLiked = this.toggleNotLiked.bind(this);
  }

  handleClick() {
    const { liked } = this.state;
    if (!liked) {
      this.handleShow();
    } else {
      this.toggleNotLiked();
    }
  }

  handleShow() {
    this.setState({ showModal: true });
  }

  handleHide() {
    this.setState({ showModal: false });
  }

  toggleLiked() {
    this.setState({ liked: true });
  }

  toggleNotLiked() {
    this.setState({ liked: false });
  }

  render() {
    const { entry, page, stayList } = this.props;
    const {
      PricePerNight,
      isSuperHost,
      imgUrl,
      AverageRating,
      HouseType,
      NumberOfBeds,
      description,
      NumOfReviews,
    } = entry;
    const { liked, showModal } = this.state;
    return (
      <Entry page={page}>
        {isSuperHost ? (<IsSuperHost>SUPERHOST</IsSuperHost>) : ''}
        <IsLikedContainer>
          <IsLikedButton
            onClick={this.handleClick}
          >
            <IsLikedSVG
              isClicked={liked}
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" />
            </IsLikedSVG>
          </IsLikedButton>
        </IsLikedContainer>
        <ImgContainer>
          <Img src={imgUrl} />
        </ImgContainer>
        <HouseInfo>
          <div>
            <StarContainer>
              <StarSVG
                viewBox="0 0 1000 1000"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z" />
              </StarSVG>
            </StarContainer>
            {` ${AverageRating}`}
            <ReviewCount>
              {` (${NumOfReviews})`}
            </ReviewCount>
          </div>
          <div>
            {`${HouseType} · ${NumberOfBeds} beds`}
          </div>
          <span>{description}</span>
          <div>
            <b>{`$${PricePerNight}`}</b>
            {' '}
            {'/ night '}
          </div>
        </HouseInfo>
        {showModal ? (
          <StayModal
            toggleLiked={this.toggleLiked}
            handleHide={this.handleHide}
            stayList={stayList}
          />
        ) : null}
      </Entry>
    );
  }
}

export default CarouselEntry;

CarouselEntry.propTypes = {
  page: PropTypes.number.isRequired,
  stayList: PropTypes.arrayOf(PropTypes.object).isRequired,
  entry: PropTypes.shape({
    PricePerNight: PropTypes.number.isRequired,
    isSuperHost: PropTypes.bool.isRequired,
    imgUrl: PropTypes.string.isRequired,
    AverageRating: PropTypes.string.isRequired,
    HouseType: PropTypes.string.isRequired,
    NumberOfBeds: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    NumOfReviews: PropTypes.number.isRequired,
  }).isRequired,
};
