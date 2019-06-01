import { pokemonReducer } from './pokemonReducer';
import * as actions from '../actions';

describe('pokemonReducer', () => {
  it('should return default state', () => {
    const expected = [];
    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set pokemon in state tree', () => {
    const expected = [
      {
        name: 'pikachu',
        base_happiness: 70,
        capture_rate: 225
      }
    ];
    const action = actions.getPokemon(expected);
    const result = pokemonReducer([], action);

    
    expect(result).toEqual(expected)
  });
});