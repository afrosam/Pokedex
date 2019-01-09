import React, { Component } from 'react';
import SearchPokemon from './components/SearchPokemon';

import axios from 'axios';
import { TopLights } from './components/TopLights';
import { PokeInfo } from './components/PokeInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SearchQ: 'ditto',
      pokedata: [],
      sprites: [],
      abilities: [],
      stats: [],
      types: [],
      failed: false
    }
  }

  componentDidMount() {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.SearchQ}/`)
    .then(res => this.setState({ pokedata: res.data, sprites: res.data.sprites, abilities: res.data.abilities, stats: res.data.stats, types: res.data.types }))
  }

  // query pokemon
  searchPokemon = (SearchQ) => {
    this.setState({ SearchQ });
    if (SearchQ !== '') {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${SearchQ.toLowerCase()}/`)
      .then(res => this.setState({ pokedata: res.data, sprites: res.data.sprites, abilities: res.data.abilities, stats: res.data.stats, types: res.data.types, failed: false }))
      .catch((error) => {
        this.setState({ SearchQ: '', pokedata: [], sprites: [], abilities: [], stats: [], types: [], failed: true });
        console.log(error.response);
      });
    } else if (SearchQ === '') {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${SearchQ}/`)
      .then(res => this.setState({ pokedata: res.data.results.slice(0, 12), sprites: [], abilities: [], stats: [], types: [] }));
    }
  }

  render() {
    return (
      <div className="App">
       <div className="container">
        <div className="topPad">
        <TopLights />
        <SearchPokemon searchPokemon={this.searchPokemon} />
        <PokeInfo data={this.state} />
        </div>
       </div>
      </div>
    );
  }
}

export default App;
