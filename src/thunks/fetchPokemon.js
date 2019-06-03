import { getPokemon, setLoading, setError} from '../actions/index';
import { fetchPokemonCleaner } from '../Util/cleaner/cleaner';

export const fetchPokemon = () => {
  return async (dispatch) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const dirtyPokemon = await response.json();
      const pokemon = fetchPokemonCleaner(dirtyPokemon);
      dispatch(getPokemon(pokemon))
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

