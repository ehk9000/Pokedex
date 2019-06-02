import React from 'react';
import { shallow } from 'enzyme';
import { PokemonContainer, mapStateToProps, mapDispatchToProps } from './PokemonContainer';
import { fetchPokemon } from '../../thunks/fetchPokemon';

jest.mock("../../thunks/fetchPokemon");

describe('PokemonContainer', () => {
  let wrapper;
  let mockLocation;
  beforeEach(() => {
    mockLocation = { pathname: '/'};
    wrapper = shallow( <PokemonContainer 
      fetchPokemon={fetchPokemon}
      location={mockLocation}/> )
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});