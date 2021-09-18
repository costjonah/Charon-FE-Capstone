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
  transform: translate(-50%, -150%);
  display: ${(props) => props.show};
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      overallRating: 5,
    };
    this.handleClose = this.handleClose.bind(this);
    this.changeRating = this.changeRating.bind(this);
  }

  handleClose() {
    this.props.hideModal();
  }

  changeRating(e) {
    this.setState({
      overallRating: e.target.value,
    });
  }

  render() {
    let showModal = this.props.show ? 'block' : 'none';
    return (
      <StyledModal show={showModal}>
        <h1>Write Your Review</h1>
        <h2>About the {this.props.product.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <OverallRating
            handleChange={this.changeRating}
            selected={this.state.overallRating}
          />
          <Recommended />
          <Characteristics />
          <Summary />
          <Body />
          <Photos />
          <Nickname />
          <Email />
          <input type='submit' value='Submit' />
        </form>
        <button type='button' onClick={this.handleClose}>
          Close
        </button>
      </StyledModal>
    );
  }
}

export default Modal;
