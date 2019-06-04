import { pokemonReducer } from './pokemonReducer';
import * as actions from '../actions';

describe('pokemonReducer', () => {
  let pokemon = [{
    name: 'pikachu',
    base_happiness: 70,
    capture_rate: 225
  }]

  it('should return default state', () => {
    const expected = [];
    const result = pokemonReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set pokemon in state tree', () => {
    const expected = [pokemon]

    const action = actions.getPokemon(pokemon);
    const result = pokemonReducer([], action);
    
    expect(result).toEqual(expected);
  });
});