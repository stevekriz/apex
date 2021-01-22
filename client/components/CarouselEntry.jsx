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
  background-color: #f8f8f7;
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
  box-shadow: black;
`;

const IsLiked = styled.div`
  position: absolute;
  display: inline-flex;
  float: right;
  z-index: 2;
  padding: 15px;
  padding-left: 230px;
`;

const FilledHeart = styled.div`
  height: 16px;
  width: 16px;
  color: #e62051;
`;

const UnfilledHeart = styled.div`
  height: 16px;
  width: 16px;
  color: white;
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
    const { entry, translate } = this.props;
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
        {isSuperHost ? (
          <IsSuperHost>
            SUPERHOST
          </IsSuperHost>
        ) : ''}
        <IsLiked>
          {liked
            ? (
              <FilledHeart>
                <i className="fas fa-heart" onClick={this.handleClick} />
              </FilledHeart>
            )
            : (
              <UnfilledHeart>
                <i className="far fa-heart" onClick={this.handleClick} />
              </UnfilledHeart>
            )}
        </IsLiked>
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
