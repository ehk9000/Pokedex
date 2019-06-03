
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import Pokemon from '../../components/Pokemon/Pokemon';

export class PokemonContainer extends Component {
   componentDidMount() {
     this.props.fetchPokemon();
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
  fetchPokemon: () => dispatch(fetchPokemon())
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);