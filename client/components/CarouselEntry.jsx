import React, { Component } from 'react';
import styled from 'styled-components';

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
  transform: translateX(-${(props) => (props.translate - 1) * 1187}px);
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

const IsSuperHost = styled.span`
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
  width: 23%;
  height: 2%;
  z-index: 2;
  padding-top: 2px;
  padding-left: 8px;
  padding-right: 12px;
  padding-bottom: 15px;
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

    // const { isLiked } = this.props;

    this.state = {
      liked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { liked } = this.state;
    this.setState({
      liked: !liked,
    });
  }

  render() {
    const { entry, translate, isLiked } = this.props;
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
    const { liked } = this.state;
    return (
      <Entry translate={translate}>
        {isSuperHost ? (<IsSuperHost>SUPERHOST</IsSuperHost>) : ''}
        <IsLikedContainer>
          <IsLikedButton
            onClick={() => isLiked()}
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
              <i className="fas fa-star" />
            </StarContainer>
            {` ${AverageRating.toFixed(2)}`}
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
      </Entry>
    );
  }
}

export default CarouselEntry;
