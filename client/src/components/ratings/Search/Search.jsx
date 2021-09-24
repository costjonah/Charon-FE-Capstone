import React from 'react';
import styled from 'styled-components';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      reviews: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.findMatchingReviews = this.findMatchingReviews.bind(this);
    this.getPoints = this.getPoints.bind(this);
    this.getTotalPoints = this.getTotalPoints.bind(this);
  }

  handleChange(e) {
    this.setState({ searchString: e.target.value }, () => {
      if (e.target.value.length > 2) {
        let searchedReviews = this.findMatchingReviews(e.target.value);
        searchedReviews = searchedReviews.filter((review) => review.points > 0);
        this.props.updateSearch(searchedReviews);
      } else {
        this.props.updateSearch(this.state.reviews);
      }
    });
  }

  findMatchingReviews(searchString) {
    let searchTerms = searchString.split(/[\s,]+/);
    searchTerms = searchTerms.filter((term) => term !== '');
    return this.state.reviews.map((review) => {
      review.points = this.getTotalPoints(review, searchTerms);
      return review;
    });
  }

  getTotalPoints(review, searchTerms = []) {
    let totalPoints = 0;
    searchTerms.forEach((term) => {
      let points = this.getPoints(review, term);
      if (points > 0) {
        totalPoints += 50;
      }
      totalPoints += this.getPoints(review, term);
    });
    return totalPoints;
  }

  getPoints({ name = '', body = '', summary = '' }, searchTerm) {
    name = name.toLowerCase();
    body = body.toLowerCase();
    summary = summary.toLowerCase();
    searchTerm = searchTerm.toLowerCase();
    let bodyPoints = body.split(searchTerm).length - 1;
    let summaryPoints = summary.split(searchTerm).length - 1;
    let namePoints = name.split(searchTerm).length - 1;
    return bodyPoints + summaryPoints * 2 + namePoints;
  }

  componentDidMount() {
    this.setState({
      reviews: this.props.reviews,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({
        reviews: this.props.reviews,
      });
    }
  }

  render() {
    let noSearch = null;
    return (
      <div>
        <label>
          <div>Search: </div>
          <StyledSearch
            type='text'
            name='Search'
            value={this.state.searchString}
            onChange={this.handleChange}
            placeholder='Enter your search here'
          />
          {noSearch}
        </label>
      </div>
    );
  }
}

const StyledSearch = styled.input`
  height: 30px;
  width: 100%;
  border: 0px none;
  border-radius: 5px;
`;

export default Search;
