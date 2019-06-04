import React from 'react';
import './Pokemon.scss';
import { Link }  from 'react-router-dom';

export const Pokemon = (props) => {
  let { name, images, types, id} = props;
  let typeName = types.map(type => {
    return <p>{type.type.name}</p>
  });

  return (
    <Link to={`/pokemon/${id}`} key={id}>
      <article>
        <h3>{name}</h3>
        <img src={images.front_default} alt="pokemon"/>
        <p>{typeName}</p>
      </article>
    </Link>
  )
}

export default Pokemon;