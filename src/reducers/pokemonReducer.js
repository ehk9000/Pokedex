export const pokemonReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POKEMON':
      return action.pokemon;
    default:
      return state;
  }
}