import React from 'react';
import { Link }  from 'react-router-dom';

export const Pokemon = (props) => {
  let { name, images, types} = props;
  let typeName = types.map(type => {
    return type.type.name
  });

  return (
    <article>
      <h3>{name}</h3>
      <img src={images.front_default} alt="pokemon"/>
      <p>{typeName}</p>

    </article>
  )
}

export default Pokemon;