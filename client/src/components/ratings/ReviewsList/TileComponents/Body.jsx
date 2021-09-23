import React from 'react';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyHead: '',
      bodyTail: '',
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

  componentDidMount() {
    if (this.props.body.length > 1000) {
      this.props.body = this.props.body.substring(0, 1000);
    }
    if (this.props.body.length >= 250) {
      this.setState({
        bodyHead: this.props.body.substring(0, 250),
        bodyTail: this.props.body.substring(250),
        shortEnough: false,
      });
    } else {
      this.setState({
        bodyHead: this.props.body,
        bodyTail: '',
        shortEnough: true,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.body !== prevProps.body) {
      if (this.props.body.length > 1000) {
        this.props.body = this.props.body.substring(0, 1000);
      }
      if (this.props.body.length >= 250) {
        this.setState({
          bodyHead: this.props.body.substring(0, 250),
          bodyTail: this.props.body.substring(250),
          shortEnough: false,
        });
      } else {
        this.setState({
          bodyHead: this.props.body,
          bodyTail: '',
          shortEnough: true,
        });
      }
    }
  }

  render() {
    let show = null;
    let bodyText = (
      <div>
        {this.state.bodyHead}
        {this.state.bodyTail}
      </div>
    );

    if (this.state.shortEnough === false) {
      if (this.state.showing === false) {
        bodyText = <div>{this.state.bodyHead}</div>;
        show = (
          <span className='link' onClick={this.showMore}>
            Show more
          </span>
        );
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
