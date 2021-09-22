import React from 'react';
import Answer from './Answer.jsx';
import axios from 'axios';

class AnswersList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      answers: [],
      length: 2
    }
    this.helpfulAnswerClick = this.helpfulAnswerClick.bind(this)
    this.getAllAnswers = this.getAllAnswers.bind(this)
    this.reportAnswerClick = this.reportAnswerClick.bind(this)
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this)
  }


  componentDidMount() {
    this.getAllAnswers()
  }
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props) {
      this.getAllAnswers()
    }
  }

  getAllAnswers() {
    var sellerarr =[]
    var arr = []
    for (var key in this.props.answers) {
      if (this.props.answers[key].answerer_name === 'Seller' || this.props.answers[key].answerer_name === 'seller') {
        sellerarr.push(this.props.answers[key])
      } else {
        arr.push(this.props.answers[key])
      }
    }
    sellerarr.sort((a, b) => (a.helpfulness < b.helpfulness) ? 1 : -1)
    arr.sort((a, b) => (a.helpfulness < b.helpfulness) ? 1 : -1)
    var total = sellerarr.concat(arr)
    this.setState({answers: total})
  }

  helpfulAnswerClick(event, answer) {
    axios.put(`/qa/answers/${answer.id}/helpful`)
    answer.helpfulness++;
    answer.disablehelpfulness = true
    this.setState({answers: this.state.answers})
  }

  reportAnswerClick(event, answer) {
    axios.put(`/qa/answers/${answer.id}/report`)
    answer.disablereport = true
    this.setState({answers: this.state.answers})
  }
  loadMoreAnswers() {
    if (this.state.length >= this.state.answers.length) {
      this.setState({length : 2})
    } else {
      this.setState({length: this.state.answers.length})
    }
  }



  render () {
    if (this.state.answers.length !== 0) {
    return (
      <div className='AnswerList'> A:
      <ul className='Answers'>
      {this.state.answers.slice(0, this.state.length).map(answer =>
        <Answer
        key={answer.id}
        answer={answer}
        helpfulAnswerClick={this.helpfulAnswerClick}
        reportAnswerClick={this.reportAnswerClick}
        />
        )}
        </ul>
        {this.state.answers.length > 2 ? this.state.length < this.state.answers.length ?
          <div className='LoadMoreAnswers' onClick={this.loadMoreAnswers}> LOAD MORE ANSWERS</div> : <div className='LoadMoreAnswers' onClick={this.loadMoreAnswers}> COLLAPSE ANSWERS </div> : <> </>
      }

        </div>
    )
    } else {
      return (
        <> </>
      )
    }
  }
}


export default AnswersList;