webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header */ "./components/header.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map */ "./components/map.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_12__);














var Layout =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _Component);

  function Layout(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).call(this, props));
    _this.state = {
      users: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render(children) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-287309698"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        className: "jsx-287309698"
      }, "Test"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        charSet: "utf-8",
        className: "jsx-287309698"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width",
        className: "jsx-287309698"
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        href: "https://api.tiles.mapbox.com/mapbox-gl-js/v0.42.0/mapbox-gl.css",
        rel: "stylesheet",
        className: "jsx-287309698"
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-287309698" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_header__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-287309698" + " " + "container"
      }, children), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-287309698" + " " + "mapa"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_map__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("footer", {
        className: "jsx-287309698"
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-287309698" + " " + "container"
      }, "Footer")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "287309698"
      }, "footer.jsx-287309698{margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FuZHJlL1dvcmtzcGFjZS9tZWRzZWFyY2gvY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0VzQixBQUdpQyxnQkFDcEIiLCJmaWxlIjoiL2hvbWUvYW5kcmUvV29ya3NwYWNlL21lZHNlYXJjaC9jb21wb25lbnRzL2xheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7TGlua30gZnJvbSAnLi4vcm91dGVzJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuaW1wb3J0IE1hcCBmcm9tIFwiLi9tYXBcIjtcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcblxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczogW11cbiAgICB9XG4gIH1cblxuICByZW5kZXIoY2hpbGRyZW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+VGVzdDwvdGl0bGU+XG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgICAgICAgPGxpbmsgaHJlZj0naHR0cHM6Ly9hcGkudGlsZXMubWFwYm94LmNvbS9tYXBib3gtZ2wtanMvdjAuNDIuMC9tYXBib3gtZ2wuY3NzJyByZWw9J3N0eWxlc2hlZXQnIC8+XG4gICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgIHsvKiA8aGVhZGVyPlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgPExpbmsgcm91dGU9Jy8nPlxuICAgICAgICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgIDxMaW5rIHJvdXRlPScvYWJvdXQnPlxuICAgICAgICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL2Jsb2cnPlxuICAgICAgICAgICAgICAgIDxhPkJsb2c8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICA8TGluayByb3V0ZT0nL2Jsb2cvaGVsbG8td29ybGQnPlxuICAgICAgICAgICAgICAgICAgPGE+Y29udGFjdCBtZTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L2hlYWRlcj4gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXBhXCI+XG4gICAgICAgICAgPE1hcD48L01hcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgRm9vdGVyXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBmb290ZXIge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPiAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=/home/andre/Workspace/medsearch/components/layout.js */"));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.2066708ba3788046f644.hot-update.js.map