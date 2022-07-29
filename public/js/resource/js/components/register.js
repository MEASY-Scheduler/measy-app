"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resource/js/components/register"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'register',
  data: function data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      processing: false
    };
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)({
    signIn: 'auth/login'
  })), {}, {
    register: function register() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.processing = true;
                _context.next = 3;
                return axios.post('/register', _this.user).then(function (response) {
                  _this.signIn();
                })["catch"](function (_ref) {
                  var data = _ref.response.data;
                  alert(data.message);
                })["finally"](function () {
                  _this.processing = false;
                });

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    signup: function signup() {
      var _this2 = this;

      document.querySelector('#signup_button').innerHTML = 'Processing...';
      document.querySelector('#signup_button').setAttribute('disabled', 'true');
      document.querySelector('#submission-errors').innerHTML = '';
      var email = document.querySelector('#email').value;
      var password = document.querySelector('#password').value;
      var all_errors = [];
      var url = BASE_URL + '/api/user/register';
      var formData = new FormData();
      formData.append('first_name', document.querySelector('#first_name').value);
      formData.append('last_name', document.querySelector('#last_name').value);
      formData.append('email', document.querySelector('#email').value);
      formData.append('password', document.querySelector('#password').value);
      formData.append('password_confirmation', document.querySelector('#confirm_password').value);
      formData.append('phone_no', document.querySelector('#phone_number').value);
      formData.append('cell_phone_no', document.querySelector('#cell_number').value);
      formData.append('occupation', document.querySelector('#occupation').value);
      formData.append('job_title', document.querySelector('#job_title').value);
      formData.append('organization', document.querySelector('#organization').value);
      fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json',
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.errors) {
          var data_errors = data.errors;

          for (key in data_errors) {
            all_errors.push("<p>".concat(data_errors[key][0], "</p>"));
          }

          ;
        } else {
          _this2.signIn();
        }
      })["catch"](function (err) {
        return console.log(err);
      })["finally"](function () {
        console.log(all_errors);
        document.querySelector('#submission-errors').innerHTML = all_errors.join("");
        document.querySelector('#signup_button').innerHTML = 'Sign Up';
        document.querySelector('#signup_button').removeAttribute('disabled');
        email = '';
        password = '';
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/components/Register.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/Register.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=97358ae4& */ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Register.vue?vue&type=template&id=97358ae4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/Register.vue?vue&type=template&id=97358ae4& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_97358ae4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=97358ae4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Register.vue?vue&type=template&id=97358ae4& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", {}, [
    _c("div", { staticClass: "container text-center" }, [
      _c("div", { staticClass: "row p-5 " }, [
        _c("div", { staticClass: "col-md-12 col-lg-8 offset-lg-2" }, [
          _c("h2", { staticClass: "text-primary mb-5" }, [_vm._v("Sign Up")]),
          _vm._v(" "),
          _c("div", { staticClass: "row border rounded border-primary p-5" }, [
            _c("div", {
              staticClass: "text-danger",
              attrs: { id: "submission-errors" },
            }),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _vm._m(3),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _vm._m(5),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _vm._m(7),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _vm._m(9),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mb-3" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-primary w-100",
                  attrs: { id: "signup_button" },
                  on: { click: _vm.signup },
                },
                [_vm._v(" Sign Up ")]
              ),
            ]),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _c("div", { staticClass: "col-12 mb-4" }, [
              _c(
                "label",
                [
                  _vm._v("Already have an account? "),
                  _c("router-link", { attrs: { to: { name: "login" } } }, [
                    _vm._v("Login Now!"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(12),
              _vm._v(" "),
              _vm._m(13),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "First Name", id: "first_name" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Last Name", id: "last_name" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Email Address", id: "email" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Occupation", id: "occupation" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Job Title", id: "job_title" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Organization", id: "organization" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Phone Number", id: "phone_number" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { placeholder: "Cell Number", id: "cell_number" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-4" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: { type: "password", placeholder: "Password", id: "password" },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 col-lg-6  mb-5" }, [
      _c("input", {
        staticClass: "form-control",
        attrs: {
          type: "password",
          placeholder: "Confirm Password",
          id: "confirm_password",
        },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mb-3" }, [
      _c("p", [
        _vm._v("By signing up, you agree to the "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("terms and conditions")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mt-2" }, [
      _c("p", { staticClass: "text-center" }, [_vm._v("Or")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "social-button",
        attrs: { href: "/api/auth/google", id: "google-connect" },
      },
      [_c("span", [_vm._v("Signup with Google")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "social-button",
        attrs: { href: "#", id: "microsoft-connect" },
      },
      [_c("span", [_vm._v("Signup with Microsoft")])]
    )
  },
]
render._withStripped = true



/***/ })

}]);
=======
/*! For license information please see register.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[844],{6493:(t,e,r)=>{r.r(e),r.d(e,{default:()=>l});function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=p(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var m={};function f(){}function d(){}function v(){}var h={};u(h,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==e&&r.call(y,a)&&(h=y);var _=v.prototype=f.prototype=Object.create(h);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(i,a,s,c){var u=p(t[i],t,a);if("throw"!==u.type){var l=u.arg,m=l.value;return m&&"object"==n(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){o("next",t,s,c)}),(function(t){o("throw",t,s,c)})):e.resolve(m).then((function(t){l.value=t,s(l)}),(function(t){return o("throw",t,s,c)}))}c(u.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var n=p(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,m;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=v,u(_,"constructor",v),u(v,"constructor",d),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,s,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(_),u(_,c,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function i(t,e,r,n,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,o)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const u={name:"register",data:function(){return{user:{firstname:"",lastname:"",email:"",password:"",password_confirmation:"",phone_no:"",cell_phone_no:"",occupation:"",job_title:"",organization:""},notifmsg:"",processing:!1}},methods:s(s({},(0,r(629).nv)({signIn:"auth/login"})),{},{register:function(){var t,e=this;return(t=o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.processing=!0,e.notifmsg="",t.next=4,axios.post(BASE_URL+"/api/auth/register",e.user).then((function(t){e.$router.push({name:"email-verification"})})).catch((function(t){var r,n=t.response.data;e.notifmsg=null!==(r=n.errors)&&void 0!==r?r:n.message})).finally((function(){e.processing=!1}));case 4:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function s(t){i(a,n,o,s,c,"next",t)}function c(t){i(a,n,o,s,c,"throw",t)}s(void 0)}))})()},signup:function(){var t=this;document.querySelector("#signup_button").innerHTML="Processing...",document.querySelector("#signup_button").setAttribute("disabled","true");var e=BASE_URL+"/api/auth/register",r=new FormData;r.append("firstname",document.querySelector("#first_name").value),r.append("lastname",document.querySelector("#last_name").value),r.append("email",document.querySelector("#email").value),r.append("password",document.querySelector("#password").value),r.append("password_confirmation",document.querySelector("#confirm_password").value),r.append("phone_no",document.querySelector("#phone_number").value),r.append("cell_phone_no",document.querySelector("#cell_number").value),r.append("occupation",document.querySelector("#occupation").value),r.append("job_title",document.querySelector("#job_title").value),r.append("organization",document.querySelector("#organization").value),fetch(e,{method:"POST",body:r,headers:{Accept:"application/json","X-CSRF-TOKEN":$('meta[name="csrf-token"]').attr("content")}}).then((function(t){return t.json()})).then((function(e){console.log(e),e.errors?t.notifmsg=e.errors:(localStorage.setItem("app_token",e.data.token),t.signIn())})).catch((function(t){return console.log(t)})).finally((function(){document.querySelector("#signup_button").innerHTML="Sign Up",document.querySelector("#signup_button").removeAttribute("disabled")}))}})};const l=(0,r(1900).Z)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{},[r("div",{staticClass:"container text-center"},[r("div",{staticClass:"row p-5 "},[r("div",{staticClass:"col-md-12 col-lg-10 offset-lg-1"},[r("h2",{staticClass:"text-primary mb-5"},[t._v("Sign Up")]),t._v(" "),r("div",{staticClass:"row border rounded border-primary p-5"},[r("div",{staticClass:"col-12 mb-2"},[t.notifmsg?r("div",{staticClass:"alert alert-danger"},t._l(t.notifmsg,(function(e,n){return r("div",{key:n},t._l(e,(function(e,n){return r("div",{key:n},[r("span",{},[t._v(t._s(e)+" ")])])})),0)})),0):t._e()]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.firstname,expression:"user.firstname"}],staticClass:"form-control",attrs:{placeholder:"First Name",id:"first_name"},domProps:{value:t.user.firstname},on:{input:function(e){e.target.composing||t.$set(t.user,"firstname",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.lastname,expression:"user.lastname"}],staticClass:"form-control",attrs:{placeholder:"Last Name",id:"last_name"},domProps:{value:t.user.lastname},on:{input:function(e){e.target.composing||t.$set(t.user,"lastname",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{placeholder:"Email Address",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.occupation,expression:"user.occupation"}],staticClass:"form-control",attrs:{placeholder:"Occupation",id:"occupation"},domProps:{value:t.user.occupation},on:{input:function(e){e.target.composing||t.$set(t.user,"occupation",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.job_title,expression:"user.job_title"}],staticClass:"form-control",attrs:{placeholder:"Job Title",id:"job_title"},domProps:{value:t.user.job_title},on:{input:function(e){e.target.composing||t.$set(t.user,"job_title",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.organization,expression:"user.organization"}],staticClass:"form-control",attrs:{placeholder:"Organization",id:"organization"},domProps:{value:t.user.organization},on:{input:function(e){e.target.composing||t.$set(t.user,"organization",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{placeholder:"Phone Number",id:"phone_number"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.cell_phone_number,expression:"user.cell_phone_number"}],staticClass:"form-control",attrs:{placeholder:"Cell Number",id:"cell_number"},domProps:{value:t.user.cell_phone_number},on:{input:function(e){e.target.composing||t.$set(t.user,"cell_phone_number",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Password",id:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-lg-6  mb-5"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Confirm Password",id:"confirm_password"},domProps:{value:t.user.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.user,"password_confirmation",e.target.value)}}})]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"col-12 mb-3"},[r("button",{staticClass:"btn btn-primary w-100",attrs:{disabled:t.processing,id:"signup_button"},on:{click:t.register}},[t._v(" "+t._s(t.processing?"Processing":"Sign Up")+" ")])]),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"col-12 mb-4"},[r("label",[t._v("Already have an account? "),r("router-link",{attrs:{to:{name:"login"}}},[t._v("Login Now!")])],1),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 mb-3"},[r("p",[t._v("By signing up, you agree to the "),r("a",{attrs:{href:"#"}},[t._v("terms and conditions")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-12 mt-2"},[r("p",{staticClass:"text-center"},[t._v("Or")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"social-button",attrs:{href:"#",id:"google-connect"}},[r("span",[t._v("Signup with Google")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"social-button",attrs:{href:"#",id:"microsoft-connect"}},[r("span",[t._v("Signup with Microsoft")])])}],!1,null,null,null).exports}}]);
