export const getPokemon = (pokemon) => ({
  type:'GET_POKEMON',
  pokemon
});

export const setLoading = (bool) => ({
  type: 'SET_LOADING',
  isLoading: bool
});

export const setError = (error) => ({
  type: 'SET_ERROR',
  error
});