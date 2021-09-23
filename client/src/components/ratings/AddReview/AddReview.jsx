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
          <StyledCover>
            <Modal
              submit={this.props.submit}
              show={this.state.show}
              hideModal={this.hideModal}
              product={this.props.product}
              characteristics={this.props.characteristics}
            />
          </StyledCover>
          <button
            className='reviewListButton'
            type='button'
            onClick={this.showModal}
          >
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
  background: darkgrey;
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;

  background-color: ${(props) =>
    props.showing ? 'rgba(0, 0, 0, 0.5)' : 'transparent'};
`;

export default AddReview;
