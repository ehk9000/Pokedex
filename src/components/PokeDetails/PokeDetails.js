import React from 'react';
import './PokeDetails.scss';

const PokeDetails = ({ name, images, abilities, stats, types, weight, height}) => {
  let displayTypes = types.map(type => {
    return <li>{type}</li>
  });
  let displayAbilities = abilities.map(ability => {
    return <li>{ability}</li>
      
  });
  let displayStats = stats.map(stat => {
    return <ul>
            <li>{stat.name}</li>
            <li>{stat.base}</li>

            </ul>
  });
  

  return (
    <article className="poke-details-wrapper">
      <h3>{name}</h3>
      <img src={images.back} alt={`${name} back view`} className="details-img"/>
      <img src={images.front} alt={`${name} front view`} className="details-img"/>
      <section className="stats-wrapper">
        <h3>Type:</h3>
        <ul>
          {displayTypes}  

        </ul>
        <h3 className="abilities-title">Abilities:</h3>
        <ul>
          {displayAbilities}
        </ul>
        <ul>
          <li>Weight: {weight}</li>
          <li>Height: {height}</li>
        </ul>
          {displayStats}
      </section>
    </article>
  )
}

export default PokeDetails;