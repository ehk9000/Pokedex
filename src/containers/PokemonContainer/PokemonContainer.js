import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../../thunks/fetchPokemon';
import Pokemon from '../../components/Pokemon/Pokemon';
import Loading from '../../images/pica.gif';
import './PokemonContainer.scss';

export class PokemonContainer extends Component {
   componentDidMount() {
     this.getPokemon ();
   }

   getPokemon = async () => {
     if(!this.props.pokemon.length) {
       for(let i = 1; i <= 100; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
          await this.props.fetchPokemon(url);
       }
     }
   }

   assignDisplayPokemon = () => {
     let { pokemon, isLoading } = this.props
     let displayPokemon;

     if(!isLoading) {
       displayPokemon = pokemon.map(pokemon => {
          return <Pokemon {...pokemon} key={pokemon.id} />
       });
     } else {
       displayPokemon = 
       <section>
         <img src={Loading} alt="loading icon" className="loading"/>
         <p>Loading...</p>
       </section>
     }
     return displayPokemon
   }
   
  render() {
    const displayPokemon = this.assignDisplayPokemon()
    return (
      <main>
        {displayPokemon}
      </main>
    );
  }
}

export const mapStateToProps = ({ pokemon, isLoading }) => ({
  pokemon,
  isLoading
});

export const mapDispatchToProps = dispatch => ({
  fetchPokemon: (url) => dispatch(fetchPokemon(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);