import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock("../../thunks/fetchPokemon")

describe('App', () => {
  let wrapper;
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
    wrapper = shallow( <App 
      pokemon={mockPokemon}
      fetchPokemon={fetchPokemon}
      /> )
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  describe('componentDidMount', () => {
    fetchPokemon.mockImplementation(() => { });

    it('should call fetchPokemon', () => {
      expect(fetchPokemon).toHaveBeenCalled();
    });
  });
  describe('mapStateToProps', () => {
    it('should return a props object with pokemon', () => {
      const mockState = { pokemon: mockPokemon};
      const expected = { pokemon: mockPokemon};
      const mappedState = mapStateToProps(mockState);

      expect(mappedState).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    const mockDispatch = jest.fn();
    const props = mapDispatchToProps(mockDispatch);
    const thunk = fetchPokemon();

    props.fetchPokemon();

    expect(mockDispatch).toHaveBeenCalledWith(thunk)
  });
});