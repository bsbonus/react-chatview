!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("React")):"function"==typeof define&&define.amd?define(["React"],e):"object"==typeof exports?exports.ReactCursor=e(require("React")):t.ReactCursor=e(t.React)}(this,function(t){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/static/",e(0)}([function(t,e,n){"use strict";var r=n(1),o=n(12);t.exports={Cursor:r,ImmutableOptimizations:o}},function(t,e,n){"use strict";function r(t,e,n){this.value=n,this.onChange=function(t){r.debug===!0&&console.warn("'onChange' is deprecated use 'set' instead!"),this.set(t)},["push","unshift","splice","set","merge","apply"].forEach(function(n){this[n]=o.bind(this,t,e,"$"+n)}.bind(this)),this.refine=function(){var n=[].concat(e,i.flatten(arguments)),r=i.getRefAtPath(this.value,Array.prototype.slice.call(arguments,0));return f(t,n,r)}}function o(t,e,n,r){if("function"!=typeof r){var o=r;r=function(){return o}}t.setState(function(t){var o;return e.length>0?o=u.addons.update(t,e.concat(n).reduceRight(i.unDeref,r(i.getRefAtPath(t,e)))):0===e.length&&(o=r(t)),o})}var u=n(2),i=n(3),c=i.memoizeFactory(function(t,e,n){return e=void 0===e?[]:e,n=n||i.getRefAtPath(t.state,e),i.refToHash(t)+i.hashRecord(n)+i.hashRecord(e)}),f=c(function(t,e,n){return e=void 0===e?[]:e,n=n||i.getRefAtPath(t.state,e),new r(t,e,n)});r.build=f,r.debug=!1,t.exports=r},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t,e){if("function"!=typeof e)throw new TypeError("predicate must be a function");for(var n,r=Object(t),o=r.length>>>0,u=arguments[1],i=0;o>i;i++)if(n=r[i],e.call(u,n,i,r))return n;return void 0}function o(t,e){return a(e,u,t)}function u(t,e){return t[e]}function i(t,e){var n={};return n[e]=t,n}function c(t){return t.slice(0,t.length-1)}function f(t){return t[t.length-1]}function a(t,e,n){return t.reduce(e,n)}function s(t){return[].concat.apply([],t)}function p(t){for(var e=Object.keys(t),n=e.length,r=Array(n),o=0;n>o;o++)r[o]=[e[o],t[e[o]]];return r}function l(t){var e,n,r,o=0;if(void 0===t||null===t)return t;if(0===t.length)return o;for(e=0,r=t.length;r>e;e++)n=t.charCodeAt(e),o=(o<<5)-o+n,o|=0;return o}function h(t){return l(JSON.stringify(t))}function y(t){var e=p(b),n=r(e,function(e){return e[1]===t});if(n)return n[0];var o=(x++).toString();return b[o]=t,o}function d(t){function e(e){return function(){var r=t?t.apply(this,arguments):arguments[0];return hasOwnProperty.call(n,r)?n[r]:n[r]=e.apply(this,arguments)}}var n={};return e}var g=n(4),v=n(7),m=n(9),b={},x=0;t.exports={getRefAtPath:o,deref:u,unDeref:i,initial:c,last:f,reduce:a,flatten:s,pairs:p,hashString:l,hashRecord:h,refToHash:y,memoizeFactory:d,isEqual:g,union:v,omit:m,find:r}},function(t,e,n){function r(t){return null===t||void 0===t}function o(t){return t&&"object"==typeof t&&"number"==typeof t.length?"function"!=typeof t.copy||"function"!=typeof t.slice?!1:t.length>0&&"number"!=typeof t[0]?!1:!0:!1}function u(t,e,n){var u,s;if(r(t)||r(e))return!1;if(t.prototype!==e.prototype)return!1;if(f(t))return f(e)?(t=i.call(t),e=i.call(e),a(t,e,n)):!1;if(o(t)){if(!o(e))return!1;if(t.length!==e.length)return!1;for(u=0;u<t.length;u++)if(t[u]!==e[u])return!1;return!0}try{var p=c(t),l=c(e)}catch(h){return!1}if(p.length!=l.length)return!1;for(p.sort(),l.sort(),u=p.length-1;u>=0;u--)if(p[u]!=l[u])return!1;for(u=p.length-1;u>=0;u--)if(s=p[u],!a(t[s],e[s],n))return!1;return typeof t==typeof e}var i=Array.prototype.slice,c=n(5),f=n(6),a=t.exports=function(t,e,n){return n||(n={}),t===e?!0:t instanceof Date&&e instanceof Date?t.getTime()===e.getTime():"object"!=typeof t&&"object"!=typeof e?n.strict?t===e:t==e:u(t,e,n)}},function(t,e){function n(t){var e=[];for(var n in t)e.push(n);return e}e=t.exports="function"==typeof Object.keys?Object.keys:n,e.shim=n},function(t,e){function n(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function r(t){return t&&"object"==typeof t&&"number"==typeof t.length&&Object.prototype.hasOwnProperty.call(t,"callee")&&!Object.prototype.propertyIsEnumerable.call(t,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();e=t.exports=o?n:r,e.supported=n,e.unsupported=r},function(t,e,n){"use strict";var r=n(8);t.exports=function(){return r([].concat.apply([],arguments))}},function(t,e){(function(e){"use strict";function n(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function r(t){var e=new Set;return t.filter(function(t){return e.has(t)?void 0:(e.add(t),!0)})}function o(t){var e=[];return new Set(t).forEach(function(t){e.push(t)}),e}function u(){var t=!1;return new Set([!0]).forEach(function(e){t=e}),t===!0}"Set"in e?"function"==typeof Set.prototype.forEach&&u()?t.exports=o:t.exports=r:t.exports=n}).call(e,function(){return this}())},function(t,e,n){/*!
 * omit-key <https://github.com/jonschlinkert/omit-key>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
  "use strict";var r=n(10),o=n(11);t.exports=function(t,e){if(!r(t))return{};var n=Object.keys(t),u=n.length;e=Array.isArray(e)?e:[e];for(var i=o(n,e),c={},f=0;u>f;f++){var a=i[f];t.hasOwnProperty(a)&&(c[a]=t[a])}return c}},function(t,e){/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */
  "use strict";t.exports=function(t){return null!=t&&"object"==typeof t&&!Array.isArray(t)}},function(t,e,n){var r;!function(o){function u(t,e){var n,r,o=[];for(n=0,r=t.length;r>n;++n)-1===i.call(e,t[n])&&o.push(t[n]);for(n=0,r=e.length;r>n;++n)-1===i.call(t,e[n])&&o.push(e[n]);return o}var i=Array.prototype.indexOf||function(t){var e,n;if(null==this)throw new TypeError("indexOf called on null or undefined");for(e=0,n=this.length;n>e;++e)if(this[e]===t)return e;return-1};"object"==typeof t&&t.exports?t.exports=u:(r=function(){return u}.call(e,n,e,t),!(void 0!==r&&(t.exports=r)))}(this)},function(t,e,n){"use strict";function r(t,e){var n=t.concat(e||[]);return{shouldComponentUpdate:function(e){var r=this.props,u=!o.isEqual(o.omit(e,n),o.omit(r,n)),i=!t.every(function(t){return r[t]===e[t]});return u||i}}}var o=n(3);t.exports=r}])});
