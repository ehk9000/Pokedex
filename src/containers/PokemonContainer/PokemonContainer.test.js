import React from 'react';
import { shallow } from 'enzyme';
import { PokemonContainer, mapStateToProps, mapDispatchToProps } from './PokemonContainer';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock("../../thunks/fetchPokemon");

describe('PokemonContainer', () => {
  let wrapper;
  let mockLocation;
  let mockPokemon = {
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
  }
  beforeEach(() => {
    mockLocation = { pathname: '/'};
    wrapper = shallow( <PokemonContainer 
      fetchPokemon={fetchPokemon}
      location={mockLocation}
      pokemon={mockPokemon}/> )
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});