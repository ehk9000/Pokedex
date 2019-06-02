import React from 'react';
import { Route } from 'react-router-dom';

export const Controls = () => {
  return (
    <section>
      <Route exact path='/' component={PokemonContainer} />
    </section>
  )
}

export default Controls;