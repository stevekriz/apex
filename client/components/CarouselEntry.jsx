import React from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  display: inline-block;
  border-style: solid;
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
  height: 150px;
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
  font-family: Circular, -apple-system, system-ui, Roboto, Helvetica Neue, sans-serif !important;
  font-size: 16px;
  color: #222222;
  line-height: 20px;
  text-align: center;
  position: absolute;
  background-color: white;
  border-radius: 5px;
  display: inline-flex;
  width: 38%;
  height: 5%;
  z-index: 2;
  padding: 10px;
  padding-top: 5px;
  padding-left: 5px;
  margin: 10px;
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
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CarouselEntry = (props) => {
  return (
      <Entry translate={props.translate}>
        {props.entry.isSuperHost ? <IsSuperHost> SUPERHOST</IsSuperHost> : ''}
        <IsLiked>H</IsLiked>
        <ImgContainer>
          <Img src={props.entry.imgUrl} />
        </ImgContainer>
        <EntryInfo>
          <div>rating is {props.entry.AverageRating.toFixed(2)}</div>
          <div>
            {props.entry.HouseType}
            ·
            {props.entry.NumberOfBeds} beds
          </div>
          <HouseInfo>{props.entry.description}</HouseInfo>
          <div>
            $
            {props.entry.PricePerNight}
            /night
          </div>
        </EntryInfo>
      </Entry>
  );
};

export default CarouselEntry;
