export const fetchPokemonCleaner = (pokemonDetails) => {
    let cleanedPokemon = {};
    let front = pokemonDetails.sprites.front_default;
    let back = pokemonDetails.sprites.back_default;
    let abilities = pokemonDetails.abilities.map(move => {
      return move.ability.name
    });
    let types = pokemonDetails.types.map(type => {
      return type.type.name
    });
    let stats = pokemonDetails.stats.map(stat => {
      let newStat = {};
        newStat = {
          base: stat.base_stat,
          name: stat.stat.name
        }
        return newStat
  });
     cleanedPokemon = {
      abilities,
      images: {front, back},
      name: pokemonDetails.name,
      stats,
      types,
      weight: pokemonDetails.weight,
      height: pokemonDetails.height,
      id:pokemonDetails.id
    }
    return cleanedPokemon
}