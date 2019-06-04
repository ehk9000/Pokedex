import React from 'react';

const PokeDetails = ({ name, images, abilities, stats, types, weight, height}) => {
  let displayTypes = types.map(type => {
    return <p>{type}</p>
  });
  let displayAbilities = abilities.map(ability => {
    return <ul>
            <li>{ability}</li>
          </ul>
      
  });
  let displayStats = stats.map(stat => {
    return <ul>
            <li>{stat.name}</li>
            <li>{stat.base}</li>
          </ul>
  });

  return (
    <article>
      <h3>{name}</h3>
      <img src={images.back} alt={`${name} back view`}/>
      <img src={images.front} alt={`${name} front view`}/>
      {displayTypes}
      {displayAbilities}
      <p>Weight: {weight}</p>
      <p>Height: {height}</p>
      {displayStats}
    </article>
  )
}

export default PokeDetails;