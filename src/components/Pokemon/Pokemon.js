import React from 'react';
import { Link }  from 'react-router-dom';

export const Pokemon = (props) => {
  let { name, sprites, types} = props;
  return (
    <article>
      <h3>{name}</h3>
      <img src={sprites.front_default} alt="pokemon"/>
      <p>{types[0].type.name}</p>

    </article>
  )
}

export default Pokemon;