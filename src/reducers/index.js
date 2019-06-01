import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { isLoadingReducer } from './isLoadingReducer';
import { errorReducer } from './errorReducer';


export const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  isLoading: isLoadingReducer,
  error: errorReducer
});