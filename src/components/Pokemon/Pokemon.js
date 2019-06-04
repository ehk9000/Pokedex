import React from 'react';
import './Pokemon.scss';
import { Link }  from 'react-router-dom';

export const Pokemon = (props) => {
  let { name, images, types, id} = props;
  let typeName = types.map(type => {
    return <p>{type}</p>
  });

  return (
    <Link to={`/pokemon/${id}`} key={id}>
      <article className="poke-card">
        <h3>{name}</h3>
        <img src={images.front} alt="pokemon"/>
        {typeName}
      </article>
    </Link>
  )
}

export default Pokemon;