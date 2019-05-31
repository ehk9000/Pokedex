import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { isLoadingReducer } from './isLoadingReducer';


export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  isLoading: isLoadingReducer
});