import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('modal-root');

const ModalContainer = styled.div`
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StayListContainer = styled.div`
-webkit-box-direction: normal;
-webkit-box-orient: vertical;
background: rgb(255, 255, 255);
position: relative;
width: 300px ;
height: 30% ;
display: flex ;
flex-direction: column ;
box-shadow: rgba(0, 0, 0, 0.28) 0px 8px 28px ;
border-radius: 12px;
`;
class StayModal extends Component {
  constructor(props) {
    super(props);

    const { stayList } = this.props;
    this.state = {
      stayList,
    };

    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log('clicked');
    return ReactDOM.createPortal(
      <ModalContainer>
        <StayListContainer>
          <div>The Modal is working</div>
          <button onClick={this.props.handleHide}>hide</button>
        </StayListContainer>
      </ModalContainer>,
      this.el,
    );
  }
}

export default StayModal;
