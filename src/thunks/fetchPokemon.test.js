import { fetchPokemon } from './fetchPokemon';
import * as actions from '../actions';
import { fetchPokemonCleaner } from '../Util/cleaner/cleaner';

jest.mock("../Util/cleaner/cleaner")

describe('fetchPokemon', () => {
  let mockPokemon;
  let url;
  let thunk;
  let mockDispatch;


  beforeEach(() => {
    mockPokemon = {
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
    };
    const id = mockPokemon.id
    url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    mockDispatch = jest.fn();
    thunk = fetchPokemon(url);

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(mockPokemon)
      });
    });
  });
  it('should dispatch setLoading(true)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(true));
  });

  it('should call fetch with the correct params', async () => {
    await thunk(mockDispatch);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return an error if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:false,
        statusText: 'Something went wrong'
      });
    });

    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setError('Something went wrong'));
  });

  it('should dispatch setLoading(false)', async () => {
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.setLoading(false));
  });

  it('should dispatch getPokemon with the correct params', async () => {
    // mockDispatch.mockImplementation(() => mockPokemon);
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(actions.getPokemon(mockPokemon));
  });

});