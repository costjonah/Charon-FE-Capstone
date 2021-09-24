import React from 'react';
import Select from 'react-select';

class SortOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.options = [
      { value: 'Relevant', label: 'Relevant' },
      { value: 'Helpful', label: 'Helpful' },
      { value: 'Newest', label: 'Newest' },
    ];
  }

  handleChange(e) {
    this.props.sort(e.value);
    console.log('changed to ', e.value);
  }

  render() {
    return (
      <form>
        <label>
          Sort by:
          <Select
            placeholder='Relevant'
            options={this.options}
            onChange={this.handleChange}
            id='select'
          />
        </label>
      </form>
    );
  }
}

export default SortOptions;
