import React from 'react';
import ReactDOM from 'react-dom';
import QuestionsList from './Questions&Answers/QuestionsList.jsx'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProduct: 37311,
      productName: 'Camo Onesie'
    };
  }

  render() {
    return (
      <div>
        <h1>Questions And Answers</h1>
        <div className='QuestionAndAnswerBody'>
          <QuestionsList currentProduct={this.state.currentProduct} productName={this.state.productName}/>
        </div>
      </div>
    );
  }
}

export default App;
