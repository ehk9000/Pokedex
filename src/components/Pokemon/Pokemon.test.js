import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

describe('Pokemon', () => {
  let wrapper;
  let mockPokemon = {
    name: 'pikachu',
    type: 'electric',
    sprites: {
      front_default: 'something.png'
    },
    types: [
      {
        type:{
          name: 'electric'
        }
      }
    ],
    id: 25
  }
  beforeEach(() => {
    wrapper = shallow( <Pokemon {...mockPokemon} key={mockPokemon.id}/> )

  });

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
});