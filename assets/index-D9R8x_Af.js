function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t={exports:{}},n={},r={exports:{}},a={},i=Symbol.for("react.element"),o=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.iterator;var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function w(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}function x(){}function k(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},w.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=w.prototype;var S=k.prototype=new x;S.constructor=k,b(S,w.prototype),S.isPureReactComponent=!0;var C=Array.isArray,E=Object.prototype.hasOwnProperty,z={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function N(e,t,n){var r,a={},o=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)E.call(t,r)&&!j.hasOwnProperty(r)&&(a[r]=t[r]);var u=arguments.length-2;if(1===u)a.children=n;else if(1<u){for(var s=Array(u),c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===a[r]&&(a[r]=u[r]);return{$$typeof:i,type:e,key:o,ref:l,props:a,_owner:z.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var D=/\/+/g;function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function M(e,t,n,r,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var u=!1;if(null===e)u=!0;else switch(l){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case i:case o:u=!0}}if(u)return a=a(u=e),e=""===r?"."+T(u,0):r,C(a)?(n="",null!=e&&(n=e.replace(D,"$&/")+"/"),M(a,t,n,"",function(e){return e})):null!=a&&(P(a)&&(a=function(e,t){return{$$typeof:i,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||u&&u.key===a.key?"":(""+a.key).replace(D,"$&/")+"/")+e)),t.push(a)),1;if(u=0,r=""===r?".":r+":",C(e))for(var s=0;s<e.length;s++){var c=r+T(l=e[s],s);u+=M(l,t,n,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),s=0;!(l=e.next()).done;)u+=M(l=l.value,t,n,c=r+T(l,s++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return u}function _(e,t,n){if(null==e)return e;var r=[],a=0;return M(e,r,"","",function(e){return t.call(n,e,a++)}),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},I={transition:null},F={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:I,ReactCurrentOwner:z};function R(){throw Error("act(...) is not supported in production builds of React.")}a.Children={map:_,forEach:function(e,t,n){_(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _(e,function(){t++}),t},toArray:function(e){return _(e,function(e){return e})||[]},only:function(e){if(!P(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a.Component=w,a.Fragment=l,a.Profiler=s,a.PureComponent=k,a.StrictMode=u,a.Suspense=p,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,a.act=R,a.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b({},e.props),a=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=z.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in t)E.call(t,s)&&!j.hasOwnProperty(s)&&(r[s]=void 0===t[s]&&void 0!==u?u[s]:t[s])}var s=arguments.length-2;if(1===s)r.children=n;else if(1<s){u=Array(s);for(var c=0;c<s;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:i,type:e.type,key:a,ref:o,props:r,_owner:l}},a.createContext=function(e){return(e={$$typeof:d,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},a.createElement=N,a.createFactory=function(e){var t=N.bind(null,e);return t.type=e,t},a.createRef=function(){return{current:null}},a.forwardRef=function(e){return{$$typeof:f,render:e}},a.isValidElement=P,a.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:L}},a.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},a.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},a.unstable_act=R,a.useCallback=function(e,t){return O.current.useCallback(e,t)},a.useContext=function(e){return O.current.useContext(e)},a.useDebugValue=function(){},a.useDeferredValue=function(e){return O.current.useDeferredValue(e)},a.useEffect=function(e,t){return O.current.useEffect(e,t)},a.useId=function(){return O.current.useId()},a.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},a.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},a.useMemo=function(e,t){return O.current.useMemo(e,t)},a.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},a.useRef=function(e){return O.current.useRef(e)},a.useState=function(e){return O.current.useState(e)},a.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},a.useTransition=function(){return O.current.useTransition()},a.version="18.3.1",r.exports=a;var A=r.exports;const $=e(A);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W=A,U=Symbol.for("react.element"),H=Symbol.for("react.fragment"),B=Object.prototype.hasOwnProperty,G=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function Y(e,t,n){var r,a={},i=null,o=null;for(r in void 0!==n&&(i=""+n),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(o=t.ref),t)B.call(t,r)&&!V.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:U,type:e,key:i,ref:o,props:a,_owner:G.current}}n.Fragment=H,n.jsx=Y,n.jsxs=Y,t.exports=n;var Q=t.exports,q={},X={exports:{}},K={},Z={exports:{}},J={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var l=2*(r+1)-1,u=e[l],s=l+1,c=e[s];if(0>a(u,n))s<i&&0>a(c,u)?(e[r]=c,e[s]=n,r=s):(e[r]=u,e[l]=n,r=l);else{if(!(s<i&&0>a(c,n)))break e;e[r]=c,e[s]=n,r=s}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var u=[],s=[],c=1,d=null,f=3,p=!1,m=!1,h=!1,g="function"==typeof setTimeout?setTimeout:null,v="function"==typeof clearTimeout?clearTimeout:null,b="undefined"!=typeof setImmediate?setImmediate:null;function y(e){for(var a=n(s);null!==a;){if(null===a.callback)r(s);else{if(!(a.startTime<=e))break;r(s),a.sortIndex=a.expirationTime,t(u,a)}a=n(s)}}function w(e){if(h=!1,y(e),!m)if(null!==n(u))m=!0,M(x);else{var t=n(s);null!==t&&_(w,t.startTime-e)}}function x(t,a){m=!1,h&&(h=!1,v(E),E=-1),p=!0;var i=f;try{for(y(a),d=n(u);null!==d&&(!(d.expirationTime>a)||t&&!N());){var o=d.callback;if("function"==typeof o){d.callback=null,f=d.priorityLevel;var l=o(d.expirationTime<=a);a=e.unstable_now(),"function"==typeof l?d.callback=l:d===n(u)&&r(u),y(a)}else r(u);d=n(u)}if(null!==d)var c=!0;else{var g=n(s);null!==g&&_(w,g.startTime-a),c=!1}return c}finally{d=null,f=i,p=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var k,S=!1,C=null,E=-1,z=5,j=-1;function N(){return!(e.unstable_now()-j<z)}function P(){if(null!==C){var t=e.unstable_now();j=t;var n=!0;try{n=C(!0,t)}finally{n?k():(S=!1,C=null)}}else S=!1}if("function"==typeof b)k=function(){b(P)};else if("undefined"!=typeof MessageChannel){var D=new MessageChannel,T=D.port2;D.port1.onmessage=P,k=function(){T.postMessage(null)}}else k=function(){g(P,0)};function M(e){C=e,S||(S=!0,k())}function _(t,n){E=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,M(x))},e.unstable_forceFrameRate=function(e){0>e||125<e||(z=0<e?Math.floor(1e3/e):5)},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,a,i){var o=e.unstable_now();switch("object"==typeof i&&null!==i?i="number"==typeof(i=i.delay)&&0<i?o+i:o:i=o,r){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return r={id:c++,callback:a,priorityLevel:r,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(r.sortIndex=i,t(s,r),null===n(u)&&r===n(s)&&(h?(v(E),E=-1):h=!0,_(w,i-o))):(r.sortIndex=l,t(u,r),m||p||(m=!0,M(x))),r},e.unstable_shouldYield=N,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}}(J),Z.exports=J;var ee=Z.exports,te=A,ne=ee;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ae=new Set,ie={};function oe(e,t){le(e,t),le(e+"Capture",t)}function le(e,t){for(ie[e]=t,e=0;e<t.length;e++)ae.add(t[e])}var ue=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),se=Object.prototype.hasOwnProperty,ce=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,de={},fe={};function pe(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new pe(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new pe(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new pe(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new pe(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new pe(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){me[e]=new pe(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){me[e]=new pe(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){me[e]=new pe(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){me[e]=new pe(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}function ve(e,t,n,r){var a=me.hasOwnProperty(t)?me[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!se.call(fe,e)||!se.call(de,e)&&(ce.test(e)?fe[e]=!0:(de[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(he,ge);me[t]=new pe(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(he,ge);me[t]=new pe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(he,ge);me[t]=new pe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){me[e]=new pe(e,1,!1,e.toLowerCase(),null,!1,!1)}),me.xlinkHref=new pe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){me[e]=new pe(e,1,!1,e.toLowerCase(),null,!0,!0)});var be=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ye=Symbol.for("react.element"),we=Symbol.for("react.portal"),xe=Symbol.for("react.fragment"),ke=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),Ce=Symbol.for("react.provider"),Ee=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),je=Symbol.for("react.suspense"),Ne=Symbol.for("react.suspense_list"),Pe=Symbol.for("react.memo"),De=Symbol.for("react.lazy"),Te=Symbol.for("react.offscreen"),Me=Symbol.iterator;function _e(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Me&&e[Me]||e["@@iterator"])?e:null}var Le,Oe=Object.assign;function Ie(e){if(void 0===Le)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Le=t&&t[1]||""}return"\n"+Le+e}var Fe=!1;function Re(e,t){if(!e||Fe)return"";Fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&"string"==typeof s.stack){for(var a=s.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var u="\n"+a[o].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=o&&0<=l);break}}}finally{Fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ie(e):""}function Ae(e){switch(e.tag){case 5:return Ie(e.type);case 16:return Ie("Lazy");case 13:return Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 2:case 15:return e=Re(e.type,!1);case 11:return e=Re(e.type.render,!1);case 1:return e=Re(e.type,!0);default:return""}}function $e(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case xe:return"Fragment";case we:return"Portal";case Se:return"Profiler";case ke:return"StrictMode";case je:return"Suspense";case Ne:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Ee:return(e.displayName||"Context")+".Consumer";case Ce:return(e._context.displayName||"Context")+".Provider";case ze:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Pe:return null!==(t=e.displayName||null)?t:$e(e.type)||"Memo";case De:t=e._payload,e=e._init;try{return $e(e(t))}catch(n){}}return null}function We(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(t);case 8:return t===ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Ue(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function He(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Be(e){e._valueTracker||(e._valueTracker=function(e){var t=He(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Ge(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=He(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ve(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ye(e,t){var n=t.checked;return Oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function Qe(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Ue(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function qe(e,t){null!=(t=t.checked)&&ve(e,"checked",t,!1)}function Xe(e,t){qe(e,t);var n=Ue(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Ze(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ze(e,t.type,Ue(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ke(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Ze(e,t,n){"number"===t&&Ve(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Je=Array.isArray;function et(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ue(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function tt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(re(91));return Oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(re(92));if(Je(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Ue(n)}}function rt(e,t){var n=Ue(t.value),r=Ue(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function at(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function it(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ot(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?it(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var lt,ut,st=(ut=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((lt=lt||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=lt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ut(e,t)})}:ut);function ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var dt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ft=["Webkit","ms","Moz","O"];function pt(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||dt.hasOwnProperty(e)&&dt[e]?(""+t).trim():t+"px"}function mt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=pt(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(dt).forEach(function(e){ft.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),dt[t]=dt[e]})});var ht=Oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(e,t){if(t){if(ht[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(re(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(re(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(re(62))}}function vt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function yt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var wt=null,xt=null,kt=null;function St(e){if(e=vi(e)){if("function"!=typeof wt)throw Error(re(280));var t=e.stateNode;t&&(t=yi(t),wt(e.stateNode,e.type,t))}}function Ct(e){xt?kt?kt.push(e):kt=[e]:xt=e}function Et(){if(xt){var e=xt,t=kt;if(kt=xt=null,St(e),t)for(e=0;e<t.length;e++)St(t[e])}}function zt(e,t){return e(t)}function jt(){}var Nt=!1;function Pt(e,t,n){if(Nt)return e(t,n);Nt=!0;try{return zt(e,t,n)}finally{Nt=!1,(null!==xt||null!==kt)&&(jt(),Et())}}function Dt(e,t){var n=e.stateNode;if(null===n)return null;var r=yi(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(re(231,t,typeof n));return n}var Tt=!1;if(ue)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Tt=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(ut){Tt=!1}function _t(e,t,n,r,a,i,o,l,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(c){this.onError(c)}}var Lt=!1,Ot=null,It=!1,Ft=null,Rt={onError:function(e){Lt=!0,Ot=e}};function At(e,t,n,r,a,i,o,l,u){Lt=!1,Ot=null,_t.apply(Rt,arguments)}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Wt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ut(e){if($t(e)!==e)throw Error(re(188))}function Ht(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$t(e)))throw Error(re(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Ut(a),e;if(i===r)return Ut(a),t;i=i.sibling}throw Error(re(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,l=a.child;l;){if(l===n){o=!0,n=a,r=i;break}if(l===r){o=!0,r=a,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=a;break}if(l===r){o=!0,r=i,n=a;break}l=l.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(3!==n.tag)throw Error(re(188));return n.stateNode.current===n?e:t}(e))?Bt(e):null}function Bt(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Bt(e);if(null!==t)return t;e=e.sibling}return null}var Gt=ne.unstable_scheduleCallback,Vt=ne.unstable_cancelCallback,Yt=ne.unstable_shouldYield,Qt=ne.unstable_requestPaint,qt=ne.unstable_now,Xt=ne.unstable_getCurrentPriorityLevel,Kt=ne.unstable_ImmediatePriority,Zt=ne.unstable_UserBlockingPriority,Jt=ne.unstable_NormalPriority,en=ne.unstable_LowPriority,tn=ne.unstable_IdlePriority,nn=null,rn=null;var an=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(on(e)/ln|0)|0},on=Math.log,ln=Math.LN2;var un=64,sn=4194304;function cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=cn(l):0!==(i&=o)&&(r=cn(i))}else 0!==(o=n&~a)?r=cn(o):0!==i&&(r=cn(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&4194240&i))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-an(t)),r|=e[n],t&=~a;return r}function fn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function pn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mn(){var e=un;return!(4194240&(un<<=1))&&(un=64),e}function hn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-an(t)]=n}function vn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-an(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bn=0;function yn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var wn,xn,kn,Sn,Cn,En=!1,zn=[],jn=null,Nn=null,Pn=null,Dn=new Map,Tn=new Map,Mn=[],_n="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ln(e,t){switch(e){case"focusin":case"focusout":jn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Pn=null;break;case"pointerover":case"pointerout":Dn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function On(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=vi(t))&&xn(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function In(e){var t=gi(e.target);if(null!==t){var n=$t(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Wt(n)))return e.blockedOn=t,void Cn(e.priority,function(){kn(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Fn(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Qn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=vi(n))&&xn(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);bt=r,n.target.dispatchEvent(r),bt=null,t.shift()}return!0}function Rn(e,t,n){Fn(e)&&n.delete(t)}function An(){En=!1,null!==jn&&Fn(jn)&&(jn=null),null!==Nn&&Fn(Nn)&&(Nn=null),null!==Pn&&Fn(Pn)&&(Pn=null),Dn.forEach(Rn),Tn.forEach(Rn)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,En||(En=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,An)))}function Wn(e){function t(t){return $n(t,e)}if(0<zn.length){$n(zn[0],e);for(var n=1;n<zn.length;n++){var r=zn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==jn&&$n(jn,e),null!==Nn&&$n(Nn,e),null!==Pn&&$n(Pn,e),Dn.forEach(t),Tn.forEach(t),n=0;n<Mn.length;n++)(r=Mn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Mn.length&&null===(n=Mn[0]).blockedOn;)In(n),null===n.blockedOn&&Mn.shift()}var Un=be.ReactCurrentBatchConfig,Hn=!0;function Bn(e,t,n,r){var a=bn,i=Un.transition;Un.transition=null;try{bn=1,Vn(e,t,n,r)}finally{bn=a,Un.transition=i}}function Gn(e,t,n,r){var a=bn,i=Un.transition;Un.transition=null;try{bn=4,Vn(e,t,n,r)}finally{bn=a,Un.transition=i}}function Vn(e,t,n,r){if(Hn){var a=Qn(e,t,n,r);if(null===a)Ua(e,t,r,Yn,n),Ln(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return jn=On(jn,e,t,n,r,a),!0;case"dragenter":return Nn=On(Nn,e,t,n,r,a),!0;case"mouseover":return Pn=On(Pn,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Dn.set(i,On(Dn.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,Tn.set(i,On(Tn.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ln(e,r),4&t&&-1<_n.indexOf(e)){for(;null!==a;){var i=vi(a);if(null!==i&&wn(i),null===(i=Qn(e,t,n,r))&&Ua(e,t,r,Yn,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Ua(e,t,r,null,n)}}var Yn=null;function Qn(e,t,n,r){if(Yn=null,null!==(e=gi(e=yt(r))))if(null===(t=$t(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Wt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yn=e,null}function qn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xt()){case Kt:return 1;case Zt:return 4;case Jt:case en:return 16;case tn:return 536870912;default:return 16}default:return 16}}var Xn=null,Kn=null,Zn=null;function Jn(){if(Zn)return Zn;var e,t,n=Kn,r=n.length,a="value"in Xn?Xn.value:Xn.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Zn=a.slice(e,1<t?1-t:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tr(){return!0}function nr(){return!1}function rr(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?tr:nr,this.isPropagationStopped=nr,this}return Oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var ar,ir,or,lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ur=rr(lr),sr=Oe({},lr,{view:0,detail:0}),cr=rr(sr),dr=Oe({},sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==or&&(or&&"mousemove"===e.type?(ar=e.screenX-or.screenX,ir=e.screenY-or.screenY):ir=ar=0,or=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),fr=rr(dr),pr=rr(Oe({},dr,{dataTransfer:0})),mr=rr(Oe({},sr,{relatedTarget:0})),hr=rr(Oe({},lr,{animationName:0,elapsedTime:0,pseudoElement:0})),gr=Oe({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vr=rr(gr),br=rr(Oe({},lr,{data:0})),yr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wr={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xr={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kr(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xr[e])&&!!t[e]}function Sr(){return kr}var Cr=Oe({},sr,{key:function(e){if(e.key){var t=yr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=er(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wr[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?er(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?er(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Er=rr(Cr),zr=rr(Oe({},dr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jr=rr(Oe({},sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),Nr=rr(Oe({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pr=Oe({},dr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dr=rr(Pr),Tr=[9,13,27,32],Mr=ue&&"CompositionEvent"in window,_r=null;ue&&"documentMode"in document&&(_r=document.documentMode);var Lr=ue&&"TextEvent"in window&&!_r,Or=ue&&(!Mr||_r&&8<_r&&11>=_r),Ir=String.fromCharCode(32),Fr=!1;function Rr(e,t){switch(e){case"keyup":return-1!==Tr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ar(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var $r=!1;var Wr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Wr[e.type]:"textarea"===t}function Hr(e,t,n,r){Ct(r),0<(t=Ba(t,"onChange")).length&&(n=new ur("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Br=null,Gr=null;function Vr(e){Ia(e,0)}function Yr(e){if(Ge(bi(e)))return e}function Qr(e,t){if("change"===e)return t}var qr=!1;if(ue){var Xr;if(ue){var Kr="oninput"in document;if(!Kr){var Zr=document.createElement("div");Zr.setAttribute("oninput","return;"),Kr="function"==typeof Zr.oninput}Xr=Kr}else Xr=!1;qr=Xr&&(!document.documentMode||9<document.documentMode)}function Jr(){Br&&(Br.detachEvent("onpropertychange",ea),Gr=Br=null)}function ea(e){if("value"===e.propertyName&&Yr(Gr)){var t=[];Hr(t,Gr,e,yt(e)),Pt(Vr,t)}}function ta(e,t,n){"focusin"===e?(Jr(),Gr=n,(Br=t).attachEvent("onpropertychange",ea)):"focusout"===e&&Jr()}function na(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yr(Gr)}function ra(e,t){if("click"===e)return Yr(t)}function aa(e,t){if("input"===e||"change"===e)return Yr(t)}var ia="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function oa(e,t){if(ia(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!se.call(t,a)||!ia(e[a],t[a]))return!1}return!0}function la(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ua(e,t){var n,r=la(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=la(r)}}function sa(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?sa(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ca(){for(var e=window,t=Ve();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ve((e=t.contentWindow).document)}return t}function da(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function fa(e){var t=ca(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&sa(n.ownerDocument.documentElement,n)){if(null!==r&&da(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=ua(n,i);var o=ua(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pa=ue&&"documentMode"in document&&11>=document.documentMode,ma=null,ha=null,ga=null,va=!1;function ba(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;va||null==ma||ma!==Ve(r)||("selectionStart"in(r=ma)&&da(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ga&&oa(ga,r)||(ga=r,0<(r=Ba(ha,"onSelect")).length&&(t=new ur("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ma)))}function ya(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wa={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},xa={},ka={};function Sa(e){if(xa[e])return xa[e];if(!wa[e])return e;var t,n=wa[e];for(t in n)if(n.hasOwnProperty(t)&&t in ka)return xa[e]=n[t];return e}ue&&(ka=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);var Ca=Sa("animationend"),Ea=Sa("animationiteration"),za=Sa("animationstart"),ja=Sa("transitionend"),Na=new Map,Pa="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Da(e,t){Na.set(e,t),oe(t,[e])}for(var Ta=0;Ta<Pa.length;Ta++){var Ma=Pa[Ta];Da(Ma.toLowerCase(),"on"+(Ma[0].toUpperCase()+Ma.slice(1)))}Da(Ca,"onAnimationEnd"),Da(Ea,"onAnimationIteration"),Da(za,"onAnimationStart"),Da("dblclick","onDoubleClick"),Da("focusin","onFocus"),Da("focusout","onBlur"),Da(ja,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),La=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function Oa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,o,l,u){if(At.apply(this,arguments),Lt){if(!Lt)throw Error(re(198));var s=Ot;Lt=!1,Ot=null,It||(It=!0,Ft=s)}}(r,t,void 0,e),e.currentTarget=null}function Ia(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,s=l.currentTarget;if(l=l.listener,u!==i&&a.isPropagationStopped())break e;Oa(a,l,s),i=u}else for(o=0;o<r.length;o++){if(u=(l=r[o]).instance,s=l.currentTarget,l=l.listener,u!==i&&a.isPropagationStopped())break e;Oa(a,l,s),i=u}}}if(It)throw e=Ft,It=!1,Ft=null,e}function Fa(e,t){var n=t[pi];void 0===n&&(n=t[pi]=new Set);var r=e+"__bubble";n.has(r)||(Wa(t,e,2,!1),n.add(r))}function Ra(e,t,n){var r=0;t&&(r|=4),Wa(n,e,r,t)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function $a(e){if(!e[Aa]){e[Aa]=!0,ae.forEach(function(t){"selectionchange"!==t&&(La.has(t)||Ra(t,!1,e),Ra(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Aa]||(t[Aa]=!0,Ra("selectionchange",!1,t))}}function Wa(e,t,n,r){switch(qn(t)){case 1:var a=Bn;break;case 4:a=Gn;break;default:a=Vn}n=a.bind(null,t,n,e),a=void 0,!Tt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Ua(e,t,n,r,a){var i=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var u=o.tag;if((3===u||4===u)&&((u=o.stateNode.containerInfo)===a||8===u.nodeType&&u.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=gi(l)))return;if(5===(u=o.tag)||6===u){r=i=o;continue e}l=l.parentNode}}r=r.return}Pt(function(){var r=i,a=yt(n),o=[];e:{var l=Na.get(e);if(void 0!==l){var u=ur,s=e;switch(e){case"keypress":if(0===er(n))break e;case"keydown":case"keyup":u=Er;break;case"focusin":s="focus",u=mr;break;case"focusout":s="blur",u=mr;break;case"beforeblur":case"afterblur":u=mr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=pr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=jr;break;case Ca:case Ea:case za:u=hr;break;case ja:u=Nr;break;case"scroll":u=cr;break;case"wheel":u=Dr;break;case"copy":case"cut":case"paste":u=vr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=zr}var c=!!(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==f&&(null!=(h=Dt(m,f))&&c.push(Ha(m,h,p)))),d)break;m=m.return}0<c.length&&(l=new u(l,s,null,n,a),o.push({event:l,listeners:c}))}}if(!(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===bt||!(s=n.relatedTarget||n.fromElement)||!gi(s)&&!s[fi])&&(u||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,u?(u=r,null!==(s=(s=n.relatedTarget||n.toElement)?gi(s):null)&&(s!==(d=$t(s))||5!==s.tag&&6!==s.tag)&&(s=null)):(u=null,s=r),u!==s)){if(c=fr,h="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=zr,h="onPointerLeave",f="onPointerEnter",m="pointer"),d=null==u?l:bi(u),p=null==s?l:bi(s),(l=new c(h,m+"leave",u,n,a)).target=d,l.relatedTarget=p,h=null,gi(a)===r&&((c=new c(f,m+"enter",s,n,a)).target=p,c.relatedTarget=d,h=c),d=h,u&&s)e:{for(f=s,m=0,p=c=u;p;p=Ga(p))m++;for(p=0,h=f;h;h=Ga(h))p++;for(;0<m-p;)c=Ga(c),m--;for(;0<p-m;)f=Ga(f),p--;for(;m--;){if(c===f||null!==f&&c===f.alternate)break e;c=Ga(c),f=Ga(f)}c=null}else c=null;null!==u&&Va(o,l,u,c,!1),null!==s&&null!==d&&Va(o,d,s,c,!0)}if("select"===(u=(l=r?bi(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===u&&"file"===l.type)var g=Qr;else if(Ur(l))if(qr)g=aa;else{g=na;var v=ta}else(u=l.nodeName)&&"input"===u.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ra);switch(g&&(g=g(e,r))?Hr(o,g,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&Ze(l,"number",l.value)),v=r?bi(r):window,e){case"focusin":(Ur(v)||"true"===v.contentEditable)&&(ma=v,ha=r,ga=null);break;case"focusout":ga=ha=ma=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,ba(o,n,a);break;case"selectionchange":if(pa)break;case"keydown":case"keyup":ba(o,n,a)}var b;if(Mr)e:{switch(e){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else $r?Rr(e,n)&&(y="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(y="onCompositionStart");y&&(Or&&"ko"!==n.locale&&($r||"onCompositionStart"!==y?"onCompositionEnd"===y&&$r&&(b=Jn()):(Kn="value"in(Xn=a)?Xn.value:Xn.textContent,$r=!0)),0<(v=Ba(r,y)).length&&(y=new br(y,e,null,n,a),o.push({event:y,listeners:v}),b?y.data=b:null!==(b=Ar(n))&&(y.data=b))),(b=Lr?function(e,t){switch(e){case"compositionend":return Ar(t);case"keypress":return 32!==t.which?null:(Fr=!0,Ir);case"textInput":return(e=t.data)===Ir&&Fr?null:e;default:return null}}(e,n):function(e,t){if($r)return"compositionend"===e||!Mr&&Rr(e,t)?(e=Jn(),Zn=Kn=Xn=null,$r=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Or&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Ba(r,"onBeforeInput")).length&&(a=new br("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=b))}Ia(o,t)})}function Ha(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ba(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=Dt(e,n))&&r.unshift(Ha(e,i,a)),null!=(i=Dt(e,t))&&r.push(Ha(e,i,a))),e=e.return}return r}function Ga(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Va(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,u=l.alternate,s=l.stateNode;if(null!==u&&u===r)break;5===l.tag&&null!==s&&(l=s,a?null!=(u=Dt(n,i))&&o.unshift(Ha(n,u,l)):a||null!=(u=Dt(n,i))&&o.push(Ha(n,u,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Ya=/\r\n?/g,Qa=/\u0000|\uFFFD/g;function qa(e){return("string"==typeof e?e:""+e).replace(Ya,"\n").replace(Qa,"")}function Xa(e,t,n){if(t=qa(t),qa(e)!==t&&n)throw Error(re(425))}function Ka(){}var Za=null,Ja=null;function ei(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ti="function"==typeof setTimeout?setTimeout:void 0,ni="function"==typeof clearTimeout?clearTimeout:void 0,ri="function"==typeof Promise?Promise:void 0,ai="function"==typeof queueMicrotask?queueMicrotask:void 0!==ri?function(e){return ri.resolve(null).then(e).catch(ii)}:ti;function ii(e){setTimeout(function(){throw e})}function oi(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Wn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Wn(t)}function li(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ui(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var si=Math.random().toString(36).slice(2),ci="__reactFiber$"+si,di="__reactProps$"+si,fi="__reactContainer$"+si,pi="__reactEvents$"+si,mi="__reactListeners$"+si,hi="__reactHandles$"+si;function gi(e){var t=e[ci];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fi]||n[ci]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ui(e);null!==e;){if(n=e[ci])return n;e=ui(e)}return t}n=(e=n).parentNode}return null}function vi(e){return!(e=e[ci]||e[fi])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function bi(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(re(33))}function yi(e){return e[di]||null}var wi=[],xi=-1;function ki(e){return{current:e}}function Si(e){0>xi||(e.current=wi[xi],wi[xi]=null,xi--)}function Ci(e,t){xi++,wi[xi]=e.current,e.current=t}var Ei={},zi=ki(Ei),ji=ki(!1),Ni=Ei;function Pi(e,t){var n=e.type.contextTypes;if(!n)return Ei;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Di(e){return null!=(e=e.childContextTypes)}function Ti(){Si(ji),Si(zi)}function Mi(e,t,n){if(zi.current!==Ei)throw Error(re(168));Ci(zi,t),Ci(ji,n)}function _i(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(re(108,We(e)||"Unknown",a));return Oe({},n,r)}function Li(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ei,Ni=zi.current,Ci(zi,e),Ci(ji,ji.current),!0}function Oi(e,t,n){var r=e.stateNode;if(!r)throw Error(re(169));n?(e=_i(e,t,Ni),r.__reactInternalMemoizedMergedChildContext=e,Si(ji),Si(zi),Ci(zi,e)):Si(ji),Ci(ji,n)}var Ii=null,Fi=!1,Ri=!1;function Ai(e){null===Ii?Ii=[e]:Ii.push(e)}function $i(){if(!Ri&&null!==Ii){Ri=!0;var e=0,t=bn;try{var n=Ii;for(bn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ii=null,Fi=!1}catch(a){throw null!==Ii&&(Ii=Ii.slice(e+1)),Gt(Kt,$i),a}finally{bn=t,Ri=!1}}return null}var Wi=[],Ui=0,Hi=null,Bi=0,Gi=[],Vi=0,Yi=null,Qi=1,qi="";function Xi(e,t){Wi[Ui++]=Bi,Wi[Ui++]=Hi,Hi=e,Bi=t}function Ki(e,t,n){Gi[Vi++]=Qi,Gi[Vi++]=qi,Gi[Vi++]=Yi,Yi=e;var r=Qi;e=qi;var a=32-an(r)-1;r&=~(1<<a),n+=1;var i=32-an(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Qi=1<<32-an(t)+a|n<<a|r,qi=i+e}else Qi=1<<i|n<<a|r,qi=e}function Zi(e){null!==e.return&&(Xi(e,1),Ki(e,1,0))}function Ji(e){for(;e===Hi;)Hi=Wi[--Ui],Wi[Ui]=null,Bi=Wi[--Ui],Wi[Ui]=null;for(;e===Yi;)Yi=Gi[--Vi],Gi[Vi]=null,qi=Gi[--Vi],Gi[Vi]=null,Qi=Gi[--Vi],Gi[Vi]=null}var eo=null,to=null,no=!1,ro=null;function ao(e,t){var n=Nc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function io(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,eo=e,to=li(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,eo=e,to=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Yi?{id:Qi,overflow:qi}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,eo=e,to=null,!0);default:return!1}}function oo(e){return!(!(1&e.mode)||128&e.flags)}function lo(e){if(no){var t=to;if(t){var n=t;if(!io(e,t)){if(oo(e))throw Error(re(418));t=li(n.nextSibling);var r=eo;t&&io(e,t)?ao(r,n):(e.flags=-4097&e.flags|2,no=!1,eo=e)}}else{if(oo(e))throw Error(re(418));e.flags=-4097&e.flags|2,no=!1,eo=e}}}function uo(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;eo=e}function so(e){if(e!==eo)return!1;if(!no)return uo(e),no=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!ei(e.type,e.memoizedProps)),t&&(t=to)){if(oo(e))throw co(),Error(re(418));for(;t;)ao(e,t),t=li(t.nextSibling)}if(uo(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){to=li(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}to=null}}else to=eo?li(e.stateNode.nextSibling):null;return!0}function co(){for(var e=to;e;)e=li(e.nextSibling)}function fo(){to=eo=null,no=!1}function po(e){null===ro?ro=[e]:ro.push(e)}var mo=be.ReactCurrentBatchConfig;function ho(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===i?t.ref:((t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e})._stringRef=i,t)}if("string"!=typeof e)throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Dc(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function o(t){return e&&null===t.alternate&&(t.flags|=2),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===xe?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"==typeof i&&null!==i&&i.$$typeof===De&&vo(i)===t.type)?((r=a(t,n.props)).ref=ho(e,t,n),r.return=e,r):((r=Tc(n.type,n.key,n.props,null,e.mode,r)).ref=ho(e,t,n),r.return=e,r)}function s(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Oc(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function c(e,t,n,r,i){return null===t||7!==t.tag?((t=Mc(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case ye:return(n=Tc(t.type,t.key,t.props,null,e.mode,n)).ref=ho(e,null,t),n.return=e,n;case we:return(t=Oc(t,e.mode,n)).return=e,t;case De:return d(e,(0,t._init)(t._payload),n)}if(Je(t)||_e(t))return(t=Mc(t,e.mode,n,null)).return=e,t;go(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:l(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case ye:return n.key===a?u(e,t,n,r):null;case we:return n.key===a?s(e,t,n,r):null;case De:return f(e,t,(a=n._init)(n._payload),r)}if(Je(n)||_e(n))return null!==a?null:c(e,t,n,r,null);go(e,n)}return null}function p(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return l(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case ye:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case we:return s(t,e=e.get(null===r.key?n:r.key)||null,r,a);case De:return p(e,t,n,(0,r._init)(r._payload),a)}if(Je(r)||_e(r))return c(t,e=e.get(n)||null,r,a,null);go(t,r)}return null}return function l(u,s,c,m){if("object"==typeof c&&null!==c&&c.type===xe&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case ye:e:{for(var h=c.key,g=s;null!==g;){if(g.key===h){if((h=c.type)===xe){if(7===g.tag){n(u,g.sibling),(s=a(g,c.props.children)).return=u,u=s;break e}}else if(g.elementType===h||"object"==typeof h&&null!==h&&h.$$typeof===De&&vo(h)===g.type){n(u,g.sibling),(s=a(g,c.props)).ref=ho(u,g,c),s.return=u,u=s;break e}n(u,g);break}t(u,g),g=g.sibling}c.type===xe?((s=Mc(c.props.children,u.mode,m,c.key)).return=u,u=s):((m=Tc(c.type,c.key,c.props,null,u.mode,m)).ref=ho(u,s,c),m.return=u,u=m)}return o(u);case we:e:{for(g=c.key;null!==s;){if(s.key===g){if(4===s.tag&&s.stateNode.containerInfo===c.containerInfo&&s.stateNode.implementation===c.implementation){n(u,s.sibling),(s=a(s,c.children||[])).return=u,u=s;break e}n(u,s);break}t(u,s),s=s.sibling}(s=Oc(c,u.mode,m)).return=u,u=s}return o(u);case De:return l(u,s,(g=c._init)(c._payload),m)}if(Je(c))return function(a,o,l,u){for(var s=null,c=null,m=o,h=o=0,g=null;null!==m&&h<l.length;h++){m.index>h?(g=m,m=null):g=m.sibling;var v=f(a,m,l[h],u);if(null===v){null===m&&(m=g);break}e&&m&&null===v.alternate&&t(a,m),o=i(v,o,h),null===c?s=v:c.sibling=v,c=v,m=g}if(h===l.length)return n(a,m),no&&Xi(a,h),s;if(null===m){for(;h<l.length;h++)null!==(m=d(a,l[h],u))&&(o=i(m,o,h),null===c?s=m:c.sibling=m,c=m);return no&&Xi(a,h),s}for(m=r(a,m);h<l.length;h++)null!==(g=p(m,a,h,l[h],u))&&(e&&null!==g.alternate&&m.delete(null===g.key?h:g.key),o=i(g,o,h),null===c?s=g:c.sibling=g,c=g);return e&&m.forEach(function(e){return t(a,e)}),no&&Xi(a,h),s}(u,s,c,m);if(_e(c))return function(a,o,l,u){var s=_e(l);if("function"!=typeof s)throw Error(re(150));if(null==(l=s.call(l)))throw Error(re(151));for(var c=s=null,m=o,h=o=0,g=null,v=l.next();null!==m&&!v.done;h++,v=l.next()){m.index>h?(g=m,m=null):g=m.sibling;var b=f(a,m,v.value,u);if(null===b){null===m&&(m=g);break}e&&m&&null===b.alternate&&t(a,m),o=i(b,o,h),null===c?s=b:c.sibling=b,c=b,m=g}if(v.done)return n(a,m),no&&Xi(a,h),s;if(null===m){for(;!v.done;h++,v=l.next())null!==(v=d(a,v.value,u))&&(o=i(v,o,h),null===c?s=v:c.sibling=v,c=v);return no&&Xi(a,h),s}for(m=r(a,m);!v.done;h++,v=l.next())null!==(v=p(m,a,h,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?h:v.key),o=i(v,o,h),null===c?s=v:c.sibling=v,c=v);return e&&m.forEach(function(e){return t(a,e)}),no&&Xi(a,h),s}(u,s,c,m);go(u,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==s&&6===s.tag?(n(u,s.sibling),(s=a(s,c)).return=u,u=s):(n(u,s),(s=Lc(c,u.mode,m)).return=u,u=s),o(u)):n(u,s)}}var yo=bo(!0),wo=bo(!1),xo=ki(null),ko=null,So=null,Co=null;function Eo(){Co=So=ko=null}function zo(e){var t=xo.current;Si(xo),e._currentValue=t}function jo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function No(e,t){ko=e,Co=So=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(gu=!0),e.firstContext=null)}function Po(e){var t=e._currentValue;if(Co!==e)if(e={context:e,memoizedValue:t,next:null},null===So){if(null===ko)throw Error(re(308));So=e,ko.dependencies={lanes:0,firstContext:e}}else So=So.next=e;return t}var Do=null;function To(e){null===Do?Do=[e]:Do.push(e)}function Mo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,To(t)):(n.next=a.next,a.next=n),t.interleaved=n,_o(e,r)}function _o(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Lo=!1;function Oo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Fo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ro(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Es){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,_o(e,n)}return null===(a=r.interleaved)?(t.next=t,To(r)):(t.next=a.next,a.next=t),r.interleaved=t,_o(e,n)}function Ao(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vn(e,n)}}function $o(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var a=e.updateQueue;Lo=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var u=l,s=u.next;u.next=null,null===o?i=s:o.next=s,o=u;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=s:l.next=s,c.lastBaseUpdate=u))}if(null!==i){var d=a.baseState;for(o=0,c=s=u=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var m=e,h=l;switch(f=t,p=n,h.tag){case 1:if("function"==typeof(m=h.payload)){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null==(f="function"==typeof(m=h.payload)?m.call(p,d,f):m))break e;d=Oe({},d,f);break e;case 2:Lo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(s=c=p,u=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(u=d),a.baseState=u,a.firstBaseUpdate=s,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);_s|=o,e.lanes=o,e.memoizedState=d}}function Uo(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(re(191,a));a.call(r)}}}var Ho={},Bo=ki(Ho),Go=ki(Ho),Vo=ki(Ho);function Yo(e){if(e===Ho)throw Error(re(174));return e}function Qo(e,t){switch(Ci(Vo,t),Ci(Go,e),Ci(Bo,Ho),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ot(null,"");break;default:t=ot(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Si(Bo),Ci(Bo,t)}function qo(){Si(Bo),Si(Go),Si(Vo)}function Xo(e){Yo(Vo.current);var t=Yo(Bo.current),n=ot(t,e.type);t!==n&&(Ci(Go,e),Ci(Bo,n))}function Ko(e){Go.current===e&&(Si(Bo),Si(Go))}var Zo=ki(0);function Jo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function tl(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var nl=be.ReactCurrentDispatcher,rl=be.ReactCurrentBatchConfig,al=0,il=null,ol=null,ll=null,ul=!1,sl=!1,cl=0,dl=0;function fl(){throw Error(re(321))}function pl(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ia(e[n],t[n]))return!1;return!0}function ml(e,t,n,r,a,i){if(al=i,il=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nl.current=null===e||null===e.memoizedState?Kl:Zl,e=n(r,a),sl){i=0;do{if(sl=!1,cl=0,25<=i)throw Error(re(301));i+=1,ll=ol=null,t.updateQueue=null,nl.current=Jl,e=n(r,a)}while(sl)}if(nl.current=Xl,t=null!==ol&&null!==ol.next,al=0,ll=ol=il=null,ul=!1,t)throw Error(re(300));return e}function hl(){var e=0!==cl;return cl=0,e}function gl(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ll?il.memoizedState=ll=e:ll=ll.next=e,ll}function vl(){if(null===ol){var e=il.alternate;e=null!==e?e.memoizedState:null}else e=ol.next;var t=null===ll?il.memoizedState:ll.next;if(null!==t)ll=t,ol=e;else{if(null===e)throw Error(re(310));e={memoizedState:(ol=e).memoizedState,baseState:ol.baseState,baseQueue:ol.baseQueue,queue:ol.queue,next:null},null===ll?il.memoizedState=ll=e:ll=ll.next=e}return ll}function bl(e,t){return"function"==typeof t?t(e):t}function yl(e){var t=vl(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=ol,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var l=o=null,u=null,s=i;do{var c=s.lane;if((al&c)===c)null!==u&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var d={lane:c,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};null===u?(l=u=d,o=r):u=u.next=d,il.lanes|=c,_s|=c}s=s.next}while(null!==s&&s!==i);null===u?o=r:u.next=l,ia(r,t.memoizedState)||(gu=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,il.lanes|=i,_s|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wl(e){var t=vl(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var o=a=a.next;do{i=e(i,o.action),o=o.next}while(o!==a);ia(i,t.memoizedState)||(gu=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function xl(){}function kl(e,t){var n=il,r=vl(),a=t(),i=!ia(r.memoizedState,a);if(i&&(r.memoizedState=a,gu=!0),r=r.queue,Ll(El.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ll&&1&ll.memoizedState.tag){if(n.flags|=2048,Pl(9,Cl.bind(null,n,r,a,t),void 0,null),null===zs)throw Error(re(349));30&al||Sl(n,t,a)}return a}function Sl(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Cl(e,t,n,r){t.value=n,t.getSnapshot=r,zl(t)&&jl(e)}function El(e,t,n){return n(function(){zl(t)&&jl(e)})}function zl(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ia(e,n)}catch(r){return!0}}function jl(e){var t=_o(e,1);null!==t&&Js(t,e,1,-1)}function Nl(e){var t=gl();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bl,lastRenderedState:e},t.queue=e,e=e.dispatch=Vl.bind(null,il,e),[t.memoizedState,e]}function Pl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=il.updateQueue)?(t={lastEffect:null,stores:null},il.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Dl(){return vl().memoizedState}function Tl(e,t,n,r){var a=gl();il.flags|=e,a.memoizedState=Pl(1|t,n,void 0,void 0===r?null:r)}function Ml(e,t,n,r){var a=vl();r=void 0===r?null:r;var i=void 0;if(null!==ol){var o=ol.memoizedState;if(i=o.destroy,null!==r&&pl(r,o.deps))return void(a.memoizedState=Pl(t,n,i,r))}il.flags|=e,a.memoizedState=Pl(1|t,n,i,r)}function _l(e,t){return Tl(8390656,8,e,t)}function Ll(e,t){return Ml(2048,8,e,t)}function Ol(e,t){return Ml(4,2,e,t)}function Il(e,t){return Ml(4,4,e,t)}function Fl(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Rl(e,t,n){return n=null!=n?n.concat([e]):null,Ml(4,4,Fl.bind(null,t,e),n)}function Al(){}function $l(e,t){var n=vl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&pl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wl(e,t){var n=vl();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&pl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Ul(e,t,n){return 21&al?(ia(n,t)||(n=mn(),il.lanes|=n,_s|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gu=!0),e.memoizedState=n)}function Hl(e,t){var n=bn;bn=0!==n&&4>n?n:4,e(!0);var r=rl.transition;rl.transition={};try{e(!1),t()}finally{bn=n,rl.transition=r}}function Bl(){return vl().memoizedState}function Gl(e,t,n){var r=Zs(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yl(e))Ql(t,n);else if(null!==(n=Mo(e,t,n,r))){Js(n,e,r,Ks()),ql(n,t,r)}}function Vl(e,t,n){var r=Zs(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yl(e))Ql(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,ia(l,o)){var u=t.interleaved;return null===u?(a.next=a,To(t)):(a.next=u.next,u.next=a),void(t.interleaved=a)}}catch(s){}null!==(n=Mo(e,t,a,r))&&(Js(n,e,r,a=Ks()),ql(n,t,r))}}function Yl(e){var t=e.alternate;return e===il||null!==t&&t===il}function Ql(e,t){sl=ul=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ql(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vn(e,n)}}var Xl={readContext:Po,useCallback:fl,useContext:fl,useEffect:fl,useImperativeHandle:fl,useInsertionEffect:fl,useLayoutEffect:fl,useMemo:fl,useReducer:fl,useRef:fl,useState:fl,useDebugValue:fl,useDeferredValue:fl,useTransition:fl,useMutableSource:fl,useSyncExternalStore:fl,useId:fl,unstable_isNewReconciler:!1},Kl={readContext:Po,useCallback:function(e,t){return gl().memoizedState=[e,void 0===t?null:t],e},useContext:Po,useEffect:_l,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Tl(4194308,4,Fl.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tl(4,2,e,t)},useMemo:function(e,t){var n=gl();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gl();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Gl.bind(null,il,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},gl().memoizedState=e},useState:Nl,useDebugValue:Al,useDeferredValue:function(e){return gl().memoizedState=e},useTransition:function(){var e=Nl(!1),t=e[0];return e=Hl.bind(null,e[1]),gl().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=il,a=gl();if(no){if(void 0===n)throw Error(re(407));n=n()}else{if(n=t(),null===zs)throw Error(re(349));30&al||Sl(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,_l(El.bind(null,r,i,e),[e]),r.flags|=2048,Pl(9,Cl.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gl(),t=zs.identifierPrefix;if(no){var n=qi;t=":"+t+"R"+(n=(Qi&~(1<<32-an(Qi)-1)).toString(32)+n),0<(n=cl++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=dl++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zl={readContext:Po,useCallback:$l,useContext:Po,useEffect:Ll,useImperativeHandle:Rl,useInsertionEffect:Ol,useLayoutEffect:Il,useMemo:Wl,useReducer:yl,useRef:Dl,useState:function(){return yl(bl)},useDebugValue:Al,useDeferredValue:function(e){return Ul(vl(),ol.memoizedState,e)},useTransition:function(){return[yl(bl)[0],vl().memoizedState]},useMutableSource:xl,useSyncExternalStore:kl,useId:Bl,unstable_isNewReconciler:!1},Jl={readContext:Po,useCallback:$l,useContext:Po,useEffect:Ll,useImperativeHandle:Rl,useInsertionEffect:Ol,useLayoutEffect:Il,useMemo:Wl,useReducer:wl,useRef:Dl,useState:function(){return wl(bl)},useDebugValue:Al,useDeferredValue:function(e){var t=vl();return null===ol?t.memoizedState=e:Ul(t,ol.memoizedState,e)},useTransition:function(){return[wl(bl)[0],vl().memoizedState]},useMutableSource:xl,useSyncExternalStore:kl,useId:Bl,unstable_isNewReconciler:!1};function eu(e,t){if(e&&e.defaultProps){for(var n in t=Oe({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function tu(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Oe({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var nu={isMounted:function(e){return!!(e=e._reactInternals)&&$t(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ks(),a=Zs(e),i=Fo(r,a);i.payload=t,null!=n&&(i.callback=n),null!==(t=Ro(e,i,a))&&(Js(t,e,a,r),Ao(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ks(),a=Zs(e),i=Fo(r,a);i.tag=1,i.payload=t,null!=n&&(i.callback=n),null!==(t=Ro(e,i,a))&&(Js(t,e,a,r),Ao(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ks(),r=Zs(e),a=Fo(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=Ro(e,a,r))&&(Js(t,e,r,n),Ao(t,e,r))}};function ru(e,t,n,r,a,i,o){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!oa(n,r)||!oa(a,i))}function au(e,t,n){var r=!1,a=Ei,i=t.contextType;return"object"==typeof i&&null!==i?i=Po(i):(a=Di(t)?Ni:zi.current,i=(r=null!=(r=t.contextTypes))?Pi(e,a):Ei),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=nu,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function iu(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nu.enqueueReplaceState(t,t.state,null)}function ou(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Oo(e);var i=t.contextType;"object"==typeof i&&null!==i?a.context=Po(i):(i=Di(t)?Ni:zi.current,a.context=Pi(e,i)),a.state=e.memoizedState,"function"==typeof(i=t.getDerivedStateFromProps)&&(tu(e,t,i,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&nu.enqueueReplaceState(a,a.state,null),Wo(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function lu(e,t){try{var n="",r=t;do{n+=Ae(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function uu(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}var su="function"==typeof WeakMap?WeakMap:Map;function cu(e,t,n){(n=Fo(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Us=r)},n}function du(e,t,n){(n=Fo(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){}}var i=e.stateNode;return null!==i&&"function"==typeof i.componentDidCatch&&(n.callback=function(){"function"!=typeof r&&(null===Hs?Hs=new Set([this]):Hs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fu(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new su;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=kc.bind(null,e,t,n),t.then(e,e))}function pu(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function mu(e,t,n,r,a){return 1&e.mode?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Fo(-1,1)).tag=2,Ro(n,t,1))),n.lanes|=1),e)}var hu=be.ReactCurrentOwner,gu=!1;function vu(e,t,n,r){t.child=null===e?wo(t,null,n,r):yo(t,e.child,n,r)}function bu(e,t,n,r,a){n=n.render;var i=t.ref;return No(t,a),r=ml(e,t,n,r,i,a),n=hl(),null===e||gu?(no&&n&&Zi(t),t.flags|=1,vu(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wu(e,t,a))}function yu(e,t,n,r,a){if(null===e){var i=n.type;return"function"!=typeof i||Pc(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Tc(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,wu(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:oa)(o,r)&&e.ref===t.ref)return Wu(e,t,a)}return t.flags|=1,(e=Dc(i,r)).ref=t.ref,e.return=t,t.child=e}function wu(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(oa(i,r)&&e.ref===t.ref){if(gu=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Wu(e,t,a);131072&e.flags&&(gu=!0)}}return Su(e,t,n,r,a)}function xu(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ci(Ds,Ps),Ps|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ci(Ds,Ps),Ps|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ci(Ds,Ps),Ps|=n;else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ci(Ds,Ps),Ps|=r;return vu(e,t,a,n),t.child}function ku(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Su(e,t,n,r,a){var i=Di(n)?Ni:zi.current;return i=Pi(t,i),No(t,a),n=ml(e,t,n,r,i,a),r=hl(),null===e||gu?(no&&r&&Zi(t),t.flags|=1,vu(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wu(e,t,a))}function Cu(e,t,n,r,a){if(Di(n)){var i=!0;Li(t)}else i=!1;if(No(t,a),null===t.stateNode)$u(e,t),au(t,n,r),ou(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var u=o.context,s=n.contextType;"object"==typeof s&&null!==s?s=Po(s):s=Pi(t,s=Di(n)?Ni:zi.current);var c=n.getDerivedStateFromProps,d="function"==typeof c||"function"==typeof o.getSnapshotBeforeUpdate;d||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==r||u!==s)&&iu(t,o,r,s),Lo=!1;var f=t.memoizedState;o.state=f,Wo(t,r,o,a),u=t.memoizedState,l!==r||f!==u||ji.current||Lo?("function"==typeof c&&(tu(t,n,c,r),u=t.memoizedState),(l=Lo||ru(t,n,l,r,f,u,s))?(d||"function"!=typeof o.UNSAFE_componentWillMount&&"function"!=typeof o.componentWillMount||("function"==typeof o.componentWillMount&&o.componentWillMount(),"function"==typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"==typeof o.componentDidMount&&(t.flags|=4194308)):("function"==typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),o.props=r,o.state=u,o.context=s,r=l):("function"==typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Io(e,t),l=t.memoizedProps,s=t.type===t.elementType?l:eu(t.type,l),o.props=s,d=t.pendingProps,f=o.context,"object"==typeof(u=n.contextType)&&null!==u?u=Po(u):u=Pi(t,u=Di(n)?Ni:zi.current);var p=n.getDerivedStateFromProps;(c="function"==typeof p||"function"==typeof o.getSnapshotBeforeUpdate)||"function"!=typeof o.UNSAFE_componentWillReceiveProps&&"function"!=typeof o.componentWillReceiveProps||(l!==d||f!==u)&&iu(t,o,r,u),Lo=!1,f=t.memoizedState,o.state=f,Wo(t,r,o,a);var m=t.memoizedState;l!==d||f!==m||ji.current||Lo?("function"==typeof p&&(tu(t,n,p,r),m=t.memoizedState),(s=Lo||ru(t,n,s,r,f,m,u)||!1)?(c||"function"!=typeof o.UNSAFE_componentWillUpdate&&"function"!=typeof o.componentWillUpdate||("function"==typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,u),"function"==typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,u)),"function"==typeof o.componentDidUpdate&&(t.flags|=4),"function"==typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=u,r=s):("function"!=typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!=typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Eu(e,t,n,r,i,a)}function Eu(e,t,n,r,a,i){ku(e,t);var o=!!(128&t.flags);if(!r&&!o)return a&&Oi(t,n,!1),Wu(e,t,i);r=t.stateNode,hu.current=t;var l=o&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=yo(t,e.child,null,i),t.child=yo(t,null,l,i)):vu(e,t,l,i),t.memoizedState=r.state,a&&Oi(t,n,!0),t.child}function zu(e){var t=e.stateNode;t.pendingContext?Mi(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Mi(0,t.context,!1),Qo(e,t.containerInfo)}function ju(e,t,n,r,a){return fo(),po(a),t.flags|=256,vu(e,t,n,r),t.child}var Nu,Pu,Du,Tu,Mu={dehydrated:null,treeContext:null,retryLane:0};function _u(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r,a=t.pendingProps,i=Zo.current,o=!1,l=!!(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&!!(2&i)),r?(o=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ci(Zo,1&i),null===e)return lo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=a.children,e=a.fallback,o?(a=t.mode,o=t.child,l={mode:"hidden",children:l},1&a||null===o?o=_c(l,a,0,null):(o.childLanes=0,o.pendingProps=l),e=Mc(e,a,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=_u(n),t.memoizedState=Mu,e):Ou(t,l));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,o){if(n)return 256&t.flags?(t.flags&=-257,Iu(e,t,o,r=uu(Error(re(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=_c({mode:"visible",children:r.children},a,0,null),(i=Mc(i,a,o,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,1&t.mode&&yo(t,e.child,null,o),t.child.memoizedState=_u(o),t.memoizedState=Mu,i);if(!(1&t.mode))return Iu(e,t,o,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var l=r.dgst;return r=l,Iu(e,t,o,r=uu(i=Error(re(419)),r,void 0))}if(l=0!==(o&e.childLanes),gu||l){if(null!==(r=zs)){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|o))?0:a)&&a!==i.retryLane&&(i.retryLane=a,_o(e,a),Js(r,e,a,-1))}return fc(),Iu(e,t,o,r=uu(Error(re(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Cc.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,to=li(a.nextSibling),eo=t,no=!0,ro=null,null!==e&&(Gi[Vi++]=Qi,Gi[Vi++]=qi,Gi[Vi++]=Yi,Qi=e.id,qi=e.overflow,Yi=t),t=Ou(t,r.children),t.flags|=4096,t)}(e,t,l,a,r,i,n);if(o){o=a.fallback,l=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 1&l||t.child===i?(a=Dc(i,u)).subtreeFlags=14680064&i.subtreeFlags:((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null),null!==r?o=Dc(r,o):(o=Mc(o,l,n,null)).flags|=2,o.return=t,a.return=t,a.sibling=o,t.child=a,a=o,o=t.child,l=null===(l=e.child.memoizedState)?_u(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Mu,a}return e=(o=e.child).sibling,a=Dc(o,{mode:"visible",children:a.children}),!(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ou(e,t){return(t=_c({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Iu(e,t,n,r){return null!==r&&po(r),yo(t,e.child,null,n),(e=Ou(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fu(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),jo(e.return,t,n)}function Ru(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Au(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(vu(e,t,r.children,n),2&(r=Zo.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fu(e,n,t);else if(19===e.tag)Fu(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ci(Zo,r),1&t.mode)switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===Jo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ru(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===Jo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ru(t,!0,n,null,i);break;case"together":Ru(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function $u(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wu(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),_s|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(re(153));if(null!==t.child){for(n=Dc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Dc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Uu(e,t){if(!no)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hu(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bu(e,t,n){var r=t.pendingProps;switch(Ji(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hu(t),null;case 1:case 17:return Di(t.type)&&Ti(),Hu(t),null;case 3:return r=t.stateNode,qo(),Si(ji),Si(zi),tl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(so(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ro&&(rc(ro),ro=null))),Pu(e,t),Hu(t),null;case 5:Ko(t);var a=Yo(Vo.current);if(n=t.type,null!==e&&null!=t.stateNode)Du(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(re(166));return Hu(t),null}if(e=Yo(Bo.current),so(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ci]=t,r[di]=i,e=!!(1&t.mode),n){case"dialog":Fa("cancel",r),Fa("close",r);break;case"iframe":case"object":case"embed":Fa("load",r);break;case"video":case"audio":for(a=0;a<_a.length;a++)Fa(_a[a],r);break;case"source":Fa("error",r);break;case"img":case"image":case"link":Fa("error",r),Fa("load",r);break;case"details":Fa("toggle",r);break;case"input":Qe(r,i),Fa("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Fa("invalid",r);break;case"textarea":nt(r,i),Fa("invalid",r)}for(var o in gt(n,i),a=null,i)if(i.hasOwnProperty(o)){var l=i[o];"children"===o?"string"==typeof l?r.textContent!==l&&(!0!==i.suppressHydrationWarning&&Xa(r.textContent,l,e),a=["children",l]):"number"==typeof l&&r.textContent!==""+l&&(!0!==i.suppressHydrationWarning&&Xa(r.textContent,l,e),a=["children",""+l]):ie.hasOwnProperty(o)&&null!=l&&"onScroll"===o&&Fa("scroll",r)}switch(n){case"input":Be(r),Ke(r,i,!0);break;case"textarea":Be(r),at(r);break;case"select":case"option":break;default:"function"==typeof i.onClick&&(r.onclick=Ka)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{o=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=it(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),"select"===n&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ci]=t,e[di]=r,Nu(e,t,!1,!1),t.stateNode=e;e:{switch(o=vt(n,r),n){case"dialog":Fa("cancel",e),Fa("close",e),a=r;break;case"iframe":case"object":case"embed":Fa("load",e),a=r;break;case"video":case"audio":for(a=0;a<_a.length;a++)Fa(_a[a],e);a=r;break;case"source":Fa("error",e),a=r;break;case"img":case"image":case"link":Fa("error",e),Fa("load",e),a=r;break;case"details":Fa("toggle",e),a=r;break;case"input":Qe(e,r),a=Ye(e,r),Fa("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=Oe({},r,{value:void 0}),Fa("invalid",e);break;case"textarea":nt(e,r),a=tt(e,r),Fa("invalid",e)}for(i in gt(n,a),l=a)if(l.hasOwnProperty(i)){var u=l[i];"style"===i?mt(e,u):"dangerouslySetInnerHTML"===i?null!=(u=u?u.__html:void 0)&&st(e,u):"children"===i?"string"==typeof u?("textarea"!==n||""!==u)&&ct(e,u):"number"==typeof u&&ct(e,""+u):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(ie.hasOwnProperty(i)?null!=u&&"onScroll"===i&&Fa("scroll",e):null!=u&&ve(e,i,u,o))}switch(n){case"input":Be(e),Ke(e,r,!1);break;case"textarea":Be(e),at(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Ue(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?et(e,!!r.multiple,i,!1):null!=r.defaultValue&&et(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof a.onClick&&(e.onclick=Ka)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hu(t),null;case 6:if(e&&null!=t.stateNode)Tu(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(re(166));if(n=Yo(Vo.current),Yo(Bo.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[ci]=t,(i=r.nodeValue!==n)&&null!==(e=eo))switch(e.tag){case 3:Xa(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xa(r.nodeValue,n,!!(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[ci]=t,t.stateNode=r}return Hu(t),null;case 13:if(Si(Zo),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(no&&null!==to&&1&t.mode&&!(128&t.flags))co(),fo(),t.flags|=98560,i=!1;else if(i=so(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(re(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(re(317));i[ci]=t}else fo(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hu(t),i=!1}else null!==ro&&(rc(ro),ro=null),i=!0;if(!i)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Zo.current?0===Ts&&(Ts=3):fc())),null!==t.updateQueue&&(t.flags|=4),Hu(t),null);case 4:return qo(),Pu(e,t),null===e&&$a(t.stateNode.containerInfo),Hu(t),null;case 10:return zo(t.type._context),Hu(t),null;case 19:if(Si(Zo),null===(i=t.memoizedState))return Hu(t),null;if(r=!!(128&t.flags),null===(o=i.rendering))if(r)Uu(i,!1);else{if(0!==Ts||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(o=Jo(e))){for(t.flags|=128,Uu(i,!1),null!==(r=o.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(o=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ci(Zo,1&Zo.current|2),t.child}e=e.sibling}null!==i.tail&&qt()>As&&(t.flags|=128,r=!0,Uu(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Jo(o))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Uu(i,!0),null===i.tail&&"hidden"===i.tailMode&&!o.alternate&&!no)return Hu(t),null}else 2*qt()-i.renderingStartTime>As&&1073741824!==n&&(t.flags|=128,r=!0,Uu(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(null!==(n=i.last)?n.sibling=o:t.child=o,i.last=o)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=qt(),t.sibling=null,n=Zo.current,Ci(Zo,r?1&n|2:1&n),t):(Hu(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Ps)&&(Hu(t),6&t.subtreeFlags&&(t.flags|=8192)):Hu(t),null;case 24:case 25:return null}throw Error(re(156,t.tag))}function Gu(e,t){switch(Ji(t),t.tag){case 1:return Di(t.type)&&Ti(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qo(),Si(ji),Si(zi),tl(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Ko(t),null;case 13:if(Si(Zo),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(re(340));fo()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Si(Zo),null;case 4:return qo(),null;case 10:return zo(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Nu=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Pu=function(){},Du=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Yo(Bo.current);var i,o=null;switch(n){case"input":a=Ye(e,a),r=Ye(e,r),o=[];break;case"select":a=Oe({},a,{value:void 0}),r=Oe({},r,{value:void 0}),o=[];break;case"textarea":a=tt(e,a),r=tt(e,r),o=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=Ka)}for(s in gt(n,r),n=null,a)if(!r.hasOwnProperty(s)&&a.hasOwnProperty(s)&&null!=a[s])if("style"===s){var l=a[s];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==s&&"children"!==s&&"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(ie.hasOwnProperty(s)?o||(o=[]):(o=o||[]).push(s,null));for(s in r){var u=r[s];if(l=null!=a?a[s]:void 0,r.hasOwnProperty(s)&&u!==l&&(null!=u||null!=l))if("style"===s)if(l){for(i in l)!l.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&l[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(s,n)),n=u;else"dangerouslySetInnerHTML"===s?(u=u?u.__html:void 0,l=l?l.__html:void 0,null!=u&&l!==u&&(o=o||[]).push(s,u)):"children"===s?"string"!=typeof u&&"number"!=typeof u||(o=o||[]).push(s,""+u):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&(ie.hasOwnProperty(s)?(null!=u&&"onScroll"===s&&Fa("scroll",e),o||l===u||(o=[])):(o=o||[]).push(s,u))}n&&(o=o||[]).push("style",n);var s=o;(t.updateQueue=s)&&(t.flags|=4)}},Tu=function(e,t,n,r){n!==r&&(t.flags|=4)};var Vu=!1,Yu=!1,Qu="function"==typeof WeakSet?WeakSet:Set,qu=null;function Xu(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){xc(e,t,r)}else n.current=null}function Ku(e,t,n){try{n()}catch(r){xc(e,t,r)}}var Zu=!1;function Ju(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&Ku(t,n,i)}a=a.next}while(a!==r)}}function es(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ts(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ns(e){var t=e.alternate;null!==t&&(e.alternate=null,ns(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[ci],delete t[di],delete t[pi],delete t[mi],delete t[hi])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rs(e){return 5===e.tag||3===e.tag||4===e.tag}function as(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||rs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function is(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Ka));else if(4!==r&&null!==(e=e.child))for(is(e,t,n),e=e.sibling;null!==e;)is(e,t,n),e=e.sibling}function os(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(os(e,t,n),e=e.sibling;null!==e;)os(e,t,n),e=e.sibling}var ls=null,us=!1;function ss(e,t,n){for(n=n.child;null!==n;)cs(e,t,n),n=n.sibling}function cs(e,t,n){if(rn&&"function"==typeof rn.onCommitFiberUnmount)try{rn.onCommitFiberUnmount(nn,n)}catch(l){}switch(n.tag){case 5:Yu||Xu(n,t);case 6:var r=ls,a=us;ls=null,ss(e,t,n),us=a,null!==(ls=r)&&(us?(e=ls,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):ls.removeChild(n.stateNode));break;case 18:null!==ls&&(us?(e=ls,n=n.stateNode,8===e.nodeType?oi(e.parentNode,n):1===e.nodeType&&oi(e,n),Wn(e)):oi(ls,n.stateNode));break;case 4:r=ls,a=us,ls=n.stateNode.containerInfo,us=!0,ss(e,t,n),ls=r,us=a;break;case 0:case 11:case 14:case 15:if(!Yu&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(2&i||4&i)&&Ku(n,t,o),a=a.next}while(a!==r)}ss(e,t,n);break;case 1:if(!Yu&&(Xu(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){xc(n,t,l)}ss(e,t,n);break;case 21:ss(e,t,n);break;case 22:1&n.mode?(Yu=(r=Yu)||null!==n.memoizedState,ss(e,t,n),Yu=r):ss(e,t,n);break;default:ss(e,t,n)}}function ds(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Qu),t.forEach(function(t){var r=Ec.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function fs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,l=o;e:for(;null!==l;){switch(l.tag){case 5:ls=l.stateNode,us=!1;break e;case 3:case 4:ls=l.stateNode.containerInfo,us=!0;break e}l=l.return}if(null===ls)throw Error(re(160));cs(i,o,a),ls=null,us=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(s){xc(a,t,s)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ps(t,e),t=t.sibling}function ps(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fs(t,e),ms(e),4&r){try{Ju(3,e,e.return),es(3,e)}catch(h){xc(e,e.return,h)}try{Ju(5,e,e.return)}catch(h){xc(e,e.return,h)}}break;case 1:fs(t,e),ms(e),512&r&&null!==n&&Xu(n,n.return);break;case 5:if(fs(t,e),ms(e),512&r&&null!==n&&Xu(n,n.return),32&e.flags){var a=e.stateNode;try{ct(a,"")}catch(h){xc(e,e.return,h)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,o=null!==n?n.memoizedProps:i,l=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===l&&"radio"===i.type&&null!=i.name&&qe(a,i),vt(l,o);var s=vt(l,i);for(o=0;o<u.length;o+=2){var c=u[o],d=u[o+1];"style"===c?mt(a,d):"dangerouslySetInnerHTML"===c?st(a,d):"children"===c?ct(a,d):ve(a,c,d,s)}switch(l){case"input":Xe(a,i);break;case"textarea":rt(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var p=i.value;null!=p?et(a,!!i.multiple,p,!1):f!==!!i.multiple&&(null!=i.defaultValue?et(a,!!i.multiple,i.defaultValue,!0):et(a,!!i.multiple,i.multiple?[]:"",!1))}a[di]=i}catch(h){xc(e,e.return,h)}}break;case 6:if(fs(t,e),ms(e),4&r){if(null===e.stateNode)throw Error(re(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(h){xc(e,e.return,h)}}break;case 3:if(fs(t,e),ms(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(h){xc(e,e.return,h)}break;case 4:default:fs(t,e),ms(e);break;case 13:fs(t,e),ms(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(Rs=qt())),4&r&&ds(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Yu=(s=Yu)||c,fs(t,e),Yu=s):fs(t,e),ms(e),8192&r){if(s=null!==e.memoizedState,(e.stateNode.isHidden=s)&&!c&&1&e.mode)for(qu=e,c=e.child;null!==c;){for(d=qu=c;null!==qu;){switch(p=(f=qu).child,f.tag){case 0:case 11:case 14:case 15:Ju(4,f,f.return);break;case 1:Xu(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(h){xc(r,n,h)}}break;case 5:Xu(f,f.return);break;case 22:if(null!==f.memoizedState){bs(d);continue}}null!==p?(p.return=f,qu=p):bs(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{a=d.stateNode,s?"function"==typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(l=d.stateNode,o=null!=(u=d.memoizedProps.style)&&u.hasOwnProperty("display")?u.display:null,l.style.display=pt("display",o))}catch(h){xc(e,e.return,h)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=s?"":d.memoizedProps}catch(h){xc(e,e.return,h)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:fs(t,e),ms(e),4&r&&ds(e);case 21:}}function ms(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(rs(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(ct(a,""),r.flags&=-33),os(e,as(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;is(e,as(e),i);break;default:throw Error(re(161))}}catch(o){xc(e,e.return,o)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function hs(e,t,n){qu=e,gs(e)}function gs(e,t,n){for(var r=!!(1&e.mode);null!==qu;){var a=qu,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Vu;if(!o){var l=a.alternate,u=null!==l&&null!==l.memoizedState||Yu;l=Vu;var s=Yu;if(Vu=o,(Yu=u)&&!s)for(qu=a;null!==qu;)u=(o=qu).child,22===o.tag&&null!==o.memoizedState?ys(a):null!==u?(u.return=o,qu=u):ys(a);for(;null!==i;)qu=i,gs(i),i=i.sibling;qu=a,Vu=l,Yu=s}vs(e)}else 8772&a.subtreeFlags&&null!==i?(i.return=a,qu=i):vs(e)}}function vs(e){for(;null!==qu;){var t=qu;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Yu||es(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Yu)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:eu(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Uo(t,i,r);break;case 3:var o=t.updateQueue;if(null!==o){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Uo(t,o,n)}break;case 5:var l=t.stateNode;if(null===n&&4&t.flags){n=l;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var s=t.alternate;if(null!==s){var c=s.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&Wn(d)}}}break;default:throw Error(re(163))}Yu||512&t.flags&&ts(t)}catch(f){xc(t,t.return,f)}}if(t===e){qu=null;break}if(null!==(n=t.sibling)){n.return=t.return,qu=n;break}qu=t.return}}function bs(e){for(;null!==qu;){var t=qu;if(t===e){qu=null;break}var n=t.sibling;if(null!==n){n.return=t.return,qu=n;break}qu=t.return}}function ys(e){for(;null!==qu;){var t=qu;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{es(4,t)}catch(u){xc(t,n,u)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(u){xc(t,a,u)}}var i=t.return;try{ts(t)}catch(u){xc(t,i,u)}break;case 5:var o=t.return;try{ts(t)}catch(u){xc(t,o,u)}}}catch(u){xc(t,t.return,u)}if(t===e){qu=null;break}var l=t.sibling;if(null!==l){l.return=t.return,qu=l;break}qu=t.return}}var ws,xs=Math.ceil,ks=be.ReactCurrentDispatcher,Ss=be.ReactCurrentOwner,Cs=be.ReactCurrentBatchConfig,Es=0,zs=null,js=null,Ns=0,Ps=0,Ds=ki(0),Ts=0,Ms=null,_s=0,Ls=0,Os=0,Is=null,Fs=null,Rs=0,As=1/0,$s=null,Ws=!1,Us=null,Hs=null,Bs=!1,Gs=null,Vs=0,Ys=0,Qs=null,qs=-1,Xs=0;function Ks(){return 6&Es?qt():-1!==qs?qs:qs=qt()}function Zs(e){return 1&e.mode?2&Es&&0!==Ns?Ns&-Ns:null!==mo.transition?(0===Xs&&(Xs=mn()),Xs):0!==(e=bn)?e:e=void 0===(e=window.event)?16:qn(e.type):1}function Js(e,t,n,r){if(50<Ys)throw Ys=0,Qs=null,Error(re(185));gn(e,n,r),2&Es&&e===zs||(e===zs&&(!(2&Es)&&(Ls|=n),4===Ts&&ac(e,Ns)),ec(e,r),1===n&&0===Es&&!(1&t.mode)&&(As=qt()+500,Fi&&$i()))}function ec(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-an(i),l=1<<o,u=a[o];-1===u?0!==(l&n)&&0===(l&r)||(a[o]=fn(l,t)):u<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=dn(e,e===zs?Ns:0);if(0===r)null!==n&&Vt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Vt(n),1===t)0===e.tag?function(e){Fi=!0,Ai(e)}(ic.bind(null,e)):Ai(ic.bind(null,e)),ai(function(){!(6&Es)&&$i()}),n=null;else{switch(yn(r)){case 1:n=Kt;break;case 4:n=Zt;break;case 16:default:n=Jt;break;case 536870912:n=tn}n=zc(n,tc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function tc(e,t){if(qs=-1,Xs=0,6&Es)throw Error(re(327));var n=e.callbackNode;if(yc()&&e.callbackNode!==n)return null;var r=dn(e,e===zs?Ns:0);if(0===r)return null;if(30&r||0!==(r&e.expiredLanes)||t)t=pc(e,r);else{t=r;var a=Es;Es|=2;var i=dc();for(zs===e&&Ns===t||($s=null,As=qt()+500,sc(e,t));;)try{hc();break}catch(l){cc(e,l)}Eo(),ks.current=i,Es=a,null!==js?t=0:(zs=null,Ns=0,t=Ts)}if(0!==t){if(2===t&&(0!==(a=pn(e))&&(r=a,t=nc(e,a))),1===t)throw n=Ms,sc(e,0),ac(e,r),ec(e,qt()),n;if(6===t)ac(e,r);else{if(a=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!ia(i(),a))return!1}catch(o){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)||(t=pc(e,r),2===t&&(i=pn(e),0!==i&&(r=i,t=nc(e,i))),1!==t)))throw n=Ms,sc(e,0),ac(e,r),ec(e,qt()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(re(345));case 2:case 5:bc(e,Fs,$s);break;case 3:if(ac(e,r),(130023424&r)===r&&10<(t=Rs+500-qt())){if(0!==dn(e,0))break;if(((a=e.suspendedLanes)&r)!==r){Ks(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ti(bc.bind(null,e,Fs,$s),t);break}bc(e,Fs,$s);break;case 4:if(ac(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-an(r);i=1<<o,(o=t[o])>a&&(a=o),r&=~i}if(r=a,10<(r=(120>(r=qt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xs(r/1960))-r)){e.timeoutHandle=ti(bc.bind(null,e,Fs,$s),r);break}bc(e,Fs,$s);break;default:throw Error(re(329))}}}return ec(e,qt()),e.callbackNode===n?tc.bind(null,e):null}function nc(e,t){var n=Is;return e.current.memoizedState.isDehydrated&&(sc(e,t).flags|=256),2!==(e=pc(e,t))&&(t=Fs,Fs=n,null!==t&&rc(t)),e}function rc(e){null===Fs?Fs=e:Fs.push.apply(Fs,e)}function ac(e,t){for(t&=~Os,t&=~Ls,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-an(t),r=1<<n;e[n]=-1,t&=~r}}function ic(e){if(6&Es)throw Error(re(327));yc();var t=dn(e,0);if(!(1&t))return ec(e,qt()),null;var n=pc(e,t);if(0!==e.tag&&2===n){var r=pn(e);0!==r&&(t=r,n=nc(e,r))}if(1===n)throw n=Ms,sc(e,0),ac(e,t),ec(e,qt()),n;if(6===n)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bc(e,Fs,$s),ec(e,qt()),null}function oc(e,t){var n=Es;Es|=1;try{return e(t)}finally{0===(Es=n)&&(As=qt()+500,Fi&&$i())}}function lc(e){null!==Gs&&0===Gs.tag&&!(6&Es)&&yc();var t=Es;Es|=1;var n=Cs.transition,r=bn;try{if(Cs.transition=null,bn=1,e)return e()}finally{bn=r,Cs.transition=n,!(6&(Es=t))&&$i()}}function uc(){Ps=Ds.current,Si(Ds)}function sc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ni(n)),null!==js)for(n=js.return;null!==n;){var r=n;switch(Ji(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Ti();break;case 3:qo(),Si(ji),Si(zi),tl();break;case 5:Ko(r);break;case 4:qo();break;case 13:case 19:Si(Zo);break;case 10:zo(r.type._context);break;case 22:case 23:uc()}n=n.return}if(zs=e,js=e=Dc(e.current,null),Ns=Ps=t,Ts=0,Ms=null,Os=Ls=_s=0,Fs=Is=null,null!==Do){for(t=0;t<Do.length;t++)if(null!==(r=(n=Do[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Do=null}return e}function cc(e,t){for(;;){var n=js;try{if(Eo(),nl.current=Xl,ul){for(var r=il.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ul=!1}if(al=0,ll=ol=il=null,sl=!1,cl=0,Ss.current=null,null===n||null===n.return){Ts=1,Ms=t,js=null;break}e:{var i=e,o=n.return,l=n,u=t;if(t=Ns,l.flags|=32768,null!==u&&"object"==typeof u&&"function"==typeof u.then){var s=u,c=l,d=c.tag;if(!(1&c.mode||0!==d&&11!==d&&15!==d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=pu(o);if(null!==p){p.flags&=-257,mu(p,o,l,0,t),1&p.mode&&fu(i,s,t),u=s;var m=(t=p).updateQueue;if(null===m){var h=new Set;h.add(u),t.updateQueue=h}else m.add(u);break e}if(!(1&t)){fu(i,s,t),fc();break e}u=Error(re(426))}else if(no&&1&l.mode){var g=pu(o);if(null!==g){!(65536&g.flags)&&(g.flags|=256),mu(g,o,l,0,t),po(lu(u,l));break e}}i=u=lu(u,l),4!==Ts&&(Ts=2),null===Is?Is=[i]:Is.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,$o(i,cu(0,u,t));break e;case 1:l=u;var v=i.type,b=i.stateNode;if(!(128&i.flags||"function"!=typeof v.getDerivedStateFromError&&(null===b||"function"!=typeof b.componentDidCatch||null!==Hs&&Hs.has(b)))){i.flags|=65536,t&=-t,i.lanes|=t,$o(i,du(i,l,t));break e}}i=i.return}while(null!==i)}vc(n)}catch(y){t=y,js===n&&null!==n&&(js=n=n.return);continue}break}}function dc(){var e=ks.current;return ks.current=Xl,null===e?Xl:e}function fc(){0!==Ts&&3!==Ts&&2!==Ts||(Ts=4),null===zs||!(268435455&_s)&&!(268435455&Ls)||ac(zs,Ns)}function pc(e,t){var n=Es;Es|=2;var r=dc();for(zs===e&&Ns===t||($s=null,sc(e,t));;)try{mc();break}catch(a){cc(e,a)}if(Eo(),Es=n,ks.current=r,null!==js)throw Error(re(261));return zs=null,Ns=0,Ts}function mc(){for(;null!==js;)gc(js)}function hc(){for(;null!==js&&!Yt();)gc(js)}function gc(e){var t=ws(e.alternate,e,Ps);e.memoizedProps=e.pendingProps,null===t?vc(e):js=t,Ss.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Gu(n,t)))return n.flags&=32767,void(js=n);if(null===e)return Ts=6,void(js=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=Bu(n,t,Ps)))return void(js=n);if(null!==(t=t.sibling))return void(js=t);js=t=e}while(null!==t);0===Ts&&(Ts=5)}function bc(e,t,n){var r=bn,a=Cs.transition;try{Cs.transition=null,bn=1,function(e,t,n,r){do{yc()}while(null!==Gs);if(6&Es)throw Error(re(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-an(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,i),e===zs&&(js=zs=null,Ns=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||Bs||(Bs=!0,zc(Jt,function(){return yc(),null})),i=!!(15990&n.flags),!!(15990&n.subtreeFlags)||i){i=Cs.transition,Cs.transition=null;var o=bn;bn=1;var l=Es;Es|=4,Ss.current=null,function(e,t){if(Za=Hn,da(e=ca())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var o=0,l=-1,u=-1,s=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||0!==a&&3!==d.nodeType||(l=o+a),d!==i||0!==r&&3!==d.nodeType||(u=o+r),3===d.nodeType&&(o+=d.nodeValue.length),null!==(p=d.firstChild);)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++s===a&&(l=o),f===i&&++c===r&&(u=o),null!==(p=d.nextSibling))break;f=(d=f).parentNode}d=p}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ja={focusedElem:e,selectionRange:n},Hn=!1,qu=t;null!==qu;)if(e=(t=qu).child,1028&t.subtreeFlags&&null!==e)e.return=t,qu=e;else for(;null!==qu;){t=qu;try{var m=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var h=m.memoizedProps,g=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?h:eu(t.type,h),g);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var y=t.stateNode.containerInfo;1===y.nodeType?y.textContent="":9===y.nodeType&&y.documentElement&&y.removeChild(y.documentElement);break;default:throw Error(re(163))}}catch(w){xc(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,qu=e;break}qu=t.return}m=Zu,Zu=!1}(e,n),ps(n,e),fa(Ja),Hn=!!Za,Ja=Za=null,e.current=n,hs(n),Qt(),Es=l,bn=o,Cs.transition=i}else e.current=n;if(Bs&&(Bs=!1,Gs=e,Vs=a),i=e.pendingLanes,0===i&&(Hs=null),function(e){if(rn&&"function"==typeof rn.onCommitFiberRoot)try{rn.onCommitFiberRoot(nn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),ec(e,qt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Us,Us=null,e;!!(1&Vs)&&0!==e.tag&&yc(),i=e.pendingLanes,1&i?e===Qs?Ys++:(Ys=0,Qs=e):Ys=0,$i()}(e,t,n,r)}finally{Cs.transition=a,bn=r}return null}function yc(){if(null!==Gs){var e=yn(Vs),t=Cs.transition,n=bn;try{if(Cs.transition=null,bn=16>e?16:e,null===Gs)var r=!1;else{if(e=Gs,Gs=null,Vs=0,6&Es)throw Error(re(331));var a=Es;for(Es|=4,qu=e.current;null!==qu;){var i=qu,o=i.child;if(16&qu.flags){var l=i.deletions;if(null!==l){for(var u=0;u<l.length;u++){var s=l[u];for(qu=s;null!==qu;){var c=qu;switch(c.tag){case 0:case 11:case 15:Ju(8,c,i)}var d=c.child;if(null!==d)d.return=c,qu=d;else for(;null!==qu;){var f=(c=qu).sibling,p=c.return;if(ns(c),c===s){qu=null;break}if(null!==f){f.return=p,qu=f;break}qu=p}}}var m=i.alternate;if(null!==m){var h=m.child;if(null!==h){m.child=null;do{var g=h.sibling;h.sibling=null,h=g}while(null!==h)}}qu=i}}if(2064&i.subtreeFlags&&null!==o)o.return=i,qu=o;else e:for(;null!==qu;){if(2048&(i=qu).flags)switch(i.tag){case 0:case 11:case 15:Ju(9,i,i.return)}var v=i.sibling;if(null!==v){v.return=i.return,qu=v;break e}qu=i.return}}var b=e.current;for(qu=b;null!==qu;){var y=(o=qu).child;if(2064&o.subtreeFlags&&null!==y)y.return=o,qu=y;else e:for(o=b;null!==qu;){if(2048&(l=qu).flags)try{switch(l.tag){case 0:case 11:case 15:es(9,l)}}catch(x){xc(l,l.return,x)}if(l===o){qu=null;break e}var w=l.sibling;if(null!==w){w.return=l.return,qu=w;break e}qu=l.return}}if(Es=a,$i(),rn&&"function"==typeof rn.onPostCommitFiberRoot)try{rn.onPostCommitFiberRoot(nn,e)}catch(x){}r=!0}return r}finally{bn=n,Cs.transition=t}}return!1}function wc(e,t,n){e=Ro(e,t=cu(0,t=lu(n,t),1),1),t=Ks(),null!==e&&(gn(e,1,t),ec(e,t))}function xc(e,t,n){if(3===e.tag)wc(e,e,n);else for(;null!==t;){if(3===t.tag){wc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Hs||!Hs.has(r))){t=Ro(t,e=du(t,e=lu(n,e),1),1),e=Ks(),null!==t&&(gn(t,1,e),ec(t,e));break}}t=t.return}}function kc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Ks(),e.pingedLanes|=e.suspendedLanes&n,zs===e&&(Ns&n)===n&&(4===Ts||3===Ts&&(130023424&Ns)===Ns&&500>qt()-Rs?sc(e,0):Os|=n),ec(e,t)}function Sc(e,t){0===t&&(1&e.mode?(t=sn,!(130023424&(sn<<=1))&&(sn=4194304)):t=1);var n=Ks();null!==(e=_o(e,t))&&(gn(e,t,n),ec(e,n))}function Cc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Sc(e,n)}function Ec(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(re(314))}null!==r&&r.delete(t),Sc(e,n)}function zc(e,t){return Gt(e,t)}function jc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,n,r){return new jc(e,t,n,r)}function Pc(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Dc(e,t){var n=e.alternate;return null===n?((n=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Tc(e,t,n,r,a,i){var o=2;if(r=e,"function"==typeof e)Pc(e)&&(o=1);else if("string"==typeof e)o=5;else e:switch(e){case xe:return Mc(n.children,a,i,t);case ke:o=8,a|=8;break;case Se:return(e=Nc(12,n,t,2|a)).elementType=Se,e.lanes=i,e;case je:return(e=Nc(13,n,t,a)).elementType=je,e.lanes=i,e;case Ne:return(e=Nc(19,n,t,a)).elementType=Ne,e.lanes=i,e;case Te:return _c(n,a,i,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case Ce:o=10;break e;case Ee:o=9;break e;case ze:o=11;break e;case Pe:o=14;break e;case De:o=16,r=null;break e}throw Error(re(130,null==e?e:typeof e,""))}return(t=Nc(o,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Mc(e,t,n,r){return(e=Nc(7,e,r,t)).lanes=n,e}function _c(e,t,n,r){return(e=Nc(22,e,r,t)).elementType=Te,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Nc(6,e,null,t)).lanes=n,e}function Oc(e,t,n){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ic(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,a,i,o,l,u){return e=new Ic(e,t,n,l,u),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nc(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oo(i),e}function Rc(e){if(!e)return Ei;e:{if($t(e=e._reactInternals)!==e||1!==e.tag)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Di(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(re(171))}if(1===e.tag){var n=e.type;if(Di(n))return _i(e,n,t)}return t}function Ac(e,t,n,r,a,i,o,l,u){return(e=Fc(n,r,!0,e,0,i,0,l,u)).context=Rc(null),n=e.current,(i=Fo(r=Ks(),a=Zs(n))).callback=null!=t?t:null,Ro(n,i,a),e.current.lanes=a,gn(e,a,r),ec(e,r),e}function $c(e,t,n,r){var a=t.current,i=Ks(),o=Zs(a);return n=Rc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Fo(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ro(a,t,o))&&(Js(e,a,o,i),Ao(e,a,o)),o}function Wc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Uc(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){Uc(e,t),(e=e.alternate)&&Uc(e,t)}ws=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ji.current)gu=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return gu=!1,function(e,t,n){switch(t.tag){case 3:zu(t),fo();break;case 5:Xo(t);break;case 1:Di(t.type)&&Li(t);break;case 4:Qo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ci(xo,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ci(Zo,1&Zo.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Lu(e,t,n):(Ci(Zo,1&Zo.current),null!==(e=Wu(e,t,n))?e.sibling:null);Ci(Zo,1&Zo.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return Au(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ci(Zo,Zo.current),r)break;return null;case 22:case 23:return t.lanes=0,xu(e,t,n)}return Wu(e,t,n)}(e,t,n);gu=!!(131072&e.flags)}else gu=!1,no&&1048576&t.flags&&Ki(t,Bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;$u(e,t),e=t.pendingProps;var a=Pi(t,zi.current);No(t,n),a=ml(null,t,r,e,a,n);var i=hl();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Di(r)?(i=!0,Li(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Oo(t),a.updater=nu,t.stateNode=a,a._reactInternals=t,ou(t,r,e,n),t=Eu(null,t,r,!0,i,n)):(t.tag=0,no&&i&&Zi(t),vu(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch($u(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return Pc(e)?1:0;if(null!=e){if((e=e.$$typeof)===ze)return 11;if(e===Pe)return 14}return 2}(r),e=eu(r,e),a){case 0:t=Su(null,t,r,e,n);break e;case 1:t=Cu(null,t,r,e,n);break e;case 11:t=bu(null,t,r,e,n);break e;case 14:t=yu(null,t,r,eu(r.type,e),n);break e}throw Error(re(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Su(e,t,r,a=t.elementType===r?a:eu(r,a),n);case 1:return r=t.type,a=t.pendingProps,Cu(e,t,r,a=t.elementType===r?a:eu(r,a),n);case 3:e:{if(zu(t),null===e)throw Error(re(387));r=t.pendingProps,a=(i=t.memoizedState).element,Io(e,t),Wo(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=ju(e,t,r,n,a=lu(Error(re(423)),t));break e}if(r!==a){t=ju(e,t,r,n,a=lu(Error(re(424)),t));break e}for(to=li(t.stateNode.containerInfo.firstChild),eo=t,no=!0,ro=null,n=wo(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fo(),r===a){t=Wu(e,t,n);break e}vu(e,t,r,n)}t=t.child}return t;case 5:return Xo(t),null===e&&lo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,o=a.children,ei(r,a)?o=null:null!==i&&ei(r,i)&&(t.flags|=32),ku(e,t),vu(e,t,o,n),t.child;case 6:return null===e&&lo(t),null;case 13:return Lu(e,t,n);case 4:return Qo(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=yo(t,null,r,n):vu(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,bu(e,t,r,a=t.elementType===r?a:eu(r,a),n);case 7:return vu(e,t,t.pendingProps,n),t.child;case 8:case 12:return vu(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,Ci(xo,r._currentValue),r._currentValue=o,null!==i)if(ia(i.value,o)){if(i.children===a.children&&!ji.current){t=Wu(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var l=i.dependencies;if(null!==l){o=i.child;for(var u=l.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Fo(-1,n&-n)).tag=2;var s=i.updateQueue;if(null!==s){var c=(s=s.shared).pending;null===c?u.next=u:(u.next=c.next,c.next=u),s.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),jo(i.return,n,t),l.lanes|=n;break}u=u.next}}else if(10===i.tag)o=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(o=i.return))throw Error(re(341));o.lanes|=n,null!==(l=o.alternate)&&(l.lanes|=n),jo(o,n,t),o=i.sibling}else o=i.child;if(null!==o)o.return=i;else for(o=i;null!==o;){if(o===t){o=null;break}if(null!==(i=o.sibling)){i.return=o.return,o=i;break}o=o.return}i=o}vu(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,No(t,n),r=r(a=Po(a)),t.flags|=1,vu(e,t,r,n),t.child;case 14:return a=eu(r=t.type,t.pendingProps),yu(e,t,r,a=eu(r.type,a),n);case 15:return wu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:eu(r,a),$u(e,t),t.tag=1,Di(r)?(e=!0,Li(t)):e=!1,No(t,n),au(t,r,a),ou(t,r,a,n),Eu(null,t,r,!0,e,n);case 19:return Au(e,t,n);case 22:return xu(e,t,n)}throw Error(re(156,t.tag))};var Bc="function"==typeof reportError?reportError:function(e){};function Gc(e){this._internalRoot=e}function Vc(e){this._internalRoot=e}function Yc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function qc(){}function Xc(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"==typeof a){var l=a;a=function(){var e=Wc(o);l.call(e)}}$c(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"==typeof r){var i=r;r=function(){var e=Wc(o);i.call(e)}}var o=Ac(t,r,e,0,null,!1,0,"",qc);return e._reactRootContainer=o,e[fi]=o.current,$a(8===e.nodeType?e.parentNode:e),lc(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var l=r;r=function(){var e=Wc(u);l.call(e)}}var u=Fc(e,0,!1,null,0,!1,0,"",qc);return e._reactRootContainer=u,e[fi]=u.current,$a(8===e.nodeType?e.parentNode:e),lc(function(){$c(t,u,n,r)}),u}(n,t,e,a,r);return Wc(o)}Vc.prototype.render=Gc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(re(409));$c(e,t,null,null)},Vc.prototype.unmount=Gc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lc(function(){$c(null,e,null,null)}),t[fi]=null}},Vc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Mn.length&&0!==t&&t<Mn[n].priority;n++);Mn.splice(n,0,e),0===n&&In(e)}},wn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cn(t.pendingLanes);0!==n&&(vn(t,1|n),ec(t,qt()),!(6&Es)&&(As=qt()+500,$i()))}break;case 13:lc(function(){var t=_o(e,1);if(null!==t){var n=Ks();Js(t,e,1,n)}}),Hc(e,1)}},xn=function(e){if(13===e.tag){var t=_o(e,134217728);if(null!==t)Js(t,e,134217728,Ks());Hc(e,134217728)}},kn=function(e){if(13===e.tag){var t=Zs(e),n=_o(e,t);if(null!==n)Js(n,e,t,Ks());Hc(e,t)}},Sn=function(){return bn},Cn=function(e,t){var n=bn;try{return bn=e,t()}finally{bn=n}},wt=function(e,t,n){switch(t){case"input":if(Xe(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=yi(r);if(!a)throw Error(re(90));Ge(r),Xe(r,a)}}}break;case"textarea":rt(e,n);break;case"select":null!=(t=n.value)&&et(e,!!n.multiple,t,!1)}},zt=oc,jt=lc;var Kc={usingClientEntryPoint:!1,Events:[vi,bi,yi,Ct,Et,oc]},Zc={findFiberByHostInstance:gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jc={bundleType:Zc.bundleType,version:Zc.version,rendererPackageName:Zc.rendererPackageName,rendererConfig:Zc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ht(e))?null:e.stateNode},findFiberByHostInstance:Zc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var ed=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ed.isDisabled&&ed.supportsFiber)try{nn=ed.inject(Jc),rn=ed}catch(ut){}}K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kc,K.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Yc(t))throw Error(re(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:we,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},K.createRoot=function(e,t){if(!Yc(e))throw Error(re(299));var n=!1,r="",a=Bc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,a),e[fi]=t.current,$a(8===e.nodeType?e.parentNode:e),new Gc(t)},K.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(re(188));throw e=Object.keys(e).join(","),Error(re(268,e))}return e=null===(e=Ht(t))?null:e.stateNode},K.flushSync=function(e){return lc(e)},K.hydrate=function(e,t,n){if(!Qc(t))throw Error(re(200));return Xc(null,e,t,!0,n)},K.hydrateRoot=function(e,t,n){if(!Yc(e))throw Error(re(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",o=Bc;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(o=n.onRecoverableError)),t=Ac(t,null,e,1,null!=n?n:null,a,0,i,o),e[fi]=t.current,$a(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Vc(t)},K.render=function(e,t,n){if(!Qc(t))throw Error(re(200));return Xc(null,e,t,!1,n)},K.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(re(40));return!!e._reactRootContainer&&(lc(function(){Xc(null,null,e,!1,function(){e._reactRootContainer=null,e[fi]=null})}),!0)},K.unstable_batchedUpdates=oc,K.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(re(200));if(null==e||void 0===e._reactInternals)throw Error(re(38));return Xc(e,t,n,!1,r)},K.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){}}(),X.exports=K;var td=X.exports;let nd;q.createRoot=td.createRoot,q.hydrateRoot=td.hydrateRoot;const rd=new Uint8Array(16);function ad(){if(!nd&&(nd="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!nd))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return nd(rd)}const id=[];for(let Av=0;Av<256;++Av)id.push((Av+256).toString(16).slice(1));const od={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};function ld(e,t,n){if(od.randomUUID&&!e)return od.randomUUID();const r=(e=e||{}).random||(e.rng||ad)();return r[6]=15&r[6]|64,r[8]=63&r[8]|128,function(e,t=0){return id[e[t+0]]+id[e[t+1]]+id[e[t+2]]+id[e[t+3]]+"-"+id[e[t+4]]+id[e[t+5]]+"-"+id[e[t+6]]+id[e[t+7]]+"-"+id[e[t+8]]+id[e[t+9]]+"-"+id[e[t+10]]+id[e[t+11]]+id[e[t+12]]+id[e[t+13]]+id[e[t+14]]+id[e[t+15]]}(r)}function ud(e){const t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new e.constructor(+e):"number"==typeof e||"[object Number]"===t||"string"==typeof e||"[object String]"===t?new Date(e):new Date(NaN)}function sd(e,t){return e instanceof Date?new e.constructor(t):new Date(t)}const cd=6048e5,dd=6e4,fd=36e5,pd=43200;let md={};function hd(){return md}function gd(e,t){var n,r,a,i;const o=hd(),l=(null==t?void 0:t.weekStartsOn)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.weekStartsOn)??o.weekStartsOn??(null==(i=null==(a=o.locale)?void 0:a.options)?void 0:i.weekStartsOn)??0,u=ud(e),s=u.getDay(),c=(s<l?7:0)+s-l;return u.setDate(u.getDate()-c),u.setHours(0,0,0,0),u}function vd(e){return gd(e,{weekStartsOn:1})}function bd(e){const t=ud(e),n=t.getFullYear(),r=sd(e,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const a=vd(r),i=sd(e,0);i.setFullYear(n,0,4),i.setHours(0,0,0,0);const o=vd(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function yd(e){const t=ud(e);return t.setHours(0,0,0,0),t}function wd(e){const t=ud(e),n=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return n.setUTCFullYear(t.getFullYear()),+e-+n}function xd(e,t){const n=ud(e),r=ud(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function kd(e){return sd(e,Date.now())}function Sd(e,t){return+yd(e)===+yd(t)}function Cd(e){if(!(t=e,t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)||"number"==typeof e))return!1;var t;const n=ud(e);return!isNaN(Number(n))}function Ed(e){const t=ud(e);return+function(e){const t=ud(e);return t.setHours(23,59,59,999),t}(t)===+function(e){const t=ud(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}(t)}function zd(e,t){const n=ud(e),r=ud(t),a=xd(n,r),i=Math.abs(function(e,t){const n=ud(e),r=ud(t);return 12*(n.getFullYear()-r.getFullYear())+(n.getMonth()-r.getMonth())}(n,r));let o;if(i<1)o=0;else{1===n.getMonth()&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-a*i);let t=xd(n,r)===-a;Ed(ud(e))&&1===i&&1===xd(e,r)&&(t=!1),o=a*(i-Number(t))}return 0===o?0:o}function jd(e,t,n){const r=function(e,t){return+ud(e)-+ud(t)}(e,t)/1e3;return(a=null==n?void 0:n.roundingMethod,e=>{const t=(a?Math[a]:Math.trunc)(e);return 0===t?0:t})(r);var a}const Nd={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function Pd(e){return(t={})=>{const n=t.width?String(t.width):e.defaultWidth;return e.formats[n]||e.formats[e.defaultWidth]}}const Dd={date:Pd({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:Pd({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:Pd({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},Td={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function Md(e){return(t,n)=>{let r;if("formatting"===((null==n?void 0:n.context)?String(n.context):"standalone")&&e.formattingValues){const t=e.defaultFormattingWidth||e.defaultWidth,a=(null==n?void 0:n.width)?String(n.width):t;r=e.formattingValues[a]||e.formattingValues[t]}else{const t=e.defaultWidth,a=(null==n?void 0:n.width)?String(n.width):e.defaultWidth;r=e.values[a]||e.values[t]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function _d(e){return(t,n={})=>{const r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;const o=i[0],l=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],u=Array.isArray(l)?function(e,t){for(let n=0;n<e.length;n++)if(t(e[n]))return n;return}(l,e=>e.test(o)):function(e,t){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return n;return}(l,e=>e.test(o));let s;s=e.valueCallback?e.valueCallback(u):u,s=n.valueCallback?n.valueCallback(s):s;return{value:s,rest:t.slice(o.length)}}}function Ld(e){return(t,n={})=>{const r=t.match(e.matchPattern);if(!r)return null;const a=r[0],i=t.match(e.parsePattern);if(!i)return null;let o=e.valueCallback?e.valueCallback(i[0]):i[0];o=n.valueCallback?n.valueCallback(o):o;return{value:o,rest:t.slice(a.length)}}}const Od={code:"en-US",formatDistance:(e,t,n)=>{let r;const a=Nd[e];return r="string"==typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),(null==n?void 0:n.addSuffix)?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:Dd,formatRelative:(e,t,n,r)=>Td[e],localize:{ordinalNumber:(e,t)=>{const n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:Md({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:Md({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Md({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:Md({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:Md({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Ld({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:_d({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:_d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:_d({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:_d({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:_d({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function Id(e){const t=ud(e),n=function(e,t){const n=yd(e),r=yd(t),a=+n-wd(n),i=+r-wd(r);return Math.round((a-i)/864e5)}(t,function(e){const t=ud(e),n=sd(e,0);return n.setFullYear(t.getFullYear(),0,1),n.setHours(0,0,0,0),n}(t));return n+1}function Fd(e){const t=ud(e),n=+vd(t)-+function(e){const t=bd(e),n=sd(e,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),vd(n)}(t);return Math.round(n/cd)+1}function Rd(e,t){var n,r,a,i;const o=ud(e),l=o.getFullYear(),u=hd(),s=(null==t?void 0:t.firstWeekContainsDate)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??u.firstWeekContainsDate??(null==(i=null==(a=u.locale)?void 0:a.options)?void 0:i.firstWeekContainsDate)??1,c=sd(e,0);c.setFullYear(l+1,0,s),c.setHours(0,0,0,0);const d=gd(c,t),f=sd(e,0);f.setFullYear(l,0,s),f.setHours(0,0,0,0);const p=gd(f,t);return o.getTime()>=d.getTime()?l+1:o.getTime()>=p.getTime()?l:l-1}function Ad(e,t){const n=ud(e),r=+gd(n,t)-+function(e,t){var n,r,a,i;const o=hd(),l=(null==t?void 0:t.firstWeekContainsDate)??(null==(r=null==(n=null==t?void 0:t.locale)?void 0:n.options)?void 0:r.firstWeekContainsDate)??o.firstWeekContainsDate??(null==(i=null==(a=o.locale)?void 0:a.options)?void 0:i.firstWeekContainsDate)??1,u=Rd(e,t),s=sd(e,0);return s.setFullYear(u,0,l),s.setHours(0,0,0,0),gd(s,t)}(n,t);return Math.round(r/cd)+1}function $d(e,t){return(e<0?"-":"")+Math.abs(e).toString().padStart(t,"0")}const Wd={y(e,t){const n=e.getFullYear(),r=n>0?n:1-n;return $d("yy"===t?r%100:r,t.length)},M(e,t){const n=e.getMonth();return"M"===t?String(n+1):$d(n+1,2)},d:(e,t)=>$d(e.getDate(),t.length),a(e,t){const n=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:(e,t)=>$d(e.getHours()%12||12,t.length),H:(e,t)=>$d(e.getHours(),t.length),m:(e,t)=>$d(e.getMinutes(),t.length),s:(e,t)=>$d(e.getSeconds(),t.length),S(e,t){const n=t.length,r=e.getMilliseconds();return $d(Math.trunc(r*Math.pow(10,n-3)),t.length)}},Ud="midnight",Hd="noon",Bd="morning",Gd="afternoon",Vd="evening",Yd="night",Qd={G:function(e,t,n){const r=e.getFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){const t=e.getFullYear(),r=t>0?t:1-t;return n.ordinalNumber(r,{unit:"year"})}return Wd.y(e,t)},Y:function(e,t,n,r){const a=Rd(e,r),i=a>0?a:1-a;if("YY"===t){return $d(i%100,2)}return"Yo"===t?n.ordinalNumber(i,{unit:"year"}):$d(i,t.length)},R:function(e,t){return $d(bd(e),t.length)},u:function(e,t){return $d(e.getFullYear(),t.length)},Q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return $d(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){const r=Math.ceil((e.getMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return $d(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){const r=e.getMonth();switch(t){case"M":case"MM":return Wd.M(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){const r=e.getMonth();switch(t){case"L":return String(r+1);case"LL":return $d(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){const a=Ad(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):$d(a,t.length)},I:function(e,t,n){const r=Fd(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):$d(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getDate(),{unit:"date"}):Wd.d(e,t)},D:function(e,t,n){const r=Id(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):$d(r,t.length)},E:function(e,t,n){const r=e.getDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return $d(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){const a=e.getDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return $d(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){const r=e.getDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return $d(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){const r=e.getHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){const r=e.getHours();let a;switch(a=12===r?Hd:0===r?Ud:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){const r=e.getHours();let a;switch(a=r>=17?Vd:r>=12?Gd:r>=4?Bd:Yd,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){let t=e.getHours()%12;return 0===t&&(t=12),n.ordinalNumber(t,{unit:"hour"})}return Wd.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getHours(),{unit:"hour"}):Wd.H(e,t)},K:function(e,t,n){const r=e.getHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):$d(r,t.length)},k:function(e,t,n){let r=e.getHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):$d(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getMinutes(),{unit:"minute"}):Wd.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getSeconds(),{unit:"second"}):Wd.s(e,t)},S:function(e,t){return Wd.S(e,t)},X:function(e,t,n){const r=e.getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return Xd(r);case"XXXX":case"XX":return Kd(r);default:return Kd(r,":")}},x:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"x":return Xd(r);case"xxxx":case"xx":return Kd(r);default:return Kd(r,":")}},O:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+qd(r,":");default:return"GMT"+Kd(r,":")}},z:function(e,t,n){const r=e.getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+qd(r,":");default:return"GMT"+Kd(r,":")}},t:function(e,t,n){return $d(Math.trunc(e.getTime()/1e3),t.length)},T:function(e,t,n){return $d(e.getTime(),t.length)}};function qd(e,t=""){const n=e>0?"-":"+",r=Math.abs(e),a=Math.trunc(r/60),i=r%60;return 0===i?n+String(a):n+String(a)+t+$d(i,2)}function Xd(e,t){if(e%60==0){return(e>0?"-":"+")+$d(Math.abs(e)/60,2)}return Kd(e,t)}function Kd(e,t=""){const n=e>0?"-":"+",r=Math.abs(e);return n+$d(Math.trunc(r/60),2)+t+$d(r%60,2)}const Zd=(e,t)=>{switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});default:return t.date({width:"full"})}},Jd=(e,t)=>{switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});default:return t.time({width:"full"})}},ef={p:Jd,P:(e,t)=>{const n=e.match(/(P+)(p+)?/)||[],r=n[1],a=n[2];if(!a)return Zd(e,t);let i;switch(r){case"P":i=t.dateTime({width:"short"});break;case"PP":i=t.dateTime({width:"medium"});break;case"PPP":i=t.dateTime({width:"long"});break;default:i=t.dateTime({width:"full"})}return i.replace("{{date}}",Zd(r,t)).replace("{{time}}",Jd(a,t))}},tf=/^D+$/,nf=/^Y+$/,rf=["D","DD","YY","YYYY"];const af=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,of=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,lf=/^'([^]*?)'?$/,uf=/''/g,sf=/[a-zA-Z]/;function cf(e,t,n){var r,a,i,o,l,u,s,c;const d=hd(),f=(null==n?void 0:n.locale)??d.locale??Od,p=(null==n?void 0:n.firstWeekContainsDate)??(null==(a=null==(r=null==n?void 0:n.locale)?void 0:r.options)?void 0:a.firstWeekContainsDate)??d.firstWeekContainsDate??(null==(o=null==(i=d.locale)?void 0:i.options)?void 0:o.firstWeekContainsDate)??1,m=(null==n?void 0:n.weekStartsOn)??(null==(u=null==(l=null==n?void 0:n.locale)?void 0:l.options)?void 0:u.weekStartsOn)??d.weekStartsOn??(null==(c=null==(s=d.locale)?void 0:s.options)?void 0:c.weekStartsOn)??0,h=ud(e);if(!Cd(h))throw new RangeError("Invalid time value");let g=t.match(of).map(e=>{const t=e[0];if("p"===t||"P"===t){return(0,ef[t])(e,f.formatLong)}return e}).join("").match(af).map(e=>{if("''"===e)return{isToken:!1,value:"'"};const t=e[0];if("'"===t)return{isToken:!1,value:df(e)};if(Qd[t])return{isToken:!0,value:e};if(t.match(sf))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return{isToken:!1,value:e}});f.localize.preprocessor&&(g=f.localize.preprocessor(h,g));const v={firstWeekContainsDate:p,weekStartsOn:m,locale:f};return g.map(r=>{if(!r.isToken)return r.value;const a=r.value;(!(null==n?void 0:n.useAdditionalWeekYearTokens)&&function(e){return nf.test(e)}(a)||!(null==n?void 0:n.useAdditionalDayOfYearTokens)&&function(e){return tf.test(e)}(a))&&function(e,t,n){const r=function(e,t,n){const r="Y"===e[0]?"years":"days of the month";return`Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}(e,t,n);if(rf.includes(e))throw new RangeError(r)}(a,t,String(e));return(0,Qd[a[0]])(h,a,f.localize,v)}).join("")}function df(e){const t=e.match(lf);return t?t[1].replace(uf,"'"):e}function ff(e,t){return function(e,t,n){const r=hd(),a=(null==n?void 0:n.locale)??r.locale??Od,i=xd(e,t);if(isNaN(i))throw new RangeError("Invalid time value");const o=Object.assign({},n,{addSuffix:null==n?void 0:n.addSuffix,comparison:i});let l,u;i>0?(l=ud(t),u=ud(e)):(l=ud(e),u=ud(t));const s=jd(u,l),c=(wd(u)-wd(l))/1e3,d=Math.round((s-c)/60);let f;if(d<2)return(null==n?void 0:n.includeSeconds)?s<5?a.formatDistance("lessThanXSeconds",5,o):s<10?a.formatDistance("lessThanXSeconds",10,o):s<20?a.formatDistance("lessThanXSeconds",20,o):s<40?a.formatDistance("halfAMinute",0,o):s<60?a.formatDistance("lessThanXMinutes",1,o):a.formatDistance("xMinutes",1,o):0===d?a.formatDistance("lessThanXMinutes",1,o):a.formatDistance("xMinutes",d,o);if(d<45)return a.formatDistance("xMinutes",d,o);if(d<90)return a.formatDistance("aboutXHours",1,o);if(d<1440){const e=Math.round(d/60);return a.formatDistance("aboutXHours",e,o)}if(d<2520)return a.formatDistance("xDays",1,o);if(d<pd){const e=Math.round(d/1440);return a.formatDistance("xDays",e,o)}if(d<86400)return f=Math.round(d/pd),a.formatDistance("aboutXMonths",f,o);if(f=zd(u,l),f<12){const e=Math.round(d/pd);return a.formatDistance("xMonths",e,o)}{const e=f%12,t=Math.trunc(f/12);return e<3?a.formatDistance("aboutXYears",t,o):e<9?a.formatDistance("overXYears",t,o):a.formatDistance("almostXYears",t+1,o)}}(e,kd(e),t)}function pf(e,t){return+ud(e)<+ud(t)}function mf(e,t,n){return+gd(e,n)===+gd(t,n)}function hf(e){return Sd(e,function(e,t){const n=ud(e);return isNaN(t)?sd(e,NaN):(n.setDate(n.getDate()+t),n)}(kd(e),1))}function gf(e,t){const n=function(e){const t={},n=e.split(vf.dateTimeDelimiter);let r;if(n.length>2)return t;/:/.test(n[0])?r=n[0]:(t.date=n[0],r=n[1],vf.timeZoneDelimiter.test(t.date)&&(t.date=e.split(vf.timeZoneDelimiter)[0],r=e.substr(t.date.length,e.length)));if(r){const e=vf.timezone.exec(r);e?(t.time=r.replace(e[1],""),t.timezone=e[1]):t.time=r}return t}(e);let r;if(n.date){const e=function(e,t){const n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:NaN,restDateString:""};const a=r[1]?parseInt(r[1]):null,i=r[2]?parseInt(r[2]):null;return{year:null===i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}(n.date,2);r=function(e,t){if(null===t)return new Date(NaN);const n=e.match(bf);if(!n)return new Date(NaN);const r=!!n[4],a=xf(n[1]),i=xf(n[2])-1,o=xf(n[3]),l=xf(n[4]),u=xf(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,l,u)?function(e,t,n){const r=new Date(0);r.setUTCFullYear(e,0,4);const a=r.getUTCDay()||7,i=7*(t-1)+n+1-a;return r.setUTCDate(r.getUTCDate()+i),r}(t,l,u):new Date(NaN);{const e=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(Sf[t]||(Cf(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(Cf(e)?366:365)}(t,a)?(e.setUTCFullYear(t,i,Math.max(a,o)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);const a=r.getTime();let i,o=0;if(n.time&&(o=function(e){const t=e.match(yf);if(!t)return NaN;const n=kf(t[1]),r=kf(t[2]),a=kf(t[3]);if(!function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a))return NaN;return n*fd+r*dd+1e3*a}(n.time),isNaN(o)))return new Date(NaN);if(!n.timezone){const e=new Date(a+o),t=new Date(0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return i=function(e){if("Z"===e)return 0;const t=e.match(wf);if(!t)return 0;const n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;if(!function(e,t){return t>=0&&t<=59}(0,a))return NaN;return n*(r*fd+a*dd)}(n.timezone),isNaN(i)?new Date(NaN):new Date(a+o+i)}const vf={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},bf=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,yf=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,wf=/^([+-])(\d{2})(?::?(\d{2}))?$/;function xf(e){return e?parseInt(e):1}function kf(e){return e&&parseFloat(e.replace(",","."))||0}const Sf=[31,null,31,30,31,30,31,31,30,31,30,31];function Cf(e){return e%400==0||e%4==0&&e%100!=0}const Ef=["низкий","средний","высокий","срочный"],zf=["работа","личное","здоровье","обучение","другое"],jf=["ожидает","в работе","выполнено","отменено"],Nf=e=>({"низкий":"#4CAF50","средний":"#FF9800","высокий":"#F44336","срочный":"#9C27B0"}[e]),Pf=e=>({"работа":"💼","личное":"🏠","здоровье":"🏥","обучение":"📚","другое":"📦"}[e]),Df=e=>{const t=[],n=new Date,r=e.filter(e=>{if(!e.dueDate||e.completed)return!1;return pf("string"==typeof e.dueDate?gf(e.dueDate):e.dueDate,n)});r.length>0&&t.push(`У вас ${r.length} просроченн${r.length>1?"ых":"ая"} задач${r.length>1?"и":"а"}. Рекомендуем их проверить.`);const a=e.filter(e=>("срочный"===e.priority||"высокий"===e.priority)&&!e.completed);a.length>0&&t.push(`Сфокусируйтесь на ${a.length} высокоприоритетн${a.length>1?"ых":"ой"} задач${a.length>1?"ах":"е"}.`);const i=cf(n,"yyyy-MM-dd"),o=e.filter(e=>{if(!e.dueDate||e.completed)return!1;return cf("string"==typeof e.dueDate?gf(e.dueDate):e.dueDate,"yyyy-MM-dd")===i});o.length>0&&t.push(`На сегодня запланировано ${o.length} задач${o.length>1?"и":"а"}.`);const l=e.length>0?Math.round(e.filter(e=>e.completed).length/e.length*100):0;return l<30?t.push("Уровень выполнения низкий. Попробуйте разбивать задачи на более мелкие шаги."):l>80&&t.push("Отличная работа! Вы поддерживаете высокий уровень выполнения задач."),t};const Tf=A.createContext(void 0),Mf=({children:e})=>{const[t,n]=A.useState(()=>{const e=localStorage.getItem("theme");return e||(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});return A.useEffect(()=>{const e=document.documentElement;"dark"===t?(e.classList.add("dark-theme"),e.classList.remove("light-theme"),document.body.style.backgroundColor="#121212",document.body.style.color="#e0e0e0"):(e.classList.add("light-theme"),e.classList.remove("dark-theme"),document.body.style.backgroundColor="",document.body.style.color=""),localStorage.setItem("theme",t);const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content","dark"===t?"#121212":"#667eea")},[t]),A.useEffect(()=>{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=e=>{localStorage.getItem("theme")||n(e.matches?"dark":"light")};return e.addEventListener("change",t),()=>e.removeEventListener("change",t)},[]),Q.jsx(Tf.Provider,{value:{theme:t,toggleTheme:()=>{n(e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),t})},isDark:"dark"===t},children:e})};var _f=function(){return _f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},_f.apply(this,arguments)};function Lf(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;var Of="-ms-",If="-moz-",Ff="-webkit-",Rf="comm",Af="rule",$f="decl",Wf="@keyframes",Uf=Math.abs,Hf=String.fromCharCode,Bf=Object.assign;function Gf(e){return e.trim()}function Vf(e,t){return(e=t.exec(e))?e[0]:e}function Yf(e,t,n){return e.replace(t,n)}function Qf(e,t,n){return e.indexOf(t,n)}function qf(e,t){return 0|e.charCodeAt(t)}function Xf(e,t,n){return e.slice(t,n)}function Kf(e){return e.length}function Zf(e){return e.length}function Jf(e,t){return t.push(e),e}function ep(e,t){return e.filter(function(e){return!Vf(e,t)})}var tp=1,np=1,rp=0,ap=0,ip=0,op="";function lp(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:tp,column:np,length:o,return:"",siblings:l}}function up(e,t){return Bf(lp("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function sp(e){for(;e.root;)e=up(e.root,{children:[e]});Jf(e,e.siblings)}function cp(){return ip=ap>0?qf(op,--ap):0,np--,10===ip&&(np=1,tp--),ip}function dp(){return ip=ap<rp?qf(op,ap++):0,np++,10===ip&&(np=1,tp++),ip}function fp(){return qf(op,ap)}function pp(){return ap}function mp(e,t){return Xf(op,e,t)}function hp(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function gp(e){return Gf(mp(ap-1,yp(91===e?e+2:40===e?e+1:e)))}function vp(e){for(;(ip=fp())&&ip<33;)dp();return hp(e)>2||hp(ip)>3?"":" "}function bp(e,t){for(;--t&&dp()&&!(ip<48||ip>102||ip>57&&ip<65||ip>70&&ip<97););return mp(e,pp()+(t<6&&32==fp()&&32==dp()))}function yp(e){for(;dp();)switch(ip){case e:return ap;case 34:case 39:34!==e&&39!==e&&yp(ip);break;case 40:41===e&&yp(e);break;case 92:dp()}return ap}function wp(e,t){for(;dp()&&e+ip!==57&&(e+ip!==84||47!==fp()););return"/*"+mp(t,ap-1)+"*"+Hf(47===e?e:dp())}function xp(e){for(;!hp(fp());)dp();return mp(e,ap)}function kp(e){return function(e){return op="",e}(Sp("",null,null,null,[""],e=function(e){return tp=np=1,rp=Kf(op=e),ap=0,[]}(e),0,[0],e))}function Sp(e,t,n,r,a,i,o,l,u){for(var s=0,c=0,d=o,f=0,p=0,m=0,h=1,g=1,v=1,b=0,y="",w=a,x=i,k=r,S=y;g;)switch(m=b,b=dp()){case 40:if(108!=m&&58==qf(S,d-1)){-1!=Qf(S+=Yf(gp(b),"&","&\f"),"&\f",Uf(s?l[s-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=gp(b);break;case 9:case 10:case 13:case 32:S+=vp(m);break;case 92:S+=bp(pp()-1,7);continue;case 47:switch(fp()){case 42:case 47:Jf(Ep(wp(dp(),pp()),t,n,u),u),5!=hp(m||1)&&5!=hp(fp()||1)||!Kf(S)||" "===Xf(S,-1,void 0)||(S+=" ");break;default:S+="/"}break;case 123*h:l[s++]=Kf(S)*v;case 125*h:case 59:case 0:switch(b){case 0:case 125:g=0;case 59+c:-1==v&&(S=Yf(S,/\f/g,"")),p>0&&(Kf(S)-d||0===h&&47===m)&&Jf(p>32?zp(S+";",r,n,d-1,u):zp(Yf(S," ","")+";",r,n,d-2,u),u);break;case 59:S+=";";default:if(Jf(k=Cp(S,t,n,s,c,a,l,y,w=[],x=[],d,i),i),123===b)if(0===c)Sp(S,t,k,k,w,i,d,l,x);else{switch(f){case 99:if(110===qf(S,3))break;case 108:if(97===qf(S,2))break;default:c=0;case 100:case 109:case 115:}c?Sp(e,k,k,r&&Jf(Cp(e,k,k,0,0,a,l,y,a,w=[],d,x),x),a,x,d,l,r?w:x):Sp(S,k,k,k,[""],x,0,l,x)}}s=c=p=0,h=v=1,y=S="",d=o;break;case 58:d=1+Kf(S),p=m;default:if(h<1)if(123==b)--h;else if(125==b&&0==h++&&125==cp())continue;switch(S+=Hf(b),b*h){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[s++]=(Kf(S)-1)*v,v=1;break;case 64:45===fp()&&(S+=gp(dp())),f=fp(),c=d=Kf(y=S+=xp(pp())),b++;break;case 45:45===m&&2==Kf(S)&&(h=0)}}return i}function Cp(e,t,n,r,a,i,o,l,u,s,c,d){for(var f=a-1,p=0===a?i:[""],m=Zf(p),h=0,g=0,v=0;h<r;++h)for(var b=0,y=Xf(e,f+1,f=Uf(g=o[h])),w=e;b<m;++b)(w=Gf(g>0?p[b]+" "+y:Yf(y,/&\f/g,p[b])))&&(u[v++]=w);return lp(e,t,n,0===a?Af:l,u,s,c,d)}function Ep(e,t,n,r){return lp(e,t,n,Rf,Hf(ip),Xf(e,2,-2),0,r)}function zp(e,t,n,r,a){return lp(e,t,n,$f,Xf(e,0,r),Xf(e,r+1,-1),r,a)}function jp(e,t,n){switch(function(e,t){return 45^qf(e,0)?(((t<<2^qf(e,0))<<2^qf(e,1))<<2^qf(e,2))<<2^qf(e,3):0}(e,t)){case 5103:return Ff+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ff+e+e;case 4855:return Ff+e.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+e;case 4789:return If+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ff+e+If+e+Of+e+e;case 5936:switch(qf(e,t+11)){case 114:return Ff+e+Of+Yf(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ff+e+Of+Yf(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ff+e+Of+Yf(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Ff+e+Of+e+e;case 6165:return Ff+e+Of+"flex-"+e+e;case 5187:return Ff+e+Yf(e,/(\w+).+(:[^]+)/,Ff+"box-$1$2"+Of+"flex-$1$2")+e;case 5443:return Ff+e+Of+"flex-item-"+Yf(e,/flex-|-self/g,"")+(Vf(e,/flex-|baseline/)?"":Of+"grid-row-"+Yf(e,/flex-|-self/g,""))+e;case 4675:return Ff+e+Of+"flex-line-pack"+Yf(e,/align-content|flex-|-self/g,"")+e;case 5548:return Ff+e+Of+Yf(e,"shrink","negative")+e;case 5292:return Ff+e+Of+Yf(e,"basis","preferred-size")+e;case 6060:return Ff+"box-"+Yf(e,"-grow","")+Ff+e+Of+Yf(e,"grow","positive")+e;case 4554:return Ff+Yf(e,/([^-])(transform)/g,"$1"+Ff+"$2")+e;case 6187:return Yf(Yf(Yf(e,/(zoom-|grab)/,Ff+"$1"),/(image-set)/,Ff+"$1"),e,"")+e;case 5495:case 3959:return Yf(e,/(image-set\([^]*)/,Ff+"$1$`$1");case 4968:return Yf(Yf(e,/(.+:)(flex-)?(.*)/,Ff+"box-pack:$3"+Of+"flex-pack:$3"),/space-between/,"justify")+Ff+e+e;case 4200:if(!Vf(e,/flex-|baseline/))return Of+"grid-column-align"+Xf(e,t)+e;break;case 2592:case 3360:return Of+Yf(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Vf(e.props,/grid-\w+-end/)})?~Qf(e+(n=n[t].value),"span",0)?e:Of+Yf(e,"-start","")+e+Of+"grid-row-span:"+(~Qf(n,"span",0)?Vf(n,/\d+/):+Vf(n,/\d+/)-+Vf(e,/\d+/))+";":Of+Yf(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Vf(e.props,/grid-\w+-start/)})?e:Of+Yf(Yf(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Yf(e,/(.+)-inline(.+)/,Ff+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kf(e)-1-t>6)switch(qf(e,t+1)){case 109:if(45!==qf(e,t+4))break;case 102:return Yf(e,/(.+:)(.+)-([^]+)/,"$1"+Ff+"$2-$3$1"+If+(108==qf(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Qf(e,"stretch",0)?jp(Yf(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Yf(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,o,l){return Of+n+":"+r+l+(a?Of+n+"-span:"+(i?o:+o-+r)+l:"")+e});case 4949:if(121===qf(e,t+6))return Yf(e,":",":"+Ff)+e;break;case 6444:switch(qf(e,45===qf(e,14)?18:11)){case 120:return Yf(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ff+(45===qf(e,14)?"inline-":"")+"box$3$1"+Ff+"$2$3$1"+Of+"$2box$3")+e;case 100:return Yf(e,":",":"+Of)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Yf(e,"scroll-","scroll-snap-")+e}return e}function Np(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Pp(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case $f:return e.return=e.return||e.value;case Rf:return"";case Wf:return e.return=e.value+"{"+Np(e.children,r)+"}";case Af:if(!Kf(e.value=e.props.join(",")))return""}return Kf(n=Np(e.children,r))?e.return=e.value+"{"+n+"}":""}function Dp(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case $f:return void(e.return=jp(e.value,e.length,n));case Wf:return Np([up(e,{value:Yf(e.value,"@","@"+Ff)})],r);case Af:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Vf(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sp(up(e,{props:[Yf(t,/:(read-\w+)/,":-moz-$1")]})),sp(up(e,{props:[t]})),Bf(e,{props:ep(n,r)});break;case"::placeholder":sp(up(e,{props:[Yf(t,/:(plac\w+)/,":"+Ff+"input-$1")]})),sp(up(e,{props:[Yf(t,/:(plac\w+)/,":-moz-$1")]})),sp(up(e,{props:[Yf(t,/:(plac\w+)/,Of+"input-$1")]})),sp(up(e,{props:[t]})),Bf(e,{props:ep(n,r)})}return""})}}var Tp={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mp={},_p="undefined"!=typeof process&&void 0!==Mp&&(Mp.REACT_APP_SC_ATTR||Mp.SC_ATTR)||"data-styled",Lp="active",Op="data-styled-version",Ip="6.3.6",Fp="/*!sc*/\n",Rp="undefined"!=typeof window&&"undefined"!=typeof document,Ap=void 0===$.createContext,$p=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==Mp&&void 0!==Mp.REACT_APP_SC_DISABLE_SPEEDY&&""!==Mp.REACT_APP_SC_DISABLE_SPEEDY?"false"!==Mp.REACT_APP_SC_DISABLE_SPEEDY&&Mp.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==Mp&&void 0!==Mp.SC_DISABLE_SPEEDY&&""!==Mp.SC_DISABLE_SPEEDY&&("false"!==Mp.SC_DISABLE_SPEEDY&&Mp.SC_DISABLE_SPEEDY)),Wp={},Up=Object.freeze([]),Hp=Object.freeze({});function Bp(e,t,n){return void 0===n&&(n=Hp),e.theme!==n.theme&&e.theme||t||n.theme}var Gp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),Vp=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Yp=/(^-|-$)/g;function Qp(e){return e.replace(Vp,"-").replace(Yp,"")}var qp=/(a)(d)/gi,Xp=function(e){return String.fromCharCode(e+(e>25?39:97))};function Kp(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Xp(t%52)+n;return(Xp(t%52)+n).replace(qp,"$1-$2")}var Zp,Jp=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},em=function(e){return Jp(5381,e)};function tm(e){return Kp(em(e)>>>0)}function nm(e){return"string"==typeof e&&!0}var rm="function"==typeof Symbol&&Symbol.for,am=rm?Symbol.for("react.memo"):60115,im=rm?Symbol.for("react.forward_ref"):60112,om={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},lm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},um={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},sm=((Zp={})[im]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zp[am]=um,Zp);function cm(e){return("type"in(t=e)&&t.type.$$typeof)===am?um:"$$typeof"in e?sm[e.$$typeof]:om;var t}var dm=Object.defineProperty,fm=Object.getOwnPropertyNames,pm=Object.getOwnPropertySymbols,mm=Object.getOwnPropertyDescriptor,hm=Object.getPrototypeOf,gm=Object.prototype;function vm(e,t,n){if("string"!=typeof t){if(gm){var r=hm(t);r&&r!==gm&&vm(e,r,n)}var a=fm(t);pm&&(a=a.concat(pm(t)));for(var i=cm(e),o=cm(t),l=0;l<a.length;++l){var u=a[l];if(!(u in lm||n&&n[u]||o&&u in o||i&&u in i)){var s=mm(t,u);try{dm(e,u,s)}catch(c){}}}}return e}function bm(e){return"function"==typeof e}function ym(e){return"object"==typeof e&&"styledComponentId"in e}function wm(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function xm(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function km(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sm(e,t,n){if(void 0===n&&(n=!1),!n&&!km(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sm(e[r],t[r]);else if(km(t))for(var r in t)e[r]=Sm(e[r],t[r]);return e}function Cm(e,t){Object.defineProperty(e,"toString",{value:t})}function Em(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var zm=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Em(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(Fp);return t},e}(),jm=new Map,Nm=new Map,Pm=1,Dm=function(e){if(jm.has(e))return jm.get(e);for(;Nm.has(Pm);)Pm++;var t=Pm++;return jm.set(e,t),Nm.set(t,e),t},Tm=function(e,t){Pm=t+1,jm.set(e,t),Nm.set(t,e)},Mm="style[".concat(_p,"][").concat(Op,'="').concat(Ip,'"]'),_m=new RegExp("^".concat(_p,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Lm=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Om=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Fp),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var u=l.match(_m);if(u){var s=0|parseInt(u[1],10),c=u[2];0!==s&&(Tm(c,s),Lm(e,c,u[3]),e.getTag().insertRules(s,a)),a.length=0}else a.push(l)}}},Im=function(e){for(var t=document.querySelectorAll(Mm),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(_p)!==Lp&&(Om(e,a),a.parentNode&&a.parentNode.removeChild(a))}};var Fm=function(e){var t,n,r=document.head,a=e||r,i=document.createElement("style"),o=(t=a,(n=Array.from(t.querySelectorAll("style[".concat(_p,"]"))))[n.length-1]),l=void 0!==o?o.nextSibling:null;i.setAttribute(_p,Lp),i.setAttribute(Op,Ip);var u="undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null;return u&&i.setAttribute("nonce",u),a.insertBefore(i,l),i},Rm=function(){function e(e){this.element=Fm(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Em(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(n){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Am=function(){function e(e){this.element=Fm(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),$m=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wm=Rp,Um={isServer:!Rp,useCSSOMInjection:!$p},Hm=function(){function e(e,t,n){void 0===e&&(e=Hp),void 0===t&&(t={});var r=this;this.options=_f(_f({},Um),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Rp&&Wm&&(Wm=!1,Im(this)),Cm(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a,i=(a=n,Nm.get(a));if(void 0===i)return"continue";var o=e.names.get(i),l=t.getGroup(n);if(void 0===o||!o.size||0===l.length)return"continue";var u="".concat(_p,".g").concat(n,'[id="').concat(i,'"]'),s="";void 0!==o&&o.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(l).concat(u,'{content:"').concat(s,'"}').concat(Fp)},i=0;i<n;i++)a(i);return r}(r)})}return e.registerId=function(e){return Dm(e)},e.prototype.rehydrate=function(){!this.server&&Rp&&Im(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(_f(_f({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=this.options,t=e.useCSSOMInjection,n=e.target,r=e.isServer?new $m(n):t?new Rm(n):new Am(n),new zm(r)));var e,t,n,r},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(Dm(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(Dm(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(Dm(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Bm=/&/g,Gm=47;function Vm(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,n=0,r=0,a=!1,i=0;i<t;i++){var o=e.charCodeAt(i);if(0!==r||a||o!==Gm||42!==e.charCodeAt(i+1))if(a)42===o&&e.charCodeAt(i+1)===Gm&&(a=!1,i++);else if(34!==o&&39!==o||0!==i&&92===e.charCodeAt(i-1)){if(0===r)if(123===o)n++;else if(125===o&&--n<0)return!0}else 0===r?r=o:r===o&&(r=0);else a=!0,i++}return 0!==n||0!==r}function Ym(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ym(e.children,t)),e})}var Qm=new Hm,qm=function(){var e,t,n,r=Hp,a=r.options,i=void 0===a?Hp:a,o=r.plugins,l=void 0===o?Up:o,u=function(n,r,a){return a.startsWith(t)&&a.endsWith(t)&&a.replaceAll(t,"").length>0?".".concat(e):n},s=l.slice();s.push(function(e){e.type===Af&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Bm,t).replace(n,u))}),i.prefix&&s.push(Dp),s.push(Pp);var c=function(r,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),e=l,t=a,n=new RegExp("\\".concat(t,"\\b"),"g");var u=function(e){if(!Vm(e))return e;for(var t=e.length,n="",r=0,a=0,i=0,o=!1,l=0;l<t;l++){var u=e.charCodeAt(l);if(0!==i||o||u!==Gm||42!==e.charCodeAt(l+1))if(o)42===u&&e.charCodeAt(l+1)===Gm&&(o=!1,l++);else if(34!==u&&39!==u||0!==l&&92===e.charCodeAt(l-1)){if(0===i)if(123===u)a++;else if(125===u){if(--a<0){for(var s=l+1;s<t;){var c=e.charCodeAt(s);if(59===c||10===c)break;s++}s<t&&59===e.charCodeAt(s)&&s++,a=0,l=s-1,r=s;continue}0===a&&(n+=e.substring(r,l+1),r=l+1)}else 59===u&&0===a&&(n+=e.substring(r,l+1),r=l+1)}else 0===i?i=u:i===u&&(i=0);else o=!0,l++}if(r<t){var d=e.substring(r);Vm(d)||(n+=d)}return n}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,n=[],r=0,a=0,i=0,o=0;a<t;){var l=e.charCodeAt(a);if(34!==l&&39!==l||0!==a&&92===e.charCodeAt(a-1))if(0===i)if(40===l&&a>=3&&108==(32|e.charCodeAt(a-1))&&114==(32|e.charCodeAt(a-2))&&117==(32|e.charCodeAt(a-3)))o=1,a++;else if(o>0)41===l?o--:40===l&&o++,a++;else if(l===Gm&&a+1<t&&e.charCodeAt(a+1)===Gm){for(a>r&&n.push(e.substring(r,a));a<t&&10!==e.charCodeAt(a);)a++;r=a}else a++;else a++;else 0===i?i=l:i===l&&(i=0),a++}return 0===r?e:(r<t&&n.push(e.substring(r)),n.join(""))}(r)),c=kp(o||a?"".concat(o," ").concat(a," { ").concat(u," }"):u);i.namespace&&(c=Ym(c,i.namespace));var d,f,p,m=[];return Np(c,(d=s.concat((p=function(e){return m.push(e)},function(e){e.root||(e=e.return)&&p(e)})),f=Zf(d),function(e,t,n,r){for(var a="",i=0;i<f;i++)a+=d[i](e,t,n,r)||"";return a})),m};return c.hash=l.length?l.reduce(function(e,t){return t.name||Em(15),Jp(e,t.name)},5381).toString():"",c}(),Xm={shouldForwardProp:void 0,styleSheet:Qm,stylis:qm},Km=Ap?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(Xm)}}:$.createContext(Xm);function Zm(){return!Ap&&$.useContext?$.useContext(Km):Xm}Km.Consumer,Ap||$.createContext(void 0);var Jm=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=qm);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,Cm(this,function(){throw Em(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=qm),this.name+e.hash},e}();function eh(e,t){return null==t||"boolean"==typeof t||""===t?"":"number"!=typeof t||0===t||e in Tp||e.startsWith("--")?String(t).trim():"".concat(t,"px")}var th=function(e){return e>="A"&&e<="Z"};function nh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;th(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var rh=function(e){return null==e||!1===e||""===e},ah=function(e){var t=[];for(var n in e){var r=e[n];e.hasOwnProperty(n)&&!rh(r)&&(Array.isArray(r)&&r.isCss||bm(r)?t.push("".concat(nh(n),":"),r,";"):km(r)?t.push.apply(t,Lf(Lf(["".concat(n," {")],ah(r),!1),["}"],!1)):t.push("".concat(nh(n),": ").concat(eh(n,r),";")))}return t};function ih(e,t,n,r){return rh(e)?[]:ym(e)?[".".concat(e.styledComponentId)]:bm(e)?!bm(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:ih(e(t),t,n,r):e instanceof Jm?n?(e.inject(n,r),[e.getName(r)]):[e]:km(e)?ah(e):Array.isArray(e)?Array.prototype.concat.apply(Up,e.map(function(e){return ih(e,t,n,r)})):[e.toString()];var a}function oh(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(bm(n)&&!ym(n))return!1}return!0}var lh=em(Ip),uh=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&oh(e),this.componentId=t,this.baseHash=Jp(lh,t),this.baseStyle=n,Hm.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n).className:"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=wm(r,this.staticRulesId);else{var a=xm(ih(this.rules,e,t,n)),i=Kp(Jp(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=wm(r,i),this.staticRulesId=i}else{for(var l=Jp(this.baseHash,n.hash),u="",s=0;s<this.rules.length;s++){var c=this.rules[s];if("string"==typeof c)u+=c;else if(c){var d=xm(ih(c,e,t,n));l=Jp(l,d+s),u+=d}}if(u){var f=Kp(l>>>0);if(!t.hasNameForId(this.componentId,f)){var p=n(u,".".concat(f),void 0,this.componentId);t.insertRules(this.componentId,f,p)}r=wm(r,f)}}return{className:r,css:"undefined"==typeof window?t.getTag().getGroup(Dm(this.componentId)):""}},e}(),sh=Ap?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:$.createContext(void 0);sh.Consumer;var ch={};function dh(e,t,n){var r,a=ym(e),i=e,o=!nm(e),l=t.attrs,u=void 0===l?Up:l,s=t.componentId,c=void 0===s?function(e,t){var n="string"!=typeof e?"sc":Qp(e);ch[n]=(ch[n]||0)+1;var r="".concat(n,"-").concat(tm(Ip+n+ch[n]));return t?"".concat(t,"-").concat(r):r}(t.displayName,t.parentComponentId):s,d=t.displayName,f=void 0===d?nm(r=e)?"styled.".concat(r):"Styled(".concat(function(e){return e.displayName||e.name||"Component"}(r),")"):d,p=t.displayName&&t.componentId?"".concat(Qp(t.displayName),"-").concat(t.componentId):t.componentId||c,m=a&&i.attrs?i.attrs.concat(u).filter(Boolean):u,h=t.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(t.shouldForwardProp){var v=t.shouldForwardProp;h=function(e,t){return g(e,t)&&v(e,t)}}else h=g}var b=new uh(n,p,a?i.componentStyle:void 0);function y(e,t){return function(e,t,n){var r=e.attrs,a=e.componentStyle,i=e.defaultProps,o=e.foldedComponentIds,l=e.styledComponentId,u=e.target,s=$.useContext?$.useContext(sh):void 0,c=Zm(),d=e.shouldForwardProp||c.shouldForwardProp,f=Bp(t,s,i)||Hp,p=function(e,t,n){for(var r,a=_f(_f({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=bm(r=e[i])?r(a):r;for(var l in o)"className"===l?a.className=wm(a.className,o[l]):"style"===l?a.style=_f(_f({},a.style),o[l]):a[l]=o[l]}return"className"in t&&"string"==typeof t.className&&(a.className=wm(a.className,t.className)),a}(r,t,f),m=p.as||u,h={};for(var g in p)void 0===p[g]||"$"===g[0]||"as"===g||"theme"===g&&p.theme===f||("forwardedAs"===g?h.as=p.forwardedAs:d&&!d(g,m)||(h[g]=p[g]));var v,b,y,w=(v=a,b=p,y=Zm(),v.generateAndInjectStyles(b,y.styleSheet,y.stylis)),x=w.className,k=w.css,S=wm(o,l);x&&(S+=" "+x),p.className&&(S+=" "+p.className),h[nm(m)&&!Gp.has(m)?"class":"className"]=S,n&&(h.ref=n);var C=A.createElement(m,h);return Ap&&k?$.createElement($.Fragment,null,$.createElement("style",{precedence:"styled-components",href:"sc-".concat(l,"-").concat(x),children:k}),C):C}(w,e,t)}y.displayName=f;var w=$.forwardRef(y);return w.attrs=m,w.componentStyle=b,w.displayName=f,w.shouldForwardProp=h,w.foldedComponentIds=a?wm(i.foldedComponentIds,i.styledComponentId):"",w.styledComponentId=p,w.target=a?i.target:e,Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Sm(e,a[r],!0);return e}({},i.defaultProps,e):e}}),Cm(w,function(){return".".concat(w.styledComponentId)}),o&&vm(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),w}function fh(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var ph=function(e){return Object.assign(e,{isCss:!0})};function mh(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(bm(e)||km(e))return ph(ih(fh(Up,Lf([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ih(r):ph(ih(fh(r,t)))}function hh(e,t,n){if(void 0===n&&(n=Hp),!t)throw Em(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,mh.apply(void 0,Lf([r],a,!1)))};return r.attrs=function(r){return hh(e,t,_f(_f({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return hh(e,t,_f(_f({},n),r))},r}var gh=function(e){return hh(dh,e)},vh=gh;Gp.forEach(function(e){vh[e]=gh(e)});var bh=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=oh(e),Hm.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(xm(ih(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Hm.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();const yh=vh.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 14px;
    
    .light-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
    border-radius: 16px;
    
    .light-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
    }
  }
`,wh=vh.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`,xh=vh.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`,kh=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`,Sh=vh(kh)`
  grid-column: 1 / -1;
`,Ch=vh.label`
  font-size: 0.75rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,Eh=vh.input`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  
  /* Стили для input[type="datetime-local"] */
  &[type="datetime-local"] {
    /* Стилизация иконки календаря */
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      filter: invert(0);
    }
    
    /* Стили для текста placeholder */
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-minute-field {
      padding: 0 0.125rem;
    }
  }
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    /* Стилизация иконки календаря в светлой теме */
    &[type="datetime-local"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
      background-repeat: no-repeat;
      background-position: center;
      
      &:hover {
        background-color: rgba(102, 126, 234, 0.1);
        filter: invert(30%) sepia(40%) saturate(5000%) hue-rotate(220deg);
      }
    }
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      
      &[type="datetime-local"]::-webkit-calendar-picker-indicator {
        filter: invert(30%) sepia(40%) saturate(5000%) hue-rotate(220deg);
      }
    }
    
    &::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    /* Стилизация иконки календаря в темной теме */
    &[type="datetime-local"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23b0b0d0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
      background-repeat: no-repeat;
      background-position: center;
      
      &:hover {
        background-color: rgba(138, 158, 255, 0.2);
        filter: invert(100%);
      }
    }
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
      
      &[type="datetime-local"]::-webkit-calendar-picker-indicator {
        filter: invert(100%);
      }
    }
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    
    &[type="datetime-local"] {
      &::-webkit-calendar-picker-indicator {
        width: 20px;
        height: 20px;
      }
    }
  }
`,zh=vh.textarea`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  min-height: 70px;
  resize: vertical;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    min-height: 80px;
  }
`,jh=vh.select`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
    }
    
    option {
      background-color: white;
      color: #333;
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
    }
    
    option {
      background-color: #2d2d2d;
      color: #e0e0e0;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
`,Nh=vh.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0.375rem;
  border-radius: 8px;
  min-height: 38px;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    
    &:focus-within {
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    
    &:focus-within {
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
  }
  
  @media (min-width: 768px) {
    gap: 0.5rem;
    padding: 0.5rem;
    min-height: 42px;
  }
`,Ph=vh.span`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
  }
  
  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
`,Dh=vh.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
    margin-left: 4px;
  }
`,Th=vh.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 80px;
  font-size: 0.75rem;
  background: transparent;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
    
    &::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }
  
  .dark-theme & {
    color: #e0e0e0;
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    min-width: 100px;
  }
`,Mh=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  width: 100%;
  transition: border-color 0.3s ease;
  
  .dark-theme & {
    border-top: 1px solid #444;
  }
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`,_h=vh.button`
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(90, 111, 216, 0.4);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`,Lh=vh.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  order: -1;
  
  .light-theme & {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    color: #555;
    border: 1px solid #ddd;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    color: #e0e0e0;
    border: 1px solid #444;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    order: 0;
  }
`,Oh=vh.div`
  color: #f44336;
  font-size: 0.625rem;
  margin-top: 0.125rem;
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`,Ih=vh.div`
  display: flex;
  gap: 0.375rem;
  margin-top: 0.375rem;
  flex-wrap: wrap;
`,Fh=vh.button`
  padding: 0.25rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
    color: #555;
    border: 1px solid #ddd;
    
    &:hover {
      background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
      color: #667eea;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #3a3a4a 0%, #2d2d3d 100%);
    color: #b0b0d0;
    border: 1px solid #555;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd830 0%, #6a429030 100%);
      color: #8a9eff;
      border-color: #5a6fd8;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(90, 111, 216, 0.3);
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
`,Rh=({onAddTask:e,editingTask:t,onCancelEdit:n})=>{const[r,a]=A.useState(""),[i,o]=A.useState(""),[l,u]=A.useState("средний"),[s,c]=A.useState("работа"),[d,f]=A.useState("ожидает"),[p,m]=A.useState(""),[h,g]=A.useState(""),[v,b]=A.useState([]),[y,w]=A.useState(""),[x,k]=A.useState({});A.useEffect(()=>{var e;if(t){if(a(t.title||""),o(t.description||""),u(t.priority),c(t.category),f(t.status),t.dueDate)try{let e;if(e="string"==typeof t.dueDate?gf(t.dueDate):t.dueDate,isNaN(e.getTime()))m("");else{const t=cf(e,"yyyy-MM-dd'T'HH:mm");m(t)}}catch(n){m("")}else m("");g((null==(e=t.estimatedTime)?void 0:e.toString())||""),b(t.tags||[]),k({})}else S()},[t]);const S=()=>{a(""),o(""),u("средний"),c("работа"),f("ожидает"),m(""),g(""),b([]),w(""),k({})},C=e=>{if(t)return;const n=new Date,r=new Date;r.setDate(r.getDate()+1);let i={};switch(e){case"urgent":i={title:"Срочная задача",priority:"срочный",category:"работа"};break;case"today":i={title:"Задача на сегодня",dueDate:n,priority:"высокий"};break;case"personal":i={title:"Личная задача",category:"личное",priority:"средний"};break;case"learning":i={title:"Цель обучения",category:"обучение",estimatedTime:60}}i.title&&(a(i.title),i.priority&&u(i.priority),i.category&&c(i.category),i.dueDate&&m(cf(i.dueDate,"yyyy-MM-dd'T'HH:mm")),i.estimatedTime&&g(i.estimatedTime.toString()))};return Q.jsxs(yh,{children:[Q.jsx(wh,{children:t?Q.jsxs(Q.Fragment,{children:["✏️ Редактировать задачу",Q.jsxs("div",{style:{fontSize:"0.75rem",color:"#666",fontWeight:"normal",marginTop:"0.25rem"},children:['Редактирование: "',t.title.substring(0,30),'..."']})]}):"Добавить новую задачу"}),Q.jsxs("form",{onSubmit:n=>{if(n.preventDefault(),!(()=>{const e={};return r.trim()||(e.title="Название обязательно"),h&&(isNaN(Number(h))||Number(h)<0)&&(e.estimatedTime="Время должно быть положительным числом"),k(e),0===Object.keys(e).length})())return;const a=new Date;let o;p&&(o=new Date(p),isNaN(o.getTime())&&(o=void 0));const u={id:(null==t?void 0:t.id)||ld(),title:r.trim(),description:i.trim(),completed:(null==t?void 0:t.completed)||!1,priority:l,status:d,category:s,dueDate:o,createdAt:(null==t?void 0:t.createdAt)||a,updatedAt:a,tags:v,estimatedTime:h?parseInt(h):void 0,timeSpent:(null==t?void 0:t.timeSpent)||0,subtasks:(null==t?void 0:t.subtasks)||[]};e(u),t||S()},children:[Q.jsxs(Sh,{children:[Q.jsx(Ch,{children:"Название *"}),Q.jsx(Eh,{type:"text",value:r,onChange:e=>a(e.target.value),placeholder:"Что нужно сделать?",autoFocus:!!t}),x.title&&Q.jsx(Oh,{children:x.title})]}),Q.jsxs(Sh,{children:[Q.jsx(Ch,{children:"Описание"}),Q.jsx(zh,{value:i,onChange:e=>o(e.target.value),placeholder:"Добавьте детали, заметки или инструкции...",rows:3})]}),Q.jsxs(xh,{children:[Q.jsxs(kh,{children:[Q.jsx(Ch,{children:"Приоритет"}),Q.jsx(jh,{value:l,onChange:e=>u(e.target.value),children:Ef.map(e=>Q.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),Q.jsxs(kh,{children:[Q.jsx(Ch,{children:"Категория"}),Q.jsx(jh,{value:s,onChange:e=>c(e.target.value),children:zf.map(e=>Q.jsxs("option",{value:e,children:[Pf(e)," ",e.charAt(0).toUpperCase()+e.slice(1)]},e))})]}),Q.jsxs(kh,{children:[Q.jsx(Ch,{children:"Статус"}),Q.jsx(jh,{value:d,onChange:e=>f(e.target.value),children:jf.map(e=>Q.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]}),Q.jsxs(kh,{children:[Q.jsx(Ch,{children:"Срок выполнения"}),Q.jsx(Eh,{type:"datetime-local",value:p,onChange:e=>m(e.target.value)})]}),Q.jsxs(kh,{children:[Q.jsx(Ch,{children:"Оценка времени (минуты)"}),Q.jsx(Eh,{type:"number",value:h,onChange:e=>g(e.target.value),placeholder:"например, 60",min:"0"}),x.estimatedTime&&Q.jsx(Oh,{children:x.estimatedTime})]})]}),Q.jsxs(Sh,{children:[Q.jsx(Ch,{children:"Теги"}),Q.jsxs(Nh,{children:[v.map(e=>Q.jsxs(Ph,{children:[e,Q.jsx(Dh,{type:"button",onClick:()=>{return t=e,void b(v.filter(e=>e!==t));var t},children:"×"})]},e)),Q.jsx(Th,{type:"text",value:y,onChange:e=>w(e.target.value),onKeyDown:e=>{"Enter"===e.key&&y.trim()&&(e.preventDefault(),v.includes(y.trim())||b([...v,y.trim()]),w(""))},placeholder:"Добавить теги (нажмите Enter)"})]})]}),!t&&Q.jsxs(Sh,{children:[Q.jsx(Ch,{children:"Быстрое добавление"}),Q.jsxs(Ih,{children:[Q.jsx(Fh,{type:"button",onClick:()=>C("urgent"),children:"🚨 Срочная задача"}),Q.jsx(Fh,{type:"button",onClick:()=>C("today"),children:"📅 На сегодня"}),Q.jsx(Fh,{type:"button",onClick:()=>C("personal"),children:"🏠 Личная"}),Q.jsx(Fh,{type:"button",onClick:()=>C("learning"),children:"📚 Обучение"})]})]}),Q.jsxs(Mh,{children:[t&&n&&Q.jsx(Lh,{type:"button",onClick:n,children:"❌ Отмена редактирования"}),Q.jsx(_h,{type:"submit",children:t?"💾 Сохранить изменения":"Добавить задачу"})]})]})]})};var Ah={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},$h=$.createContext&&$.createContext(Ah),Wh=function(){return Wh=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Wh.apply(this,arguments)};function Uh(e){return e&&e.map(function(e,t){return $.createElement(e.tag,Wh({key:t},e.attr),Uh(e.child))})}function Hh(e){return function(t){return $.createElement(Bh,Wh({attr:Wh({},e.attr)},t),Uh(e.child))}}function Bh(e){var t=function(t){var n,r=e.attr,a=e.size,i=e.title,o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["attr","size","title"]),l=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),$.createElement("svg",Wh({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:n,style:Wh(Wh({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),i&&$.createElement("title",null,i),e.children)};return void 0!==$h?$.createElement($h.Consumer,null,function(e){return t(e)}):t(Ah)}function Gh(e){return Hh({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"}}]})(e)}function Vh(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"}}]})(e)}function Yh(e){return Hh({attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM96 424c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm0-96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm96-192c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm128 368c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-96c0 4.4-3.6 8-8 8H168c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z"}}]})(e)}function Qh(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"}}]})(e)}function qh(e){return Hh({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"}}]})(e)}function Xh(e){return Hh({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z"}}]})(e)}function Kh(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"}}]})(e)}function Zh(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505.12019,19.09375c-1.18945-5.53125-6.65819-11-12.207-12.1875C460.716,0,435.507,0,410.40747,0,307.17523,0,245.26909,55.20312,199.05238,128H94.83772c-16.34763.01562-35.55658,11.875-42.88664,26.48438L2.51562,253.29688A28.4,28.4,0,0,0,0,264a24.00867,24.00867,0,0,0,24.00582,24H127.81618l-22.47457,22.46875c-11.36521,11.36133-12.99607,32.25781,0,45.25L156.24582,406.625c11.15623,11.1875,32.15619,13.15625,45.27726,0l22.47457-22.46875V488a24.00867,24.00867,0,0,0,24.00581,24,28.55934,28.55934,0,0,0,10.707-2.51562l98.72834-49.39063c14.62888-7.29687,26.50776-26.5,26.50776-42.85937V312.79688c72.59753-46.3125,128.03493-108.40626,128.03493-211.09376C512.07526,76.5,512.07526,51.29688,505.12019,19.09375ZM384.04033,168A40,40,0,1,1,424.05,128,40.02322,40.02322,0,0,1,384.04033,168Z"}}]})(e)}function Jh(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"}}]})(e)}function eg(e){return Hh({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"}}]})(e)}function tg(e){return Hh({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"}}]})(e)}function ng(e,t){if(void 0!==e.one&&1===t)return e.one;const n=t%10,r=t%100;return 1===n&&11!==r?e.singularNominative.replace("{{count}}",String(t)):n>=2&&n<=4&&(r<10||r>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function rg(e){return(t,n)=>(null==n?void 0:n.addSuffix)?n.comparison&&n.comparison>0?e.future?ng(e.future,t):"через "+ng(e.regular,t):e.past?ng(e.past,t):ng(e.regular,t)+" назад":ng(e.regular,t)}const ag={lessThanXSeconds:rg({regular:{one:"меньше секунды",singularNominative:"меньше {{count}} секунды",singularGenitive:"меньше {{count}} секунд",pluralGenitive:"меньше {{count}} секунд"},future:{one:"меньше, чем через секунду",singularNominative:"меньше, чем через {{count}} секунду",singularGenitive:"меньше, чем через {{count}} секунды",pluralGenitive:"меньше, чем через {{count}} секунд"}}),xSeconds:rg({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду назад",singularGenitive:"{{count}} секунды назад",pluralGenitive:"{{count}} секунд назад"},future:{singularNominative:"через {{count}} секунду",singularGenitive:"через {{count}} секунды",pluralGenitive:"через {{count}} секунд"}}),halfAMinute:(e,t)=>(null==t?void 0:t.addSuffix)?t.comparison&&t.comparison>0?"через полминуты":"полминуты назад":"полминуты",lessThanXMinutes:rg({regular:{one:"меньше минуты",singularNominative:"меньше {{count}} минуты",singularGenitive:"меньше {{count}} минут",pluralGenitive:"меньше {{count}} минут"},future:{one:"меньше, чем через минуту",singularNominative:"меньше, чем через {{count}} минуту",singularGenitive:"меньше, чем через {{count}} минуты",pluralGenitive:"меньше, чем через {{count}} минут"}}),xMinutes:rg({regular:{singularNominative:"{{count}} минута",singularGenitive:"{{count}} минуты",pluralGenitive:"{{count}} минут"},past:{singularNominative:"{{count}} минуту назад",singularGenitive:"{{count}} минуты назад",pluralGenitive:"{{count}} минут назад"},future:{singularNominative:"через {{count}} минуту",singularGenitive:"через {{count}} минуты",pluralGenitive:"через {{count}} минут"}}),aboutXHours:rg({regular:{singularNominative:"около {{count}} часа",singularGenitive:"около {{count}} часов",pluralGenitive:"около {{count}} часов"},future:{singularNominative:"приблизительно через {{count}} час",singularGenitive:"приблизительно через {{count}} часа",pluralGenitive:"приблизительно через {{count}} часов"}}),xHours:rg({regular:{singularNominative:"{{count}} час",singularGenitive:"{{count}} часа",pluralGenitive:"{{count}} часов"}}),xDays:rg({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} дней"}}),aboutXWeeks:rg({regular:{singularNominative:"около {{count}} недели",singularGenitive:"около {{count}} недель",pluralGenitive:"около {{count}} недель"},future:{singularNominative:"приблизительно через {{count}} неделю",singularGenitive:"приблизительно через {{count}} недели",pluralGenitive:"приблизительно через {{count}} недель"}}),xWeeks:rg({regular:{singularNominative:"{{count}} неделя",singularGenitive:"{{count}} недели",pluralGenitive:"{{count}} недель"}}),aboutXMonths:rg({regular:{singularNominative:"около {{count}} месяца",singularGenitive:"около {{count}} месяцев",pluralGenitive:"около {{count}} месяцев"},future:{singularNominative:"приблизительно через {{count}} месяц",singularGenitive:"приблизительно через {{count}} месяца",pluralGenitive:"приблизительно через {{count}} месяцев"}}),xMonths:rg({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяца",pluralGenitive:"{{count}} месяцев"}}),aboutXYears:rg({regular:{singularNominative:"около {{count}} года",singularGenitive:"около {{count}} лет",pluralGenitive:"около {{count}} лет"},future:{singularNominative:"приблизительно через {{count}} год",singularGenitive:"приблизительно через {{count}} года",pluralGenitive:"приблизительно через {{count}} лет"}}),xYears:rg({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} года",pluralGenitive:"{{count}} лет"}}),overXYears:rg({regular:{singularNominative:"больше {{count}} года",singularGenitive:"больше {{count}} лет",pluralGenitive:"больше {{count}} лет"},future:{singularNominative:"больше, чем через {{count}} год",singularGenitive:"больше, чем через {{count}} года",pluralGenitive:"больше, чем через {{count}} лет"}}),almostXYears:rg({regular:{singularNominative:"почти {{count}} год",singularGenitive:"почти {{count}} года",pluralGenitive:"почти {{count}} лет"},future:{singularNominative:"почти через {{count}} год",singularGenitive:"почти через {{count}} года",pluralGenitive:"почти через {{count}} лет"}})},ig={date:Pd({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:Pd({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:Pd({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})},og=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function lg(e){const t=og[e];return 2===e?"'во "+t+" в' p":"'в "+t+" в' p"}const ug={lastWeek:(e,t,n)=>{const r=e.getDay();return mf(e,t,n)?lg(r):function(e){const t=og[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,n)=>{const r=e.getDay();return mf(e,t,n)?lg(r):function(e){const t=og[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}(r)},other:"P"},sg={code:"ru",formatDistance:(e,t,n)=>ag[e](t,n),formatLong:ig,formatRelative:(e,t,n,r)=>{const a=ug[e];return"function"==typeof a?a(t,n,r):a},localize:{ordinalNumber:(e,t)=>{const n=Number(e),r=null==t?void 0:t.unit;let a;return a="date"===r?"-е":"week"===r||"minute"===r||"second"===r?"-я":"-й",n+a},era:Md({values:{narrow:["до н.э.","н.э."],abbreviated:["до н. э.","н. э."],wide:["до нашей эры","нашей эры"]},defaultWidth:"wide"}),quarter:Md({values:{narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},defaultWidth:"wide",argumentCallback:e=>e-1}),month:Md({values:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],wide:["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},defaultWidth:"wide",formattingValues:{narrow:["Я","Ф","М","А","М","И","И","А","С","О","Н","Д"],abbreviated:["янв.","фев.","мар.","апр.","мая","июн.","июл.","авг.","сент.","окт.","нояб.","дек."],wide:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]},defaultFormattingWidth:"wide"}),day:Md({values:{narrow:["В","П","В","С","Ч","П","С"],short:["вс","пн","вт","ср","чт","пт","сб"],abbreviated:["вск","пнд","втр","срд","чтв","птн","суб"],wide:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]},defaultWidth:"wide"}),dayPeriod:Md({values:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утро",afternoon:"день",evening:"веч.",night:"ночь"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утро",afternoon:"день",evening:"вечер",night:"ночь"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},abbreviated:{am:"ДП",pm:"ПП",midnight:"полн.",noon:"полд.",morning:"утра",afternoon:"дня",evening:"веч.",night:"ночи"},wide:{am:"ДП",pm:"ПП",midnight:"полночь",noon:"полдень",morning:"утра",afternoon:"дня",evening:"вечера",night:"ночи"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:Ld({matchPattern:/^(\d+)(-?(е|я|й|ое|ье|ая|ья|ый|ой|ий|ый))?/i,parsePattern:/\d+/i,valueCallback:e=>parseInt(e,10)}),era:_d({matchPatterns:{narrow:/^((до )?н\.?\s?э\.?)/i,abbreviated:/^((до )?н\.?\s?э\.?)/i,wide:/^(до нашей эры|нашей эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:_d({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыои]?й?)? кв.?/i,wide:/^[1234](-?[ыои]?й?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:e=>e+1}),month:_d({matchPatterns:{narrow:/^[яфмаисонд]/i,abbreviated:/^(янв|фев|март?|апр|ма[йя]|июн[ья]?|июл[ья]?|авг|сент?|окт|нояб?|дек)\.?/i,wide:/^(январ[ья]|феврал[ья]|марта?|апрел[ья]|ма[йя]|июн[ья]|июл[ья]|августа?|сентябр[ья]|октябр[ья]|октябр[ья]|ноябр[ья]|декабр[ья])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^я/i,/^ф/i,/^м/i,/^а/i,/^м/i,/^и/i,/^и/i,/^а/i,/^с/i,/^о/i,/^н/i,/^я/i],any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^ав/i,/^с/i,/^о/i,/^н/i,/^д/i]},defaultParseWidth:"any"}),day:_d({matchPatterns:{narrow:/^[впсч]/i,short:/^(вс|во|пн|по|вт|ср|чт|че|пт|пя|сб|су)\.?/i,abbreviated:/^(вск|вос|пнд|пон|втр|вто|срд|сре|чтв|чет|птн|пят|суб).?/i,wide:/^(воскресень[ея]|понедельника?|вторника?|сред[аы]|четверга?|пятниц[аы]|суббот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^в/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^в[ос]/i,/^п[он]/i,/^в/i,/^ср/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:_d({matchPatterns:{narrow:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,abbreviated:/^([дп]п|полн\.?|полд\.?|утр[оа]|день|дня|веч\.?|ноч[ьи])/i,wide:/^([дп]п|полночь|полдень|утр[оа]|день|дня|вечера?|ноч[ьи])/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^полн/i,noon:/^полд/i,morning:/^у/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}},cg=e=>{if(!e)return"Без срока";try{const t="string"==typeof e?gf(e):e;return function(e){return Sd(e,kd(e))}(t)?`Сегодня, ${cf(t,"HH:mm")}`:hf(t)?`Завтра, ${cf(t,"HH:mm")}`:cf(t,"d MMMM yyyy",{locale:sg})}catch(t){return"Неверная дата"}},dg=e=>{if(!e)return"";try{return ff("string"==typeof e?gf(e):e,{addSuffix:!0,locale:sg})}catch(t){return""}},fg=vh.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${e=>e.priority};
  opacity: ${e=>e.completed?.7:1};
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #333;
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      transform: translateY(-2px);
    }
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem;
    border-left: 4px solid ${e=>e.priority};
    border-radius: 12px;
    margin-bottom: 0.75rem;
  }
`,pg=vh.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0.75rem;
    gap: 1rem;
  }
`,mg=vh.div`
  font-size: 1rem;
  font-weight: 600;
  flex: 1;
  word-break: break-word;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: ${e=>e.completed?"#999":"#333"};
  }
  
  .dark-theme & {
    color: ${e=>e.completed?"#888":"#e0e0e0"};
  }
  
  text-decoration: ${e=>e.completed?"line-through":"none"};
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,hg=vh.div`
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`,gg=vh.button`
  border: 1px solid;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  min-width: 28px;
  min-height: 28px;
  
  .light-theme & {
    background: #fafafa;
    border-color: #e0e0e0;
    color: #666;
    
    &:hover {
      background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
      color: #667eea;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
    }
  }
  
  .dark-theme & {
    background: #2a2d3e;
    border-color: #444;
    color: #b0b0d0;
    
    &:hover {
      background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
      color: #ffffff;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem;
    min-width: 36px;
    min-height: 36px;
  }
`,vg=vh.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.625rem;
  
  .light-theme & {
    color: #666;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`,bg=vh.div`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${e=>e.color||""};
  font-size: 0.625rem;
  transition: color 0.3s ease;
  
  .dark-theme &:not([style*="color"]) {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    gap: 0.25rem;
  }
`,yg=vh.div`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  word-break: break-word;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: ${e=>e.completed?"#999":"#666"};
  }
  
  .dark-theme & {
    color: ${e=>e.completed?"#888":"#ccc"};
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }
`,wg=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid;
  transition: border-color 0.3s ease;
  
  .light-theme & {
    border-top-color: #eee;
  }
  
  .dark-theme & {
    border-top-color: #444;
  }
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
`,xg=vh.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: center;
`,kg=vh.span`
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  font-size: 0.5625rem;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: #e9ecef;
    color: #495057;
  }
  
  .dark-theme & {
    background: #2d2d2d;
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
    font-size: 0.6875rem;
  }
`,Sg=vh.div`
  font-size: 0.625rem;
  transition: color 0.3s ease;
  text-align: right;
  
  .light-theme & {
    color: #999;
  }
  
  .dark-theme & {
    color: #888;
  }
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`,Cg=vh.span`
  background: ${e=>e.color}15;
  color: ${e=>e.color};
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  font-size: 0.5625rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (min-width: 768px) {
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
    font-size: 0.6875rem;
  }
`,Eg=vh.span`
  font-size: 0.75rem;
  margin-right: 0.125rem;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }
`,zg=({task:e,onToggleComplete:t,onDelete:n,onEdit:r})=>{const[a,i]=A.useState(!1),o=Nf(e.priority),l={"ожидает":"#FF9800","в работе":"#2196F3","выполнено":"#4CAF50","отменено":"#9E9E9E"}[e.status];const u=Pf(e.category),s=((e,t)=>{if(!e||t)return!1;try{return("string"==typeof e?gf(e):e)<new Date}catch(n){return!1}})(e.dueDate,e.completed);return Q.jsxs(fg,{completed:e.completed,priority:o,onClick:()=>{e.description&&e.description.length>100&&i(!a)},children:[Q.jsxs(pg,{children:[Q.jsx(mg,{completed:e.completed,children:e.title}),Q.jsxs(hg,{children:[Q.jsx(gg,{onClick:n=>{n.stopPropagation(),t(e.id)},title:e.completed?"Отметить как невыполненную":"Отметить как выполненную","aria-label":e.completed?"Отметить как невыполненную":"Отметить как выполненную",children:Q.jsx(Vh,{color:e.completed?"#4CAF50":"#999"})}),Q.jsx(gg,{onClick:t=>{t.stopPropagation(),r(e)},title:"Редактировать задачу","aria-label":"Редактировать задачу",children:Q.jsx(qh,{color:"#2196F3"})}),Q.jsx(gg,{onClick:t=>{t.stopPropagation(),window.confirm("Вы уверены, что хотите удалить эту задачу?")&&n(e.id)},title:"Удалить задачу","aria-label":"Удалить задачу",children:Q.jsx(tg,{color:"#F44336"})})]})]}),Q.jsxs(vg,{children:[Q.jsxs(bg,{title:`Категория: ${e.category}`,children:[Q.jsx(Eg,{children:u}),Q.jsx("span",{style:{fontSize:"0.75rem"},children:e.category})]}),Q.jsxs(bg,{color:o,title:`Приоритет: ${e.priority}`,children:[Q.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:o,marginRight:"4px"}}),Q.jsx("span",{style:{fontSize:"0.75rem"},children:e.priority})]}),Q.jsx(Cg,{color:l,title:`Статус: ${e.status}`,children:e.status}),e.estimatedTime&&Q.jsxs(bg,{title:`Оценка времени: ${e.estimatedTime} минут`,children:[Q.jsx(Qh,{size:10}),Q.jsxs("span",{style:{fontSize:"0.75rem",marginLeft:"2px"},children:[e.estimatedTime," мин"]})]}),e.dueDate&&Q.jsxs(bg,{color:s&&!e.completed?"#F44336":"#666",title:`Срок: ${cg(e.dueDate)}`,children:[Q.jsx(Gh,{size:10}),Q.jsxs("span",{style:{fontSize:"0.75rem",marginLeft:"2px",whiteSpace:"nowrap"},children:[cg(e.dueDate).split(",")[0],s&&!e.completed&&" ⚠️"]})]})]}),e.description&&Q.jsxs(yg,{completed:e.completed,children:[a||e.description.length<=100?e.description:`${e.description.substring(0,100)}...`,e.description.length>100&&Q.jsx("span",{style:{color:"#667eea",cursor:"pointer",marginLeft:"0.5rem",fontSize:"0.75rem",fontWeight:"500"},children:a?"Скрыть":"Показать больше"})]}),Q.jsxs(wg,{children:[Q.jsx("div",{children:e.tags.length>0&&Q.jsxs(xg,{children:[Q.jsx(eg,{style:{color:"#999",fontSize:"0.75rem"}}),e.tags.slice(0,3).map(e=>Q.jsx(kg,{children:e},e)),e.tags.length>3&&Q.jsxs(kg,{title:e.tags.slice(3).join(", "),children:["+",e.tags.length-3]})]})}),Q.jsx(Sg,{title:`Создано: ${dg(e.createdAt)}`,children:dg(e.createdAt)})]})]})},jg=vh.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #666;
  }
  
  .dark-theme & {
    color: #aaa;
  }
`,Ng=vh.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  transition: opacity 0.3s ease;
  
  .light-theme & {
    opacity: 0.3;
  }
  
  .dark-theme & {
    opacity: 0.5;
  }
`,Pg=vh.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
`,Dg=vh.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 400px;
  line-height: 1.5;
  transition: color 0.3s ease;
  
  .dark-theme & {
    color: #ccc;
  }
`,Tg=vh.ul`
  text-align: left;
  max-width: 400px;
  margin: 1rem auto;
  padding-left: 1.5rem;
  transition: color 0.3s ease;
  
  .dark-theme & {
    color: #ccc;
  }
`,Mg=vh.li`
  margin-bottom: 0.5rem;
  line-height: 1.4;
  transition: color 0.3s ease;
  
  .dark-theme & {
    color: #ccc;
  }
`,_g=({type:e,suggestions:t=[]})=>"all"===e?Q.jsxs(jg,{children:[Q.jsx(Ng,{children:Q.jsx(Yh,{})}),Q.jsx(Pg,{children:"Задач пока нет"}),Q.jsx(Dg,{children:"Начните с добавления первой задачи. Разбивайте большие проекты на небольшие, управляемые задачи."}),t.length>0&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"1.5rem"},children:[Q.jsx(Xh,{color:"#FFC107"}),Q.jsx("strong",{children:"Умные подсказки:"})]}),Q.jsx(Tg,{children:t.map((e,t)=>Q.jsx(Mg,{children:e},t))})]})]}):Q.jsxs(jg,{children:[Q.jsx(Ng,{children:Q.jsx(Yh,{})}),Q.jsx(Pg,{children:"Задачи не найдены"}),Q.jsx(Dg,{children:"Попробуйте изменить фильтры или условия поиска."})]}),Lg=vh.div``,Og=vh.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`,Ig=vh.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
`,Fg=vh.span`
  font-size: 0.875rem;
  background: #f5f5f5;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  .light-theme & {
    color: #666;
    background: #f5f5f5;
  }
  
  .dark-theme & {
    color: #ccc;
    background: #2d2d2d;
  }
`,Rg=vh.div`
  min-height: 400px;
`,Ag=vh.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1rem;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #666;
  }
  
  .dark-theme & {
    color: #aaa;
  }
`,$g=vh.div`
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  text-align: center;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: #f8f9fa;
    color: #666;
  }
  
  .dark-theme & {
    background: #2d2d2d;
    color: #ccc;
  }
`,Wg=({tasks:e,loading:t=!1,onToggleComplete:n,onDelete:r,onEdit:a,title:i="Задачи",showEmptyState:o=!0,emptyStateType:l="all"})=>{const u=Df(e);if(t)return Q.jsx(Ag,{children:"Загрузка задач..."});if(0===e.length&&o)return Q.jsx(_g,{type:l,suggestions:"all"===l?u:[]});const s=e.filter(e=>e.completed).length,c=e.length-s;return Q.jsxs(Lg,{children:[Q.jsxs(Og,{children:[Q.jsx(Ig,{children:i}),Q.jsxs(Fg,{children:[e.length," задач",1!==e.length?"":"а",s>0&&` (${s} выполнено)`]})]}),Q.jsx(Rg,{children:e.map(e=>Q.jsx(zg,{task:e,onToggleComplete:n,onDelete:r,onEdit:a},e.id))}),e.length>0&&Q.jsx($g,{children:c>0?Q.jsxs("span",{children:["Осталось ",c," задач",1!==c?"":"а"]}):Q.jsx("span",{children:"Все задачи выполнены! 🎉"})})]})},Ug=vh.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  overflow: visible;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 11px;
  }
  
  @media (min-width: 414px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    border-radius: 14px;
    margin-bottom: 1.5rem;
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
  }
`,Hg=vh.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,Bg=vh.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`,Gg=vh.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
  margin-bottom: 1rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`,Vg=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`,Yg=vh.label`
  font-size: 0.8125rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,Qg=vh.select`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    option {
      background-color: white;
      color: #333;
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
    
    option {
      background-color: #2d2d2d;
      color: #e0e0e0;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
`,qg=vh.input`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    &::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
`,Xg=vh.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid;
  width: 100%;
  transition: border-color 0.3s ease;
  
  .light-theme & {
    border-top-color: #eee;
  }
  
  .dark-theme & {
    border-top-color: #444;
  }
`,Kg=vh.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`,Zg=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    justify-content: flex-end;
    gap: 1.5rem;
  }
`,Jg=vh(Qg)`
  width: 100%;
  
  @media (min-width: 1024px) {
    width: auto;
    min-width: 200px;
    margin-right: auto;
  }
`,ev=vh.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,tv=vh.input`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  
  .light-theme & {
    border: 2px solid #ddd;
    background-color: white;
    
    &:checked {
      background-color: #667eea;
      border-color: #667eea;
    }
    
    &:checked:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
  
  .dark-theme & {
    border: 2px solid #666;
    background-color: #2d2d2d;
    
    &:checked {
      background-color: #8a9eff;
      border-color: #8a9eff;
    }
    
    &:checked:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
  
  @media (min-width: 768px) {
    width: 1.125rem;
    height: 1.125rem;
    
    &:checked:after {
      font-size: 0.875rem;
    }
  }
`,nv=vh.button`
  padding: 0.625rem 1.5rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(90, 111, 216, 0.4);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 480px) {
    width: auto;
  }
  
  @media (min-width: 1024px) {
    padding: 0.75rem 2rem;
    min-width: 160px;
    margin-left: auto;
  }
`,rv=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1.25rem;
  }
  
  @media (min-width: 640px) {
    width: auto;
  }
`,av=vh.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 1.5rem;
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1.5rem;
  }
`,iv=({filters:e,onFiltersChange:t,sortBy:n,onSortChange:r})=>{const a=(n,r)=>{t({...e,[n]:r})};return Q.jsxs(Ug,{children:[Q.jsx(Hg,{children:Q.jsx(Bg,{children:"Фильтры и сортировка"})}),Q.jsxs(Gg,{children:[Q.jsxs(Vg,{children:[Q.jsx(Yg,{children:"Статус"}),Q.jsxs(Qg,{value:e.status,onChange:e=>a("status",e.target.value),children:[Q.jsx("option",{value:"все",children:"Все статусы"}),jf.map(e=>Q.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]})]}),Q.jsxs(Vg,{children:[Q.jsx(Yg,{children:"Приоритет"}),Q.jsxs(Qg,{value:e.priority,onChange:e=>a("priority",e.target.value),children:[Q.jsx("option",{value:"все",children:"Все приоритеты"}),Ef.map(e=>Q.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]})]}),Q.jsxs(Vg,{children:[Q.jsx(Yg,{children:"Категория"}),Q.jsxs(Qg,{value:e.category,onChange:e=>a("category",e.target.value),children:[Q.jsx("option",{value:"все",children:"Все категории"}),zf.map(e=>Q.jsx("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]})]}),Q.jsxs(Vg,{children:[Q.jsx(Yg,{children:"Поиск"}),Q.jsx(qg,{type:"text",placeholder:"Поиск задач...",value:e.search,onChange:e=>a("search",e.target.value)})]})]}),Q.jsxs(Xg,{children:[Q.jsx(Kg,{children:Q.jsxs(rv,{children:[Q.jsxs(ev,{children:[Q.jsx(tv,{type:"checkbox",checked:e.showCompleted,onChange:e=>a("showCompleted",e.target.checked)}),"Показывать выполненные"]}),Q.jsxs(ev,{children:[Q.jsx(tv,{type:"checkbox",checked:e.showOverdue,onChange:e=>a("showOverdue",e.target.checked)}),"Только просроченные"]})]})}),Q.jsx(Zg,{children:Q.jsxs(av,{children:[Q.jsxs(Jg,{value:n,onChange:e=>r(e.target.value),children:[Q.jsx("option",{value:"default",children:"Сортировка: По умолчанию"}),Q.jsx("option",{value:"priority",children:"Сортировка: По приоритету"}),Q.jsx("option",{value:"dueDate",children:"Сортировка: По сроку"}),Q.jsx("option",{value:"createdAt",children:"Сортировка: По дате создания"})]}),Q.jsx(nv,{onClick:()=>{t({status:"все",priority:"все",category:"все",search:"",showCompleted:!0,showOverdue:!1})},children:"Сбросить фильтры"})]})})]})]})},ov=vh.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    border: 1px solid #3a3a4a;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    
    .light-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
  }
`,lv=vh.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1rem;
  color: white;
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`,uv=vh.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`,sv=vh.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) and (max-width: 1022px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`,cv=vh.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70px;
  
  @media (min-width: 768px) {
    padding: 1rem;
    min-height: 80px;
  }
  
  @media (min-width: 1024px) {
    min-height: 85px;
  }
`,dv=vh.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`,fv=vh.div`
  font-size: 0.625rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.9);
  
  @media (min-width: 768px) {
    font-size: 0.6875rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.75rem;
    white-space: nowrap;
  }
`,pv=vh.div`
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`,mv=vh.div`
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  opacity: 0.9;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
`,hv=vh.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.375rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  
  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`,gv=vh.div`
  background: ${e=>e.color};
  border-radius: 6px;
  padding: 0.375rem 0.25rem;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 0.6875rem;
    padding: 0.5rem 0.25rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`,vv=vh.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.375rem;
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: white;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    gap: 0.5rem;
  }
`,bv=vh.span`
  color: #FFC107;
  flex-shrink: 0;
  margin-top: 0.125rem;
  font-size: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,yv=vh.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white !important; /* Всегда белый текст */
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`,wv=({tasks:e,stats:t})=>{const n=Df(e),r=t.total>0?Math.round(t.completed/t.total*100):0;return Q.jsxs(ov,{children:[Q.jsxs(lv,{children:[Q.jsx(uv,{children:"Статистика задач"}),Q.jsxs("div",{style:{fontSize:"0.875rem",opacity:.9,color:"white"},children:[r,"% выполнено"]})]}),Q.jsxs(sv,{children:[Q.jsxs(cv,{children:[Q.jsx(dv,{children:t.total}),Q.jsx(fv,{children:"Всего задач"})]}),Q.jsxs(cv,{children:[Q.jsx(dv,{children:t.completed}),Q.jsx(fv,{children:"Выполнено"})]}),Q.jsxs(cv,{children:[Q.jsx(dv,{children:t.inProgress}),Q.jsx(fv,{children:"В работе"})]}),Q.jsxs(cv,{children:[Q.jsx(dv,{children:t.overdue}),Q.jsx(fv,{children:"Просрочено"})]})]}),Q.jsxs(pv,{children:[Q.jsx(mv,{children:"Распределение по приоритетам"}),Q.jsx(hv,{children:Object.entries(t.byPriority).map(([e,t])=>Q.jsxs(gv,{color:Nf(e),title:`${t} ${e}`,children:[t," ",e]},e))})]}),n.length>0&&Q.jsxs("div",{style:{marginTop:"1.5rem"},children:[Q.jsxs(yv,{children:[Q.jsx(Xh,{}),Q.jsx("span",{children:"Умные подсказки"})]}),n.map((e,t)=>Q.jsxs(vv,{children:[Q.jsx(bv,{children:Q.jsx(Xh,{})}),Q.jsx("span",{children:e})]},t))]})]})},xv=vh.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  position: relative;
  transition: background 0.3s ease;
  
  &.light-theme {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    
    &:before {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    }
  }
  
  &.dark-theme {
    background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
    
    &:before {
      background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
    }
  }
  
  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    transition: background 0.3s ease;
  }
`,kv=vh.main`
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem;
  width: 100%;
  
  @media (min-width: 375px) { padding: 1rem 1.25rem; }
  @media (min-width: 414px) { padding: 1.25rem 1.5rem; }
  @media (min-width: 768px) { padding: 1.5rem 2rem; }
  @media (min-width: 1024px) { 
    max-width: 1200px;
    padding: 2rem 2.5rem;
  }
  @media (min-width: 1440px) { 
    max-width: 1400px;
    padding: 2rem 3rem;
  }
  @media (min-width: 1920px) { 
    max-width: 1800px;
    padding: 3rem 4rem;
  }
`,Sv=vh.header`
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
  
  @media (min-width: 768px) { margin-bottom: 2rem; }
  @media (min-width: 1024px) { margin-bottom: 3rem; }
`,Cv=vh.h1`
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0 0.25rem;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  @media (min-width: 375px) { font-size: 1.625rem; }
  @media (min-width: 414px) { 
    font-size: 1.75rem;
    padding: 0;
  }
  @media (min-width: 768px) { 
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
  }
  @media (min-width: 1024px) { font-size: 2.75rem; }
  @media (min-width: 1440px) { 
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`,Ev=vh.p`
  font-size: 0.9375rem;
  margin: 0 auto 1rem;
  line-height: 1.5;
  font-weight: 400;
  padding: 0 0.25rem;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 375px) { font-size: 1rem; }
  @media (min-width: 414px) { 
    font-size: 1.0625rem;
    padding: 0;
    line-height: 1.6;
  }
  @media (min-width: 768px) { 
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
  @media (min-width: 1024px) { 
    font-size: 1.25rem;
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 800px;
  }
`,zv=vh.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  width: 100%;
  
  @media (min-width: 768px) { gap: 1.5rem; }
  @media (min-width: 1024px) { 
    grid-template-columns: 1fr 350px;
    gap: 2rem;
  }
  @media (min-width: 1440px) { 
    grid-template-columns: 1fr 380px;
    gap: 2.5rem;
  }
`,jv=vh.div`
  width: 100%;
  overflow: hidden;
`,Nv=vh.div`
  width: 100%;
  overflow: hidden;
  
  @media (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
`,Pv=vh.section`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (max-width: 374px) {
    padding: 0.875rem;
    border-radius: 8px;
  }
  @media (min-width: 375px) {
    padding: 1rem;
    border-radius: 10px;
  }
  @media (min-width: 414px) {
    padding: 1.125rem;
    border-radius: 11px;
  }
  @media (min-width: 768px) {
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 1024px) {
    padding: 1.5rem;
    border-radius: 14px;
    
    .light-theme & {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }
  }
  @media (min-width: 1440px) {
    padding: 1.75rem;
    border-radius: 16px;
    
    .light-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
    }
  }
`,Dv=vh.footer`
  text-align: center;
  padding: 1.5rem 0;
  font-size: 0.8125rem;
  margin-top: 2rem;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    color: #666;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    color: #aaa;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  @media (min-width: 768px) {
    padding: 2rem 0;
    margin-top: 3rem;
    font-size: 0.875rem;
  }
  
  @media (min-width: 1024px) {
    padding: 3rem 0;
    margin-top: 4rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }
`,Tv=vh.p`
  margin: 0.5rem 0;
  line-height: 1.5;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
  
  .dark-theme & {
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    margin: 0.75rem 0;
    line-height: 1.6;
    padding: 0;
  }
  
  &:first-child {
    margin-top: 0;
  }
`,Mv=vh.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0 0.25rem;
  
  @media (min-width: 414px) {
    gap: 0.75rem;
    padding: 0;
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
    margin: 1.5rem 0;
  }
`,_v=vh.span`
  padding: 0.375rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(102, 126, 234, 0.2);
  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.1);
  transition: all 0.3s ease;
  white-space: nowrap;
  
  .light-theme & {
    background: white;
    color: #667eea;
  }
  
  .dark-theme & {
    background: #2d2d3d;
    color: #8a9eff;
    border-color: rgba(138, 158, 255, 0.3);
    box-shadow: 0 2px 6px rgba(138, 158, 255, 0.2);
  }
  
  @media (min-width: 414px) {
    padding: 0.5rem 1rem;
    font-size: 0.8125rem;
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.875rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.2);
      background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(138, 158, 255, 0.3);
      background: linear-gradient(135deg, #8a9eff20 0%, #a366c920 100%);
    }
  }
`,Lv=vh.div`
  height: 2px;
  width: 60px;
  border-radius: 2px;
  margin: 0.5rem auto;
  opacity: 0.7;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
  }
  
  @media (min-width: 768px) {
    height: 3px;
    width: 80px;
    margin: 0.75rem auto;
  }
  
  @media (min-width: 1024px) {
    height: 4px;
    width: 100px;
    margin: 1rem auto;
  }
`,Ov=[{id:ld(),title:"Спланировать архитектуру проекта",description:"Разработать общую структуру и выбрать подходящие технологии",completed:!0,priority:"высокий",status:"выполнено",category:"работа",dueDate:new Date("2024-01-15"),createdAt:new Date("2024-01-10"),updatedAt:new Date("2024-01-12"),tags:["планирование","архитектура"],estimatedTime:120,timeSpent:135},{id:ld(),title:"Реализовать систему аутентификации",description:"Создать безопасный вход и регистрацию с JWT токенами",completed:!1,priority:"срочный",status:"в работе",category:"работа",dueDate:new Date("2024-01-20"),createdAt:new Date("2024-01-12"),updatedAt:new Date("2024-01-14"),tags:["безопасность","бэкенд"],estimatedTime:180},{id:ld(),title:"Утренняя тренировка",description:"30 минут кардио и силовых упражнений",completed:!1,priority:"средний",status:"ожидает",category:"здоровье",dueDate:new Date("2024-01-16T08:00:00"),createdAt:new Date("2024-01-14"),updatedAt:new Date("2024-01-14"),tags:["фитнес","рутина"]},{id:ld(),title:"Изучить продвинутые паттерны React",description:"Изучить оптимизацию хуков, Context API и методы повышения производительности",completed:!1,priority:"высокий",status:"ожидает",category:"обучение",dueDate:new Date("2024-01-25"),createdAt:new Date("2024-01-13"),updatedAt:new Date("2024-01-13"),tags:["react","обучение"],estimatedTime:240},{id:ld(),title:"Покупка продуктов",description:"Купить овощи, фрукты и предметы домашнего обихода",completed:!0,priority:"низкий",status:"выполнено",category:"личное",dueDate:new Date("2024-01-14"),createdAt:new Date("2024-01-13"),updatedAt:new Date("2024-01-14"),tags:["покупки","поручения"]}],Iv={status:"все",priority:"все",category:"все",search:"",showCompleted:!0,showOverdue:!1},Fv=()=>{const[e,t]=function(e,t){const[n,r]=A.useState(()=>{try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(n){return t}});return A.useEffect(()=>{try{window.localStorage.setItem(e,JSON.stringify(n))}catch(t){}},[e,n]),[n,e=>{try{const t=e instanceof Function?e(n):e;r(t)}catch(t){}}]}("smart-task-manager-tasks",Ov),[n,r]=A.useState(Iv),[a,i]=A.useState("default"),[o,l]=A.useState(null),{theme:u,toggleTheme:s,isDark:c}=(()=>{const e=A.useContext(Tf);if(!e)throw new Error("useTheme must be used within a ThemeProvider");return e})(),{updateAvailable:d,updateApp:f}=function(){const[e,t]=A.useState(!1),[n,r]=A.useState(null);return A.useEffect(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{r(e),e.addEventListener("updatefound",()=>{const n=e.installing;n&&n.addEventListener("statechange",()=>{"installed"===n.state&&navigator.serviceWorker.controller&&t(!0)})}),e.waiting&&t(!0)})},[]),{updateAvailable:e,updateApp:()=>{var t,r;n&&e&&(null==(t=n.waiting)||t.postMessage({type:"SKIP_WAITING"}),null==(r=n.waiting)||r.addEventListener("statechange",e=>{"activated"===e.target.state&&window.location.reload()}))}}}(),p=function(e,t){const[n,r]=A.useState(e);return A.useEffect(()=>{const n=setTimeout(()=>{r(e)},t);return()=>{clearTimeout(n)}},[e,t]),n}(n.search,300),m={...n,search:p},h=((e,t)=>e.filter(e=>{var n;if(!t.showCompleted&&e.completed)return!1;if("все"!==t.status&&e.status!==t.status)return!1;if("все"!==t.priority&&e.priority!==t.priority)return!1;if("все"!==t.category&&e.category!==t.category)return!1;if(t.search){const r=t.search.toLowerCase(),a=e.title.toLowerCase().includes(r),i=(null==(n=e.description)?void 0:n.toLowerCase().includes(r))||!1,o=e.tags.some(e=>e.toLowerCase().includes(r));if(!a&&!i&&!o)return!1}return!(t.showOverdue&&e.dueDate&&(!pf("string"==typeof e.dueDate?gf(e.dueDate):e.dueDate,new Date)||e.completed))}))(e,m),g=((e,t)=>{const n=[...e];switch(t){case"priority":{const e={"срочный":0,"высокий":1,"средний":2,"низкий":3};n.sort((t,n)=>e[t.priority]-e[n.priority]);break}case"dueDate":n.sort((e,t)=>{if(!e.dueDate)return 1;if(!t.dueDate)return-1;const n="string"==typeof e.dueDate?gf(e.dueDate):e.dueDate,r="string"==typeof t.dueDate?gf(t.dueDate):t.dueDate;return n.getTime()-r.getTime()});break;case"createdAt":n.sort((e,t)=>{const n="string"==typeof e.createdAt?gf(e.createdAt):e.createdAt;return("string"==typeof t.createdAt?gf(t.createdAt):t.createdAt).getTime()-n.getTime()});break;default:{const e={"срочный":0,"высокий":1,"средний":2,"низкий":3};n.sort((t,n)=>t.completed!==n.completed?t.completed?1:-1:e[t.priority]-e[n.priority]);break}}return n})(h,a),v=(e=>{const t=new Date;return{total:e.length,completed:e.filter(e=>e.completed).length,pending:e.filter(e=>"ожидает"===e.status).length,inProgress:e.filter(e=>"в работе"===e.status).length,overdue:e.filter(e=>!(!e.dueDate||e.completed)&&pf("string"==typeof e.dueDate?gf(e.dueDate):e.dueDate,t)).length,byPriority:{"низкий":e.filter(e=>"низкий"===e.priority).length,"средний":e.filter(e=>"средний"===e.priority).length,"высокий":e.filter(e=>"высокий"===e.priority).length,"срочный":e.filter(e=>"срочный"===e.priority).length},byCategory:{"работа":e.filter(e=>"работа"===e.category).length,"личное":e.filter(e=>"личное"===e.category).length,"здоровье":e.filter(e=>"здоровье"===e.category).length,"обучение":e.filter(e=>"обучение"===e.category).length,"другое":e.filter(e=>"другое"===e.category).length}}})(e);A.useEffect(()=>{const t=e.filter(e=>!e.completed).length;document.title="Умный менеджер задач "+(t>0?`(${t})`:"");const n=document.querySelector('meta[name="theme-color"]');n&&n.setAttribute("content",c?"#121212":"#667eea")},[e,c]);const b=e=>{o?(t(t=>t.map(t=>t.id===e.id?e:t)),l(null)):t(t=>[e,...t])};return Q.jsxs(xv,{className:c?"dark-theme":"light-theme",children:[Q.jsxs(kv,{children:[Q.jsxs(Sv,{children:[Q.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem",flexWrap:"wrap",gap:"1rem"},children:[Q.jsxs("div",{style:{flex:1,minWidth:"200px"},children:[Q.jsx(Cv,{children:"Умный менеджер задач"}),d&&Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginTop:"0.5rem",padding:"0.25rem 0.75rem",background:"linear-gradient(135deg, #FF9800 0%, #FF5722 100%)",color:"white",borderRadius:"20px",fontSize:"0.75rem",fontWeight:"600",width:"fit-content",cursor:"pointer",transition:"transform 0.2s"},onClick:f,onMouseOver:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseOut:e=>{e.currentTarget.style.transform="scale(1)"},children:[Q.jsx(Zh,{}),Q.jsx("span",{children:"Доступно обновление!"})]})]}),Q.jsx("button",{onClick:s,style:{background:c?"linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:c?"#b0b0d0":"white",border:"none",borderRadius:"50%",width:"44px",height:"44px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",boxShadow:c?"0 4px 12px rgba(42, 45, 62, 0.3)":"0 4px 12px rgba(102, 126, 234, 0.3)",transition:"all 0.3s ease",flexShrink:0},onMouseOver:e=>{e.currentTarget.style.transform="scale(1.1) rotate(10deg)"},onMouseOut:e=>{e.currentTarget.style.transform="scale(1) rotate(0deg)"},title:c?"Переключить на светлую тему":"Переключить на темную тему","aria-label":c?"Переключить на светлую тему":"Переключить на темную тему",children:c?Q.jsx(Jh,{size:20}):Q.jsx(Kh,{size:20})})]}),Q.jsx(Ev,{children:"Интеллектуальная система управления задачами с умными подсказками, расширенной фильтрацией и аналитикой продуктивности."}),Q.jsxs(Mv,{children:[Q.jsx(_v,{children:"React 18"}),Q.jsx(_v,{children:"TypeScript"}),Q.jsx(_v,{children:"Styled Components"}),Q.jsx(_v,{children:"Vite"}),Q.jsx(_v,{children:"Local Storage"}),Q.jsx(_v,{onClick:s,style:{cursor:"pointer"},children:c?"🌙 Тёмная тема":"☀️ Светлая тема"})]}),Q.jsx(Lv,{})]}),Q.jsxs(zv,{children:[Q.jsxs(jv,{children:[Q.jsx(Pv,{id:"task-form",children:Q.jsx(Rh,{onAddTask:b,editingTask:o,onCancelEdit:()=>{l(null)}},o?`edit-${o.id}`:"add-new")}),Q.jsx(Pv,{children:Q.jsx(iv,{filters:n,onFiltersChange:r,sortBy:a,onSortChange:i})}),Q.jsx(Pv,{children:Q.jsx(Wg,{tasks:g,onToggleComplete:e=>{t(t=>t.map(t=>t.id===e?{...t,completed:!t.completed,status:t.completed?"ожидает":"выполнено",updatedAt:new Date}:t))},onDelete:e=>{t(t=>t.filter(t=>t.id!==e))},onEdit:e=>{const t={...e,dueDate:e.dueDate?new Date(e.dueDate):void 0,createdAt:new Date(e.createdAt),updatedAt:new Date(e.updatedAt),tags:[...e.tags]};l(t),setTimeout(()=>{const e=document.getElementById("task-form");e&&e.scrollIntoView({behavior:"smooth",block:"start"})},100)},title:"Ваши задачи",emptyStateType:0===e.length?"all":"filtered"})})]}),Q.jsxs(Nv,{children:[Q.jsx(Pv,{children:Q.jsx(wv,{tasks:e,stats:v})}),Q.jsxs(Pv,{children:[Q.jsx("h3",{style:{marginTop:0,marginBottom:"1rem",color:c?"#e0e0e0":"#333"},children:"Быстрые действия"}),Q.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[Q.jsx("button",{onClick:()=>{window.confirm("Вы уверены, что хотите удалить все выполненные задачи?")&&t(e=>e.filter(e=>!e.completed))},style:{padding:"0.75rem 1rem",border:"none",borderRadius:"8px",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",background:c?"linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-1px)",e.currentTarget.style.boxShadow=c?"0 4px 12px rgba(42, 45, 62, 0.4)":"0 4px 12px rgba(102, 126, 234, 0.4)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="none"},children:"🗑️ Удалить все выполненные"}),Q.jsx("button",{onClick:()=>{const e={id:ld(),title:"Пример задачи",description:"Это пример задачи для начала работы",completed:!1,priority:"средний",status:"ожидает",category:"работа",createdAt:new Date,updatedAt:new Date,tags:["пример","демо"]};b(e)},style:{padding:"0.75rem 1rem",border:"none",borderRadius:"8px",fontSize:"0.875rem",fontWeight:"500",cursor:"pointer",transition:"all 0.3s ease",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",background:c?"linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)":"linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)",color:"white"},onMouseOver:e=>{e.currentTarget.style.transform="translateY(-1px)",e.currentTarget.style.boxShadow=c?"0 4px 12px rgba(42, 45, 62, 0.4)":"0 4px 12px rgba(76, 175, 80, 0.4)"},onMouseOut:e=>{e.currentTarget.style.transform="translateY(0)",e.currentTarget.style.boxShadow="none"},children:"🎯 Добавить пример задачи"})]})]}),Q.jsxs(Pv,{children:[Q.jsx("h3",{style:{marginTop:0,marginBottom:"1rem",color:c?"#e0e0e0":"#333"},children:"Особенности проекта"}),Q.jsxs("ul",{style:{margin:0,paddingLeft:"1.25rem",fontSize:"0.875rem",lineHeight:"1.6"},children:[Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:" Умные подсказки"}),Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:"Расширенная фильтрация"}),Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:" Приоритетная категоризация"}),Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:" Сохранение в Local Storage"}),Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:" Адаптивный дизайн"}),Q.jsx("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:"Аналитика продуктивности"}),Q.jsxs("li",{style:{marginBottom:"0.5rem",color:c?"#ccc":"#555"},children:[" ",c?" Темная тема":" Светлая тема"]}),Q.jsx("li",{style:{color:c?"#ccc":"#555"},children:"Система управления тегами"})]})]})]})]}),Q.jsxs(Dv,{children:[Q.jsxs(Tv,{children:[Q.jsx("strong",{children:"Умный менеджер задач"})," — Портфолио проект демонстрирующий современную разработку на React."]}),Q.jsx(Tv,{children:"Технологии: TypeScript • Styled Components • Кастомные хуки • PWA • Светлая/темная тема"}),Q.jsx(Tv,{style:{fontSize:"0.75rem",opacity:.7},children:"Данные сохраняются в Local Storage. Приложение работает оффлайн."})]})]}),d&&Q.jsxs("div",{style:{position:"fixed",bottom:"20px",right:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",padding:"1rem",borderRadius:"12px",boxShadow:"0 8px 25px rgba(0, 0, 0, 0.3)",zIndex:1e3,maxWidth:"300px",animation:"slideIn 0.3s ease",border:c?"1px solid rgba(255,255,255,0.1)":"none"},children:[Q.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",fontWeight:"600",fontSize:"0.875rem"},children:[Q.jsx(Zh,{style:{animation:"pulse 2s infinite"}}),Q.jsx("span",{children:"Доступно обновление!"})]}),Q.jsx("div",{style:{fontSize:"0.75rem",marginBottom:"1rem",opacity:.9},children:"Новая версия приложения. Обновите для получения последних функций и исправлений."}),Q.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[Q.jsx("button",{onClick:f,style:{padding:"0.5rem 1rem",background:"white",color:"#667eea",border:"none",borderRadius:"8px",fontWeight:"600",cursor:"pointer",flex:1,fontSize:"0.75rem",transition:"transform 0.2s"},onMouseOver:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseOut:e=>{e.currentTarget.style.transform="scale(1)"},children:"Обновить сейчас"}),Q.jsx("button",{onClick:()=>{},style:{padding:"0.5rem 1rem",background:"rgba(255,255,255,0.1)",color:"white",border:"1px solid rgba(255,255,255,0.3)",borderRadius:"8px",cursor:"pointer",flex:1,fontSize:"0.75rem",transition:"transform 0.2s"},onMouseOver:e=>{e.currentTarget.style.transform="scale(1.05)"},onMouseOut:e=>{e.currentTarget.style.transform="scale(1)"},children:"Напомнить позже"})]}),Q.jsx("style",{children:"\n            @keyframes slideIn {\n              from { transform: translateX(100%); opacity: 0; }\n              to { transform: translateX(0); opacity: 1; }\n            }\n            @keyframes pulse {\n              0% { transform: scale(1); }\n              50% { transform: scale(1.1); }\n              100% { transform: scale(1); }\n            }\n          "})]})]})},Rv=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=mh.apply(void 0,Lf([e],t,!1)),a="sc-global-".concat(tm(JSON.stringify(r))),i=new bh(r,a),o=new WeakMap,l=function(e){var t=Zm(),n=$.useContext?$.useContext(sh):void 0,r=o.get(t.styleSheet);if(void 0===r&&(r=t.styleSheet.allocateGSInstance(a),o.set(t.styleSheet,r)),("undefined"==typeof window||!t.styleSheet.server)&&function(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Wp,n,a);else{var o=_f(_f({},t),{theme:Bp(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}(r,e,t.styleSheet,n,t.stylis),Ap||$.useLayoutEffect(function(){return function(){i.removeStyles(r,t.styleSheet)}},[r,t.styleSheet]),Ap){var u=a+r,s="undefined"==typeof window?t.styleSheet.getTag().getGroup(Dm(u)):"";if(s){var c=Kp(em(s)>>>0),d="sc-global-".concat(a,"-").concat(r,"-").concat(c);return $.createElement("style",{key:d,"data-styled-global":a,precedence:"styled-components",href:d,children:s})}}return null};return $.memo(l)})`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    max-width: 100%;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  html, body {
    width: 100%;
    overflow-x: hidden;
    position: relative;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-overflow-scrolling: touch;
    
    &.light-theme {
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
      color: #333;
    }
    
    &.dark-theme {
      background: linear-gradient(135deg, #121212 0%, #1a1a1a 100%);
      color: #e0e0e0;
    }
  }

  #root {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .mobile-safe {
    width: 100%;
    max-width: 100vw;
    padding-left: env(safe-area-inset-left);
    padding-right: env(safe-area-inset-right);
    padding-top: env(safe-area-inset-top);
    padding-bottom: env(safe-area-inset-bottom);
  }

  button {
    font-family: inherit;
    touch-action: manipulation;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Улучшенный скроллбар для темной темы */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .light-theme {
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  }

  .dark-theme {
    ::-webkit-scrollbar-track {
      background: #2d2d2d;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
    }
  }

  ::-webkit-scrollbar-thumb:hover {
    opacity: 0.8;
  }

  /* Исправление для iOS Safari */
  @supports (-webkit-touch-callout: none) {
    body {
      min-height: -webkit-fill-available;
    }
    
    #root {
      min-height: -webkit-fill-available;
    }
  }
`;q.createRoot(document.getElementById("root")).render(Q.jsx($.StrictMode,{children:Q.jsxs(Mf,{children:[Q.jsx(Rv,{}),Q.jsx("div",{className:"mobile-safe",children:Q.jsx(Fv,{})})]})}));
//# sourceMappingURL=index-D9R8x_Af.js.map
