import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PokemonContainer from '../PokemonContainer/PokemonContainer';
import PokeDetails from '../../components/PokeDetails/PokeDetails';

export const Controls = (props) => {
  const pokemonList = props.pokemon
  return (
    <section>
      <Route exact path="/" component={PokemonContainer} />
      <Route 
        path="/pokemon/:id"
        render={({ match }) => {
          const { id } = match.params;
          const card = pokemonList.find(pokemon => pokemon.id === parseInt(id));
          if (card) {
            return <PokeDetails {...card} />
          }
        }}
      />
    </section>
  )
}

export const mapStateToProps = ({ pokemon }) => ({
  pokemon
});

export default connect(mapStateToProps)(Controls);