import { errorReducer } from './errorReducer';
import * as actions from '../actions';

describe('errorReducer', () => {
  it('should return default state', () => {
    const expected = '';

    const result = errorReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set an error in state tree ', () => {
    const error = 'error';
    const action = actions.setError(error);
    const expected = 'error';
    const result = errorReducer(error, action);

    expect(result).toEqual(result);
  });
});