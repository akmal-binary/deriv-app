!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("@deriv/components/lib/button-link"),require("@deriv/components/lib/button-link.css"),require("@deriv/components/lib/div100vh-container"),require("@deriv/components/lib/div100vh-container.css"),require("@deriv/components/lib/icon"),require("@deriv/components/lib/icon.css"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components/lib/button-link","@deriv/components/lib/button-link.css","@deriv/components/lib/div100vh-container","@deriv/components/lib/div100vh-container.css","@deriv/components/lib/icon","@deriv/components/lib/icon.css","@deriv/shared","@deriv/translations","react"],n):"object"==typeof exports?exports["@deriv/account"]=n(require("@deriv/components/lib/button-link"),require("@deriv/components/lib/button-link.css"),require("@deriv/components/lib/div100vh-container"),require("@deriv/components/lib/div100vh-container.css"),require("@deriv/components/lib/icon"),require("@deriv/components/lib/icon.css"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=n(e["@deriv/components/lib/button-link"],e["@deriv/components/lib/button-link.css"],e["@deriv/components/lib/div100vh-container"],e["@deriv/components/lib/div100vh-container.css"],e["@deriv/components/lib/icon"],e["@deriv/components/lib/icon.css"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(window,(function(e,n,t,o,i,r,c,s,a){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s="./Components/poi-verified/index.js")}({"../node_modules/classnames/index.js":function(e,n,t){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var o=arguments[n];if(o){var r=typeof o;if("string"===r||"number"===r)e.push(o);else if(Array.isArray(o)&&o.length){var c=i.apply(null,o);c&&e.push(c)}else if("object"===r)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(o=function(){return i}.apply(n,[]))||(e.exports=o)}()},"./Components/icon-message-content/index.js":function(e,n,t){"use strict";t.r(n);var o=t("react"),i=t.n(o),r=t("../node_modules/classnames/index.js"),c=t.n(r),s=t("@deriv/components/lib/div100vh-container"),a=t.n(s),u=(t("@deriv/components/lib/div100vh-container.css"),t("@deriv/shared"));function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){var n=e.className,t=e.children,o=e.icon,r=e.icon_row,s=e.message,d=e.text;return i.a.createElement(a.a,{className:"account-management__message-wrapper",is_disabled:Object(u.isDesktop)(),height_offset:"110px"},i.a.createElement("div",{className:c()("account-management__message-content",l({},"".concat(n,"__message-content"),n))},o&&i.a.createElement("div",{className:c()("account-management__message-icon",l({},"".concat(n,"__message-icon"),n))},o),r&&i.a.createElement("div",null,r),i.a.createElement("div",{className:c()("account-management__message",l({},"".concat(n,"__message"),n))},s),d&&i.a.createElement("div",{className:"account-management__text-container"},i.a.createElement("p",{className:c()("account-management__text",l({},"".concat(n,"__text"),n))},d)),t))};n.default=d},"./Components/poa-button/index.js":function(e,n,t){"use strict";var o=t("@deriv/components/lib/button-link"),i=t.n(o),r=(t("@deriv/components/lib/button-link.css"),t("@deriv/translations")),c=t("react"),s=t.n(c);n.a=function(){return s.a.createElement(i.a,{to:"/account/proof-of-address"},s.a.createElement("p",{className:"dc-btn__text"},Object(r.localize)("Submit proof of address")))}},"./Components/poa-continue-trading-button/continue-trading-button.jsx":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var o=t("@deriv/components/lib/button-link"),i=t.n(o),r=(t("@deriv/components/lib/button-link.css"),t("@deriv/translations")),c=t("react"),s=t.n(c),a=function(){return s.a.createElement(i.a,{to:"/"},s.a.createElement("p",{className:"dc-btn__text"},Object(r.localize)("Continue trading")))}},"./Components/poa-continue-trading-button/index.js":function(e,n,t){"use strict";var o=t("./Components/poa-continue-trading-button/continue-trading-button.jsx");n.a=o.a},"./Components/poi-verified/index.js":function(e,n,t){"use strict";t.r(n);var o=t("react"),i=t.n(o),r=t("@deriv/components/lib/icon"),c=t.n(r),s=(t("@deriv/components/lib/icon.css"),t("@deriv/translations")),a=t("./Components/poa-continue-trading-button/index.js"),u=t("./Components/poa-button/index.js"),l=t("./Components/icon-message-content/index.js");n.default=function(e){var n=e.has_poa,t=e.is_description_enabled,o=e.redirect_button,r=Object(s.localize)("Your proof of identity is verified");return n?i.a.createElement(l.default,{message:r,icon:i.a.createElement(c.a,{icon:"IcPoiVerified",size:128})},t&&i.a.createElement(a.a,null)):i.a.createElement(l.default,{message:r,icon:i.a.createElement(c.a,{icon:"IcPoiVerified",size:128}),text:Object(s.localize)("To continue trading, you must also submit a proof of address.")},t&&i.a.createElement(u.a,null),o)}},"@deriv/components/lib/button-link":function(n,t){n.exports=e},"@deriv/components/lib/button-link.css":function(e,t){e.exports=n},"@deriv/components/lib/div100vh-container":function(e,n){e.exports=t},"@deriv/components/lib/div100vh-container.css":function(e,n){e.exports=o},"@deriv/components/lib/icon":function(e,n){e.exports=i},"@deriv/components/lib/icon.css":function(e,n){e.exports=r},"@deriv/shared":function(e,n){e.exports=c},"@deriv/translations":function(e,n){e.exports=s},react:function(e,n){e.exports=a}}).default}));
//# sourceMappingURL=poi-verified.js.map