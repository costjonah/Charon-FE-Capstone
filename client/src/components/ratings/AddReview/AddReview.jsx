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
      <div>
        <StyledContainer>
          <StyledCover showing={this.state.show}>
            <Modal
              submit={this.props.submit}
              show={this.state.show}
              hideModal={this.hideModal}
              product={this.props.product}
              characteristics={this.props.characteristics}
            />
          </StyledCover>
          <button type='button' onClick={this.showModal}>
            Add a Review
          </button>
        </StyledContainer>
      </div>
    );
  }
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const StyledCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  pointer-events: ${(props) => (props.showing ? 'auto' : 'none')};

  background-color: ${(props) =>
    props.showing ? 'rgba(0, 0, 0, 0.8)' : 'transparent'};
`;

export default AddReview;
