import React from 'react';
import styled from 'styled-components';

const StarContainer = styled.span`
  width: 8px;
  height: 8px;
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

const EntryInfo = styled.div`
  position: relative;
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
  font-size: 12px;
  background-color: #f8f8f7;
  line-height: 20px;
  text-align: center;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  display: inline-flex;
  width: 23%;
  height: 2%;
  z-index: 2;
  padding: 10px;
  padding-top: 5px;
  padding-left: 5px;
  margin: 10px;
  box-shadow: black;
`;

const IsLiked = styled.div`
  color: red;
  position: absolute;
  display: inline-flex;
  float: right;
  z-index: 2;
  padding: 15px;
  padding-left: 250px;
`;

const HouseInfo = styled.div`
  line-height: 20px;
  padding-top: 10px;
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CarouselEntry = (props) => {
  const { entry, translate } = props;
  const {
    PricePerNight,
    isSuperHost,
    imgUrl,
    AverageRating,
    HouseType,
    NumberOfBeds,
    description,
  } = entry;
  return (
    <Entry translate={translate}>
      {isSuperHost ? <IsSuperHost> SUPERHOST</IsSuperHost> : ''}
      {/* <IsLiked>H</IsLiked> */}
      <ImgContainer>
        <Img src={imgUrl} />
      </ImgContainer>
      <EntryInfo>
        <HouseInfo>
          <div>
            <StarContainer>
              <i className="fas fa-star" />
            </StarContainer>
            {` ${AverageRating.toFixed(2)}`}
            <ReviewCount>
              {` (${Math.round(Math.random() * (200 - 22) + 22)})`}
            </ReviewCount>
          </div>
          <div>
            {`${HouseType} · ${NumberOfBeds} beds`}
          </div>

          <div>
            {description}
          </div>
          <div>
            {`$${PricePerNight} / night `}
          </div>
        </HouseInfo>
      </EntryInfo>
    </Entry>

  );
};

export default CarouselEntry;
