/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vitamin_list = __webpack_require__(1);
var genomeLink = __webpack_require__(2);

function buildSelector(selector) {

  vitamin_list.forEach(function (el) {
    var choice = document.createElement("OPTION");
    choice.setAttribute("value", el);
    var text = document.createTextNode(el);
    choice.appendChild(text);
    selector.appendChild(choice);
  });
}

function setAuthUrl(a, b, c) {
  return genomeLink.OAuth.authorizeUrl({ scope: a.join(' '),
    clientId: b,
    callbackUrl: c });
};

window.addEventListener("DOMContentLoaded", function () {

  var GENOMELINK_CLIENT_ID = 't0pRdHSsViMvhmFKGejrph0jvtyQFx760cz32qKB';
  var GENOMELINK_CLIENT_SECRET = 'gi27X7FmYpqv0dkb5VJTsuBoNpOG7uBjDFxvdLg1uE3Aqj2UE9vKtWZI24bcJIdfrjFYRRu6AM5qV6OuWZ3HYSg33l08ONAPD6TnH2IxMoiA3IEm35Q2DdyMoxdsDlos';
  var GENOMELINK_CALLBACK_URL = 'http://127.0.0.1:3000/callback';
  // const GENOMELINK_CALLBACK_URL='https://vitadetective-api.herokuapp.com/callback';
  var selector = document.getElementById("vitamin_selector");

  buildSelector(selector);

  var authorizeUrl = setAuthUrl(vitamin_list, GENOMELINK_CLIENT_ID, GENOMELINK_CALLBACK_URL);
  console.log(vitamin_list);

  document.getElementById('auth-url').href = authorizeUrl;
  selector.addEventListener("change", function (e) {
    e.preventDefault();
    // authorizeUrl = setAuthUrl(selector.value, GENOMELINK_CLIENT_ID, GENOMELINK_CALLBACK_URL);
    // document.getElementById('auth-url').href = authorizeUrl;
    console.log(authorizeUrl);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var vitamin_list = ['report:protein-intake', 'report:carbohydrate-intake', 'report:caffeine-metabolite-ratio', 'report:caffeine-consumption', 'report:egg-allergy', 'report:peanuts-allergy', 'report:milk-allergy', 'report:vitamin-a', 'report:vitamin-b12', 'report:vitamin-d', 'report:vitamin-e', 'report:response-to-vitamin-e-supplementation', 'report:folate', 'report:calcium', 'report:magnesium', 'report:phosphorus', 'report:iron', 'report:alpha-linolenic-acid', 'report:beta-carotene', 'report:blood-glucose'];

module.exports = vitamin_list;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {!function(t,n){ true?module.exports=n(__webpack_require__(4)):"function"==typeof define&&define.amd?define("genomelink-node",["isomorphic-fetch"],n):"object"==typeof exports?exports["genomelink-node"]=n(require("isomorphic-fetch")):t["genomelink-node"]=n(t["isomorphic-fetch"])}(this,function(t){return function(t){function n(e){if(r[e])return r[e].exports;var i=r[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var r={};return n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=126)}([function(t,n,r){var e=r(2),i=r(21),o=r(12),u=r(13),c=r(18),a=function(t,n,r){var f,s,h,l,p=t&a.F,v=t&a.G,d=t&a.S,y=t&a.P,g=t&a.B,m=v?e:d?e[n]||(e[n]={}):(e[n]||{}).prototype,b=v?i:i[n]||(i[n]={}),x=b.prototype||(b.prototype={});v&&(r=n);for(f in r)s=!p&&m&&void 0!==m[f],h=(s?m:r)[f],l=g&&s?c(h,e):y&&"function"==typeof h?c(Function.call,h):h,m&&u(m,f,h,t&a.U),b[f]!=h&&o(b,f,l),y&&x[f]!=h&&(x[f]=h)};e.core=i,a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,r){var e=r(4);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){var e=r(49)("wks"),i=r(32),o=r(2).Symbol,u="function"==typeof o;(t.exports=function(t){return e[t]||(e[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=e},function(t,n,r){t.exports=!r(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(1),i=r(90),o=r(22),u=Object.defineProperty;n.f=r(6)?Object.defineProperty:function(t,n,r){if(e(t),n=o(n,!0),e(r),i)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(24),i=Math.min;t.exports=function(t){return t>0?i(e(t),9007199254740991):0}},function(t,n,r){var e=r(23);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(7),i=r(31);t.exports=r(6)?function(t,n,r){return e.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(2),i=r(12),o=r(11),u=r(32)("src"),c=Function.toString,a=(""+c).split("toString");r(21).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var f="function"==typeof r;f&&(o(r,"name")||i(r,"name",n)),t[n]!==r&&(f&&(o(r,u)||i(r,u,t[n]?""+t[n]:a.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:i(t,n,r):(delete t[n],i(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n,r){var e=r(0),i=r(3),o=r(23),u=/"/g,c=function(t,n,r,e){var i=String(o(t)),c="<"+n;return""!==r&&(c+=" "+r+'="'+String(e).replace(u,"&quot;")+'"'),c+">"+i+"</"+n+">"};t.exports=function(t,n){var r={};r[t]=n(c),e(e.P+e.F*i(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",r)}},function(t,n,r){var e=r(46),i=r(23);t.exports=function(t){return e(i(t))}},function(t,n,r){var e=r(47),i=r(31),o=r(15),u=r(22),c=r(11),a=r(90),f=Object.getOwnPropertyDescriptor;n.f=r(6)?f:function(t,n){if(t=o(t),n=u(n,!0),a)try{return f(t,n)}catch(t){}if(c(t,n))return i(!e.f.call(t,n),t[n])}},function(t,n,r){var e=r(11),i=r(9),o=r(66)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),e(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(10);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,i){return t.call(n,r,e,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){"use strict";var e=r(3);t.exports=function(t,n){return!!t&&e(function(){n?t.call(null,function(){},1):t.call(null)})}},function(t,n){var r=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t))return t;var r,i;if(n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!e(i=r.call(t)))return i;if(!n&&"function"==typeof(r=t.toString)&&!e(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(0),i=r(21),o=r(3);t.exports=function(t,n){var r=(i.Object||{})[t]||Object[t],u={};u[t]=n(r),e(e.S+e.F*o(function(){r(1)}),"Object",u)}},function(t,n,r){var e=r(18),i=r(46),o=r(9),u=r(8),c=r(83);t.exports=function(t,n){var r=1==t,a=2==t,f=3==t,s=4==t,h=6==t,l=5==t||h,p=n||c;return function(n,c,v){for(var d,y,g=o(n),m=i(g),b=e(c,v,3),x=u(m.length),w=0,S=r?p(n,x):a?p(n,0):void 0;x>w;w++)if((l||w in m)&&(d=m[w],y=b(d,w,g),t))if(r)S[w]=y;else if(y)switch(t){case 3:return!0;case 5:return d;case 6:return w;case 2:S.push(d)}else if(s)return!1;return h?-1:f||s?s:S}}},function(t,n,r){"use strict";if(r(6)){var e=r(33),i=r(2),o=r(3),u=r(0),c=r(59),a=r(89),f=r(18),s=r(39),h=r(31),l=r(12),p=r(41),v=r(24),d=r(8),y=r(116),g=r(35),m=r(22),b=r(11),x=r(48),w=r(4),S=r(9),_=r(80),O=r(36),E=r(17),P=r(37).f,M=r(82),j=r(32),A=r(5),F=r(26),I=r(50),N=r(57),k=r(85),R=r(44),L=r(54),T=r(38),C=r(84),U=r(106),D=r(7),W=r(16),G=D.f,B=W.f,V=i.RangeError,q=i.TypeError,z=i.Uint8Array,K=Array.prototype,Y=a.ArrayBuffer,J=a.DataView,$=F(0),H=F(2),X=F(3),Z=F(4),Q=F(5),tt=F(6),nt=I(!0),rt=I(!1),et=k.values,it=k.keys,ot=k.entries,ut=K.lastIndexOf,ct=K.reduce,at=K.reduceRight,ft=K.join,st=K.sort,ht=K.slice,lt=K.toString,pt=K.toLocaleString,vt=A("iterator"),dt=A("toStringTag"),yt=j("typed_constructor"),gt=j("def_constructor"),mt=c.CONSTR,bt=c.TYPED,xt=c.VIEW,wt=F(1,function(t,n){return Pt(N(t,t[gt]),n)}),St=o(function(){return 1===new z(new Uint16Array([1]).buffer)[0]}),_t=!!z&&!!z.prototype.set&&o(function(){new z(1).set({})}),Ot=function(t,n){var r=v(t);if(r<0||r%n)throw V("Wrong offset!");return r},Et=function(t){if(w(t)&&bt in t)return t;throw q(t+" is not a typed array!")},Pt=function(t,n){if(!(w(t)&&yt in t))throw q("It is not a typed array constructor!");return new t(n)},Mt=function(t,n){return jt(N(t,t[gt]),n)},jt=function(t,n){for(var r=0,e=n.length,i=Pt(t,e);e>r;)i[r]=n[r++];return i},At=function(t,n,r){G(t,n,{get:function(){return this._d[r]}})},Ft=function(t){var n,r,e,i,o,u,c=S(t),a=arguments.length,s=a>1?arguments[1]:void 0,h=void 0!==s,l=M(c);if(void 0!=l&&!_(l)){for(u=l.call(c),e=[],n=0;!(o=u.next()).done;n++)e.push(o.value);c=e}for(h&&a>2&&(s=f(s,arguments[2],2)),n=0,r=d(c.length),i=Pt(this,r);r>n;n++)i[n]=h?s(c[n],n):c[n];return i},It=function(){for(var t=0,n=arguments.length,r=Pt(this,n);n>t;)r[t]=arguments[t++];return r},Nt=!!z&&o(function(){pt.call(new z(1))}),kt=function(){return pt.apply(Nt?ht.call(Et(this)):Et(this),arguments)},Rt={copyWithin:function(t,n){return U.call(Et(this),t,n,arguments.length>2?arguments[2]:void 0)},every:function(t){return Z(Et(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return C.apply(Et(this),arguments)},filter:function(t){return Mt(this,H(Et(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return Q(Et(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return tt(Et(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){$(Et(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return rt(Et(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Et(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ft.apply(Et(this),arguments)},lastIndexOf:function(t){return ut.apply(Et(this),arguments)},map:function(t){return wt(Et(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ct.apply(Et(this),arguments)},reduceRight:function(t){return at.apply(Et(this),arguments)},reverse:function(){for(var t,n=this,r=Et(n).length,e=Math.floor(r/2),i=0;i<e;)t=n[i],n[i++]=n[--r],n[r]=t;return n},some:function(t){return X(Et(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return st.call(Et(this),t)},subarray:function(t,n){var r=Et(this),e=r.length,i=g(t,e);return new(N(r,r[gt]))(r.buffer,r.byteOffset+i*r.BYTES_PER_ELEMENT,d((void 0===n?e:g(n,e))-i))}},Lt=function(t,n){return Mt(this,ht.call(Et(this),t,n))},Tt=function(t){Et(this);var n=Ot(arguments[1],1),r=this.length,e=S(t),i=d(e.length),o=0;if(i+n>r)throw V("Wrong length!");for(;o<i;)this[n+o]=e[o++]},Ct={entries:function(){return ot.call(Et(this))},keys:function(){return it.call(Et(this))},values:function(){return et.call(Et(this))}},Ut=function(t,n){return w(t)&&t[bt]&&"symbol"!=typeof n&&n in t&&String(+n)==String(n)},Dt=function(t,n){return Ut(t,n=m(n,!0))?h(2,t[n]):B(t,n)},Wt=function(t,n,r){return!(Ut(t,n=m(n,!0))&&w(r)&&b(r,"value"))||b(r,"get")||b(r,"set")||r.configurable||b(r,"writable")&&!r.writable||b(r,"enumerable")&&!r.enumerable?G(t,n,r):(t[n]=r.value,t)};mt||(W.f=Dt,D.f=Wt),u(u.S+u.F*!mt,"Object",{getOwnPropertyDescriptor:Dt,defineProperty:Wt}),o(function(){lt.call({})})&&(lt=pt=function(){return ft.call(this)});var Gt=p({},Rt);p(Gt,Ct),l(Gt,vt,Ct.values),p(Gt,{slice:Lt,set:Tt,constructor:function(){},toString:lt,toLocaleString:kt}),At(Gt,"buffer","b"),At(Gt,"byteOffset","o"),At(Gt,"byteLength","l"),At(Gt,"length","e"),G(Gt,dt,{get:function(){return this[bt]}}),t.exports=function(t,n,r,a){a=!!a;var f=t+(a?"Clamped":"")+"Array",h="get"+t,p="set"+t,v=i[f],g=v||{},m=v&&E(v),b=!v||!c.ABV,S={},_=v&&v.prototype,M=function(t,r){var e=t._d;return e.v[h](r*n+e.o,St)},j=function(t,r,e){var i=t._d;a&&(e=(e=Math.round(e))<0?0:e>255?255:255&e),i.v[p](r*n+i.o,e,St)},A=function(t,n){G(t,n,{get:function(){return M(this,n)},set:function(t){return j(this,n,t)},enumerable:!0})};b?(v=r(function(t,r,e,i){s(t,v,f,"_d");var o,u,c,a,h=0,p=0;if(w(r)){if(!(r instanceof Y||"ArrayBuffer"==(a=x(r))||"SharedArrayBuffer"==a))return bt in r?jt(v,r):Ft.call(v,r);o=r,p=Ot(e,n);var g=r.byteLength;if(void 0===i){if(g%n)throw V("Wrong length!");if((u=g-p)<0)throw V("Wrong length!")}else if((u=d(i)*n)+p>g)throw V("Wrong length!");c=u/n}else c=y(r),u=c*n,o=new Y(u);for(l(t,"_d",{b:o,o:p,l:u,e:c,v:new J(o)});h<c;)A(t,h++)}),_=v.prototype=O(Gt),l(_,"constructor",v)):o(function(){v(1)})&&o(function(){new v(-1)})&&L(function(t){new v,new v(null),new v(1.5),new v(t)},!0)||(v=r(function(t,r,e,i){s(t,v,f);var o;return w(r)?r instanceof Y||"ArrayBuffer"==(o=x(r))||"SharedArrayBuffer"==o?void 0!==i?new g(r,Ot(e,n),i):void 0!==e?new g(r,Ot(e,n)):new g(r):bt in r?jt(v,r):Ft.call(v,r):new g(y(r))}),$(m!==Function.prototype?P(g).concat(P(m)):P(g),function(t){t in v||l(v,t,g[t])}),v.prototype=_,e||(_.constructor=v));var F=_[vt],I=!!F&&("values"==F.name||void 0==F.name),N=Ct.values;l(v,yt,!0),l(_,bt,f),l(_,xt,!0),l(_,gt,v),(a?new v(1)[dt]==f:dt in _)||G(_,dt,{get:function(){return f}}),S[f]=v,u(u.G+u.W+u.F*(v!=g),S),u(u.S,f,{BYTES_PER_ELEMENT:n}),u(u.S+u.F*o(function(){g.of.call(v,1)}),f,{from:Ft,of:It}),"BYTES_PER_ELEMENT"in _||l(_,"BYTES_PER_ELEMENT",n),u(u.P,f,Rt),T(f),u(u.P+u.F*_t,f,{set:Tt}),u(u.P+u.F*!I,f,Ct),e||_.toString==lt||(_.toString=lt),u(u.P+u.F*o(function(){new v(1).slice()}),f,{slice:Lt}),u(u.P+u.F*(o(function(){return[1,2].toLocaleString()!=new v([1,2]).toLocaleString()})||!o(function(){_.toLocaleString.call([1,2])})),f,{toLocaleString:kt}),R[f]=I?F:N,e||I||l(_,vt,N)}}else t.exports=function(){}},function(t,n,r){var e=r(111),i=r(0),o=r(49)("metadata"),u=o.store||(o.store=new(r(114))),c=function(t,n,r){var i=u.get(t);if(!i){if(!r)return;u.set(t,i=new e)}var o=i.get(n);if(!o){if(!r)return;i.set(n,o=new e)}return o},a=function(t,n,r){var e=c(n,r,!1);return void 0!==e&&e.has(t)},f=function(t,n,r){var e=c(n,r,!1);return void 0===e?void 0:e.get(t)},s=function(t,n,r,e){c(r,e,!0).set(t,n)},h=function(t,n){var r=c(t,n,!1),e=[];return r&&r.forEach(function(t,n){e.push(n)}),e},l=function(t){return void 0===t||"symbol"==typeof t?t:String(t)},p=function(t){i(i.S,"Reflect",t)};t.exports={store:u,map:c,has:a,get:f,set:s,keys:h,key:l,exp:p}},function(t,n,r){var e=r(32)("meta"),i=r(4),o=r(11),u=r(7).f,c=0,a=Object.isExtensible||function(){return!0},f=!r(3)(function(){return a(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},h=function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,e)){if(!a(t))return"F";if(!n)return"E";s(t)}return t[e].i},l=function(t,n){if(!o(t,e)){if(!a(t))return!0;if(!n)return!1;s(t)}return t[e].w},p=function(t){return f&&v.NEED&&a(t)&&!o(t,e)&&s(t),t},v=t.exports={KEY:e,NEED:!1,fastKey:h,getWeak:l,onFreeze:p}},function(t,n,r){var e=r(5)("unscopables"),i=Array.prototype;void 0==i[e]&&r(12)(i,e,{}),t.exports=function(t){i[e][t]=!0}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports=!1},function(t,n,r){var e=r(92),i=r(67);t.exports=Object.keys||function(t){return e(t,i)}},function(t,n,r){var e=r(24),i=Math.max,o=Math.min;t.exports=function(t,n){return t=e(t),t<0?i(t+n,0):o(t,n)}},function(t,n,r){var e=r(1),i=r(93),o=r(67),u=r(66)("IE_PROTO"),c=function(){},a=function(){var t,n=r(64)("iframe"),e=o.length;for(n.style.display="none",r(68).appendChild(n),n.src="javascript:",t=n.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),a=t.F;e--;)delete a.prototype[o[e]];return a()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=a(),void 0===n?r:i(r,n)}},function(t,n,r){var e=r(92),i=r(67).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},function(t,n,r){"use strict";var e=r(2),i=r(7),o=r(6),u=r(5)("species");t.exports=function(t){var n=e[t];o&&n&&!n[u]&&i.f(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,r,e){if(!(t instanceof n)||void 0!==e&&e in t)throw TypeError(r+": incorrect invocation!");return t}},function(t,n,r){var e=r(18),i=r(104),o=r(80),u=r(1),c=r(8),a=r(82),f={},s={},n=t.exports=function(t,n,r,h,l){var p,v,d,y,g=l?function(){return t}:a(t),m=e(r,h,n?2:1),b=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(p=c(t.length);p>b;b++)if((y=n?m(u(v=t[b])[0],v[1]):m(t[b]))===f||y===s)return y}else for(d=g.call(t);!(v=d.next()).done;)if((y=i(d,m,v.value,n))===f||y===s)return y};n.BREAK=f,n.RETURN=s},function(t,n,r){var e=r(13);t.exports=function(t,n,r){for(var i in n)e(t,i,n[i],r);return t}},function(t,n,r){var e=r(7).f,i=r(11),o=r(5)("toStringTag");t.exports=function(t,n,r){t&&!i(t=r?t:t.prototype,o)&&e(t,o,{configurable:!0,value:n})}},function(t,n,r){var e=r(0),i=r(23),o=r(3),u=r(70),c="["+u+"]",a="​",f=RegExp("^"+c+c+"*"),s=RegExp(c+c+"*$"),h=function(t,n,r){var i={},c=o(function(){return!!u[t]()||a[t]()!=a}),f=i[t]=c?n(l):u[t];r&&(i[r]=f),e(e.P+e.F*c,"String",i)},l=h.trim=function(t,n){return t=String(i(t)),1&n&&(t=t.replace(f,"")),2&n&&(t=t.replace(s,"")),t};t.exports=h},function(t,n){t.exports={}},function(t,n,r){var e=r(4);t.exports=function(t,n){if(!e(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},function(t,n,r){var e=r(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){var e=r(19),i=r(5)("toStringTag"),o="Arguments"==e(function(){return arguments}()),u=function(t,n){try{return t[n]}catch(t){}};t.exports=function(t){var n,r,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=u(n=Object(t),i))?r:o?e(n):"Object"==(c=e(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n,r){var e=r(2),i=e["__core-js_shared__"]||(e["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,r){var e=r(15),i=r(8),o=r(35);t.exports=function(t){return function(n,r,u){var c,a=e(n),f=i(a.length),s=o(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(19);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(4),i=r(19),o=r(5)("match");t.exports=function(t){var n;return e(t)&&(void 0!==(n=t[o])?!!n:"RegExp"==i(t))}},function(t,n,r){var e=r(5)("iterator"),i=!1;try{var o=[7][e]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!i)return!1;var r=!1;try{var o=[7],u=o[e]();u.next=function(){return{done:r=!0}},o[e]=function(){return u},t(o)}catch(t){}return r}},function(t,n,r){"use strict";var e=r(1);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){"use strict";var e=r(12),i=r(13),o=r(3),u=r(23),c=r(5);t.exports=function(t,n,r){var a=c(t),f=r(u,a,""[t]),s=f[0],h=f[1];o(function(){var n={};return n[a]=function(){return 7},7!=""[t](n)})&&(i(String.prototype,t,s),e(RegExp.prototype,a,2==n?function(t,n){return h.call(t,this,n)}:function(t){return h.call(t,this)}))}},function(t,n,r){var e=r(1),i=r(10),o=r(5)("species");t.exports=function(t,n){var r,u=e(t).constructor;return void 0===u||void 0==(r=e(u)[o])?n:i(r)}},function(t,n,r){"use strict";var e=r(2),i=r(0),o=r(13),u=r(41),c=r(29),a=r(40),f=r(39),s=r(4),h=r(3),l=r(54),p=r(42),v=r(71);t.exports=function(t,n,r,d,y,g){var m=e[t],b=m,x=y?"set":"add",w=b&&b.prototype,S={},_=function(t){var n=w[t];o(w,t,"delete"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!s(t))&&n.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!s(t)?void 0:n.call(this,0===t?0:t)}:"add"==t?function(t){return n.call(this,0===t?0:t),this}:function(t,r){return n.call(this,0===t?0:t,r),this})};if("function"==typeof b&&(g||w.forEach&&!h(function(){(new b).entries().next()}))){var O=new b,E=O[x](g?{}:-0,1)!=O,P=h(function(){O.has(1)}),M=l(function(t){new b(t)}),j=!g&&h(function(){for(var t=new b,n=5;n--;)t[x](n,n);return!t.has(-0)});M||(b=n(function(n,r){f(n,b,t);var e=v(new m,n,b);return void 0!=r&&a(r,y,e[x],e),e}),b.prototype=w,w.constructor=b),(P||j)&&(_("delete"),_("has"),y&&_("get")),(j||E)&&_(x),g&&w.clear&&delete w.clear}else b=d.getConstructor(n,t,y,x),u(b.prototype,r),c.NEED=!0;return p(b,t),S[t]=b,i(i.G+i.W+i.F*(b!=m),S),g||d.setStrong(b,t,y),b}},function(t,n,r){for(var e,i=r(2),o=r(12),u=r(32),c=u("typed_array"),a=u("view"),f=!(!i.ArrayBuffer||!i.DataView),s=f,h=0,l="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");h<9;)(e=i[l[h++]])?(o(e.prototype,c,!0),o(e.prototype,a,!0)):s=!1;t.exports={ABV:f,CONSTR:s,TYPED:c,VIEW:a}},function(t,n,r){"use strict";t.exports=r(33)||!r(3)(function(){var t=Math.random();__defineSetter__.call(null,t,function(){}),delete r(2)[t]})},function(t,n,r){"use strict";var e=r(0);t.exports=function(t){e(e.S,t,{of:function(){for(var t=arguments.length,n=Array(t);t--;)n[t]=arguments[t];return new this(n)}})}},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(18),u=r(40);t.exports=function(t){e(e.S,t,{from:function(t){var n,r,e,c,a=arguments[1];return i(this),n=void 0!==a,n&&i(a),void 0==t?new this:(r=[],n?(e=0,c=o(a,arguments[2],2),u(t,!1,function(t){r.push(c(t,e++))})):u(t,!1,r.push,r),new this(r))}})}},function(t,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,n,r){var e=r(4),i=r(2).document,o=e(i)&&e(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,r){var e=r(2),i=r(21),o=r(33),u=r(91),c=r(7).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){var e=r(49)("keys"),i=r(32);t.exports=function(t){return e[t]||(e[t]=i(t))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(4),i=r(1),o=function(t,n){if(i(t),!e(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,e){try{e=r(18)(Function.call,r(16).f(Object.prototype,"__proto__").set,2),e(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,r){return o(t,r),n?t.__proto__=r:e(t,r),t}}({},!1):void 0),check:o}},function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},function(t,n,r){var e=r(4),i=r(69).set;t.exports=function(t,n,r){var o,u=n.constructor;return u!==r&&"function"==typeof u&&(o=u.prototype)!==r.prototype&&e(o)&&i&&i(t,o),t}},function(t,n,r){"use strict";var e=r(24),i=r(23);t.exports=function(t){var n=String(i(this)),r="",o=e(t);if(o<0||o==1/0)throw RangeError("Count can't be negative");for(;o>0;(o>>>=1)&&(n+=n))1&o&&(r+=n);return r}},function(t,n){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},function(t,n){var r=Math.expm1;t.exports=!r||r(10)>22025.465794806718||r(10)<22025.465794806718||-2e-17!=r(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:r},function(t,n,r){var e=r(24),i=r(23);t.exports=function(t){return function(n,r){var o,u,c=String(i(n)),a=e(r),f=c.length;return a<0||a>=f?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):o:t?c.slice(a,a+2):u-56320+(o-55296<<10)+65536)}}},function(t,n,r){"use strict";var e=r(33),i=r(0),o=r(13),u=r(12),c=r(11),a=r(44),f=r(77),s=r(42),h=r(17),l=r(5)("iterator"),p=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,d,y,g,m){f(r,n,d);var b,x,w,S=function(t){if(!p&&t in P)return P[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},_=n+" Iterator",O="values"==y,E=!1,P=t.prototype,M=P[l]||P["@@iterator"]||y&&P[y],j=M||S(y),A=y?O?S("entries"):j:void 0,F="Array"==n?P.entries||M:M;if(F&&(w=h(F.call(new t)))!==Object.prototype&&w.next&&(s(w,_,!0),e||c(w,l)||u(w,l,v)),O&&M&&"values"!==M.name&&(E=!0,j=function(){return M.call(this)}),e&&!m||!p&&!E&&P[l]||u(P,l,j),a[n]=j,a[_]=v,y)if(b={values:O?j:S("values"),keys:g?j:S("keys"),entries:A},m)for(x in b)x in P||o(P,x,b[x]);else i(i.P+i.F*(p||E),n,b);return b}},function(t,n,r){"use strict";var e=r(36),i=r(31),o=r(42),u={};r(12)(u,r(5)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:i(1,r)}),o(t,n+" Iterator")}},function(t,n,r){var e=r(53),i=r(23);t.exports=function(t,n,r){if(e(n))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(t))}},function(t,n,r){var e=r(5)("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(r){try{return n[e]=!1,!"/./"[t](n)}catch(t){}}return!0}},function(t,n,r){var e=r(44),i=r(5)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||o[i]===t)}},function(t,n,r){"use strict";var e=r(7),i=r(31);t.exports=function(t,n,r){n in t?e.f(t,n,i(0,r)):t[n]=r}},function(t,n,r){var e=r(48),i=r(5)("iterator"),o=r(44);t.exports=r(21).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,n,r){var e=r(219);t.exports=function(t,n){return new(e(t))(n)}},function(t,n,r){"use strict";var e=r(9),i=r(35),o=r(8);t.exports=function(t){for(var n=e(this),r=o(n.length),u=arguments.length,c=i(u>1?arguments[1]:void 0,r),a=u>2?arguments[2]:void 0,f=void 0===a?r:i(a,r);f>c;)n[c++]=t;return n}},function(t,n,r){"use strict";var e=r(30),i=r(107),o=r(44),u=r(15);t.exports=r(76)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,i(1)):"keys"==n?i(0,r):"values"==n?i(0,t[r]):i(0,[r,t[r]])},"values"),o.Arguments=o.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e,i,o,u=r(18),c=r(97),a=r(68),f=r(64),s=r(2),h=s.process,l=s.setImmediate,p=s.clearImmediate,v=s.MessageChannel,d=s.Dispatch,y=0,g={},m=function(){var t=+this;if(g.hasOwnProperty(t)){var n=g[t];delete g[t],n()}},b=function(t){m.call(t.data)};l&&p||(l=function(t){for(var n=[],r=1;arguments.length>r;)n.push(arguments[r++]);return g[++y]=function(){c("function"==typeof t?t:Function(t),n)},e(y),y},p=function(t){delete g[t]},"process"==r(19)(h)?e=function(t){h.nextTick(u(m,t,1))}:d&&d.now?e=function(t){d.now(u(m,t,1))}:v?(i=new v,o=i.port2,i.port1.onmessage=b,e=u(o.postMessage,o,1)):s.addEventListener&&"function"==typeof postMessage&&!s.importScripts?(e=function(t){s.postMessage(t+"","*")},s.addEventListener("message",b,!1)):e="onreadystatechange"in f("script")?function(t){a.appendChild(f("script")).onreadystatechange=function(){a.removeChild(this),m.call(t)}}:function(t){setTimeout(u(m,t,1),0)}),t.exports={set:l,clear:p}},function(t,n,r){var e=r(2),i=r(86).set,o=e.MutationObserver||e.WebKitMutationObserver,u=e.process,c=e.Promise,a="process"==r(19)(u);t.exports=function(){var t,n,r,f=function(){var e,i;for(a&&(e=u.domain)&&e.exit();t;){i=t.fn,t=t.next;try{i()}catch(e){throw t?r():n=void 0,e}}n=void 0,e&&e.enter()};if(a)r=function(){u.nextTick(f)};else if(o){var s=!0,h=document.createTextNode("");new o(f).observe(h,{characterData:!0}),r=function(){h.data=s=!s}}else if(c&&c.resolve){var l=c.resolve();r=function(){l.then(f)}}else r=function(){i.call(e,f)};return function(e){var i={fn:e,next:void 0};n&&(n.next=i),t||(t=i,r()),n=i}}},function(t,n,r){"use strict";function e(t){var n,r;this.promise=new t(function(t,e){if(void 0!==n||void 0!==r)throw TypeError("Bad Promise constructor");n=t,r=e}),this.resolve=i(n),this.reject=i(r)}var i=r(10);t.exports.f=function(t){return new e(t)}},function(t,n,r){"use strict";function e(t,n,r){var e,i,o,u=Array(r),c=8*r-n-1,a=(1<<c)-1,f=a>>1,s=23===n?U(2,-24)-U(2,-77):0,h=0,l=t<0||0===t&&1/t<0?1:0;for(t=C(t),t!=t||t===L?(i=t!=t?1:0,e=a):(e=D(W(t)/G),t*(o=U(2,-e))<1&&(e--,o*=2),t+=e+f>=1?s/o:s*U(2,1-f),t*o>=2&&(e++,o/=2),e+f>=a?(i=0,e=a):e+f>=1?(i=(t*o-1)*U(2,n),e+=f):(i=t*U(2,f-1)*U(2,n),e=0));n>=8;u[h++]=255&i,i/=256,n-=8);for(e=e<<n|i,c+=n;c>0;u[h++]=255&e,e/=256,c-=8);return u[--h]|=128*l,u}function i(t,n,r){var e,i=8*r-n-1,o=(1<<i)-1,u=o>>1,c=i-7,a=r-1,f=t[a--],s=127&f;for(f>>=7;c>0;s=256*s+t[a],a--,c-=8);for(e=s&(1<<-c)-1,s>>=-c,c+=n;c>0;e=256*e+t[a],a--,c-=8);if(0===s)s=1-u;else{if(s===o)return e?NaN:f?-L:L;e+=U(2,n),s-=u}return(f?-1:1)*e*U(2,s-n)}function o(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function u(t){return[255&t]}function c(t){return[255&t,t>>8&255]}function a(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function f(t){return e(t,52,8)}function s(t){return e(t,23,4)}function h(t,n,r){P(t[A],n,{get:function(){return this[r]}})}function l(t,n,r,e){var i=+r,o=O(i);if(o+n>t[V])throw R(F);var u=t[B]._b,c=o+t[q],a=u.slice(c,c+n);return e?a:a.reverse()}function p(t,n,r,e,i,o){var u=+r,c=O(u);if(c+n>t[V])throw R(F);for(var a=t[B]._b,f=c+t[q],s=e(+i),h=0;h<n;h++)a[f+h]=s[o?h:n-h-1]}var v=r(2),d=r(6),y=r(33),g=r(59),m=r(12),b=r(41),x=r(3),w=r(39),S=r(24),_=r(8),O=r(116),E=r(37).f,P=r(7).f,M=r(84),j=r(42),A="prototype",F="Wrong index!",I=v.ArrayBuffer,N=v.DataView,k=v.Math,R=v.RangeError,L=v.Infinity,T=I,C=k.abs,U=k.pow,D=k.floor,W=k.log,G=k.LN2,B=d?"_b":"buffer",V=d?"_l":"byteLength",q=d?"_o":"byteOffset";if(g.ABV){if(!x(function(){I(1)})||!x(function(){new I(-1)})||x(function(){return new I,new I(1.5),new I(NaN),"ArrayBuffer"!=I.name})){I=function(t){return w(this,I),new T(O(t))};for(var z,K=I[A]=T[A],Y=E(T),J=0;Y.length>J;)(z=Y[J++])in I||m(I,z,T[z]);y||(K.constructor=I)}var $=new N(new I(2)),H=N[A].setInt8;$.setInt8(0,2147483648),$.setInt8(1,2147483649),!$.getInt8(0)&&$.getInt8(1)||b(N[A],{setInt8:function(t,n){H.call(this,t,n<<24>>24)},setUint8:function(t,n){H.call(this,t,n<<24>>24)}},!0)}else I=function(t){w(this,I,"ArrayBuffer");var n=O(t);this._b=M.call(Array(n),0),this[V]=n},N=function(t,n,r){w(this,N,"DataView"),w(t,I,"DataView");var e=t[V],i=S(n);if(i<0||i>e)throw R("Wrong offset!");if(r=void 0===r?e-i:_(r),i+r>e)throw R("Wrong length!");this[B]=t,this[q]=i,this[V]=r},d&&(h(I,"byteLength","_l"),h(N,"buffer","_b"),h(N,"byteLength","_l"),h(N,"byteOffset","_o")),b(N[A],{getInt8:function(t){return l(this,1,t)[0]<<24>>24},getUint8:function(t){return l(this,1,t)[0]},getInt16:function(t){var n=l(this,2,t,arguments[1]);return(n[1]<<8|n[0])<<16>>16},getUint16:function(t){var n=l(this,2,t,arguments[1]);return n[1]<<8|n[0]},getInt32:function(t){return o(l(this,4,t,arguments[1]))},getUint32:function(t){return o(l(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return i(l(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return i(l(this,8,t,arguments[1]),52,8)},setInt8:function(t,n){p(this,1,t,u,n)},setUint8:function(t,n){p(this,1,t,u,n)},setInt16:function(t,n){p(this,2,t,c,n,arguments[2])},setUint16:function(t,n){p(this,2,t,c,n,arguments[2])},setInt32:function(t,n){p(this,4,t,a,n,arguments[2])},setUint32:function(t,n){p(this,4,t,a,n,arguments[2])},setFloat32:function(t,n){p(this,4,t,s,n,arguments[2])},setFloat64:function(t,n){p(this,8,t,f,n,arguments[2])}});j(I,"ArrayBuffer"),j(N,"DataView"),m(N[A],g.VIEW,!0),n.ArrayBuffer=I,n.DataView=N},function(t,n,r){t.exports=!r(6)&&!r(3)(function(){return 7!=Object.defineProperty(r(64)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){n.f=r(5)},function(t,n,r){var e=r(11),i=r(15),o=r(50)(!1),u=r(66)("IE_PROTO");t.exports=function(t,n){var r,c=i(t),a=0,f=[];for(r in c)r!=u&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~o(f,r)||f.push(r));return f}},function(t,n,r){var e=r(7),i=r(1),o=r(34);t.exports=r(6)?Object.defineProperties:function(t,n){i(t);for(var r,u=o(n),c=u.length,a=0;c>a;)e.f(t,r=u[a++],n[r]);return t}},function(t,n,r){var e=r(15),i=r(37).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?c(t):i(e(t))}},function(t,n,r){"use strict";var e=r(34),i=r(51),o=r(47),u=r(9),c=r(46),a=Object.assign;t.exports=!a||r(3)(function(){var t={},n={},r=Symbol(),e="abcdefghijklmnopqrst";return t[r]=7,e.split("").forEach(function(t){n[t]=t}),7!=a({},t)[r]||Object.keys(a({},n)).join("")!=e})?function(t,n){for(var r=u(t),a=arguments.length,f=1,s=i.f,h=o.f;a>f;)for(var l,p=c(arguments[f++]),v=s?e(p).concat(s(p)):e(p),d=v.length,y=0;d>y;)h.call(p,l=v[y++])&&(r[l]=p[l]);return r}:a},function(t,n,r){"use strict";var e=r(10),i=r(4),o=r(97),u=[].slice,c={},a=function(t,n,r){if(!(n in c)){for(var e=[],i=0;i<n;i++)e[i]="a["+i+"]";c[n]=Function("F,a","return new F("+e.join(",")+")")}return c[n](t,r)};t.exports=Function.bind||function(t){var n=e(this),r=u.call(arguments,1),c=function(){var e=r.concat(u.call(arguments));return this instanceof c?a(n,e.length,e):o(n,e,t)};return i(n.prototype)&&(c.prototype=n.prototype),c}},function(t,n){t.exports=function(t,n,r){var e=void 0===r;switch(n.length){case 0:return e?t():t.call(r);case 1:return e?t(n[0]):t.call(r,n[0]);case 2:return e?t(n[0],n[1]):t.call(r,n[0],n[1]);case 3:return e?t(n[0],n[1],n[2]):t.call(r,n[0],n[1],n[2]);case 4:return e?t(n[0],n[1],n[2],n[3]):t.call(r,n[0],n[1],n[2],n[3])}return t.apply(r,n)}},function(t,n,r){var e=r(2).parseInt,i=r(43).trim,o=r(70),u=/^[-+]?0[xX]/;t.exports=8!==e(o+"08")||22!==e(o+"0x16")?function(t,n){var r=i(String(t),3);return e(r,n>>>0||(u.test(r)?16:10))}:e},function(t,n,r){var e=r(2).parseFloat,i=r(43).trim;t.exports=1/e(r(70)+"-0")!=-1/0?function(t){var n=i(String(t),3),r=e(n);return 0===r&&"-"==n.charAt(0)?-0:r}:e},function(t,n,r){var e=r(19);t.exports=function(t,n){if("number"!=typeof t&&"Number"!=e(t))throw TypeError(n);return+t}},function(t,n,r){var e=r(4),i=Math.floor;t.exports=function(t){return!e(t)&&isFinite(t)&&i(t)===t}},function(t,n){t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},function(t,n,r){var e=r(73),i=Math.pow,o=i(2,-52),u=i(2,-23),c=i(2,127)*(2-u),a=i(2,-126),f=function(t){return t+1/o-1/o};t.exports=Math.fround||function(t){var n,r,i=Math.abs(t),s=e(t);return i<a?s*f(i/a/u)*a*u:(n=(1+u/o)*i,r=n-(n-i),r>c||r!=r?s*(1/0):s*r)}},function(t,n,r){var e=r(1);t.exports=function(t,n,r,i){try{return i?n(e(r)[0],r[1]):n(r)}catch(n){var o=t.return;throw void 0!==o&&e(o.call(t)),n}}},function(t,n,r){var e=r(10),i=r(9),o=r(46),u=r(8);t.exports=function(t,n,r,c,a){e(n);var f=i(t),s=o(f),h=u(f.length),l=a?h-1:0,p=a?-1:1;if(r<2)for(;;){if(l in s){c=s[l],l+=p;break}if(l+=p,a?l<0:h<=l)throw TypeError("Reduce of empty array with no initial value")}for(;a?l>=0:h>l;l+=p)l in s&&(c=n(c,s[l],l,f));return c}},function(t,n,r){"use strict";var e=r(9),i=r(35),o=r(8);t.exports=[].copyWithin||function(t,n){var r=e(this),u=o(r.length),c=i(t,u),a=i(n,u),f=arguments.length>2?arguments[2]:void 0,s=Math.min((void 0===f?u:i(f,u))-a,u-c),h=1;for(a<c&&c<a+s&&(h=-1,a+=s-1,c+=s-1);s-- >0;)a in r?r[c]=r[a]:delete r[c],c+=h,a+=h;return r}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){r(6)&&"g"!=/./g.flags&&r(7).f(RegExp.prototype,"flags",{configurable:!0,get:r(55)})},function(t,n){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,n,r){var e=r(1),i=r(4),o=r(88);t.exports=function(t,n){if(e(t),i(n)&&n.constructor===t)return n;var r=o.f(t);return(0,r.resolve)(n),r.promise}},function(t,n,r){"use strict";var e=r(112),i=r(45);t.exports=r(58)("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var n=e.getEntry(i(this,"Map"),t);return n&&n.v},set:function(t,n){return e.def(i(this,"Map"),0===t?0:t,n)}},e,!0)},function(t,n,r){"use strict";var e=r(7).f,i=r(36),o=r(41),u=r(18),c=r(39),a=r(40),f=r(76),s=r(107),h=r(38),l=r(6),p=r(29).fastKey,v=r(45),d=l?"_s":"size",y=function(t,n){var r,e=p(n);if("F"!==e)return t._i[e];for(r=t._f;r;r=r.n)if(r.k==n)return r};t.exports={getConstructor:function(t,n,r,f){var s=t(function(t,e){c(t,s,n,"_i"),t._t=n,t._i=i(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=e&&a(e,r,t[f],t)});return o(s.prototype,{clear:function(){for(var t=v(this,n),r=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete r[e.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var r=v(this,n),e=y(r,t);if(e){var i=e.n,o=e.p;delete r._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),r._f==e&&(r._f=i),r._l==e&&(r._l=o),r[d]--}return!!e},forEach:function(t){v(this,n);for(var r,e=u(t,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(e(r.v,r.k,this);r&&r.r;)r=r.p},has:function(t){return!!y(v(this,n),t)}}),l&&e(s.prototype,"size",{get:function(){return v(this,n)[d]}}),s},def:function(t,n,r){var e,i,o=y(t,n);return o?o.v=r:(t._l=o={i:i=p(n,!0),k:n,v:r,p:e=t._l,n:void 0,r:!1},t._f||(t._f=o),e&&(e.n=o),t[d]++,"F"!==i&&(t._i[i]=o)),t},getEntry:y,setStrong:function(t,n,r){f(t,n,function(t,r){this._t=v(t,n),this._k=r,this._l=void 0},function(){for(var t=this,n=t._k,r=t._l;r&&r.r;)r=r.p;return t._t&&(t._l=r=r?r.n:t._t._f)?"keys"==n?s(0,r.k):"values"==n?s(0,r.v):s(0,[r.k,r.v]):(t._t=void 0,s(1))},r?"entries":"values",!r,!0),h(n)}}},function(t,n,r){"use strict";var e=r(112),i=r(45);t.exports=r(58)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"Set"),t=0===t?0:t,t)}},e)},function(t,n,r){"use strict";var e,i=r(26)(0),o=r(13),u=r(29),c=r(95),a=r(115),f=r(4),s=r(3),h=r(45),l=u.getWeak,p=Object.isExtensible,v=a.ufstore,d={},y=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(f(t)){var n=l(t);return!0===n?v(h(this,"WeakMap")).get(t):n?n[this._i]:void 0}},set:function(t,n){return a.def(h(this,"WeakMap"),t,n)}},m=t.exports=r(58)("WeakMap",y,g,a,!0,!0);s(function(){return 7!=(new m).set((Object.freeze||Object)(d),7).get(d)})&&(e=a.getConstructor(y,"WeakMap"),c(e.prototype,g),u.NEED=!0,i(["delete","has","get","set"],function(t){var n=m.prototype,r=n[t];o(n,t,function(n,i){if(f(n)&&!p(n)){this._f||(this._f=new e);var o=this._f[t](n,i);return"set"==t?this:o}return r.call(this,n,i)})}))},function(t,n,r){"use strict";var e=r(41),i=r(29).getWeak,o=r(1),u=r(4),c=r(39),a=r(40),f=r(26),s=r(11),h=r(45),l=f(5),p=f(6),v=0,d=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},g=function(t,n){return l(t.a,function(t){return t[0]===n})};y.prototype={get:function(t){var n=g(this,t);if(n)return n[1]},has:function(t){return!!g(this,t)},set:function(t,n){var r=g(this,t);r?r[1]=n:this.a.push([t,n])},delete:function(t){var n=p(this.a,function(n){return n[0]===t});return~n&&this.a.splice(n,1),!!~n}},t.exports={getConstructor:function(t,n,r,o){var f=t(function(t,e){c(t,f,n,"_i"),t._t=n,t._i=v++,t._l=void 0,void 0!=e&&a(e,r,t[o],t)});return e(f.prototype,{delete:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(h(this,n)).delete(t):r&&s(r,this._i)&&delete r[this._i]},has:function(t){if(!u(t))return!1;var r=i(t);return!0===r?d(h(this,n)).has(t):r&&s(r,this._i)}}),f},def:function(t,n,r){var e=i(o(n),!0);return!0===e?d(t).set(n,r):e[t._i]=r,t},ufstore:d}},function(t,n,r){var e=r(24),i=r(8);t.exports=function(t){if(void 0===t)return 0;var n=e(t),r=i(n);if(n!==r)throw RangeError("Wrong length!");return r}},function(t,n,r){var e=r(37),i=r(51),o=r(1),u=r(2).Reflect;t.exports=u&&u.ownKeys||function(t){var n=e.f(o(t)),r=i.f;return r?n.concat(r(t)):n}},function(t,n,r){"use strict";function e(t,n,r,f,s,h,l,p){for(var v,d,y=s,g=0,m=!!l&&c(l,p,3);g<f;){if(g in r){if(v=m?m(r[g],g,n):r[g],d=!1,o(v)&&(d=v[a],d=void 0!==d?!!d:i(v)),d&&h>0)y=e(t,n,v,u(v.length),y,h-1)-1;else{if(y>=9007199254740991)throw TypeError();t[y]=v}y++}g++}return y}var i=r(52),o=r(4),u=r(8),c=r(18),a=r(5)("isConcatSpreadable");t.exports=e},function(t,n,r){var e=r(8),i=r(72),o=r(23);t.exports=function(t,n,r,u){var c=String(o(t)),a=c.length,f=void 0===r?" ":String(r),s=e(n);if(s<=a||""==f)return c;var h=s-a,l=i.call(f,Math.ceil(h/f.length));return l.length>h&&(l=l.slice(0,h)),u?l+c:c+l}},function(t,n,r){var e=r(34),i=r(15),o=r(47).f;t.exports=function(t){return function(n){for(var r,u=i(n),c=e(u),a=c.length,f=0,s=[];a>f;)o.call(u,r=c[f++])&&s.push(t?[r,u[r]]:u[r]);return s}}},function(t,n,r){var e=r(48),i=r(122);t.exports=function(t){return function(){if(e(this)!=t)throw TypeError(t+"#toJSON isn't generic");return i(this)}}},function(t,n,r){var e=r(40);t.exports=function(t,n){var r=[];return e(t,!1,r.push,r,n),r}},function(t,n){t.exports=Math.scale||function(t,n,r,e,i){return 0===arguments.length||t!=t||n!=n||r!=r||e!=e||i!=i?NaN:t===1/0||t===-1/0?t:(t-n)*(i-e)/(r-n)+e}},function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.API_BASE="https://genomelink.io"},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,r){function e(i,o){try{var u=n[i](o),c=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(c).then(function(t){e("next",t)},function(t){e("throw",t)});t(c)}return e("next")})}}Object.defineProperty(n,"__esModule",{value:!0}),n.createURLSearchParams=n.fetchBy=void 0;var o=r(331),u=e(o),c=r(332),a=e(c);n.fetchBy=function(){var t=i(regeneratorRuntime.mark(function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",(0,u.default)(n,r).then(function(t){return t.ok?t.json():t.status}).catch(function(t){console.error(t)}));case 1:case"end":return t.stop()}},t,void 0)}));return function(n){return t.apply(this,arguments)}}(),n.createURLSearchParams=function(t){var n=new a.default;return Object.keys(t).forEach(function(r){return n.append(r,t[r])}),n}},function(t,n,r){r(127),t.exports=r(329)},function(t,n,r){"use strict";(function(t){function n(t,n,r){t[n]||Object[e](t,n,{writable:!0,configurable:!0,value:r})}if(r(128),r(325),r(326),t._babelPolyfill)throw new Error("only one instance of babel-polyfill is allowed");t._babelPolyfill=!0;var e="defineProperty";n(String.prototype,"padLeft","".padStart),n(String.prototype,"padRight","".padEnd),"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(t){[][t]&&n(Array,t,Function.call.bind([][t]))})}).call(n,r(63))},function(t,n,r){r(129),r(131),r(132),r(133),r(134),r(135),r(136),r(137),r(138),r(139),r(140),r(141),r(142),r(143),r(144),r(145),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(155),r(156),r(157),r(158),r(159),r(160),r(161),r(162),r(163),r(164),r(165),r(166),r(167),r(168),r(169),r(170),r(171),r(172),r(173),r(174),r(175),r(176),r(177),r(178),r(179),r(180),r(181),r(182),r(183),r(184),r(185),r(186),r(187),r(188),r(189),r(190),r(191),r(192),r(193),r(194),r(195),r(196),r(197),r(198),r(199),r(200),r(201),r(202),r(203),r(204),r(205),r(206),r(207),r(209),r(210),r(212),r(213),r(214),r(215),r(216),r(217),r(218),r(220),r(221),r(222),r(223),r(224),r(225),r(226),r(227),r(228),r(229),r(230),r(231),r(232),r(85),r(233),r(234),r(108),r(235),r(236),r(237),r(238),r(239),r(111),r(113),r(114),r(240),r(241),r(242),r(243),r(244),r(245),r(246),r(247),r(248),r(249),r(250),r(251),r(252),r(253),r(254),r(255),r(256),r(257),r(258),r(259),r(260),r(261),r(262),r(263),r(264),r(265),r(266),r(267),r(268),r(269),r(270),r(271),r(272),r(273),r(274),r(275),r(276),r(277),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(311),r(312),r(313),r(314),r(315),r(316),r(317),r(318),r(319),r(320),r(321),r(322),r(323),r(324),t.exports=r(21)},function(t,n,r){"use strict";var e=r(2),i=r(11),o=r(6),u=r(0),c=r(13),a=r(29).KEY,f=r(3),s=r(49),h=r(42),l=r(32),p=r(5),v=r(91),d=r(65),y=r(130),g=r(52),m=r(1),b=r(15),x=r(22),w=r(31),S=r(36),_=r(94),O=r(16),E=r(7),P=r(34),M=O.f,j=E.f,A=_.f,F=e.Symbol,I=e.JSON,N=I&&I.stringify,k=p("_hidden"),R=p("toPrimitive"),L={}.propertyIsEnumerable,T=s("symbol-registry"),C=s("symbols"),U=s("op-symbols"),D=Object.prototype,W="function"==typeof F,G=e.QObject,B=!G||!G.prototype||!G.prototype.findChild,V=o&&f(function(){return 7!=S(j({},"a",{get:function(){return j(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=M(D,n);e&&delete D[n],j(t,n,r),e&&t!==D&&j(D,n,e)}:j,q=function(t){var n=C[t]=S(F.prototype);return n._k=t,n},z=W&&"symbol"==typeof F.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof F},K=function(t,n,r){return t===D&&K(U,n,r),m(t),n=x(n,!0),m(r),i(C,n)?(r.enumerable?(i(t,k)&&t[k][n]&&(t[k][n]=!1),r=S(r,{enumerable:w(0,!1)})):(i(t,k)||j(t,k,w(1,{})),t[k][n]=!0),V(t,n,r)):j(t,n,r)},Y=function(t,n){m(t);for(var r,e=y(n=b(n)),i=0,o=e.length;o>i;)K(t,r=e[i++],n[r]);return t},J=function(t,n){return void 0===n?S(t):Y(S(t),n)},$=function(t){var n=L.call(this,t=x(t,!0));return!(this===D&&i(C,t)&&!i(U,t))&&(!(n||!i(this,t)||!i(C,t)||i(this,k)&&this[k][t])||n)},H=function(t,n){if(t=b(t),n=x(n,!0),t!==D||!i(C,n)||i(U,n)){var r=M(t,n);return!r||!i(C,n)||i(t,k)&&t[k][n]||(r.enumerable=!0),r}},X=function(t){for(var n,r=A(b(t)),e=[],o=0;r.length>o;)i(C,n=r[o++])||n==k||n==a||e.push(n);return e},Z=function(t){for(var n,r=t===D,e=A(r?U:b(t)),o=[],u=0;e.length>u;)!i(C,n=e[u++])||r&&!i(D,n)||o.push(C[n]);return o};W||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor!");var t=l(arguments.length>0?arguments[0]:void 0),n=function(r){this===D&&n.call(U,r),i(this,k)&&i(this[k],t)&&(this[k][t]=!1),V(this,t,w(1,r))};return o&&B&&V(D,t,{configurable:!0,set:n}),q(t)},c(F.prototype,"toString",function(){return this._k}),O.f=H,E.f=K,r(37).f=_.f=X,r(47).f=$,r(51).f=Z,o&&!r(33)&&c(D,"propertyIsEnumerable",$,!0),v.f=function(t){return q(p(t))}),u(u.G+u.W+u.F*!W,{Symbol:F});for(var Q="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Q.length>tt;)p(Q[tt++]);for(var nt=P(p.store),rt=0;nt.length>rt;)d(nt[rt++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return i(T,t+="")?T[t]:T[t]=F(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in T)if(T[n]===t)return n},useSetter:function(){B=!0},useSimple:function(){B=!1}}),u(u.S+u.F*!W,"Object",{create:J,defineProperty:K,defineProperties:Y,getOwnPropertyDescriptor:H,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),I&&u(u.S+u.F*(!W||f(function(){var t=F();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var n,r,e=[t],i=1;arguments.length>i;)e.push(arguments[i++]);return n=e[1],"function"==typeof n&&(r=n),!r&&g(n)||(n=function(t,n){if(r&&(n=r.call(this,t,n)),!z(n))return n}),e[1]=n,N.apply(I,e)}}}),F.prototype[R]||r(12)(F.prototype,R,F.prototype.valueOf),h(F,"Symbol"),h(Math,"Math",!0),h(e.JSON,"JSON",!0)},function(t,n,r){var e=r(34),i=r(51),o=r(47);t.exports=function(t){var n=e(t),r=i.f;if(r)for(var u,c=r(t),a=o.f,f=0;c.length>f;)a.call(t,u=c[f++])&&n.push(u);return n}},function(t,n,r){var e=r(0);e(e.S,"Object",{create:r(36)})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperty:r(7).f})},function(t,n,r){var e=r(0);e(e.S+e.F*!r(6),"Object",{defineProperties:r(93)})},function(t,n,r){var e=r(15),i=r(16).f;r(25)("getOwnPropertyDescriptor",function(){return function(t,n){return i(e(t),n)}})},function(t,n,r){var e=r(9),i=r(17);r(25)("getPrototypeOf",function(){return function(t){return i(e(t))}})},function(t,n,r){var e=r(9),i=r(34);r(25)("keys",function(){return function(t){return i(e(t))}})},function(t,n,r){r(25)("getOwnPropertyNames",function(){return r(94).f})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(25)("freeze",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(25)("seal",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4),i=r(29).onFreeze;r(25)("preventExtensions",function(t){return function(n){return t&&e(n)?t(i(n)):n}})},function(t,n,r){var e=r(4);r(25)("isFrozen",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(25)("isSealed",function(t){return function(n){return!e(n)||!!t&&t(n)}})},function(t,n,r){var e=r(4);r(25)("isExtensible",function(t){return function(n){return!!e(n)&&(!t||t(n))}})},function(t,n,r){var e=r(0);e(e.S+e.F,"Object",{assign:r(95)})},function(t,n,r){var e=r(0);e(e.S,"Object",{is:r(146)})},function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},function(t,n,r){var e=r(0);e(e.S,"Object",{setPrototypeOf:r(69).set})},function(t,n,r){"use strict";var e=r(48),i={};i[r(5)("toStringTag")]="z",i+""!="[object z]"&&r(13)(Object.prototype,"toString",function(){return"[object "+e(this)+"]"},!0)},function(t,n,r){var e=r(0);e(e.P,"Function",{bind:r(96)})},function(t,n,r){var e=r(7).f,i=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in i||r(6)&&e(i,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},function(t,n,r){"use strict";var e=r(4),i=r(17),o=r(5)("hasInstance"),u=Function.prototype;o in u||r(7).f(u,o,{value:function(t){if("function"!=typeof this||!e(t))return!1;if(!e(this.prototype))return t instanceof this;for(;t=i(t);)if(this.prototype===t)return!0;return!1}})},function(t,n,r){var e=r(0),i=r(98);e(e.G+e.F*(parseInt!=i),{parseInt:i})},function(t,n,r){var e=r(0),i=r(99);e(e.G+e.F*(parseFloat!=i),{parseFloat:i})},function(t,n,r){"use strict";var e=r(2),i=r(11),o=r(19),u=r(71),c=r(22),a=r(3),f=r(37).f,s=r(16).f,h=r(7).f,l=r(43).trim,p=e.Number,v=p,d=p.prototype,y="Number"==o(r(36)(d)),g="trim"in String.prototype,m=function(t){var n=c(t,!1);if("string"==typeof n&&n.length>2){n=g?n.trim():l(n,3);var r,e,i,o=n.charCodeAt(0);if(43===o||45===o){if(88===(r=n.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(n.charCodeAt(1)){case 66:case 98:e=2,i=49;break;case 79:case 111:e=8,i=55;break;default:return+n}for(var u,a=n.slice(2),f=0,s=a.length;f<s;f++)if((u=a.charCodeAt(f))<48||u>i)return NaN;return parseInt(a,e)}}return+n};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var n=arguments.length<1?0:t,r=this;return r instanceof p&&(y?a(function(){d.valueOf.call(r)}):"Number"!=o(r))?u(new v(m(n)),r,p):m(n)};for(var b,x=r(6)?f(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;x.length>w;w++)i(v,b=x[w])&&!i(p,b)&&h(p,b,s(v,b));p.prototype=d,d.constructor=p,r(13)(e,"Number",p)}},function(t,n,r){"use strict";var e=r(0),i=r(24),o=r(100),u=r(72),c=1..toFixed,a=Math.floor,f=[0,0,0,0,0,0],s="Number.toFixed: incorrect invocation!",h=function(t,n){for(var r=-1,e=n;++r<6;)e+=t*f[r],f[r]=e%1e7,e=a(e/1e7)},l=function(t){for(var n=6,r=0;--n>=0;)r+=f[n],f[n]=a(r/t),r=r%t*1e7},p=function(){for(var t=6,n="";--t>=0;)if(""!==n||0===t||0!==f[t]){var r=String(f[t]);n=""===n?r:n+u.call("0",7-r.length)+r}return n},v=function(t,n,r){return 0===n?r:n%2==1?v(t,n-1,r*t):v(t*t,n/2,r)},d=function(t){for(var n=0,r=t;r>=4096;)n+=12,r/=4096;for(;r>=2;)n+=1,r/=2;return n};e(e.P+e.F*(!!c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r(3)(function(){c.call({})})),"Number",{toFixed:function(t){var n,r,e,c,a=o(this,s),f=i(t),y="",g="0";if(f<0||f>20)throw RangeError(s);if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(y="-",a=-a),a>1e-21)if(n=d(a*v(2,69,1))-69,r=n<0?a*v(2,-n,1):a/v(2,n,1),r*=4503599627370496,(n=52-n)>0){for(h(0,r),e=f;e>=7;)h(1e7,0),e-=7;for(h(v(10,e,1),0),e=n-1;e>=23;)l(1<<23),e-=23;l(1<<e),h(1,1),l(2),g=p()}else h(0,r),h(1<<-n,0),g=p()+u.call("0",f);return f>0?(c=g.length,g=y+(c<=f?"0."+u.call("0",f-c)+g:g.slice(0,c-f)+"."+g.slice(c-f))):g=y+g,g}})},function(t,n,r){"use strict";var e=r(0),i=r(3),o=r(100),u=1..toPrecision;e(e.P+e.F*(i(function(){return"1"!==u.call(1,void 0)})||!i(function(){u.call({})})),"Number",{toPrecision:function(t){var n=o(this,"Number#toPrecision: incorrect invocation!");return void 0===t?u.call(n):u.call(n,t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{EPSILON:Math.pow(2,-52)})},function(t,n,r){var e=r(0),i=r(2).isFinite;e(e.S,"Number",{isFinite:function(t){return"number"==typeof t&&i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Number",{isInteger:r(101)})},function(t,n,r){var e=r(0);e(e.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,r){var e=r(0),i=r(101),o=Math.abs;e(e.S,"Number",{isSafeInteger:function(t){return i(t)&&o(t)<=9007199254740991}})},function(t,n,r){var e=r(0);e(e.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},function(t,n,r){var e=r(0);e(e.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},function(t,n,r){var e=r(0),i=r(99);e(e.S+e.F*(Number.parseFloat!=i),"Number",{parseFloat:i})},function(t,n,r){var e=r(0),i=r(98);e(e.S+e.F*(Number.parseInt!=i),"Number",{parseInt:i})},function(t,n,r){var e=r(0),i=r(102),o=Math.sqrt,u=Math.acosh;e(e.S+e.F*!(u&&710==Math.floor(u(Number.MAX_VALUE))&&u(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:i(t-1+o(t-1)*o(t+1))}})},function(t,n,r){function e(t){return isFinite(t=+t)&&0!=t?t<0?-e(-t):Math.log(t+Math.sqrt(t*t+1)):t}var i=r(0),o=Math.asinh;i(i.S+i.F*!(o&&1/o(0)>0),"Math",{asinh:e})},function(t,n,r){var e=r(0),i=Math.atanh;e(e.S+e.F*!(i&&1/i(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},function(t,n,r){var e=r(0),i=r(73);e(e.S,"Math",{cbrt:function(t){return i(t=+t)*Math.pow(Math.abs(t),1/3)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},function(t,n,r){var e=r(0),i=Math.exp;e(e.S,"Math",{cosh:function(t){return(i(t=+t)+i(-t))/2}})},function(t,n,r){var e=r(0),i=r(74);e(e.S+e.F*(i!=Math.expm1),"Math",{expm1:i})},function(t,n,r){var e=r(0);e(e.S,"Math",{fround:r(103)})},function(t,n,r){var e=r(0),i=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,o=0,u=0,c=arguments.length,a=0;u<c;)r=i(arguments[u++]),a<r?(e=a/r,o=o*e*e+1,a=r):r>0?(e=r/a,o+=e*e):o+=r;return a===1/0?1/0:a*Math.sqrt(o)}})},function(t,n,r){var e=r(0),i=Math.imul;e(e.S+e.F*r(3)(function(){return-5!=i(4294967295,5)||2!=i.length}),"Math",{imul:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e;return 0|i*o+((65535&r>>>16)*o+i*(65535&e>>>16)<<16>>>0)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},function(t,n,r){var e=r(0);e(e.S,"Math",{log1p:r(102)})},function(t,n,r){var e=r(0);e(e.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},function(t,n,r){var e=r(0);e(e.S,"Math",{sign:r(73)})},function(t,n,r){var e=r(0),i=r(74),o=Math.exp;e(e.S+e.F*r(3)(function(){return-2e-17!=!Math.sinh(-2e-17)}),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(i(t)-i(-t))/2:(o(t-1)-o(-t-1))*(Math.E/2)}})},function(t,n,r){var e=r(0),i=r(74),o=Math.exp;e(e.S,"Math",{tanh:function(t){var n=i(t=+t),r=i(-t);return n==1/0?1:r==1/0?-1:(n-r)/(o(t)+o(-t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},function(t,n,r){var e=r(0),i=r(35),o=String.fromCharCode,u=String.fromCodePoint;e(e.S+e.F*(!!u&&1!=u.length),"String",{fromCodePoint:function(t){for(var n,r=[],e=arguments.length,u=0;e>u;){if(n=+arguments[u++],i(n,1114111)!==n)throw RangeError(n+" is not a valid code point");r.push(n<65536?o(n):o(55296+((n-=65536)>>10),n%1024+56320))}return r.join("")}})},function(t,n,r){var e=r(0),i=r(15),o=r(8);e(e.S,"String",{raw:function(t){for(var n=i(t.raw),r=o(n.length),e=arguments.length,u=[],c=0;r>c;)u.push(String(n[c++])),c<e&&u.push(String(arguments[c]));return u.join("")}})},function(t,n,r){"use strict";r(43)("trim",function(t){return function(){return t(this,3)}})},function(t,n,r){"use strict";var e=r(75)(!0);r(76)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";var e=r(0),i=r(75)(!1);e(e.P,"String",{codePointAt:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(8),o=r(78),u="".endsWith;e(e.P+e.F*r(79)("endsWith"),"String",{endsWith:function(t){var n=o(this,t,"endsWith"),r=arguments.length>1?arguments[1]:void 0,e=i(n.length),c=void 0===r?e:Math.min(i(r),e),a=String(t);return u?u.call(n,a,c):n.slice(c-a.length,c)===a}})},function(t,n,r){"use strict";var e=r(0),i=r(78);e(e.P+e.F*r(79)("includes"),"String",{includes:function(t){return!!~i(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,r){var e=r(0);e(e.P,"String",{repeat:r(72)})},function(t,n,r){"use strict";var e=r(0),i=r(8),o=r(78),u="".startsWith;e(e.P+e.F*r(79)("startsWith"),"String",{startsWith:function(t){var n=o(this,t,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,n.length)),e=String(t);return u?u.call(n,e,r):n.slice(r,r+e.length)===e}})},function(t,n,r){"use strict";r(14)("anchor",function(t){return function(n){return t(this,"a","name",n)}})},function(t,n,r){"use strict";r(14)("big",function(t){return function(){return t(this,"big","","")}})},function(t,n,r){"use strict";r(14)("blink",function(t){return function(){return t(this,"blink","","")}})},function(t,n,r){"use strict";r(14)("bold",function(t){return function(){return t(this,"b","","")}})},function(t,n,r){"use strict";r(14)("fixed",function(t){return function(){return t(this,"tt","","")}})},function(t,n,r){"use strict";r(14)("fontcolor",function(t){return function(n){return t(this,"font","color",n)}})},function(t,n,r){"use strict";r(14)("fontsize",function(t){return function(n){return t(this,"font","size",n)}})},function(t,n,r){"use strict";r(14)("italics",function(t){return function(){return t(this,"i","","")}})},function(t,n,r){"use strict";r(14)("link",function(t){return function(n){return t(this,"a","href",n)}})},function(t,n,r){"use strict";r(14)("small",function(t){return function(){return t(this,"small","","")}})},function(t,n,r){"use strict";r(14)("strike",function(t){return function(){return t(this,"strike","","")}})},function(t,n,r){"use strict";r(14)("sub",function(t){return function(){return t(this,"sub","","")}})},function(t,n,r){"use strict";r(14)("sup",function(t){return function(){return t(this,"sup","","")}})},function(t,n,r){var e=r(0);e(e.S,"Date",{now:function(){return(new Date).getTime()}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(22);e(e.P+e.F*r(3)(function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})}),"Date",{toJSON:function(t){var n=i(this),r=o(n);return"number"!=typeof r||isFinite(r)?n.toISOString():null}})},function(t,n,r){var e=r(0),i=r(208);e(e.P+e.F*(Date.prototype.toISOString!==i),"Date",{toISOString:i})},function(t,n,r){"use strict";var e=r(3),i=Date.prototype.getTime,o=Date.prototype.toISOString,u=function(t){return t>9?t:"0"+t};t.exports=e(function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-5e13-1))})||!e(function(){o.call(new Date(NaN))})?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,n=t.getUTCFullYear(),r=t.getUTCMilliseconds(),e=n<0?"-":n>9999?"+":"";return e+("00000"+Math.abs(n)).slice(e?-6:-4)+"-"+u(t.getUTCMonth()+1)+"-"+u(t.getUTCDate())+"T"+u(t.getUTCHours())+":"+u(t.getUTCMinutes())+":"+u(t.getUTCSeconds())+"."+(r>99?r:"0"+u(r))+"Z"}:o},function(t,n,r){var e=Date.prototype,i=e.toString,o=e.getTime;new Date(NaN)+""!="Invalid Date"&&r(13)(e,"toString",function(){var t=o.call(this);return t===t?i.call(this):"Invalid Date"})},function(t,n,r){var e=r(5)("toPrimitive"),i=Date.prototype;e in i||r(12)(i,e,r(211))},function(t,n,r){"use strict";var e=r(1),i=r(22);t.exports=function(t){if("string"!==t&&"number"!==t&&"default"!==t)throw TypeError("Incorrect hint");return i(e(this),"number"!=t)}},function(t,n,r){var e=r(0);e(e.S,"Array",{isArray:r(52)})},function(t,n,r){"use strict";var e=r(18),i=r(0),o=r(9),u=r(104),c=r(80),a=r(8),f=r(81),s=r(82);i(i.S+i.F*!r(54)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,i,h,l=o(t),p="function"==typeof this?this:Array,v=arguments.length,d=v>1?arguments[1]:void 0,y=void 0!==d,g=0,m=s(l);if(y&&(d=e(d,v>2?arguments[2]:void 0,2)),void 0==m||p==Array&&c(m))for(n=a(l.length),r=new p(n);n>g;g++)f(r,g,y?d(l[g],g):l[g]);else for(h=m.call(l),r=new p;!(i=h.next()).done;g++)f(r,g,y?u(h,d,[i.value,g],!0):i.value);return r.length=g,r}})},function(t,n,r){"use strict";var e=r(0),i=r(81);e(e.S+e.F*r(3)(function(){function t(){}return!(Array.of.call(t)instanceof t)}),"Array",{of:function(){for(var t=0,n=arguments.length,r=new("function"==typeof this?this:Array)(n);n>t;)i(r,t,arguments[t++]);return r.length=n,r}})},function(t,n,r){"use strict";var e=r(0),i=r(15),o=[].join;e(e.P+e.F*(r(46)!=Object||!r(20)(o)),"Array",{join:function(t){return o.call(i(this),void 0===t?",":t)}})},function(t,n,r){"use strict";var e=r(0),i=r(68),o=r(19),u=r(35),c=r(8),a=[].slice;e(e.P+e.F*r(3)(function(){i&&a.call(i)}),"Array",{slice:function(t,n){var r=c(this.length),e=o(this);if(n=void 0===n?r:n,"Array"==e)return a.call(this,t,n);for(var i=u(t,r),f=u(n,r),s=c(f-i),h=Array(s),l=0;l<s;l++)h[l]="String"==e?this.charAt(i+l):this[i+l];return h}})},function(t,n,r){"use strict";var e=r(0),i=r(10),o=r(9),u=r(3),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!r(20)(c)),"Array",{sort:function(t){return void 0===t?c.call(o(this)):c.call(o(this),i(t))}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(0),o=r(20)([].forEach,!0);e(e.P+e.F*!o,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},function(t,n,r){var e=r(4),i=r(52),o=r(5)("species");t.exports=function(t){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)||(n=void 0),e(n)&&null===(n=n[o])&&(n=void 0)),void 0===n?Array:n}},function(t,n,r){"use strict";var e=r(0),i=r(26)(1);e(e.P+e.F*!r(20)([].map,!0),"Array",{map:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(2);e(e.P+e.F*!r(20)([].filter,!0),"Array",{filter:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(3);e(e.P+e.F*!r(20)([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(26)(4);e(e.P+e.F*!r(20)([].every,!0),"Array",{every:function(t){return i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(105);e(e.P+e.F*!r(20)([].reduce,!0),"Array",{reduce:function(t){return i(this,t,arguments.length,arguments[1],!1)}})},function(t,n,r){"use strict";var e=r(0),i=r(105);e(e.P+e.F*!r(20)([].reduceRight,!0),"Array",{reduceRight:function(t){return i(this,t,arguments.length,arguments[1],!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(50)(!1),o=[].indexOf,u=!!o&&1/[1].indexOf(1,-0)<0;e(e.P+e.F*(u||!r(20)(o)),"Array",{indexOf:function(t){return u?o.apply(this,arguments)||0:i(this,t,arguments[1])}})},function(t,n,r){"use strict";var e=r(0),i=r(15),o=r(24),u=r(8),c=[].lastIndexOf,a=!!c&&1/[1].lastIndexOf(1,-0)<0;e(e.P+e.F*(a||!r(20)(c)),"Array",{lastIndexOf:function(t){if(a)return c.apply(this,arguments)||0;var n=i(this),r=u(n.length),e=r-1;for(arguments.length>1&&(e=Math.min(e,o(arguments[1]))),e<0&&(e=r+e);e>=0;e--)if(e in n&&n[e]===t)return e||0;return-1}})},function(t,n,r){var e=r(0);e(e.P,"Array",{copyWithin:r(106)}),r(30)("copyWithin")},function(t,n,r){var e=r(0);e(e.P,"Array",{fill:r(84)}),r(30)("fill")},function(t,n,r){"use strict";var e=r(0),i=r(26)(5),o=!0;"find"in[]&&Array(1).find(function(){o=!1}),e(e.P+e.F*o,"Array",{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("find")},function(t,n,r){"use strict";var e=r(0),i=r(26)(6),o="findIndex",u=!0;o in[]&&Array(1)[o](function(){u=!1}),e(e.P+e.F*u,"Array",{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)(o)},function(t,n,r){r(38)("Array")},function(t,n,r){var e=r(2),i=r(71),o=r(7).f,u=r(37).f,c=r(53),a=r(55),f=e.RegExp,s=f,h=f.prototype,l=/a/g,p=/a/g,v=new f(l)!==l;if(r(6)&&(!v||r(3)(function(){return p[r(5)("match")]=!1,f(l)!=l||f(p)==p||"/a/i"!=f(l,"i")}))){f=function(t,n){var r=this instanceof f,e=c(t),o=void 0===n;return!r&&e&&t.constructor===f&&o?t:i(v?new s(e&&!o?t.source:t,n):s((e=t instanceof f)?t.source:t,e&&o?a.call(t):n),r?this:h,f)};for(var d=u(s),y=0;d.length>y;)!function(t){t in f||o(f,t,{configurable:!0,get:function(){return s[t]},set:function(n){s[t]=n}})}(d[y++]);h.constructor=f,f.prototype=h,r(13)(e,"RegExp",f)}r(38)("RegExp")},function(t,n,r){"use strict";r(108);var e=r(1),i=r(55),o=r(6),u=/./.toString,c=function(t){r(13)(RegExp.prototype,"toString",t,!0)};r(3)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?i.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){r(56)("match",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){r(56)("replace",2,function(t,n,r){return[function(e,i){"use strict";var o=t(this),u=void 0==e?void 0:e[n];return void 0!==u?u.call(e,o,i):r.call(String(o),e,i)},r]})},function(t,n,r){r(56)("search",1,function(t,n,r){return[function(r){"use strict";var e=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,e):new RegExp(r)[n](String(e))},r]})},function(t,n,r){r(56)("split",2,function(t,n,e){"use strict";var i=r(53),o=e,u=[].push,c="length";if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1)[c]||2!="ab".split(/(?:ab)*/)[c]||4!=".".split(/(.?)(.?)/)[c]||".".split(/()()/)[c]>1||"".split(/.?/)[c]){var a=void 0===/()??/.exec("")[1];e=function(t,n){var r=String(this);if(void 0===t&&0===n)return[];if(!i(t))return o.call(r,t,n);var e,f,s,h,l,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),d=0,y=void 0===n?4294967295:n>>>0,g=new RegExp(t.source,v+"g");for(a||(e=new RegExp("^"+g.source+"$(?!\\s)",v));(f=g.exec(r))&&!((s=f.index+f[0][c])>d&&(p.push(r.slice(d,f.index)),!a&&f[c]>1&&f[0].replace(e,function(){for(l=1;l<arguments[c]-2;l++)void 0===arguments[l]&&(f[l]=void 0)}),f[c]>1&&f.index<r[c]&&u.apply(p,f.slice(1)),h=f[0][c],d=s,p[c]>=y));)g.lastIndex===f.index&&g.lastIndex++;return d===r[c]?!h&&g.test("")||p.push(""):p.push(r.slice(d)),p[c]>y?p.slice(0,y):p}}else"0".split(void 0,0)[c]&&(e=function(t,n){return void 0===t&&0===n?[]:o.call(this,t,n)});return[function(r,i){var o=t(this),u=void 0==r?void 0:r[n];return void 0!==u?u.call(r,o,i):e.call(String(o),r,i)},e]})},function(t,n,r){"use strict";var e,i,o,u,c=r(33),a=r(2),f=r(18),s=r(48),h=r(0),l=r(4),p=r(10),v=r(39),d=r(40),y=r(57),g=r(86).set,m=r(87)(),b=r(88),x=r(109),w=r(110),S=a.TypeError,_=a.process,O=a.Promise,E="process"==s(_),P=function(){},M=i=b.f,j=!!function(){try{var t=O.resolve(1),n=(t.constructor={})[r(5)("species")]=function(t){t(P,P)};return(E||"function"==typeof PromiseRejectionEvent)&&t.then(P)instanceof n}catch(t){}}(),A=function(t){var n;return!(!l(t)||"function"!=typeof(n=t.then))&&n},F=function(t,n){if(!t._n){t._n=!0;var r=t._c;m(function(){for(var e=t._v,i=1==t._s,o=0;r.length>o;)!function(n){var r,o,u=i?n.ok:n.fail,c=n.resolve,a=n.reject,f=n.domain;try{u?(i||(2==t._h&&k(t),t._h=1),!0===u?r=e:(f&&f.enter(),r=u(e),f&&f.exit()),r===n.promise?a(S("Promise-chain cycle")):(o=A(r))?o.call(r,c,a):c(r)):a(e)}catch(t){a(t)}}(r[o++]);t._c=[],t._n=!1,n&&!t._h&&I(t)})}},I=function(t){g.call(a,function(){var n,r,e,i=t._v,o=N(t);if(o&&(n=x(function(){E?_.emit("unhandledRejection",i,t):(r=a.onunhandledrejection)?r({promise:t,reason:i}):(e=a.console)&&e.error&&e.error("Unhandled promise rejection",i)}),t._h=E||N(t)?2:1),t._a=void 0,o&&n.e)throw n.v})},N=function(t){if(1==t._h)return!1;for(var n,r=t._a||t._c,e=0;r.length>e;)if(n=r[e++],n.fail||!N(n.promise))return!1;return!0},k=function(t){g.call(a,function(){var n;E?_.emit("rejectionHandled",t):(n=a.onrejectionhandled)&&n({promise:t,reason:t._v})})},R=function(t){var n=this;n._d||(n._d=!0,n=n._w||n,n._v=t,n._s=2,n._a||(n._a=n._c.slice()),F(n,!0))},L=function(t){var n,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw S("Promise can't be resolved itself");(n=A(t))?m(function(){var e={_w:r,_d:!1};try{n.call(t,f(L,e,1),f(R,e,1))}catch(t){R.call(e,t)}}):(r._v=t,r._s=1,F(r,!1))}catch(t){R.call({_w:r,_d:!1},t)}}};j||(O=function(t){v(this,O,"Promise","_h"),p(t),e.call(this);try{t(f(L,this,1),f(R,this,1))}catch(t){R.call(this,t)}},e=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},e.prototype=r(41)(O.prototype,{then:function(t,n){var r=M(y(this,O));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=E?_.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&F(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new e;this.promise=t,this.resolve=f(L,t,1),this.reject=f(R,t,1)},b.f=M=function(t){return t===O||t===u?new o(t):i(t)}),h(h.G+h.W+h.F*!j,{Promise:O}),r(42)(O,"Promise"),r(38)("Promise"),u=r(21).Promise,h(h.S+h.F*!j,"Promise",{reject:function(t){var n=M(this);return(0,n.reject)(t),n.promise}}),h(h.S+h.F*(c||!j),"Promise",{resolve:function(t){return w(c&&this===u?O:this,t)}}),h(h.S+h.F*!(j&&r(54)(function(t){O.all(t).catch(P)})),"Promise",{all:function(t){var n=this,r=M(n),e=r.resolve,i=r.reject,o=x(function(){var r=[],o=0,u=1;d(t,!1,function(t){var c=o++,a=!1;r.push(void 0),u++,n.resolve(t).then(function(t){a||(a=!0,r[c]=t,--u||e(r))},i)}),--u||e(r)});return o.e&&i(o.v),r.promise},race:function(t){var n=this,r=M(n),e=r.reject,i=x(function(){d(t,!1,function(t){n.resolve(t).then(r.resolve,e)})});return i.e&&e(i.v),r.promise}})},function(t,n,r){"use strict";var e=r(115),i=r(45);r(58)("WeakSet",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return e.def(i(this,"WeakSet"),t,!0)}},e,!1,!0)},function(t,n,r){"use strict";var e=r(0),i=r(59),o=r(89),u=r(1),c=r(35),a=r(8),f=r(4),s=r(2).ArrayBuffer,h=r(57),l=o.ArrayBuffer,p=o.DataView,v=i.ABV&&s.isView,d=l.prototype.slice,y=i.VIEW;e(e.G+e.W+e.F*(s!==l),{ArrayBuffer:l}),e(e.S+e.F*!i.CONSTR,"ArrayBuffer",{isView:function(t){return v&&v(t)||f(t)&&y in t}}),e(e.P+e.U+e.F*r(3)(function(){return!new l(2).slice(1,void 0).byteLength}),"ArrayBuffer",{slice:function(t,n){if(void 0!==d&&void 0===n)return d.call(u(this),t);for(var r=u(this).byteLength,e=c(t,r),i=c(void 0===n?r:n,r),o=new(h(this,l))(a(i-e)),f=new p(this),s=new p(o),v=0;e<i;)s.setUint8(v++,f.getUint8(e++));return o}}),r(38)("ArrayBuffer")},function(t,n,r){var e=r(0);e(e.G+e.W+e.F*!r(59).ABV,{DataView:r(89).DataView})},function(t,n,r){r(27)("Int8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Uint8",1,function(t){return function(n,r,e){return t(this,n,r,e)}},!0)},function(t,n,r){r(27)("Int16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Uint16",2,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Int32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Uint32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Float32",4,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){r(27)("Float64",8,function(t){return function(n,r,e){return t(this,n,r,e)}})},function(t,n,r){var e=r(0),i=r(10),o=r(1),u=(r(2).Reflect||{}).apply,c=Function.apply;e(e.S+e.F*!r(3)(function(){u(function(){})}),"Reflect",{apply:function(t,n,r){var e=i(t),a=o(r);return u?u(e,n,a):c.call(e,n,a)}})},function(t,n,r){var e=r(0),i=r(36),o=r(10),u=r(1),c=r(4),a=r(3),f=r(96),s=(r(2).Reflect||{}).construct,h=a(function(){function t(){}return!(s(function(){},[],t)instanceof t)}),l=!a(function(){s(function(){})});e(e.S+e.F*(h||l),"Reflect",{construct:function(t,n){o(t),u(n);var r=arguments.length<3?t:o(arguments[2]);if(l&&!h)return s(t,n,r);if(t==r){switch(n.length){case 0:return new t;case 1:return new t(n[0]);case 2:return new t(n[0],n[1]);case 3:return new t(n[0],n[1],n[2]);case 4:return new t(n[0],n[1],n[2],n[3])}var e=[null];return e.push.apply(e,n),new(f.apply(t,e))}var a=r.prototype,p=i(c(a)?a:Object.prototype),v=Function.apply.call(t,p,n);return c(v)?v:p}})},function(t,n,r){var e=r(7),i=r(0),o=r(1),u=r(22);i(i.S+i.F*r(3)(function(){Reflect.defineProperty(e.f({},1,{value:1}),1,{value:2})}),"Reflect",{defineProperty:function(t,n,r){o(t),n=u(n,!0),o(r);try{return e.f(t,n,r),!0}catch(t){return!1}}})},function(t,n,r){var e=r(0),i=r(16).f,o=r(1);e(e.S,"Reflect",{deleteProperty:function(t,n){var r=i(o(t),n);return!(r&&!r.configurable)&&delete t[n]}})},function(t,n,r){"use strict";var e=r(0),i=r(1),o=function(t){this._t=i(t),this._i=0;var n,r=this._k=[];for(n in t)r.push(n)};r(77)(o,"Object",function(){var t,n=this,r=n._k;do{if(n._i>=r.length)return{value:void 0,done:!0}}while(!((t=r[n._i++])in n._t));return{value:t,done:!1}}),e(e.S,"Reflect",{enumerate:function(t){return new o(t)}})},function(t,n,r){function e(t,n){var r,c,s=arguments.length<3?t:arguments[2];return f(t)===s?t[n]:(r=i.f(t,n))?u(r,"value")?r.value:void 0!==r.get?r.get.call(s):void 0:a(c=o(t))?e(c,n,s):void 0}var i=r(16),o=r(17),u=r(11),c=r(0),a=r(4),f=r(1);c(c.S,"Reflect",{get:e})},function(t,n,r){var e=r(16),i=r(0),o=r(1);i(i.S,"Reflect",{getOwnPropertyDescriptor:function(t,n){return e.f(o(t),n)}})},function(t,n,r){var e=r(0),i=r(17),o=r(1);e(e.S,"Reflect",{getPrototypeOf:function(t){return i(o(t))}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{has:function(t,n){return n in t}})},function(t,n,r){var e=r(0),i=r(1),o=Object.isExtensible;e(e.S,"Reflect",{isExtensible:function(t){return i(t),!o||o(t)}})},function(t,n,r){var e=r(0);e(e.S,"Reflect",{ownKeys:r(117)})},function(t,n,r){var e=r(0),i=r(1),o=Object.preventExtensions;e(e.S,"Reflect",{preventExtensions:function(t){i(t);try{return o&&o(t),!0}catch(t){return!1}}})},function(t,n,r){function e(t,n,r){var a,l,p=arguments.length<4?t:arguments[3],v=o.f(s(t),n);if(!v){if(h(l=u(t)))return e(l,n,r,p);v=f(0)}return c(v,"value")?!(!1===v.writable||!h(p))&&(a=o.f(p,n)||f(0),a.value=r,i.f(p,n,a),!0):void 0!==v.set&&(v.set.call(p,r),!0)}var i=r(7),o=r(16),u=r(17),c=r(11),a=r(0),f=r(31),s=r(1),h=r(4);a(a.S,"Reflect",{set:e})},function(t,n,r){var e=r(0),i=r(69);i&&e(e.S,"Reflect",{setPrototypeOf:function(t,n){i.check(t,n);try{return i.set(t,n),!0}catch(t){return!1}}})},function(t,n,r){"use strict";var e=r(0),i=r(50)(!0);e(e.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(30)("includes")},function(t,n,r){"use strict";var e=r(0),i=r(118),o=r(9),u=r(8),c=r(10),a=r(83);e(e.P,"Array",{flatMap:function(t){var n,r,e=o(this);return c(t),n=u(e.length),r=a(e,0),i(r,e,e,n,0,1,t,arguments[1]),r}}),r(30)("flatMap")},function(t,n,r){"use strict";var e=r(0),i=r(118),o=r(9),u=r(8),c=r(24),a=r(83);e(e.P,"Array",{flatten:function(){var t=arguments[0],n=o(this),r=u(n.length),e=a(n,0);return i(e,n,n,r,0,void 0===t?1:c(t)),e}}),r(30)("flatten")},function(t,n,r){"use strict";var e=r(0),i=r(75)(!0);e(e.P,"String",{at:function(t){return i(this,t)}})},function(t,n,r){"use strict";var e=r(0),i=r(119);e(e.P,"String",{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},function(t,n,r){"use strict";var e=r(0),i=r(119);e(e.P,"String",{padEnd:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},function(t,n,r){"use strict";r(43)("trimLeft",function(t){return function(){return t(this,1)}},"trimStart")},function(t,n,r){"use strict";r(43)("trimRight",function(t){return function(){return t(this,2)}},"trimEnd")},function(t,n,r){"use strict";var e=r(0),i=r(23),o=r(8),u=r(53),c=r(55),a=RegExp.prototype,f=function(t,n){this._r=t,this._s=n};r(77)(f,"RegExp String",function(){var t=this._r.exec(this._s);return{value:t,done:null===t}}),e(e.P,"String",{matchAll:function(t){if(i(this),!u(t))throw TypeError(t+" is not a regexp!");var n=String(this),r="flags"in a?String(t.flags):c.call(t),e=new RegExp(t.source,~r.indexOf("g")?r:"g"+r);return e.lastIndex=o(t.lastIndex),new f(e,n)}})},function(t,n,r){r(65)("asyncIterator")},function(t,n,r){r(65)("observable")},function(t,n,r){var e=r(0),i=r(117),o=r(15),u=r(16),c=r(81);e(e.S,"Object",{getOwnPropertyDescriptors:function(t){for(var n,r,e=o(t),a=u.f,f=i(e),s={},h=0;f.length>h;)void 0!==(r=a(e,n=f[h++]))&&c(s,n,r);return s}})},function(t,n,r){var e=r(0),i=r(120)(!1);e(e.S,"Object",{values:function(t){return i(t)}})},function(t,n,r){var e=r(0),i=r(120)(!0);e(e.S,"Object",{entries:function(t){return i(t)}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(60),"Object",{__defineGetter__:function(t,n){u.f(i(this),t,{get:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(10),u=r(7);r(6)&&e(e.P+r(60),"Object",{__defineSetter__:function(t,n){u.f(i(this),t,{set:o(n),enumerable:!0,configurable:!0})}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(6)&&e(e.P+r(60),"Object",{__lookupGetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.get}while(r=u(r))}})},function(t,n,r){"use strict";var e=r(0),i=r(9),o=r(22),u=r(17),c=r(16).f;r(6)&&e(e.P+r(60),"Object",{__lookupSetter__:function(t){var n,r=i(this),e=o(t,!0);do{if(n=c(r,e))return n.set}while(r=u(r))}})},function(t,n,r){var e=r(0);e(e.P+e.R,"Map",{toJSON:r(121)("Map")})},function(t,n,r){var e=r(0);e(e.P+e.R,"Set",{toJSON:r(121)("Set")})},function(t,n,r){r(61)("Map")},function(t,n,r){r(61)("Set")},function(t,n,r){r(61)("WeakMap")},function(t,n,r){r(61)("WeakSet")},function(t,n,r){r(62)("Map")},function(t,n,r){r(62)("Set")},function(t,n,r){r(62)("WeakMap")},function(t,n,r){r(62)("WeakSet")},function(t,n,r){var e=r(0);e(e.G,{global:r(2)})},function(t,n,r){var e=r(0);e(e.S,"System",{global:r(2)})},function(t,n,r){var e=r(0),i=r(19);e(e.S,"Error",{isError:function(t){return"Error"===i(t)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{clamp:function(t,n,r){return Math.min(r,Math.max(n,t))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{DEG_PER_RAD:Math.PI/180})},function(t,n,r){var e=r(0),i=180/Math.PI;e(e.S,"Math",{degrees:function(t){return t*i}})},function(t,n,r){var e=r(0),i=r(123),o=r(103);e(e.S,"Math",{fscale:function(t,n,r,e,u){return o(i(t,n,r,e,u))}})},function(t,n,r){var e=r(0);e(e.S,"Math",{iaddh:function(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o+(e>>>0)+((i&u|(i|u)&~(i+u>>>0))>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{isubh:function(t,n,r,e){var i=t>>>0,o=n>>>0,u=r>>>0;return o-(e>>>0)-((~i&u|~(i^u)&i-u>>>0)>>>31)|0}})},function(t,n,r){var e=r(0);e(e.S,"Math",{imulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>16,c=e>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>16)+((i*c>>>0)+(65535&a)>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{RAD_PER_DEG:180/Math.PI})},function(t,n,r){var e=r(0),i=Math.PI/180;e(e.S,"Math",{radians:function(t){return t*i}})},function(t,n,r){var e=r(0);e(e.S,"Math",{scale:r(123)})},function(t,n,r){var e=r(0);e(e.S,"Math",{umulh:function(t,n){var r=+t,e=+n,i=65535&r,o=65535&e,u=r>>>16,c=e>>>16,a=(u*o>>>0)+(i*o>>>16);return u*c+(a>>>16)+((i*c>>>0)+(65535&a)>>>16)}})},function(t,n,r){var e=r(0);e(e.S,"Math",{signbit:function(t){return(t=+t)!=t?t:0==t?1/t==1/0:t>0}})},function(t,n,r){"use strict";var e=r(0),i=r(21),o=r(2),u=r(57),c=r(110);e(e.P+e.R,"Promise",{finally:function(t){var n=u(this,i.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return c(n,t()).then(function(){return r})}:t,r?function(r){return c(n,t()).then(function(){throw r})}:t)}})},function(t,n,r){"use strict";var e=r(0),i=r(88),o=r(109);e(e.S,"Promise",{try:function(t){var n=i.f(this),r=o(t);return(r.e?n.reject:n.resolve)(r.v),n.promise}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.set;e.exp({defineMetadata:function(t,n,r,e){u(t,n,i(r),o(e))}})},function(t,n,r){var e=r(28),i=r(1),o=e.key,u=e.map,c=e.store;e.exp({deleteMetadata:function(t,n){var r=arguments.length<3?void 0:o(arguments[2]),e=u(i(n),r,!1);if(void 0===e||!e.delete(t))return!1;if(e.size)return!0;var a=c.get(n);return a.delete(r),!!a.size||c.delete(n)}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.get,a=e.key,f=function(t,n,r){if(u(t,n,r))return c(t,n,r);var e=o(n);return null!==e?f(t,e,r):void 0};e.exp({getMetadata:function(t,n){return f(t,i(n),arguments.length<3?void 0:a(arguments[2]))}})},function(t,n,r){var e=r(113),i=r(122),o=r(28),u=r(1),c=r(17),a=o.keys,f=o.key,s=function(t,n){var r=a(t,n),o=c(t);if(null===o)return r;var u=s(o,n);return u.length?r.length?i(new e(r.concat(u))):u:r};o.exp({getMetadataKeys:function(t){return s(u(t),arguments.length<2?void 0:f(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.get,u=e.key;e.exp({getOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.keys,u=e.key;e.exp({getOwnMetadataKeys:function(t){return o(i(t),arguments.length<2?void 0:u(arguments[1]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(17),u=e.has,c=e.key,a=function(t,n,r){if(u(t,n,r))return!0;var e=o(n);return null!==e&&a(t,e,r)};e.exp({hasMetadata:function(t,n){return a(t,i(n),arguments.length<3?void 0:c(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=e.has,u=e.key;e.exp({hasOwnMetadata:function(t,n){return o(t,i(n),arguments.length<3?void 0:u(arguments[2]))}})},function(t,n,r){var e=r(28),i=r(1),o=r(10),u=e.key,c=e.set;e.exp({metadata:function(t,n){return function(r,e){c(t,n,(void 0!==e?i:o)(r),u(e))}}})},function(t,n,r){var e=r(0),i=r(87)(),o=r(2).process,u="process"==r(19)(o);e(e.G,{asap:function(t){var n=u&&o.domain;i(n?n.bind(t):t)}})},function(t,n,r){"use strict";var e=r(0),i=r(2),o=r(21),u=r(87)(),c=r(5)("observable"),a=r(10),f=r(1),s=r(39),h=r(41),l=r(12),p=r(40),v=p.RETURN,d=function(t){return null==t?void 0:a(t)},y=function(t){var n=t._c;n&&(t._c=void 0,n())},g=function(t){return void 0===t._o},m=function(t){g(t)||(t._o=void 0,y(t))},b=function(t,n){f(t),this._c=void 0,this._o=t,t=new x(this);try{var r=n(t),e=r;null!=r&&("function"==typeof r.unsubscribe?r=function(){e.unsubscribe()}:a(r),this._c=r)}catch(n){return void t.error(n)}g(this)&&y(this)};b.prototype=h({},{unsubscribe:function(){m(this)}});var x=function(t){this._s=t};x.prototype=h({},{next:function(t){var n=this._s;if(!g(n)){var r=n._o;try{var e=d(r.next);if(e)return e.call(r,t)}catch(t){try{m(n)}finally{throw t}}}},error:function(t){var n=this._s;if(g(n))throw t;var r=n._o;n._o=void 0;try{var e=d(r.error);if(!e)throw t;t=e.call(r,t)}catch(t){try{y(n)}finally{throw t}}return y(n),t},complete:function(t){var n=this._s;if(!g(n)){var r=n._o;n._o=void 0;try{var e=d(r.complete);t=e?e.call(r,t):void 0}catch(t){try{y(n)}finally{throw t}}return y(n),t}}});var w=function(t){s(this,w,"Observable","_f")._f=a(t)};h(w.prototype,{subscribe:function(t){return new b(t,this._f)},forEach:function(t){var n=this;return new(o.Promise||i.Promise)(function(r,e){a(t);var i=n.subscribe({next:function(n){try{return t(n)}catch(t){e(t),i.unsubscribe()}},error:e,complete:r})})}}),h(w,{from:function(t){var n="function"==typeof this?this:w,r=d(f(t)[c]);if(r){var e=f(r.call(t));return e.constructor===n?e:new n(function(t){return e.subscribe(t)})}return new n(function(n){var r=!1;return u(function(){if(!r){try{if(p(t,!1,function(t){if(n.next(t),r)return v})===v)return}catch(t){if(r)throw t;return void n.error(t)}n.complete()}}),function(){r=!0}})},of:function(){for(var t=0,n=arguments.length,r=Array(n);t<n;)r[t]=arguments[t++];return new("function"==typeof this?this:w)(function(t){var n=!1;return u(function(){if(!n){for(var e=0;e<r.length;++e)if(t.next(r[e]),n)return;t.complete()}}),function(){n=!0}})}}),l(w.prototype,c,function(){return this}),e(e.G,{Observable:w}),r(38)("Observable")},function(t,n,r){var e=r(2),i=r(0),o=e.navigator,u=[].slice,c=!!o&&/MSIE .\./.test(o.userAgent),a=function(t){return function(n,r){var e=arguments.length>2,i=!!e&&u.call(arguments,2);return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,r)}};i(i.G+i.B+i.F*c,{setTimeout:a(e.setTimeout),setInterval:a(e.setInterval)})},function(t,n,r){var e=r(0),i=r(86);e(e.G+e.B,{setImmediate:i.set,clearImmediate:i.clear})},function(t,n,r){for(var e=r(85),i=r(34),o=r(13),u=r(2),c=r(12),a=r(44),f=r(5),s=f("iterator"),h=f("toStringTag"),l=a.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),d=0;d<v.length;d++){var y,g=v[d],m=p[g],b=u[g],x=b&&b.prototype;if(x&&(x[s]||c(x,s,l),x[h]||c(x,h,g),a[g]=l,m))for(y in e)x[y]||o(x,y,e[y],!0)}},function(t,n){!function(n){"use strict";function r(t,n,r,e){var o=n&&n.prototype instanceof i?n:i,u=Object.create(o.prototype),c=new p(e||[]);return u._invoke=f(t,r,c),u}function e(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function o(){}function u(){}function c(t){["next","throw","return"].forEach(function(n){t[n]=function(t){return this._invoke(n,t)}})}function a(t){function n(r,i,o,u){var c=e(t[r],t,i);if("throw"!==c.type){var a=c.arg,f=a.value;return f&&"object"==typeof f&&m.call(f,"__await")?Promise.resolve(f.__await).then(function(t){n("next",t,o,u)},function(t){n("throw",t,o,u)}):Promise.resolve(f).then(function(t){a.value=t,o(a)},u)}u(c.arg)}function r(t,r){function e(){return new Promise(function(e,i){n(t,r,e,i)})}return i=i?i.then(e,e):e()}var i;this._invoke=r}function f(t,n,r){var i=E;return function(o,u){if(i===M)throw new Error("Generator is already running");if(i===j){if("throw"===o)throw u;return d()}for(r.method=o,r.arg=u;;){var c=r.delegate;if(c){var a=s(c,r);if(a){if(a===A)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===E)throw i=j,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=M;var f=e(t,n,r);if("normal"===f.type){if(i=r.done?j:P,f.arg===A)continue;return{value:f.arg,done:r.done}}"throw"===f.type&&(i=j,r.method="throw",r.arg=f.arg)}}}function s(t,n){var r=t.iterator[n.method];if(r===y){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=y,s(t,n),"throw"===n.method))return A;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return A}var i=e(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,A;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=y),n.delegate=null,A):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,A)}function h(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function l(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function v(t){if(t){var n=t[x];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,e=function n(){for(;++r<t.length;)if(m.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=y,n.done=!0,n};return e.next=e}}return{next:d}}function d(){return{value:y,done:!0}}var y,g=Object.prototype,m=g.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},x=b.iterator||"@@iterator",w=b.asyncIterator||"@@asyncIterator",S=b.toStringTag||"@@toStringTag",_="object"==typeof t,O=n.regeneratorRuntime;if(O)return void(_&&(t.exports=O));O=n.regeneratorRuntime=_?t.exports:{},O.wrap=r;var E="suspendedStart",P="suspendedYield",M="executing",j="completed",A={},F={};F[x]=function(){return this};var I=Object.getPrototypeOf,N=I&&I(I(v([])));N&&N!==g&&m.call(N,x)&&(F=N);var k=u.prototype=i.prototype=Object.create(F);o.prototype=k.constructor=u,u.constructor=o,u[S]=o.displayName="GeneratorFunction",O.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===o||"GeneratorFunction"===(n.displayName||n.name))},O.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,u):(t.__proto__=u,S in t||(t[S]="GeneratorFunction")),t.prototype=Object.create(k),t},O.awrap=function(t){return{__await:t}},c(a.prototype),a.prototype[w]=function(){return this},O.AsyncIterator=a,O.async=function(t,n,e,i){var o=new a(r(t,n,e,i));return O.isGeneratorFunction(n)?o:o.next().then(function(t){return t.done?t.value:o.next()})},c(k),k[S]="Generator",k[x]=function(){return this},k.toString=function(){return"[object Generator]"},O.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},O.values=v,p.prototype={constructor:p,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(l),!t)for(var n in this)"t"===n.charAt(0)&&m.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=y)},stop:function(){this.done=!0;var t=this.tryEntries[0],n=t.completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(t){function n(n,e){return o.type="throw",o.arg=t,r.next=n,e&&(r.method="next",r.arg=y),!!e}if(this.done)throw t;for(var r=this,e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=m.call(i,"catchLoc"),c=m.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc<=this.prev&&m.call(e,"finallyLoc")&&this.prev<e.finallyLoc){var i=e;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=n,i?(this.method="next",this.next=i.finallyLoc,A):this.complete(o)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),A},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),l(r),A}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var i=e.arg;l(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:v(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=y),A}}}(function(){return this}()||Function("return this")())},function(t,n,r){r(327),t.exports=r(21).RegExp.escape},function(t,n,r){var e=r(0),i=r(328)(/[\\^$*+?.()|[\]{}]/g,"\\$&");e(e.S,"RegExp",{escape:function(t){return i(t)}})},function(t,n){t.exports=function(t,n){var r=n===Object(n)?function(t){return n[t]}:n;return function(n){return String(n).replace(t,r)}}},function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0}),n.Report=n.OAuth=void 0;var i=r(330),o=e(i),u=r(340),c=e(u);n.OAuth=o.default,n.Report=c.default},function(t,n,r){"use strict";function e(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,r){function e(i,o){try{var u=n[i](o),c=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(c).then(function(t){e("next",t)},function(t){e("throw",t)});t(c)}return e("next")})}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),u=r(124),c=r(125),a=r(333),f=function(t){return t&&t.__esModule?t:{default:t}}(a),s=function(){function t(){i(this,t)}return o(t,null,[{key:"authorizeUrl",value:function(t){var n=t.clientId,r=void 0===n?process.env.GENOMELINK_CLIENT_ID:n,e=t.callbackUrl,i=void 0===e?process.env.GENOMELINK_CALLBACK_URL:e,o=t.scope;return u.API_BASE+"/oauth/authorize?redirect_uri="+i+"&client_id="+r+"&scope="+o+"&response_type=code"}},{key:"token",value:function(){function t(t){return n.apply(this,arguments)}var n=e(regeneratorRuntime.mark(function t(n){var r,e,i,o,a,s=n.clientId,h=void 0===s?process.env.GENOMELINK_CLIENT_ID:s,l=n.clientSecret,p=void 0===l?process.env.GENOMELINK_CLIENT_SECRET:l,v=n.callbackUrl,d=void 0===v?process.env.GENOMELINK_CALLBACK_URL:v,y=n.requestUrl;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=u.API_BASE+"/oauth/token",e=f.default.parse(y,!0).query,i=e.code,o={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:(0,c.createURLSearchParams)({grant_type:"authorization_code",code:i,client_id:h,client_secret:p,redirect_uri:d})},t.next=6,(0,c.fetchBy)(r,o);case 6:return a=t.sent,t.abrupt("return",a.access_token);case 8:case"end":return t.stop()}},t,this)}));return t}()}]),t}();n.default=s,t.exports=n.default},function(n,r){n.exports=t},function(t,n,r){"use strict";(function(n){/*!
Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
function r(t){var n,r,o,c,a,f,s=Object.create(null);if(this[l]=s,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),c=t.split("&"),a=0,f=c.length;a<f;a++)o=c[a],n=o.indexOf("="),-1<n?e(s,i(o.slice(0,n)),i(o.slice(n+1))):o.length&&e(s,i(o),"");else if(u(t))for(a=0,f=t.length;a<f;a++)o=t[a],e(s,o[0],o[1]);else for(r in t)e(s,r,t[r])}function e(t,n,r){n in t?t[n].push(""+r):t[n]=u(r)?r:[""+r]}function i(t){return decodeURIComponent(t.replace(f," "))}function o(t){return encodeURIComponent(t).replace(a,h)}var u=Array.isArray,c=r.prototype,a=/[!'\(\)~]|%20|%00/g,f=/\+/g,s={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},h=function(t){return s[t]},l="__URLSearchParams__:"+Math.random();c.append=function(t,n){e(this[l],t,n)},c.delete=function(t){delete this[l][t]},c.get=function(t){var n=this[l];return t in n?n[t][0]:null},c.getAll=function(t){var n=this[l];return t in n?n[t].slice(0):[]},c.has=function(t){return t in this[l]},c.set=function(t,n){this[l][t]=[""+n]},c.forEach=function(t,n){var r=this[l];Object.getOwnPropertyNames(r).forEach(function(e){r[e].forEach(function(r){t.call(n,r,e,this)},this)},this)},c.toJSON=function(){return{}},c.toString=function(){var t,n,r,e,i=this[l],u=[];for(n in i)for(r=o(n),t=0,e=i[n];t<e.length;t++)u.push(r+"="+o(e[t]));return u.join("&")},r=t.exports=n.URLSearchParams||r,function(t){var n=function(){try{return!!Symbol.iterator}catch(t){return!1}}();"forEach"in t||(t.forEach=function(t,n){var r=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(e){!e.length||e in r||(r[e]=this.getAll(e)).forEach(function(r){t.call(n,r,e,this)},this)},this)}),"keys"in t||(t.keys=function(){var t=[];this.forEach(function(n,r){t.push(r)});var r={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return n&&(r[Symbol.iterator]=function(){return r}),r}),"values"in t||(t.values=function(){var t=[];this.forEach(function(n){t.push(n)});var r={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return n&&(r[Symbol.iterator]=function(){return r}),r}),"entries"in t||(t.entries=function(){var t=[];this.forEach(function(n,r){t.push([r,n])});var r={next:function(){var n=t.shift();return{done:void 0===n,value:n}}};return n&&(r[Symbol.iterator]=function(){return r}),r}),!n||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,n,r,e=this.entries(),i=e.next(),o=i.done,u=[],c=Object.create(null);!o;)r=i.value,n=r[0],u.push(n),n in c||(c[n]=[]),c[n].push(r[1]),i=e.next(),o=i.done;for(u.sort(),t=0;t<u.length;t++)this.delete(u[t]);for(t=0;t<u.length;t++)n=u[t],this.append(n,c[n].shift())})}(r.prototype)}).call(n,r(63))},function(t,n,r){"use strict";function e(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,n,r){if(t&&f.isObject(t)&&t instanceof e)return t;var i=new e;return i.parse(t,n,r),i}function o(t){return f.isString(t)&&(t=i(t)),t instanceof e?t.format():e.prototype.format.call(t)}function u(t,n){return i(t,!1,!0).resolve(n)}function c(t,n){return t?i(t,!1,!0).resolveObject(n):n}var a=r(334),f=r(336);n.parse=i,n.resolve=u,n.resolveObject=c,n.format=o,n.Url=e;var s=/^([a-z0-9.+-]+:)/i,h=/:[0-9]*$/,l=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,p=["<",">",'"',"`"," ","\r","\n","\t"],v=["{","}","|","\\","^","`"].concat(p),d=["'"].concat(v),y=["%","/","?",";","#"].concat(d),g=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,b=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,x={javascript:!0,"javascript:":!0},w={javascript:!0,"javascript:":!0},S={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},_=r(337);e.prototype.parse=function(t,n,r){if(!f.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var e=t.indexOf("?"),i=-1!==e&&e<t.indexOf("#")?"?":"#",o=t.split(i),u=/\\/g;o[0]=o[0].replace(u,"/"),t=o.join(i);var c=t;if(c=c.trim(),!r&&1===t.split("#").length){var h=l.exec(c);if(h)return this.path=c,this.href=c,this.pathname=h[1],h[2]?(this.search=h[2],this.query=n?_.parse(this.search.substr(1)):this.search.substr(1)):n&&(this.search="",this.query={}),this}var p=s.exec(c);if(p){p=p[0];var v=p.toLowerCase();this.protocol=v,c=c.substr(p.length)}if(r||p||c.match(/^\/\/[^@\/]+@[^@\/]+/)){var O="//"===c.substr(0,2);!O||p&&w[p]||(c=c.substr(2),this.slashes=!0)}if(!w[p]&&(O||p&&!S[p])){for(var E=-1,P=0;P<g.length;P++){var M=c.indexOf(g[P]);-1!==M&&(-1===E||M<E)&&(E=M)}var j,A;A=-1===E?c.lastIndexOf("@"):c.lastIndexOf("@",E),-1!==A&&(j=c.slice(0,A),c=c.slice(A+1),this.auth=decodeURIComponent(j)),E=-1;for(var P=0;P<y.length;P++){var M=c.indexOf(y[P]);-1!==M&&(-1===E||M<E)&&(E=M)}-1===E&&(E=c.length),this.host=c.slice(0,E),c=c.slice(E),this.parseHost(),this.hostname=this.hostname||"";var F="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!F)for(var I=this.hostname.split(/\./),P=0,N=I.length;P<N;P++){var k=I[P];if(k&&!k.match(m)){for(var R="",L=0,T=k.length;L<T;L++)k.charCodeAt(L)>127?R+="x":R+=k[L];if(!R.match(m)){var C=I.slice(0,P),U=I.slice(P+1),D=k.match(b);D&&(C.push(D[1]),U.unshift(D[2])),U.length&&(c="/"+U.join(".")+c),this.hostname=C.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),F||(this.hostname=a.toASCII(this.hostname));var W=this.port?":"+this.port:"",G=this.hostname||"";this.host=G+W,this.href+=this.host,F&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==c[0]&&(c="/"+c))}if(!x[v])for(var P=0,N=d.length;P<N;P++){var B=d[P];if(-1!==c.indexOf(B)){var V=encodeURIComponent(B);V===B&&(V=escape(B)),c=c.split(B).join(V)}}var q=c.indexOf("#");-1!==q&&(this.hash=c.substr(q),c=c.slice(0,q));var z=c.indexOf("?");if(-1!==z?(this.search=c.substr(z),this.query=c.substr(z+1),n&&(this.query=_.parse(this.query)),c=c.slice(0,z)):n&&(this.search="",this.query={}),c&&(this.pathname=c),S[v]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var W=this.pathname||"",K=this.search||"";this.path=W+K}return this.href=this.format(),this},e.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var n=this.protocol||"",r=this.pathname||"",e=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&f.isObject(this.query)&&Object.keys(this.query).length&&(o=_.stringify(this.query));var u=this.search||o&&"?"+o||"";return n&&":"!==n.substr(-1)&&(n+=":"),this.slashes||(!n||S[n])&&!1!==i?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),e&&"#"!==e.charAt(0)&&(e="#"+e),u&&"?"!==u.charAt(0)&&(u="?"+u),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),u=u.replace("#","%23"),n+i+r+u+e},e.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},e.prototype.resolveObject=function(t){if(f.isString(t)){var n=new e;n.parse(t,!1,!0),t=n}for(var r=new e,i=Object.keys(this),o=0;o<i.length;o++){var u=i[o];r[u]=this[u]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var c=Object.keys(t),a=0;a<c.length;a++){var s=c[a];"protocol"!==s&&(r[s]=t[s])}return S[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!S[t.protocol]){for(var h=Object.keys(t),l=0;l<h.length;l++){var p=h[l];r[p]=t[p]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||w[t.protocol])r.pathname=t.pathname;else{for(var v=(t.pathname||"").split("/");v.length&&!(t.host=v.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==v[0]&&v.unshift(""),v.length<2&&v.unshift(""),r.pathname=v.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var d=r.pathname||"",y=r.search||"";r.path=d+y}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var g=r.pathname&&"/"===r.pathname.charAt(0),m=t.host||t.pathname&&"/"===t.pathname.charAt(0),b=m||g||r.host&&t.pathname,x=b,_=r.pathname&&r.pathname.split("/")||[],v=t.pathname&&t.pathname.split("/")||[],O=r.protocol&&!S[r.protocol];if(O&&(r.hostname="",r.port=null,r.host&&(""===_[0]?_[0]=r.host:_.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===v[0]?v[0]=t.host:v.unshift(t.host)),t.host=null),b=b&&(""===v[0]||""===_[0])),m)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,_=v;else if(v.length)_||(_=[]),_.pop(),_=_.concat(v),r.search=t.search,r.query=t.query;else if(!f.isNullOrUndefined(t.search)){if(O){r.hostname=r.host=_.shift();var E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return r.search=t.search,r.query=t.query,f.isNull(r.pathname)&&f.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!_.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var P=_.slice(-1)[0],M=(r.host||t.host||_.length>1)&&("."===P||".."===P)||""===P,j=0,A=_.length;A>=0;A--)P=_[A],"."===P?_.splice(A,1):".."===P?(_.splice(A,1),j++):j&&(_.splice(A,1),j--);if(!b&&!x)for(;j--;j)_.unshift("..");!b||""===_[0]||_[0]&&"/"===_[0].charAt(0)||_.unshift(""),M&&"/"!==_.join("/").substr(-1)&&_.push("");var F=""===_[0]||_[0]&&"/"===_[0].charAt(0);if(O){r.hostname=r.host=F?"":_.length?_.shift():"";var E=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");E&&(r.auth=E.shift(),r.host=r.hostname=E.shift())}return b=b||r.host&&_.length,b&&!F&&_.unshift(""),_.length?r.pathname=_.join("/"):(r.pathname=null,r.path=null),f.isNull(r.pathname)&&f.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},e.prototype.parseHost=function(){var t=this.host,n=h.exec(t);n&&(n=n[0],":"!==n&&(this.port=n.substr(1)),t=t.substr(0,t.length-n.length)),t&&(this.hostname=t)}},function(t,n,r){(function(t,e){var i;!function(o){function u(t){throw new RangeError(N[t])}function c(t,n){for(var r=t.length,e=[];r--;)e[r]=n(t[r]);return e}function a(t,n){var r=t.split("@"),e="";return r.length>1&&(e=r[0]+"@",t=r[1]),t=t.replace(I,"."),e+c(t.split("."),n).join(".")}function f(t){for(var n,r,e=[],i=0,o=t.length;i<o;)n=t.charCodeAt(i++),n>=55296&&n<=56319&&i<o?(r=t.charCodeAt(i++),56320==(64512&r)?e.push(((1023&n)<<10)+(1023&r)+65536):(e.push(n),i--)):e.push(n);return e}function s(t){return c(t,function(t){var n="";return t>65535&&(t-=65536,n+=L(t>>>10&1023|55296),t=56320|1023&t),n+=L(t)}).join("")}function h(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:w}function l(t,n){return t+22+75*(t<26)-((0!=n)<<5)}function p(t,n,r){var e=0;for(t=r?R(t/E):t>>1,t+=R(t/n);t>k*_>>1;e+=w)t=R(t/k);return R(e+(k+1)*t/(t+O))}function v(t){var n,r,e,i,o,c,a,f,l,v,d=[],y=t.length,g=0,m=M,b=P;for(r=t.lastIndexOf(j),r<0&&(r=0),e=0;e<r;++e)t.charCodeAt(e)>=128&&u("not-basic"),d.push(t.charCodeAt(e));for(i=r>0?r+1:0;i<y;){for(o=g,c=1,a=w;i>=y&&u("invalid-input"),f=h(t.charCodeAt(i++)),(f>=w||f>R((x-g)/c))&&u("overflow"),g+=f*c,l=a<=b?S:a>=b+_?_:a-b,!(f<l);a+=w)v=w-l,c>R(x/v)&&u("overflow"),c*=v;n=d.length+1,b=p(g-o,n,0==o),R(g/n)>x-m&&u("overflow"),m+=R(g/n),g%=n,d.splice(g++,0,m)}return s(d)}function d(t){var n,r,e,i,o,c,a,s,h,v,d,y,g,m,b,O=[];for(t=f(t),y=t.length,n=M,r=0,o=P,c=0;c<y;++c)(d=t[c])<128&&O.push(L(d));for(e=i=O.length,i&&O.push(j);e<y;){for(a=x,c=0;c<y;++c)(d=t[c])>=n&&d<a&&(a=d);for(g=e+1,a-n>R((x-r)/g)&&u("overflow"),r+=(a-n)*g,n=a,c=0;c<y;++c)if(d=t[c],d<n&&++r>x&&u("overflow"),d==n){for(s=r,h=w;v=h<=o?S:h>=o+_?_:h-o,!(s<v);h+=w)b=s-v,m=w-v,O.push(L(l(v+b%m,0))),s=R(b/m);O.push(L(l(s,0))),o=p(r,g,e==i),r=0,++e}++r,++n}return O.join("")}function y(t){return a(t,function(t){return A.test(t)?v(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return F.test(t)?"xn--"+d(t):t})}var m=("object"==typeof n&&n&&n.nodeType,"object"==typeof t&&t&&t.nodeType,"object"==typeof e&&e);var b,x=2147483647,w=36,S=1,_=26,O=38,E=700,P=72,M=128,j="-",A=/^xn--/,F=/[^\x20-\x7E]/,I=/[\x2E\u3002\uFF0E\uFF61]/g,N={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=w-S,R=Math.floor,L=String.fromCharCode;b={version:"1.4.1",ucs2:{decode:f,encode:s},decode:v,encode:d,toASCII:g,toUnicode:y},void 0!==(i=function(){return b}.call(n,r,n,t))&&(t.exports=i)}()}).call(n,r(335)(t),r(63))},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},function(t,n,r){"use strict";t.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},function(t,n,r){"use strict";n.decode=n.parse=r(338),n.encode=n.stringify=r(339)},function(t,n,r){"use strict";function e(t,n){return Object.prototype.hasOwnProperty.call(t,n)}t.exports=function(t,n,r,o){n=n||"&",r=r||"=";var u={};if("string"!=typeof t||0===t.length)return u;var c=/\+/g;t=t.split(n);var a=1e3;o&&"number"==typeof o.maxKeys&&(a=o.maxKeys);var f=t.length;a>0&&f>a&&(f=a);for(var s=0;s<f;++s){var h,l,p,v,d=t[s].replace(c,"%20"),y=d.indexOf(r);y>=0?(h=d.substr(0,y),l=d.substr(y+1)):(h=d,l=""),p=decodeURIComponent(h),v=decodeURIComponent(l),e(u,p)?i(u[p])?u[p].push(v):u[p]=[u[p],v]:u[p]=v}return u};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},function(t,n,r){"use strict";function e(t,n){if(t.map)return t.map(n);for(var r=[],e=0;e<t.length;e++)r.push(n(t[e],e));return r}var i=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,n,r,c){return n=n||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?e(u(t),function(u){var c=encodeURIComponent(i(u))+r;return o(t[u])?e(t[u],function(t){return c+encodeURIComponent(i(t))}).join(n):c+encodeURIComponent(i(t[u]))}).join(n):c?encodeURIComponent(i(c))+r+encodeURIComponent(i(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},u=Object.keys||function(t){var n=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(r);return n}},function(t,n,r){"use strict";function e(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,r){function e(i,o){try{var u=n[i](o),c=u.value}catch(t){return void r(t)}if(!u.done)return Promise.resolve(c).then(function(t){e("next",t)},function(t){e("throw",t)});t(c)}return e("next")})}}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}}(),u=r(124),c=r(125),a=function(){function t(n){i(this,t),this._data=n}return o(t,null,[{key:"fetch",value:function(){function n(t){return r.apply(this,arguments)}var r=e(regeneratorRuntime.mark(function n(r){var e,i,o=r.name,a=r.population,f=r.token;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=u.API_BASE+"/v1/reports/"+o+"/?population="+a,i={headers:{authorization:"Bearer "+f}},n.t0=t,n.next=5,(0,c.fetchBy)(e,i);case 5:return n.t1=n.sent,n.abrupt("return",new n.t0(n.t1));case 7:case"end":return n.stop()}},n,this)}));return n}()}]),o(t,[{key:"phenotype",get:function(){return this._data.phenotype}},{key:"population",get:function(){return this._data.population}},{key:"scores",get:function(){return this._data.scores}},{key:"summary",get:function(){return this._data.summary}}]),t}();n.default=a,t.exports=n.default}])});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(5);
module.exports = self.fetch.bind(self);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = 'status' in options ? options.status : 200
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map