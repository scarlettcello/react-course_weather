import React from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../action';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  };

  render() {
    return (
      <form 
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Get a five-day forecase in your favorite cities."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />        
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { term: state.term };
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);