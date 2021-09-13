import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Overview from '../main_component/Overview.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
    <div>
      <h1>Project Catwalk</h1>
      <Overview />
    </div>
    )
  }
};

export default App;