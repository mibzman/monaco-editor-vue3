var t=Object.defineProperty,e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,o=(e,n,r)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;import*as s from"monaco-editor";function i(t,e){const n=Object.create(null),r=t.split(",");for(let o=0;o<r.length;o++)n[r[o]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const l=i("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt");function c(t){if(w(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],o=c(M(r)?f(r):r);if(o)for(const t in o)e[t]=o[t]}return e}if(O(t))return t}const a=/;(?![^(]*\))/g,u=/:(.+)/;function f(t){const e={};return t.split(a).forEach((t=>{if(t){const n=t.split(u);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(w(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(O(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const h={},p=[],g=()=>{},_=/^on[^a-z]/,v=t=>_.test(t),y=Object.assign,m=Object.prototype.hasOwnProperty,b=(t,e)=>m.call(t,e),w=Array.isArray,S=t=>"[object Map]"===k(t),x=t=>"function"==typeof t,M=t=>"string"==typeof t,E=t=>"symbol"==typeof t,O=t=>null!==t&&"object"==typeof t,R=Object.prototype.toString,k=t=>R.call(t),C=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,j=(t,e)=>t!==e&&(t==t||e==e),$=new WeakMap,I=[];let P;const F=Symbol(""),N=Symbol("");function V(t,e=h){(function(t){return t&&!0===t._isEffect})(t)&&(t=t.raw);const n=function(t,e){const n=function(){if(!n.active)return t();if(!I.includes(n)){A(n);try{return D.push(W),W=!0,I.push(n),P=n,t()}finally{I.pop(),U(),P=I[I.length-1]}}};return n.id=z++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}(t,e);return e.lazy||n(),n}let z=0;function A(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let W=!0;const D=[];function T(){D.push(W),W=!1}function U(){const t=D.pop();W=void 0===t||t}function B(t,e,n){if(!W||void 0===P)return;let r=$.get(t);r||$.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(P)||(o.add(P),P.deps.push(o))}function L(t,e,n,r,o,s){const i=$.get(t);if(!i)return;const l=new Set,c=t=>{t&&t.forEach((t=>{(t!==P||t.allowRecurse)&&l.add(t)}))};if("clear"===e)i.forEach(c);else if("length"===n&&w(t))i.forEach(((t,e)=>{("length"===e||e>=r)&&c(t)}));else switch(void 0!==n&&c(i.get(n)),e){case"add":w(t)?C(n)&&c(i.get("length")):(c(i.get(F)),S(t)&&c(i.get(N)));break;case"delete":w(t)||(c(i.get(F)),S(t)&&c(i.get(N)));break;case"set":S(t)&&c(i.get(F))}l.forEach((t=>{t.options.scheduler?t.options.scheduler(t):t()}))}const K=i("__proto__,__v_isRef,__isVue"),H=new Set(Object.getOwnPropertyNames(Symbol).map((t=>Symbol[t])).filter(E)),J=Y(),q=Y(!1,!0),G=Y(!0),Q=Y(!0,!0),X={};function Y(t=!1,e=!1){return function(n,r,o){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_raw"===r&&o===(t?e?Ot:Et:e?Mt:xt).get(n))return n;const s=w(n);if(!t&&s&&b(X,r))return Reflect.get(X,r,o);const i=Reflect.get(n,r,o);if(E(r)?H.has(r):K(r))return i;if(t||B(n,0,r),e)return i;if(Nt(i)){return!s||!C(r)?i.value:i}return O(i)?t?Ct(i):kt(i):i}}["includes","indexOf","lastIndexOf"].forEach((t=>{const e=Array.prototype[t];X[t]=function(...t){const n=Ft(this);for(let e=0,o=this.length;e<o;e++)B(n,0,e+"");const r=e.apply(n,t);return-1===r||!1===r?e.apply(n,t.map(Ft)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{const e=Array.prototype[t];X[t]=function(...t){T();const n=e.apply(this,t);return U(),n}}));function Z(t=!1){return function(e,n,r,o){let s=e[n];if(!t&&(r=Ft(r),s=Ft(s),!w(e)&&Nt(s)&&!Nt(r)))return s.value=r,!0;const i=w(e)&&C(n)?Number(n)<e.length:b(e,n),l=Reflect.set(e,n,r,o);return e===Ft(o)&&(i?j(r,s)&&L(e,"set",n,r):L(e,"add",n,r)),l}}const tt={get:J,set:Z(),deleteProperty:function(t,e){const n=b(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&L(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return E(e)&&H.has(e)||B(t,0,e),n},ownKeys:function(t){return B(t,0,w(t)?"length":F),Reflect.ownKeys(t)}},et={get:G,set:(t,e)=>!0,deleteProperty:(t,e)=>!0};y({},tt,{get:q,set:Z(!0)}),y({},et,{get:Q});const nt=t=>O(t)?kt(t):t,rt=t=>O(t)?Ct(t):t,ot=t=>t,st=t=>Reflect.getPrototypeOf(t);function it(t,e,n=!1,r=!1){const o=Ft(t=t.__v_raw),s=Ft(e);e!==s&&!n&&B(o,0,e),!n&&B(o,0,s);const{has:i}=st(o),l=r?ot:n?rt:nt;return i.call(o,e)?l(t.get(e)):i.call(o,s)?l(t.get(s)):void(t!==o&&t.get(e))}function lt(t,e=!1){const n=this.__v_raw,r=Ft(n),o=Ft(t);return t!==o&&!e&&B(r,0,t),!e&&B(r,0,o),t===o?n.has(t):n.has(t)||n.has(o)}function ct(t,e=!1){return t=t.__v_raw,!e&&B(Ft(t),0,F),Reflect.get(t,"size",t)}function at(t){t=Ft(t);const e=Ft(this);return st(e).has.call(e,t)||(e.add(t),L(e,"add",t,t)),this}function ut(t,e){e=Ft(e);const n=Ft(this),{has:r,get:o}=st(n);let s=r.call(n,t);s||(t=Ft(t),s=r.call(n,t));const i=o.call(n,t);return n.set(t,e),s?j(e,i)&&L(n,"set",t,e):L(n,"add",t,e),this}function ft(t){const e=Ft(this),{has:n,get:r}=st(e);let o=n.call(e,t);o||(t=Ft(t),o=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return o&&L(e,"delete",t,void 0),s}function dt(){const t=Ft(this),e=0!==t.size,n=t.clear();return e&&L(t,"clear",void 0,void 0),n}function ht(t,e){return function(n,r){const o=this,s=o.__v_raw,i=Ft(s),l=e?ot:t?rt:nt;return!t&&B(i,0,F),s.forEach(((t,e)=>n.call(r,l(t),l(e),o)))}}function pt(t,e,n){return function(...r){const o=this.__v_raw,s=Ft(o),i=S(s),l="entries"===t||t===Symbol.iterator&&i,c="keys"===t&&i,a=o[t](...r),u=n?ot:e?rt:nt;return!e&&B(s,0,c?N:F),{next(){const{value:t,done:e}=a.next();return e?{value:t,done:e}:{value:l?[u(t[0]),u(t[1])]:u(t),done:e}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return"delete"!==t&&this}}const _t={get(t){return it(this,t)},get size(){return ct(this)},has:lt,add:at,set:ut,delete:ft,clear:dt,forEach:ht(!1,!1)},vt={get(t){return it(this,t,!1,!0)},get size(){return ct(this)},has:lt,add:at,set:ut,delete:ft,clear:dt,forEach:ht(!1,!0)},yt={get(t){return it(this,t,!0)},get size(){return ct(this,!0)},has(t){return lt.call(this,t,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:ht(!0,!1)},mt={get(t){return it(this,t,!0,!0)},get size(){return ct(this,!0)},has(t){return lt.call(this,t,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:ht(!0,!0)};function bt(t,e){const n=e?t?mt:vt:t?yt:_t;return(e,r,o)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get(b(n,r)&&r in e?n:e,r,o)}["keys","values","entries",Symbol.iterator].forEach((t=>{_t[t]=pt(t,!1,!1),yt[t]=pt(t,!0,!1),vt[t]=pt(t,!1,!0),mt[t]=pt(t,!0,!0)}));const wt={get:bt(!1,!1)},St={get:bt(!0,!1)},xt=new WeakMap,Mt=new WeakMap,Et=new WeakMap,Ot=new WeakMap;function Rt(t){return t.__v_skip||!Object.isExtensible(t)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>k(t).slice(8,-1))(t))}function kt(t){return t&&t.__v_isReadonly?t:jt(t,!1,tt,wt,xt)}function Ct(t){return jt(t,!0,et,St,Et)}function jt(t,e,n,r,o){if(!O(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const s=o.get(t);if(s)return s;const i=Rt(t);if(0===i)return t;const l=new Proxy(t,2===i?r:n);return o.set(t,l),l}function $t(t){return It(t)?$t(t.__v_raw):!(!t||!t.__v_isReactive)}function It(t){return!(!t||!t.__v_isReadonly)}function Pt(t){return $t(t)||It(t)}function Ft(t){return t&&Ft(t.__v_raw)||t}function Nt(t){return Boolean(t&&!0===t.__v_isRef)}class Vt{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}function zt(t,e){return Nt(t[e])?t[e]:new Vt(t,e)}class At{constructor(t,e,n){this._setter=e,this._dirty=!0,this.__v_isRef=!0,this.effect=V(t,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,L(Ft(this),"set","value"))}}),this.__v_isReadonly=n}get value(){const t=Ft(this);return t._dirty&&(t._value=this.effect(),t._dirty=!1),B(t,0,"value"),t._value}set value(t){this._setter(t)}}function Wt(t,e,n,r){let o;try{o=r?t(...r):t()}catch(s){Tt(s,e,n)}return o}function Dt(t,e,n,r){if(x(t)){const s=Wt(t,e,n,r);return s&&(O(o=s)&&x(o.then)&&x(o.catch))&&s.catch((t=>{Tt(t,e,n)})),s}var o;const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}function Tt(t,e,n,r=!0){e&&e.vnode;if(e){let r=e.parent;const o=e.proxy,s=n;for(;r;){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,s))return;r=r.parent}const i=e.appContext.config.errorHandler;if(i)return void Wt(i,null,10,[t,o,s])}!function(t,e,n,r=!0){console.error(t)}(t,0,0,r)}let Ut=!1,Bt=!1;const Lt=[];let Kt=0;const Ht=[];let Jt=null,qt=0;const Gt=[];let Qt=null,Xt=0;const Yt=Promise.resolve();let Zt=null,te=null;function ee(t){const e=Zt||Yt;return t?e.then(this?t.bind(this):t):e}function ne(t){if(!(Lt.length&&Lt.includes(t,Ut&&t.allowRecurse?Kt+1:Kt)||t===te)){const e=function(t){let e=Kt+1,n=Lt.length;const r=ie(t);for(;e<n;){const t=e+n>>>1;ie(Lt[t])<r?e=t+1:n=t}return e}(t);e>-1?Lt.splice(e,0,t):Lt.push(t),re()}}function re(){Ut||Bt||(Bt=!0,Zt=Yt.then(le))}function oe(t,e,n,r){w(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),re()}function se(t,e=null){if(Ht.length){for(te=e,Jt=[...new Set(Ht)],Ht.length=0,qt=0;qt<Jt.length;qt++)Jt[qt]();Jt=null,qt=0,te=null,se(t,e)}}const ie=t=>null==t.id?1/0:t.id;function le(t){Bt=!1,Ut=!0,se(t),Lt.sort(((t,e)=>ie(t)-ie(e)));try{for(Kt=0;Kt<Lt.length;Kt++){const t=Lt[Kt];t&&!1!==t.active&&Wt(t,null,14)}}finally{Kt=0,Lt.length=0,function(t){if(Gt.length){const t=[...new Set(Gt)];if(Gt.length=0,Qt)return void Qt.push(...t);for(Qt=t,Qt.sort(((t,e)=>ie(t)-ie(e))),Xt=0;Xt<Qt.length;Xt++)Qt[Xt]();Qt=null,Xt=0}}(),Ut=!1,Zt=null,(Lt.length||Ht.length||Gt.length)&&le(t)}}const ce={};function ae(t,e,{immediate:n,deep:r,flush:o,onTrack:s,onTrigger:i}=h,l=Ne){let c,a,u=!1,f=!1;if(Nt(t)?(c=()=>t.value,u=!!t._shallow):$t(t)?(c=()=>t,r=!0):w(t)?(f=!0,u=t.some($t),c=()=>t.map((t=>Nt(t)?t.value:$t(t)?fe(t):x(t)?Wt(t,l,2):void 0))):c=x(t)?e?()=>Wt(t,l,2):()=>{if(!l||!l.isUnmounted)return a&&a(),Dt(t,l,3,[d])}:g,e&&r){const t=c;c=()=>fe(t())}let d=t=>{a=y.options.onStop=()=>{Wt(t,l,4)}},p=f?[]:ce;const _=()=>{if(y.active)if(e){const t=y();(r||u||(f?t.some(((t,e)=>j(t,p[e]))):j(t,p)))&&(a&&a(),Dt(e,l,3,[t,p===ce?void 0:p,d]),p=t)}else y()};let v;_.allowRecurse=!!e,v="sync"===o?_:"post"===o?()=>ye(_,l&&l.suspense):()=>{!l||l.isMounted?function(t){oe(t,Jt,Ht,qt)}(_):_()};const y=V(c,{lazy:!0,onTrack:s,onTrigger:i,scheduler:v});return Ve(y,l),e?n?_():p=y():"post"===o?ye(y,l&&l.suspense):y(),()=>{var t;(t=y).active&&(A(t),t.options.onStop&&t.options.onStop(),t.active=!1),l&&((t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)})(l.effects,y)}}function ue(t,e,n){const r=this.proxy,o=M(t)?t.includes(".")?function(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}(r,t):()=>r[t]:t.bind(r,r);let s;return x(e)?s=e:(s=e.handler,n=e),ae(o,s.bind(r),n,this)}function fe(t,e=new Set){if(!O(t)||e.has(t)||t.__v_skip)return t;if(e.add(t),Nt(t))fe(t.value,e);else if(w(t))for(let n=0;n<t.length;n++)fe(t[n],e);else if("[object Set]"===k(t)||S(t))t.forEach((t=>{fe(t,e)}));else if((t=>"[object Object]"===k(t))(t))for(const n in t)fe(t[n],e);return t}function de(t,e,n,r=!1){const{mixins:o,extends:s}=e;s&&de(t,s,n,!0),o&&o.forEach((e=>de(t,e,n,!0)));for(const i in e)if(r&&"expose"===i);else{const r=he[i]||n&&n[i];t[i]=r?r(t[i],e[i]):e[i]}return t}const he={data:pe,props:ve,emits:ve,methods:ve,computed:ve,beforeCreate:_e,created:_e,beforeMount:_e,mounted:_e,beforeUpdate:_e,updated:_e,beforeDestroy:_e,destroyed:_e,activated:_e,deactivated:_e,errorCaptured:_e,serverPrefetch:_e,components:ve,directives:ve,watch:function(t,e){if(!t)return e;if(!e)return t;const n=y(Object.create(null),t);for(const r in e)n[r]=_e(t[r],e[r]);return n},provide:pe,inject:function(t,e){return ve(ge(t),ge(e))}};function pe(t,e){return e?t?function(){return y(x(t)?t.call(this,this):t,x(e)?e.call(this,this):e)}:e:t}function ge(t){if(w(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _e(t,e){return t?[...new Set([].concat(t,e))]:e}function ve(t,e){return t?y(y(Object.create(null),t),e):e}const ye=function(t,e){e&&e.pendingBranch?w(t)?e.effects.push(...t):e.effects.push(t):oe(t,Qt,Gt,Xt)},me=Symbol(),be=Symbol(void 0),we=Symbol(void 0),Se=Symbol(void 0),xe=[];let Me=null;function Ee(t,e,n,r,o){const s=ke(t,e,n,r,o,!0);return s.dynamicChildren=Me||p,xe.pop(),Me=xe[xe.length-1]||null,Me&&Me.push(s),s}const Oe=({key:t})=>null!=t?t:null,Re=({ref:t})=>null!=t?M(t)||Nt(t)||x(t)?{i:null,r:t}:t:null,ke=function(t,e=null,n=null,r=0,o=null,s=!1){t&&t!==me||(t=Se);if(i=t,i&&!0===i.__v_isVNode){const r=Ce(t,e,!0);return n&&$e(r,n),r}var i;(function(t){return x(t)&&"__vccOpts"in t})(t)&&(t=t.__vccOpts);if(e){(Pt(e)||"__vInternal"in e)&&(e=y({},e));let{class:t,style:n}=e;t&&!M(t)&&(e.class=d(t)),O(n)&&(Pt(n)&&!w(n)&&(n=y({},n)),e.style=c(n))}const l=M(t)?1:(t=>t.__isSuspense)(t)?128:(t=>t.__isTeleport)(t)?64:O(t)?4:x(t)?2:0,a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oe(e),ref:e&&Re(e),scopeId:null,slotScopeIds:null,children:null,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:o,dynamicChildren:null,appContext:null};$e(a,n),128&l&&t.normalize(a);!s&&Me&&(r>0||6&l)&&32!==r&&Me.push(a);return a};function Ce(t,e,n=!1){const{props:r,ref:o,patchFlag:s,children:i}=t,l=e?function(...t){const e=y({},t[0]);for(let n=1;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=d([e.class,r.class]));else if("style"===t)e.style=c([e.style,r.style]);else if(v(t)){const n=e[t],o=r[t];n!==o&&(e[t]=n?[].concat(n,o):o)}else""!==t&&(e[t]=r[t])}return e}(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Oe(l),ref:e&&e.ref?n&&o?w(o)?o.concat(Re(e)):[o,Re(e)]:Re(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==be?-1===s?16:16|s:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ce(t.ssContent),ssFallback:t.ssFallback&&Ce(t.ssFallback),el:t.el,anchor:t.anchor}}function je(t=" ",e=0){return ke(we,null,t,e)}function $e(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if(w(e))n=16;else if("object"==typeof e){if(1&r||64&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),$e(t,n()),n._c&&(n._d=!0)))}{n=32;const t=e._;t||"__vInternal"in e||(e._ctx=null)}}else x(e)?(e={default:e,_ctx:null},n=32):(e=String(e),64&r?(n=16,e=[je(e)]):n=8);t.children=e,t.shapeFlag|=n}const Ie=t=>t?4&t.vnode.shapeFlag?t.exposed?t.exposed:t.proxy:Ie(t.parent):null,Pe=y(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ie(t.parent),$root:t=>Ie(t.root),$emit:t=>t.emit,$options:t=>function(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:o,optionsCache:s,config:{optionMergeStrategies:i}}=t.appContext,l=s.get(e);let c;return l?c=l:o.length||n||r?(c={},o.length&&o.forEach((t=>de(c,t,i,!0))),de(c,e,i)):c=e,s.set(e,c),c}(t),$forceUpdate:t=>()=>ne(t.update),$nextTick:t=>ee.bind(t.proxy),$watch:t=>ue.bind(t)}),Fe={get({_:t},e){const{ctx:n,setupState:r,data:o,props:s,accessCache:i,type:l,appContext:c}=t;let a;if("$"!==e[0]){const l=i[e];if(void 0!==l)switch(l){case 0:return r[e];case 1:return o[e];case 3:return n[e];case 2:return s[e]}else{if(r!==h&&b(r,e))return i[e]=0,r[e];if(o!==h&&b(o,e))return i[e]=1,o[e];if((a=t.propsOptions[0])&&b(a,e))return i[e]=2,s[e];if(n!==h&&b(n,e))return i[e]=3,n[e];i[e]=4}}const u=Pe[e];let f,d;return u?("$attrs"===e&&B(t,0,e),u(t)):(f=l.__cssModules)&&(f=f[e])?f:n!==h&&b(n,e)?(i[e]=3,n[e]):(d=c.config.globalProperties,b(d,e)?d[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:s}=t;if(o!==h&&b(o,e))o[e]=n;else if(r!==h&&b(r,e))r[e]=n;else if(b(t.props,e))return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:s}},i){let l;return void 0!==n[i]||t!==h&&b(t,i)||e!==h&&b(e,i)||(l=s[0])&&b(l,i)||b(r,i)||b(Pe,i)||b(o.config.globalProperties,i)}};y({},Fe,{get(t,e){if(e!==Symbol.unscopables)return Fe.get(t,e,t)},has:(t,e)=>"_"!==e[0]&&!l(e)});let Ne=null;function Ve(t,e=Ne){e&&(e.effects||(e.effects=[])).push(t)}function ze(t){const e=function(t){let e,n;return x(t)?(e=t,n=g):(e=t.get,n=t.set),new At(e,n,x(t)||!t.set)}(t);return Ve(e.effect),e}const Ae=(We={name:"MonacoEditor",props:{diffEditor:{type:Boolean,default:!1},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:"100%"},original:String,value:String,language:{type:String,default:"javascript"},theme:{type:String,default:"vs"},options:{type:Object,default:()=>({})}},emits:["editorWillMount","editorDidMount","change"],setup(t){const{width:e,height:n}=function(t){const e=w(t)?new Array(t.length):{};for(const n in t)e[n]=zt(t,n);return e}(t);return{style:ze((()=>({width:e.value.toString().includes("%")?e.value:`${e.value}px`,height:n.value.toString().includes("%")?n.value:`${n.value}px`,"text-align":"left"})))}},mounted(){this.initMonaco()},beforeDestroy(){this.editor&&this.editor.dispose()},methods:{initMonaco(){this.$emit("editorWillMount",this.monaco);const{value:t,language:i,theme:l,options:c}=this;this.editor=s.editor[this.diffEditor?"createDiffEditor":"create"](this.$el,((t,s)=>{for(var i in s||(s={}))n.call(s,i)&&o(t,i,s[i]);if(e)for(var i of e(s))r.call(s,i)&&o(t,i,s[i]);return t})({value:t,language:i,theme:l},c)),this.diffEditor&&this._setModel(this.value,this.original);const a=this._getEditor();a.onDidChangeModelContent((t=>{const e=a.getValue();this.value!==e&&this.$emit("change",e,t)})),this.$emit("editorDidMount",this.editor)},_setModel(t,e){const{language:n}=this,r=s.editor.createModel(e,n),o=s.editor.createModel(t,n);this.editor.setModel({original:r,modified:o})},_setValue(t){let e=this._getEditor();if(e)return e.setValue(t)},_getValue(){let t=this._getEditor();return t?t.getValue():""},_getEditor(){return this.editor?this.diffEditor?this.editor.modifiedEditor:this.editor:null},_setOriginal(){const{original:t}=this.editor.getModel();t.setValue(this.original)}},watch:{options:{deep:!0,handler(t){this.editor.updateOptions(t)}},value(){this.value!==this._getValue()&&this._setValue(this.value)},original(){this._setOriginal()},language(){if(this.editor)if(this.diffEditor){const{original:t,modified:e}=this.editor.getModel();s.editor.setModelLanguage(t,this.language),s.editor.setModelLanguage(e,this.language)}else s.editor.setModelLanguage(this.editor.getModel(),this.language)},theme(){s.editor.setTheme(this.theme)}}},x(We)?{setup:We,name:We.name}:We);var We;Ae.render=function(t,e,n,r,o,s){return function(t=!1){xe.push(Me=t?null:[])}(),Ee("div",{class:"monaco-editor-vue3",style:t.style},null,4)},Ae.install=t=>{t.component(Ae.name,Ae)};export default Ae;
