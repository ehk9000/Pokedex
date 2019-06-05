import { fetchPokemon } from './fetchPokemon';
import * as actions from '../actions';

describe('fetchPokemon', () => {
  let mockPokemon;
  let url;
  let thunk;
  let mockDispatch;

  beforeEach(() => {
    mockPokemon = [{
      name: 'pikachu',
      types: ['electric'],
      images: {
        front: 'something.png',
        back: 'something.pgn'
      },
      stats: [{}],
      weight: 50,
      height: 40,
      abilities: [''],
      id: 25
    }];
    url = `https://pokeapi.co/api/v2/pokemon/${mockPokemon.id}/`
    mockDispatch = jest.fn();
    thunk = fetchPokemon();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockPokemon);
      });
    });
  });
  it('should dispach setLoading(true)', async () => {

  });
});