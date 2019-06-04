export const fetchPokemonCleaner = (pokemonDetails) => {
  console.log(pokemonDetails,"details")
    let cleanedPokemon = {};
     cleanedPokemon = {
       abilities: pokemonDetails.abilities,
      images: pokemonDetails.sprites,
      name: pokemonDetails.name,
      stats:pokemonDetails.stats,
      types: pokemonDetails.types,
      weight: pokemonDetails.weight,
      id:pokemonDetails.id
    }
    return cleanedPokemon
}