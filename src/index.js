/**
 * @author senir
 * @email 15251895266@163.com
 * @create date 2017-09-13 06:41:30
 * @modify date 2017-09-13 06:41:30
 * @desc [description]
*/
import uiRedux from './ui';
import reducer from './action-reducer.js';


function createUiState(opts = {}) {
  // const namespace = opts.namespace || NAMESPACE;

  const extraReducers = {
    ['ui']: reducer,
  };

  function onEffect(effect, { put }, model, actionType) {
    const { namespace } = model;
    return function*(...args) {
      yield put({ type: SHOW, payload: { namespace, actionType } });
      yield effect(...args);
      yield put({ type: HIDE, payload: { namespace, actionType } });
    };
  }

  return {
    extraReducers,
    // onEffect,
  };
}

export {
  createUiState,
  uiRedux,
};
