export const fetchPokemonCleaner = (pokemonDetails) => {
    let cleanedPokemon = {};
    let front = pokemonDetails.sprites.front_default;
    let back = pokemonDetails.sprites.back_default;
     cleanedPokemon = {
      abilities: pokemonDetails.abilities,
      images: {front, back},
      name: pokemonDetails.name,
      stats:pokemonDetails.stats,
      types: pokemonDetails.types,
      weight: pokemonDetails.weight,
      height: pokemonDetails.height,
      id:pokemonDetails.id
    }
    return cleanedPokemon
}