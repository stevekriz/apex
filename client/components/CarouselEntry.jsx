import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

const Entry = styled.div`
  alignment: center;
  border: solid;
  height: auto;
  width: 20%;
  left: 47px;
  margin: 10px;
  padding: 10px;
  position: relative;
`;

const EntryInfo = styled.div`
  border: solid;
  border-size: 2px;

`;

const Img = styled.div`

  width: auto;
  height: 75%;
`;
const CarouselEntry = (props) => {
  return (
    <>
      <Entry>
        <Img>
          <img src={props.entry.imgUrl} width="270" height="180" border-radius="15%"/>
        </Img>
        <EntryInfo>
          <div>ID is {props.entry.imgId}</div>
          <div>rating is {props.entry.AverageRating.toFixed(2)}</div>
          <div>Number of Beds {props.entry.NumberOfBeds}</div>
        </EntryInfo>
      </Entry>

    </>

  );
};


export default CarouselEntry;