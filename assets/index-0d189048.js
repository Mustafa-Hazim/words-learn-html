(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bu={exports:{}},ll={},Qu={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),oc=Symbol.for("react.fragment"),ic=Symbol.for("react.strict_mode"),uc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),sc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Ii=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Ii&&e[Ii]||e["@@iterator"],typeof e=="function"?e:null)}var Ku={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yu=Object.assign,Xu={};function sn(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gu(){}Gu.prototype=sn.prototype;function Vo(e,t,n){this.props=e,this.context=t,this.refs=Xu,this.updater=n||Ku}var Wo=Vo.prototype=new Gu;Wo.constructor=Vo;Yu(Wo,sn.prototype);Wo.isPureReactComponent=!0;var Mi=Array.isArray,Zu=Object.prototype.hasOwnProperty,Ho={current:null},Ju={key:!0,ref:!0,__self:!0,__source:!0};function qu(e,t,n){var r,l={},o=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(o=""+t.key),t)Zu.call(t,r)&&!Ju.hasOwnProperty(r)&&(l[r]=t[r]);var u=arguments.length-2;if(u===1)l.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];l.children=a}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)l[r]===void 0&&(l[r]=u[r]);return{$$typeof:Zn,type:e,key:o,ref:i,props:l,_owner:Ho.current}}function mc(e,t){return{$$typeof:Zn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bo(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zn}function vc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Fi=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?vc(""+e.key):t.toString(36)}function Er(e,t,n,r,l){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(o){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Zn:case lc:i=!0}}if(i)return i=e,l=l(i),e=r===""?"."+Sl(i,0):r,Mi(l)?(n="",e!=null&&(n=e.replace(Fi,"$&/")+"/"),Er(l,t,n,"",function(c){return c})):l!=null&&(Bo(l)&&(l=mc(l,n+(!l.key||i&&i.key===l.key?"":(""+l.key).replace(Fi,"$&/")+"/")+e)),t.push(l)),1;if(i=0,r=r===""?".":r+":",Mi(e))for(var u=0;u<e.length;u++){o=e[u];var a=r+Sl(o,u);i+=Er(o,t,n,a,l)}else if(a=hc(e),typeof a=="function")for(e=a.call(e),u=0;!(o=e.next()).done;)o=o.value,a=r+Sl(o,u++),i+=Er(o,t,n,a,l);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function or(e,t,n){if(e==null)return e;var r=[],l=0;return Er(e,r,"","",function(o){return t.call(n,o,l++)}),r}function yc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var se={current:null},xr={transition:null},gc={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:xr,ReactCurrentOwner:Ho};j.Children={map:or,forEach:function(e,t,n){or(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return or(e,function(){t++}),t},toArray:function(e){return or(e,function(t){return t})||[]},only:function(e){if(!Bo(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=sn;j.Fragment=oc;j.Profiler=uc;j.PureComponent=Vo;j.StrictMode=ic;j.Suspense=dc;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gc;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Yu({},e.props),l=e.key,o=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,i=Ho.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(a in t)Zu.call(t,a)&&!Ju.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&u!==void 0?u[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){u=Array(a);for(var c=0;c<a;c++)u[c]=arguments[c+2];r.children=u}return{$$typeof:Zn,type:e.type,key:l,ref:o,props:r,_owner:i}};j.createContext=function(e){return e={$$typeof:sc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};j.createElement=qu;j.createFactory=function(e){var t=qu.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:cc,render:e}};j.isValidElement=Bo;j.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:yc}};j.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=xr.transition;xr.transition={};try{e()}finally{xr.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return se.current.useCallback(e,t)};j.useContext=function(e){return se.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return se.current.useDeferredValue(e)};j.useEffect=function(e,t){return se.current.useEffect(e,t)};j.useId=function(){return se.current.useId()};j.useImperativeHandle=function(e,t,n){return se.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return se.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return se.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return se.current.useMemo(e,t)};j.useReducer=function(e,t,n){return se.current.useReducer(e,t,n)};j.useRef=function(e){return se.current.useRef(e)};j.useState=function(e){return se.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return se.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return se.current.useTransition()};j.version="18.2.0";Qu.exports=j;var ee=Qu.exports;const wc=rc(ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kc=ee,Sc=Symbol.for("react.element"),Ec=Symbol.for("react.fragment"),xc=Object.prototype.hasOwnProperty,Cc=kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_c={key:!0,ref:!0,__self:!0,__source:!0};function bu(e,t,n){var r,l={},o=null,i=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)xc.call(t,r)&&!_c.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:Sc,type:e,key:o,ref:i,props:l,_owner:Cc.current}}ll.Fragment=Ec;ll.jsx=bu;ll.jsxs=bu;Bu.exports=ll;var P=Bu.exports,Yl={},ea={exports:{}},Se={},ta={exports:{}},na={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,z){var T=k.length;k.push(z);e:for(;0<T;){var Q=T-1>>>1,Z=k[Q];if(0<l(Z,z))k[Q]=z,k[T]=Z,T=Q;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var z=k[0],T=k.pop();if(T!==z){k[0]=T;e:for(var Q=0,Z=k.length,rr=Z>>>1;Q<rr;){var kt=2*(Q+1)-1,kl=k[kt],St=kt+1,lr=k[St];if(0>l(kl,T))St<Z&&0>l(lr,kl)?(k[Q]=lr,k[St]=T,Q=St):(k[Q]=kl,k[kt]=T,Q=kt);else if(St<Z&&0>l(lr,T))k[Q]=lr,k[St]=T,Q=St;else break e}}return z}function l(k,z){var T=k.sortIndex-z.sortIndex;return T!==0?T:k.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var i=Date,u=i.now();e.unstable_now=function(){return i.now()-u}}var a=[],c=[],m=1,h=null,p=3,g=!1,w=!1,S=!1,D=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(k){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=k)r(c),z.sortIndex=z.expirationTime,t(a,z);else break;z=n(c)}}function v(k){if(S=!1,f(k),!w)if(n(a)!==null)w=!0,Ue(E);else{var z=n(c);z!==null&&xe(v,z.startTime-k)}}function E(k,z){w=!1,S&&(S=!1,d(N),N=-1),g=!0;var T=p;try{for(f(z),h=n(a);h!==null&&(!(h.expirationTime>z)||k&&!de());){var Q=h.callback;if(typeof Q=="function"){h.callback=null,p=h.priorityLevel;var Z=Q(h.expirationTime<=z);z=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(a)&&r(a),f(z)}else r(a);h=n(a)}if(h!==null)var rr=!0;else{var kt=n(c);kt!==null&&xe(v,kt.startTime-z),rr=!1}return rr}finally{h=null,p=T,g=!1}}var _=!1,C=null,N=-1,$=5,L=-1;function de(){return!(e.unstable_now()-L<$)}function Fe(){if(C!==null){var k=e.unstable_now();L=k;var z=!0;try{z=C(!0,k)}finally{z?I():(_=!1,C=null)}}else _=!1}var I;if(typeof s=="function")I=function(){s(Fe)};else if(typeof MessageChannel<"u"){var tr=new MessageChannel,nr=tr.port2;tr.port1.onmessage=Fe,I=function(){nr.postMessage(null)}}else I=function(){D(Fe,0)};function Ue(k){C=k,_||(_=!0,I())}function xe(k,z){N=D(function(){k(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){w||g||(w=!0,Ue(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(k){switch(p){case 1:case 2:case 3:var z=3;break;default:z=p}var T=p;p=z;try{return k()}finally{p=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,z){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var T=p;p=k;try{return z()}finally{p=T}},e.unstable_scheduleCallback=function(k,z,T){var Q=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?Q+T:Q):T=Q,k){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=T+Z,k={id:m++,callback:z,priorityLevel:k,startTime:T,expirationTime:Z,sortIndex:-1},T>Q?(k.sortIndex=T,t(c,k),n(a)===null&&k===n(c)&&(S?(d(N),N=-1):S=!0,xe(v,T-Q))):(k.sortIndex=Z,t(a,k),w||g||(w=!0,Ue(E))),k},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(k){var z=p;return function(){var T=p;p=z;try{return k.apply(this,arguments)}finally{p=T}}}})(na);ta.exports=na;var Nc=ta.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ra=ee,ke=Nc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var la=new Set,On={};function Dt(e,t){tn(e,t),tn(e+"Capture",t)}function tn(e,t){for(On[e]=t,e=0;e<t.length;e++)la.add(t[e])}var Ge=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ui={},Ai={};function zc(e){return Xl.call(Ai,e)?!0:Xl.call(Ui,e)?!1:Pc.test(e)?Ai[e]=!0:(Ui[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lc(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,o,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qo=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qo,Ko);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qo,Ko);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qo,Ko);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yo(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lc(t,n,l,r)&&(n=null),r||l===null?zc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var be=ra.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ir=Symbol.for("react.element"),Ft=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Xo=Symbol.for("react.strict_mode"),Gl=Symbol.for("react.profiler"),oa=Symbol.for("react.provider"),ia=Symbol.for("react.context"),Go=Symbol.for("react.forward_ref"),Zl=Symbol.for("react.suspense"),Jl=Symbol.for("react.suspense_list"),Zo=Symbol.for("react.memo"),tt=Symbol.for("react.lazy"),ua=Symbol.for("react.offscreen"),$i=Symbol.iterator;function fn(e){return e===null||typeof e!="object"?null:(e=$i&&e[$i]||e["@@iterator"],typeof e=="function"?e:null)}var H=Object.assign,El;function kn(e){if(El===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);El=t&&t[1]||""}return`
`+El+e}var xl=!1;function Cl(e,t){if(!e||xl)return"";xl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var l=c.stack.split(`
`),o=r.stack.split(`
`),i=l.length-1,u=o.length-1;1<=i&&0<=u&&l[i]!==o[u];)u--;for(;1<=i&&0<=u;i--,u--)if(l[i]!==o[u]){if(i!==1||u!==1)do if(i--,u--,0>u||l[i]!==o[u]){var a=`
`+l[i].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=i&&0<=u);break}}}finally{xl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kn(e):""}function jc(e){switch(e.tag){case 5:return kn(e.type);case 16:return kn("Lazy");case 13:return kn("Suspense");case 19:return kn("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function ql(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Ft:return"Portal";case Gl:return"Profiler";case Xo:return"StrictMode";case Zl:return"Suspense";case Jl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ia:return(e.displayName||"Context")+".Consumer";case oa:return(e._context.displayName||"Context")+".Provider";case Go:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zo:return t=e.displayName||null,t!==null?t:ql(e.type)||"Memo";case tt:t=e._payload,e=e._init;try{return ql(e(t))}catch{}}return null}function Rc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ql(t);case 8:return t===Xo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function aa(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oc(e){var t=aa(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(i){r=""+i,o.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ur(e){e._valueTracker||(e._valueTracker=Oc(e))}function sa(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=aa(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Dr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function bl(e,t){var n=t.checked;return H({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Vi(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ca(e,t){t=t.checked,t!=null&&Yo(e,"checked",t,!1)}function eo(e,t){ca(e,t);var n=mt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?to(e,t.type,n):t.hasOwnProperty("defaultValue")&&to(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wi(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function to(e,t,n){(t!=="number"||Dr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Sn=Array.isArray;function Gt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function no(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return H({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Hi(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(Sn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function da(e,t){var n=mt(t.value),r=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bi(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ro(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ar,pa=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ar.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dc=["Webkit","ms","Moz","O"];Object.keys(Cn).forEach(function(e){Dc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Cn[t]=Cn[e]})});function ha(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Cn.hasOwnProperty(e)&&Cn[e]?(""+t).trim():t+"px"}function ma(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ha(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ic=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function lo(e,t){if(t){if(Ic[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function oo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var io=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var uo=null,Zt=null,Jt=null;function Qi(e){if(e=bn(e)){if(typeof uo!="function")throw Error(y(280));var t=e.stateNode;t&&(t=sl(t),uo(e.stateNode,e.type,t))}}function va(e){Zt?Jt?Jt.push(e):Jt=[e]:Zt=e}function ya(){if(Zt){var e=Zt,t=Jt;if(Jt=Zt=null,Qi(e),t)for(e=0;e<t.length;e++)Qi(t[e])}}function ga(e,t){return e(t)}function wa(){}var _l=!1;function ka(e,t,n){if(_l)return e(t,n);_l=!0;try{return ga(e,t,n)}finally{_l=!1,(Zt!==null||Jt!==null)&&(wa(),ya())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ao=!1;if(Ge)try{var pn={};Object.defineProperty(pn,"passive",{get:function(){ao=!0}}),window.addEventListener("test",pn,pn),window.removeEventListener("test",pn,pn)}catch{ao=!1}function Mc(e,t,n,r,l,o,i,u,a){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var _n=!1,Ir=null,Mr=!1,so=null,Fc={onError:function(e){_n=!0,Ir=e}};function Uc(e,t,n,r,l,o,i,u,a){_n=!1,Ir=null,Mc.apply(Fc,arguments)}function Ac(e,t,n,r,l,o,i,u,a){if(Uc.apply(this,arguments),_n){if(_n){var c=Ir;_n=!1,Ir=null}else throw Error(y(198));Mr||(Mr=!0,so=c)}}function It(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Sa(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ki(e){if(It(e)!==e)throw Error(y(188))}function $c(e){var t=e.alternate;if(!t){if(t=It(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var o=l.alternate;if(o===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===o.child){for(o=l.child;o;){if(o===n)return Ki(l),e;if(o===r)return Ki(l),t;o=o.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=o;else{for(var i=!1,u=l.child;u;){if(u===n){i=!0,n=l,r=o;break}if(u===r){i=!0,r=l,n=o;break}u=u.sibling}if(!i){for(u=o.child;u;){if(u===n){i=!0,n=o,r=l;break}if(u===r){i=!0,r=o,n=l;break}u=u.sibling}if(!i)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function Ea(e){return e=$c(e),e!==null?xa(e):null}function xa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xa(e);if(t!==null)return t;e=e.sibling}return null}var Ca=ke.unstable_scheduleCallback,Yi=ke.unstable_cancelCallback,Vc=ke.unstable_shouldYield,Wc=ke.unstable_requestPaint,K=ke.unstable_now,Hc=ke.unstable_getCurrentPriorityLevel,qo=ke.unstable_ImmediatePriority,_a=ke.unstable_UserBlockingPriority,Fr=ke.unstable_NormalPriority,Bc=ke.unstable_LowPriority,Na=ke.unstable_IdlePriority,ol=null,We=null;function Qc(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(ol,e,void 0,(e.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:Xc,Kc=Math.log,Yc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Kc(e)/Yc|0)|0}var sr=64,cr=4194304;function En(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,o=e.pingedLanes,i=n&268435455;if(i!==0){var u=i&~l;u!==0?r=En(u):(o&=i,o!==0&&(r=En(o)))}else i=n&~l,i!==0?r=En(i):o!==0&&(r=En(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,o=t&-t,l>=o||l===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-De(t),l=1<<n,r|=e[n],t&=~l;return r}function Gc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-De(o),u=1<<i,a=l[i];a===-1?(!(u&n)||u&r)&&(l[i]=Gc(u,t)):a<=t&&(e.expiredLanes|=u),o&=~u}}function co(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Pa(){var e=sr;return sr<<=1,!(sr&4194240)&&(sr=64),e}function Nl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-De(t),e[t]=n}function Jc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-De(n),o=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~o}}function bo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-De(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var O=0;function za(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ta,ei,La,ja,Ra,fo=!1,dr=[],ut=null,at=null,st=null,Mn=new Map,Fn=new Map,rt=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xi(e,t){switch(e){case"focusin":case"focusout":ut=null;break;case"dragenter":case"dragleave":at=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fn.delete(t.pointerId)}}function hn(e,t,n,r,l,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[l]},t!==null&&(t=bn(t),t!==null&&ei(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function bc(e,t,n,r,l){switch(t){case"focusin":return ut=hn(ut,e,t,n,r,l),!0;case"dragenter":return at=hn(at,e,t,n,r,l),!0;case"mouseover":return st=hn(st,e,t,n,r,l),!0;case"pointerover":var o=l.pointerId;return Mn.set(o,hn(Mn.get(o)||null,e,t,n,r,l)),!0;case"gotpointercapture":return o=l.pointerId,Fn.set(o,hn(Fn.get(o)||null,e,t,n,r,l)),!0}return!1}function Oa(e){var t=Ct(e.target);if(t!==null){var n=It(t);if(n!==null){if(t=n.tag,t===13){if(t=Sa(n),t!==null){e.blockedOn=t,Ra(e.priority,function(){La(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=po(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);io=r,n.target.dispatchEvent(r),io=null}else return t=bn(n),t!==null&&ei(t),e.blockedOn=n,!1;t.shift()}return!0}function Gi(e,t,n){Cr(e)&&n.delete(t)}function ed(){fo=!1,ut!==null&&Cr(ut)&&(ut=null),at!==null&&Cr(at)&&(at=null),st!==null&&Cr(st)&&(st=null),Mn.forEach(Gi),Fn.forEach(Gi)}function mn(e,t){e.blockedOn===t&&(e.blockedOn=null,fo||(fo=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,ed)))}function Un(e){function t(l){return mn(l,e)}if(0<dr.length){mn(dr[0],e);for(var n=1;n<dr.length;n++){var r=dr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ut!==null&&mn(ut,e),at!==null&&mn(at,e),st!==null&&mn(st,e),Mn.forEach(t),Fn.forEach(t),n=0;n<rt.length;n++)r=rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<rt.length&&(n=rt[0],n.blockedOn===null);)Oa(n),n.blockedOn===null&&rt.shift()}var qt=be.ReactCurrentBatchConfig,Ar=!0;function td(e,t,n,r){var l=O,o=qt.transition;qt.transition=null;try{O=1,ti(e,t,n,r)}finally{O=l,qt.transition=o}}function nd(e,t,n,r){var l=O,o=qt.transition;qt.transition=null;try{O=4,ti(e,t,n,r)}finally{O=l,qt.transition=o}}function ti(e,t,n,r){if(Ar){var l=po(e,t,n,r);if(l===null)Ml(e,t,r,$r,n),Xi(e,r);else if(bc(l,e,t,n,r))r.stopPropagation();else if(Xi(e,r),t&4&&-1<qc.indexOf(e)){for(;l!==null;){var o=bn(l);if(o!==null&&Ta(o),o=po(e,t,n,r),o===null&&Ml(e,t,r,$r,n),o===l)break;l=o}l!==null&&r.stopPropagation()}else Ml(e,t,r,null,n)}}var $r=null;function po(e,t,n,r){if($r=null,e=Jo(r),e=Ct(e),e!==null)if(t=It(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Sa(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return $r=e,null}function Da(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hc()){case qo:return 1;case _a:return 4;case Fr:case Bc:return 16;case Na:return 536870912;default:return 16}default:return 16}}var ot=null,ni=null,_r=null;function Ia(){if(_r)return _r;var e,t=ni,n=t.length,r,l="value"in ot?ot.value:ot.textContent,o=l.length;for(e=0;e<n&&t[e]===l[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===l[o-r];r++);return _r=l.slice(e,1<r?1-r:void 0)}function Nr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function fr(){return!0}function Zi(){return!1}function Ee(e){function t(n,r,l,o,i){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=o,this.target=i,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(o):o[u]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?fr:Zi,this.isPropagationStopped=Zi,this}return H(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fr)},persist:function(){},isPersistent:fr}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ri=Ee(cn),qn=H({},cn,{view:0,detail:0}),rd=Ee(qn),Pl,zl,vn,il=H({},qn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vn&&(vn&&e.type==="mousemove"?(Pl=e.screenX-vn.screenX,zl=e.screenY-vn.screenY):zl=Pl=0,vn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:zl}}),Ji=Ee(il),ld=H({},il,{dataTransfer:0}),od=Ee(ld),id=H({},qn,{relatedTarget:0}),Tl=Ee(id),ud=H({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=Ee(ud),sd=H({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=Ee(sd),dd=H({},cn,{data:0}),qi=Ee(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function li(){return md}var vd=H({},qn,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Nr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Nr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Nr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yd=Ee(vd),gd=H({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bi=Ee(gd),wd=H({},qn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),kd=Ee(wd),Sd=H({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ed=Ee(Sd),xd=H({},il,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cd=Ee(xd),_d=[9,13,27,32],oi=Ge&&"CompositionEvent"in window,Nn=null;Ge&&"documentMode"in document&&(Nn=document.documentMode);var Nd=Ge&&"TextEvent"in window&&!Nn,Ma=Ge&&(!oi||Nn&&8<Nn&&11>=Nn),eu=String.fromCharCode(32),tu=!1;function Fa(e,t){switch(e){case"keyup":return _d.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ua(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Pd(e,t){switch(e){case"compositionend":return Ua(t);case"keypress":return t.which!==32?null:(tu=!0,eu);case"textInput":return e=t.data,e===eu&&tu?null:e;default:return null}}function zd(e,t){if(At)return e==="compositionend"||!oi&&Fa(e,t)?(e=Ia(),_r=ni=ot=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ma&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Aa(e,t,n,r){va(r),t=Vr(t,"onChange"),0<t.length&&(n=new ri("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Pn=null,An=null;function Ld(e){Za(e,0)}function ul(e){var t=Wt(e);if(sa(t))return e}function jd(e,t){if(e==="change")return t}var $a=!1;if(Ge){var Ll;if(Ge){var jl="oninput"in document;if(!jl){var ru=document.createElement("div");ru.setAttribute("oninput","return;"),jl=typeof ru.oninput=="function"}Ll=jl}else Ll=!1;$a=Ll&&(!document.documentMode||9<document.documentMode)}function lu(){Pn&&(Pn.detachEvent("onpropertychange",Va),An=Pn=null)}function Va(e){if(e.propertyName==="value"&&ul(An)){var t=[];Aa(t,An,e,Jo(e)),ka(Ld,t)}}function Rd(e,t,n){e==="focusin"?(lu(),Pn=t,An=n,Pn.attachEvent("onpropertychange",Va)):e==="focusout"&&lu()}function Od(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ul(An)}function Dd(e,t){if(e==="click")return ul(t)}function Id(e,t){if(e==="input"||e==="change")return ul(t)}function Md(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Me=typeof Object.is=="function"?Object.is:Md;function $n(e,t){if(Me(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Me(e[l],t[l]))return!1}return!0}function ou(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function iu(e,t){var n=ou(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ou(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ha(){for(var e=window,t=Dr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Dr(e.document)}return t}function ii(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fd(e){var t=Ha(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&ii(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,o=Math.min(r.start,l);r=r.end===void 0?o:Math.min(r.end,l),!e.extend&&o>r&&(l=r,r=o,o=l),l=iu(n,o);var i=iu(n,r);l&&i&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ud=Ge&&"documentMode"in document&&11>=document.documentMode,$t=null,ho=null,zn=null,mo=!1;function uu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;mo||$t==null||$t!==Dr(r)||(r=$t,"selectionStart"in r&&ii(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),zn&&$n(zn,r)||(zn=r,r=Vr(ho,"onSelect"),0<r.length&&(t=new ri("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function pr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vt={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionend:pr("Transition","TransitionEnd")},Rl={},Ba={};Ge&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete Vt.animationend.animation,delete Vt.animationiteration.animation,delete Vt.animationstart.animation),"TransitionEvent"in window||delete Vt.transitionend.transition);function al(e){if(Rl[e])return Rl[e];if(!Vt[e])return e;var t=Vt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ba)return Rl[e]=t[n];return e}var Qa=al("animationend"),Ka=al("animationiteration"),Ya=al("animationstart"),Xa=al("transitionend"),Ga=new Map,au="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yt(e,t){Ga.set(e,t),Dt(t,[e])}for(var Ol=0;Ol<au.length;Ol++){var Dl=au[Ol],Ad=Dl.toLowerCase(),$d=Dl[0].toUpperCase()+Dl.slice(1);yt(Ad,"on"+$d)}yt(Qa,"onAnimationEnd");yt(Ka,"onAnimationIteration");yt(Ya,"onAnimationStart");yt("dblclick","onDoubleClick");yt("focusin","onFocus");yt("focusout","onBlur");yt(Xa,"onTransitionEnd");tn("onMouseEnter",["mouseout","mouseover"]);tn("onMouseLeave",["mouseout","mouseover"]);tn("onPointerEnter",["pointerout","pointerover"]);tn("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function su(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ac(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var u=r[i],a=u.instance,c=u.currentTarget;if(u=u.listener,a!==o&&l.isPropagationStopped())break e;su(l,u,c),o=a}else for(i=0;i<r.length;i++){if(u=r[i],a=u.instance,c=u.currentTarget,u=u.listener,a!==o&&l.isPropagationStopped())break e;su(l,u,c),o=a}}}if(Mr)throw e=so,Mr=!1,so=null,e}function F(e,t){var n=t[ko];n===void 0&&(n=t[ko]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function Il(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var hr="_reactListening"+Math.random().toString(36).slice(2);function Vn(e){if(!e[hr]){e[hr]=!0,la.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hr]||(t[hr]=!0,Il("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(Da(t)){case 1:var l=td;break;case 4:l=nd;break;default:l=ti}n=l.bind(null,t,n,e),l=void 0,!ao||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Ml(e,t,n,r,l){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var u=r.stateNode.containerInfo;if(u===l||u.nodeType===8&&u.parentNode===l)break;if(i===4)for(i=r.return;i!==null;){var a=i.tag;if((a===3||a===4)&&(a=i.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;i=i.return}for(;u!==null;){if(i=Ct(u),i===null)return;if(a=i.tag,a===5||a===6){r=o=i;continue e}u=u.parentNode}}r=r.return}ka(function(){var c=o,m=Jo(n),h=[];e:{var p=Ga.get(e);if(p!==void 0){var g=ri,w=e;switch(e){case"keypress":if(Nr(n)===0)break e;case"keydown":case"keyup":g=yd;break;case"focusin":w="focus",g=Tl;break;case"focusout":w="blur",g=Tl;break;case"beforeblur":case"afterblur":g=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Ji;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=od;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=kd;break;case Qa:case Ka:case Ya:g=ad;break;case Xa:g=Ed;break;case"scroll":g=rd;break;case"wheel":g=Cd;break;case"copy":case"cut":case"paste":g=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=bi}var S=(t&4)!==0,D=!S&&e==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var s=c,f;s!==null;){f=s;var v=f.stateNode;if(f.tag===5&&v!==null&&(f=v,d!==null&&(v=In(s,d),v!=null&&S.push(Wn(s,v,f)))),D)break;s=s.return}0<S.length&&(p=new g(p,w,null,n,m),h.push({event:p,listeners:S}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",p&&n!==io&&(w=n.relatedTarget||n.fromElement)&&(Ct(w)||w[Ze]))break e;if((g||p)&&(p=m.window===m?m:(p=m.ownerDocument)?p.defaultView||p.parentWindow:window,g?(w=n.relatedTarget||n.toElement,g=c,w=w?Ct(w):null,w!==null&&(D=It(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(g=null,w=c),g!==w)){if(S=Ji,v="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(S=bi,v="onPointerLeave",d="onPointerEnter",s="pointer"),D=g==null?p:Wt(g),f=w==null?p:Wt(w),p=new S(v,s+"leave",g,n,m),p.target=D,p.relatedTarget=f,v=null,Ct(m)===c&&(S=new S(d,s+"enter",w,n,m),S.target=f,S.relatedTarget=D,v=S),D=v,g&&w)t:{for(S=g,d=w,s=0,f=S;f;f=Mt(f))s++;for(f=0,v=d;v;v=Mt(v))f++;for(;0<s-f;)S=Mt(S),s--;for(;0<f-s;)d=Mt(d),f--;for(;s--;){if(S===d||d!==null&&S===d.alternate)break t;S=Mt(S),d=Mt(d)}S=null}else S=null;g!==null&&cu(h,p,g,S,!1),w!==null&&D!==null&&cu(h,D,w,S,!0)}}e:{if(p=c?Wt(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var E=jd;else if(nu(p))if($a)E=Id;else{E=Od;var _=Rd}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=Dd);if(E&&(E=E(e,c))){Aa(h,E,n,m);break e}_&&_(e,p,c),e==="focusout"&&(_=p._wrapperState)&&_.controlled&&p.type==="number"&&to(p,"number",p.value)}switch(_=c?Wt(c):window,e){case"focusin":(nu(_)||_.contentEditable==="true")&&($t=_,ho=c,zn=null);break;case"focusout":zn=ho=$t=null;break;case"mousedown":mo=!0;break;case"contextmenu":case"mouseup":case"dragend":mo=!1,uu(h,n,m);break;case"selectionchange":if(Ud)break;case"keydown":case"keyup":uu(h,n,m)}var C;if(oi)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else At?Fa(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Ma&&n.locale!=="ko"&&(At||N!=="onCompositionStart"?N==="onCompositionEnd"&&At&&(C=Ia()):(ot=m,ni="value"in ot?ot.value:ot.textContent,At=!0)),_=Vr(c,N),0<_.length&&(N=new qi(N,e,null,n,m),h.push({event:N,listeners:_}),C?N.data=C:(C=Ua(n),C!==null&&(N.data=C)))),(C=Nd?Pd(e,n):zd(e,n))&&(c=Vr(c,"onBeforeInput"),0<c.length&&(m=new qi("onBeforeInput","beforeinput",null,n,m),h.push({event:m,listeners:c}),m.data=C))}Za(h,t)})}function Wn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,o=l.stateNode;l.tag===5&&o!==null&&(l=o,o=In(e,n),o!=null&&r.unshift(Wn(e,o,l)),o=In(e,t),o!=null&&r.push(Wn(e,o,l))),e=e.return}return r}function Mt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function cu(e,t,n,r,l){for(var o=t._reactName,i=[];n!==null&&n!==r;){var u=n,a=u.alternate,c=u.stateNode;if(a!==null&&a===r)break;u.tag===5&&c!==null&&(u=c,l?(a=In(n,o),a!=null&&i.unshift(Wn(n,a,u))):l||(a=In(n,o),a!=null&&i.push(Wn(n,a,u)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Wd=/\r\n?/g,Hd=/\u0000|\uFFFD/g;function du(e){return(typeof e=="string"?e:""+e).replace(Wd,`
`).replace(Hd,"")}function mr(e,t,n){if(t=du(t),du(e)!==t&&n)throw Error(y(425))}function Wr(){}var vo=null,yo=null;function go(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wo=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,fu=typeof Promise=="function"?Promise:void 0,Qd=typeof queueMicrotask=="function"?queueMicrotask:typeof fu<"u"?function(e){return fu.resolve(null).then(e).catch(Kd)}:wo;function Kd(e){setTimeout(function(){throw e})}function Fl(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Un(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Un(t)}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+dn,Hn="__reactProps$"+dn,Ze="__reactContainer$"+dn,ko="__reactEvents$"+dn,Yd="__reactListeners$"+dn,Xd="__reactHandles$"+dn;function Ct(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ze]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pu(e);e!==null;){if(n=e[Ve])return n;e=pu(e)}return t}e=n,n=e.parentNode}return null}function bn(e){return e=e[Ve]||e[Ze],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function sl(e){return e[Hn]||null}var So=[],Ht=-1;function gt(e){return{current:e}}function U(e){0>Ht||(e.current=So[Ht],So[Ht]=null,Ht--)}function M(e,t){Ht++,So[Ht]=e.current,e.current=t}var vt={},ie=gt(vt),he=gt(!1),Tt=vt;function nn(e,t){var n=e.type.contextTypes;if(!n)return vt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},o;for(o in n)l[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Hr(){U(he),U(ie)}function hu(e,t,n){if(ie.current!==vt)throw Error(y(168));M(ie,t),M(he,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,Rc(e)||"Unknown",l));return H({},n,r)}function Br(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||vt,Tt=ie.current,M(ie,e),M(he,he.current),!0}function mu(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=qa(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,U(he),U(ie),M(ie,e)):U(he),M(he,n)}var Qe=null,cl=!1,Ul=!1;function ba(e){Qe===null?Qe=[e]:Qe.push(e)}function Gd(e){cl=!0,ba(e)}function wt(){if(!Ul&&Qe!==null){Ul=!0;var e=0,t=O;try{var n=Qe;for(O=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qe=null,cl=!1}catch(l){throw Qe!==null&&(Qe=Qe.slice(e+1)),Ca(qo,wt),l}finally{O=t,Ul=!1}}return null}var Bt=[],Qt=0,Qr=null,Kr=0,Ce=[],_e=0,Lt=null,Ke=1,Ye="";function Et(e,t){Bt[Qt++]=Kr,Bt[Qt++]=Qr,Qr=e,Kr=t}function es(e,t,n){Ce[_e++]=Ke,Ce[_e++]=Ye,Ce[_e++]=Lt,Lt=e;var r=Ke;e=Ye;var l=32-De(r)-1;r&=~(1<<l),n+=1;var o=32-De(t)+l;if(30<o){var i=l-l%5;o=(r&(1<<i)-1).toString(32),r>>=i,l-=i,Ke=1<<32-De(t)+l|n<<l|r,Ye=o+e}else Ke=1<<o|n<<l|r,Ye=e}function ui(e){e.return!==null&&(Et(e,1),es(e,1,0))}function ai(e){for(;e===Qr;)Qr=Bt[--Qt],Bt[Qt]=null,Kr=Bt[--Qt],Bt[Qt]=null;for(;e===Lt;)Lt=Ce[--_e],Ce[_e]=null,Ye=Ce[--_e],Ce[_e]=null,Ke=Ce[--_e],Ce[_e]=null}var we=null,ge=null,A=!1,Oe=null;function ts(e,t){var n=Ne(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function vu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ge=ct(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ge=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Lt!==null?{id:Ke,overflow:Ye}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ne(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ge=null,!0):!1;default:return!1}}function Eo(e){return(e.mode&1)!==0&&(e.flags&128)===0}function xo(e){if(A){var t=ge;if(t){var n=t;if(!vu(e,t)){if(Eo(e))throw Error(y(418));t=ct(n.nextSibling);var r=we;t&&vu(e,t)?ts(r,n):(e.flags=e.flags&-4097|2,A=!1,we=e)}}else{if(Eo(e))throw Error(y(418));e.flags=e.flags&-4097|2,A=!1,we=e}}}function yu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function vr(e){if(e!==we)return!1;if(!A)return yu(e),A=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!go(e.type,e.memoizedProps)),t&&(t=ge)){if(Eo(e))throw ns(),Error(y(418));for(;t;)ts(e,t),t=ct(t.nextSibling)}if(yu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ge=ct(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ge=null}}else ge=we?ct(e.stateNode.nextSibling):null;return!0}function ns(){for(var e=ge;e;)e=ct(e.nextSibling)}function rn(){ge=we=null,A=!1}function si(e){Oe===null?Oe=[e]:Oe.push(e)}var Zd=be.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=H({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yr=gt(null),Xr=null,Kt=null,ci=null;function di(){ci=Kt=Xr=null}function fi(e){var t=Yr.current;U(Yr),e._currentValue=t}function Co(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bt(e,t){Xr=e,ci=Kt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function ze(e){var t=e._currentValue;if(ci!==e)if(e={context:e,memoizedValue:t,next:null},Kt===null){if(Xr===null)throw Error(y(308));Kt=e,Xr.dependencies={lanes:0,firstContext:e}}else Kt=Kt.next=e;return t}var _t=null;function pi(e){_t===null?_t=[e]:_t.push(e)}function rs(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,pi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Je(e,r)}function Je(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var nt=!1;function hi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Xe(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,R&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Je(e,n)}return l=r.interleaved,l===null?(t.next=t,pi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Je(e,n)}function Pr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}function gu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?l=o=i:o=o.next=i,n=n.next}while(n!==null);o===null?l=o=t:o=o.next=t}else l=o=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var l=e.updateQueue;nt=!1;var o=l.firstBaseUpdate,i=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var a=u,c=a.next;a.next=null,i===null?o=c:i.next=c,i=a;var m=e.alternate;m!==null&&(m=m.updateQueue,u=m.lastBaseUpdate,u!==i&&(u===null?m.firstBaseUpdate=c:u.next=c,m.lastBaseUpdate=a))}if(o!==null){var h=l.baseState;i=0,m=c=a=null,u=o;do{var p=u.lane,g=u.eventTime;if((r&p)===p){m!==null&&(m=m.next={eventTime:g,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var w=e,S=u;switch(p=t,g=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){h=w.call(g,h,p);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,p=typeof w=="function"?w.call(g,h,p):w,p==null)break e;h=H({},h,p);break e;case 2:nt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,p=l.effects,p===null?l.effects=[u]:p.push(u))}else g={eventTime:g,lane:p,tag:u.tag,payload:u.payload,callback:u.callback,next:null},m===null?(c=m=g,a=h):m=m.next=g,i|=p;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;p=u,u=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(1);if(m===null&&(a=h),l.baseState=a,l.firstBaseUpdate=c,l.lastBaseUpdate=m,t=l.shared.interleaved,t!==null){l=t;do i|=l.lane,l=l.next;while(l!==t)}else o===null&&(l.shared.lanes=0);Rt|=i,e.lanes=i,e.memoizedState=h}}function wu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var os=new ra.Component().refs;function _o(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:H({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var dl={isMounted:function(e){return(e=e._reactInternals)?It(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),o=Xe(r,l);o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,l),t!==null&&(Ie(t,e,l,r),Pr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=pt(e),o=Xe(r,l);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=dt(e,o,l),t!==null&&(Ie(t,e,l,r),Pr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=pt(e),l=Xe(n,r);l.tag=2,t!=null&&(l.callback=t),t=dt(e,l,r),t!==null&&(Ie(t,e,r,n),Pr(t,e,r))}};function ku(e,t,n,r,l,o,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,i):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,o):!0}function is(e,t,n){var r=!1,l=vt,o=t.contextType;return typeof o=="object"&&o!==null?o=ze(o):(l=me(t)?Tt:ie.current,r=t.contextTypes,o=(r=r!=null)?nn(e,l):vt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=o),t}function Su(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&dl.enqueueReplaceState(t,t.state,null)}function No(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs=os,hi(e);var o=t.contextType;typeof o=="object"&&o!==null?l.context=ze(o):(o=me(t)?Tt:ie.current,l.context=nn(e,o)),l.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(_o(e,t,o,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&dl.enqueueReplaceState(l,l.state,null),Gr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(i){var u=l.refs;u===os&&(u=l.refs={}),i===null?delete u[o]:u[o]=i},t._stringRef=o,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function yr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Eu(e){var t=e._init;return t(e._payload)}function us(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function l(d,s){return d=ht(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function u(d,s,f,v){return s===null||s.tag!==6?(s=Ql(f,d.mode,v),s.return=d,s):(s=l(s,f),s.return=d,s)}function a(d,s,f,v){var E=f.type;return E===Ut?m(d,s,f.props.children,v,f.key):s!==null&&(s.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&Eu(E)===s.type)?(v=l(s,f.props),v.ref=yn(d,s,f),v.return=d,v):(v=Or(f.type,f.key,f.props,null,d.mode,v),v.ref=yn(d,s,f),v.return=d,v)}function c(d,s,f,v){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=Kl(f,d.mode,v),s.return=d,s):(s=l(s,f.children||[]),s.return=d,s)}function m(d,s,f,v,E){return s===null||s.tag!==7?(s=zt(f,d.mode,v,E),s.return=d,s):(s=l(s,f),s.return=d,s)}function h(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=Ql(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case ir:return f=Or(s.type,s.key,s.props,null,d.mode,f),f.ref=yn(d,null,s),f.return=d,f;case Ft:return s=Kl(s,d.mode,f),s.return=d,s;case tt:var v=s._init;return h(d,v(s._payload),f)}if(Sn(s)||fn(s))return s=zt(s,d.mode,f,null),s.return=d,s;yr(d,s)}return null}function p(d,s,f,v){var E=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:u(d,s,""+f,v);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ir:return f.key===E?a(d,s,f,v):null;case Ft:return f.key===E?c(d,s,f,v):null;case tt:return E=f._init,p(d,s,E(f._payload),v)}if(Sn(f)||fn(f))return E!==null?null:m(d,s,f,v,null);yr(d,f)}return null}function g(d,s,f,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return d=d.get(f)||null,u(s,d,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ir:return d=d.get(v.key===null?f:v.key)||null,a(s,d,v,E);case Ft:return d=d.get(v.key===null?f:v.key)||null,c(s,d,v,E);case tt:var _=v._init;return g(d,s,f,_(v._payload),E)}if(Sn(v)||fn(v))return d=d.get(f)||null,m(s,d,v,E,null);yr(s,v)}return null}function w(d,s,f,v){for(var E=null,_=null,C=s,N=s=0,$=null;C!==null&&N<f.length;N++){C.index>N?($=C,C=null):$=C.sibling;var L=p(d,C,f[N],v);if(L===null){C===null&&(C=$);break}e&&C&&L.alternate===null&&t(d,C),s=o(L,s,N),_===null?E=L:_.sibling=L,_=L,C=$}if(N===f.length)return n(d,C),A&&Et(d,N),E;if(C===null){for(;N<f.length;N++)C=h(d,f[N],v),C!==null&&(s=o(C,s,N),_===null?E=C:_.sibling=C,_=C);return A&&Et(d,N),E}for(C=r(d,C);N<f.length;N++)$=g(C,d,N,f[N],v),$!==null&&(e&&$.alternate!==null&&C.delete($.key===null?N:$.key),s=o($,s,N),_===null?E=$:_.sibling=$,_=$);return e&&C.forEach(function(de){return t(d,de)}),A&&Et(d,N),E}function S(d,s,f,v){var E=fn(f);if(typeof E!="function")throw Error(y(150));if(f=E.call(f),f==null)throw Error(y(151));for(var _=E=null,C=s,N=s=0,$=null,L=f.next();C!==null&&!L.done;N++,L=f.next()){C.index>N?($=C,C=null):$=C.sibling;var de=p(d,C,L.value,v);if(de===null){C===null&&(C=$);break}e&&C&&de.alternate===null&&t(d,C),s=o(de,s,N),_===null?E=de:_.sibling=de,_=de,C=$}if(L.done)return n(d,C),A&&Et(d,N),E;if(C===null){for(;!L.done;N++,L=f.next())L=h(d,L.value,v),L!==null&&(s=o(L,s,N),_===null?E=L:_.sibling=L,_=L);return A&&Et(d,N),E}for(C=r(d,C);!L.done;N++,L=f.next())L=g(C,d,N,L.value,v),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?N:L.key),s=o(L,s,N),_===null?E=L:_.sibling=L,_=L);return e&&C.forEach(function(Fe){return t(d,Fe)}),A&&Et(d,N),E}function D(d,s,f,v){if(typeof f=="object"&&f!==null&&f.type===Ut&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case ir:e:{for(var E=f.key,_=s;_!==null;){if(_.key===E){if(E=f.type,E===Ut){if(_.tag===7){n(d,_.sibling),s=l(_,f.props.children),s.return=d,d=s;break e}}else if(_.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tt&&Eu(E)===_.type){n(d,_.sibling),s=l(_,f.props),s.ref=yn(d,_,f),s.return=d,d=s;break e}n(d,_);break}else t(d,_);_=_.sibling}f.type===Ut?(s=zt(f.props.children,d.mode,v,f.key),s.return=d,d=s):(v=Or(f.type,f.key,f.props,null,d.mode,v),v.ref=yn(d,s,f),v.return=d,d=v)}return i(d);case Ft:e:{for(_=f.key;s!==null;){if(s.key===_)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=l(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=Kl(f,d.mode,v),s.return=d,d=s}return i(d);case tt:return _=f._init,D(d,s,_(f._payload),v)}if(Sn(f))return w(d,s,f,v);if(fn(f))return S(d,s,f,v);yr(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=l(s,f),s.return=d,d=s):(n(d,s),s=Ql(f,d.mode,v),s.return=d,d=s),i(d)):n(d,s)}return D}var ln=us(!0),as=us(!1),er={},He=gt(er),Bn=gt(er),Qn=gt(er);function Nt(e){if(e===er)throw Error(y(174));return e}function mi(e,t){switch(M(Qn,t),M(Bn,e),M(He,er),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ro(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ro(t,e)}U(He),M(He,t)}function on(){U(He),U(Bn),U(Qn)}function ss(e){Nt(Qn.current);var t=Nt(He.current),n=ro(t,e.type);t!==n&&(M(Bn,e),M(He,n))}function vi(e){Bn.current===e&&(U(He),U(Bn))}var V=gt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Al=[];function yi(){for(var e=0;e<Al.length;e++)Al[e]._workInProgressVersionPrimary=null;Al.length=0}var zr=be.ReactCurrentDispatcher,$l=be.ReactCurrentBatchConfig,jt=0,W=null,X=null,J=null,Jr=!1,Tn=!1,Kn=0,Jd=0;function re(){throw Error(y(321))}function gi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Me(e[n],t[n]))return!1;return!0}function wi(e,t,n,r,l,o){if(jt=o,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zr.current=e===null||e.memoizedState===null?tf:nf,e=n(r,l),Tn){o=0;do{if(Tn=!1,Kn=0,25<=o)throw Error(y(301));o+=1,J=X=null,t.updateQueue=null,zr.current=rf,e=n(r,l)}while(Tn)}if(zr.current=qr,t=X!==null&&X.next!==null,jt=0,J=X=W=null,Jr=!1,t)throw Error(y(300));return e}function ki(){var e=Kn!==0;return Kn=0,e}function $e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?W.memoizedState=J=e:J=J.next=e,J}function Te(){if(X===null){var e=W.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=J===null?W.memoizedState:J.next;if(t!==null)J=t,X=e;else{if(e===null)throw Error(y(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},J===null?W.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Te(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=X,l=r.baseQueue,o=n.pending;if(o!==null){if(l!==null){var i=l.next;l.next=o.next,o.next=i}r.baseQueue=l=o,n.pending=null}if(l!==null){o=l.next,r=r.baseState;var u=i=null,a=null,c=o;do{var m=c.lane;if((jt&m)===m)a!==null&&(a=a.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var h={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};a===null?(u=a=h,i=r):a=a.next=h,W.lanes|=m,Rt|=m}c=c.next}while(c!==null&&c!==o);a===null?i=r:a.next=u,Me(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do o=l.lane,W.lanes|=o,Rt|=o,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Wl(e){var t=Te(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,o=t.memoizedState;if(l!==null){n.pending=null;var i=l=l.next;do o=e(o,i.action),i=i.next;while(i!==l);Me(o,t.memoizedState)||(pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function cs(){}function ds(e,t){var n=W,r=Te(),l=t(),o=!Me(r.memoizedState,l);if(o&&(r.memoizedState=l,pe=!0),r=r.queue,Si(hs.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Xn(9,ps.bind(null,n,r,l,t),void 0,null),q===null)throw Error(y(349));jt&30||fs(n,t,l)}return l}function fs(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ps(e,t,n,r){t.value=n,t.getSnapshot=r,ms(t)&&vs(e)}function hs(e,t,n){return n(function(){ms(t)&&vs(e)})}function ms(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Me(e,n)}catch{return!0}}function vs(e){var t=Je(e,1);t!==null&&Ie(t,e,1,-1)}function xu(e){var t=$e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,W,e),[t.memoizedState,e]}function Xn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=W.updateQueue,t===null?(t={lastEffect:null,stores:null},W.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ys(){return Te().memoizedState}function Tr(e,t,n,r){var l=$e();W.flags|=e,l.memoizedState=Xn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Te();r=r===void 0?null:r;var o=void 0;if(X!==null){var i=X.memoizedState;if(o=i.destroy,r!==null&&gi(r,i.deps)){l.memoizedState=Xn(t,n,o,r);return}}W.flags|=e,l.memoizedState=Xn(1|t,n,o,r)}function Cu(e,t){return Tr(8390656,8,e,t)}function Si(e,t){return fl(2048,8,e,t)}function gs(e,t){return fl(4,2,e,t)}function ws(e,t){return fl(4,4,e,t)}function ks(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ss(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,ks.bind(null,t,e),n)}function Ei(){}function Es(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function xs(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cs(e,t,n){return jt&21?(Me(n,t)||(n=Pa(),W.lanes|=n,Rt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function qd(e,t){var n=O;O=n!==0&&4>n?n:4,e(!0);var r=$l.transition;$l.transition={};try{e(!1),t()}finally{O=n,$l.transition=r}}function _s(){return Te().memoizedState}function bd(e,t,n){var r=pt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ns(e))Ps(t,n);else if(n=rs(e,t,n,r),n!==null){var l=ae();Ie(n,e,r,l),zs(n,t,r)}}function ef(e,t,n){var r=pt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ns(e))Ps(t,l);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var i=t.lastRenderedState,u=o(i,n);if(l.hasEagerState=!0,l.eagerState=u,Me(u,i)){var a=t.interleaved;a===null?(l.next=l,pi(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=rs(e,t,l,r),n!==null&&(l=ae(),Ie(n,e,r,l),zs(n,t,r))}}function Ns(e){var t=e.alternate;return e===W||t!==null&&t===W}function Ps(e,t){Tn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function zs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,bo(e,n)}}var qr={readContext:ze,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tf={readContext:ze,useCallback:function(e,t){return $e().memoizedState=[e,t===void 0?null:t],e},useContext:ze,useEffect:Cu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Tr(4194308,4,ks.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Tr(4194308,4,e,t)},useInsertionEffect:function(e,t){return Tr(4,2,e,t)},useMemo:function(e,t){var n=$e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$e();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bd.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=$e();return e={current:e},t.memoizedState=e},useState:xu,useDebugValue:Ei,useDeferredValue:function(e){return $e().memoizedState=e},useTransition:function(){var e=xu(!1),t=e[0];return e=qd.bind(null,e[1]),$e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=W,l=$e();if(A){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));jt&30||fs(r,t,n)}l.memoizedState=n;var o={value:n,getSnapshot:t};return l.queue=o,Cu(hs.bind(null,r,o,e),[e]),r.flags|=2048,Xn(9,ps.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=$e(),t=q.identifierPrefix;if(A){var n=Ye,r=Ke;n=(r&~(1<<32-De(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Jd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:ze,useCallback:Es,useContext:ze,useEffect:Si,useImperativeHandle:Ss,useInsertionEffect:gs,useLayoutEffect:ws,useMemo:xs,useReducer:Vl,useRef:ys,useState:function(){return Vl(Yn)},useDebugValue:Ei,useDeferredValue:function(e){var t=Te();return Cs(t,X.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:_s,unstable_isNewReconciler:!1},rf={readContext:ze,useCallback:Es,useContext:ze,useEffect:Si,useImperativeHandle:Ss,useInsertionEffect:gs,useLayoutEffect:ws,useMemo:xs,useReducer:Wl,useRef:ys,useState:function(){return Wl(Yn)},useDebugValue:Ei,useDeferredValue:function(e){var t=Te();return X===null?t.memoizedState=e:Cs(t,X.memoizedState,e)},useTransition:function(){var e=Wl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:cs,useSyncExternalStore:ds,useId:_s,unstable_isNewReconciler:!1};function un(e,t){try{var n="",r=t;do n+=jc(r),r=r.return;while(r);var l=n}catch(o){l=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:l,digest:null}}function Hl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Po(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Ts(e,t,n){n=Xe(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){el||(el=!0,Fo=r),Po(e,t)},n}function Ls(e,t,n){n=Xe(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Po(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Po(e,t),typeof r!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function _u(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=wf.bind(null,e,t,n),t.then(e,e))}function Nu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Pu(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Xe(-1,1),t.tag=2,dt(n,t,1))),n.lanes|=1),e)}var of=be.ReactCurrentOwner,pe=!1;function ue(e,t,n,r){t.child=e===null?as(t,null,n,r):ln(t,e.child,n,r)}function zu(e,t,n,r,l){n=n.render;var o=t.ref;return bt(t,l),r=wi(e,t,n,r,o,l),n=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(A&&n&&ui(t),t.flags|=1,ue(e,t,r,l),t.child)}function Tu(e,t,n,r,l){if(e===null){var o=n.type;return typeof o=="function"&&!Li(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,js(e,t,o,r,l)):(e=Or(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&l)){var i=o.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(i,r)&&e.ref===t.ref)return qe(e,t,l)}return t.flags|=1,e=ht(o,r),e.ref=t.ref,e.return=t,t.child=e}function js(e,t,n,r,l){if(e!==null){var o=e.memoizedProps;if($n(o,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=o,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,qe(e,t,l)}return zo(e,t,n,r,l)}function Rs(e,t,n){var r=t.pendingProps,l=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Xt,ye),ye|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Xt,ye),ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,M(Xt,ye),ye|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,M(Xt,ye),ye|=r;return ue(e,t,l,n),t.child}function Os(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zo(e,t,n,r,l){var o=me(n)?Tt:ie.current;return o=nn(t,o),bt(t,l),n=wi(e,t,n,r,o,l),r=ki(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,qe(e,t,l)):(A&&r&&ui(t),t.flags|=1,ue(e,t,n,l),t.child)}function Lu(e,t,n,r,l){if(me(n)){var o=!0;Br(t)}else o=!1;if(bt(t,l),t.stateNode===null)Lr(e,t),is(t,n,r),No(t,n,r,l),r=!0;else if(e===null){var i=t.stateNode,u=t.memoizedProps;i.props=u;var a=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=ze(c):(c=me(n)?Tt:ie.current,c=nn(t,c));var m=n.getDerivedStateFromProps,h=typeof m=="function"||typeof i.getSnapshotBeforeUpdate=="function";h||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==r||a!==c)&&Su(t,i,r,c),nt=!1;var p=t.memoizedState;i.state=p,Gr(t,r,i,l),a=t.memoizedState,u!==r||p!==a||he.current||nt?(typeof m=="function"&&(_o(t,n,m,r),a=t.memoizedState),(u=nt||ku(t,n,u,r,p,a,c))?(h||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),i.props=r,i.state=a,i.context=c,r=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ls(e,t),u=t.memoizedProps,c=t.type===t.elementType?u:je(t.type,u),i.props=c,h=t.pendingProps,p=i.context,a=n.contextType,typeof a=="object"&&a!==null?a=ze(a):(a=me(n)?Tt:ie.current,a=nn(t,a));var g=n.getDerivedStateFromProps;(m=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==h||p!==a)&&Su(t,i,r,a),nt=!1,p=t.memoizedState,i.state=p,Gr(t,r,i,l);var w=t.memoizedState;u!==h||p!==w||he.current||nt?(typeof g=="function"&&(_o(t,n,g,r),w=t.memoizedState),(c=nt||ku(t,n,c,r,p,w,a)||!1)?(m||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,w,a),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,w,a)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),i.props=r,i.state=w,i.context=a,r=c):(typeof i.componentDidUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return To(e,t,n,r,o,l)}function To(e,t,n,r,l,o){Os(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return l&&mu(t,n,!1),qe(e,t,o);r=t.stateNode,of.current=t;var u=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=ln(t,e.child,null,o),t.child=ln(t,null,u,o)):ue(e,t,u,o),t.memoizedState=r.state,l&&mu(t,n,!0),t.child}function Ds(e){var t=e.stateNode;t.pendingContext?hu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&hu(e,t.context,!1),mi(e,t.containerInfo)}function ju(e,t,n,r,l){return rn(),si(l),t.flags|=256,ue(e,t,n,r),t.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function jo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Is(e,t,n){var r=t.pendingProps,l=V.current,o=!1,i=(t.flags&128)!==0,u;if((u=i)||(u=e!==null&&e.memoizedState===null?!1:(l&2)!==0),u?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(V,l&1),e===null)return xo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,o?(r=t.mode,o=t.child,i={mode:"hidden",children:i},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=i):o=ml(i,r,0,null),e=zt(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=jo(n),t.memoizedState=Lo,e):xi(t,i));if(l=e.memoizedState,l!==null&&(u=l.dehydrated,u!==null))return uf(e,t,i,r,u,l,n);if(o){o=r.fallback,i=t.mode,l=e.child,u=l.sibling;var a={mode:"hidden",children:r.children};return!(i&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=ht(l,a),r.subtreeFlags=l.subtreeFlags&14680064),u!==null?o=ht(u,o):(o=zt(o,i,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,i=e.child.memoizedState,i=i===null?jo(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},o.memoizedState=i,o.childLanes=e.childLanes&~n,t.memoizedState=Lo,r}return o=e.child,e=o.sibling,r=ht(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xi(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gr(e,t,n,r){return r!==null&&si(r),ln(t,e.child,null,n),e=xi(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function uf(e,t,n,r,l,o,i){if(n)return t.flags&256?(t.flags&=-257,r=Hl(Error(y(422))),gr(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,l=t.mode,r=ml({mode:"visible",children:r.children},l,0,null),o=zt(o,l,i,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ln(t,e.child,null,i),t.child.memoizedState=jo(i),t.memoizedState=Lo,o);if(!(t.mode&1))return gr(e,t,i,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var u=r.dgst;return r=u,o=Error(y(419)),r=Hl(o,r,void 0),gr(e,t,i,r)}if(u=(i&e.childLanes)!==0,pe||u){if(r=q,r!==null){switch(i&-i){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|i)?0:l,l!==0&&l!==o.retryLane&&(o.retryLane=l,Je(e,l),Ie(r,e,l,-1))}return Ti(),r=Hl(Error(y(421))),gr(e,t,i,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=kf.bind(null,e),l._reactRetry=t,null):(e=o.treeContext,ge=ct(l.nextSibling),we=t,A=!0,Oe=null,e!==null&&(Ce[_e++]=Ke,Ce[_e++]=Ye,Ce[_e++]=Lt,Ke=e.id,Ye=e.overflow,Lt=t),t=xi(t,r.children),t.flags|=4096,t)}function Ru(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Co(e.return,t,n)}function Bl(e,t,n,r,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=l)}function Ms(e,t,n){var r=t.pendingProps,l=r.revealOrder,o=r.tail;if(ue(e,t,r.children,n),r=V.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,n,t);else if(e.tag===19)Ru(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(V,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,o);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,o);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Lr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function qe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Rt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=ht(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ht(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Ds(t),rn();break;case 5:ss(t);break;case 1:me(t.type)&&Br(t);break;case 4:mi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Yr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(V,V.current&1),t.flags|=128,null):n&t.child.childLanes?Is(e,t,n):(M(V,V.current&1),e=qe(e,t,n),e!==null?e.sibling:null);M(V,V.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ms(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(V,V.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n)}return qe(e,t,n)}var Fs,Ro,Us,As;Fs=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ro=function(){};Us=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Nt(He.current);var o=null;switch(n){case"input":l=bl(e,l),r=bl(e,r),o=[];break;case"select":l=H({},l,{value:void 0}),r=H({},r,{value:void 0}),o=[];break;case"textarea":l=no(e,l),r=no(e,r),o=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}lo(n,r);var i;n=null;for(c in l)if(!r.hasOwnProperty(c)&&l.hasOwnProperty(c)&&l[c]!=null)if(c==="style"){var u=l[c];for(i in u)u.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(On.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var a=r[c];if(u=l!=null?l[c]:void 0,r.hasOwnProperty(c)&&a!==u&&(a!=null||u!=null))if(c==="style")if(u){for(i in u)!u.hasOwnProperty(i)||a&&a.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in a)a.hasOwnProperty(i)&&u[i]!==a[i]&&(n||(n={}),n[i]=a[i])}else n||(o||(o=[]),o.push(c,n)),n=a;else c==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,u=u?u.__html:void 0,a!=null&&u!==a&&(o=o||[]).push(c,a)):c==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(c,""+a):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(On.hasOwnProperty(c)?(a!=null&&c==="onScroll"&&F("scroll",e),o||u===a||(o=[])):(o=o||[]).push(c,a))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};As=function(e,t,n,r){n!==r&&(t.flags|=4)};function gn(e,t){if(!A)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function sf(e,t,n){var r=t.pendingProps;switch(ai(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Hr(),le(t),null;case 3:return r=t.stateNode,on(),U(he),U(ie),yi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oe!==null&&($o(Oe),Oe=null))),Ro(e,t),le(t),null;case 5:vi(t);var l=Nt(Qn.current);if(n=t.type,e!==null&&t.stateNode!=null)Us(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=Nt(He.current),vr(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Ve]=t,r[Hn]=o,e=(t.mode&1)!==0,n){case"dialog":F("cancel",r),F("close",r);break;case"iframe":case"object":case"embed":F("load",r);break;case"video":case"audio":for(l=0;l<xn.length;l++)F(xn[l],r);break;case"source":F("error",r);break;case"img":case"image":case"link":F("error",r),F("load",r);break;case"details":F("toggle",r);break;case"input":Vi(r,o),F("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},F("invalid",r);break;case"textarea":Hi(r,o),F("invalid",r)}lo(n,o),l=null;for(var i in o)if(o.hasOwnProperty(i)){var u=o[i];i==="children"?typeof u=="string"?r.textContent!==u&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,u,e),l=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(o.suppressHydrationWarning!==!0&&mr(r.textContent,u,e),l=["children",""+u]):On.hasOwnProperty(i)&&u!=null&&i==="onScroll"&&F("scroll",r)}switch(n){case"input":ur(r),Wi(r,o,!0);break;case"textarea":ur(r),Bi(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[Ve]=t,e[Hn]=r,Fs(e,t,!1,!1),t.stateNode=e;e:{switch(i=oo(n,r),n){case"dialog":F("cancel",e),F("close",e),l=r;break;case"iframe":case"object":case"embed":F("load",e),l=r;break;case"video":case"audio":for(l=0;l<xn.length;l++)F(xn[l],e);l=r;break;case"source":F("error",e),l=r;break;case"img":case"image":case"link":F("error",e),F("load",e),l=r;break;case"details":F("toggle",e),l=r;break;case"input":Vi(e,r),l=bl(e,r),F("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=H({},r,{value:void 0}),F("invalid",e);break;case"textarea":Hi(e,r),l=no(e,r),F("invalid",e);break;default:l=r}lo(n,l),u=l;for(o in u)if(u.hasOwnProperty(o)){var a=u[o];o==="style"?ma(e,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&pa(e,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(On.hasOwnProperty(o)?a!=null&&o==="onScroll"&&F("scroll",e):a!=null&&Yo(e,o,a,i))}switch(n){case"input":ur(e),Wi(e,r,!1);break;case"textarea":ur(e),Bi(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Gt(e,!!r.multiple,o,!1):r.defaultValue!=null&&Gt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)As(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Nt(Qn.current),Nt(He.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ve]=t,(o=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:mr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mr(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ve]=t,t.stateNode=r}return le(t),null;case 13:if(U(V),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ge!==null&&t.mode&1&&!(t.flags&128))ns(),rn(),t.flags|=98560,o=!1;else if(o=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(y(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(y(317));o[Ve]=t}else rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),o=!1}else Oe!==null&&($o(Oe),Oe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||V.current&1?G===0&&(G=3):Ti())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return on(),Ro(e,t),e===null&&Vn(t.stateNode.containerInfo),le(t),null;case 10:return fi(t.type._context),le(t),null;case 17:return me(t.type)&&Hr(),le(t),null;case 19:if(U(V),o=t.memoizedState,o===null)return le(t),null;if(r=(t.flags&128)!==0,i=o.rendering,i===null)if(r)gn(o,!1);else{if(G!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zr(e),i!==null){for(t.flags|=128,gn(o,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,i=o.alternate,i===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,o.type=i.type,e=i.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(V,V.current&1|2),t.child}e=e.sibling}o.tail!==null&&K()>an&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!i.alternate&&!A)return le(t),null}else 2*K()-o.renderingStartTime>an&&n!==1073741824&&(t.flags|=128,r=!0,gn(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(n=o.last,n!==null?n.sibling=i:t.child=i,o.last=i)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=K(),t.sibling=null,n=V.current,M(V,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return zi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ye&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function cf(e,t){switch(ai(t),t.tag){case 1:return me(t.type)&&Hr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return on(),U(he),U(ie),yi(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vi(t),null;case 13:if(U(V),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(V),null;case 4:return on(),null;case 10:return fi(t.type._context),null;case 22:case 23:return zi(),null;case 24:return null;default:return null}}var wr=!1,oe=!1,df=typeof WeakSet=="function"?WeakSet:Set,x=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){B(e,t,r)}else n.current=null}function Oo(e,t,n){try{n()}catch(r){B(e,t,r)}}var Ou=!1;function ff(e,t){if(vo=Ar,e=Ha(),ii(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var i=0,u=-1,a=-1,c=0,m=0,h=e,p=null;t:for(;;){for(var g;h!==n||l!==0&&h.nodeType!==3||(u=i+l),h!==o||r!==0&&h.nodeType!==3||(a=i+r),h.nodeType===3&&(i+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===e)break t;if(p===n&&++c===l&&(u=i),p===o&&++m===r&&(a=i),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=u===-1||a===-1?null:{start:u,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(yo={focusedElem:e,selectionRange:n},Ar=!1,x=t;x!==null;)if(t=x,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,x=e;else for(;x!==null;){t=x;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,D=w.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:je(t.type,S),D);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(v){B(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,x=e;break}x=t.return}return w=Ou,Ou=!1,w}function Ln(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var o=l.destroy;l.destroy=void 0,o!==void 0&&Oo(t,n,o)}l=l.next}while(l!==r)}}function pl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Do(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function $s(e){var t=e.alternate;t!==null&&(e.alternate=null,$s(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ve],delete t[Hn],delete t[ko],delete t[Yd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vs(e){return e.tag===5||e.tag===3||e.tag===4}function Du(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vs(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Io(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Io(e,t,n),e=e.sibling;e!==null;)Io(e,t,n),e=e.sibling}function Mo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Mo(e,t,n),e=e.sibling;e!==null;)Mo(e,t,n),e=e.sibling}var b=null,Re=!1;function et(e,t,n){for(n=n.child;n!==null;)Ws(e,t,n),n=n.sibling}function Ws(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(ol,n)}catch{}switch(n.tag){case 5:oe||Yt(n,t);case 6:var r=b,l=Re;b=null,et(e,t,n),b=r,Re=l,b!==null&&(Re?(e=b,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):b.removeChild(n.stateNode));break;case 18:b!==null&&(Re?(e=b,n=n.stateNode,e.nodeType===8?Fl(e.parentNode,n):e.nodeType===1&&Fl(e,n),Un(e)):Fl(b,n.stateNode));break;case 4:r=b,l=Re,b=n.stateNode.containerInfo,Re=!0,et(e,t,n),b=r,Re=l;break;case 0:case 11:case 14:case 15:if(!oe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var o=l,i=o.destroy;o=o.tag,i!==void 0&&(o&2||o&4)&&Oo(n,t,i),l=l.next}while(l!==r)}et(e,t,n);break;case 1:if(!oe&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){B(n,t,u)}et(e,t,n);break;case 21:et(e,t,n);break;case 22:n.mode&1?(oe=(r=oe)||n.memoizedState!==null,et(e,t,n),oe=r):et(e,t,n);break;default:et(e,t,n)}}function Iu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var l=Sf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function Le(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var o=e,i=t,u=i;e:for(;u!==null;){switch(u.tag){case 5:b=u.stateNode,Re=!1;break e;case 3:b=u.stateNode.containerInfo,Re=!0;break e;case 4:b=u.stateNode.containerInfo,Re=!0;break e}u=u.return}if(b===null)throw Error(y(160));Ws(o,i,l),b=null,Re=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(c){B(l,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hs(t,e),t=t.sibling}function Hs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Le(t,e),Ae(e),r&4){try{Ln(3,e,e.return),pl(3,e)}catch(S){B(e,e.return,S)}try{Ln(5,e,e.return)}catch(S){B(e,e.return,S)}}break;case 1:Le(t,e),Ae(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(Le(t,e),Ae(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(S){B(e,e.return,S)}}if(r&4&&(l=e.stateNode,l!=null)){var o=e.memoizedProps,i=n!==null?n.memoizedProps:o,u=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{u==="input"&&o.type==="radio"&&o.name!=null&&ca(l,o),oo(u,i);var c=oo(u,o);for(i=0;i<a.length;i+=2){var m=a[i],h=a[i+1];m==="style"?ma(l,h):m==="dangerouslySetInnerHTML"?pa(l,h):m==="children"?Dn(l,h):Yo(l,m,h,c)}switch(u){case"input":eo(l,o);break;case"textarea":da(l,o);break;case"select":var p=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!o.multiple;var g=o.value;g!=null?Gt(l,!!o.multiple,g,!1):p!==!!o.multiple&&(o.defaultValue!=null?Gt(l,!!o.multiple,o.defaultValue,!0):Gt(l,!!o.multiple,o.multiple?[]:"",!1))}l[Hn]=o}catch(S){B(e,e.return,S)}}break;case 6:if(Le(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,o=e.memoizedProps;try{l.nodeValue=o}catch(S){B(e,e.return,S)}}break;case 3:if(Le(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(S){B(e,e.return,S)}break;case 4:Le(t,e),Ae(e);break;case 13:Le(t,e),Ae(e),l=e.child,l.flags&8192&&(o=l.memoizedState!==null,l.stateNode.isHidden=o,!o||l.alternate!==null&&l.alternate.memoizedState!==null||(Ni=K())),r&4&&Iu(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(oe=(c=oe)||m,Le(t,e),oe=c):Le(t,e),Ae(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(x=e,m=e.child;m!==null;){for(h=x=m;x!==null;){switch(p=x,g=p.child,p.tag){case 0:case 11:case 14:case 15:Ln(4,p,p.return);break;case 1:Yt(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){B(r,n,S)}}break;case 5:Yt(p,p.return);break;case 22:if(p.memoizedState!==null){Fu(h);continue}}g!==null?(g.return=p,x=g):Fu(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{l=h.stateNode,c?(o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(u=h.stateNode,a=h.memoizedProps.style,i=a!=null&&a.hasOwnProperty("display")?a.display:null,u.style.display=ha("display",i))}catch(S){B(e,e.return,S)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(S){B(e,e.return,S)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Le(t,e),Ae(e),r&4&&Iu(e);break;case 21:break;default:Le(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vs(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var o=Du(e);Mo(e,o,l);break;case 3:case 4:var i=r.stateNode.containerInfo,u=Du(e);Io(e,u,i);break;default:throw Error(y(161))}}catch(a){B(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){x=e,Bs(e)}function Bs(e,t,n){for(var r=(e.mode&1)!==0;x!==null;){var l=x,o=l.child;if(l.tag===22&&r){var i=l.memoizedState!==null||wr;if(!i){var u=l.alternate,a=u!==null&&u.memoizedState!==null||oe;u=wr;var c=oe;if(wr=i,(oe=a)&&!c)for(x=l;x!==null;)i=x,a=i.child,i.tag===22&&i.memoizedState!==null?Uu(l):a!==null?(a.return=i,x=a):Uu(l);for(;o!==null;)x=o,Bs(o),o=o.sibling;x=l,wr=u,oe=c}Mu(e)}else l.subtreeFlags&8772&&o!==null?(o.return=l,x=o):Mu(e)}}function Mu(e){for(;x!==null;){var t=x;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:oe||pl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!oe)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wu(t,o,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wu(t,i,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&Un(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}oe||t.flags&512&&Do(t)}catch(p){B(t,t.return,p)}}if(t===e){x=null;break}if(n=t.sibling,n!==null){n.return=t.return,x=n;break}x=t.return}}function Fu(e){for(;x!==null;){var t=x;if(t===e){x=null;break}var n=t.sibling;if(n!==null){n.return=t.return,x=n;break}x=t.return}}function Uu(e){for(;x!==null;){var t=x;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{pl(4,t)}catch(a){B(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){B(t,l,a)}}var o=t.return;try{Do(t)}catch(a){B(t,o,a)}break;case 5:var i=t.return;try{Do(t)}catch(a){B(t,i,a)}}}catch(a){B(t,t.return,a)}if(t===e){x=null;break}var u=t.sibling;if(u!==null){u.return=t.return,x=u;break}x=t.return}}var hf=Math.ceil,br=be.ReactCurrentDispatcher,Ci=be.ReactCurrentOwner,Pe=be.ReactCurrentBatchConfig,R=0,q=null,Y=null,te=0,ye=0,Xt=gt(0),G=0,Gn=null,Rt=0,hl=0,_i=0,jn=null,fe=null,Ni=0,an=1/0,Be=null,el=!1,Fo=null,ft=null,kr=!1,it=null,tl=0,Rn=0,Uo=null,jr=-1,Rr=0;function ae(){return R&6?K():jr!==-1?jr:jr=K()}function pt(e){return e.mode&1?R&2&&te!==0?te&-te:Zd.transition!==null?(Rr===0&&(Rr=Pa()),Rr):(e=O,e!==0||(e=window.event,e=e===void 0?16:Da(e.type)),e):1}function Ie(e,t,n,r){if(50<Rn)throw Rn=0,Uo=null,Error(y(185));Jn(e,n,r),(!(R&2)||e!==q)&&(e===q&&(!(R&2)&&(hl|=n),G===4&&lt(e,te)),ve(e,r),n===1&&R===0&&!(t.mode&1)&&(an=K()+500,cl&&wt()))}function ve(e,t){var n=e.callbackNode;Zc(e,t);var r=Ur(e,e===q?te:0);if(r===0)n!==null&&Yi(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Yi(n),t===1)e.tag===0?Gd(Au.bind(null,e)):ba(Au.bind(null,e)),Qd(function(){!(R&6)&&wt()}),n=null;else{switch(za(r)){case 1:n=qo;break;case 4:n=_a;break;case 16:n=Fr;break;case 536870912:n=Na;break;default:n=Fr}n=qs(n,Qs.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Qs(e,t){if(jr=-1,Rr=0,R&6)throw Error(y(327));var n=e.callbackNode;if(en()&&e.callbackNode!==n)return null;var r=Ur(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=nl(e,r);else{t=r;var l=R;R|=2;var o=Ys();(q!==e||te!==t)&&(Be=null,an=K()+500,Pt(e,t));do try{yf();break}catch(u){Ks(e,u)}while(1);di(),br.current=o,R=l,Y!==null?t=0:(q=null,te=0,t=G)}if(t!==0){if(t===2&&(l=co(e),l!==0&&(r=l,t=Ao(e,l))),t===1)throw n=Gn,Pt(e,0),lt(e,r),ve(e,K()),n;if(t===6)lt(e,r);else{if(l=e.current.alternate,!(r&30)&&!mf(l)&&(t=nl(e,r),t===2&&(o=co(e),o!==0&&(r=o,t=Ao(e,o))),t===1))throw n=Gn,Pt(e,0),lt(e,r),ve(e,K()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:xt(e,fe,Be);break;case 3:if(lt(e,r),(r&130023424)===r&&(t=Ni+500-K(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wo(xt.bind(null,e,fe,Be),t);break}xt(e,fe,Be);break;case 4:if(lt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var i=31-De(r);o=1<<i,i=t[i],i>l&&(l=i),r&=~o}if(r=l,r=K()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=wo(xt.bind(null,e,fe,Be),r);break}xt(e,fe,Be);break;case 5:xt(e,fe,Be);break;default:throw Error(y(329))}}}return ve(e,K()),e.callbackNode===n?Qs.bind(null,e):null}function Ao(e,t){var n=jn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=nl(e,t),e!==2&&(t=fe,fe=n,t!==null&&$o(t)),e}function $o(e){fe===null?fe=e:fe.push.apply(fe,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],o=l.getSnapshot;l=l.value;try{if(!Me(o(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function lt(e,t){for(t&=~_i,t&=~hl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-De(t),r=1<<n;e[n]=-1,t&=~r}}function Au(e){if(R&6)throw Error(y(327));en();var t=Ur(e,0);if(!(t&1))return ve(e,K()),null;var n=nl(e,t);if(e.tag!==0&&n===2){var r=co(e);r!==0&&(t=r,n=Ao(e,r))}if(n===1)throw n=Gn,Pt(e,0),lt(e,t),ve(e,K()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xt(e,fe,Be),ve(e,K()),null}function Pi(e,t){var n=R;R|=1;try{return e(t)}finally{R=n,R===0&&(an=K()+500,cl&&wt())}}function Ot(e){it!==null&&it.tag===0&&!(R&6)&&en();var t=R;R|=1;var n=Pe.transition,r=O;try{if(Pe.transition=null,O=1,e)return e()}finally{O=r,Pe.transition=n,R=t,!(R&6)&&wt()}}function zi(){ye=Xt.current,U(Xt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(ai(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Hr();break;case 3:on(),U(he),U(ie),yi();break;case 5:vi(r);break;case 4:on();break;case 13:U(V);break;case 19:U(V);break;case 10:fi(r.type._context);break;case 22:case 23:zi()}n=n.return}if(q=e,Y=e=ht(e.current,null),te=ye=t,G=0,Gn=null,_i=hl=Rt=0,fe=jn=null,_t!==null){for(t=0;t<_t.length;t++)if(n=_t[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,o=n.pending;if(o!==null){var i=o.next;o.next=l,r.next=i}n.pending=r}_t=null}return e}function Ks(e,t){do{var n=Y;try{if(di(),zr.current=qr,Jr){for(var r=W.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(jt=0,J=X=W=null,Tn=!1,Kn=0,Ci.current=null,n===null||n.return===null){G=1,Gn=t,Y=null;break}e:{var o=e,i=n.return,u=n,a=t;if(t=te,u.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var c=a,m=u,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var p=m.alternate;p?(m.updateQueue=p.updateQueue,m.memoizedState=p.memoizedState,m.lanes=p.lanes):(m.updateQueue=null,m.memoizedState=null)}var g=Nu(i);if(g!==null){g.flags&=-257,Pu(g,i,u,o,t),g.mode&1&&_u(o,c,t),t=g,a=c;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){_u(o,c,t),Ti();break e}a=Error(y(426))}}else if(A&&u.mode&1){var D=Nu(i);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Pu(D,i,u,o,t),si(un(a,u));break e}}o=a=un(a,u),G!==4&&(G=2),jn===null?jn=[o]:jn.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Ts(o,a,t);gu(o,d);break e;case 1:u=a;var s=o.type,f=o.stateNode;if(!(o.flags&128)&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ft===null||!ft.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var v=Ls(o,u,t);gu(o,v);break e}}o=o.return}while(o!==null)}Gs(n)}catch(E){t=E,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(1)}function Ys(){var e=br.current;return br.current=qr,e===null?qr:e}function Ti(){(G===0||G===3||G===2)&&(G=4),q===null||!(Rt&268435455)&&!(hl&268435455)||lt(q,te)}function nl(e,t){var n=R;R|=2;var r=Ys();(q!==e||te!==t)&&(Be=null,Pt(e,t));do try{vf();break}catch(l){Ks(e,l)}while(1);if(di(),R=n,br.current=r,Y!==null)throw Error(y(261));return q=null,te=0,G}function vf(){for(;Y!==null;)Xs(Y)}function yf(){for(;Y!==null&&!Vc();)Xs(Y)}function Xs(e){var t=Js(e.alternate,e,ye);e.memoizedProps=e.pendingProps,t===null?Gs(e):Y=t,Ci.current=null}function Gs(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{G=6,Y=null;return}}else if(n=sf(n,t,ye),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);G===0&&(G=5)}function xt(e,t,n){var r=O,l=Pe.transition;try{Pe.transition=null,O=1,gf(e,t,n,r)}finally{Pe.transition=l,O=r}return null}function gf(e,t,n,r){do en();while(it!==null);if(R&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jc(e,o),e===q&&(Y=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||kr||(kr=!0,qs(Fr,function(){return en(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Pe.transition,Pe.transition=null;var i=O;O=1;var u=R;R|=4,Ci.current=null,ff(e,n),Hs(n,e),Fd(yo),Ar=!!vo,yo=vo=null,e.current=n,pf(n),Wc(),R=u,O=i,Pe.transition=o}else e.current=n;if(kr&&(kr=!1,it=e,tl=l),o=e.pendingLanes,o===0&&(ft=null),Qc(n.stateNode),ve(e,K()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(el)throw el=!1,e=Fo,Fo=null,e;return tl&1&&e.tag!==0&&en(),o=e.pendingLanes,o&1?e===Uo?Rn++:(Rn=0,Uo=e):Rn=0,wt(),null}function en(){if(it!==null){var e=za(tl),t=Pe.transition,n=O;try{if(Pe.transition=null,O=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,tl=0,R&6)throw Error(y(331));var l=R;for(R|=4,x=e.current;x!==null;){var o=x,i=o.child;if(x.flags&16){var u=o.deletions;if(u!==null){for(var a=0;a<u.length;a++){var c=u[a];for(x=c;x!==null;){var m=x;switch(m.tag){case 0:case 11:case 15:Ln(8,m,o)}var h=m.child;if(h!==null)h.return=m,x=h;else for(;x!==null;){m=x;var p=m.sibling,g=m.return;if($s(m),m===c){x=null;break}if(p!==null){p.return=g,x=p;break}x=g}}}var w=o.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var D=S.sibling;S.sibling=null,S=D}while(S!==null)}}x=o}}if(o.subtreeFlags&2064&&i!==null)i.return=o,x=i;else e:for(;x!==null;){if(o=x,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ln(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,x=d;break e}x=o.return}}var s=e.current;for(x=s;x!==null;){i=x;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,x=f;else e:for(i=s;x!==null;){if(u=x,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:pl(9,u)}}catch(E){B(u,u.return,E)}if(u===i){x=null;break e}var v=u.sibling;if(v!==null){v.return=u.return,x=v;break e}x=u.return}}if(R=l,wt(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(ol,e)}catch{}r=!0}return r}finally{O=n,Pe.transition=t}}return!1}function $u(e,t,n){t=un(n,t),t=Ts(e,t,1),e=dt(e,t,1),t=ae(),e!==null&&(Jn(e,1,t),ve(e,t))}function B(e,t,n){if(e.tag===3)$u(e,e,n);else for(;t!==null;){if(t.tag===3){$u(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ft===null||!ft.has(r))){e=un(n,e),e=Ls(t,e,1),t=dt(t,e,1),e=ae(),t!==null&&(Jn(t,1,e),ve(t,e));break}}t=t.return}}function wf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(G===4||G===3&&(te&130023424)===te&&500>K()-Ni?Pt(e,0):_i|=n),ve(e,t)}function Zs(e,t){t===0&&(e.mode&1?(t=cr,cr<<=1,!(cr&130023424)&&(cr=4194304)):t=1);var n=ae();e=Je(e,t),e!==null&&(Jn(e,t,n),ve(e,n))}function kf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Zs(e,n)}function Sf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Zs(e,n)}var Js;Js=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,af(e,t,n);pe=!!(e.flags&131072)}else pe=!1,A&&t.flags&1048576&&es(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Lr(e,t),e=t.pendingProps;var l=nn(t,ie.current);bt(t,n),l=wi(null,t,r,e,l,n);var o=ki();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(o=!0,Br(t)):o=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,hi(t),l.updater=dl,t.stateNode=l,l._reactInternals=t,No(t,r,e,n),t=To(null,t,r,!0,o,n)):(t.tag=0,A&&o&&ui(t),ue(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Lr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=xf(r),e=je(r,e),l){case 0:t=zo(null,t,r,e,n);break e;case 1:t=Lu(null,t,r,e,n);break e;case 11:t=zu(null,t,r,e,n);break e;case 14:t=Tu(null,t,r,je(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),zo(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Lu(e,t,r,l,n);case 3:e:{if(Ds(t),e===null)throw Error(y(387));r=t.pendingProps,o=t.memoizedState,l=o.element,ls(e,t),Gr(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){l=un(Error(y(423)),t),t=ju(e,t,r,n,l);break e}else if(r!==l){l=un(Error(y(424)),t),t=ju(e,t,r,n,l);break e}else for(ge=ct(t.stateNode.containerInfo.firstChild),we=t,A=!0,Oe=null,n=as(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rn(),r===l){t=qe(e,t,n);break e}ue(e,t,r,n)}t=t.child}return t;case 5:return ss(t),e===null&&xo(t),r=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,go(r,l)?i=null:o!==null&&go(r,o)&&(t.flags|=32),Os(e,t),ue(e,t,i,n),t.child;case 6:return e===null&&xo(t),null;case 13:return Is(e,t,n);case 4:return mi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ln(t,null,r,n):ue(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),zu(e,t,r,l,n);case 7:return ue(e,t,t.pendingProps,n),t.child;case 8:return ue(e,t,t.pendingProps.children,n),t.child;case 12:return ue(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,o=t.memoizedProps,i=l.value,M(Yr,r._currentValue),r._currentValue=i,o!==null)if(Me(o.value,i)){if(o.children===l.children&&!he.current){t=qe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var u=o.dependencies;if(u!==null){i=o.child;for(var a=u.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Xe(-1,n&-n),a.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?a.next=a:(a.next=m.next,m.next=a),c.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Co(o.return,n,t),u.lanes|=n;break}a=a.next}}else if(o.tag===10)i=o.type===t.type?null:o.child;else if(o.tag===18){if(i=o.return,i===null)throw Error(y(341));i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Co(i,n,t),i=o.sibling}else i=o.child;if(i!==null)i.return=o;else for(i=o;i!==null;){if(i===t){i=null;break}if(o=i.sibling,o!==null){o.return=i.return,i=o;break}i=i.return}o=i}ue(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,bt(t,n),l=ze(l),r=r(l),t.flags|=1,ue(e,t,r,n),t.child;case 14:return r=t.type,l=je(r,t.pendingProps),l=je(r.type,l),Tu(e,t,r,l,n);case 15:return js(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:je(r,l),Lr(e,t),t.tag=1,me(r)?(e=!0,Br(t)):e=!1,bt(t,n),is(t,r,l),No(t,r,l,n),To(null,t,r,!0,e,n);case 19:return Ms(e,t,n);case 22:return Rs(e,t,n)}throw Error(y(156,t.tag))};function qs(e,t){return Ca(e,t)}function Ef(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ne(e,t,n,r){return new Ef(e,t,n,r)}function Li(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xf(e){if(typeof e=="function")return Li(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Go)return 11;if(e===Zo)return 14}return 2}function ht(e,t){var n=e.alternate;return n===null?(n=Ne(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Or(e,t,n,r,l,o){var i=2;if(r=e,typeof e=="function")Li(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Ut:return zt(n.children,l,o,t);case Xo:i=8,l|=8;break;case Gl:return e=Ne(12,n,t,l|2),e.elementType=Gl,e.lanes=o,e;case Zl:return e=Ne(13,n,t,l),e.elementType=Zl,e.lanes=o,e;case Jl:return e=Ne(19,n,t,l),e.elementType=Jl,e.lanes=o,e;case ua:return ml(n,l,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oa:i=10;break e;case ia:i=9;break e;case Go:i=11;break e;case Zo:i=14;break e;case tt:i=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ne(i,n,t,l),t.elementType=e,t.type=r,t.lanes=o,t}function zt(e,t,n,r){return e=Ne(7,e,r,t),e.lanes=n,e}function ml(e,t,n,r){return e=Ne(22,e,r,t),e.elementType=ua,e.lanes=n,e.stateNode={isHidden:!1},e}function Ql(e,t,n){return e=Ne(6,e,null,t),e.lanes=n,e}function Kl(e,t,n){return t=Ne(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Cf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Nl(0),this.expirationTimes=Nl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ji(e,t,n,r,l,o,i,u,a){return e=new Cf(e,t,n,u,a),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Ne(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hi(o),e}function _f(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ft,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bs(e){if(!e)return vt;e=e._reactInternals;e:{if(It(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return qa(e,n,t)}return t}function ec(e,t,n,r,l,o,i,u,a){return e=ji(n,r,!0,e,l,o,i,u,a),e.context=bs(null),n=e.current,r=ae(),l=pt(n),o=Xe(r,l),o.callback=t??null,dt(n,o,l),e.current.lanes=l,Jn(e,l,r),ve(e,r),e}function vl(e,t,n,r){var l=t.current,o=ae(),i=pt(l);return n=bs(n),t.context===null?t.context=n:t.pendingContext=n,t=Xe(o,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dt(l,t,i),e!==null&&(Ie(e,l,i,o),Pr(e,l,i)),i}function rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ri(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}function Nf(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Oi(e){this._internalRoot=e}yl.prototype.render=Oi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));vl(e,t,null,null)};yl.prototype.unmount=Oi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ot(function(){vl(null,e,null,null)}),t[Ze]=null}};function yl(e){this._internalRoot=e}yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ja();e={blockedOn:null,target:e,priority:t};for(var n=0;n<rt.length&&t!==0&&t<rt[n].priority;n++);rt.splice(n,0,e),n===0&&Oa(e)}};function Di(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wu(){}function Pf(e,t,n,r,l){if(l){if(typeof r=="function"){var o=r;r=function(){var c=rl(i);o.call(c)}}var i=ec(t,r,e,0,null,!1,!1,"",Wu);return e._reactRootContainer=i,e[Ze]=i.current,Vn(e.nodeType===8?e.parentNode:e),Ot(),i}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var u=r;r=function(){var c=rl(a);u.call(c)}}var a=ji(e,0,!1,null,null,!1,!1,"",Wu);return e._reactRootContainer=a,e[Ze]=a.current,Vn(e.nodeType===8?e.parentNode:e),Ot(function(){vl(t,a,n,r)}),a}function wl(e,t,n,r,l){var o=n._reactRootContainer;if(o){var i=o;if(typeof l=="function"){var u=l;l=function(){var a=rl(i);u.call(a)}}vl(t,i,e,l)}else i=Pf(n,t,e,l,r);return rl(i)}Ta=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=En(t.pendingLanes);n!==0&&(bo(t,n|1),ve(t,K()),!(R&6)&&(an=K()+500,wt()))}break;case 13:Ot(function(){var r=Je(e,1);if(r!==null){var l=ae();Ie(r,e,1,l)}}),Ri(e,1)}};ei=function(e){if(e.tag===13){var t=Je(e,134217728);if(t!==null){var n=ae();Ie(t,e,134217728,n)}Ri(e,134217728)}};La=function(e){if(e.tag===13){var t=pt(e),n=Je(e,t);if(n!==null){var r=ae();Ie(n,e,t,r)}Ri(e,t)}};ja=function(){return O};Ra=function(e,t){var n=O;try{return O=e,t()}finally{O=n}};uo=function(e,t,n){switch(t){case"input":if(eo(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=sl(r);if(!l)throw Error(y(90));sa(r),eo(r,l)}}}break;case"textarea":da(e,n);break;case"select":t=n.value,t!=null&&Gt(e,!!n.multiple,t,!1)}};ga=Pi;wa=Ot;var zf={usingClientEntryPoint:!1,Events:[bn,Wt,sl,va,ya,Pi]},wn={findFiberByHostInstance:Ct,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Tf={bundleType:wn.bundleType,version:wn.version,rendererPackageName:wn.rendererPackageName,rendererConfig:wn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:be.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ea(e),e===null?null:e.stateNode},findFiberByHostInstance:wn.findFiberByHostInstance||Nf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sr.isDisabled&&Sr.supportsFiber)try{ol=Sr.inject(Tf),We=Sr}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zf;Se.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Di(t))throw Error(y(200));return _f(e,t,null,n)};Se.createRoot=function(e,t){if(!Di(e))throw Error(y(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ji(e,1,!1,null,null,n,!1,r,l),e[Ze]=t.current,Vn(e.nodeType===8?e.parentNode:e),new Oi(t)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=Ea(t),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Ot(e)};Se.hydrate=function(e,t,n){if(!gl(t))throw Error(y(200));return wl(null,e,t,!0,n)};Se.hydrateRoot=function(e,t,n){if(!Di(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,o="",i=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,o,i),e[Ze]=t.current,Vn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new yl(t)};Se.render=function(e,t,n){if(!gl(t))throw Error(y(200));return wl(null,e,t,!1,n)};Se.unmountComponentAtNode=function(e){if(!gl(e))throw Error(y(40));return e._reactRootContainer?(Ot(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ze]=null})}),!0):!1};Se.unstable_batchedUpdates=Pi;Se.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return wl(e,t,n,!1,r)};Se.version="18.2.0-next-9e3b772b8-20220608";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),ea.exports=Se;var Lf=ea.exports,Hu=Lf;Yl.createRoot=Hu.createRoot,Yl.hydrateRoot=Hu.hydrateRoot;function jf(e){const{word:t,setRightCount:n,insideBrackets:r,rightCount:l,setPosition:o,position:i,remaing:u,setRemaing:a,falseCount:c,setFalseCount:m}=e,[h,p]=ee.useState(""),[g,w]=ee.useState(!1),[S,D]=ee.useState(!1),[d,s]=ee.useState(!1),[f,v]=ee.useState(""),E=I=>{if(p(I),I.search(`
`)!==-1)return L({code:"Enter"});S||Fe(I)===Fe(t.english)&&(w(!0),_(),s(!0),n(l+1))},_=()=>{if(d)return;let I=new SpeechSynthesisUtterance(t.english);speechSynthesis.speak(I)},C=()=>{let I=new SpeechSynthesisUtterance(t.english);speechSynthesis.speak(I)},N=()=>{p(t.english),m(c+1),D(!0),C(),s(!0)},$=()=>{v(""),o(i+1),w(!1),D(!1),p(""),a(u-1),s(!1)},L=I=>{if(I.code==="F1"&&N(),I.code==="Enter"){if(Fe(h)!==Fe(t.english)){de(h,t.english);return}$(),w(!1)}};function de(I,tr){const nr=tr||t.english;let Ue="";for(let xe=0;xe<nr.length;xe++){const k=nr[xe];if(!I[xe]){Ue+=`<span style="color: #ff7a7a; text-decoration: underline">${k}</span>`;continue}if(k===I[xe]){Ue+=`<span>${k}</span>`;continue}else if(k!==I[xe]){if(k.toLowerCase()==I[xe].toLowerCase()){Ue+=`<span style="color: orange; text-decoration: underline">${k}</span>`;continue}k.toLowerCase()!==I[xe].toLowerCase()&&(Ue+=`<span style="color: #ff7a7a; text-decoration: underline">${k}</span>`)}}console.log(Ue),v(Ue)}return P.jsx(P.Fragment,{children:t&&P.jsxs("div",{children:[g&&P.jsx(P.Fragment,{children:P.jsxs("div",{className:"true",children:[" ",P.jsx("span",{className:"right-emg",children:"✅"})," إجابة صحيحة"]})}),P.jsx("h3",{children:t.arabic}),f.length>0&&P.jsx(P.Fragment,{children:P.jsx("div",{className:"corecction",dangerouslySetInnerHTML:{__html:f}})}),P.jsx("textarea",{cols:"25",rows:"2",value:h,onChange:I=>{E(I.target.value)}}),P.jsx("br",{}),P.jsx("br",{}),P.jsx("button",{onClick:de,children:"تصحيح الكلمة"}),P.jsx("br",{}),P.jsx("br",{}),P.jsx("button",{onClick:N,children:"أعرض الكلمة"}),P.jsx("br",{}),P.jsx("br",{}),P.jsx("span",{className:"listen",onClick:C,children:"استماع للكلمة"})]})});function Fe(I){if(console.log(r),r)return I.toLowerCase().replaceAll(`
`,"").replaceAll(".","").replaceAll("'","").replaceAll("?","").replaceAll("/","").replaceAll(" ","").replaceAll("-","");if(!r)return I.toLowerCase().replaceAll(`
`,"").replaceAll(/\(.+\)/g,"").replaceAll(".","").replaceAll("'","").replaceAll("?","").replaceAll("/","").replaceAll(" ","").replaceAll("-","")}}function Rf(e){const{words:t,setWords:n,setRemaing:r,setPosition:l}=e;ee.useState([]);const[o,i]=ee.useState(""),u=()=>{const c=o.replaceAll("\r","").split(`
`),m=[];c.forEach(h=>{const p=h.split("	");m.push({english:p[1],arabic:p[0]})}),r(m.length),l(0),n(m)},a=c=>{i(c)};return P.jsxs("div",{style:{marginTop:400},children:[P.jsx("hr",{}),P.jsx("h1",{children:"إضافة كلمات"}),P.jsx("textarea",{value:o,onChange:c=>a(c.target.value),cols:"25",rows:"10"}),P.jsx("br",{}),P.jsx("br",{}),P.jsx("button",{onClick:u,children:"إضافة"}),P.jsx("div",{style:{height:60}})]})}const Of=`آخر	another
آلة حاسبة	calculator
أ/آن	a/an
أب	dad
أبعد	beyond
أتعامل مع العديد من الأشخاص في وظيفتي.	I deal with many people in my job.
أثناء	during
أدناه	below
أزرق	blue
أساسي	basic
أسبرين	aspirin
أسود	black
أشك في أنني سأحصل على الوظيفة	I doubt that I'll get the job
أصم	deaf
أعترف	admit
أعلن	announce
أعمى	blind
أغلق	closed
أفضل	better
أفضلية	advantage
أقرع	bald
ألبوم	album
أمتعة	baggage
أمسك	catch
أنا أحب السمك والبطاطا.	I love fish and chips.
أنا أعمل كموظف جمارك.	I work as a customs officer.
أي	any
أي شئ	anything
أي شخص	anybody
أي شخص	anyone
أي مكان	anywhere
أيضا	also
إتصال	contact
إجابة	answer
إزعاج	disturb
إزعاج	disturb
إعلان	advert
إعلان	advertisement
إعلان	announcement
إعلان (إعلان)	ad (advertisement)
إفطار	breakfast
إلغاء	cancel
إلى الوراء	backwards
إنجاز	achievement
إنذار	alarm
إنها تعمل لصالح مؤسسة خيرية.	She works for a charity.
ائتمان	credit
ابن عم	cousin
ابنة	daughter
اتجاه	direction
اتصالات	communication
اتصل	call in
اتصل لـ	call for
اتصلت لرؤية صديق.	She called in to see a friend.
احتفال	celebration
احجز مسبقًا	book in advance
اختار	choose
اختفى	disappear
اختلاف	difference
اختيار	choice
ارتدي	dressed
استحق	deserve
استغرق وصول الحافلة وقتًا طويلاً.	It took ages for the bus to arrive.
استمر	carry on
استمر في المشي على الرغم من المطر.	He carried on walking despite the rain.
استنادًا إلى	base on
اسحب	drag
اسحب	drag
اشتكى	complain
اشطبها واكتبها مرة أخرى.	Cross it out and write it again.
اضاف	add
اعتبار	account
اعتذار	apology
اعتني بشخص ما	take care of someone
اعمال	business
اقتحم	break in
اقتحم شخص ما الكمبيوتر وسرق الكمبيوتر.	Someone broke in and stole the computer.
اقتراض	borrow
اكتشاف	discovery
اكتشاف	discovery
اكتشف	discover
اكتشف	discover
اكتمال	complete
الأبجدية	alphabet
الأسفل	bottom
الأعمار	ages
الأفضل	best
الأكثر مبيعا	bestseller
الإعلان	advertise
الإقامة	accommodation
الاتصال	connect
الاتصال الهاتفي	dial
الاستنتاج	conclusion
الاعمال الخيرية	charity
الالعاب الرياضية	athletics
البطارية	battery
البيانات	data
التحدي	challenging
التخييم	camping
التراب	dirt
التسلق	climbing
التصميم	design
التطبيق	app
التعامل مع	deal with
التفاصيل	detail
التكلفة	cost
التواصل
​	communicate
الثور الكهربائي	light bulb bull
الجمارك	customs
الجو	air
الحجز	booking
الحدود	border
الحلوى	dessert
الخروج	checkout
الدرج	drawer
الدفاع	defend
الدكتور	Dr
الدكتور	Dr
الرحال	backpacker
الرقص	dancing
الريشة	badminton
السيرة الذاتية (السيرة الذاتية)	CV (Curriculum Vitae)
الشطة	chilli
الطابق الأسفل	downstairs
الطابق الأسفل	downstairs
الطبق الرئيسي	main course
الطلب	demand
الطموح	ambition
الغريب	curiously
الغلاف الجوي	atmosphere
القدرة	ability
القرص الصلب	hard disk
القرص الصلب	hard disk
اللون	colour
المؤكد	certain
المحاصيل	crop
المخبر	detective
المخيم	campsite
المدون	blogger
المركز/المركز	centre/center
المساعدة	assist
المفاتيح الخاصة بك موجودة في مكتب تسجيل الوصول.	Your keys are at the check-in desk.
المقصورة	cabin
المكان المقصود	destination
المناهج الدراسية	curriculum
الموت	death
النادي	club
الهدف	aim
الوديعة	deposit
الوصول إلى الإنترنت	internet access
الى جانب	besides
انتباه	attention
انتهت اللعبة - لقد فات الأوان!	The game is over - you're too late!
انقر	click
انهيار	break down
ايصال	deliver
باب	door
باب	door
بارد	cold
بارد	cool
باقة من الزهور	a bunch of flowers
بالإضافة إلى	in addition
بالتأكيد	definitely
بالتأكيد (لا)	certainly (not)
بالخط العريض	bold
بالطبع	of course
بالفعل	already
بالون	balloon
باليه	ballet
بانيو	bathtub
بجانب	beside
بحرص	carefully
بدأ	begin
بداية	beginning
بدلة سباحة	bathing suit
برغر	burger
بروكلي	broccoli
بسبب	because
بسبب	because of
بسبب	due to
بسكويت	biscuit
بشكل سيئ	badly
بصرف النظر عن	apart from
بصوت عال	aloud
بطاقة	card
بطاقة ائتمان	credit card
بطاقة ائتمان	credit card
بطاقة الصعود إلى الطائرة	boarding pass
بطاقة عيد ميلاد	birthday card
بطة	duck
بطل	champion
بطولة	championship
بعد الآن	anymore
بعد الظهر	afternoon
بعد ذلك	afterwards
بعدما	after
بعيدا	away
بعيدا، بمعزل، على حد	apart
بقرة	cow
بكل تأكيد	absolutely
بكى	cry
بلد	country
بلوزة	blouse
بنك	bank
بني	brown
بواسطة	by
بواسطة اليد	by hand
بوضوح	clearly
بين (بين)	among (amongst)
بيولوجيا	biology
تأتي	come
تأخير	delay
تأليف	composition
تؤثر	affect
تؤكد	confirm
تاريخ	date
تاريخ اليوم	today's date
تتألف	consist
تجادل	argue
تجربة	experience
تجميع	collect
تجنب	avoid
تحت	beneath
تحدي	challenge
تحطم	crash
تحكم في كلبك!	Control your dog!
تحمل	afford
تخفيض	decrease
تدفئة مركزية	central heating
تدور أحداث الفيلم حول صبي صغير.	The film is about a small boy.
تراجع	back
ترتيب	arrangement
تركز	concentrate
تزعج	annoy
تزيين	decorate
تسجيل الخروج	check out
تسجيل الوصول	check-in
تسجيل دخول	check in
تسلق	climb
تسليم	delivery
تصحيح	correction
تصرف	behave
تطبيق	application
تطبيق	apply
تعارض	disagree
تعال	come on
تعال أو ستفوتنا الحافلة.	Come on or we'll miss the bus.
تعتمد (على/على)	depend (on/upon)
تعلن	declare
تعليق	comment
تغادر	depart
تغلب	beat
تغيير	change
تفاحة	apple
تفكك	break up
تقاطع طرق	crossroads
تقدم	advance
تقريبا	almost
تقويم	calendar
تكلفة	charge
تكون قادرة على	be able to
تكييف	air conditioning
تماما	altogether
تماما	completely
تنافس	compete
تنتمي	belong
تنزيل	download
تنزيل	download
تنمية	development
تهانينا!	congratulations!
توقف عن التصرف كطفل.	Stop acting like a child.
توقيف	arrest
ثقافة	culture
ثقافي	cultural
جاذبية	attraction
جاف	dry
جبن	cheese
جثة	body
جذاب	attractive
جذاب	cute
جذب	attract
جرس	bell
جرف	cliff
جريمة	crime
جزار	butcher
جزر	carrot
جزمة	boot
جسر	bridge
جليسة أطفال	babysitter
جمال	beauty
جمع	addition
جمل	camel
جميع	all
جميل	beautiful
جهاز تحكم عن بعد	a remote control
جوز الهند	coconut
جيش	army
حادث	accident
حادث	accident
حافلة	bus
حبل	cable
حبوب	cereal
حبوب ذرة	corn
حجة	argument
حذر	careful
حذف	delete
حرف كبير	capital letter
حرق	burn
حرق	burning
حزام	belt
حساب بنكي	bank account
حسب الاسم	by name
حسنًا، حسنًا	all right/alright
حشد	crowd
حضور	audience
حفر	dig
حفلة موسيقية	concert
حقيبة الظهر	backpacking
حقيبة ظهر	backpack
حلاق	barber
حلم	dream
حلويات	candy
حمار	donkey
حمار	donkey
حمام	bath
حمام	bathroom
حمل	carry
حمية	diet
حوالي	approximately
حوالي 500 طالب	about 500 students
حوض	basin
حول	about
حول	around
حي	alive
حيوان	animal
خائب الامل	disappointed
خائب الامل	disappointed
خائف	afraid
خباز	baker
خبز	bake
خبز	bread
خجلان	ashamed
خد	cheek
خريف	autumn
خزانة	cabinet
خزانة	cupboard
خزانة ذات أدراج	chest of drawers
خصم	discount
خصم	discount
خطر	danger
خطير	dangerous
خلاق	creative
خلف	behind
خلفية	background
خلفية	background
خليج	bay
خليل	boyfriend
خيار	cucumber
خيبة الأمل	disappointment
خيبة الأمل	disappointment
دائرة	circle
دائما	always
دافئ	cosy
دجاج	chicken
دراج	cyclist
دراجة	bicycle
دراجة هوائية	bike
دراما	drama
دراما	drama
درجة	degree
دردشة	chat
دزينة	dozen
دزينة	dozen
دفاع	defence
دفع وديعة	pay a deposit
دفن	bury
دقق	check
دقيق	accurate
دلو	bucket
دم	blood
دماغ	brain
دمل	boil
دمية	doll
دمية	doll
دورة	cycle
دورة اللغة الإنجليزية	English course
دولار	dollar
دولار	dollar
دولفين	dolphin
دولفين	dolphin
دي جي	DJ
دي جي	DJ
ديسك جوكي	disc jockey
ديسك جوكي	disc jockey
ديسكو	disco
ديسكو	disco
ديناصور	dinosaur
ذراع	arm
ذقن	chin
ذكرى سنوية	anniversary
ذكي	clever
رأس المال	capital
رئيس	boss
رائد فضاء	astronaut
رائع	awesome
رائعة	brilliant
رابطة محامين	bar
راحة	comfort
رافق	accompany
راقصة	dancer
رجل	an
رجل اعمال	businessman
رحلة بحرية	cruise
رخصة قيادة	driving licence
رخيص	cheap
رسم	art
رسم	draw
رسم	draw
رسم	drawing
رعاية	care
رعاية الأطفال مقابل أجر	babysit
رغم	despite
رف الكتب	bookshelf
رقاقة	chip
رقص	dance
رقمي	digital
ركوب الدراجات	cycling
رياضي	athlete
ريف	countryside
زاوية	corner
زبدة	butter
زبدية	bowl
زجاجة	bottle
زر	button
زميل	classmate
زميل	colleague
زوج من الأحذية	a pair of boots
زوجان	couple
زي	costume
زي	dress
زي هالوين	a Halloween costume
زي وطني	national costume
سأتصل بك في السابعة.	I'll call for you at 7.
سأقوم باستثناء في هذه الحالة.	I'll make an exception in this case.
سائق	driver
ساحر	charming
ساحل	coast
ساعة حائط	clock
ساكن	consonant
سبورة	blackboard
ستارة	curtain
ستصل الحافلة التالية في غضون خمس دقائق.	The next bus is due in five minutes.
سجادة	carpet
سحابة	cloud
سرير	bed
سعال	cough
سقط	down
سقط	down
سقف	ceiling
سلاح الجو	air force
سلة	basket
سلة المهملات	dustbin
سلة المهملات.	trash can.
سلسلة	chain
سلوك	attitude
سلوك	behaviour
سم	centimetre
سمح	allow
سمك القد	cod
سن	age
سنت	cent
سنوي	annual
سهولة الوصول إلى وسط المدينة	easy access to the city center
سوار	bracelet
سيارة	car
سيارة أجرة	cab
سيارة إسعاف	ambulance
سيدة الأعمال	businesswoman
سيدي العزيز	Dear Sir
سيرة	biography
سيرك	circus
سيطر	control
سينما	cinema
شاطئ	beach
شجاع	brave
شجاعة	courage
شخصية	character
شرفة	balcony
شركة	company
شركة طيران	airline
شطب	cross out
شطرنج	chess
شقة	apartment
شقراء (شقراء)	blond(e)
شقيق	brother
شك	doubt
شك	doubt
شكوى	complaint
شمعة	candle
شهادة	certificate
شهادة دبلوم	diploma
شهادة في الرياضيات	a degree in maths
شواء	barbecue
شوكولاتة	chocolate
شيء	something
شيك	cheque
صباحا	a.m.
صبي	boy
صحراء	desert
صحيح	correct
صعب	difficult
صعوبة	difficulty
صف	classroom
صفق	clap
صلة	connection
صندوق	bin
صندوق	box
صندوق السيارة	the boot of the car
صنف	class
ضار	bad
ضد	against
ضربة	blow
ضرر	damage
ضمادة	bandage
طائر	bird
طائرة	aeroplane
طاقم	crew
طاقم الطائرة	cabin crew
طالما	as long as
طاه	chef
طبخ	cook
طبخ	cooking
طبق	dish
طبق	dish
طبل	drum
طبيب أسنان	dentist
طبيب/دكتور	doctor / Dr
طبيب/دكتور	doctor / Dr
طرح	bring up
طفل	baby
طفل	child
طلب وظيفة	job application
طور	develop
طوق	collar
ظرف	condition
عارض	casual
عاصمة	capital city
عاصمة إيطاليا	the capital of Italy
عام	common
عبر	across
عبور	crossing
عجل	calf
عرض	display
عرض	display
عرض الدردشة	chat show
عرف	custom
عروس	bride
عزيز	dear
عزيز جدا للشراء	too dear to buy
عشاء	dinner
عضة	bite
عظم	bone
عقد	contract
علاج	cure
علامة تجارية جديدة	brand new
علة	bug
على الأقل	at least
على الإطلاق	at all
على الرغم من	although
على حد سواء	alike
على طول	along
على كل حال	anyway
عمة	aunt
عمق	depth
عمق الماء	the depth of the water
عمل	action
عملة	coin
عملة	currency
عميق	deep
عميل	customer
عن طريق الخطأ	by mistake
عن طريق الصدفة	by accident
عند/@	at / @
عنوان البريد الإلكتروني الخاص بي	My email address
عيادة	clinic
عيد ميلاد	birthday
غائب	absent
غائم	cloudy
غاضب	angry
غبار	dust
غرفة الدردشة	chatroom
غرفة تغيير الملابس	changing room
غرفة طعام	dining room
غرفة نوم	bedroom
غسالة صحون	dishwasher
غسالة صحون	dishwasher
غش	cheat
غطاء	cover
غطس	diving
غطس	diving
غواص	diver
غواص	diver
غير مبالي	careless
فائدة	benefit
فاتورة الكهرباء	electricity bill
فارغ	blank
فاصلة	comma
فاصوليا	bean
فراشة	butterfly
فرشاة	brush
فرصة	chance
فرع	branch
فرقة	band
فرملة	brake
فرن	cooker
فصل	chapter
فصل اللغة	language class
فضولي	curious
فظيع	awful
فعل	act
فعل	do
فعل	do
فعلا	actually
فنان	artist
فوق	above
في	at
في البداية	at first
في الخارج	abroad
في الفصل الثاني (من المسرحية)	in the second act (of the play)
في النهاية	at last
في الوقت الحاضر	at present
في حالة جيدة	in good condition
في نفس الوقت	at the same time
في وقت واحد	at once
قادر	able
قارب	boat
قارة	continent
قاسي	cruel
قامت بتقطيع الكعكة إلى قطع صغيرة.	She cut up the cake into small pieces.
قاموا بتسجيل الدخول إلى فندق.	They checked in to a hotel.
قاموس	dictionary
قبطان	captain
قبعة	cap
قبل	ago
قبل	before
قبول	admission
قبول الرسوم/التكلفة/السعر	charges/cost/price admit
قدما	ahead
قديم	ancient
قذر	dirty
قرار	decision
قرص	disk
قرص	disk
قرص فيديو رقمي	DVD
قرص مضغوط	CD
قرص/قرص	disc/disk
قرص/قرص	disc/disk
قرن	century
قسم	department
قضية	case
قط	cat
قطرة	drop
قطع	cut up
قطعة ورق فارغة	a blank piece of paper
قطن	cotton
قفص	cage
قلعة	castle
قلق	anxious
قليلا	bit
قم بتنزيل التطبيق على هاتفك.	Download the app to your phone.
قناة	canal
قناة	channel
قنبلة	bomb
قهوة	coffee
قيادة	drive
كاتدرائية	cathedral
كاحل	ankle
كاري	curry
كاميرا	camera
كاميرا رقمية	digital camera
كان الفيلم فظيعًا للغاية.	The movie was absolutely awful.
كبار السن	aged
كبير	big
كتاب	book
كتلة من الشقق	block of flats
كتيب	brochure
كرة	ball
كرة سلة	basketball
كرتون	cartoon
كرسي	armchair
كرسي	chair
كرنب	cabbage
كره	dislike
كره	dislike
كريم	cream
كسر	break
كعكة	cake
كلا	both
كلاسيكي	classical
كلب	dog
كلب	dog
كلية	college
كما	as
كمبيوتر	computer
كن قد انتهى	be over
كهف	cave
كوب	cup
كوخ	cottage
كولا	cola
كوميدي	comic
كوميديا	comedy
كيس	bag
كيمياء	chemistry
كيميائي	chemist
ل تحقيق	achieve
لحاف	blanket
لحاف	duvet
لحم بقري	beef
لحية	beard
لدي بعض المشاكل للتعامل معها.	I've had some problems to deal with.
لدي حجز ليوم 19.	I have a booking for the 19th.
لديك شيء مشترك	have something in common
لديها لهجة فرنسية جميلة.	She has a beautiful French accent.
لذيذ	delicious
لرسم الستائر	to draw the curtains
لرسم صورة لشخص ما أو	to draw a picture of someone or
لرسم صورة لشخص ما أو شيء ما	to draw a picture of someone or something
لعبة البيسبول	baseball
لعبة الكريكيت	cricket
لعبة لوحية	board game
لعبة ورق	card game
لقب مشترك	a common surname
لقد انفصلت مجموعة البوب.	The pop group has broken up.
لقد تعطلت السيارة.	The car has broken down.
لقد خرج من الفندق في نهاية إقامته.	He checked out of the hotel at the end of his stay.
لقد نسيت زي السباحة الخاص بي.	I forgot my swimming costume.
لقد نشأت في لندن.	She was brought up in London.
لقد وجد حشرة في سريره.	He found a bug in his bed.
لكن	but
للاقتراب	to draw near
للانضمام إلى النادي	to join a club
للتمثيل في مسرحية	to act in a play
للدردشة عبر الإنترنت	to chat online
لهجة	accent
لوحة	board
مؤتمر	conference
مؤلف	author
ما بين	between
ما عليك سوى سحب الملف وإسقاطه في	Just drag and drop the file into the
ما عليك سوى سحب الملف وإسقاطه في سلة المهملات.	Just drag and drop the file into the trash can.
ماشية	cattle
مباشرة	direct
مباشرة	directly
مبتدئ	beginner
مبلغ	amount
مبنى	building
مبنى سكني	apartment building
متاح	available
متجر تجميل	drugstore
متجر متعدد الأقسام	department store
متضرر	damaged
متقدم	advanced
متى تتفكك المدرسة؟	When does school break up?
مجاور	close
مجرم	criminal
مجعد	curly
مجموعة	bunch
مجموعة	collection
مجموعة رائعة من الأصدقاء	a great bunch of friends
مجنون	crazy
محادثة	conversation
محاسب	accountant
محاولة	attempt
محتوى	contents
محطة الحافلات	bus station
محكمة	court
محكمة القانون	law court
مختلف	different
مخرج	director
مخطط	diagram
مخلوق	creature
مخيبة للآمال	disappointing
مخيبة للآمال	disappointing
مدرب	coach
مدهش	amazing
مدونة	blog
مدينة	city
مر	bitter
مراسم	ceremony
مراهق	adult
مربك	confusing
مرة أخرى	again
مرح	cheerful
مرحلة الطفولة	childhood
مرشح	candidate
مرض	disease
مرض	disease
مركزي	central
مريح	comfortable
مزدحم	crowded
مزدوج	double
مزدوج	double
مسابقة	contest
مسار	course
مساعد	assistant
مسافة	distance
مسافة	distance
مساوئ	disadvantage
مستحق	due
مستيقظ	awake
مسرور	delighted
مسل	amusing
مشتري	buyer
مشرق	bright
مشروب «ارتدي ملابسك»	get dressed drink
مشروع قانون	bill
مشط	comb
مشغل دي في دي	DVD player
مشغل سي دي	CD player
مشغول	busy
مشوش	confused
مصباح	bulb
مصرفي	banking
مصمم	designer
مضرب	bat
مطار	airport
مظلم	dark
مظهر خارجي	appearance
معاق	disabled
معبر المشاة	pedestrian crossing
معجب	admire
معدل	average
معركة	battle
معسكر	camp
معطف	coat
معفاة من الرسوم	duty-free
معقد	complicated
مغادرة	departure
مغامرة	adventure
مغبر	dusty
مغلي	boiled
مقالة	article
مقبول	acceptable
مقزز	disgusting
مقزز	disgusting
مقصف	cafeteria
مقصف	canteen
مقهى/مقهى	café/cafe
مكالمة	call
مكتئب	depressed
مكتب	desk
مكتب الحجز	booking office
مكتبة	bookcase
مكتبة	bookshop
مكتبة	bookstore
مكسور	broken
ملابس	clothes
ملابس عادية	casual clothes
ملعب تنس	tennis court
ملفات تعريف الارتباط	cookie
ملول	bored
ملون	colourful
ممثل	actor
ممثلة	actress
ممل	boring
ممل	dull
من طراز عتيق	antique
مناخ	climate
مناسب	convenient
منافس	competitor
منافسة	competition
مناقشة	discuss
مناقشة	discuss
منبه	alarm clock
مندهش	amazed
منطقة	area
منطقة	district
منطقة	district
منظف	cleaner
منظمة؟	org?
منع	block
مهرج	clown
مهنة	career
مهندس معماري	architect
موجز	brief
موز	banana
موسيقى كلاسيكية	classical music
موعد	appointment
موقف الباص	bus stop
موقف سيارات	car park
مولود	born
ميت	dead
ميلاد	birth
نائم	asleep
نجاح كبير	celebrity
نحلة	bee
نسخ	copy
نسيم	breeze
نشاط	activity
نشيط	active
نصح	advise
نصيحة	advice
نظيف	clean
نفذ	carry out
نفذت الخطة وفقًا للتعليمات.	She carried out the plan according to the instructions.
نفس	breath
نقاش	discussion
نقاش	discussion
نقد	cash
نقطة	dot
نقطة	dot
نقطة نقدية	cashpoint
نملة	ant
نموذج طلب	application form
نهج	approach
هاتف الرد	answerphone
هاتف محمول	cell phone
هتافات!	cheers!
هجوم	attack
هدم	destroy
هدوء	calm
هزيمة	defeat
هل تريد مني أن أحمل حقيبتك؟	Would you like me to carry your case?
هل ستقبل الوظيفة بالفعل؟	Are you actually going to take the job?
هل قمت بزيارة كامبريدج سول دوت أورج؟	Have you visited CambridgeESOL dot org?
هل قمت بزيارة كامبريدج/سول دوت؟	Have you visited CambridgeESOL dot
هل نسير حول المبنى؟	Shall we walk round the block?
هندسة معمارية	architecture
هو	be
و	and
واثق	confident
واجب	duty
واسع	broad
واضح	clear
وثائقي	documentary
وثائقي	documentary
وثيقة	document
وثيقة	document
وجع	ache
وحده	alone
وداعا	bye
ورق مقوى	cardboard
وسادة	cushion
وصف	describe
وصف	description
وصل	arrive
وصول	arrival
وصول ذوي الاحتياجات الخاصة	disabled access
وظيفتي صعبة ولكن هذا لا يزعجني.	My job's hard but that doesn't bother me.
وفقا لـ	according to
وكالة	agency
وكالة سفر	a travel agency
وكذلك (مثل)	as well (as)
ولوج	access
يا عزيزي!	Oh dear!
يبدو	appear
يبني	build
يتحمل	bear
يتعاملون	deal
يتنفس	breathe
يجلب	bring
يحتفل	celebrate
يحتوي	contain
يحضر	attend
يخاطب	address
يخيب الأمل	disappoint
يخيب الأمل	disappoint
يربط	attach
يرتب	arrange
يرجى ترك التعليقات أدناه.	Please leave comments below.
يزعج	bother
يستطيعون	can
يستمر	continue
يشترى	buy
يصبح	become
يصدق	believe
يطلب	ask
يعبر	cross
يعتبر	consider
يعتذر	apologise
يعتمد ذلك على ما تريد القيام به.	It depends on what you want to do.
يعد	count
يغوص	dive
يغوص	dive
يقارن	compare
يقبل	accept
يقرر	decide
يقسم	divide
يقسم	divide
يقطع	cut
يقنع	convince
يلوم	blame
يمكن (مللي فولت)	could (mv)
يموت	die
ينزف	bleed
ينشئ	create
يوافق	agree
يوافق	approve
يوم	day
يوميا	daily
يوميات	diary`;function Df(e){const{words:t,setWords:n,setRemaing:r,setPosition:l}=e,[o,i]=ee.useState(0),u=Of.replaceAll("\r","").split(`
`),a=[];u.forEach(g=>{const w=g.split("	");a.push({english:w[1],arabic:w[0]})});let c=[],m=1,h=[];for(;;){if(m%10==0&&(console.log(m),c.push(h),h=[]),!a[m-1]){c.push(h);break}h.push(a[m-1]),m++}console.log(c);const p=g=>{i(g),r(c[g].length),l(0),n(c[g])};return P.jsxs("div",{style:{paddingTop:150},children:[P.jsx("input",{type:"text",id:"partNumber",value:o,onChange:g=>i(parseInt(g.target.value))}),P.jsx("button",{className:"part-btn",onClick:()=>{p(o)},children:"update"}),P.jsx("br",{}),P.jsx("div",{className:"parts",children:c.map((g,w)=>P.jsx("div",{className:"part",onClick:()=>p(w),children:(w+1)*10},"ar"+w))})]})}function If(){const[e,t]=ee.useState([]),[n,r]=ee.useState(0),[l,o]=ee.useState(e.length),[i,u]=ee.useState(e.length-n-l),[a,c]=ee.useState(0),[m,h]=ee.useState(!0),p=()=>{r(0),u(0)};return P.jsxs(P.Fragment,{children:[P.jsx("div",{id:"counter",children:l}),P.jsxs("div",{className:"statics",children:[P.jsx("div",{className:"right",children:i}),P.jsx("div",{className:"false",children:n}),P.jsx("div",{className:"reset",onClick:p,children:"إعادة العداد"})]}),P.jsxs("div",{className:"inside-brak",onClick:()=>h(!m),children:[" تصحيح بين القوسين ",m?P.jsx("span",{className:"active",children:"نعم"}):P.jsx("span",{className:"desactive",children:"لا"})]}),e.length>0&&P.jsx(jf,{word:e[a],falseCount:n,setFalseCount:r,position:a,remaing:l,setRemaing:o,setPosition:c,rightCount:i,setRightCount:u,insideBrackets:m}),e.length<=0&&P.jsxs(P.Fragment,{children:[P.jsx("br",{}),"   قم بإضافة الكلمات للبدء "]}),l<=0&&e.length>0&&P.jsx(P.Fragment,{children:P.jsx("span",{className:"replay",onClick:()=>{c(0),o(e.length)},children:"إعادة الكلمات"})}),P.jsx(Df,{words:e,setWords:t,setRemaing:o,setPosition:c}),P.jsx(Rf,{setPosition:c,setRemaing:o,words:e,setWords:t})]})}Yl.createRoot(document.getElementById("root")).render(P.jsx(wc.StrictMode,{children:P.jsx(If,{})}));
