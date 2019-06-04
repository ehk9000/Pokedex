import React from 'react';
import { shallow } from 'enzyme';
import { PokemonContainer, mapStateToProps, mapDispatchToProps } from './PokemonContainer';
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
  }]

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

  describe('componentDidMount', () => {
    fetchPokemon.mockImplementation(() => {});

    it('should call fetchPokemon', () => {
      expect(fetchPokemon).toHaveBeenCalled();
    });
  });

  describe('mapStateToProps', () => {
    const mockState = {pokemon: mockPokemon};
    const expected = {pokemon: mockPokemon};
    const mappedState = mapStateToProps(mockState);

    expect(mappedState).toEqual(expected);
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    const thunk = fetchPokemon();

    props.fetchPokemon();

    expect(mockDispatch).toHaveBeenCalledWith(thunk)
  });
});