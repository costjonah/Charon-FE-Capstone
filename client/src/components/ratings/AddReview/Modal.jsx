import React from 'react';
import styled from 'styled-components';

import Body from './NewReviewComponents/Body.jsx';
import Characteristics from './NewReviewComponents/Characteristics.jsx';
import Email from './NewReviewComponents/Email.jsx';
import Nickname from './NewReviewComponents/Nickname.jsx';
import OverallRating from './NewReviewComponents/OverallRating.jsx';
import Photos from './NewReviewComponents/Photos.jsx';
import Recommended from './NewReviewComponents/Recommended.jsx';
import Summary from './NewReviewComponents/Summary.jsx';

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
      recommended: true,
      characteristics: {
        size: null,
        width: null,
        comfort: null,
        quality: null,
        length: null,
        fit: null,
      },
    };
    this.handleClose = this.handleClose.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeRecommended = this.changeRecommended.bind(this);
    this.changeCharacteristic = this.changeCharacteristic.bind(this);
  }

  handleClose() {
    this.props.hideModal();
  }

  changeRating(e) {
    this.setState({
      overallRating: e.target.value,
    });
  }
  changeRecommended(e) {
    this.setState({
      recommended: e.target.value,
    });
  }
  changeCharacteristic(e) {
    console.log(e.target.name, e.target.value);
    let characteristicsCopy = JSON.parse(
      JSON.stringify(this.state.characteristics)
    );
    characteristicsCopy[e.target.name] = e.target.value;

    this.setState({
      characteristics: characteristicsCopy,
    });
  }

  render() {
    console.log(this.state);
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
          <Recommended handleChange={this.changeRecommended} />
          <Characteristics
            characteristics={this.props.characteristics}
            handleChange={this.changeCharacteristic}
            selections={this.state.characteristics}
          />
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
