import { isLoadingReducer } from './isLoadingReducer';
import * as actions from '../actions';

describe('isLoadingReducer', () => {
  it('should return default state', () => {
    const expected = false;
    const result = isLoadingReducer(undefined, []);

    expect(result).toEqual(expected);
  });

  it('should set isLoading in state tree', () => {
    const bool = true;
    const action = actions.setLoading(true);
    const expected = true;
    const result = isLoadingReducer(bool, action);

    expect(result).toEqual(expected);
  });

});