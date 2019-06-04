import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pokemon from '../../components/Pokemon/Pokemon';
import Loading from '../../images/pica.gif';
import './PokemonContainer.scss';

export class PokemonContainer extends Component {

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


export default connect(mapStateToProps)(PokemonContainer);