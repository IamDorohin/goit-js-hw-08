!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var r,o,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function y(t){var n=r,i=o;return r=o=void 0,l=t,u=e.apply(i,n)}function S(e){return l=e,f=setTimeout(O,t),d?y(e):u}function j(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function O(){var e=g();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-c);return s?p(n,a-(e-l)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,u)}function h(){var e=g(),n=j(e);if(r=arguments,o=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(O,t),y(c)}return void 0===f&&(f=setTimeout(O,t)),u}return t=x(t)||0,b(n)&&(d=!!n.leading,a=(s="maxWait"in n)?m(x(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=o=f=void 0},h.flush=function(){return void 0===f?u:T(g())},h}function b(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function x(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=u.test(t);return i||f.test(t)?c(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return b(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),y(e,t,{leading:r,maxWait:t,trailing:o})};var S={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};S.form.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(O),console.log(T)})),S.input.addEventListener("input",e(t)((function(e){inputEmail=e.target.value,T.email=inputEmail,localStorage.setItem(O,JSON.stringify(T))}),500)),S.textarea.addEventListener("input",e(t)((function(e){textareaMessage=e.target.value,T.textarea=textareaMessage,localStorage.setItem(O,JSON.stringify(T))}),500));var j,O="feedback-form-state",T={};(j=JSON.parse(localStorage.getItem(O)))&&(S.input.value=j.email,S.textarea.value=j.textarea)}();
//# sourceMappingURL=03-feedback.2d784bc4.js.map
