webpackHotUpdate("static/development/pages/unidade.js",{

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! debounce-promise */ "./node_modules/debounce-promise/dist/index.js");
/* harmony import */ var debounce_promise__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(debounce_promise__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_10__);












var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      users: []
    };
    _this.searchUser = _this.searchUser.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "searchUser",
    value: function searchUser() {
      var _this2 = this;

      return fetch("http://localhost:3001/users").then(function (res) {
        return res.json();
      }).then(function (res) {
        _this2.setState({
          users: res
        });

        console.log('this state', _this2.state);
      }, function (err) {
        console.error('error on fetch user', err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "header",
        className: "jsx-2095593856"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Navbar"], {
        color: "light",
        light: true,
        expand: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_8__["NavbarBrand"], {
        href: "/"
      }, "findhealth"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
        type: "text",
        placeholder: "Digite o que deseja buscar",
        onChange: debounce_promise__WEBPACK_IMPORTED_MODULE_9___default()(this.searchUser, 500),
        className: "jsx-2095593856" + " " + "search-input"
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-2095593856" + " " + "results"
      }, this.state.users.map(function (user, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: "jsx-2095593856" + " " + "item"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          className: "jsx-2095593856"
        }, user.name));
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2095593856"
      }, ".navbar-expand-md.jsx-2095593856{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}#header.jsx-2095593856{margin-bottom:30px;}.search-input.jsx-2095593856{width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlL1dvcmtzcGFjZS9tZWRzZWFyY2gvY29tcG9uZW50cy9oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNvQixBQUcyQyxBQUlYLEFBSVAsWUFDZCxPQUpBLGdHQUpBIiwiZmlsZSI6Ii9ob21lL2FuZHJlL1dvcmtzcGFjZS9tZWRzZWFyY2gvY29tcG9uZW50cy9oZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgTmF2YmFyLFxuICBOYXZiYXJCcmFuZCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2RlYm91bmNlLXByb21pc2UnXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHt1c2VyczogW119O1xuXG4gICAgdGhpcy5zZWFyY2hVc2VyID0gdGhpcy5zZWFyY2hVc2VyLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZWFyY2hVc2VyKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c2Vyc1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzKSA9PiB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcnM6IHJlc30pXG4gICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMgc3RhdGUnLCB0aGlzLnN0YXRlKVxuICAgICAgICB9LCAoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignZXJyb3Igb24gZmV0Y2ggdXNlcicsIGVycilcbiAgICAgICAgfVxuICAgICAgKVxuICB9XG4gIFxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPE5hdmJhciBjb2xvcj1cImxpZ2h0XCIgbGlnaHQgZXhwYW5kPVwibWRcIj5cbiAgICAgICAgICA8TmF2YmFyQnJhbmQgaHJlZj1cIi9cIj5maW5kaGVhbHRoPC9OYXZiYXJCcmFuZD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIkRpZ2l0ZSBvIHF1ZSBkZXNlamEgYnVzY2FyXCIgb25DaGFuZ2U9e2RlYm91bmNlKHRoaXMuc2VhcmNoVXNlciwgNTAwKX0vPlxuICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XG4gICAgICAgICAge3RoaXMuc3RhdGUudXNlcnMubWFwKCh1c2VyLCBpKSA9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge3VzZXIubmFtZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX0gICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5uYXZiYXItZXhwYW5kLW1kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAjaGVhZGVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNlYXJjaC1pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+ICAgICAgICAgIFxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7Il19 */\n/*@ sourceURL=/home/andre/Workspace/medsearch/components/header.js */"));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=unidade.js.199572969237e61083f6.hot-update.js.map