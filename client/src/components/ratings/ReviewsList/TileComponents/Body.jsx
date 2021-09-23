import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      shortEnough: true,
    };
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.setState({
      showing: true,
    });
  }

  render() {
    let bodyHead = this.props.body;
    let bodyTail = '';
    let show = null;
    let bodyText;

    if (this.props.body.length > 1000) {
      this.props.body = this.props.body.substring(0, 1000);
    }

    if (this.props.body.length >= 250) {
      bodyHead = this.props.body.substring(0, 250);
      bodyTail = this.props.body.substring(250);
      // this.setState({
      //   shortEnough: false,
      // });
    }

    if (this.state.shortEnough === true) {
      bodyText = <div>{bodyHead}</div>;
    } else {
      if (this.state.showing === false) {
        bodyText = <div>{bodyHead}</div>;
        show = (
          <span className='link' onClick={this.showMore}>
            Show more
          </span>
        );
      } else {
        bodyText = (
          <div>
            {bodyHead}
            {bodyTail}
          </div>
        );
        show = null;
      }
    }

    return (
      <div>
        <div>{this.props.summaryTail}</div>
        {bodyText}
        {show}
      </div>
    );
  }
}

export default Body;
