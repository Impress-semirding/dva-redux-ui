'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * getUIState inspects redux' global state store and returns the UI state node.
 *
 * This checks to see whether state is an immutable map or a POJO.
 */
var getUIState = exports.getUIState = function getUIState(state) {
  if (typeof state.get === 'function') {
    return state.get('ui');
  }
  return state.ui;
};