import * as actions from './index';

describe('actions', () => {
  it('should return a type of getPokemon with a pokemon array', () => {
    const pokemon = [
      {
        name: 'pikachu',
        base_happiness: 70,
        capture_rate: 225
      }
    ];
    
    const expected = {
      type: 'GET_POKEMON',
      pokemon
    };

    const result = actions.getPokemon(pokemon);

    expect(result).toEqual(expected);
  });

  it('should return a type of setLoading with a boolean', () => {
    const bool = true;
    const expected = {
      type: 'SET_LOADING',
      isLoading: bool
    };

    const result = actions.setLoading(bool);

    expect(result).toEqual(expected);
  });
});