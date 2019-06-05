import React from 'react';
import './Pokemon.scss';
import { Link }  from 'react-router-dom';

export const Pokemon = (props) => {
  let { name, images, types, id} = props;
  let typeName = types.map(type => {
    return <li className="type-style-container">{type}</li>
  });

  return (
    <Link to={`/pokemon/${id}`} key={id} className="card-link-styles">
      <article className="poke-card">
        <h3>{name}</h3>
        <img src={images.front} alt="pokemon"/>
        <ul className="type-ul">
          {typeName}  
        </ul>
      </article>
    </Link>
  );
}

export default Pokemon;