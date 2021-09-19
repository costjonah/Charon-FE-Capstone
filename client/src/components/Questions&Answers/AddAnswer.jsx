import React from 'react';
import axios from 'axios';
import AnswerModal from './AnswerModal.jsx';


class AddAnswer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      photo: false,
      email: '',
      answer: '',
      nickname: '',
      photos: []
    }
    this.showAnswerModal = this.showAnswerModal.bind(this)
    this.closeAnswerModal = this.closeAnswerModal.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleNicknameInput = this.handleNicknameInput.bind(this)
    this.handleAnswerInput = this.handleAnswerInput.bind(this)
    this.showPhotoModal = this.showPhotoModal.bind(this)
    this.closePhotoModal = this.closePhotoModal.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  showAnswerModal() {
    this.setState({clicked: true})
  }
  closeAnswerModal() {
    this.setState({clicked: false})
    this.setState({photos: []})
  }
  showPhotoModal() {
    this.setState({photo: true})
  }
  closePhotoModal() {
    this.setState({photo: false})
  }
  handleEmailInput(event) {
    this.setState({email: event.target.value})
  }
  handleAnswerInput(event) {
    this.setState({answer: event.target.value})
  }
  handleNicknameInput(event) {
    this.setState({nickname: event.target.value})
  }
  handlePhotoChange(event) {
    var myarr = this.state.photos
    myarr.push(URL.createObjectURL(event.target.files[0]))
    this.setState({photos: myarr})
  }
  handleSubmit() {
    let data = {
      body: this.state.answer,
      name: this.state.nickname,
      email: this.state.email,
      photos: this.state.photos
    }
    console.log(data)
    axios.post(`/qa/questions/${this.props.question_id}/answers`, data)
      .catch(err => {
        console.log(err)
      })
  }

  render(){
    return (
      this.state.clicked === true ?
      <AnswerModal
      clicked={this.state.clicked}
      productName={this.props.productName}
      question_body={this.props.question_body}
      handleAnswerInput={this.handleAnswerInput}
      closeAnswerModal={this.closeAnswerModal}
      showPhotoModal={this.showPhotoModal}
      closePhotoModal={this.closePhotoModal}
      photo={this.state.photo}
      photos={this.state.photos}
      handlePhotoChange={this.handlePhotoChange}
      handleSubmit={this.handleSubmit}
      handleEmailInput={this.handleEmailInput}
      handleNicknameInput={this.handleNicknameInput}
      />
       :<span className='AddAnswerButton' onClick={this.showAnswerModal}> Add Answer</span>
    )
  }
}

export default AddAnswer

