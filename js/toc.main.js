!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){
/*!
 * in-view 0.6.1 - Get notified when a DOM element enters or exits the viewport.
 * Copyright (c) 2016 Cam Wiegert <cam@camwiegert.com> - https://camwiegert.github.io/in-view
 * License: MIT
 */
t.exports=function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var r=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(r);t.exports=o.default},function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(9),i=r(o),u=n(3),f=r(u),c=n(4);e.default=function(){if("undefined"!=typeof window){var t={history:[]},e={offset:{},threshold:0,test:c.inViewport},n=(0,i.default)(function(){t.history.forEach(function(e){t[e].check()})},100);["scroll","resize","load"].forEach(function(t){return addEventListener(t,n)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(n).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var r=function(n){if("string"==typeof n){var r=[].slice.call(document.querySelectorAll(n));return t.history.indexOf(n)>-1?t[n].elements=r:(t[n]=(0,f.default)(r,e),t.history.push(n)),t[n]}};return r.offset=function(t){if(void 0===t)return e.offset;var n=function(t){return"number"==typeof t};return["top","right","bottom","left"].forEach(n(t)?function(n){return e.offset[n]=t}:function(r){return n(t[r])?e.offset[r]=t[r]:null}),e.offset},r.threshold=function(t){return"number"==typeof t&&t>=0&&t<=1?e.threshold=t:e.threshold},r.test=function(t){return"function"==typeof t?e.test=t:e.test},r.is=function(t){return e.test(t,e)},r.offset(0),r}}()},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),r=function(){function t(e,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.options=n,this.elements=e,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return n(t,[{key:"check",value:function(){var t=this;return this.elements.forEach(function(e){var n=t.options.test(e,t.options),r=t.current.indexOf(e),o=r>-1,i=n&&!o,u=!n&&o;i&&(t.current.push(e),t.emit("enter",e)),u&&(t.current.splice(r,1),t.emit("exit",e))}),this}},{key:"on",value:function(t,e){return this.handlers[t].push(e),this}},{key:"once",value:function(t,e){return this.singles[t].unshift(e),this}},{key:"emit",value:function(t,e){for(;this.singles[t].length;)this.singles[t].pop()(e);for(var n=this.handlers[t].length;--n>-1;)this.handlers[t][n](e);return this}}]),t}();e.default=function(t,e){return new r(t,e)}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.inViewport=function(t,e){var n=t.getBoundingClientRect(),r=n.top,o=n.right,i=n.bottom,u=n.left,f=n.width,c=n.height,s={t:i,r:window.innerWidth-u,b:window.innerHeight-r,l:o},l={x:e.threshold*f,y:e.threshold*c};return s.t>e.offset.top+l.y&&s.r>e.offset.right+l.x&&s.b>e.offset.bottom+l.y&&s.l>e.offset.left+l.x}},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}())},function(t,e,n){var r=n(5),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e,n){var r=n(1),o=n(8),i=n(10),u="Expected a function",f=Math.max,c=Math.min;t.exports=function(t,e,n){function s(e){var n=p,r=v;return p=v=void 0,g=e,b=t.apply(r,n)}function l(t){var n=t-x,r=t-g;return void 0===x||n>=e||n<0||O&&r>=y}function a(){var t=o();return l(t)?d(t):void(m=setTimeout(a,function(t){var n=t-g,r=e-(t-x);return O?c(r,y-n):r}(t)))}function d(t){return m=void 0,j&&p?s(t):(p=v=void 0,b)}function h(){var t=o(),n=l(t);if(p=arguments,v=this,x=t,n){if(void 0===m)return function(t){return g=t,m=setTimeout(a,e),w?s(t):b}(x);if(O)return m=setTimeout(a,e),s(x)}return void 0===m&&(m=setTimeout(a,e)),b}var p,v,y,b,m,x,g=0,w=!1,O=!1,j=!0;if("function"!=typeof t)throw new TypeError(u);return e=i(e)||0,r(n)&&(w=!!n.leading,y=(O="maxWait"in n)?f(i(n.maxWait)||0,e):y,j="trailing"in n?!!n.trailing:j),h.cancel=function(){void 0!==m&&clearTimeout(m),g=0,p=x=v=m=void 0},h.flush=function(){return void 0===m?b:d(o())},h}},function(t,e,n){var r=n(6);t.exports=function(){return r.Date.now()}},function(t,e,n){var r=n(7),o=n(1),i="Expected a function";t.exports=function(t,e,n){var u=!0,f=!0;if("function"!=typeof t)throw new TypeError(i);return o(n)&&(u="leading"in n?!!n.leading:u,f="trailing"in n?!!n.trailing:f),r(t,e,{leading:u,maxWait:e,trailing:f})}},function(t,e){t.exports=function(t){return t}}])},,function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=!0,u=0;document.documentElement.scrollTop;document.addEventListener("scroll",function(){var t=window.scrollY;i=u-t<0,u=t,t}),document.querySelectorAll(".toc-link").forEach(function(t){var e=t.getAttribute("href");o()(e).on("exit",()=>{i&&f(e)}),o()(e).on("enter",()=>{i||f(e)}),t.onclick=function(){return setTimeout(function(){f(e)},577),!1}});new SmoothScroll('a[href*="#"]');function f(t){document.querySelectorAll(".toc-link").forEach(t=>{t.classList.remove("active")}),document.querySelector(".toc [href='"+t+"']").classList.add("active")}}]);