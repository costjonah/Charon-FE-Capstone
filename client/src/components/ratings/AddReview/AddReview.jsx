import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ show: true });
  }
  hideModal() {
    this.setState({ show: false });
  }

  render() {
    return (
      <StyledContainer>
        <Modal
          submit={this.props.submit}
          show={this.state.show}
          hideModal={this.hideModal}
          product={this.props.product}
          characteristics={this.props.characteristics}
        />
        <button type='button' onClick={this.showModal}>
          Add a Review
        </button>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default AddReview;
