import React from 'react';
import axios from 'axios';
import QuestionModal from './QuestionModal.jsx'

class AddQuestion extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clicked: false,
      email: '',
      validemail: false,
      validquestion: false,
      validnickname: false,
      question: '',
      nickname: '',
      questionerror: '',
      nickerror: '',
      emailerror:''
    }
    this.showModal= this.showModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleNicknameInput = this.handleNicknameInput.bind(this)
    this.handleQuestionInput = this.handleQuestionInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  showModal(event){
    this.setState({clicked: true})
  }
  closeModal(event){
    this.setState({questionerror: ''})
    this.setState({nickerror: ''})
    this.setState({emailerror: ''})
    this.setState({clicked: false})
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
  handleQuestionInput(event) {
    this.setState({question: event.target.value}, function (){
      if (this.state.question.length > 0) {
        this.setState({validquestion: true})
        this.setState({questionerror: ''})
      } else {
        this.setState({validquestion: false})
        this.setState({questionerror: 'error'})
      }
    })
  }

  handleNicknameInput(event) {
    this.setState({nickname: event.target.value}, function (){
      if (this.state.nickname.length > 0) {
        this.setState({validnickname: true})
        this.setState({nickerror: ''})
      } else {
        this.setState({validnickname: false})
        this.setState({nickerror: 'error'})
      }
    })
  }

  handleSubmit() {
    if (this.state.validquestion === false) {
      this.setState({questionerror: 'error'})
    } else {
      this.setState({questionerror: ''})
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
    if (this.state.validquestion === true && this.state.validemail === true && this.state.validnickname === true){
        let data = {
          body: this.state.question,
          name: this.state.nickname,
          email: this.state.email,
          product_id: this.props.product_id
        }
        axios.post(`/qa/questions/${this.props.product_id}`, data)
          .then(results => {
            this.props.getAllQuestions()
            this.closeModal()
          })
    }
  }

  render() {
    return(
      this.state.clicked === true ? <QuestionModal
        clicked={this.state.clicked}
        productName={this.props.productName}
        closeModal={this.closeModal}
        handleEmailInput={this.handleEmailInput}
        handleNicknameInput={this.handleNicknameInput}
        handleQuestionInput={this.handleQuestionInput}
        handleSubmit={this.handleSubmit}
        validquestion={this.state.validquestion}
        questionerror = {this.state.questionerror}
        nickerror ={this.state.nickerror}
        emailerror ={this.state.emailerror}
        /> : <button className='AddQuestionButton' onClick={this.showModal}> ADD QUESTION +</button>
    )
  }





}

export default AddQuestion;