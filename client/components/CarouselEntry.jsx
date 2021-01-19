import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  position: relative;
  alignment: center;
  border: solid;
  height: auto;
  width: 20%;
  left: 10px;
  margin: 10px;
  padding: 10px;
`;

const EntryInfo = styled.div`
  position: relative;
  border: solid;
  border-size: 2px;
`;

const ImgContainer = styled.div`
  position: relative;
  border-style: solid;
  height: 65%;
  width: auto;
`;

const Img = styled.img`
  position: relative;
  border-radius: 15px;
  height: 100%;
  width: 100%;
`;

const isSuperHost = styled.div`
  position: absolute;
  background-color: white;
  z-index: 2;
  top: 20px;
  left: 0;
  padding: 5px;
`;

const houseInfo = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;


const isLiked = styled.div`
`;

const CarouselEntry = (props) => {
  return (
    <>
      <Entry>
        <isSuperHost>SUPERHOST</isSuperHost>
        <ImgContainer>
          <Img src={props.entry.imgUrl}></Img>
        </ImgContainer>
        <EntryInfo>
          <div>rating is {props.entry.AverageRating.toFixed(2)}</div>
          <div> {props.entry.HouseType} · {props.entry.NumberOfBeds} beds</div>
          <houseInfo>{props.entry.description}</houseInfo>
          <div> ${props.entry.PricePerNight}/night</div>
        </EntryInfo>
      </Entry>
    </>
  );
};

export default CarouselEntry;