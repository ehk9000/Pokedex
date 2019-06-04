import React from 'react';
import { shallow } from 'enzyme';
import { Controls, mapStateToProps } from './Controls';

describe('Controls', () => {
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
  }]
  beforeEach(() => {
    wrapper = shallow( <Controls
        pokemon={mockPokemon} />)
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return a props object with pokemon', () => {
      const mockState = { pokemon: mockPokemon };
      const expected = { pokemon: mockPokemon };
      const mappedState = mapStateToProps(mockState);
  
      expect(mappedState).toEqual(expected);
    });
  });
});