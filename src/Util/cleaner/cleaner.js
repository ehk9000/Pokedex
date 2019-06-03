export const fetchPokemonCleaner = (pokemonDetails) => {
  const details = [];
  details.push(pokemonDetails);
  return details.map(pokemon => {
    let cleanedPokemon = {};
     cleanedPokemon = {
      abilities: pokemon.abilities,
      images: pokemon.sprites,
      name: pokemon.name,
      stats:pokemon.stats,
      types: pokemon.types,
      weight: pokemon.weight,
      id:pokemon.id
    }
    return cleanedPokemon
  });
}