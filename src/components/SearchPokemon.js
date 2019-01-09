import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class SearchPokemon extends Component {

state = {
    SearchQ: 'ditto',
}

onChange = (e) => this.setState({ [e.target.name]: e.target.value });

onSubmit = (e) => {
    e.preventDefault();
    this.props.searchPokemon(this.state.SearchQ);
    this.setState({ SearchQ: '' });
}
    
  render() {
    const { SearchQ } = this.state;
    return (
      <div className="searchBox">
        <form onSubmit={this.onSubmit}>
         <input type="text" name="SearchQ" placeholder="Search for Pokemon" value={SearchQ} onChange={this.onChange} />
         <input onClick={this.onClick} type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

// PropTypes
SearchPokemon.propTypes = {
    searchPokemon: PropTypes.func.isRequired
  }

export default SearchPokemon
