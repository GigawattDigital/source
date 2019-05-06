'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault (obj) { return obj && obj.__esModule ? obj : { default: obj } }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

var WalletPageTransactions = (function (_Component) {
  _inherits(WalletPageTransactions, _Component)

  function WalletPageTransactions () {
    _classCallCheck(this, WalletPageTransactions)

    return _possibleConstructorReturn(this, (WalletPageTransactions.__proto__ || Object.getPrototypeOf(WalletPageTransactions)).apply(this, arguments))
  }

  _createClass(WalletPageTransactions, [{
    key: 'render',
    value: function render () {
      console.log('walletpagerender:', this.props.data)
      if (this.props.data.length === 0) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Loading'
          )
        )
      } else {
        return _react2.default.createElement(
          'div',
          null,
          this.props.data.map(function (payments) {
            return _react2.default.createElement(
              'div',
              { style: { display: 'flex', justifyContent: 'space-between', borderBottom: 'solid 1px #dfdfdf', paddingBottom: '5px', paddingTop: '10px' } },
              _react2.default.createElement(
                'div',
                null,
                payments.accs.repository
              ),
              _react2.default.createElement(
                'div',
                null,
                payments.amount
              )
            )
          })
        )
      }
    }
  }])

  return WalletPageTransactions
}(_react.Component))

exports.default = WalletPageTransactions
