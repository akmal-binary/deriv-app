/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["reset-trading-password-modal"],{

/***/ "./App/Containers/ResetTradingPasswordModal/index.js":
/*!***********************************************************!*\
  !*** ./App/Containers/ResetTradingPasswordModal/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* reexport safe */ _reset_trading_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__.default)\n/* harmony export */ });\n/* harmony import */ var _reset_trading_password_modal_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-trading-password-modal.jsx */ \"./App/Containers/ResetTradingPasswordModal/reset-trading-password-modal.jsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbC9pbmRleC5qcz9kNTI0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZyb20gJy4vcmVzZXQtdHJhZGluZy1wYXNzd29yZC1tb2RhbC5qc3gnO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./App/Containers/ResetTradingPasswordModal/index.js\n");

/***/ }),

/***/ "./App/Containers/ResetTradingPasswordModal/reset-trading-password-modal.jsx":
/*!***********************************************************************************!*\
  !*** ./App/Containers/ResetTradingPasswordModal/reset-trading-password-modal.jsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../../../node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"../../../node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"../../../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"../../../node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _deriv_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @deriv/components */ \"../../components/src/index.js\");\n/* harmony import */ var _deriv_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @deriv/shared */ \"../../shared/src/index.js\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @deriv/translations */ \"../../translations/src/index.js\");\n/* harmony import */ var Stores_connect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Stores/connect */ \"./Stores/connect.js\");\n/* harmony import */ var Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Services */ \"./Services/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\nvar ResetTradingPassword = function ResetTradingPassword(_ref) {\n  var setDialogTitleFunc = _ref.setDialogTitleFunc,\n      toggleResetTradingPasswordModal = _ref.toggleResetTradingPasswordModal,\n      verification_code = _ref.verification_code,\n      is_dxtrade_allowed = _ref.is_dxtrade_allowed;\n\n  var handleSubmit = function handleSubmit(values, actions) {\n    actions.setSubmitting(true);\n    var params = {\n      new_password: values.password,\n      verification_code: verification_code\n    };\n    Services__WEBPACK_IMPORTED_MODULE_8__.WS.tradingPlatformPasswordReset(params).then( /*#__PURE__*/function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response) {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (response.error) {\n                  // eslint-disable-next-line no-console\n                  console.error(response.error.message);\n                  actions.setStatus({\n                    error_msg: response.error.message,\n                    error_code: response.error.code\n                  });\n                  setDialogTitleFunc(true);\n                } else {\n                  actions.resetForm({\n                    password: ''\n                  });\n                  actions.setStatus({\n                    reset_complete: true\n                  });\n                }\n\n                actions.setSubmitting(false);\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function (_x) {\n        return _ref2.apply(this, arguments);\n      };\n    }());\n  };\n\n  var validateReset = function validateReset(values) {\n    var errors = {};\n\n    if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.validLength)(values.password, {\n      min: 8,\n      max: 25\n    })) {\n      errors.password = (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('You should enter {{min_number}}-{{max_number}} characters.', {\n        min_number: 8,\n        max_number: 25\n      });\n    } else if (!(0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.validPassword)(values.password)) {\n      errors.password = (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getErrorMessages)().password();\n    }\n\n    return errors;\n  };\n\n  var reset_initial_values = {\n    password: ''\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"reset-trading-password\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Formik, {\n    initialValues: reset_initial_values,\n    initialStatus: {\n      reset_complete: false,\n      error_msg: '',\n      error_code: ''\n    },\n    validate: validateReset,\n    onSubmit: handleSubmit\n  }, function (_ref3) {\n    var handleBlur = _ref3.handleBlur,\n        errors = _ref3.errors,\n        values = _ref3.values,\n        touched = _ref3.touched,\n        isSubmitting = _ref3.isSubmitting,\n        handleChange = _ref3.handleChange,\n        status = _ref3.status;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(formik__WEBPACK_IMPORTED_MODULE_3__.Form, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, status.error_msg && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"reset-trading-password__error\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n      icon: \"IcMt5Expired\",\n      size: 128\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      size: \"xs\",\n      weight: \"bold\",\n      align: \"center\",\n      className: \"reset-trading-password__lead\"\n    }, status.error_msg), status.error_code === 'InvalidToken' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      color: \"prominent\",\n      size: \"xs\",\n      align: \"center\",\n      className: \"reset-trading-password__description--is-centered\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Please request a new password and check your email for the new token.\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      className: \"reset-trading-password__confirm-button\",\n      primary: true,\n      large: true,\n      onClick: function onClick() {\n        return toggleResetTradingPasswordModal(false);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Ok\"\n    }))), status.reset_complete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"reset-trading-password__password-success\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n      className: \"reset-trading-password__icon\",\n      icon: \"IcSuccessResetTradingPassword\",\n      size: 128\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      weight: \"bold\",\n      className: \"reset-trading-password__heading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Success\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      align: \"center\",\n      as: \"p\",\n      size: \"xs\",\n      className: \"reset-trading-password__subtext\"\n    }, is_dxtrade_allowed ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('You have a new trading password. Use this to log in to DMT5 and Deriv X.') : (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('You have a new trading password. Use this to log in to DMT5.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      type: \"button\",\n      onClick: function onClick() {\n        return toggleResetTradingPasswordModal(false);\n      },\n      primary: true,\n      large: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Done\"\n    }))), !status.error_msg && !status.reset_complete && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"reset-trading-password__set-password\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      weight: \"bold\",\n      className: \"reset-trading-password__heading\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Set new trading password\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"fieldset\", {\n      className: \"reset-trading-password__input-field\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.PasswordMeter, {\n      input: values.password,\n      has_error: !!(touched.password && errors.password),\n      custom_feedback_messages: (0,_deriv_shared__WEBPACK_IMPORTED_MODULE_5__.getErrorMessages)().password_warnings\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.PasswordInput, {\n      autoComplete: \"new-password\",\n      className: \"reset-trading-password__password-field\",\n      name: \"password\",\n      label: (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('Trading password'),\n      onChange: handleChange,\n      onBlur: handleBlur,\n      error: touched.password && errors.password,\n      value: values.password,\n      \"data-lpignore\": \"true\",\n      required: true\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Text, {\n      as: \"p\",\n      size: \"xs\",\n      className: \"reset-trading-password__hint\"\n    }, status.error_msg ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"{{error_msg}}\",\n      values: {\n        error_msg: status.error_msg\n      }\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Strong passwords contain at least 8 characters, combine uppercase and lowercase letters, numbers, and symbols.\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Button, {\n      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('reset-trading-password__btn', {\n        'reset-trading-password__btn--disabled': !values.password || errors.password || isSubmitting\n      }),\n      type: \"submit\",\n      is_disabled: !values.password || !!errors.password || isSubmitting,\n      primary: true,\n      large: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.Localize, {\n      i18n_default_text: \"Confirm\"\n    })))));\n  }));\n};\n\nResetTradingPassword.propTypes = {\n  is_dxtrade_allowed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  setDialogTitleFunc: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  toggleResetTradingPasswordModal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  verification_code: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n\nvar ResetTradingPasswordModal = function ResetTradingPasswordModal(_ref4) {\n  var disableApp = _ref4.disableApp,\n      enableApp = _ref4.enableApp,\n      is_loading = _ref4.is_loading,\n      is_visible = _ref4.is_visible,\n      toggleResetTradingPasswordModal = _ref4.toggleResetTradingPasswordModal,\n      verification_code = _ref4.verification_code,\n      is_dxtrade_allowed = _ref4.is_dxtrade_allowed;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(''),\n      _React$useState2 = _slicedToArray(_React$useState, 2),\n      dialog_title = _React$useState2[0],\n      setDialogTitle = _React$useState2[1];\n\n  var setDialogTitleFunc = function setDialogTitleFunc(is_invalid_token) {\n    setDialogTitle(is_invalid_token ? (0,_deriv_translations__WEBPACK_IMPORTED_MODULE_6__.localize)('Reset trading password') : '');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_deriv_components__WEBPACK_IMPORTED_MODULE_4__.Dialog, {\n    className: \"reset-trading-password__dialog\",\n    disableApp: disableApp,\n    enableApp: enableApp,\n    has_close_icon: !!dialog_title,\n    is_loading: is_loading,\n    is_visible: is_visible,\n    onConfirm: function onConfirm() {\n      return toggleResetTradingPasswordModal(false);\n    },\n    title: dialog_title\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ResetTradingPassword, {\n    toggleResetTradingPasswordModal: toggleResetTradingPasswordModal,\n    verification_code: verification_code,\n    setDialogTitleFunc: setDialogTitleFunc,\n    is_dxtrade_allowed: is_dxtrade_allowed\n  }));\n};\n\nResetTradingPasswordModal.propTypes = {\n  disableApp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  enableApp: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  is_loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  is_visible: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  is_dxtrade_allowed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),\n  toggleResetTradingPasswordModal: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  verification_code: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,Stores_connect__WEBPACK_IMPORTED_MODULE_7__.connect)(function (_ref5) {\n  var ui = _ref5.ui,\n      client = _ref5.client;\n  return {\n    disableApp: ui.disableApp,\n    enableApp: ui.enableApp,\n    is_loading: ui.is_loading,\n    is_visible: ui.is_reset_trading_password_modal_visible,\n    toggleResetTradingPasswordModal: ui.setResetTradingPasswordModalOpen,\n    verification_code: client.verification_code.trading_platform_password_reset,\n    is_dxtrade_allowed: client.is_dxtrade_allowed\n  };\n})(ResetTradingPasswordModal));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9BcHAvQ29udGFpbmVycy9SZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsL3Jlc2V0LXRyYWRpbmctcGFzc3dvcmQtbW9kYWwuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQXBwL0NvbnRhaW5lcnMvUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbC9yZXNldC10cmFkaW5nLXBhc3N3b3JkLW1vZGFsLmpzeD9iYTczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBGb3JtaWssIEZvcm0gfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgQnV0dG9uLCBEaWFsb2csIEljb24sIFBhc3N3b3JkSW5wdXQsIFBhc3N3b3JkTWV0ZXIsIFRleHQgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBnZXRFcnJvck1lc3NhZ2VzLCB2YWxpZFBhc3N3b3JkLCB2YWxpZExlbmd0aCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuaW1wb3J0IHsgbG9jYWxpemUsIExvY2FsaXplIH0gZnJvbSAnQGRlcml2L3RyYW5zbGF0aW9ucyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnU3RvcmVzL2Nvbm5lY3QnO1xuaW1wb3J0IHsgV1MgfSBmcm9tICdTZXJ2aWNlcyc7XG5cbmNvbnN0IFJlc2V0VHJhZGluZ1Bhc3N3b3JkID0gKHtcbiAgICBzZXREaWFsb2dUaXRsZUZ1bmMsXG4gICAgdG9nZ2xlUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbCxcbiAgICB2ZXJpZmljYXRpb25fY29kZSxcbiAgICBpc19keHRyYWRlX2FsbG93ZWQsXG59KSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKHZhbHVlcywgYWN0aW9ucykgPT4ge1xuICAgICAgICBhY3Rpb25zLnNldFN1Ym1pdHRpbmcodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG5ld19wYXNzd29yZDogdmFsdWVzLnBhc3N3b3JkLFxuICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgV1MudHJhZGluZ1BsYXRmb3JtUGFzc3dvcmRSZXNldChwYXJhbXMpLnRoZW4oYXN5bmMgcmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLmVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2V0U3RhdHVzKHsgZXJyb3JfbXNnOiByZXNwb25zZS5lcnJvci5tZXNzYWdlLCBlcnJvcl9jb2RlOiByZXNwb25zZS5lcnJvci5jb2RlIH0pO1xuICAgICAgICAgICAgICAgIHNldERpYWxvZ1RpdGxlRnVuYyh0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5yZXNldEZvcm0oeyBwYXNzd29yZDogJycgfSk7XG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zZXRTdGF0dXMoeyByZXNldF9jb21wbGV0ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGlvbnMuc2V0U3VibWl0dGluZyhmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCB2YWxpZGF0ZVJlc2V0ID0gdmFsdWVzID0+IHtcbiAgICAgICAgY29uc3QgZXJyb3JzID0ge307XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgIXZhbGlkTGVuZ3RoKHZhbHVlcy5wYXNzd29yZCwge1xuICAgICAgICAgICAgICAgIG1pbjogOCxcbiAgICAgICAgICAgICAgICBtYXg6IDI1LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBlcnJvcnMucGFzc3dvcmQgPSBsb2NhbGl6ZSgnWW91IHNob3VsZCBlbnRlciB7e21pbl9udW1iZXJ9fS17e21heF9udW1iZXJ9fSBjaGFyYWN0ZXJzLicsIHtcbiAgICAgICAgICAgICAgICBtaW5fbnVtYmVyOiA4LFxuICAgICAgICAgICAgICAgIG1heF9udW1iZXI6IDI1LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIXZhbGlkUGFzc3dvcmQodmFsdWVzLnBhc3N3b3JkKSkge1xuICAgICAgICAgICAgZXJyb3JzLnBhc3N3b3JkID0gZ2V0RXJyb3JNZXNzYWdlcygpLnBhc3N3b3JkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXJyb3JzO1xuICAgIH07XG5cbiAgICBjb25zdCByZXNldF9pbml0aWFsX3ZhbHVlcyA9IHsgcGFzc3dvcmQ6ICcnIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtdHJhZGluZy1wYXNzd29yZCc+XG4gICAgICAgICAgICA8Rm9ybWlrXG4gICAgICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17cmVzZXRfaW5pdGlhbF92YWx1ZXN9XG4gICAgICAgICAgICAgICAgaW5pdGlhbFN0YXR1cz17eyByZXNldF9jb21wbGV0ZTogZmFsc2UsIGVycm9yX21zZzogJycsIGVycm9yX2NvZGU6ICcnIH19XG4gICAgICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbGlkYXRlUmVzZXR9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7KHsgaGFuZGxlQmx1ciwgZXJyb3JzLCB2YWx1ZXMsIHRvdWNoZWQsIGlzU3VibWl0dGluZywgaGFuZGxlQ2hhbmdlLCBzdGF0dXMgfSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzLmVycm9yX21zZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19lcnJvcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPSdJY010NUV4cGlyZWQnIHNpemU9ezEyOH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT0neHMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0PSdib2xkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPSdjZW50ZXInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19sZWFkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdGF0dXMuZXJyb3JfbXNnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5lcnJvcl9jb2RlID09PSAnSW52YWxpZFRva2VuJyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9J3AnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPSdwcm9taW5lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9J3hzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj0nY2VudGVyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2V0LXRyYWRpbmctcGFzc3dvcmRfX2Rlc2NyaXB0aW9uLS1pcy1jZW50ZXJlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nUGxlYXNlIHJlcXVlc3QgYSBuZXcgcGFzc3dvcmQgYW5kIGNoZWNrIHlvdXIgZW1haWwgZm9yIHRoZSBuZXcgdG9rZW4uJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19jb25maXJtLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0b2dnbGVSZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J09rJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5yZXNldF9jb21wbGV0ZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19wYXNzd29yZC1zdWNjZXNzJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19pY29uJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249J0ljU3VjY2Vzc1Jlc2V0VHJhZGluZ1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezEyOH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgd2VpZ2h0PSdib2xkJyBjbGFzc05hbWU9J3Jlc2V0LXRyYWRpbmctcGFzc3dvcmRfX2hlYWRpbmcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZSBpMThuX2RlZmF1bHRfdGV4dD0nU3VjY2VzcycgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFsaWduPSdjZW50ZXInIGFzPSdwJyBzaXplPSd4cycgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19zdWJ0ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNfZHh0cmFkZV9hbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdZb3UgaGF2ZSBhIG5ldyB0cmFkaW5nIHBhc3N3b3JkLiBVc2UgdGhpcyB0byBsb2cgaW4gdG8gRE1UNSBhbmQgRGVyaXYgWC4nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGxvY2FsaXplKCdZb3UgaGF2ZSBhIG5ldyB0cmFkaW5nIHBhc3N3b3JkLiBVc2UgdGhpcyB0byBsb2cgaW4gdG8gRE1UNS4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbChmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhcmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdEb25lJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzdGF0dXMuZXJyb3JfbXNnICYmICFzdGF0dXMucmVzZXRfY29tcGxldGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzZXQtdHJhZGluZy1wYXNzd29yZF9fc2V0LXBhc3N3b3JkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGFzPSdwJyB3ZWlnaHQ9J2JvbGQnIGNsYXNzTmFtZT0ncmVzZXQtdHJhZGluZy1wYXNzd29yZF9faGVhZGluZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdTZXQgbmV3IHRyYWRpbmcgcGFzc3dvcmQnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmllbGRzZXQgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19pbnB1dC1maWVsZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzX2Vycm9yPXshISh0b3VjaGVkLnBhc3N3b3JkICYmIGVycm9ycy5wYXNzd29yZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbV9mZWVkYmFja19tZXNzYWdlcz17Z2V0RXJyb3JNZXNzYWdlcygpLnBhc3N3b3JkX3dhcm5pbmdzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBhc3N3b3JkSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT0nbmV3LXBhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdyZXNldC10cmFkaW5nLXBhc3N3b3JkX19wYXNzd29yZC1maWVsZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2xvY2FsaXplKCdUcmFkaW5nIHBhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e3RvdWNoZWQucGFzc3dvcmQgJiYgZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbHBpZ25vcmU9J3RydWUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGFzc3dvcmRNZXRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBhcz0ncCcgc2l6ZT0neHMnIGNsYXNzTmFtZT0ncmVzZXQtdHJhZGluZy1wYXNzd29yZF9faGludCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXR1cy5lcnJvcl9tc2cgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhbGl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bl9kZWZhdWx0X3RleHQ9J3t7ZXJyb3JfbXNnfX0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgZXJyb3JfbXNnOiBzdGF0dXMuZXJyb3JfbXNnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplIGkxOG5fZGVmYXVsdF90ZXh0PSdTdHJvbmcgcGFzc3dvcmRzIGNvbnRhaW4gYXQgbGVhc3QgOCBjaGFyYWN0ZXJzLCBjb21iaW5lIHVwcGVyY2FzZSBhbmQgbG93ZXJjYXNlIGxldHRlcnMsIG51bWJlcnMsIGFuZCBzeW1ib2xzLicgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygncmVzZXQtdHJhZGluZy1wYXNzd29yZF9fYnRuJywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzZXQtdHJhZGluZy1wYXNzd29yZF9fYnRuLS1kaXNhYmxlZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhdmFsdWVzLnBhc3N3b3JkIHx8IGVycm9ycy5wYXNzd29yZCB8fCBpc1N1Ym1pdHRpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXshdmFsdWVzLnBhc3N3b3JkIHx8ICEhZXJyb3JzLnBhc3N3b3JkIHx8IGlzU3VibWl0dGluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFyZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYWxpemUgaTE4bl9kZWZhdWx0X3RleHQ9J0NvbmZpcm0nIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Gb3JtaWs+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5SZXNldFRyYWRpbmdQYXNzd29yZC5wcm9wVHlwZXMgPSB7XG4gICAgaXNfZHh0cmFkZV9hbGxvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzZXREaWFsb2dUaXRsZUZ1bmM6IFByb3BUeXBlcy5mdW5jLFxuICAgIHRvZ2dsZVJlc2V0VHJhZGluZ1Bhc3N3b3JkTW9kYWw6IFByb3BUeXBlcy5mdW5jLFxuICAgIHZlcmlmaWNhdGlvbl9jb2RlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbCA9ICh7XG4gICAgZGlzYWJsZUFwcCxcbiAgICBlbmFibGVBcHAsXG4gICAgaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlLFxuICAgIHRvZ2dsZVJlc2V0VHJhZGluZ1Bhc3N3b3JkTW9kYWwsXG4gICAgdmVyaWZpY2F0aW9uX2NvZGUsXG4gICAgaXNfZHh0cmFkZV9hbGxvd2VkLFxufSkgPT4ge1xuICAgIGNvbnN0IFtkaWFsb2dfdGl0bGUsIHNldERpYWxvZ1RpdGxlXSA9IFJlYWN0LnVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBzZXREaWFsb2dUaXRsZUZ1bmMgPSBpc19pbnZhbGlkX3Rva2VuID0+IHtcbiAgICAgICAgc2V0RGlhbG9nVGl0bGUoaXNfaW52YWxpZF90b2tlbiA/IGxvY2FsaXplKCdSZXNldCB0cmFkaW5nIHBhc3N3b3JkJykgOiAnJyk7XG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8RGlhbG9nXG4gICAgICAgICAgICBjbGFzc05hbWU9J3Jlc2V0LXRyYWRpbmctcGFzc3dvcmRfX2RpYWxvZydcbiAgICAgICAgICAgIGRpc2FibGVBcHA9e2Rpc2FibGVBcHB9XG4gICAgICAgICAgICBlbmFibGVBcHA9e2VuYWJsZUFwcH1cbiAgICAgICAgICAgIGhhc19jbG9zZV9pY29uPXshIWRpYWxvZ190aXRsZX1cbiAgICAgICAgICAgIGlzX2xvYWRpbmc9e2lzX2xvYWRpbmd9XG4gICAgICAgICAgICBpc192aXNpYmxlPXtpc192aXNpYmxlfVxuICAgICAgICAgICAgb25Db25maXJtPXsoKSA9PiB0b2dnbGVSZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsKGZhbHNlKX1cbiAgICAgICAgICAgIHRpdGxlPXtkaWFsb2dfdGl0bGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxSZXNldFRyYWRpbmdQYXNzd29yZFxuICAgICAgICAgICAgICAgIHRvZ2dsZVJlc2V0VHJhZGluZ1Bhc3N3b3JkTW9kYWw9e3RvZ2dsZVJlc2V0VHJhZGluZ1Bhc3N3b3JkTW9kYWx9XG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX2NvZGU9e3ZlcmlmaWNhdGlvbl9jb2RlfVxuICAgICAgICAgICAgICAgIHNldERpYWxvZ1RpdGxlRnVuYz17c2V0RGlhbG9nVGl0bGVGdW5jfVxuICAgICAgICAgICAgICAgIGlzX2R4dHJhZGVfYWxsb3dlZD17aXNfZHh0cmFkZV9hbGxvd2VkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbn07XG5cblJlc2V0VHJhZGluZ1Bhc3N3b3JkTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGRpc2FibGVBcHA6IFByb3BUeXBlcy5mdW5jLFxuICAgIGVuYWJsZUFwcDogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaXNfbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfZHh0cmFkZV9hbGxvd2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0b2dnbGVSZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICB2ZXJpZmljYXRpb25fY29kZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKHsgdWksIGNsaWVudCB9KSA9PiAoe1xuICAgIGRpc2FibGVBcHA6IHVpLmRpc2FibGVBcHAsXG4gICAgZW5hYmxlQXBwOiB1aS5lbmFibGVBcHAsXG4gICAgaXNfbG9hZGluZzogdWkuaXNfbG9hZGluZyxcbiAgICBpc192aXNpYmxlOiB1aS5pc19yZXNldF90cmFkaW5nX3Bhc3N3b3JkX21vZGFsX3Zpc2libGUsXG4gICAgdG9nZ2xlUmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbDogdWkuc2V0UmVzZXRUcmFkaW5nUGFzc3dvcmRNb2RhbE9wZW4sXG4gICAgdmVyaWZpY2F0aW9uX2NvZGU6IGNsaWVudC52ZXJpZmljYXRpb25fY29kZS50cmFkaW5nX3BsYXRmb3JtX3Bhc3N3b3JkX3Jlc2V0LFxuICAgIGlzX2R4dHJhZGVfYWxsb3dlZDogY2xpZW50LmlzX2R4dHJhZGVfYWxsb3dlZCxcbn0pKShSZXNldFRyYWRpbmdQYXNzd29yZE1vZGFsKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUFBO0FBS0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQUFBO0FBNUdBO0FBc0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./App/Containers/ResetTradingPasswordModal/reset-trading-password-modal.jsx\n");

/***/ })

}]);