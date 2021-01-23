import React, { Component } from 'react';
import styled from 'styled-components';

const StayEntryContainer = styled.div`
  font-family: Nunito-sans;
  display: inline-flex;
  flex-wrap: wrap;
  width: 512px;
  height 64px;
  padding: 12px;
  text-align: center;
  border-radius: 4px;
  &:hover {
    background: rgb(247, 247, 247);
  }
`;

const StayEntryButton = styled.button`
  cursor: pointer;
  position: relative;
  touch-action: manipulation;
  border-radius: 0px;
  outline: none;
  background: transparent;
  height: 64px;
  width 64px;
  border: none;
  display: block;
  text-align: center;
  padding: 0;
`;

const StayImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 64px;
  height 64px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: transparent;
`;

const Img = styled.img`
  position: relative;
  object-fit: cover;
  width: inherit;
  height: inherit;
  border-radius: 4px;
`;

const StayEntryInfoContainer = styled.div`
  position: relative;
  height: auto;
  width: auto;
  text-align: left;
  margin-left: 16px;

`;
const StayEntryType = styled.div`
  position: relative;
  display: block;
  margin-bottom: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600px;
  color: rgb(113, 113, 113);
  box-sizing: border-box;
  height: 16px;
  min-width: 432px;
  text-align: left;
`;

const StayEntryName = styled.div`
  position: relative;
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: rgb(34, 34, 34);
  margin-bottom: 4px;
  height: 20px;
  min-width: 420px;
  box-sizing: border-box;
`;

const StayEntryAmount = styled.div`
  position: relative;
  display: block;
  box-sizing: border-box;
  height 18px;
  width: 420px;
`;

class StayListEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }

  render() {
    const { stayPic, stayName } = this.props.stay;
    const { count } = this.state;
    return (
      <StayEntryContainer>
        <StayEntryButton>
          <StayImageContainer>
            <Img src={stayPic} />
          </StayImageContainer>
        </StayEntryButton>
        <StayEntryInfoContainer>
          <StayEntryType>
            Any time
          </StayEntryType>
          <StayEntryName>
            {stayName}
          </StayEntryName>
          <StayEntryAmount>
            {count === 1 ? `${count} stay` : `${count} stays`}
          </StayEntryAmount>
        </StayEntryInfoContainer>
      </StayEntryContainer>
    );
  }
}

export default StayListEntry;
