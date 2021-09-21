import React from 'react';
import axios from 'axios';
import Question from './Question.jsx';
import AddQuestion from './AddQuestion.jsx';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      temp: [],
      length: 2,
      term: '',
    };
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.helpfulQuestionClick = this.helpfulQuestionClick.bind(this);
    this.loadMoreQuestions = this.loadMoreQuestions.bind(this);
    this.SearchQuestions = this.SearchQuestions.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.getAllQuestions();
    }
  }

  getAllQuestions() {
    let product_id = this.props.currentProduct;
    axios.get(`/qa/questions/${product_id}`).then((results) => {
      this.setState({ questions: results.data.results });
      this.setState({ temp: results.data.results });
    });
  }

  helpfulQuestionClick(event, question) {
    //console.log(question);
    axios.put(`/qa/questions/${question.question_id}/helpful`);
    question.question_helpfulness++;
    //this.getAllQuestions()
    question.disablehelpfulness = true;
    this.setState({ questions: this.state.questions });
  }
  loadMoreQuestions() {
    if (this.state.length >= this.state.questions.length) {
      this.setState({ length: 2 });
    } else {
      this.setState({ length: (this.state.length += 2) });
    }
  }
  SearchQuestions(event) {
    this.setState({ term: event.target.value }, function () {
      if (this.state.term.length >= 3) {
        var filtered = this.state.temp.filter((question) =>
          question.question_body
            .toLowerCase()
            .includes(this.state.term.toLowerCase())
        );
        this.setState({ questions: filtered });
      } else {
        this.setState({ questions: this.state.temp });
      }
    });
  }

  render() {
    return (
      <div>
        <input
          className='SearchBar'
          type='text'
          placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS'
          onChange={this.SearchQuestions}
        />
        {this.state.questions.slice(0, this.state.length).map((question) => (
          <Question
            key={question.question_id}
            question={question}
            helpfulQuestionClick={this.helpfulQuestionClick}
            productName={this.props.productName}
            getAllQuestions={this.getAllQuestions}
          />
        ))}
        {this.state.questions.length > 2 ? (
          this.state.length < this.state.questions.length ? (
            <button
              className='MoreQuestionsButton'
              onClick={this.loadMoreQuestions}
            >
              {' '}
              More Answered Questions{' '}
            </button>
          ) : (
            <button className='CollapseButton' onClick={this.loadMoreQuestions}>
              {' '}
              Collapse
            </button>
          )
        ) : (
          <> </>
        )}
        <AddQuestion
          product_id={this.props.currentProduct}
          productName={this.props.productName}
          getAllQuestions={this.getAllQuestions}
        />
      </div>
    );
  }
}

export default QuestionsList;
