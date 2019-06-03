import React from 'react';
import { shallow } from 'enzyme';
import Pokemon from './Pokemon';

describe('Pokemon', () => {
  let wrapper;
  let mockPokemon = {
    name: 'pikachu',
    type: 'electric',
    images: {
      front_default: 'something.png'
    },
    stats: {
      base_stat: 90,
      stat: {
        name: 'speed'
      }
    },
    types: [
      {
        type:{
          name: 'electric'
        }
      }
    ],
    weight: 60,
    abilities: [{
      ability: {
        name: 'lightning-rod'
      }

    }],
    id: 25
  }

  beforeEach(() => {
    wrapper = shallow( <Pokemon {...mockPokemon} key={mockPokemon.id}/> )

  });

  it('should render correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });
  
});