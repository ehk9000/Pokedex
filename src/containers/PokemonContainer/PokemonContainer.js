import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import Pokemon from '../../components/Pokemon/Pokemon';

export class PokemonContainer extends Component {
   componentDidMount() {
     this.getPokemon ();
   }

   getPokemon = () => {
     for(let i = 1; i <= 100; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
        this.props.fetchPokemon(url);
     }
   }

   assignDisplayPokemon = () => {
     let { pokemon } = this.props
     let displayPokemon;

     if(pokemon.length) {
       displayPokemon = pokemon.map(pokemon => {
          return <Pokemon {...pokemon} key={pokemon.id} />
       }
       );
     }

     return displayPokemon
   }
   
  render() {
    const displayPokemon = this.assignDisplayPokemon()
    return (
      <main>
        {displayPokemon}
      </main>
    )
  }
}

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export const mapDispatchToProps = dispatch => ({
  fetchPokemon: (url) => dispatch(fetchPokemon(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);