import React from 'react';
import styled from 'styled-components';

const Modal = props => {
  return (
    <ModalContainer showModal={props.showModal}>
      <ModalContent>
        <CloseButton onClick={props.onCloseButtonClicked}>&times;</CloseButton>
        {props.children}
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: ${props => (props.showModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  padding-top: 200px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  position: relative;
  background-color: #ddd;
  margin: auto;
  padding: 30px;
  width: 35rem;

  @media (max-width: 500px) {
    width: 15rem;
  }
`;

const CloseButton = styled.span`
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
  position: absolute;
  right: 10px;
  top: 10px;
  line-height: 18px;
  text-align: center;

  &:hover,
  &:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
`;
