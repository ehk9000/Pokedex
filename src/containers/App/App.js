import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import Controls from '../Controls/Controls';
import Logo from '../../images/logo.png';

export class App extends Component {
  componentDidMount() {
    this.getPokemon();
  }

  getPokemon = async () => {
    if (!this.props.pokemon.length) {
      for (let i = 1; i <= 100; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        await this.props.fetchPokemon(url);
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={Logo} alt="Pokemon Logo" className="header-logo"/>
        </header>
        <Controls/>
      </div>
    );

  }
}

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export const mapDispatchToProps = dispatch => ({
  fetchPokemon: (url) => dispatch(fetchPokemon(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
