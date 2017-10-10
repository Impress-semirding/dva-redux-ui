'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uiRedux = exports.createUiState = undefined;

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

var _actionReducer = require('./action-reducer.js');

var _actionReducer2 = _interopRequireDefault(_actionReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * @author senir
                                                                                                                                                                                                                   * @email 15251895266@163.com
                                                                                                                                                                                                                   * @create date 2017-09-13 06:41:30
                                                                                                                                                                                                                   * @modify date 2017-09-13 06:41:30
                                                                                                                                                                                                                   * @desc [description]
                                                                                                                                                                                                                  */


function createUiState() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // const namespace = opts.namespace || NAMESPACE;

  var extraReducers = _defineProperty({}, 'ui', _actionReducer2.default);

  function onEffect(effect, _ref, model, actionType) {
    var put = _ref.put;
    var namespace = model.namespace;

    return (/*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _args = arguments;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return put({ type: SHOW, payload: { namespace: namespace, actionType: actionType } });

              case 2:
                _context.next = 4;
                return effect.apply(undefined, _args);

              case 4:
                _context.next = 6;
                return put({ type: HIDE, payload: { namespace: namespace, actionType: actionType } });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      })
    );
  }

  return {
    extraReducers: extraReducers
    // onEffect,
  };
}

exports.createUiState = createUiState;
exports.uiRedux = _ui2.default;