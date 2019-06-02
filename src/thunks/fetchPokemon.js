import { getPokemon, setLoading, setError} from '../actions/index';

export const fetchPokemon = () => {
  return async (dispatch) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    try {
      dispatch(setLoading(true));

      const response = await fetch(url);

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const pokemon = await response.json();
      dispatch(getPokemon(pokemon))
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
}

