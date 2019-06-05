import React from 'react';
import './PokeDetails.scss';
import { Link } from 'react-router-dom';

const PokeDetails = ({ name, images, abilities, stats, types, weight, height}) => {
  let displayTypes = types.map(type => {
    return <li className="type-style">{type}</li>
  });
  let displayAbilities = abilities.map(ability => {
    return <li className="type-style">{ability}</li>
      
  });
  let displayStats = stats.map(stat => {
    return <ul>
              <li>{stat.name}: </li>
              <li>{stat.base}</li>
          </ul>
  });

  return (
    <section>
      <Link to="/" className="back-btn">
        ◀ BACK
      </Link>
      <article className="poke-details-wrapper">
        <h2>{name}</h2>
        <img src={images.back} alt={`${name} back view`} className="details-img"/>
        <img src={images.front} alt={`${name} front view`} className="details-img"/>
        <div className="details-flex">
          <section className="stats-wrapper">
            <h3 className="details-header">Type:</h3>
            <ul>
              {displayTypes}  
            </ul>
            <h3 className="details-header">Abilities:</h3>
            <ul>
              {displayAbilities}
            </ul>
            <ul>
              <li>Weight: {weight}</li>
              <li className="height-style">Height: {height}</li>
            </ul>
              {displayStats}
          </section>

        </div>
      </article>

    </section>
  )
}

export default PokeDetails;