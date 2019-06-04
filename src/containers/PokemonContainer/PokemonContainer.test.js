import React from 'react';
import { shallow } from 'enzyme';
import { PokemonContainer, mapStateToProps } from './PokemonContainer';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock("../../thunks/fetchPokemon");

describe('PokemonContainer', () => {
  let wrapper;
  let mockLocation;
  let mockPokemon = [{
    name: 'pikachu',
    type: 'electric',
    sprites: {
      front_default: 'something.png'
    },
    types: [
      {
        type: {
          name: 'electric'
        }
      }
    ],
    id: 25
  }];

  beforeEach(() => {
    mockLocation = { pathname: '/'};
    wrapper = shallow( <PokemonContainer 
      location={mockLocation}
      pokemon={mockPokemon}/> )
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });


  describe('mapStateToProps', () => {
    it('should return a props object with pokemon', () => {
      const mockState = {pokemon: mockPokemon, isLoading: false};
      const expected = {pokemon: mockPokemon, isLoading: false};
      const mappedState = mapStateToProps(mockState);
  
      expect(mappedState).toEqual(expected);
    });
  });
});