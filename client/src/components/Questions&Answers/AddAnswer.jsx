import React from 'react';
import axios from 'axios';
import AnswerModal from './AnswerModal.jsx';


class AddAnswer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      email: '',
      answer: '',
      nickname: '',
      answererror: '',
      nickerror: '',
      emailerror:'',
      photos: [],
      validemail: false,
      validanswer: false,
      validnickname: false,
    }
    this.showAnswerModal = this.showAnswerModal.bind(this)
    this.closeAnswerModal = this.closeAnswerModal.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleNicknameInput = this.handleNicknameInput.bind(this)
    this.handleAnswerInput = this.handleAnswerInput.bind(this)
    this.handlePhotoChange = this.handlePhotoChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  showAnswerModal() {
    this.setState({clicked: true})
  }
  closeAnswerModal() {
    this.setState({clicked: false})
    this.setState({photos: []})
    this.setState({answererror: ''})
    this.setState({nickerror: ''})
    this.setState({emailerror: ''})

  }
  handleEmailInput(event) {
    this.setState({email: event.target.value}, function() {
      var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (this.state.email.match(validRegex)) {
        this.setState({validemail: true})
        this.setState({emailerror: ''})
      } else {
        this.setState({validemail: false})
        this.setState({emailerror: 'error'})
      }
    })
  }
  handleAnswerInput(event) {
    this.setState({answer: event.target.value}, function (){
      if (this.state.answer.length > 0) {
        this.setState({validanswer: true})
        this.setState({answererror: ''})
      } else {
        this.setState({validanswer: false})
        this.setState({answererror: 'error'})
      }
    })
  }
  handleNicknameInput(event) {
    this.setState({nickname: event.target.value}, function (){
      if(this.state.nickname.length > 0) {
        this.setState({validnickname: true})
        this.setState({nickerror: ''})
      } else {
        this.setState({validnickname: false})
        this.setState({nickerror: 'error'})
      }
    })
  }
  handlePhotoChange(event) {
    var myarr = this.state.photos
    myarr.push(URL.createObjectURL(event.target.files[0]))
    this.setState({photos: myarr})
  }
  handleSubmit() {
    if (this.state.validanswer === false) {
      this.setState({answererror: 'error'})
    } else {
      this.setState({answererror: ''})
    }
    if (this.state.validnickname === false) {
      this.setState({nickerror: 'error'})
    } else {
      this.setState({nickerror: ''})
    }
    if (this.state.validemail === false) {
      this.setState({emailerror: 'error'})
    } else {
      this.setState({emailerror: ''})
    }
    console.log(this.state.validanswer)
    console.log(this.state.validnickname)
    console.log(this.state.validemail)
    if (this.state.validanswer === true && this.state.validemail === true && this.state.validnickname === true){
      let data = {
        body: this.state.answer,
        name: this.state.nickname,
        email: this.state.email,
        photos: this.state.photos
      }
      axios.post(`/qa/questions/${this.props.question_id}/answers`, data)
        .then(results => {
          this.props.getAllQuestions()
          this.closeAnswerModal()
        })
        .catch(err => {
          console.log(err)
        })
      }
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
      photos={this.state.photos}
      handlePhotoChange={this.handlePhotoChange}
      handleSubmit={this.handleSubmit}
      handleEmailInput={this.handleEmailInput}
      handleNicknameInput={this.handleNicknameInput}
      nickerror={this.state.nickerror}
      answererror={this.state.answererror}
      emailerror={this.state.emailerror}
      />
       :<span className='AddAnswerButton' onClick={this.showAnswerModal}> Add Answer</span>
    )
  }
}

export default AddAnswer

