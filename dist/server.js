"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(6337, function () {
  console.log('Nuestro servidor esta funcionando con el barto en el puerto: 6337!');
});