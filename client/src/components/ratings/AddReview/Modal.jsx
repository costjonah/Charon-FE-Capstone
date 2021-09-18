import React from 'react';
import styled from 'styled-components';

import Body from './NewReviewComponents/Body.jsx';
import Characteristics from './NewReviewComponents/Characteristics.jsx';
import Email from './NewReviewComponents/Email.jsx';
import Nickname from './NewReviewComponents/Nickname.jsx';
import OverallRating from './NewReviewComponents/OverallRating.jsx';
import Photos from './NewReviewComponents/Photos.jsx';
import Recommended from './NewReviewComponents/Body.jsx';
import Summary from './NewReviewComponents/Body.jsx';

const StyledModal = styled.div`
  background: lightgrey;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.show};
`;

const Modal = (props) => {
  const showModal = props.show ? 'block' : 'none';

  let handleClose = () => {
    props.hideModal();
  };

  return (
    <StyledModal show={showModal}>
      <h1>Write Your Review</h1>
      <h2>About the PRODUCT-NAME-HERE</h2>
      <form>
        <OverallRating />
        <Recommended />
        <Characteristics />
        <Summary />
        <Body />
        <Photos />
        <Nickname />
        <Email />
        <input type='submit' value='Submit' />
      </form>
      <button type='button' onClick={handleClose}>
        Close
      </button>
    </StyledModal>
  );
};

export default Modal;
