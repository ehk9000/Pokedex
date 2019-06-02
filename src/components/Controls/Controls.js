import React from 'react';
import { Route } from 'react-router-dom';
import PokemonContainer from '../../containers/PokemonContainer/PokemonContainer';

export const Controls = () => {
  return (
    <section>
      <Route exact path='/' component={PokemonContainer} />
    </section>
  )
}

export default Controls;