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
  width: 100%;
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
      overallRating: null,
      recommended: null,
      selectedCharacteristics: {
        size: null,
        width: null,
        comfort: null,
        quality: null,
        length: null,
        fit: null,
      },
      summary: '',
      body: '',
      photos: [],
      nickname: '',
      email: '',
      validation: {
        overallRating: false,
        recommended: false,
        selectedCharacteristics: false,
        body: false,
        nickname: false,
        email: false,
      },
      validated: false,
      submitAttempted: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.changeRating = this.changeRating.bind(this);
    this.changeRecommended = this.changeRecommended.bind(this);
    this.changeCharacteristic = this.changeCharacteristic.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.changeSummary = this.changeSummary.bind(this);
    this.changeNickname = this.changeNickname.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateComponent = this.validateComponent.bind(this);
    this.validateAll = this.validateAll.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.validateAll();
    this.setState({
      submitAttempted: true,
    });
  }

  handleClose() {
    this.props.hideModal();
    this.setState({
      validated: false,
      submitAttempted: false,
    });
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
    let characteristicsCopy = JSON.parse(
      JSON.stringify(this.state.selectedCharacteristics)
    );
    characteristicsCopy[e.target.name] = e.target.value;

    this.setState({
      selectedCharacteristics: characteristicsCopy,
    });
  }
  changeBody(e) {
    this.setState({
      body: e.target.value,
    });
  }
  changeSummary(e) {
    this.setState({
      summary: e.target.value,
    });
  }
  changeNickname(e) {
    this.setState({
      nickname: e.target.value,
    });
  }
  changeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  validateComponent(validator) {
    let validationCopy = JSON.parse(JSON.stringify(this.state.validation));
    if (this.state[validator]) {
      if (validator === 'nickname' || validator === 'email') {
        if (this.state[validator].length > 0) {
          validationCopy[validator] = true;
        }
      } else if (validator === 'body') {
        if (this.state[validator].length >= 50) {
          validationCopy[validator] = true;
        } else {
          validationCopy[validator] = false;
        }
      } else {
        validationCopy[validator] = true;
      }
    }
    console.log(`Validate ${validator} is `, validationCopy[validator]);
    this.setState({
      validation: validationCopy,
    });
  }

  validateAll() {
    let allValid = true;
    this.validateComponent('overallRating');
    this.validateComponent('recommended');
    this.validateComponent('selectedCharacteristics');
    this.validateComponent('body');
    this.validateComponent('nickname');
    this.validateComponent('email');
    for (let keys in this.state.validation) {
      if (this.state.validation[keys] === false) {
        allValid = false;
      }
    }
    console.log('All Valid: ', allValid);
  }

  render() {
    let showModal = this.props.show ? 'block' : 'none';
    let invalid = null;
    if (!this.state.validated && this.state.submitAttempted) {
      invalid = <h2>You must enter the following:</h2>;
    }

    return (
      <StyledModal show={showModal}>
        <h1>Write Your Review</h1>
        <h2>About the {this.props.product.name}</h2>
        {invalid}
        <form onSubmit={this.handleSubmit}>
          <OverallRating
            handleChange={this.changeRating}
            selected={this.state.overallRating}
          />
          <Recommended handleChange={this.changeRecommended} />
          <Characteristics
            characteristics={this.props.characteristics}
            handleChange={this.changeCharacteristic}
            selections={this.state.selectedCharacteristics}
          />
          <Summary
            summary={this.state.summary}
            handleChange={this.changeSummary}
          />
          <Body body={this.state.body} handleChange={this.changeBody} />
          <Photos />
          <Nickname
            nickname={this.state.nickname}
            handleChange={this.changeNickname}
          />
          <Email email={this.state.email} handleChange={this.changeEmail} />
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
