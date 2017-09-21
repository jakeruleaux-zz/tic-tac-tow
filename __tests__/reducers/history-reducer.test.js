import c from './../../src/constants';
import historyReducer from './../../src/reducers/history-reducer';
import xIsNext from './../../src/reducers/x-is-next-reducer';

describe('History Reducer', () => {
  let action;
  const historyBefore = [
    [
      null, null, null,
      null, null, null,
      null, null, null
    ]
  ]

  const historyAfter = [
    [
      xIsNext, null, null,
      null, null, null,
      null, null, null
    ]
  ]

  test('should mark X in top left square', () => {
    action = {
      type: c.MAKE_MOVE,
      history: historyAfter
    };

    expect(historyReducer(historyBefore, action)).toEqual(historyAfter);
  });
});
