import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

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
          show={this.state.show}
          hideModal={this.hideModal}
          product={this.props.product}
        />
        <button type='button' onClick={this.showModal}>
          Add a Review
        </button>
      </StyledContainer>
    );
  }

  componentDidMount() {}
}

export default AddReview;
