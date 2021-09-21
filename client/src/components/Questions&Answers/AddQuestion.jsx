import React from 'react';
import axios from 'axios';
import QuestionModal from './QuestionModal.jsx';

class AddQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      email: '',
      question: '',
      nickname: '',
    };
    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleNicknameInput = this.handleNicknameInput.bind(this);
    this.handleQuestionInput = this.handleQuestionInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkValidEmail = this.checkValidEmail.bind(this);
  }

  showModal(event) {
    this.setState({ clicked: true });
  }
  closeModal(event) {
    this.setState({ clicked: false });
  }
  handleEmailInput(event) {
    this.setState({ email: event.target.value });
  }
  handleQuestionInput(event) {
    this.setState({ question: event.target.value });
  }
  handleNicknameInput(event) {
    this.setState({ nickname: event.target.value });
  }
  checkValidEmail(email) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  handleSubmit() {
    var valid = this.checkValidEmail(this.state.email);
    if (
      this.state.question !== '' &&
      this.state.name !== '' &&
      this.state.email !== ''
    ) {
      if (valid === true) {
        let data = {
          body: this.state.question,
          name: this.state.nickname,
          email: this.state.email,
          product_id: this.props.product_id,
        };
        axios
          .post(`/qa/questions/${this.props.product_id}`, data)
          .then((results) => {
            this.props.getAllQuestions();
          });
      } else {
        alert('Please enter valid email');
      }
    } else {
      alert('Please enter all inputs');
    }
  }

  render() {
    return this.state.clicked === true ? (
      <QuestionModal
        clicked={this.state.clicked}
        productName={this.props.productName}
        closeModal={this.closeModal}
        handleEmailInput={this.handleEmailInput}
        handleNicknameInput={this.handleNicknameInput}
        handleQuestionInput={this.handleQuestionInput}
        handleSubmit={this.handleSubmit}
      />
    ) : (
      <button className='AddQuestionButton' onClick={this.showModal}>
        {' '}
        ADD QUESTION +
      </button>
    );
  }
}

export default AddQuestion;
