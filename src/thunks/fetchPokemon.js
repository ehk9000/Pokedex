import { getPokemon, setLoading, setError} from '../actions/index';
import { fetchPokemonCleaner } from '../Util/cleaner/cleaner';

export const fetchPokemon = (url) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const dirtyPokemon = await response.json();
      const pokemon = await fetchPokemonCleaner(dirtyPokemon);      
      dispatch(getPokemon(pokemon))
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

