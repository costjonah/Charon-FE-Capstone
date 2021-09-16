import React from 'react';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.sort(e.target.value);
    console.log('changed to ', e.target.value);
  }

  render() {
    return (
      <form>
        <label>
          Sort by:
          <select value={this.props.value} onChange={this.handleChange}>
            <option value='Relevant'>Relevant</option>
            <option value='Helpful'>Helpful</option>
            <option value='Newest'>Newest</option>
          </select>
        </label>
      </form>
    );
  }
}

export default SortOptions;
