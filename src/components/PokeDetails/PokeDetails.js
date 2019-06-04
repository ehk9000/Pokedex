import React from 'react';

const PokeDetails = ({ name, images, abilities, stats, types, weight, height}) => {
  let typeName = types.map(type => {
    return <p key={type.type.slot}>{type.type.name}</p>
  });
  return (
    <article>
      <h3>{name}</h3>
      <img src={images.back} alt={`${name} back view`}/>
      <img src={images.front} alt={`${name} front view`}/>
      {typeName}



    </article>
  )
}

export default PokeDetails;