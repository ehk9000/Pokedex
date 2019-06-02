import { pokemonReducer } from './pokemonReducer';
import * as actions from '../actions';

describe('pokemonReducer', () => {
  let pokemon = {
    name: 'pikachu',
    base_happiness: 70,
    capture_rate: 225
  }
  let pokemonList = [pokemon, {name: "charizard", base_happiness:80, capture_rate: 233}]

  it('should return default state', () => {
    const expected = [];
    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set pokemon in state tree', () => {
    const expected = pokemonList;
    const action = actions.getPokemon(pokemonList);
    const result = pokemonReducer([], action);

    
    expect(result).toEqual(expected)
  });
});