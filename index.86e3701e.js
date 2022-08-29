!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequired7c6=o),o.register("3fu6U",(function(e,t){var n,i;n="undefined"!=typeof window?window:{},i=function(e,t,n){"use strict";var i,r;if(function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in r=e.lazySizesConfig||e.lazysizesConfig||{},n)t in r||(r[t]=n[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:r,noSupport:!0};var o,a,s,c,l,u,d,f,p,h,m,g,y,v,b,w,x,k,_,I,E,C,S,N,T,A,L,R,O,M,P,D,z,B,U,j,F,W,$,H,q,V,X,K,G,J=t.documentElement,Y=e.HTMLPictureElement,Q="addEventListener",Z="getAttribute",ee=e[Q].bind(e),te=e.setTimeout,ne=e.requestAnimationFrame||te,ie=e.requestIdleCallback,re=/^picture$/i,oe=["load","error","lazyincluded","_lazyloaded"],ae={},se=Array.prototype.forEach,ce=function(e,t){return ae[t]||(ae[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),ae[t].test(e[Z]("class")||"")&&ae[t]},le=function(e,t){ce(e,t)||e.setAttribute("class",(e[Z]("class")||"").trim()+" "+t)},ue=function(e,t){var n;(n=ce(e,t))&&e.setAttribute("class",(e[Z]("class")||"").replace(n," "))},de=function(e,t,n){var i=n?Q:"removeEventListener";n&&de(e,t),oe.forEach((function(n){e[i](n,t)}))},fe=function(e,n,r,o,a){var s=t.createEvent("Event");return r||(r={}),r.instance=i,s.initEvent(n,!o,!a),s.detail=r,e.dispatchEvent(s),s},pe=function(t,n){var i;!Y&&(i=e.picturefill||r.pf)?(n&&n.src&&!t[Z]("srcset")&&t.setAttribute("srcset",n.src),i({reevaluate:!0,elements:[t]})):n&&n.src&&(t.src=n.src)},he=function(e,t){return(getComputedStyle(e,null)||{})[t]},me=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ge=(V=[],X=q=[],K=function(){var e=X;for(X=q.length?V:q,$=!0,H=!1;e.length;)e.shift()();$=!1},G=function(e,n){$&&!n?e.apply(this,arguments):(X.push(e),H||(H=!0,(t.hidden?te:ne)(K)))},G._lsFlush=K,G),ye=function(e,t){return t?function(){ge(e)}:function(){var t=this,n=arguments;ge((function(){e.apply(t,n)}))}},ve=function(e){var t,i=0,o=r.throttleDelay,a=r.ricTimeout,s=function(){t=!1,i=n.now(),e()},c=ie&&a>49?function(){ie(s,{timeout:a}),a!==r.ricTimeout&&(a=r.ricTimeout)}:ye((function(){te(s)}),!0);return function(e){var r;(e=!0===e)&&(a=33),t||(t=!0,(r=o-(n.now()-i))<0&&(r=0),e||r<9?c():te(c,r))}},be=function(e){var t,i,r=99,o=function(){t=null,e()},a=function(){var e=n.now()-i;e<r?te(a,r-e):(ie||o)(o)};return function(){i=n.now(),t||(t=te(a,r))}},we=(x=/^img$/i,k=/^iframe$/i,_="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),I=0,E=0,C=0,S=-1,N=function(e){C--,(!e||C<0||!e.target)&&(C=0)},T=function(e){return null==w&&(w="hidden"==he(t.body,"visibility")),w||!("hidden"==he(e.parentNode,"visibility")&&"hidden"==he(e,"visibility"))},A=function(e,n){var i,r=e,o=T(e);for(g-=n,b+=n,y-=n,v+=n;o&&(r=r.offsetParent)&&r!=t.body&&r!=J;)(o=(he(r,"opacity")||1)>0)&&"visible"!=he(r,"overflow")&&(i=r.getBoundingClientRect(),o=v>i.left&&y<i.right&&b>i.top-1&&g<i.bottom+1);return o},R=ve(L=function(){var e,n,o,a,s,c,d,p,x,k,N,L,R=i.elements;if((f=r.loadMode)&&C<8&&(e=R.length)){for(n=0,S++;n<e;n++)if(R[n]&&!R[n]._lazyRace)if(!_||i.prematureUnveil&&i.prematureUnveil(R[n]))U(R[n]);else if((p=R[n][Z]("data-expand"))&&(c=1*p)||(c=E),k||(k=!r.expand||r.expand<1?J.clientHeight>500&&J.clientWidth>500?500:370:r.expand,i._defEx=k,N=k*r.expFactor,L=r.hFac,w=null,E<N&&C<1&&S>2&&f>2&&!t.hidden?(E=N,S=0):E=f>1&&S>1&&C<6?k:I),x!==c&&(h=innerWidth+c*L,m=innerHeight+c,d=-1*c,x=c),o=R[n].getBoundingClientRect(),(b=o.bottom)>=d&&(g=o.top)<=m&&(v=o.right)>=d*L&&(y=o.left)<=h&&(b||v||y||g)&&(r.loadHidden||T(R[n]))&&(u&&C<3&&!p&&(f<3||S<4)||A(R[n],c))){if(U(R[n]),s=!0,C>9)break}else!s&&u&&!a&&C<4&&S<4&&f>2&&(l[0]||r.preloadAfterLoad)&&(l[0]||!p&&(b||v||y||g||"auto"!=R[n][Z](r.sizesAttr)))&&(a=l[0]||R[n]);a&&!s&&U(a)}}),M=ye(O=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(N(e),le(t,r.loadedClass),ue(t,r.loadingClass),de(t,P),fe(t,"lazyloaded"))}),P=function(e){M({target:e.target})},D=function(e,t){var n=e.getAttribute("data-load-mode")||r.iframeLoadMode;0==n?e.contentWindow.location.replace(t):1==n&&(e.src=t)},z=function(e){var t,n=e[Z](r.srcsetAttr);(t=r.customMedia[e[Z]("data-media")||e[Z]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},B=ye((function(e,t,n,i,o){var a,s,c,l,u,f;(u=fe(e,"lazybeforeunveil",t)).defaultPrevented||(i&&(n?le(e,r.autosizesClass):e.setAttribute("sizes",i)),s=e[Z](r.srcsetAttr),a=e[Z](r.srcAttr),o&&(l=(c=e.parentNode)&&re.test(c.nodeName||"")),f=t.firesLoad||"src"in e&&(s||a||l),u={target:e},le(e,r.loadingClass),f&&(clearTimeout(d),d=te(N,2500),de(e,P,!0)),l&&se.call(c.getElementsByTagName("source"),z),s?e.setAttribute("srcset",s):a&&!l&&(k.test(e.nodeName)?D(e,a):e.src=a),o&&(s||l)&&pe(e,{src:a})),e._lazyRace&&delete e._lazyRace,ue(e,r.lazyClass),ge((function(){var t=e.complete&&e.naturalWidth>1;f&&!t||(t&&le(e,r.fastLoadedClass),O(u),e._lazyCache=!0,te((function(){"_lazyCache"in e&&delete e._lazyCache}),9)),"lazy"==e.loading&&C--}),!0)})),U=function(e){if(!e._lazyRace){var t,n=x.test(e.nodeName),i=n&&(e[Z](r.sizesAttr)||e[Z]("sizes")),o="auto"==i;(!o&&u||!n||!e[Z]("src")&&!e.srcset||e.complete||ce(e,r.errorClass)||!ce(e,r.lazyClass))&&(t=fe(e,"lazyunveilread").detail,o&&xe.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,C++,B(e,t,o,i,n))}},j=be((function(){r.loadMode=3,R()})),W=function(){u||(n.now()-p<999?te(W,999):(u=!0,r.loadMode=3,R(),ee("scroll",F,!0)))},{_:function(){p=n.now(),i.elements=t.getElementsByClassName(r.lazyClass),l=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),ee("scroll",R,!0),ee("resize",R,!0),ee("pageshow",(function(e){if(e.persisted){var n=t.querySelectorAll("."+r.loadingClass);n.length&&n.forEach&&ne((function(){n.forEach((function(e){e.complete&&U(e)}))}))}})),e.MutationObserver?new MutationObserver(R).observe(J,{childList:!0,subtree:!0,attributes:!0}):(J[Q]("DOMNodeInserted",R,!0),J[Q]("DOMAttrModified",R,!0),setInterval(R,999)),ee("hashchange",R,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach((function(e){t[Q](e,R,!0)})),/d$|^c/.test(t.readyState)?W():(ee("load",W),t[Q]("DOMContentLoaded",R),te(W,2e4)),i.elements.length?(L(),ge._lsFlush()):R()},checkElems:R,unveil:U,_aLSL:F=function(){3==r.loadMode&&(r.loadMode=2),j()}}),xe=(a=ye((function(e,t,n,i){var r,o,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),re.test(t.nodeName||""))for(o=0,a=(r=t.getElementsByTagName("source")).length;o<a;o++)r[o].setAttribute("sizes",i);n.detail.dataAttr||pe(e,n.detail)})),s=function(e,t,n){var i,r=e.parentNode;r&&(n=me(e,r,n),(i=fe(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=i.detail.width)&&n!==e._lazysizesWidth&&a(e,r,i,n))},{_:function(){o=t.getElementsByClassName(r.autosizesClass),ee("resize",c)},checkElems:c=be((function(){var e,t=o.length;if(t)for(e=0;e<t;e++)s(o[e])})),updateElem:s}),ke=function(){!ke.i&&t.getElementsByClassName&&(ke.i=!0,xe._(),we._())};return te((function(){r.init&&ke()})),i={cfg:r,autoSizer:xe,loader:we,init:ke,uP:pe,aC:le,rC:ue,hC:ce,fire:fe,gW:me,rAF:ge}}(n,n.document,Date),n.lazySizes=i,e.exports&&(e.exports=i)})),o.register("ke5Oc",(function(e,t){"use strict";var n=o("c4C4W"),i=o("lGmLA"),r=o("9jbh3"),a=o("knWMA");var s=function e(t){var o=new r(t),s=i(r.prototype.request,o);return n.extend(s,r.prototype,o),n.extend(s,o),s.create=function(n){return e(a(t,n))},s}(o("c74ni"));s.Axios=r,s.CanceledError=o("dW1zJ"),s.CancelToken=o("77MZz"),s.isCancel=o("lXDKh"),s.VERSION=o("kLR29").version,s.toFormData=o("12Kat"),s.AxiosError=o("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=o("9BdDr"),s.isAxiosError=o("kv87N"),e.exports=s,e.exports.default=s})),o.register("c4C4W",(function(e,t){"use strict";var n,i=o("lGmLA"),r=Object.prototype.toString,a=(n=Object.create(null),function(e){var t=r.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return a(t)===e}}function c(e){return Array.isArray(e)}function l(e){return void 0===e}var u=s("ArrayBuffer");function d(e){return null!==e&&"object"==typeof e}function f(e){if("object"!==a(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=s("Date"),h=s("File"),m=s("Blob"),g=s("FileList");function y(e){return"[object Function]"===r.call(e)}var v=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}var w,x=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w});e.exports={isArray:c,isArrayBuffer:u,isBuffer:function(e){return null!==e&&!l(e)&&null!==e.constructor&&!l(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||r.call(e)===t||y(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&u(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:f,isUndefined:l,isDate:p,isFile:h,isBlob:m,isFunction:y,isStream:function(e){return d(e)&&y(e.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function n(n,i){f(t[i])&&f(n)?t[i]=e(t[i],n):f(n)?t[i]=e({},n):c(n)?t[i]=n.slice():t[i]=n}for(var i=0,r=arguments.length;i<r;i++)b(arguments[i],n);return t},extend:function(e,t,n){return b(t,(function(t,r){e[r]=n&&"function"==typeof t?i(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var i,r,o,a={};t=t||{};do{for(r=(i=Object.getOwnPropertyNames(e)).length;r-- >0;)a[o=i[r]]||(t[o]=e[o],a[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:a,kindOfTest:s,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n},toArray:function(e){if(!e)return null;var t=e.length;if(l(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:x,isFileList:g}})),o.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}})),o.register("9jbh3",(function(e,t){"use strict";var n=o("c4C4W"),i=o("6d5Pb"),r=o("JRZh2"),a=o("k04r0"),s=o("knWMA"),c=o("gYMA1"),l=o("9SeBc"),u=l.validators;function d(e){this.defaults=e,this.interceptors={request:new r,response:new r}}d.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var o,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!r){var d=[a,void 0];for(Array.prototype.unshift.apply(d,i),d=d.concat(c),o=Promise.resolve(t);d.length;)o=o.then(d.shift(),d.shift());return o}for(var f=t;i.length;){var p=i.shift(),h=i.shift();try{f=p(f)}catch(e){h(e);break}}try{o=a(f)}catch(e){return Promise.reject(e)}for(;c.length;)o=o.then(c.shift(),c.shift());return o},d.prototype.getUri=function(e){e=s(this.defaults,e);var t=c(e.baseURL,e.url);return i(t,e.params,e.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(e){d.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(s(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}d.prototype[e]=t(),d.prototype[e+"Form"]=t(!0)})),e.exports=d})),o.register("6d5Pb",(function(e,t){"use strict";var n=o("c4C4W");function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var o;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var a=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(i(t)+"="+i(e))})))})),o=a.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}})),o.register("JRZh2",(function(e,t){"use strict";var n=o("c4C4W");function i(){this.handlers=[]}i.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=i})),o.register("k04r0",(function(e,t){"use strict";var n=o("c4C4W"),i=o("jrAxF"),r=o("lXDKh"),a=o("c74ni"),s=o("dW1zJ");function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||a.adapter)(e).then((function(t){return c(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return r(t)||(c(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),o.register("jrAxF",(function(e,t){"use strict";var n=o("c4C4W"),i=o("c74ni");e.exports=function(e,t,r){var o=this||i;return n.forEach(r,(function(n){e=n.call(o,e,t)})),e}})),o.register("c74ni",(function(e,t){"use strict";var n=o("6qd2L"),i=o("c4C4W"),r=o("h8JMh"),a=o("5TB86"),s=o("gWbUy"),c=o("12Kat"),l={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var d,f={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(d=o("btSY7")),d),transformRequest:[function(e,t){if(r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=i.isObject(e),a=t&&t["Content-Type"];if((n=i.isFileList(e))||o&&"multipart/form-data"===a){var s=this.env&&this.env.FormData;return c(n?{"files[]":e}:e,s&&new s)}return o||"application/json"===a?(u(t,"application/json"),function(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||f.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||r&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw a.from(e,a.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:o("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){f.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){f.headers[e]=i.merge(l)})),e.exports=f})),o.register("6qd2L",(function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,l=[],u=!1,d=-1;function f(){u&&c&&(u=!1,c.length?l=c.concat(l):d=-1,l.length&&p())}function p(){if(!u){var e=s(f);u=!0;for(var t=l.length;t;){for(c=l,l=[];++d<t;)c&&c[d].run();d=-1,t=l.length}c=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||s(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}})),o.register("h8JMh",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){n.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}})),o.register("5TB86",(function(e,t){"use strict";var n=o("c4C4W");function i(e,t,n,i,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}n.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var r=i.prototype,a={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){a[e]={value:e}})),Object.defineProperties(i,a),Object.defineProperty(r,"isAxiosError",{value:!0}),i.from=function(e,t,o,a,s,c){var l=Object.create(r);return n.toFlatObject(e,l,(function(e){return e!==Error.prototype})),i.call(l,e.message,t,o,a,s),l.name=e.name,c&&Object.assign(l,c),l},e.exports=i})),o.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),o.register("12Kat",(function(e,t){"use strict";var n=o("3aNd6").Buffer,i=o("c4C4W");e.exports=function(e,t){t=t||new FormData;var r=[];function o(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):n.from(e):e}return function e(n,a){if(i.isPlainObject(n)||i.isArray(n)){if(-1!==r.indexOf(n))throw Error("Circular reference detected in "+a);r.push(n),i.forEach(n,(function(n,r){if(!i.isUndefined(n)){var s,c=a?a+"."+r:r;if(n&&!a&&"object"==typeof n)if(i.endsWith(r,"{}"))n=JSON.stringify(n);else if(i.endsWith(r,"[]")&&(s=i.toArray(n)))return void s.forEach((function(e){!i.isUndefined(e)&&t.append(c,o(e))}));e(n,c)}})),r.pop()}else t.append(a,o(n))}(e),t}})),o.register("3aNd6",(function(t,n){var i,r;e(t.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(t.exports,"INSPECT_MAX_BYTES",(function(){return r}),(function(e){return r=e}));var a=o("5d11t"),s=o("7rddL");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=d,r=50;const l=2147483647;function u(e){if(e>l)throw new RangeError('The value "'+e+'" is invalid for option "size"');const t=new Uint8Array(e);return Object.setPrototypeOf(t,d.prototype),t}function d(e,t,n){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return h(e)}return f(e,t,n)}function f(e,t,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!d.isEncoding(t))throw new TypeError("Unknown encoding: "+t);const n=0|v(e,t);let i=u(n);const r=i.write(e,t);r!==n&&(i=i.slice(0,r));return i}(e,t);if(ArrayBuffer.isView(e))return function(e){if(Q(e,Uint8Array)){const t=new Uint8Array(e);return g(t.buffer,t.byteOffset,t.byteLength)}return m(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(Q(e,ArrayBuffer)||e&&Q(e.buffer,ArrayBuffer))return g(e,t,n);if("undefined"!=typeof SharedArrayBuffer&&(Q(e,SharedArrayBuffer)||e&&Q(e.buffer,SharedArrayBuffer)))return g(e,t,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');const i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return d.from(i,t,n);const r=function(e){if(d.isBuffer(e)){const t=0|y(e.length),n=u(t);return 0===n.length||e.copy(n,0,0,t),n}if(void 0!==e.length)return"number"!=typeof e.length||Z(e.length)?u(0):m(e);if("Buffer"===e.type&&Array.isArray(e.data))return m(e.data)}(e);if(r)return r;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return d.from(e[Symbol.toPrimitive]("string"),t,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function p(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function h(e){return p(e),u(e<0?0:0|y(e))}function m(e){const t=e.length<0?0:0|y(e.length),n=u(t);for(let i=0;i<t;i+=1)n[i]=255&e[i];return n}function g(e,t,n){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw new RangeError('"length" is outside of buffer bounds');let i;return i=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),Object.setPrototypeOf(i,d.prototype),i}function y(e){if(e>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return 0|e}function v(e,t){if(d.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||Q(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);const n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return G(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(e).length;default:if(r)return i?-1:G(e).length;t=(""+t).toLowerCase(),r=!0}}function b(e,t,n){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return O(this,t,n);case"utf8":case"utf-8":return T(this,t,n);case"ascii":return L(this,t,n);case"latin1":case"binary":return R(this,t,n);case"base64":return N(this,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return M(this,t,n);default:if(i)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function w(e,t,n){const i=e[t];e[t]=e[n],e[n]=i}function x(e,t,n,i,r){if(0===e.length)return-1;if("string"==typeof n?(i=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=r?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(r)return-1;n=e.length-1}else if(n<0){if(!r)return-1;n=0}if("string"==typeof t&&(t=d.from(t,i)),d.isBuffer(t))return 0===t.length?-1:k(e,t,n,i,r);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?r?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):k(e,[t],n,i,r);throw new TypeError("val must be string, number or Buffer")}function k(e,t,n,i,r){let o,a=1,s=e.length,c=t.length;if(void 0!==i&&("ucs2"===(i=String(i).toLowerCase())||"ucs-2"===i||"utf16le"===i||"utf-16le"===i)){if(e.length<2||t.length<2)return-1;a=2,s/=2,c/=2,n/=2}function l(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(r){let i=-1;for(o=n;o<s;o++)if(l(e,o)===l(t,-1===i?0:o-i)){if(-1===i&&(i=o),o-i+1===c)return i*a}else-1!==i&&(o-=o-i),i=-1}else for(n+c>s&&(n=s-c),o=n;o>=0;o--){let n=!0;for(let i=0;i<c;i++)if(l(e,o+i)!==l(t,i)){n=!1;break}if(n)return o}return-1}function _(e,t,n,i){n=Number(n)||0;const r=e.length-n;i?(i=Number(i))>r&&(i=r):i=r;const o=t.length;let a;for(i>o/2&&(i=o/2),a=0;a<i;++a){const i=parseInt(t.substr(2*a,2),16);if(Z(i))return a;e[n+a]=i}return a}function I(e,t,n,i){return Y(G(t,e.length-n),e,n,i)}function E(e,t,n,i){return Y(function(e){const t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(t),e,n,i)}function C(e,t,n,i){return Y(J(t),e,n,i)}function S(e,t,n,i){return Y(function(e,t){let n,i,r;const o=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=e.charCodeAt(a),i=n>>8,r=n%256,o.push(r),o.push(i);return o}(t,e.length-n),e,n,i)}function N(e,t,n){return 0===t&&n===e.length?a.fromByteArray(e):a.fromByteArray(e.slice(t,n))}function T(e,t,n){n=Math.min(e.length,n);const i=[];let r=t;for(;r<n;){const t=e[r];let o=null,a=t>239?4:t>223?3:t>191?2:1;if(r+a<=n){let n,i,s,c;switch(a){case 1:t<128&&(o=t);break;case 2:n=e[r+1],128==(192&n)&&(c=(31&t)<<6|63&n,c>127&&(o=c));break;case 3:n=e[r+1],i=e[r+2],128==(192&n)&&128==(192&i)&&(c=(15&t)<<12|(63&n)<<6|63&i,c>2047&&(c<55296||c>57343)&&(o=c));break;case 4:n=e[r+1],i=e[r+2],s=e[r+3],128==(192&n)&&128==(192&i)&&128==(192&s)&&(c=(15&t)<<18|(63&n)<<12|(63&i)<<6|63&s,c>65535&&c<1114112&&(o=c))}}null===o?(o=65533,a=1):o>65535&&(o-=65536,i.push(o>>>10&1023|55296),o=56320|1023&o),i.push(o),r+=a}return function(e){const t=e.length;if(t<=A)return String.fromCharCode.apply(String,e);let n="",i=0;for(;i<t;)n+=String.fromCharCode.apply(String,e.slice(i,i+=A));return n}(i)}d.TYPED_ARRAY_SUPPORT=function(){try{const e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),d.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(d.isBuffer(this))return this.byteOffset}}),d.poolSize=8192,d.from=function(e,t,n){return f(e,t,n)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array),d.alloc=function(e,t,n){return function(e,t,n){return p(e),e<=0?u(e):void 0!==t?"string"==typeof n?u(e).fill(t,n):u(e).fill(t):u(e)}(e,t,n)},d.allocUnsafe=function(e){return h(e)},d.allocUnsafeSlow=function(e){return h(e)},d.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==d.prototype},d.compare=function(e,t){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),Q(t,Uint8Array)&&(t=d.from(t,t.offset,t.byteLength)),!d.isBuffer(e)||!d.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.length;for(let r=0,o=Math.min(n,i);r<o;++r)if(e[r]!==t[r]){n=e[r],i=t[r];break}return n<i?-1:i<n?1:0},d.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return d.alloc(0);let n;if(void 0===t)for(t=0,n=0;n<e.length;++n)t+=e[n].length;const i=d.allocUnsafe(t);let r=0;for(n=0;n<e.length;++n){let t=e[n];if(Q(t,Uint8Array))r+t.length>i.length?(d.isBuffer(t)||(t=d.from(t)),t.copy(i,r)):Uint8Array.prototype.set.call(i,t,r);else{if(!d.isBuffer(t))throw new TypeError('"list" argument must be an Array of Buffers');t.copy(i,r)}r+=t.length}return i},d.byteLength=v,d.prototype._isBuffer=!0,d.prototype.swap16=function(){const e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)w(this,t,t+1);return this},d.prototype.swap32=function(){const e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)w(this,t,t+3),w(this,t+1,t+2);return this},d.prototype.swap64=function(){const e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)w(this,t,t+7),w(this,t+1,t+6),w(this,t+2,t+5),w(this,t+3,t+4);return this},d.prototype.toString=function(){const e=this.length;return 0===e?"":0===arguments.length?T(this,0,e):b.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(e){if(!d.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===d.compare(this,e)},d.prototype.inspect=function(){let e="";const t=r;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},c&&(d.prototype[c]=d.prototype.inspect),d.prototype.compare=function(e,t,n,i,r){if(Q(e,Uint8Array)&&(e=d.from(e,e.offset,e.byteLength)),!d.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===r&&(r=this.length),t<0||n>e.length||i<0||r>this.length)throw new RangeError("out of range index");if(i>=r&&t>=n)return 0;if(i>=r)return-1;if(t>=n)return 1;if(this===e)return 0;let o=(r>>>=0)-(i>>>=0),a=(n>>>=0)-(t>>>=0);const s=Math.min(o,a),c=this.slice(i,r),l=e.slice(t,n);for(let e=0;e<s;++e)if(c[e]!==l[e]){o=c[e],a=l[e];break}return o<a?-1:a<o?1:0},d.prototype.includes=function(e,t,n){return-1!==this.indexOf(e,t,n)},d.prototype.indexOf=function(e,t,n){return x(this,e,t,n,!0)},d.prototype.lastIndexOf=function(e,t,n){return x(this,e,t,n,!1)},d.prototype.write=function(e,t,n,i){if(void 0===t)i="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)i=t,n=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(n)?(n>>>=0,void 0===i&&(i="utf8")):(i=n,n=void 0)}const r=this.length-t;if((void 0===n||n>r)&&(n=r),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"hex":return _(this,e,t,n);case"utf8":case"utf-8":return I(this,e,t,n);case"ascii":case"latin1":case"binary":return E(this,e,t,n);case"base64":return C(this,e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return S(this,e,t,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const A=4096;function L(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(127&e[r]);return i}function R(e,t,n){let i="";n=Math.min(e.length,n);for(let r=t;r<n;++r)i+=String.fromCharCode(e[r]);return i}function O(e,t,n){const i=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>i)&&(n=i);let r="";for(let i=t;i<n;++i)r+=ee[e[i]];return r}function M(e,t,n){const i=e.slice(t,n);let r="";for(let e=0;e<i.length-1;e+=2)r+=String.fromCharCode(i[e]+256*i[e+1]);return r}function P(e,t,n){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>n)throw new RangeError("Trying to access beyond buffer length")}function D(e,t,n,i,r,o){if(!d.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<o)throw new RangeError('"value" argument is out of bounds');if(n+i>e.length)throw new RangeError("Index out of range")}function z(e,t,n,i,r){q(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o,o>>=8,e[n++]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,a>>=8,e[n++]=a,n}function B(e,t,n,i,r){q(t,i,r,e,n,7);let o=Number(t&BigInt(4294967295));e[n+7]=o,o>>=8,e[n+6]=o,o>>=8,e[n+5]=o,o>>=8,e[n+4]=o;let a=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=a,a>>=8,e[n+2]=a,a>>=8,e[n+1]=a,a>>=8,e[n]=a,n+8}function U(e,t,n,i,r,o){if(n+i>e.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function j(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,4),s.write(e,t,n,i,23,4),n+4}function F(e,t,n,i,r){return t=+t,n>>>=0,r||U(e,0,n,8),s.write(e,t,n,i,52,8),n+8}d.prototype.slice=function(e,t){const n=this.length;(e=~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),(t=void 0===t?n:~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);const i=this.subarray(e,t);return Object.setPrototypeOf(i,d.prototype),i},d.prototype.readUintLE=d.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return i},d.prototype.readUintBE=d.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e+--t],r=1;for(;t>0&&(r*=256);)i+=this[e+--t]*r;return i},d.prototype.readUint8=d.prototype.readUInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),this[e]},d.prototype.readUint16LE=d.prototype.readUInt16LE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]|this[e+1]<<8},d.prototype.readUint16BE=d.prototype.readUInt16BE=function(e,t){return e>>>=0,t||P(e,2,this.length),this[e]<<8|this[e+1]},d.prototype.readUint32LE=d.prototype.readUInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},d.prototype.readUint32BE=d.prototype.readUInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},d.prototype.readBigUInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||X(e,this.length-8);const i=t+256*this[++e]+65536*this[++e]+this[++e]*2**24,r=this[++e]+256*this[++e]+65536*this[++e]+n*2**24;return BigInt(i)+(BigInt(r)<<BigInt(32))})),d.prototype.readBigUInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||X(e,this.length-8);const i=t*2**24+65536*this[++e]+256*this[++e]+this[++e],r=this[++e]*2**24+65536*this[++e]+256*this[++e]+n;return(BigInt(i)<<BigInt(32))+BigInt(r)})),d.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=this[e],r=1,o=0;for(;++o<t&&(r*=256);)i+=this[e+o]*r;return r*=128,i>=r&&(i-=Math.pow(2,8*t)),i},d.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||P(e,t,this.length);let i=t,r=1,o=this[e+--i];for(;i>0&&(r*=256);)o+=this[e+--i]*r;return r*=128,o>=r&&(o-=Math.pow(2,8*t)),o},d.prototype.readInt8=function(e,t){return e>>>=0,t||P(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},d.prototype.readInt16LE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt16BE=function(e,t){e>>>=0,t||P(e,2,this.length);const n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},d.prototype.readInt32LE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},d.prototype.readInt32BE=function(e,t){return e>>>=0,t||P(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},d.prototype.readBigInt64LE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||X(e,this.length-8);const i=this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24);return(BigInt(i)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*2**24)})),d.prototype.readBigInt64BE=te((function(e){V(e>>>=0,"offset");const t=this[e],n=this[e+7];void 0!==t&&void 0!==n||X(e,this.length-8);const i=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(this[++e]*2**24+65536*this[++e]+256*this[++e]+n)})),d.prototype.readFloatLE=function(e,t){return e>>>=0,t||P(e,4,this.length),s.read(this,e,!0,23,4)},d.prototype.readFloatBE=function(e,t){return e>>>=0,t||P(e,4,this.length),s.read(this,e,!1,23,4)},d.prototype.readDoubleLE=function(e,t){return e>>>=0,t||P(e,8,this.length),s.read(this,e,!0,52,8)},d.prototype.readDoubleBE=function(e,t){return e>>>=0,t||P(e,8,this.length),s.read(this,e,!1,52,8)},d.prototype.writeUintLE=d.prototype.writeUIntLE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=1,o=0;for(this[t]=255&e;++o<n&&(r*=256);)this[t+o]=e/r&255;return t+n},d.prototype.writeUintBE=d.prototype.writeUIntBE=function(e,t,n,i){if(e=+e,t>>>=0,n>>>=0,!i){D(this,e,t,n,Math.pow(2,8*n)-1,0)}let r=n-1,o=1;for(this[t+r]=255&e;--r>=0&&(o*=256);)this[t+r]=e/o&255;return t+n},d.prototype.writeUint8=d.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,255,0),this[t]=255&e,t+1},d.prototype.writeUint16LE=d.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeUint16BE=d.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeUint32LE=d.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},d.prototype.writeUint32BE=d.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigUInt64LE=te((function(e,t=0){return z(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeBigUInt64BE=te((function(e,t=0){return B(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),d.prototype.writeIntLE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}let r=0,o=1,a=0;for(this[t]=255&e;++r<n&&(o*=256);)e<0&&0===a&&0!==this[t+r-1]&&(a=1),this[t+r]=(e/o>>0)-a&255;return t+n},d.prototype.writeIntBE=function(e,t,n,i){if(e=+e,t>>>=0,!i){const i=Math.pow(2,8*n-1);D(this,e,t,n,i-1,-i)}let r=n-1,o=1,a=0;for(this[t+r]=255&e;--r>=0&&(o*=256);)e<0&&0===a&&0!==this[t+r+1]&&(a=1),this[t+r]=(e/o>>0)-a&255;return t+n},d.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},d.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},d.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},d.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},d.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||D(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},d.prototype.writeBigInt64LE=te((function(e,t=0){return z(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeBigInt64BE=te((function(e,t=0){return B(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),d.prototype.writeFloatLE=function(e,t,n){return j(this,e,t,!0,n)},d.prototype.writeFloatBE=function(e,t,n){return j(this,e,t,!1,n)},d.prototype.writeDoubleLE=function(e,t,n){return F(this,e,t,!0,n)},d.prototype.writeDoubleBE=function(e,t,n){return F(this,e,t,!1,n)},d.prototype.copy=function(e,t,n,i){if(!d.isBuffer(e))throw new TypeError("argument should be a Buffer");if(n||(n=0),i||0===i||(i=this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-t+n);const r=i-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),r},d.prototype.fill=function(e,t,n,i){if("string"==typeof e){if("string"==typeof t?(i=t,t=0,n=this.length):"string"==typeof n&&(i=n,n=this.length),void 0!==i&&"string"!=typeof i)throw new TypeError("encoding must be a string");if("string"==typeof i&&!d.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(1===e.length){const t=e.charCodeAt(0);("utf8"===i&&t<128||"latin1"===i)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw new RangeError("Out of range index");if(n<=t)return this;let r;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(r=t;r<n;++r)this[r]=e;else{const o=d.isBuffer(e)?e:d.from(e,i),a=o.length;if(0===a)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(r=0;r<n-t;++r)this[r+t]=o[r%a]}return this};const W={};function $(e,t,n){W[e]=class extends n{get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}}}function H(e){let t="",n=e.length;const i="-"===e[0]?1:0;for(;n>=i+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function q(e,t,n,i,r,o){if(e>n||e<t){const i="bigint"==typeof t?"n":"";let r;throw r=o>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${8*(o+1)}${i}`:`>= -(2${i} ** ${8*(o+1)-1}${i}) and < 2 ** ${8*(o+1)-1}${i}`:`>= ${t}${i} and <= ${n}${i}`,new W.ERR_OUT_OF_RANGE("value",r,e)}!function(e,t,n){V(t,"offset"),void 0!==e[t]&&void 0!==e[t+n]||X(t,e.length-(n+1))}(i,r,o)}function V(e,t){if("number"!=typeof e)throw new W.ERR_INVALID_ARG_TYPE(t,"number",e)}function X(e,t,n){if(Math.floor(e)!==e)throw V(e,n),new W.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new W.ERR_BUFFER_OUT_OF_BOUNDS;throw new W.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(e,t,n){let i=`The value of "${e}" is out of range.`,r=n;return Number.isInteger(n)&&Math.abs(n)>2**32?r=H(String(n)):"bigint"==typeof n&&(r=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(r=H(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i}),RangeError);const K=/[^+/0-9A-Za-z-_]/g;function G(e,t){let n;t=t||1/0;const i=e.length;let r=null;const o=[];for(let a=0;a<i;++a){if(n=e.charCodeAt(a),n>55295&&n<57344){if(!r){if(n>56319){(t-=3)>-1&&o.push(239,191,189);continue}if(a+1===i){(t-=3)>-1&&o.push(239,191,189);continue}r=n;continue}if(n<56320){(t-=3)>-1&&o.push(239,191,189),r=n;continue}n=65536+(r-55296<<10|n-56320)}else r&&(t-=3)>-1&&o.push(239,191,189);if(r=null,n<128){if((t-=1)<0)break;o.push(n)}else if(n<2048){if((t-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function J(e){return a.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(K,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function Y(e,t,n,i){let r;for(r=0;r<i&&!(r+n>=t.length||r>=e.length);++r)t[r+n]=e[r];return r}function Q(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function Z(e){return e!=e}const ee=function(){const e="0123456789abcdef",t=new Array(256);for(let n=0;n<16;++n){const i=16*n;for(let r=0;r<16;++r)t[i+r]=e[n]+e[r]}return t}();function te(e){return"undefined"==typeof BigInt?ne:e}function ne(){throw new Error("BigInt not supported")}})),o.register("5d11t",(function(t,n){var i,r;e(t.exports,"toByteArray",(function(){return i}),(function(e){return i=e})),e(t.exports,"fromByteArray",(function(){return r}),(function(e){return r=e})),i=function(e){var t,n,i=d(e),r=i[0],o=i[1],c=new s(function(e,t,n){return 3*(t+n)/4-n}(0,r,o)),l=0,u=o>0?r-4:r;for(n=0;n<u;n+=4)t=a[e.charCodeAt(n)]<<18|a[e.charCodeAt(n+1)]<<12|a[e.charCodeAt(n+2)]<<6|a[e.charCodeAt(n+3)],c[l++]=t>>16&255,c[l++]=t>>8&255,c[l++]=255&t;2===o&&(t=a[e.charCodeAt(n)]<<2|a[e.charCodeAt(n+1)]>>4,c[l++]=255&t);1===o&&(t=a[e.charCodeAt(n)]<<10|a[e.charCodeAt(n+1)]<<4|a[e.charCodeAt(n+2)]>>2,c[l++]=t>>8&255,c[l++]=255&t);return c},r=function(e){for(var t,n=e.length,i=n%3,r=[],a=16383,s=0,c=n-i;s<c;s+=a)r.push(f(e,s,s+a>c?c:s+a));1===i?(t=e[n-1],r.push(o[t>>2]+o[t<<4&63]+"==")):2===i&&(t=(e[n-2]<<8)+e[n-1],r.push(o[t>>10]+o[t>>4&63]+o[t<<2&63]+"="));return r.join("")};for(var o=[],a=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,u=c.length;l<u;++l)o[l]=c[l],a[c.charCodeAt(l)]=l;function d(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function f(e,t,n){for(var i,r,a=[],s=t;s<n;s+=3)i=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),a.push(o[(r=i)>>18&63]+o[r>>12&63]+o[r>>6&63]+o[63&r]);return a.join("")}a["-".charCodeAt(0)]=62,a["_".charCodeAt(0)]=63})),o.register("7rddL",(function(t,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var i,r;e(t.exports,"read",(function(){return i}),(function(e){return i=e})),e(t.exports,"write",(function(){return r}),(function(e){return r=e})),i=function(e,t,n,i,r){var o,a,s=8*r-i-1,c=(1<<s)-1,l=c>>1,u=-7,d=n?r-1:0,f=n?-1:1,p=e[t+d];for(d+=f,o=p&(1<<-u)-1,p>>=-u,u+=s;u>0;o=256*o+e[t+d],d+=f,u-=8);for(a=o&(1<<-u)-1,o>>=-u,u+=i;u>0;a=256*a+e[t+d],d+=f,u-=8);if(0===o)o=1-l;else{if(o===c)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,i),o-=l}return(p?-1:1)*a*Math.pow(2,o-i)},r=function(e,t,n,i,r,o){var a,s,c,l=8*o-r-1,u=(1<<l)-1,d=u>>1,f=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:o-1,h=i?1:-1,m=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(c=Math.pow(2,-a))<1&&(a--,c*=2),(t+=a+d>=1?f/c:f*Math.pow(2,1-d))*c>=2&&(a++,c/=2),a+d>=u?(s=0,a=u):a+d>=1?(s=(t*c-1)*Math.pow(2,r),a+=d):(s=t*Math.pow(2,d-1)*Math.pow(2,r),a=0));r>=8;e[n+p]=255&s,p+=h,s/=256,r-=8);for(a=a<<r|s,l+=r;l>0;e[n+p]=255&a,p+=h,a/=256,l-=8);e[n+p-h]|=128*m}})),o.register("btSY7",(function(e,t){"use strict";var n=o("c4C4W"),i=o("j97bH"),r=o("jFG8L"),a=o("6d5Pb"),s=o("gYMA1"),c=o("1nUSP"),l=o("9jFfm"),u=o("gWbUy"),d=o("5TB86"),f=o("dW1zJ"),p=o("4ULKu");e.exports=function(e){return new Promise((function(t,o){var h,m=e.data,g=e.headers,y=e.responseType;function v(){e.cancelToken&&e.cancelToken.unsubscribe(h),e.signal&&e.signal.removeEventListener("abort",h)}n.isFormData(m)&&n.isStandardBrowserEnv()&&delete g["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var w=e.auth.username||"",x=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(w+":"+x)}var k=s(e.baseURL,e.url);function _(){if(b){var n="getAllResponseHeaders"in b?c(b.getAllResponseHeaders()):null,r={data:y&&"text"!==y&&"json"!==y?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};i((function(e){t(e),v()}),(function(e){o(e),v()}),r),b=null}}if(b.open(e.method.toUpperCase(),a(k,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=_:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(_)},b.onabort=function(){b&&(o(new d("Request aborted",d.ECONNABORTED,e,b)),b=null)},b.onerror=function(){o(new d("Network Error",d.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||u;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),o(new d(t,n.clarifyTimeoutError?d.ETIMEDOUT:d.ECONNABORTED,e,b)),b=null},n.isStandardBrowserEnv()){var I=(e.withCredentials||l(k))&&e.xsrfCookieName?r.read(e.xsrfCookieName):void 0;I&&(g[e.xsrfHeaderName]=I)}"setRequestHeader"in b&&n.forEach(g,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete g[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),y&&"json"!==y&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(h=function(e){b&&(o(!e||e&&e.type?new f:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(h),e.signal&&(e.signal.aborted?h():e.signal.addEventListener("abort",h))),m||(m=null);var E=p(k);E&&-1===["http","https","file"].indexOf(E)?o(new d("Unsupported protocol "+E+":",d.ERR_BAD_REQUEST,e)):b.send(m)}))}})),o.register("j97bH",(function(e,t){"use strict";var n=o("5TB86");e.exports=function(e,t,i){var r=i.config.validateStatus;i.status&&r&&!r(i.status)?t(new n("Request failed with status code "+i.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)):e(i)}})),o.register("jFG8L",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,i,r,o,a){var s=[];s.push(e+"="+encodeURIComponent(t)),n.isNumber(i)&&s.push("expires="+new Date(i).toGMTString()),n.isString(r)&&s.push("path="+r),n.isString(o)&&s.push("domain="+o),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),o.register("gYMA1",(function(e,t){"use strict";var n=o("7xjuH"),i=o("ftRZn");e.exports=function(e,t){return e&&!n(t)?i(e,t):t}})),o.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),o.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),o.register("1nUSP",(function(e,t){"use strict";var n=o("c4C4W"),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,a={};return e?(n.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t){if(a[t]&&i.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([r]):a[t]?a[t]+", "+r:r}})),a):a}})),o.register("9jFfm",(function(e,t){"use strict";var n=o("c4C4W");e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");function r(e){var n=e;return t&&(i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}return e=r(window.location.href),function(t){var i=n.isString(t)?r(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0}})),o.register("dW1zJ",(function(e,t){"use strict";var n=o("5TB86");function i(e){n.call(this,null==e?"canceled":e,n.ERR_CANCELED),this.name="CanceledError"}o("c4C4W").inherits(i,n,{__CANCEL__:!0}),e.exports=i})),o.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),o.register("beknR",(function(e,t){e.exports=null})),o.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),o.register("knWMA",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e,t){t=t||{};var i={};function r(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function o(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:r(void 0,e[i]):r(e[i],t[i])}function a(e){if(!n.isUndefined(t[e]))return r(void 0,t[e])}function s(i){return n.isUndefined(t[i])?n.isUndefined(e[i])?void 0:r(void 0,e[i]):r(void 0,t[i])}function c(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var l={url:a,method:a,data:a,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:c};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=l[e]||o,r=t(e);n.isUndefined(r)&&t!==c||(i[e]=r)})),i}})),o.register("9SeBc",(function(e,t){"use strict";var n=o("kLR29").version,i=o("5TB86"),r={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var a={};r.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(n,r,s){if(!1===e)throw new i(o(r," has been removed"+(t?" in "+t:"")),i.ERR_DEPRECATED);return t&&!a[r]&&(a[r]=!0,console.warn(o(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,s)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);for(var r=Object.keys(e),o=r.length;o-- >0;){var a=r[o],s=t[a];if(s){var c=e[a],l=void 0===c||s(c,a,e);if(!0!==l)throw new i("option "+a+" must be "+l,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+a,i.ERR_BAD_OPTION)}},validators:r}})),o.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),o.register("77MZz",(function(e,t){"use strict";var n=o("dW1zJ");function i(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var i=this;this.promise.then((function(e){if(i._listeners){var t,n=i._listeners.length;for(t=0;t<n;t++)i._listeners[t](e);i._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){i.subscribe(e),t=e})).then(e);return n.cancel=function(){i.unsubscribe(t)},n},e((function(e){i.reason||(i.reason=new n(e),t(i.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},i.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},i.source=function(){var e;return{token:new i((function(t){e=t})),cancel:e}},e.exports=i})),o.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),o.register("kv87N",(function(e,t){"use strict";var n=o("c4C4W");e.exports=function(e){return n.isObject(e)&&!0===e.isAxiosError}})),o("3fu6U");var a={};function s(){document.body.classList.remove("show-modal")}function c(e){"Escape"===e.code&&s()}!function(e,t){if(e){var n=function(){t(e.lazySizes),e.removeEventListener("lazyunveilread",n,!0)};t=t.bind(null,e,e.document),a?t(o("3fu6U")):"function"==typeof define&&define.amd?define(["lazysizes"],t):e.lazySizes?n():e.addEventListener("lazyunveilread",n,!0)}}("undefined"!=typeof window?window:0,(function(e,t,n){"use strict";if(e.addEventListener){var i=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,r=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,o=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,a=/^picture$/i,s=n.cfg,c={getParent:function(t,n){var i=t,r=t.parentNode;return n&&"prev"!=n||!r||!a.test(r.nodeName||"")||(r=r.parentNode),"self"!=n&&(i="prev"==n?t.previousElementSibling:n&&(r.closest||e.jQuery)&&(r.closest?r.closest(n):jQuery(r).closest(n)[0])||r),i},getFit:function(e){var t,n,i=getComputedStyle(e,null)||{},a=i.content||i.fontFamily,s={fit:e._lazysizesParentFit||e.getAttribute("data-parent-fit")};return!s.fit&&a&&(t=a.match(r))&&(s.fit=t[1]),s.fit?(!(n=e._lazysizesParentContainer||e.getAttribute("data-parent-container"))&&a&&(t=a.match(o))&&(n=t[1]),s.parent=c.getParent(e,n)):s.fit=i.objectFit,s},getImageRatio:function(t){var n,r,o,c,l,u,d,f=t.parentNode,p=f&&a.test(f.nodeName||"")?f.querySelectorAll("source, img"):[t];for(n=0;n<p.length;n++)if(r=(t=p[n]).getAttribute(s.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",o=t._lsMedia||t.getAttribute("media"),o=s.customMedia[t.getAttribute("data-media")||o]||o,r&&(!o||(e.matchMedia&&matchMedia(o)||{}).matches)){(c=parseFloat(t.getAttribute("data-aspectratio")))||((l=r.match(i))?"w"==l[2]?(u=l[1],d=l[3]):(u=l[3],d=l[1]):(u=t.getAttribute("width"),d=t.getAttribute("height")),c=u/d);break}return c},calculateSize:function(e,t){var n,i,r,o=this.getFit(e),a=o.fit,s=o.parent;return"width"==a||("contain"==a||"cover"==a)&&(i=this.getImageRatio(e))?(s?t=s.clientWidth:s=e,r=t,"width"==a?r=t:(n=t/s.clientHeight)&&("cover"==a&&n<i||"contain"==a&&n>i)&&(r=t*(i/n)),r):t}};n.parentFit=c,t.addEventListener("lazybeforesizes",(function(e){if(!e.defaultPrevented&&e.detail.instance==n){var t=e.target;e.detail.width=c.calculateSize(t,e.detail.width)}}))}}));const l=document.querySelector(".overlay"),u=document.querySelector(".modal_movie_card");function d(){u.innerHTML="",l.classList.add("is-hidden")}function f(e){e.target===e.currentTarget&&(d(),s())}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h;h=o("ke5Oc");class m{incrementPage(){this.page+=1}resetPage(){this.page=1}get search(){return this.searchQuary}set search(e){this.searchQuary=e}constructor(){p(this,"fetchSearchMovie",(async(e,n)=>{try{return(await t(h).get(`${this.URL}search/movie?api_key=${this.API_KEY}&query=${e}&language=en-US&page=1&include_adult=false&page=${n}`)).data}catch(e){console.log(e)}})),p(this,"fetchTrendDayMovie",(async()=>{try{const e=await t(h).get(`${this.URL}trending/all/${this.trendDay}?api_key=${this.API_KEY}&page=${this.page}`);return this.incrementPage(),e.data.results}catch(e){console.log(e)}})),p(this,"fetchTrendWeekMovie",(async e=>{try{return(await t(h).get(`${this.URL}trending/all/${this.trendWeek}?api_key=${this.API_KEY}&page=${e}`)).data}catch(e){console.log(e)}})),p(this,"fetchMovieForId",(async()=>{try{return(await t(h).get(`${this.URL}movie/${this.movieId}?api_key=${this.API_KEY}&language=en-US`)).data}catch(e){console.log(e)}})),p(this,"fetchMoviesForGenres",(async(e,n)=>{try{return(await t(h).get(`${this.URL}discover/movie?with_genres=${e}&page=${n}&with_original_language=en&api_key=${this.API_KEY}`)).data}catch(e){console.log(e)}})),p(this,"fetchGenresDescription",(async()=>{try{return(await t(h).get(`${this.URL}genre/movie/list?api_key=${this.API_KEY}`)).data.genres}catch(e){console.log(e)}})),this.API_KEY="5b00cd10e05c354cfbdbc23aa24fc7b8",this.URL="https://api.themoviedb.org/3/",this.searchQuary="",this.page=1,this.trendDay="day",this.trendWeek="week",this.movieId=null}}function g(e,t){const n=e.reduce(((e,{id:t,name:n})=>e+`<li class="side-menu__item" data-id="${t}">\n                 <a class="sidebar-link" href="#">\n                     <svg viewBox="0 0 24 24" fill="currentColor">\n                         <path fill-rule="evenodd" clip-rule="evenodd"\n                             d="M16.158 8.233a4.207 4.207 0 01-4.209 4.234 4.207 4.207 0 01-4.21-4.234A4.206 4.206 0 0111.95 4a4.206 4.206 0 014.21 4.233zM11.95 20c-3.431 0-6.36-.544-6.36-2.72 0-2.177 2.91-2.74 6.36-2.74 3.431 0 6.361.544 6.361 2.72S15.399 20 11.949 20zm6.008-11.69a5.765 5.765 0 01-.984 3.24.158.158 0 00.107.245 3.4 3.4 0 00.483.046c1.643.044 3.118-1.02 3.525-2.621.604-2.379-1.168-4.514-3.425-4.514-.245 0-.48.026-.708.073-.031.007-.064.021-.082.05-.022.034-.006.08.016.11a5.807 5.807 0 011.068 3.37zm2.721 5.203c1.104.217 1.83.66 2.131 1.304a1.923 1.923 0 010 1.67c-.46.998-1.944 1.319-2.52 1.402-.12.018-.215-.086-.203-.206.295-2.767-2.048-4.08-2.654-4.381-.026-.014-.032-.034-.03-.047.003-.009.013-.023.033-.026 1.312-.024 2.722.156 3.243.284zM6.438 11.84c.164-.004.325-.019.483-.046a.158.158 0 00.106-.245 5.765 5.765 0 01-.984-3.24c0-1.25.39-2.416 1.068-3.372.022-.03.037-.075.016-.11-.017-.027-.051-.042-.082-.05a3.52 3.52 0 00-.71-.072c-2.255 0-4.027 2.135-3.423 4.514.407 1.6 1.882 2.664 3.525 2.621zm.159 1.414c.003.013-.003.033-.028.047-.607.302-2.95 1.614-2.656 4.38.013.121-.082.224-.201.207-.577-.083-2.06-.404-2.52-1.402a1.917 1.917 0 010-1.67c.3-.644 1.026-1.087 2.13-1.305.522-.127 1.93-.307 3.244-.283.02.003.03.017.03.026z" />\n                     </svg>\n                     ${n}\n                 </a>\n            </li>`),"");t.insertAdjacentHTML("beforeend",n)}const y=document.querySelector('[data-list ="render"]'),v=new m;function b(e,t){return t.filter((t=>{if(e.includes(t.id))return t.name})).map((e=>e.name)).slice(0,2).join(", ")}const w=new m;function b(e,t){return t.filter((t=>{if(e.includes(t.id))return t.name})).map((e=>e.name)).slice(0,2).join(", ")}async function x(e,t){const n=await w.fetchGenresDescription(),i=e.reduce(((e,t)=>{const{id:i,title:r,release_date:o,poster_path:a,name:s,vote_average:c,vote_count:l}=t,u=o?o.slice(0,4):"&#128512",d="https://image.tmdb.org/t/p";return e+`<li class="video anim" id="${i}"style="--delay: .4s">\n      <div class="video">\n        <span class="video-selection">...</span>\n        <div class="video-wrapper">\n            <img class="video-poster lazyload" src="${d}/w342${a}"\n            srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n            data-srcset="${d}/w500${a} 500w,            \n            ${d}/w342${a} 342w,\n            ${d}/w780${a} 780w,\n            ${d}/original${a} 900w,"\n            data-sizes="auto"            \n\n            alt="${r}" />\n\n            <div class="rating__wrapper video-rating">\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"\n                    stroke-linejoin="round" class="feather feather-check">\n                    <path d="M20 6L9 17l-5-5" />\n                </svg>\n                <p class="rating-value">${c?c.toFixed(1):"&#128512"}</p>\n            </div>\n        </div>\n        <div class="video-description">\n          <p class="video-ganre">${b(t.genre_ids,n)}</p>\n          <p class="video-name">${r||s}</p>\n          <p class="video-view">${l} views<span class="seperate video-seperate"></span>${u}</p>\n        </div>\n      </div>\n    </li>`}),"");t.insertAdjacentHTML("beforeend",i)}var k,_={};
/*!
 * TOAST UI Pagination
 * @version 3.4.1
 * @author NHN FE Development Team <dl_javascript@nhn.com>
 * @license MIT
 */function I({page:e,itemsPerPage:n,totalItems:i}){const r=document.querySelector("#pagination"),o={totalItems:i,itemsPerPage:n,visiblePages:5,page:e,centerAlign:!0,usageStatistics:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn border">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected border">{{page}}</strong>',moveButton:'<a href="#" class="border tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}} border"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip border"><span class="tui-ico-ellip">...</span></a>'}};return new(t(_))(r,o)}function E(){SlickLoader.element.classList.contains("active")?SlickLoader.disable():SlickLoader.enable()}window,k=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="dist",n(n.s=10)}([function(e,t,n){"use strict";e.exports=function(e,t){var n,i,r,o,a=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])a.call(n,i)&&(e[i]=n[i]);return e}},function(e,t,n){"use strict";e.exports=function(e){return void 0===e}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Array}},function(e,t,n){"use strict";var i=n(2),r=n(17),o=n(6);e.exports=function(e,t,n){i(e)?r(e,t,n):o(e,t,n)}},function(e,t,n){"use strict";e.exports=function(e){return"string"==typeof e||e instanceof String}},function(e,t,n){"use strict";e.exports=function(e){return e instanceof Function}},function(e,t,n){"use strict";e.exports=function(e,t,n){var i;for(i in n=n||null,e)if(e.hasOwnProperty(i)&&!1===t.call(n,e[i],i,e))break}},function(e,t,n){"use strict";var i=n(18),r=n(0);e.exports=function(e,t){var n;return t||(t=e,e=null),n=t.init||function(){},e&&i(n,e),t.hasOwnProperty("static")&&(r(n,t.static),delete t.static),r(n.prototype,t),n}},function(e,t,n){"use strict";var i=n(2);e.exports=function(e,t,n){var r,o;if(n=n||0,!i(t))return-1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(t,e,n);for(o=t.length,r=n;n>=0&&r<o;r+=1)if(t[r]===e)return r;return-1}},function(e,t,n){"use strict";var i=n(29),r=n(30),o=n(5),a={capitalizeFirstLetter:function(e){return e.substring(0,1).toUpperCase()+e.substring(1,e.length)},isContained:function(e,t){return!!t&&(e===t||t.contains(e))},createElementByTemplate:function(e,t){var n=document.createElement("div"),r=o(e)?e(t):i(e,t);return n.innerHTML=r,n.firstChild},bind:function(e,t){var n,i=Array.prototype.slice;return e.bind?e.bind.apply(e,i.call(arguments,1)):(n=i.call(arguments,2),function(){return e.apply(t,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}};e.exports=a},function(e,t,n){"use strict";n(11),e.exports=n(12)},function(e,t,n){},function(e,t,n){"use strict";var i=n(13),r=n(7),o=n(0),a=n(1),s=n(20),c=n(9),l={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},u=r({init:function(e,t){this._options=o({},l,t),this._currentPage=0,this._view=new s(e,this._options,c.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&c.sendHostName()},_setCurrentPage:function(e){this._currentPage=e||this._options.page},_getLastPage:function(){var e=Math.ceil(this._options.totalItems/this._options.itemsPerPage);return e||1},_getPageIndex:function(e){var t;return this._options.centerAlign?(t=e-Math.floor(this._options.visiblePages/2),t=Math.max(t,1),t=Math.min(t,this._getLastPage()-this._options.visiblePages+1)):Math.ceil(e/this._options.visiblePages)},_getRelativePage:function(e){var t="prev"===e,n=this.getCurrentPage();return t?n-1:n+1},_getMorePageIndex:function(e){var t=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===e;return this._options.centerAlign?i?t-1:t+n:i?(t-1)*n:t*n+1},_convertToValidPage:function(e){var t=this._getLastPage();return e=Math.max(e,1),e=Math.min(e,t)},_paginate:function(e){var t=this._makeViewData(e||this._options.page);this._setCurrentPage(e),this._view.update(t)},_makeViewData:function(e){var t={},n=this._getLastPage(),i=this._getPageIndex(e),r=this._getPageIndex(n),o=this._getEdge(e);return t.leftPageNumber=o.left,t.rightPageNumber=o.right,t.prevMore=i>1,t.nextMore=i<r,t.page=e,t.currentPageIndex=e,t.lastPage=n,t.lastPageListIndex=n,t},_getEdge:function(e){var t,n,i,r=this._getLastPage(),o=this._options.visiblePages,a=this._getPageIndex(e);return this._options.centerAlign?(i=Math.floor(o/2),(n=(t=Math.max(e-i,1))+o-1)>r&&(t=Math.max(r-o+1,1),n=r)):(t=(a-1)*o+1,n=a*o,n=Math.min(n,r)),{left:t,right:n}},_onClickHandler:function(e,t){switch(e){case"first":t=1;break;case"prev":t=this._getRelativePage("prev");break;case"next":t=this._getRelativePage("next");break;case"prevMore":t=this._getMorePageIndex("prev");break;case"nextMore":t=this._getMorePageIndex("next");break;case"last":t=this._getLastPage();break;default:if(!t)return}this.movePageTo(t)},reset:function(e){a(e)&&(e=this._options.totalItems),this._options.totalItems=e,this._paginate(1)},movePageTo:function(e){e=this._convertToValidPage(e),this.invoke("beforeMove",{page:e})&&(this._paginate(e),this.fire("afterMove",{page:e}))},setTotalItems:function(e){this._options.totalItems=e},setItemsPerPage:function(e){this._options.itemsPerPage=e},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(u),e.exports=u},function(e,t,n){"use strict";var i=n(0),r=n(14),o=n(4),a=n(16),s=n(2),c=n(5),l=n(3),u=/\s+/g;function d(){this.events=null,this.contexts=null}d.mixin=function(e){i(e.prototype,d.prototype)},d.prototype._getHandlerItem=function(e,t){var n={handler:e};return t&&(n.context=t),n},d.prototype._safeEvent=function(e){var t,n=this.events;return n||(n=this.events={}),e&&((t=n[e])||(t=[],n[e]=t),n=t),n},d.prototype._safeContext=function(){var e=this.contexts;return e||(e=this.contexts=[]),e},d.prototype._indexOfContext=function(e){for(var t=this._safeContext(),n=0;t[n];){if(e===t[n][0])return n;n+=1}return-1},d.prototype._memorizeContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1?t[n][1]+=1:t.push([e,1]))},d.prototype._forgetContext=function(e){var t,n;r(e)&&(t=this._safeContext(),(n=this._indexOfContext(e))>-1&&(t[n][1]-=1,t[n][1]<=0&&t.splice(n,1)))},d.prototype._bindEvent=function(e,t,n){var i=this._safeEvent(e);this._memorizeContext(n),i.push(this._getHandlerItem(t,n))},d.prototype.on=function(e,t,n){var i=this;o(e)?(e=e.split(u),l(e,(function(e){i._bindEvent(e,t,n)}))):a(e)&&(n=t,l(e,(function(e,t){i.on(t,e,n)})))},d.prototype.once=function(e,t,n){var i=this;if(a(e))return n=t,void l(e,(function(e,t){i.once(t,e,n)}));this.on(e,(function r(){t.apply(n,arguments),i.off(e,r,n)}),n)},d.prototype._spliceMatches=function(e,t){var n,i=0;if(s(e))for(n=e.length;i<n;i+=1)!0===t(e[i])&&(e.splice(i,1),n-=1,i-=1)},d.prototype._matchHandler=function(e){var t=this;return function(n){var i=e===n.handler;return i&&t._forgetContext(n.context),i}},d.prototype._matchContext=function(e){var t=this;return function(n){var i=e===n.context;return i&&t._forgetContext(n.context),i}},d.prototype._matchHandlerAndContext=function(e,t){var n=this;return function(i){var r=e===i.handler,o=t===i.context,a=r&&o;return a&&n._forgetContext(i.context),a}},d.prototype._offByEventName=function(e,t){var n=this,i=c(t),r=n._matchHandler(t);e=e.split(u),l(e,(function(e){var t=n._safeEvent(e);i?n._spliceMatches(t,r):(l(t,(function(e){n._forgetContext(e.context)})),n.events[e]=[])}))},d.prototype._offByHandler=function(e){var t=this,n=this._matchHandler(e);l(this._safeEvent(),(function(e){t._spliceMatches(e,n)}))},d.prototype._offByObject=function(e,t){var n,i=this;this._indexOfContext(e)<0?l(e,(function(e,t){i.off(t,e)})):o(t)?(n=this._matchContext(e),i._spliceMatches(this._safeEvent(t),n)):c(t)?(n=this._matchHandlerAndContext(t,e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)}))):(n=this._matchContext(e),l(this._safeEvent(),(function(e){i._spliceMatches(e,n)})))},d.prototype.off=function(e,t){o(e)?this._offByEventName(e,t):arguments.length?c(e)?this._offByHandler(e):a(e)&&this._offByObject(e,t):(this.events={},this.contexts=[])},d.prototype.fire=function(e){this.invoke.apply(this,arguments)},d.prototype.invoke=function(e){var t,n,i,r;if(!this.hasListener(e))return!0;for(t=this._safeEvent(e),n=Array.prototype.slice.call(arguments,1),i=0;t[i];){if(!1===(r=t[i]).handler.apply(r.context,n))return!1;i+=1}return!0},d.prototype.hasListener=function(e){return this.getListenerLength(e)>0},d.prototype.getListenerLength=function(e){return this._safeEvent(e).length},e.exports=d},function(e,t,n){"use strict";var i=n(1),r=n(15);e.exports=function(e){return!i(e)&&!r(e)}},function(e,t,n){"use strict";e.exports=function(e){return null===e}},function(e,t,n){"use strict";e.exports=function(e){return e===Object(e)}},function(e,t,n){"use strict";e.exports=function(e,t,n){var i=0,r=e.length;for(n=n||null;i<r&&!1!==t.call(n,e[i],i,e);i+=1);}},function(e,t,n){"use strict";var i=n(19);e.exports=function(e,t){var n=i(t.prototype);n.constructor=e,e.prototype=n}},function(e,t,n){"use strict";e.exports=function(e){function t(){}return t.prototype=e,new t}},function(e,t,n){"use strict";var i=n(3),r=n(7),o=n(21),a=n(22),s=n(24),c=n(25),l=n(0),u=n(4),d=n(28),f=n(9),p={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},h=["first","prev","next","last"],m=["prev","next"],g=r({init:function(e,t,n){this._containerElement=null,this._firstItemClassName=t.firstItemClassName,this._lastItemClassName=t.lastItemClassName,this._template=l({},p,t.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(e),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(e){if(u(e)?e=document.getElementById(e)||document.querySelector(e):e.jquery&&(e=e[0]),!d(e))throw new Error("The container element is invalid.");this._containerElement=e},_setMoveButtons:function(){i(h,(function(e){this._buttons[e]=f.createElementByTemplate(this._template.moveButton,{type:e})}),this)},_setDisabledMoveButtons:function(){i(h,(function(e){var t="disabled"+f.capitalizeFirstLetter(e);this._buttons[t]=f.createElementByTemplate(this._template.disabledMoveButton,{type:e})}),this)},_setMoreButtons:function(){i(m,(function(e){var t=e+"More";this._buttons[t]=f.createElementByTemplate(this._template.moreButton,{type:e})}),this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(e){var t;t=e.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(t)},_appendPrevButton:function(e){var t;t=e.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(t)},_appendNextButton:function(e){var t;t=e.currentPageIndex<e.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(t)},_appendLastButton:function(e){var t;t=e.page<e.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(t)},_appendPrevMoreButton:function(e){var t;e.prevMore&&(t=this._buttons.prevMore,c(t,this._firstItemClassName),this._getContainerElement().appendChild(t))},_appendNextMoreButton:function(e){var t;e.nextMore&&(t=this._buttons.nextMore,c(t,this._lastItemClassName),this._getContainerElement().appendChild(t))},_appendPages:function(e){var t,n,i=e.leftPageNumber,r=e.rightPageNumber;for(n=i;n<=r;n+=1)n===e.page?t=f.createElementByTemplate(this._template.currentPage,{page:n}):(t=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(t)),n!==i||e.prevMore||c(t,this._firstItemClassName),n!==r||e.nextMore||c(t,this._lastItemClassName),this._getContainerElement().appendChild(t)},_attachClickEvent:function(e){var t=this._getContainerElement();a(t,"click",(function(t){var n,i,r=o(t);s(t),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),e(i,n)}),this)},_getButtonType:function(e){var t,n=this._buttons;return i(n,(function(n,i){return!f.isContained(e,n)||(t=i,!1)}),this),t},_getPageNumber:function(e){var t,n=this._findPageElement(e);return n&&(t=parseInt(n.innerText,10)),t},_findPageElement:function(e){for(var t,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(t=this._enabledPageElements[n],f.isContained(e,t))return t;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,(function(e,t){this._buttons[t]=e.cloneNode(!0)}),this),this._getContainerElement().innerHTML=""},update:function(e){this._empty(),this._appendFirstButton(e),this._appendPrevButton(e),this._appendPrevMoreButton(e),this._appendPages(e),this._appendNextMoreButton(e),this._appendNextButton(e),this._appendLastButton(e)}});e.exports=g},function(e,t,n){"use strict";e.exports=function(e){return e.target||e.srcElement}},function(e,t,n){"use strict";var i=n(4),r=n(3),o=n(23);function a(e,t,n,i){function a(t){n.call(i||e,t||window.event)}"addEventListener"in e?e.addEventListener(t,a):"attachEvent"in e&&e.attachEvent("on"+t,a),function(e,t,n,i){var a=o(e,t),s=!1;r(a,(function(e){return e.handler!==n||(s=!0,!1)})),s||a.push({handler:n,wrappedHandler:i})}(e,t,n,a)}e.exports=function(e,t,n,o){i(t)?r(t.split(/\s+/g),(function(t){a(e,t,n,o)})):r(t,(function(t,i){a(e,i,t,n)}))}},function(e,t,n){"use strict";var i="_feEventKey";e.exports=function(e,t){var n,r=e[i];return r||(r=e[i]={}),(n=r[t])||(n=r[t]=[]),n}},function(e,t,n){"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},function(e,t,n){"use strict";var i=n(3),r=n(8),o=n(26),a=n(27);e.exports=function(e){var t,n=Array.prototype.slice.call(arguments,1),s=e.classList,c=[];s?i(n,(function(t){e.classList.add(t)})):((t=o(e))&&(n=[].concat(t.split(/\s+/),n)),i(n,(function(e){r(e,c)<0&&c.push(e)})),a(e,c))}},function(e,t,n){"use strict";var i=n(1);e.exports=function(e){return e&&e.className?i(e.className.baseVal)?e.className:e.className.baseVal:""}},function(e,t,n){"use strict";var i=n(2),r=n(1);e.exports=function(e,t){t=(t=i(t)?t.join(" "):t).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(e.className.baseVal)?e.className=t:e.className.baseVal=t}},function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof HTMLElement?e&&(e instanceof HTMLElement||!!e.nodeType):!(!e||!e.nodeType)}},function(e,t,n){"use strict";var i=n(8),r=n(3),o=n(2),a=n(4),s=n(0),c=/{{\s?|\s?}}/g,l=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,u=/\[\s?|\s?\]/,d=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,p=/^["']\w+["']$/,h=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(e,t,n){var i=function(e,t){var n=[e],i=[],o=0,a=0;return r(t,(function(e,r){0===e.indexOf("if")?o+=1:"/if"===e?o-=1:o||0!==e.indexOf("elseif")&&"else"!==e||(n.push("else"===e?["true"]:e.split(" ").slice(1)),i.push(t.slice(a,r)),a=r+1)})),i.push(t.slice(a)),{exps:n,sourcesInsideIf:i}}(e,t),o=!1,a="";return r(i.exps,(function(e,t){return(o=w(e,n))&&(a=x(i.sourcesInsideIf[t],n)),!o})),a},each:function(e,t,n){var i=w(e,n),a=o(i)?"@index":"@key",c={},l="";return r(i,(function(e,i){c[a]=i,c["@this"]=e,s(n,c),l+=x(t.slice(),n)})),l},with:function(e,t,n){var r=i("as",e),o=e[r+1],a=w(e.slice(0,r),n),c={};return c[o]=a,x(t,s(n,c))||""}},y=3==="a".split(/a/).length?function(e,t){return e.split(t)}:function(e,t){var n,i,r=[],o=0;for(t.global||(t=new RegExp(t,"g")),n=t.exec(e);null!==n;)i=n.index,r.push(e.slice(o,i)),o=i+n[0].length,n=t.exec(e);return r.push(e.slice(o)),r};function v(e,t){var n,i=t[e];return"true"===e?i=!0:"false"===e?i=!1:p.test(e)?i=e.replace(h,""):l.test(e)?i=v((n=e.split(u))[0],t)[v(n[1],t)]:d.test(e)?i=v((n=e.split(f))[0],t)[n[1]]:m.test(e)&&(i=parseFloat(e)),i}function b(e,t,n){for(var i,r,o,s,c=g[e],l=1,u=2,d=t[u];l&&a(d);)0===d.indexOf(e)?l+=1:0===d.indexOf("/"+e)&&(l-=1,i=u),d=t[u+=2];if(l)throw Error(e+" needs {{/"+e+"}} expression.");return t[0]=c(t[0].split(" ").slice(1),(r=0,o=i,(s=t.splice(r+1,o-r)).pop(),s),n),t}function w(e,t){var n=v(e[0],t);return n instanceof Function?function(e,t,n){var i=[];return r(t,(function(e){i.push(v(e,n))})),e.apply(null,i)}(n,e.slice(1),t):n}function x(e,t){for(var n,i,r,o=1,s=e[o];a(s);)i=(n=s.split(" "))[0],g[i]?(r=b(i,e.splice(o,e.length-o),t),e=e.concat(r)):e[o]=w(n,t),s=e[o+=2];return e.join("")}e.exports=function(e,t){return x(y(e,c),t)}},function(e,t,n){"use strict";var i=n(1),r=n(31);e.exports=function(e,t){var n=location.hostname,o="TOAST UI "+e+" for "+n+": Statistics",a=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(a&&!function(e){return(new Date).getTime()-e>6048e5}(a)||(window.localStorage.setItem(o,(new Date).getTime()),setTimeout((function(){"interactive"!==document.readyState&&"complete"!==document.readyState||r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:t,cid:n,dp:n,dh:e,el:e,ec:"use"})}),1e3)))}},function(e,t,n){"use strict";var i=n(6);e.exports=function(e,t){var n=document.createElement("img"),r="";return i(t,(function(e,t){r+="&"+t+"="+e})),r=r.substring(1),n.src=e+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}])},_=k();const C=document.querySelector(".videos");document.querySelector(".footer").classList.add("visually-hidden");const S=new m;async function N(){E();const e=await S.fetchTrendWeekMovie(1);SlickLoader.disable();const{page:t,results:n,total_results:i}=e;x(e.results,C);const r=I({page:t,itemsPerPage:n.length,totalItems:i});document.querySelector(".footer").classList.remove("visually-hidden"),r.on("afterMove",(async({page:e})=>{E();const t=await S.fetchTrendWeekMovie(e);SlickLoader.disable(),C.innerHTML="",x(t.results,C)}))}const T=document.querySelector(".main-films"),A=document.querySelector(".main-header"),L=document.querySelector(".videos"),R=document.querySelector(".most-watched"),O=new m;const M=document.querySelector(".main-films"),P=document.querySelector(".main-header"),D=document.querySelector(".videos"),z=document.querySelector(".most-watched");document.querySelector(".footer").classList.add("visually-hidden");const B=new m;const U=document.querySelector(".main-films"),j=new m;const F=document.querySelector(".main-films"),W=document.querySelector(".main-header"),$=document.querySelector(".videos"),H=document.querySelector(".most-watched"),q=document.querySelector("#search-box"),V=new m;const X=localStorage.getItem("watched-movies"),K=(JSON.parse(X),localStorage.getItem("queued-movies")),G=(JSON.parse(K),new m);async function J(e){const t=e.reduce((async(e,t)=>{G.movieId=t;const n=await G.fetchMovieForId(),i=await G.fetchGenresDescription(),{id:r,title:o,release_date:a,poster_path:s,name:c,vote_average:l,vote_count:u}=n,d=a?a.slice(0,4):"&#128512",f="https://image.tmdb.org/t/p";return e+`<li class="video anim" id="${r}"style="--delay: .4s">\n      <div class="video">\n        <span class="video-selection">...</span>\n        <div class="video-wrapper">\n            <img class="video-poster lazyload" src="${f}/w342${s}"\n            srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n            data-srcset="${f}/w500${s} 500w,            \n            ${f}/w342${s} 342w,\n            ${f}/w780${s} 780w,\n            ${f}/original${s} 900w,"\n            data-sizes="auto"            \n\n            alt="${o}" />\n\n            <div class="rating__wrapper video-rating">\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"\n                    stroke-linejoin="round" class="feather feather-check">\n                    <path d="M20 6L9 17l-5-5" />\n                </svg>\n                <p class="rating-value">${l?l.toFixed(1):"&#128512"}</p>\n            </div>\n        </div>\n        <div class="video-description">\n          <p class="video-ganre">${b(n.genres,i)}</p>\n          <p class="video-name">${o||c}</p>\n          <p class="video-view">${u} views<span class="seperate video-seperate"></span>${d}</p>\n        </div>\n      </div>\n    </li>`}),"");return console.log(t),t}const Y=document.querySelector(".videos"),Q=document.querySelector(".main-films"),Z=(document.querySelector(".main-header"),document.querySelector(".most-watched"));new m;function ee(e){e.insertAdjacentHTML("afterbegin",'<div class="forms">\n        <div class="form-wrapper is-active">\n          <button type="button" class="switcher switcher-login">\n            Log in\n            <span class="underline"></span>\n          </button>\n          <form class="form form-login">\n            <fieldset>\n              <legend>Please, enter your email and password for login.</legend>\n              <div class="input-block">\n                <label for="login-email">E-mail</label>\n                <input id="login-email" type="email" name="email" required>\n              </div>\n              <div class="input-block">\n                <label for="login-password">Password</label>\n                <input id="login-password" type="password" name="password" required>\n              </div>\n            </fieldset>\n            <button type="submit" class="btn-login">Log in</button>\n          </form>\n        </div>\n        <div class="form-wrapper">\n          <button type="button" class="switcher switcher-signup">\n            Sign Up\n            <span class="underline"></span>\n          </button>\n          <form class="form form-signup">\n            <fieldset>\n              <legend>Please, enter your email, password and password confirmation for sign up.</legend>\n              <div class="input-block">\n                <label for="signup-email">E-mail</label>\n                <input id="signup-email" type="email" name="email" required>\n              </div>\n              <div class="input-block">\n                <label for="signup-password">Password</label>\n                <input id="signup-password" type="password" name="password" required>\n              </div>\n              <div class="input-block">\n                <label for="signup-password-confirm">Confirm password</label>\n                <input id="signup-password-confirm" type="password" name="password_repeat" required>\n              </div>\n            </fieldset>\n            <button type="submit" class="btn-signup">Continue</button>\n          </form>\n        </div>\n      </div>');const t=[...document.querySelectorAll(".switcher")];t.forEach((e=>{e.addEventListener("click",(function(){t.forEach((e=>e.parentElement.classList.remove("is-active"))),this.parentElement.classList.add("is-active")}))}))}var te,ne,ie={};te=void 0===n?"undefined"==typeof window?ie:window:n,ne=function(e){"use strict";if(void 0===e&&void 0===e.document)return!1;var t,n,i,r,o,a="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",s='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',c="Success",l="Failure",u="Warning",d="Info",f={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},p="Success",h="Failure",m="Warning",g="Info",y={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},v="Show",b="Ask",w="Prompt",x={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",_="Hourglass",I="Circle",E="Arrows",C="Dots",S="Pulse",N="Custom",T="Notiflix",A={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},L="Standard",R="Hourglass",O="Circle",M="Arrows",P="Dots",D="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+a)},U=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+a)},j=function(t){return t||(t="head"),null!==e.document[t]||(B('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},F=function(t,n){if(!j("head"))return!1;if(null!==t()&&!e.document.getElementById(n)){var i=e.document.createElement("style");i.id=n,i.innerHTML=t(),e.document.head.appendChild(i)}},W=function(){var e={},t=!1,n=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);for(var i=function(n){for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=t&&"[object Object]"===Object.prototype.toString.call(n[i])?W(e[i],n[i]):n[i])};n<arguments.length;n++)i(arguments[n]);return e},$=function(t){var n=e.document.createElement("div");return n.innerHTML=t,n.textContent||n.innerText||""},H=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},J=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},Y=0,Q=function(n,i,r,o){if(!j("body"))return!1;t||le.Notify.init({});var a=W(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof o&&!Array.isArray(o)){var p={};"object"==typeof r?p=r:"object"==typeof o&&(p=o),t=W(!0,t,p)}var h=t[n.toLocaleLowerCase("en")];Y++,"string"!=typeof i&&(i="Notiflix "+n),t.plainText&&(i=$(i)),!t.plainText&&i.length>t.messageMaxLength&&(t=W(!0,t,{closeButton:!0,messageMaxLength:150}),i='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),i.length>t.messageMaxLength&&(i=i.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(h.fontAwesomeIconColor=h.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(f.wrapID)||e.document.createElement("div");if(m.id=f.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(f.overlayID)||e.document.createElement("div");g.id=f.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=h.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(f.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(f.wrapID)||e.document.body.appendChild(m);var y=e.document.createElement("div");y.id=t.ID+"-"+Y,y.className=t.className+" "+h.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),y.style.fontSize=t.fontSize,y.style.color=h.textColor,y.style.background=h.background,y.style.borderRadius=t.borderRadius,y.style.pointerEvents="all",t.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.style.fontFamily='"'+t.fontFamily+'", '+s,t.cssAnimation&&(y.style.animationDuration=t.cssAnimationDuration+"ms");var v="";if(t.closeButton&&"function"!=typeof r&&(v='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+h.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)y.innerHTML='<i style="color:'+h.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+h.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"");else{var b="";n===c?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':n===l?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':n===u?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':n===d&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+h.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),y.innerHTML=b+'<span class="nx-message nx-with-icon">'+i+"</span>"+(t.closeButton?v:"")}else y.innerHTML='<span class="nx-message">'+i+"</span>"+(t.closeButton?v:"");if("left-bottom"===t.position||"right-bottom"===t.position){var w=e.document.getElementById(f.wrapID);w.insertBefore(y,w.firstChild)}else e.document.getElementById(f.wrapID).appendChild(y);var x=e.document.getElementById(y.id);if(x){var k,_,I=function(){x.classList.add("nx-remove");var t=e.document.getElementById(f.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},E=function(){if(x&&null!==x.parentNode&&x.parentNode.removeChild(x),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(f.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(_)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(y.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){E(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&x.addEventListener("click",(function(){"function"==typeof r&&r(),I();var e=setTimeout((function(){E(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var C=function(){k=setTimeout((function(){I()}),t.timeout),_=setTimeout((function(){E()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(x.addEventListener("mouseenter",(function(){x.classList.add("nx-paused"),clearTimeout(k),clearTimeout(_)})),x.addEventListener("mouseleave",(function(){x.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&0<Y)for(var S,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+Y+"])"),T=0;T<N.length;T++)null!==(S=N[T]).parentNode&&S.parentNode.removeChild(S);t=W(!0,t,a)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,i,r,o,a,c){if(!j("body"))return!1;n||le.Report.init({});var l={};if("object"==typeof a&&!Array.isArray(a)||"object"==typeof c&&!Array.isArray(c)){var u={};"object"==typeof a?u=a:"object"==typeof c&&(u=c),l=W(!0,n,{}),n=W(!0,n,u)}var d=n[t.toLocaleLowerCase("en")];"string"!=typeof i&&(i="Notiflix "+t),"string"!=typeof r&&(t===p?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===h?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof o&&(o="Okay"),n.plainText&&(i=$(i),r=$(r),o=$(o)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',o="Okay"),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',o="Okay"),o.length>n.buttonMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',o="Okay")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),o.length>n.buttonMaxLength&&(o=o.substring(0,n.buttonMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var f=e.document.createElement("div");f.id=y.ID,f.className=n.className,f.style.zIndex=n.zindex,f.style.borderRadius=n.borderRadius,f.style.fontFamily='"'+n.fontFamily+'", '+s,n.rtl&&(f.setAttribute("dir","rtl"),f.classList.add("nx-rtl-on")),f.style.display="flex",f.style.flexWrap="wrap",f.style.flexDirection="column",f.style.alignItems="center",f.style.justifyContent="center";var v="",b=!0===n.backOverlayClickToClose;n.backOverlay&&(v='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+(b?" nx-report-click-to-close":"")+'" style="background:'+(d.backOverlayColor||n.backOverlayColor)+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var w="";if(t===p?w=function(e,t){return e||(e="110px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):t===h?w=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):t===m?w=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor):t===g&&(w=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(n.svgSize,d.svgColor)),f.innerHTML=v+'<div class="'+n.className+"-content"+(n.cssAnimation?" nx-with-animation ":"")+" nx-"+n.cssAnimationStyle+'" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+'ms;"><div style="width:'+n.svgSize+"; height:"+n.svgSize+';" class="'+n.className+'-icon">'+w+'</div><h5 class="'+n.className+'-title" style="font-weight:500; font-size:'+n.titleFontSize+"; color:"+d.titleColor+';">'+i+'</h5><p class="'+n.className+'-message" style="font-size:'+n.messageFontSize+"; color:"+d.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+n.className+'-button" style="font-weight:500; font-size:'+n.buttonFontSize+"; background:"+d.buttonBackground+"; color:"+d.buttonColor+';">'+o+"</a></div>",!e.document.getElementById(f.id)){e.document.body.appendChild(f);var x=function(){var t=e.document.getElementById(f.id);t.classList.add("nx-remove");var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(i)}),n.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof a&&a(),x()})),v&&b&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){x()}))}n=W(!0,n,l)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ne=function(t,n,r,o,a,c,l,u,d){if(!j("body"))return!1;i||le.Confirm.init({});var f=W(!0,i,{});"object"!=typeof d||Array.isArray(d)||(i=W(!0,i,d)),"string"!=typeof n&&(n="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof a&&(a="Yes"),"string"!=typeof c&&(c="No"),"function"!=typeof l&&(l=void 0),"function"!=typeof u&&(u=void 0),i.plainText&&(n=$(n),r=$(r),a=$(a),c=$(c)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',a="Okay",c="..."),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',a="Okay",c="..."),(a.length||c.length)>i.buttonsMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',a="Okay",c="...")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),a.length>i.buttonsMaxLength&&(a=a.substring(0,i.buttonsMaxLength)+"..."),c.length>i.buttonsMaxLength&&(c=c.substring(0,i.buttonsMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=x.ID,p.className=i.className+(i.cssAnimation?" nx-with-animation nx-"+i.cssAnimationStyle:""),p.style.zIndex=i.zindex,p.style.padding=i.distance,i.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on"));var h="string"==typeof i.position?i.position.trim():"center";p.classList.add("nx-position-"+h),p.style.fontFamily='"'+i.fontFamily+'", '+s;var m="";i.backOverlay&&(m='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+'" style="background:'+i.backOverlayColor+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof l&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+i.cancelButtonColor+";background:"+i.cancelButtonBackground+";font-size:"+i.buttonsFontSize+';">'+c+"</a>");var y="",v=null,k=void 0;if(t===b||t===w){v=o||"";var _=t===b||200<v.length?Math.ceil(1.5*v.length):250;y='<div><input id="NXConfirmValidationInput" type="text" '+(t===w?'value="'+v+'"':"")+' maxlength="'+_+'" style="font-size:'+i.messageFontSize+";border-radius: "+i.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(p.innerHTML=m+'<div class="'+i.className+'-content" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+"ms; border-radius: "+i.borderRadius+';"><div class="'+i.className+'-head"><h5 style="color:'+i.titleColor+";font-size:"+i.titleFontSize+';">'+n+'</h5><div style="color:'+i.messageColor+";font-size:"+i.messageFontSize+';">'+r+y+'</div></div><div class="'+i.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof l?"":" nx-full")+'" style="color:'+i.okButtonColor+";background:"+i.okButtonBackground+";font-size:"+i.buttonsFontSize+';">'+a+"</a>"+g+"</div></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var I=e.document.getElementById(p.id),E=e.document.getElementById("NXConfirmButtonOk"),C=e.document.getElementById("NXConfirmValidationInput");C&&(C.focus(),C.setSelectionRange(0,(C.value||"").length),C.addEventListener("keyup",(function(e){var n=e.target.value;t===b&&n!==v?(e.preventDefault(),C.classList.add("nx-validation-failure"),C.classList.remove("nx-validation-success")):(t===b&&(C.classList.remove("nx-validation-failure"),C.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&E.dispatchEvent(new Event("click")))}))),E.addEventListener("click",(function(e){if(t===b&&v&&C){if((C.value||"").toString()!==v)return C.focus(),C.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;C.classList.remove("nx-validation-failure")}"function"==typeof l&&(t===w&&C&&(k=C.value||""),l(k)),I.classList.add("nx-remove");var n=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(n))}),i.cssAnimationDuration)})),"function"==typeof l&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof u&&(t===w&&C&&(k=C.value||""),u(k)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),i.cssAnimationDuration)}))}i=W(!0,i,f)},ie=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,n,i,o,a){if(!j("body"))return!1;r||le.Loading.init({});var c=W(!0,r,{});if("object"==typeof n&&!Array.isArray(n)||"object"==typeof i&&!Array.isArray(i)){var l={};"object"==typeof n?l=n:"object"==typeof i&&(l=i),r=W(!0,r,l)}var u="";if("string"==typeof n&&0<n.length&&(u=n),o){var d="";0<(u=u.length>r.messageMaxLength?$(u).toString().substring(0,r.messageMaxLength)+"...":$(u).toString()).length&&(d='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+u+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var f="";if(t===k)f=H(r.svgSize,r.svgColor);else if(t===_)f=q(r.svgSize,r.svgColor);else if(t===I)f=V(r.svgSize,r.svgColor);else if(t===E)f=X(r.svgSize,r.svgColor);else if(t===C)f=K(r.svgSize,r.svgColor);else if(t===S)f=G(r.svgSize,r.svgColor);else if(t===N&&null!==r.customSvgCode&&null===r.customSvgUrl)f=r.customSvgCode||"";else if(t===N&&null!==r.customSvgUrl&&null===r.customSvgCode)f='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===r.customSvgUrl||null===r.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;f=function(e,t,n){return e||(e="60px"),t||(t="#f8f8f8"),n||(n="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+n+'" stroke="'+n+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var p=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),h=e.innerWidth,m=p>=h?h-40+"px":p+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<u.length?" nx-with-message":"")+'">'+f+"</div>",y=e.document.createElement("div");y.id=A.ID,y.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),y.style.zIndex=r.zindex,y.style.background=r.backgroundColor,y.style.animationDuration=r.cssAnimationDuration+"ms",y.style.fontFamily='"'+r.fontFamily+'", '+s,y.style.display="flex",y.style.flexWrap="wrap",y.style.flexDirection="column",y.style.alignItems="center",y.style.justifyContent="center",r.rtl&&(y.setAttribute("dir","rtl"),y.classList.add("nx-rtl-on")),y.innerHTML=g+d,!e.document.getElementById(y.id)&&(e.document.body.appendChild(y),r.clickToClose)&&e.document.getElementById(y.id).addEventListener("click",(function(){y.classList.add("nx-remove");var e=setTimeout((function(){null!==y.parentNode&&(y.parentNode.removeChild(y),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(A.ID))var v=e.document.getElementById(A.ID),b=setTimeout((function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(b)}),a);r=W(!0,r,c)},oe=function(t){"string"!=typeof t&&(t="");var n=e.document.getElementById(A.ID);if(n)if(0<t.length){t=t.length>r.messageMaxLength?$(t).substring(0,r.messageMaxLength)+"...":$(t);var i=n.getElementsByTagName("p")[0];if(i)i.innerHTML=t;else{var o=e.document.createElement("p");o.id=r.messageID,o.className="nx-loading-message nx-loading-message-new",o.style.color=r.messageColor,o.style.fontSize=r.messageFontSize,o.innerHTML=t,n.appendChild(o)}}else B("Where is the new message?")},ae=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},se=0,ce=function(t,n,i,r,a,c){var l;if(Array.isArray(i)){if(1>i.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;l=i}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,i)){if(1>i.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;l=Array.prototype.slice.call(i)}else{if("string"!=typeof i||1>(i||"").length||1===(i||"").length&&("#"===(i||"")[0]||"."===(i||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var u=e.document.querySelectorAll(i);if(1>u.length)return B('You called the "Notiflix.Block..." function with "'+i+'" selector, but there is no such element(s) in the document.'),!1;l=u}o||le.Block.init({});var d=W(!0,o,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof a&&!Array.isArray(a)){var f={};"object"==typeof r?f=r:"object"==typeof a&&(f=a),o=W(!0,o,f)}var p="";"string"==typeof r&&0<r.length&&(p=r),o.cssAnimation||(o.cssAnimationDuration=0);var h=z.className;"string"==typeof o.className&&(h=o.className.trim());var m="number"==typeof o.querySelectorLimit?o.querySelectorLimit:200,g=(l||[]).length>=m?m:l.length,y="nx-block-temporary-position";if(t){for(var v,b=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],w=0;w<g;w++)if(v=l[w]){if(-1<b.indexOf(v.tagName.toLocaleLowerCase("en")))break;var x=v.querySelectorAll("[id^="+z.ID+"]");if(1>x.length){var k="";n&&(k=n===R?q(o.svgSize,o.svgColor):n===O?V(o.svgSize,o.svgColor):n===M?X(o.svgSize,o.svgColor):n===P?K(o.svgSize,o.svgColor):n===D?G(o.svgSize,o.svgColor):H(o.svgSize,o.svgColor));var _='<span class="'+h+'-icon" style="width:'+o.svgSize+";height:"+o.svgSize+';">'+k+"</span>",I="";0<p.length&&(p=p.length>o.messageMaxLength?$(p).substring(0,o.messageMaxLength)+"...":$(p),I='<span style="font-size:'+o.messageFontSize+";color:"+o.messageColor+';" class="'+h+'-message">'+p+"</span>"),se++;var E=e.document.createElement("div");E.id=z.ID+"-"+se,E.className=h+(o.cssAnimation?" nx-with-animation":""),E.style.position=o.position,E.style.zIndex=o.zindex,E.style.background=o.backgroundColor,E.style.animationDuration=o.cssAnimationDuration+"ms",E.style.fontFamily='"'+o.fontFamily+'", '+s,E.style.display="flex",E.style.flexWrap="wrap",E.style.flexDirection="column",E.style.alignItems="center",E.style.justifyContent="center",o.rtl&&(E.setAttribute("dir","rtl"),E.classList.add("nx-rtl-on")),E.innerHTML=_+I;var C,S=e.getComputedStyle(v).getPropertyValue("position"),N="string"==typeof S?S.toLocaleLowerCase("en"):"relative",T=Math.round(1.25*parseInt(o.svgSize))+40,A="";T>(v.offsetHeight||0)&&(A="min-height:"+T+"px;"),C=v.getAttribute("id")?"#"+v.getAttribute("id"):v.classList[0]?"."+v.classList[0]:(v.tagName||"").toLocaleLowerCase("en");var L="",F=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(F||0<A.length){if(!j("head"))return!1;F&&(L="position:relative!important;");var J='<style id="Style-'+z.ID+"-"+se+'">'+C+"."+y+"{"+L+A+"}</style>",Y=e.document.createRange();Y.selectNode(e.document.head);var Q=Y.createContextualFragment(J);e.document.head.appendChild(Q),v.classList.add(y)}v.appendChild(E)}}}else var Z=function(t){var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var i=t.getAttribute("id"),r=e.document.getElementById("Style-"+i);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(n)}),o.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,n=0;n<e.length;n++)(t=e[n])&&(t.classList.add("nx-remove"),Z(t));else U("string"==typeof i?'"Notiflix.Block.remove();" function called with "'+i+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+i+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(y),clearTimeout(t)}),o.cssAnimationDuration+300)},ne=setTimeout((function(){for(var e,t=0;t<g;t++)(e=l[t])&&(te(e),x=e.querySelectorAll("[id^="+z.ID+"]"),ee(x));clearTimeout(ne)}),c);o=W(!0,o,d)},le={Notify:{init:function(e){t=W(!0,f,e),F(J,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=W(!0,t,e)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,n){Q(c,e,t,n)},failure:function(e,t,n){Q(l,e,t,n)},warning:function(e,t,n){Q(u,e,t,n)},info:function(e,t,n){Q(d,e,t,n)}},Report:{init:function(e){n=W(!0,y,e),F(Z,"NotiflixReportInternalCSS")},merge:function(e){return n?void(n=W(!0,n,e)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,n,i,r){ee(p,e,t,n,i,r)},failure:function(e,t,n,i,r){ee(h,e,t,n,i,r)},warning:function(e,t,n,i,r){ee(m,e,t,n,i,r)},info:function(e,t,n,i,r){ee(g,e,t,n,i,r)}},Confirm:{init:function(e){i=W(!0,x,e),F(te,"NotiflixConfirmInternalCSS")},merge:function(e){return i?void(i=W(!0,i,e)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,n,i,r,o,a){ne(v,e,t,null,n,i,r,o,a)},ask:function(e,t,n,i,r,o,a,s){ne(b,e,t,n,i,r,o,a,s)},prompt:function(e,t,n,i,r,o,a,s){ne(w,e,t,n,i,r,o,a,s)}},Loading:{init:function(e){r=W(!0,A,e),F(ie,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=W(!0,r,e)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(k,e,t,!0,0)},hourglass:function(e,t){re(_,e,t,!0,0)},circle:function(e,t){re(I,e,t,!0,0)},arrows:function(e,t){re(E,e,t,!0,0)},dots:function(e,t){re(C,e,t,!0,0)},pulse:function(e,t){re(S,e,t,!0,0)},custom:function(e,t){re(N,e,t,!0,0)},notiflix:function(e,t){re(T,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(e){oe(e)}},Block:{init:function(e){o=W(!0,z,e),F(ae,"NotiflixBlockInternalCSS")},merge:function(e){return o?void(o=W(!0,o,e)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,n){ce(!0,L,e,t,n)},hourglass:function(e,t,n){ce(!0,R,e,t,n)},circle:function(e,t,n){ce(!0,O,e,t,n)},arrows:function(e,t,n){ce(!0,M,e,t,n)},dots:function(e,t,n){ce(!0,P,e,t,n)},pulse:function(e,t,n){ce(!0,D,e,t,n)},remove:function(e,t){"number"!=typeof t&&(t=0),ce(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?W(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return ne(te)})):"object"==typeof ie?ie=ne(te):te.Notiflix=ne(te);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const re=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},oe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],o=t+1<e.length,a=o?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=r>>2,u=(3&r)<<4|a>>4;let d=(15&a)<<2|c>>6,f=63&c;s||(f=64,o||(d=64)),i.push(n[l],n[u],n[d],n[f])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(re(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const o=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&o)}else if(r>239&&r<365){const o=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{const o=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&o)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],o=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==o||null==a||null==s)throw Error();const c=r<<2|o>>4;if(i.push(c),64!==a){const e=o<<4&240|a>>2;if(i.push(e),64!==s){const e=a<<6&192|s;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ae=function(e){return function(e){const t=re(e);return oe.encodeByteArray(t,!0)}(e).replace(/\./g,"")},se=function(e){try{return oe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ce{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function le(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ue(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function de(){const e=le();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function fe(){return"object"==typeof indexedDB}function pe(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function he(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class me extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ge.prototype.create)}}class ge{create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?function(e,t){return e.replace(ye,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new me(i,a,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ye=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function be(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],o=t[r];if(we(n)&&we(o)){if(!be(n,o))return!1}else if(n!==o)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function we(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function ke(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function _e(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){const n=new Ee(e,t);return n.subscribe.bind(n)}class Ee{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Ce),void 0===i.error&&(i.error=Ce),void 0===i.complete&&(i.complete=Ce);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function Ce(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ne(e){return e&&e._delegate?e._delegate:e}class Te{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ce;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===Ae?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Ae:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Re{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Le(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=[];var Me,Pe;(Pe=Me||(Me={}))[Pe.DEBUG=0]="DEBUG",Pe[Pe.VERBOSE=1]="VERBOSE",Pe[Pe.INFO=2]="INFO",Pe[Pe.WARN=3]="WARN",Pe[Pe.ERROR=4]="ERROR",Pe[Pe.SILENT=5]="SILENT";const De={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},ze=Me.INFO,Be={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},Ue=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Be[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class je{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?De[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}constructor(e){this.name=e,this._logLevel=ze,this._logHandler=Ue,this._userLogHandler=null,Oe.push(this)}}let Fe,We;const $e=new WeakMap,He=new WeakMap,qe=new WeakMap,Ve=new WeakMap,Xe=new WeakMap;let Ke={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return He.get(e);if("objectStoreNames"===t)return e.objectStoreNames||qe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ye(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Ge(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(We||(We=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Qe(this),t),Ye($e.get(this))}:function(...t){return Ye(e.apply(Qe(this),t))}:function(t,...n){const i=e.call(Qe(this),t,...n);return qe.set(i,t.sort?t.sort():[t]),Ye(i)}}function Je(e){return"function"==typeof e?Ge(e):(e instanceof IDBTransaction&&function(e){if(He.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",o),e.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",o),e.addEventListener("abort",o)}));He.set(e,t)}(e),t=e,(Fe||(Fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Ke):e);var t}function Ye(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",o)},r=()=>{t(Ye(e.result)),i()},o=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",o)}));return t.then((t=>{t instanceof IDBCursor&&$e.set(t,e)})).catch((()=>{})),Xe.set(t,e),t}(e);if(Ve.has(e))return Ve.get(e);const t=Je(e);return t!==e&&(Ve.set(e,t),Xe.set(t,e)),t}const Qe=e=>Xe.get(e);function Ze(e,t,{blocked:n,upgrade:i,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),s=Ye(a);return i&&a.addEventListener("upgradeneeded",(e=>{i(Ye(a.result),e.oldVersion,e.newVersion,Ye(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),s.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),s}const et=["get","getKey","getAll","getAllKeys","count"],tt=["put","add","delete","clear"],nt=new Map;function it(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(nt.get(t))return nt.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=tt.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!et.includes(n))return;const o=async function(e,...t){const o=this.transaction(e,r?"readwrite":"readonly");let a=o.store;return i&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),r&&o.done]))[0]};return nt.set(t,o),o}Ke=(e=>({...e,get:(t,n,i)=>it(t,n)||e.get(t,n,i),has:(t,n)=>!!it(t,n)||e.has(t,n)}))(Ke);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ot="@firebase/app",at="0.7.31",st=new je("@firebase/app"),ct="[DEFAULT]",lt={[ot]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ut=new Map,dt=new Map;function ft(e,t){try{e.container.addComponent(t)}catch(n){st.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function pt(e){const t=e.name;if(dt.has(t))return st.debug(`There were multiple attempts to register component ${t}.`),!1;dt.set(t,e);for(const t of ut.values())ft(t,e);return!0}function ht(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt=new ge("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Te("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="9.9.3";function vt(e="[DEFAULT]"){const t=ut.get(e);if(!t)throw mt.create("no-app",{appName:e});return t}function bt(e,t,n){var i;let r=null!==(i=lt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void st.warn(e.join(" "))}pt(new Te(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-store";let xt=null;function kt(){return xt||(xt=Ze("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(wt)}}).catch((e=>{throw mt.create("idb-open",{originalErrorMessage:e.message})}))),xt}async function _t(e,t){var n;try{const n=(await kt()).transaction(wt,"readwrite"),i=n.objectStore(wt);return await i.put(t,It(e)),n.done}catch(e){if(e instanceof me)st.warn(e.message);else{const t=mt.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});st.warn(t.message)}}}function It(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Ct();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Ct(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Nt(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Nt(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=ae(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new St(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Ct(){return(new Date).toISOString().substring(0,10)}class St{async runIndexedDBEnvironmentCheck(){return!!fe()&&pe().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await kt()).transaction(wt).objectStore(wt).get(It(e))}catch(e){if(e instanceof me)st.warn(e.message);else{const n=mt.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});st.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _t(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return _t(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Nt(e){return ae(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt;Tt="",pt(new Te("platform-logger",(e=>new rt(e)),"PRIVATE")),pt(new Te("heartbeat",(e=>new Et(e)),"PRIVATE")),bt(ot,at,Tt),bt(ot,at,"esm2017"),bt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
bt("firebase","9.9.3","app");const At="@firebase/installations",Lt="0.5.12",Rt=1e4,Ot="w:0.5.12",Mt="FIS_v2",Pt=36e5,Dt=new ge("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function zt(e){return e instanceof me&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ut(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function jt(e,t){const n=(await t.json()).error;return Dt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Ft({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Wt(e,{refreshToken:t}){const n=Ft(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function $t(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const qt=/^[cdef][\w-]{21}$/;function Vt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return qt.test(t)?t:""}catch(e){return""}}function Xt(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new Map;function Gt(e,t){const n=Xt(e);Jt(n,t),function(e,t){const n=Qt();n&&n.postMessage({key:e,fid:t});Zt()}(n,t)}function Jt(e,t){const n=Kt.get(e);if(n)for(const e of n)e(t)}let Yt=null;function Qt(){return!Yt&&"BroadcastChannel"in self&&(Yt=new BroadcastChannel("[Firebase] FID Change"),Yt.onmessage=e=>{Jt(e.data.key,e.data.fid)}),Yt}function Zt(){0===Kt.size&&Yt&&(Yt.close(),Yt=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en="firebase-installations-store";let tn=null;function nn(){return tn||(tn=Ze("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(en)}})),tn}async function rn(e,t){const n=Xt(e),i=(await nn()).transaction(en,"readwrite"),r=i.objectStore(en),o=await r.get(n);return await r.put(t,n),await i.done,o&&o.fid===t.fid||Gt(e,t.fid),t}async function on(e){const t=Xt(e),n=(await nn()).transaction(en,"readwrite");await n.objectStore(en).delete(t),await n.done}async function an(e,t){const n=Xt(e),i=(await nn()).transaction(en,"readwrite"),r=i.objectStore(en),o=await r.get(n),a=t(o);return void 0===a?await r.delete(n):await r.put(a,n),await i.done,!a||o&&o.fid===a.fid||Gt(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e){let t;const n=await an(e.appConfig,(n=>{const i=function(e){return un(e||{fid:Vt(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Dt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=Bt(e),r=Ft(e),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={fid:n,authVersion:Mt,appId:e.appId,sdkVersion:Ot},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await $t((()=>fetch(i,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ut(e.authToken)}}throw await jt("Create Installation",c)}(e,t);return rn(e.appConfig,n)}catch(n){throw zt(n)&&409===n.customData.serverCode?await on(e.appConfig):await rn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:cn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function cn(e){let t=await ln(e.appConfig);for(;1===t.registrationStatus;)await Ht(100),t=await ln(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await sn(e);return n||t}return t}function ln(e){return an(e,(e=>{if(!e)throw Dt.create("installation-not-found");return un(e)}))}function un(e){return 1===(t=e).registrationStatus&&t.registrationTime+Rt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function dn({appConfig:e,heartbeatServiceProvider:t},n){const i=function(e,{fid:t}){return`${Bt(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=Wt(e,n),o=t.getImmediate({optional:!0});if(o){const e=await o.getHeartbeatsHeader();e&&r.append("x-firebase-client",e)}const a={installation:{sdkVersion:Ot,appId:e.appId}},s={method:"POST",headers:r,body:JSON.stringify(a)},c=await $t((()=>fetch(i,s)));if(c.ok){return Ut(await c.json())}throw await jt("Generate Auth Token",c)}async function fn(e,t=!1){let n;const i=await an(e.appConfig,(i=>{if(!hn(i))throw Dt.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Pt}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await pn(e.appConfig);for(;1===n.authToken.requestStatus;)await Ht(100),n=await pn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?fn(e,t):i}(e,t),i;{if(!navigator.onLine)throw Dt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await dn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await rn(e.appConfig,i),n}catch(n){if(!zt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await rn(e.appConfig,n)}else await on(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function pn(e){return an(e,(e=>{if(!hn(e))throw Dt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Rt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function hn(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await sn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n);return(await fn(n,t)).token}function gn(e){return Dt.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="installations",vn=e=>{const t=ht(e.getProvider("app").getImmediate(),yn).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await sn(t);return i?i.catch(console.error):fn(t).catch(console.error),n.fid}(t),getToken:e=>mn(t,e)}};pt(new Te(yn,(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw gn("App Configuration");if(!e.name)throw gn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:ht(t,"heartbeat"),_delete:()=>Promise.resolve()}}),"PUBLIC")),pt(new Te("installations-internal",vn,"PRIVATE")),bt(At,Lt),bt(At,Lt,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bn="analytics",wn="https://www.googletagmanager.com/gtag/js",xn=new je("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function _n(e,t,n,i){return async function(r,o,a){try{"event"===r?await async function(e,t,n,i,r){try{let o=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await kn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){o=[];break}o.push(r)}}0===o.length&&(o=Object.values(t)),await Promise.all(o),e("event",i,r||{})}catch(e){xn.error(e)}}(e,t,n,o,a):"config"===r?await async function(e,t,n,i,r,o){const a=i[r];try{if(a)await t[a];else{const e=(await kn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){xn.error(e)}e("config",r,o)}(e,t,n,i,o,a):"consent"===r?e("consent","update",a):e("set",o)}catch(e){xn.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const In=new ge("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const En=new class{getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}};function Cn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Sn(e,t=En,n){const{appId:i,apiKey:r,measurementId:o}=e.options;if(!i)throw In.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:i};throw In.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new Tn;return setTimeout((async()=>{s.abort()}),void 0!==n?n:6e4),Nn({appId:i,apiKey:r,measurementId:o},a,s,t)}async function Nn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=En){var o,a;const{appId:s,measurementId:c}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),o=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(o),i(In.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(c)return xn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(o=e)||void 0===o?void 0:o.message}]`),{appId:s,measurementId:c};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Cn(i)},o="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(o,r);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw In.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){const o=t;if(!function(e){if(!(e instanceof me&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(o)){if(r.deleteThrottleMetadata(s),c)return xn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==o?void 0:o.message}]`),{appId:s,measurementId:c};throw t}const l=503===Number(null===(a=null==o?void 0:o.customData)||void 0===a?void 0:a.httpStatus)?Se(n,r.intervalMillis,30):Se(n,r.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return r.setThrottleMetadata(s,u),xn.debug(`Calling attemptFetch again in ${l} millis`),Nn(e,u,i,r)}}class Tn{addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}constructor(){this.listeners=[]}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An,Ln;function Rn(e){Ln=e}function On(e){An=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(e,t,n,i,r,o,a){var s;const c=Sn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&xn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>xn.error(e))),t.push(c);const l=async function(){var e;if(!fe())return xn.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await pe()}catch(t){return xn.warn(In.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[u,d]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wn))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${wn}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(o,u.measurementId),Ln&&(r("consent","default",Ln),Rn(void 0)),r("js",new Date);const f=null!==(s=null==a?void 0:a.config)&&void 0!==s?s:{};return f.origin="firebase",f.update=!0,null!=d&&(f.firebase_id=d),r("config",u.measurementId,f),An&&(r("set",An),On(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{_delete(){return delete Dn[this.app.options.appId],Promise.resolve()}constructor(e){this.app=e}}let Dn={},zn=[];const Bn={};let Un,jn,Fn="dataLayer",Wn="gtag",$n=!1;function Hn(e,t,n){!function(){const e=[];if(ue()&&e.push("This is a browser extension environment."),he()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=In.create("invalid-analytics-context",{errorInfo:t});xn.warn(n.message)}}();const i=e.options.appId;if(!i)throw In.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw In.create("no-api-key");xn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Dn[i])throw In.create("already-exists",{id:i});if(!$n){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Fn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let o=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(o=window[r]),window[r]=_n(o,e,t,n),{gtagCore:o,wrappedGtag:window[r]}}(Dn,zn,Bn,Fn,Wn);jn=e,Un=t,$n=!0}Dn[i]=Mn(e,zn,Bn,t,Un,Fn,n);return new Pn(e)}function qn(e,t,n,i){e=Ne(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(jn,Dn[e.app.options.appId],t,n,i).catch((e=>xn.error(e)))}const Vn="@firebase/analytics",Xn="0.8.0";pt(new Te(bn,((e,{options:t})=>Hn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),pt(new Te("analytics-internal",(function(e){try{const t=e.getProvider(bn).getImmediate();return{logEvent:(e,n,i)=>qn(t,e,n,i)}}catch(e){throw In.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),bt(Vn,Xn),bt(Vn,Xn,"esm2017");function Kn(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Gn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jn=Gn,Yn=new ge("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Qn=new je("@firebase/auth");function Zn(e,...t){Qn.logLevel<=Me.ERROR&&Qn.error(`Auth (9.9.3): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(e,...t){throw ii(e,...t)}function ti(e,...t){return ii(e,...t)}function ni(e,t,n){const i=Object.assign(Object.assign({},Jn()),{[t]:n});return new ge("auth","Firebase",i).create(t,{appName:e.name})}function ii(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Yn.create(e,...t)}function ri(e,t,...n){if(!e)throw ii(t,...n)}function oi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Zn(t),new Error(t)}function ai(e,t){e||oi(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=new Map;function ci(e){ai(e instanceof Function,"Expected a class definition");let t=si.get(e);return t?(ai(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,si.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function li(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ui(){return"http:"===di()||"https:"===di()}function di(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ui()||ue()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(e,t){this.shortDelay=e,this.longDelay=t,ai(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(le())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(e,t){ai(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void oi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void oi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void oi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},gi=new fi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function vi(e,t,n,i,r={}){return bi(e,r,(async()=>{let r={},o={};i&&("GET"===t?o=i:r={body:JSON.stringify(i)});const a=xe(Object.assign({key:e.config.apiKey},o)).slice(1),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/json",e.languageCode&&(s["X-Firebase-Locale"]=e.languageCode),hi.fetch()(xi(e,e.config.apiHost,n,a),Object.assign({method:t,headers:s,referrerPolicy:"no-referrer"},r))}))}async function bi(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},mi),t);try{const t=new ki(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw _i(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw _i(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw _i(e,"email-already-in-use",o);if("USER_DISABLED"===n)throw _i(e,"user-disabled",o);const s=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw ni(e,s,a);ei(e,s)}}catch(t){if(t instanceof me)throw t;ei(e,"network-request-failed")}}async function wi(e,t,n,i,r={}){const o=await vi(e,t,n,i,r);return"mfaPendingCredential"in o&&ei(e,"multi-factor-auth-required",{_serverResponse:o}),o}function xi(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?pi(e.config,r):`${e.config.apiScheme}://${r}`}class ki{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ti(this.auth,"network-request-failed"))),gi.get())}))}}function _i(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ti(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ii(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(e){return 1e3*Number(e)}function Ci(e){var t;const[n,i,r]=e.split(".");if(void 0===n||void 0===i||void 0===r)return Zn("JWT malformed, contained fewer than 3 sections"),null;try{const e=se(i);return e?JSON.parse(e):(Zn("Failed to decode base64 JWT payload"),null)}catch(e){return Zn("Caught error parsing JWT payload as JSON",null===(t=e)||void 0===t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Si(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof me&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ni{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{_initializeTime(){this.lastSignInTime=Ii(this.lastLoginAt),this.creationTime=Ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Si(e,async function(e,t){return vi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));ri(null==r?void 0:r.users.length,n,"internal-error");const o=r.users[0];e._notifyReloadListener(o);const a=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?o.providerUserInfo.map((e=>{var{providerId:t}=e,n=Kn(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const s=(c=e.providerData,l=a,[...c.filter((e=>!l.some((t=>t.providerId===e.providerId)))),...l]);var c,l;const u=e.isAnonymous,d=!(e.email&&o.passwordHash||(null==s?void 0:s.length)),f=!!u&&d,p={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:s,metadata:new Ti(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Li{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ri(e.idToken,"internal-error"),ri(void 0!==e.idToken,"internal-error"),ri(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Ci(e);return ri(t,"internal-error"),ri(void 0!==t.exp,"internal-error"),ri(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return ri(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await bi(e,{},(async()=>{const n=xe({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,o=xi(e,i,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",hi.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,o=new Li;return n&&(ri("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),i&&(ri("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),r&&(ri("number"==typeof r,"internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Li,this.toJSON())}_performRefresh(){return oi("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(e,t){ri("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Oi{async getIdToken(e){const t=await Si(this,this.stsTokenManager.getToken(this.auth,e));return ri(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ne(e),i=await n.getIdToken(t),r=Ci(i);ri(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o="object"==typeof r.firebase?r.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:r,token:i,authTime:Ii(Ei(r.auth_time)),issuedAtTime:Ii(Ei(r.iat)),expirationTime:Ii(Ei(r.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ne(e);await Ai(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(ri(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){ri(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ai(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Si(this,async function(e,t){return vi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,o,a,s,c,l;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,f=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(o=t.photoURL)&&void 0!==o?o:void 0,h=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(s=t._redirectEventId)&&void 0!==s?s:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,y=null!==(l=t.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:b,isAnonymous:w,providerData:x,stsTokenManager:k}=t;ri(v&&k,e,"internal-error");const _=Li.fromJSON(this.name,k);ri("string"==typeof v,e,"internal-error"),Ri(u,e.name),Ri(d,e.name),ri("boolean"==typeof b,e,"internal-error"),ri("boolean"==typeof w,e,"internal-error"),Ri(f,e.name),Ri(p,e.name),Ri(h,e.name),Ri(m,e.name),Ri(g,e.name),Ri(y,e.name);const I=new Oi({uid:v,auth:e,email:d,emailVerified:b,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:f,tenantId:h,stsTokenManager:_,createdAt:g,lastLoginAt:y});return x&&Array.isArray(x)&&(I.providerData=x.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const i=new Li;i.updateFromServerResponse(t);const r=new Oi({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await Ai(r),r}constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Kn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ni(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ti(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Mi.type="NONE";const Pi=Mi;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(e,t,n){return`firebase:${e}:${t}:${n}`}class zi{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new zi(ci(Pi),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||ci(Pi);const o=Di(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(o);if(t){const i=Oi._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const s=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&s.length?(r=s[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(o)}catch(e){}}))),new zi(r,e,n)):new zi(r,e,n)}constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Di(this.userKey,i.apiKey,r),this.fullPersistenceKey=Di("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Wi(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ui(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Hi(t))return"Blackberry";if(qi(t))return"Webos";if(ji(t))return"Safari";if((t.includes("chrome/")||Fi(t))&&!t.includes("edge/"))return"Chrome";if($i(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ui(e=le()){return/firefox\//i.test(e)}function ji(e=le()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Fi(e=le()){return/crios\//i.test(e)}function Wi(e=le()){return/iemobile/i.test(e)}function $i(e=le()){return/android/i.test(e)}function Hi(e=le()){return/blackberry/i.test(e)}function qi(e=le()){return/webos/i.test(e)}function Vi(e=le()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Xi(){return de()&&10===document.documentMode}function Ki(e=le()){return Vi(e)||$i(e)||qi(e)||Hi(e)||/windows phone/i.test(e)||Wi(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Gi(e,t=[]){let n;switch(e){case"Browser":n=Bi(le());break;case"Worker":n=`${Bi(le())}-${e}`;break;default:n=e}return`${n}/JsCore/9.9.3/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(e){n.reverse();for(const e of n)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=e)||void 0===t?void 0:t.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ci(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await zi.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,o=null==i?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==o||!(null==a?void 0:a.user)||(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ri(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Ai(e)}catch(e){if("auth/network-request-failed"!==(null===(t=e)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ne(e):null;return t&&ri(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ri(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ci(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ge("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ci(e)||this._popupRedirectResolver;ri(t,this,"argument-error"),this.redirectPersistenceManager=await zi.create(this,[ci(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ri(o,this,"internal-error"),o.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ri(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zi(this),this.idTokenSubscription=new Zi(this),this.beforeStateQueue=new Ji(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Yn,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}}function Qi(e){return Ne(e)}class Zi{get next(){return ri(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=Ie((e=>this.observer=e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class er{toJSON(){return oi("not implemented")}_getIdTokenResponse(e){return oi("not implemented")}_linkToIdToken(e,t){return oi("not implemented")}_getReauthenticationResolver(e){return oi("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr(e,t){return vi(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nr extends er{static _fromEmailAndPassword(e,t){return new nr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new nr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return wi(e,"POST","/v1/accounts:signInWithPassword",yi(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return wi(e,"POST","/v1/accounts:signInWithEmailLink",yi(e,t))}(e,{email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return wi(e,"POST","/v1/accounts:signInWithEmailLink",yi(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ei(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ir(e,t){return wi(e,"POST","/v1/accounts:signInWithIdp",yi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends er{static _fromParams(e){const t=new rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ei("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Kn(t,["providerId","signInMethod"]);if(!n||!i)return null;const o=new rr(n,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){return ir(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ir(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ir(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=xe(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ar extends er{static _fromVerification(e,t){return new ar({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ar({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return wi(e,"POST","/v1/accounts:signInWithPhoneNumber",yi(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await wi(e,"POST","/v1/accounts:signInWithPhoneNumber",yi(e,t));if(n.temporaryProof)throw _i(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return wi(e,"POST","/v1/accounts:signInWithPhoneNumber",yi(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),or)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new ar({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{static parseLink(e){const t=function(e){const t=ke(_e(e)).link,n=t?ke(_e(t)).deep_link_id:null,i=ke(_e(e)).deep_link_id;return(i?ke(_e(i)).link:null)||i||n||t||e}(e);try{return new sr(t)}catch(e){return null}}constructor(e){var t,n,i,r,o,a;const s=ke(_e(e)),c=null!==(t=s.apiKey)&&void 0!==t?t:null,l=null!==(n=s.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=s.mode)&&void 0!==i?i:null);ri(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(r=s.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(o=s.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=s.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{static credential(e,t){return nr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=sr.parseLink(t);return ri(n,"argument-error"),nr._fromEmailAndCode(e,n.code,n.tenantId)}constructor(){this.providerId=cr.PROVIDER_ID}}cr.PROVIDER_ID="password",cr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",cr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends lr{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dr extends ur{static credential(e){return rr._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com",dr.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr extends ur{static credential(e,t){return rr._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return fr.credential(t,n)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}fr.GOOGLE_SIGN_IN_METHOD="google.com",fr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr extends ur{static credential(e){return rr._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}pr.GITHUB_SIGN_IN_METHOD="github.com",pr.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hr extends ur{static credential(e,t){return rr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return hr.credential(t,n)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function mr(e,t){return wi(e,"POST","/v1/accounts:signUp",yi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr.TWITTER_SIGN_IN_METHOD="twitter.com",hr.PROVIDER_ID="twitter.com";class gr{static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Oi._fromIdTokenResponse(e,n,i),o=yr(n);return new gr({user:r,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=yr(n);return new gr({user:e,providerId:i,_tokenResponse:n,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function yr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr extends me{static _fromErrorAndOperation(e,t,n,i){return new vr(e,t,n,i)}constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,vr.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}}function br(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw vr._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wr(e,t,n=!1){const i=await Si(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gr._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xr(e,t,n=!1){var i;const{auth:r}=e,o="reauthenticate";try{const i=await Si(e,br(r,o,t,e),n);ri(i.idToken,r,"internal-error");const a=Ci(i.idToken);ri(a,r,"internal-error");const{sub:s}=a;return ri(e.uid===s,r,"user-mismatch"),gr._forOperation(e,o,i)}catch(e){throw"auth/user-not-found"===(null===(i=e)||void 0===i?void 0:i.code)&&ei(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kr(e,t,n=!1){const i="signIn",r=await br(e,i,t),o=await gr._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(o.user),o}async function _r(e,t){return kr(Qi(e),t)}async function Ir(e,t,n){const i=Qi(e),r=await mr(i,{returnSecureToken:!0,email:t,password:n}),o=await gr._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function Er(e,t,n){return _r(Ne(e),cr.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;const Cr="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{_isAvailable(){try{return this.storage?(this.storage.setItem(Cr,"1"),this.storage.removeItem(Cr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr extends Sr{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Xi()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=le();return ji(e)||Vi(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ki(),this._shouldAllowMigration=!0}}Nr.type="LOCAL";const Tr=Nr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends Sr{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ar.type="SESSION";const Lr=Ar;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rr{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Rr(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(null==o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(o).map((async e=>e(t.origin,r))),s=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:s})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Or(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr.receivers=[];class Mr{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise(((a,s)=>{const c=Or("",20);i.port1.start();const l=setTimeout((()=>{s(new Error("unsupported_event"))}),n);o={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(l),r=setTimeout((()=>{s(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(l),clearTimeout(r),s(new Error("invalid_response"))}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{o&&this.removeMessageHandler(o)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dr(){return void 0!==Pr().WorkerGlobalScope&&"function"==typeof Pr().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const zr="firebaseLocalStorageDb",Br="firebaseLocalStorage",Ur="fbase_key";class jr{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Fr(e,t){return e.transaction([Br],t?"readwrite":"readonly").objectStore(Br)}function Wr(){const e=indexedDB.open(zr,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Br,{keyPath:Ur})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Br)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(zr);return new jr(e).toPromise()}(),t(await Wr()))}))}))}async function $r(e,t,n){const i=Fr(e,!0).put({[Ur]:t,value:n});return new jr(i).toPromise()}function Hr(e,t){const n=Fr(e,!0).delete(t);return new jr(n).toPromise()}class qr{async _openDb(){return this.db||(this.db=await Wr()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Dr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rr._getInstance(Dr()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Mr(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wr();return await $r(e,Cr,"1"),await Hr(e,Cr),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>$r(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Fr(e,!1).get(t),i=await new jr(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Hr(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Fr(e,!1).getAll();return new jr(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}qr.type="LOCAL";const Vr=qr;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=ti("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(o=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==o?o:document).appendChild(i)}))}function Kr(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Kr("rcb"),new fi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gr="recaptcha";async function Jr(e,t,n){var i;const r=await n.verify();try{let o;if(ri("string"==typeof r,e,"argument-error"),ri(n.type===Gr,e,"argument-error"),o="string"==typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){ri("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return vi(e,"POST","/v2/accounts/mfaEnrollment:start",yi(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{ri("signin"===t.type,e,"internal-error");const n=(null===(i=o.multiFactorHint)||void 0===i?void 0:i.uid)||o.multiFactorUid;ri(n,e,"missing-multi-factor-info");const a=await function(e,t){return vi(e,"POST","/v2/accounts/mfaSignIn:start",yi(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return vi(e,"POST","/v1/accounts:sendVerificationCode",yi(e,t))}(e,{phoneNumber:o.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yr{verifyPhoneNumber(e,t){return Jr(this.auth,e,Ne(t))}static credential(e,t){return ar._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yr.credentialFromTaggedObject(t)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?ar._fromTokenResponse(t,n):null}constructor(e){this.providerId=Yr.PROVIDER_ID,this.auth=Qi(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qr(e,t){return t?ci(t):(ri(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yr.PROVIDER_ID="phone",Yr.PHONE_SIGN_IN_METHOD="phone";class Zr extends er{_getIdTokenResponse(e){return ir(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ir(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ir(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function eo(e){return kr(e.auth,new Zr(e),e.bypassAuthState)}function to(e){const{auth:t,user:n}=e;return ri(n,t,"internal-error"),xr(n,new Zr(e),e.bypassAuthState)}async function no(e){const{auth:t,user:n}=e;return ri(n,t,"internal-error"),wr(n,new Zr(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:o,type:a}=e;if(o)return void this.reject(o);const s={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(s))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return eo;case"linkViaPopup":case"linkViaRedirect":return no;case"reauthViaPopup":case"reauthViaRedirect":return to;default:ei(this.auth,"internal-error")}}resolve(e){ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ai(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ro=new fi(2e3,1e4);class oo extends io{async executeNotNull(){const e=await this.execute();return ri(e,this.auth,"internal-error"),e}async onExecution(){ai(1===this.filter.length,"Popup operations only handle one event");const e=Or();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ti(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ti(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ti(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ro.get())};e()}constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}}oo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ao=new Map;class so extends io{async execute(){let e=ao.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=uo(t),i=lo(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}ao.set(this.auth._key(),e)}return this.bypassAuthState||ao.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}}function co(e,t){ao.set(e._key(),t)}function lo(e){return ci(e._redirectPersistence)}function uo(e){return Di("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(e,t,n=!1){const i=Qi(e),r=Qr(i,t),o=new so(i,r,n),a=await o.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class po{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mo(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!mo(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ti(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ho(e))}saveEventToCache(e){this.cachedEventUids.add(ho(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function ho(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function mo({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const go=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yo=/^https?/;async function vo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return vi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(bo(e))return}catch(e){}ei(e,"unauthorized-domain")}function bo(e){const t=li(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!yo.test(n))return!1;if(go.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new fi(3e4,6e4);function xo(){const e=Pr().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ko=null;function _o(e){return ko=ko||function(e){return new Promise(((t,n)=>{var i,r,o;function a(){xo(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xo(),n(ti(e,"network-request-failed"))},timeout:wo.get()})}if(null===(r=null===(i=Pr().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=Pr().gapi)||void 0===o?void 0:o.load)){const t=Kr("iframefcb");return Pr()[t]=()=>{gapi.load?a():n(ti(e,"network-request-failed"))},Xr(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw ko=null,e}))}(e),ko}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new fi(5e3,15e3),Eo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Co=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function So(e){const t=e.config;ri(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?pi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:yt},r=Co.get(e.config.apiHost);r&&(i.eid=r);const o=e._getFrameworks();return o.length&&(i.fw=o.join(",")),`${n}?${xe(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const No={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class To{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function Ao(e,t,n,i=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let s="";const c=Object.assign(Object.assign({},No),{width:i.toString(),height:r.toString(),top:o,left:a}),l=le().toLowerCase();n&&(s=Fi(l)?"_blank":n),Ui(l)&&(t=t||"http://localhost",c.scrollbars="yes");const u=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=le()){var t;return Vi(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(l)&&"_self"!==s)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",s),new To(null);const d=window.open(t||"",s,u);ri(d,e,"popup-blocked");try{d.focus()}catch(e){}return new To(d)}const Lo="emulator/auth/handler";function Ro(e,t,n,i,r,o){ri(e.config.authDomain,e,"auth-domain-config-required"),ri(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:yt,eventId:r};if(t instanceof lr){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",ve(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(o||{}))a[e]=t}if(t instanceof ur){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const s=a;for(const e of Object.keys(s))void 0===s[e]&&delete s[e];return`${function({config:e}){return e.emulator?pi(e,Lo):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${xe(s).slice(1)}`}const Oo="webStorageSupport";const Mo=class{async _openPopup(e,t,n,i){var r;ai(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Ao(e,Ro(e,t,n,li(),i),Or())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ro(e,t,n,li(),i),Pr().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ai(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await _o(e),n=Pr().gapi;return ri(n,e,"internal-error"),t.open({where:document.body,url:So(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eo,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=ti(e,"network-request-failed"),o=Pr().setTimeout((()=>{i(r)}),Io.get());function a(){Pr().clearTimeout(o),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}(e),n=new po(e);return t.register("authEvent",(t=>{ri(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Oo,{type:Oo},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),ei(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=vo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ki()||ji()||Vi()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lr,this._completeRedirectFn=fo,this._overrideRedirectResult=co}};var Po,Do="@firebase/auth",zo="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bo{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ri(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Po="Browser",pt(new Te("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:o}=n.options;return((e,n)=>{ri(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),ri(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});const i={apiKey:r,authDomain:o,clientPlatform:Po,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gi(Po)},a=new Yi(e,n,i);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(ci);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),pt(new Te("auth-internal",(e=>(e=>new Bo(e))(Qi(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Do,zo,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Po)),bt(Do,zo,"esm2017");const Uo=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:ct,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw mt.create("bad-app-name",{appName:String(i)});const r=ut.get(i);if(r){if(be(e,r.options)&&be(n,r.config))return r;throw mt.create("duplicate-app",{appName:i})}const o=new Re(i);for(const e of dt.values())o.addComponent(e);const a=new gt(e,n,o);return ut.set(i,a),a}({apiKey:"AIzaSyCxYVplY39hWeNnw2-6VFkKdND6Wfe_mE8",authDomain:"filmoteka-3.firebaseapp.com",projectId:"filmoteka-3",storageBucket:"filmoteka-3.appspot.com",messagingSenderId:"259717760467",appId:"1:259717760467:web:d36f823e53d3b07c281b26",measurementId:"G-6S71JM2DHE"}),jo=(function(e=vt()){const t=ht(e=Ne(e),bn);t.isInitialized()?t.getImmediate():function(e,t={}){const n=ht(e,bn);if(n.isInitialized()){const e=n.getImmediate();if(be(t,n.getOptions()))return e;throw In.create("already-initialized")}n.initialize({options:t})}(e)}(Uo),
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=vt()){const t=ht(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=ht(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(be(n.getOptions(),null!=t?t:{}))return e;ei(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Mo,persistence:[Vr,Tr,Lr]})}(Uo)),Fo={singInBtn:document.querySelector(".singin_btn"),newVideo:document.querySelector(".main-header"),films:document.querySelector(".main-films"),mostWached:document.querySelector(".most-watched"),videos:document.querySelector(".videos"),mainContainer:document.querySelector(".main-container")};function Wo(){return void 0===Xo()?(console.log(Xo()),Fo.singInBtn.textContent="SingIn",Fo.singInBtn.style.backgroundColor="#ea5f5f",Fo.singInBtn.addEventListener("click",$o),void console.log("off")):(console.log(Xo()),Fo.singInBtn.textContent="SingOut",Fo.singInBtn.style.backgroundColor="#353340",Fo.singInBtn.addEventListener("click",Vo),void console.log("on"))}function $o(){Fo.mainContainer.innerHTML="",ee(Fo.mainContainer);const e={formLogin:document.querySelector(".form-login"),formSignup:document.querySelector(".form-signup")};e.formLogin.addEventListener("submit",Ho),e.formSignup.addEventListener("submit",qo)}async function Ho(e){e.preventDefault();const n=new FormData(this),i=n.get("email"),r=n.get("password");console.log(i,r);await Er(jo,i,r).then((e=>{const t=e.user;return localStorage.setItem("USER",JSON.stringify(t)),console.log(t),t})).catch((function(e){return"auth/user-not-found"===e.code?t(ie).Notify.failure("you need to singup"):"auth/wrong-password"===e.code?t(ie).Notify.failure("wrong password"):"auth/network-request-failed"===e.code?t(ie).Notify.failure("network request failed"):(console.log(e.code),void alert(e.message))}))&&(Wo(),location.reload())}async function qo(e){e.preventDefault();const n=new FormData(this),i=n.get("email"),r=n.get("password");if(r!==n.get("password_repeat"))return t(ie).Notify.failure("password problem");console.log(i,r);await Ir(jo,i,r).then((e=>{const t=e.user;return localStorage.setItem("USER",JSON.stringify(t)),t})).catch((function(e){return"auth/weak-password"===e.code?t(ie).Notify.failure("password is too short"):"auth/email-already-in-use"===e.code?t(ie).Notify.failure("you are already registered"):(console.log(e.code),void console.log(e.message))}))&&(Wo(),location.reload())}async function Vo(){console.log("lnvlasfnv");await(e=jo,Ne(e).signOut()).then((e=>(localStorage.removeItem("USER"),console.log(e),e))).then((()=>{Wo(),location.reload()})).catch((e=>{}));var e}function Xo(){const e=localStorage.getItem("USER");return e?JSON.parse(e):void 0}function Ko(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}
/*!
 * Splide.js
 * Version  : 4.0.7
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
var Go="(prefers-reduced-motion: reduce)",Jo={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};function Yo(e){e.length=0}function Qo(e,t,n){return Array.prototype.slice.call(e,t,n)}function Zo(e){return e.bind.apply(e,[null].concat(Qo(arguments,1)))}var ea=setTimeout,ta=function(){};function na(e){return requestAnimationFrame(e)}function ia(e,t){return typeof t===e}function ra(e){return!la(e)&&ia("object",e)}var oa=Array.isArray,aa=Zo(ia,"function"),sa=Zo(ia,"string"),ca=Zo(ia,"undefined");function la(e){return null===e}function ua(e){return e instanceof HTMLElement}function da(e){return oa(e)?e:[e]}function fa(e,t){da(e).forEach(t)}function pa(e,t){return e.indexOf(t)>-1}function ha(e,t){return e.push.apply(e,da(t)),e}function ma(e,t,n){e&&fa(t,(function(t){t&&e.classList[n?"add":"remove"](t)}))}function ga(e,t){ma(e,sa(t)?t.split(" "):t,!0)}function ya(e,t){fa(t,e.appendChild.bind(e))}function va(e,t){fa(e,(function(e){var n=(t||e).parentNode;n&&n.insertBefore(e,t)}))}function ba(e,t){return ua(e)&&(e.msMatchesSelector||e.matches).call(e,t)}function wa(e,t){var n=e?Qo(e.children):[];return t?n.filter((function(e){return ba(e,t)})):n}function xa(e,t){return t?wa(e,t)[0]:e.firstElementChild}var ka=Object.keys;function _a(e,t,n){if(e){var i=ka(e);i=n?i.reverse():i;for(var r=0;r<i.length;r++){var o=i[r];if("__proto__"!==o&&!1===t(e[o],o))break}}return e}function Ia(e){return Qo(arguments,1).forEach((function(t){_a(t,(function(n,i){e[i]=t[i]}))})),e}function Ea(e){return Qo(arguments,1).forEach((function(t){_a(t,(function(t,n){oa(t)?e[n]=t.slice():ra(t)?e[n]=Ea({},ra(e[n])?e[n]:{},t):e[n]=t}))})),e}function Ca(e,t){da(t||ka(e)).forEach((function(t){delete e[t]}))}function Sa(e,t){fa(e,(function(e){fa(t,(function(t){e&&e.removeAttribute(t)}))}))}function Na(e,t,n){ra(t)?_a(t,(function(t,n){Na(e,n,t)})):fa(e,(function(e){la(n)||""===n?Sa(e,t):e.setAttribute(t,String(n))}))}function Ta(e,t,n){var i=document.createElement(e);return t&&(sa(t)?ga(i,t):Na(i,t)),n&&ya(n,i),i}function Aa(e,t,n){if(ca(n))return getComputedStyle(e)[t];la(n)||(e.style[t]=""+n)}function La(e,t){Aa(e,"display",t)}function Ra(e){e.setActive&&e.setActive()||e.focus({preventScroll:!0})}function Oa(e,t){return e.getAttribute(t)}function Ma(e,t){return e&&e.classList.contains(t)}function Pa(e){return e.getBoundingClientRect()}function Da(e){fa(e,(function(e){e&&e.parentNode&&e.parentNode.removeChild(e)}))}function za(e){return xa((new DOMParser).parseFromString(e,"text/html").body)}function Ba(e,t){e.preventDefault(),t&&(e.stopPropagation(),e.stopImmediatePropagation())}function Ua(e,t){return e&&e.querySelector(t)}function ja(e,t){return t?Qo(e.querySelectorAll(t)):[]}function Fa(e,t){ma(e,t,!1)}function Wa(e){return e.timeStamp}function $a(e){return sa(e)?e:e?e+"px":""}var Ha="splide",qa="data-splide";function Va(e,t){if(!e)throw new Error("[splide] "+(t||""))}var Xa=Math.min,Ka=Math.max,Ga=Math.floor,Ja=Math.ceil,Ya=Math.abs;function Qa(e,t,n){return Ya(e-t)<n}function Za(e,t,n,i){var r=Xa(t,n),o=Ka(t,n);return i?r<e&&e<o:r<=e&&e<=o}function es(e,t,n){var i=Xa(t,n),r=Ka(t,n);return Xa(Ka(i,e),r)}function ts(e){return+(e>0)-+(e<0)}function ns(e,t){return fa(t,(function(t){e=e.replace("%s",""+t)})),e}function is(e){return e<10?"0"+e:""+e}var rs={};function os(e){return""+e+is(rs[e]=(rs[e]||0)+1)}function as(){var e=[];function t(e,t,n){fa(e,(function(e){e&&fa(t,(function(t){t.split(" ").forEach((function(t){var i=t.split(".");n(e,i[0],i[1])}))}))}))}return{bind:function(n,i,r,o){t(n,i,(function(t,n,i){var a="addEventListener"in t,s=a?t.removeEventListener.bind(t,n,r,o):t.removeListener.bind(t,r);a?t.addEventListener(n,r,o):t.addListener(r),e.push([t,n,i,r,s])}))},unbind:function(n,i,r){t(n,i,(function(t,n,i){e=e.filter((function(e){return!!(e[0]!==t||e[1]!==n||e[2]!==i||r&&e[3]!==r)||(e[4](),!1)}))}))},dispatch:function(e,t,n){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,n),e.dispatchEvent(i),i},destroy:function(){e.forEach((function(e){e[4]()})),Yo(e)}}}var ss="mounted",cs="ready",ls="move",us="moved",ds="shifted",fs="click",ps="active",hs="inactive",ms="visible",gs="hidden",ys="slide:keydown",vs="refresh",bs="updated",ws="resize",xs="resized",ks="scroll",_s="scrolled",Is="destroy",Es="arrows:mounted",Cs="navigation:mounted",Ss="autoplay:play",Ns="autoplay:pause",Ts="lazyload:loaded";function As(e){var t=e?e.event.bus:document.createDocumentFragment(),n=as();return e&&e.event.on(Is,n.destroy),Ia(n,{bus:t,on:function(e,i){n.bind(t,da(e).join(" "),(function(e){i.apply(i,oa(e.detail)?e.detail:[])}))},off:Zo(n.unbind,t),emit:function(e){n.dispatch(t,e,Qo(arguments,1))}})}function Ls(e,t,n,i){var r,o,a=Date.now,s=0,c=!0,l=0;function u(){if(!c){if(s=e?Xa((a()-r)/e,1):1,n&&n(s),s>=1&&(t(),r=a(),i&&++l>=i))return d();na(u)}}function d(){c=!0}function f(){o&&cancelAnimationFrame(o),s=0,o=0,c=!0}return{start:function(t){!t&&f(),r=a()-(t?s*e:0),c=!1,na(u)},rewind:function(){r=a(),s=0,n&&n(s)},pause:d,cancel:f,set:function(t){e=t},isPaused:function(){return c}}}var Rs="ArrowLeft",Os="ArrowRight",Ms="ArrowUp",Ps="ArrowDown",Ds="ttb",zs={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[Ms,Os],ArrowRight:[Ps,Rs]};function Bs(e,t,n){return{resolve:function(e,t,i){var r="rtl"!==(i=i||n.direction)||t?i===Ds?0:-1:1;return zs[e]&&zs[e][r]||e.replace(/width|left|right/i,(function(e,t){var n=zs[e.toLowerCase()][r]||e;return t>0?n.charAt(0).toUpperCase()+n.slice(1):n}))},orient:function(e){return e*("rtl"===n.direction?1:-1)}}}var Us="role",js="tabindex",Fs="aria-controls",Ws="aria-current",$s="aria-selected",Hs="aria-label",qs="aria-labelledby",Vs="aria-hidden",Xs="aria-orientation",Ks="aria-roledescription",Gs="aria-live",Js="aria-busy",Ys="aria-atomic",Qs=[Us,js,"disabled",Fs,Ws,Hs,qs,Vs,Xs,Ks],Zs=Ha,ec="splide__track",tc="splide__slide",nc="splide__slide--clone",ic="splide__arrows",rc="splide__arrow",oc="splide__arrow--prev",ac="splide__arrow--next",sc="splide__pagination",cc="splide__pagination__page",lc="splide__progress__bar",uc="splide__toggle",dc="is-active",fc="is-prev",pc="is-next",hc="is-visible",mc="is-loading",gc="is-focus-in",yc=[dc,hc,fc,pc,mc,gc],vc={slide:tc,clone:nc,arrows:ic,arrow:rc,prev:oc,next:ac,pagination:sc,page:cc,spinner:"splide__spinner"};var bc="touchstart mousedown",wc="touchmove mousemove",xc="touchend touchcancel mouseup click";var kc="slide",_c="loop",Ic="fade";function Ec(e,t,n,i){var r,o=As(e),a=o.on,s=o.emit,c=o.bind,l=e.Components,u=e.root,d=e.options,f=d.isNavigation,p=d.updateOnMove,h=d.i18n,m=d.pagination,g=d.slideFocus,y=l.Direction.resolve,v=Oa(i,"style"),b=Oa(i,Hs),w=n>-1,x=xa(i,".splide__slide__container"),k=ja(i,d.focusableNodes||"");function _(){var r=e.splides.map((function(e){var n=e.splide.Components.Slides.getAt(t);return n?n.slide.id:""})).join(" ");Na(i,Hs,ns(h.slideX,(w?n:t)+1)),Na(i,Fs,r),Na(i,Us,g?"button":""),g&&Sa(i,Ks)}function I(){r||E()}function E(){if(!r){var n=e.index;(o=C())!==Ma(i,dc)&&(ma(i,dc,o),Na(i,Ws,f&&o||""),s(o?ps:hs,S)),function(){var t=function(){if(e.is(Ic))return C();var t=Pa(l.Elements.track),n=Pa(i),r=y("left",!0),o=y("right",!0);return Ga(t[r])<=Ja(n[r])&&Ga(n[o])<=Ja(t[o])}(),n=!t&&(!C()||w);e.state.is([4,5])||Na(i,Vs,n||"");Na(k,js,n?-1:""),g&&Na(i,js,n?-1:0);t!==Ma(i,hc)&&(ma(i,hc,t),s(t?ms:gs,S));if(!t&&document.activeElement===i){var r=l.Slides.getAt(e.index);r&&Ra(r.slide)}}(),ma(i,fc,t===n-1),ma(i,pc,t===n+1)}var o}function C(){var i=e.index;return i===t||d.cloneStatus&&i===n}var S={index:t,slideIndex:n,slide:i,container:x,isClone:w,mount:function(){w||(i.id=u.id+"-slide"+is(t+1),Na(i,Us,m?"tabpanel":"group"),Na(i,Ks,h.slide),Na(i,Hs,b||ns(h.slideLabel,[t+1,e.length]))),c(i,"click",Zo(s,fs,S)),c(i,"keydown",Zo(s,ys,S)),a([us,ds,_s],E),a(Cs,_),p&&a(ls,I)},destroy:function(){r=!0,o.destroy(),Fa(i,yc),Sa(i,Qs),Na(i,"style",v),Na(i,Hs,b||"")},update:E,style:function(e,t,n){Aa(n&&x||i,e,t)},isWithin:function(n,i){var r=Ya(n-t);return w||!d.rewind&&!e.is(_c)||(r=Xa(r,e.length-r)),r<=i}};return S}var Cc="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";var Sc={passive:!1,capture:!0};var Nc={Spacebar:" ",Right:Os,Left:Rs,Up:Ms,Down:Ps};function Tc(e){return e=sa(e)?e:e.key,Nc[e]||e}var Ac="keydown";var Lc="data-splide-lazy",Rc="data-splide-lazy-srcset";var Oc=[" ","Enter"];var Mc=Object.freeze({__proto__:null,Media:function(e,t,n){var i=e.state,r=n.breakpoints||{},o=n.reducedMotion||{},a=as(),s=[];function c(e){e&&a.destroy()}function l(e,t){var n=matchMedia(t);a.bind(n,"change",u),s.push([e,n])}function u(){var t=i.is(7),r=n.direction,o=s.reduce((function(e,t){return Ea(e,t[1].matches?t[0]:{})}),{});Ca(n),d(o),n.destroy?e.destroy("completely"===n.destroy):t?(c(!0),e.mount()):r!==n.direction&&e.refresh()}function d(t,r){Ea(n,t),r&&Ea(Object.getPrototypeOf(n),t),i.is(1)||e.emit(bs,n)}return{setup:function(){var e="min"===n.mediaQuery;ka(r).sort((function(t,n){return e?+t-+n:+n-+t})).forEach((function(t){l(r[t],"("+(e?"min":"max")+"-width:"+t+"px)")})),l(o,Go),u()},destroy:c,reduce:function(e){matchMedia(Go).matches&&(e?Ea(n,o):Ca(n,ka(o)))},set:d}},Direction:Bs,Elements:function(e,t,n){var i,r,o,a=As(e),s=a.on,c=a.bind,l=e.root,u=n.i18n,d={},f=[],p=[],h=[];function m(){i=v(".splide__track"),r=xa(i,".splide__list"),Va(i&&r,"A track/list element is missing."),ha(f,wa(r,".splide__slide:not(.splide__slide--clone)")),_a({arrows:ic,pagination:sc,prev:oc,next:ac,bar:lc,toggle:uc},(function(e,t){d[t]=v("."+e)})),Ia(d,{root:l,track:i,list:r,slides:f}),function(){var e=l.id||os(Ha),t=n.role;l.id=e,i.id=i.id||e+"-track",r.id=r.id||e+"-list",!Oa(l,Us)&&"SECTION"!==l.tagName&&t&&Na(l,Us,t);Na(l,Ks,u.carousel),Na(r,Us,"presentation")}(),y()}function g(e){var t=Qs.concat("style");Yo(f),Fa(l,p),Fa(i,h),Sa([i,r],t),Sa(l,e?t:["style",Ks])}function y(){Fa(l,p),Fa(i,h),p=b(Zs),h=b(ec),ga(l,p),ga(i,h),Na(l,Hs,n.label),Na(l,qs,n.labelledby)}function v(e){var t=Ua(l,e);return t&&function(e,t){if(aa(e.closest))return e.closest(t);for(var n=e;n&&1===n.nodeType&&!ba(n,t);)n=n.parentElement;return n}(t,"."+Zs)===l?t:void 0}function b(e){return[e+"--"+n.type,e+"--"+n.direction,n.drag&&e+"--draggable",n.isNavigation&&e+"--nav",e===Zs&&dc]}return Ia(d,{setup:m,mount:function(){s(vs,g),s(vs,m),s(bs,y),c(document,"touchstart mousedown keydown",(function(e){o="keydown"===e.type}),{capture:!0}),c(l,"focusin",(function(){ma(l,gc,!!o)}))},destroy:g})},Slides:function(e,t,n){var i=As(e),r=i.on,o=i.emit,a=i.bind,s=t.Elements,c=s.slides,l=s.list,u=[];function d(){c.forEach((function(e,t){p(e,t,-1)}))}function f(){m((function(e){e.destroy()})),Yo(u)}function p(t,n,i){var r=Ec(e,n,i,t);r.mount(),u.push(r)}function h(e){return e?g((function(e){return!e.isClone})):u}function m(e,t){h(t).forEach(e)}function g(e){return u.filter(aa(e)?e:function(t){return sa(e)?ba(t.slide,e):pa(da(e),t.index)})}return{mount:function(){d(),r(vs,f),r(vs,d),r([ss,vs],(function(){u.sort((function(e,t){return e.index-t.index}))}))},destroy:f,update:function(){m((function(e){e.update()}))},register:p,get:h,getIn:function(e){var i=t.Controller,r=i.toIndex(e),o=i.hasFocus()?1:n.perPage;return g((function(e){return Za(e.index,r,r+o-1)}))},getAt:function(e){return g(e)[0]},add:function(e,t){fa(e,(function(e){if(sa(e)&&(e=za(e)),ua(e)){var i=c[t];i?va(e,i):ya(l,e),ga(e,n.classes.slide),function(e,t){var n=ja(e,"img"),i=n.length;i?n.forEach((function(e){a(e,"load error",(function(){--i||t()}))})):t()}(e,Zo(o,ws))}})),o(vs)},remove:function(e){Da(g(e).map((function(e){return e.slide}))),o(vs)},forEach:m,filter:g,style:function(e,t,n){m((function(i){i.style(e,t,n)}))},getLength:function(e){return e?c.length:u.length},isEnough:function(){return u.length>n.perPage}}},Layout:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.bind,c=o.emit,l=t.Slides,u=t.Direction.resolve,d=t.Elements,f=d.root,p=d.track,h=d.list,m=l.getAt,g=l.style;function y(){r=null,i=n.direction===Ds,Aa(f,"maxWidth",$a(n.width)),Aa(p,u("paddingLeft"),b(!1)),Aa(p,u("paddingRight"),b(!0)),v()}function v(){var e=Pa(f);r&&r.width===e.width&&r.height===e.height||(Aa(p,"height",function(){var e="";i&&(Va(e=w(),"height or heightRatio is missing."),e="calc("+e+" - "+b(!1)+" - "+b(!0)+")");return e}()),g(u("marginRight"),$a(n.gap)),g("width",n.autoWidth?null:$a(n.fixedWidth)||(i?"":x())),g("height",$a(n.fixedHeight)||(i?n.autoHeight?null:x():w()),!0),r=e,c(xs))}function b(e){var t=n.padding,i=u(e?"right":"left");return t&&$a(t[i]||(ra(t)?0:t))||"0px"}function w(){return $a(n.height||Pa(h).width*n.heightRatio)}function x(){var e=$a(n.gap);return"calc((100%"+(e&&" + "+e)+")/"+(n.perPage||1)+(e&&" - "+e)+")"}function k(e,t){var n=m(e);if(n){var i=Pa(n.slide)[u("right")],r=Pa(h)[u("left")];return Ya(i-r)+(t?0:_())}return 0}function _(){var e=m(0);return e&&parseFloat(Aa(e.slide,u("marginRight")))||0}return{mount:function(){var e,t,n;y(),s(window,"resize load",(e=Zo(c,ws),function(){n||(n=Ls(t||0,(function(){e(),n=null}),null,1)).start()})),a([bs,vs],y),a(ws,v)},listSize:function(){return Pa(h)[u("width")]},slideSize:function(e,t){var n=m(e||0);return n?Pa(n.slide)[u("width")]+(t?0:_()):0},sliderSize:function(){return k(e.length-1,!0)-k(-1,!0)},totalSize:k,getPadding:function(e){return parseFloat(Aa(p,u("padding"+(e?"Right":"Left"))))||0}}},Clones:function(e,t,n){var i,r=As(e),o=r.on,a=r.emit,s=t.Elements,c=t.Slides,l=t.Direction.resolve,u=[];function d(){(i=h())&&(!function(t){var i=c.get().slice(),r=i.length;if(r){for(;i.length<t;)ha(i,i);ha(i.slice(-t),i.slice(0,t)).forEach((function(o,a){var l=a<t,d=function(t,i){var r=t.cloneNode(!0);return ga(r,n.classes.clone),r.id=e.root.id+"-clone"+is(i+1),r}(o.slide,a);l?va(d,i[0].slide):ya(s.list,d),ha(u,d),c.register(d,a-t+(l?0:r),o.index)}))}}(i),a(ws))}function f(){Da(u),Yo(u)}function p(){i<h()&&a(vs)}function h(){var i=n.clones;if(e.is(_c)){if(!i){var r=n[l("fixedWidth")]&&t.Layout.slideSize(0);i=r&&Ja(Pa(s.track)[l("width")]/r)||n[l("autoWidth")]&&e.length||2*n.perPage}}else i=0;return i}return{mount:function(){d(),o(vs,f),o(vs,d),o([bs,ws],p)},destroy:f}},Move:function(e,t,n){var i,r=As(e),o=r.on,a=r.emit,s=e.state.set,c=t.Layout,l=c.slideSize,u=c.getPadding,d=c.totalSize,f=c.listSize,p=c.sliderSize,h=t.Direction,m=h.resolve,g=h.orient,y=t.Elements,v=y.list,b=y.track;function w(){t.Controller.isBusy()||(t.Scroll.cancel(),x(e.index),t.Slides.update())}function x(e){k(C(e,!0))}function k(n,i){if(!e.is(Ic)){var r=i?n:function(n){if(e.is(_c)){var i=E(n),r=i>t.Controller.getEnd();(i<0||r)&&(n=_(n,r))}return n}(n);Aa(v,"transform","translate"+m("X")+"("+r+"px)"),n!==r&&a(ds)}}function _(e,t){var n=e-N(t),i=p();return e-=g(i*(Ja(Ya(n)/i)||1))*(t?1:-1)}function I(){k(S()),i.cancel()}function E(e){for(var n=t.Slides.get(),i=0,r=1/0,o=0;o<n.length;o++){var a=n[o].index,s=Ya(C(a,!0)-e);if(!(s<=r))break;r=s,i=a}return i}function C(t,i){var r=g(d(t-1)-function(e){var t=n.focus;return"center"===t?(f()-l(e,!0))/2:+t*l(e)||0}(t));return i?function(t){n.trimSpace&&e.is(kc)&&(t=es(t,0,g(p()-f())));return t}(r):r}function S(){var e=m("left");return Pa(v)[e]-Pa(b)[e]+g(u(!1))}function N(e){return C(e?t.Controller.getEnd():0,!!n.trimSpace)}return{mount:function(){i=t.Transition,o([ss,xs,bs,vs],w)},move:function(e,t,n,r){var o,c;e!==t&&(o=e>n,c=g(_(S(),o)),o?c>=0:c<=v[m("scrollWidth")]-Pa(b)[m("width")])&&(I(),k(_(S(),e>n),!0)),s(4),a(ls,t,n,e),i.start(t,(function(){s(3),a(us,t,n,e),r&&r()}))},jump:x,translate:k,shift:_,cancel:I,toIndex:E,toPosition:C,getPosition:S,getLimit:N,exceededLimit:function(e,t){t=ca(t)?S():t;var n=!0!==e&&g(t)<g(N(!1)),i=!1!==e&&g(t)>g(N(!0));return n||i},reposition:w}},Controller:function(e,t,n){var i,r,o,a=As(e).on,s=t.Move,c=s.getPosition,l=s.getLimit,u=s.toPosition,d=t.Slides,f=d.isEnough,p=d.getLength,h=e.is(_c),m=e.is(kc),g=Zo(x,!1),y=Zo(x,!0),v=n.start||0,b=v;function w(){i=p(!0),r=n.perMove,o=n.perPage;var e=es(v,0,i-1);e!==v&&(v=e,s.reposition())}function x(e,t){var n=r||(N()?1:o),i=k(v+n*(e?-1:1),v,!(r||N()));return-1===i&&m&&!Qa(c(),l(!e),1)?e?0:I():t?i:_(i)}function k(t,a,s){if(f()){var l=I(),d=function(t){if(m&&"move"===n.trimSpace&&t!==v)for(var i=c();i===u(t,!0)&&Za(t,0,e.length-1,!n.rewind);)t<v?--t:++t;return t}(t);d!==t&&(a=t,t=d,s=!1),t<0||t>l?t=r||!Za(0,t,a,!0)&&!Za(l,a,t,!0)?h?s?t<0?-(i%o||o):i:t:n.rewind?t<0?l:0:-1:E(C(t)):s&&t!==a&&(t=E(C(a)+(t<a?-1:1)))}else t=-1;return t}function _(e){return h?(e+i)%i||0:e}function I(){return Ka(i-(N()||h&&r?1:o),0)}function E(e){return es(N()?e:o*e,0,I())}function C(e){return N()?e:Ga((e>=I()?i-1:e)/o)}function S(e){e!==v&&(b=v,v=e)}function N(){return!ca(n.focus)||n.isNavigation}function T(){return e.state.is([4,5])&&!!n.waitForTransition}return{mount:function(){w(),a([bs,vs],w)},go:function(e,t,n){if(!T()){var i=function(e){var t=v;if(sa(e)){var n=e.match(/([+\-<>])(\d+)?/)||[],i=n[1],r=n[2];"+"===i||"-"===i?t=k(v+ +(""+i+(+r||1)),v):">"===i?t=r?E(+r):g(!0):"<"===i&&(t=y(!0))}else t=h?e:es(e,0,I());return t}(e),r=_(i);r>-1&&(t||r!==v)&&(S(r),s.move(i,r,b,n))}},scroll:function(e,n,i,r){t.Scroll.scroll(e,n,i,(function(){S(_(s.toIndex(c()))),r&&r()}))},getNext:g,getPrev:y,getAdjacent:x,getEnd:I,setIndex:S,getIndex:function(e){return e?b:v},toIndex:E,toPage:C,toDest:function(e){var t=s.toIndex(e);return m?es(t,0,I()):t},hasFocus:N,isBusy:T}},Arrows:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.bind,c=o.emit,l=n.classes,u=n.i18n,d=t.Elements,f=t.Controller,p=d.arrows,h=d.track,m=p,g=d.prev,y=d.next,v={};function b(){!function(){var e=n.arrows;!e||g&&y||(m=p||Ta("div",l.arrows),g=_(!0),y=_(!1),i=!0,ya(m,[g,y]),!p&&va(m,h));g&&y&&(Ia(v,{prev:g,next:y}),La(m,e?"":"none"),ga(m,r="splide__arrows--"+n.direction),e&&(a([us,vs,_s],I),s(y,"click",Zo(k,">")),s(g,"click",Zo(k,"<")),I(),Na([g,y],Fs,h.id),c(Es,g,y)))}(),a(bs,w)}function w(){x(),b()}function x(){o.destroy(),Fa(m,r),i?(Da(p?[g,y]:m),g=y=null):Sa([g,y],Qs)}function k(e){f.go(e,!0)}function _(e){return za('<button class="'+l.arrow+" "+(e?l.prev:l.next)+'" type="button"><svg xmlns="'+'http://www.w3.org/2000/svg" viewBox="0 0 '+"40 "+'40" width="'+'40" height="'+'40" focusable="false"><path d="'+(n.arrowPath||Cc)+'" />')}function I(){var t=e.index,n=f.getPrev(),i=f.getNext(),r=n>-1&&t<n?u.last:u.prev,o=i>-1&&t>i?u.first:u.next;g.disabled=n<0,y.disabled=i<0,Na(g,Hs,r),Na(y,Hs,o),c("arrows:updated",g,y,n,i)}return{arrows:v,mount:b,destroy:x}},Autoplay:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.bind,c=o.emit,l=Ls(n.interval,e.go.bind(e,">"),(function(e){var t=d.bar;t&&Aa(t,"width",100*e+"%"),c("autoplay:playing",e)})),u=l.isPaused,d=t.Elements,f=t.Elements,p=f.root,h=f.toggle,m=n.autoplay,g="pause"===m;function y(){u()&&t.Slides.isEnough()&&(l.start(!n.resetProgress),r=i=g=!1,w(),c(Ss))}function v(e){void 0===e&&(e=!0),g=!!e,w(),u()||(l.pause(),c(Ns))}function b(){g||(i||r?v(!1):y())}function w(){h&&(ma(h,dc,!g),Na(h,Hs,n.i18n[g?"play":"pause"]))}function x(e){var i=t.Slides.getAt(e);l.set(i&&+Oa(i.slide,"data-splide-interval")||n.interval)}return{mount:function(){m&&(!function(){n.pauseOnHover&&s(p,"mouseenter mouseleave",(function(e){i="mouseenter"===e.type,b()}));n.pauseOnFocus&&s(p,"focusin focusout",(function(e){r="focusin"===e.type,b()}));h&&s(h,"click",(function(){g?y():v(!0)}));a([ls,ks,vs],l.rewind),a(ls,x)}(),h&&Na(h,Fs,d.track.id),g||y(),w())},destroy:l.cancel,play:y,pause:v,isPaused:u}},Cover:function(e,t,n){var i=As(e).on;function r(e){t.Slides.forEach((function(t){var n=xa(t.container||t.slide,"img");n&&n.src&&o(e,n,t)}))}function o(e,t,n){n.style("background",e?'center/cover no-repeat url("'+t.src+'")':"",!0),La(t,e?"none":"")}return{mount:function(){n.cover&&(i(Ts,Zo(o,!0)),i([ss,bs,vs],Zo(r,!0)))},destroy:Zo(r,!1)}},Scroll:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.emit,c=e.state.set,l=t.Move,u=l.getPosition,d=l.getLimit,f=l.exceededLimit,p=l.translate,h=1;function m(e,n,o,a,d){var f=u();if(v(),o){var p=t.Layout.sliderSize(),m=ts(e)*p*Ga(Ya(e)/p)||0;e=l.toPosition(t.Controller.toDest(e%p))+m}var b=Qa(f,e,1);h=1,n=b?0:n||Ka(Ya(e-f)/1.5,800),r=a,i=Ls(n,g,Zo(y,f,e,d),1),c(5),s(ks),i.start()}function g(){c(3),r&&r(),s(_s)}function y(t,i,o,a){var s=u(),c=t+(i-t)*function(e){var t=n.easingFunc;return t?t(e):1-Math.pow(1-e,4)}(a),l=(c-s)*h;p(s+l),e.is(kc)&&!o&&f()&&(h*=.6,Ya(l)<10&&m(d(f(!0)),600,!1,r,!0))}function v(){i&&i.cancel()}function b(){i&&!i.isPaused()&&(v(),g())}return{mount:function(){a(ls,v),a([bs,vs],b)},destroy:v,scroll:m,cancel:b}},Drag:function(e,t,n){var i,r,o,a,s,c,l,u,d=As(e),f=d.on,p=d.emit,h=d.bind,m=d.unbind,g=e.state,y=t.Move,v=t.Scroll,b=t.Controller,w=t.Elements.track,x=t.Media.reduce,k=t.Direction,_=k.resolve,I=k.orient,E=y.getPosition,C=y.exceededLimit,S=!1;function N(){var e=n.drag;U(!e),a="free"===e}function T(e){if(c=!1,!l){var t=B(e);i=e.target,r=n.noDrag,ba(i,".splide__pagination__page, .splide__arrow")||r&&ba(i,r)||!t&&e.button||(b.isBusy()?Ba(e,!0):(u=t?w:window,s=g.is([4,5]),o=null,h(u,wc,A,Sc),h(u,xc,L,Sc),y.cancel(),v.cancel(),O(e)))}var i,r}function A(t){if(g.is(6)||(g.set(6),p("drag")),t.cancelable)if(s){y.translate(i+M(t)/(S&&e.is(kc)?5:1));var r=P(t)>200,o=S!==(S=C());(r||o)&&O(t),c=!0,p("dragging"),Ba(t)}else(function(e){return Ya(M(e))>Ya(M(e,!0))})(t)&&(s=function(e){var t=n.dragMinThreshold,i=ra(t),r=i&&t.mouse||0,o=(i?t.touch:+t)||10;return Ya(M(e))>(B(e)?o:r)}(t),Ba(t))}function L(i){g.is(6)&&(g.set(3),p("dragged")),s&&(!function(i){var r=function(t){if(e.is(_c)||!S){var n=P(t);if(n&&n<200)return M(t)/n}return 0}(i),o=function(e){return E()+ts(e)*Xa(Ya(e)*(n.flickPower||600),a?1/0:t.Layout.listSize()*(n.flickMaxPages||1))}(r),s=n.rewind&&n.rewindByDrag;x(!1),a?b.scroll(o,0,n.snap):e.is(Ic)?b.go(I(ts(r))<0?s?"<":"-":s?">":"+"):e.is(kc)&&S&&s?b.go(C(!0)?">":"<"):b.go(b.toDest(o),!0);x(!0)}(i),Ba(i)),m(u,wc,A),m(u,xc,L),s=!1}function R(e){!l&&c&&Ba(e,!0)}function O(e){o=r,r=e,i=E()}function M(e,t){return z(e,t)-z(D(e),t)}function P(e){return Wa(e)-Wa(D(e))}function D(e){return r===e&&o||r}function z(e,t){return(B(e)?e.changedTouches[0]:e)["page"+_(t?"Y":"X")]}function B(e){return"undefined"!=typeof TouchEvent&&e instanceof TouchEvent}function U(e){l=e}return{mount:function(){h(w,wc,ta,Sc),h(w,xc,ta,Sc),h(w,bc,T,Sc),h(w,"click",R,{capture:!0}),h(w,"dragstart",Ba),f([ss,bs],N)},disable:U,isDragging:function(){return s}}},Keyboard:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.bind,c=o.unbind,l=e.root,u=t.Direction.resolve;function d(){var e=n.keyboard;e&&(i="global"===e?window:l,s(i,Ac,h))}function f(){c(i,Ac)}function p(){var e=r;r=!0,ea((function(){r=e}))}function h(t){if(!r){var n=Tc(t);n===u(Rs)?e.go("<"):n===u(Os)&&e.go(">")}}return{mount:function(){d(),a(bs,f),a(bs,d),a(ls,p)},destroy:f,disable:function(e){r=e}}},LazyLoad:function(e,t,n){var i=As(e),r=i.on,o=i.off,a=i.bind,s=i.emit,c="sequential"===n.lazyLoad,l=[ss,vs,us,_s],u=[];function d(){Yo(u),t.Slides.forEach((function(e){ja(e.slide,"[data-splide-lazy], [data-splide-lazy-srcset]").forEach((function(t){var i=Oa(t,Lc),r=Oa(t,Rc);if(i!==t.src||r!==t.srcset){var o=n.classes.spinner,a=t.parentElement,s=xa(a,"."+o)||Ta("span",o,a);u.push([t,e,s]),t.src||La(t,"none")}}))})),c&&m()}function f(){(u=u.filter((function(t){var i=n.perPage*((n.preloadPages||1)+1)-1;return!t[1].isWithin(e.index,i)||p(t)}))).length||o(l)}function p(e){var t=e[0];ga(e[1].slide,mc),a(t,"load error",Zo(h,e)),Na(t,"src",Oa(t,Lc)),Na(t,"srcset",Oa(t,Rc)),Sa(t,Lc),Sa(t,Rc)}function h(e,t){var n=e[0],i=e[1];Fa(i.slide,mc),"error"!==t.type&&(Da(e[2]),La(n,""),s(Ts,n,i),s(ws)),c&&m()}function m(){u.length&&p(u.shift())}return{mount:function(){n.lazyLoad&&(d(),r(vs,d),c||r(l,f))},destroy:Zo(Yo,u)}},Pagination:function(e,t,n){var i,r,o=As(e),a=o.on,s=o.emit,c=o.bind,l=t.Slides,u=t.Elements,d=t.Controller,f=d.hasFocus,p=d.getIndex,h=d.go,m=t.Direction.resolve,g=[];function y(){i&&(Da(u.pagination?Qo(i.children):i),Fa(i,r),Yo(g),i=null),o.destroy()}function v(e){h(">"+e,!0)}function b(e,t){var n=g.length,i=Tc(t),r=w(),o=-1;i===m(Os,!1,r)?o=++e%n:i===m(Rs,!1,r)?o=(--e+n)%n:"Home"===i?o=0:"End"===i&&(o=n-1);var a=g[o];a&&(Ra(a.button),h(">"+o),Ba(t,!0))}function w(){return n.paginationDirection||n.direction}function x(e){return g[d.toPage(e)]}function k(){var e=x(p(!0)),t=x(p());if(e){var n=e.button;Fa(n,dc),Sa(n,$s),Na(n,js,-1)}if(t){var r=t.button;ga(r,dc),Na(r,$s,!0),Na(r,js,"")}s("pagination:updated",{list:i,items:g},e,t)}return{items:g,mount:function t(){y(),a([bs,vs],t),n.pagination&&l.isEnough()&&(a([ls,ks,_s],k),function(){var t=e.length,o=n.classes,a=n.i18n,s=n.perPage,d=f()?t:Ja(t/s);ga(i=u.pagination||Ta("ul",o.pagination,u.track.parentElement),r="splide__pagination--"+w()),Na(i,Us,"tablist"),Na(i,Hs,a.select),Na(i,Xs,w()===Ds?"vertical":"");for(var p=0;p<d;p++){var h=Ta("li",null,i),m=Ta("button",{class:o.page,type:"button"},h),y=l.getIn(p).map((function(e){return e.slide.id})),x=!f()&&s>1?a.pageX:a.slideX;c(m,"click",Zo(v,p)),n.paginationKeyboard&&c(m,"keydown",Zo(b,p)),Na(h,Us,"presentation"),Na(m,Us,"tab"),Na(m,Fs,y.join(" ")),Na(m,Hs,ns(x,p+1)),Na(m,js,-1),g.push({li:h,button:m,page:p})}}(),k(),s("pagination:mounted",{list:i,items:g},x(e.index)))},destroy:y,getAt:x,update:k}},Sync:function(e,t,n){var i=n.isNavigation,r=n.slideFocus,o=[];function a(){e.splides.forEach((function(t){t.isParent||(c(e,t.splide),c(t.splide,e))})),i&&function(){var t=As(e),n=t.on;n(fs,u),n(ys,d),n([ss,bs],l),o.push(t),t.emit(Cs,e.splides)}()}function s(){o.forEach((function(e){e.destroy()})),Yo(o)}function c(e,t){var n=As(e);n.on(ls,(function(e,n,i){t.go(t.is(_c)?i:e)})),o.push(n)}function l(){Na(t.Elements.list,Xs,n.direction===Ds?"vertical":"")}function u(t){e.go(t.index)}function d(e,t){pa(Oc,Tc(t))&&(u(e),Ba(t))}return{setup:function(){e.options={slideFocus:ca(r)?i:r}},mount:a,destroy:s,remount:function(){s(),a()}}},Wheel:function(e,t,n){var i=As(e).bind,r=0;function o(i){if(i.cancelable){var o=i.deltaY,a=o<0,s=Wa(i),c=n.wheelMinThreshold||0,l=n.wheelSleep||0;Ya(o)>c&&s-r>l&&(e.go(a?"<":">"),r=s),function(i){return!n.releaseWheel||e.state.is(4)||-1!==t.Controller.getAdjacent(i)}(a)&&Ba(i)}}return{mount:function(){n.wheel&&i(t.Elements.track,"wheel",o,Sc)}}},Live:function(e,t,n){var i=As(e).on,r=t.Elements.track,o=n.live&&!n.isNavigation,a=Ta("span","splide__sr"),s=Ls(90,Zo(c,!1));function c(e){Na(r,Js,e),e?(ya(r,a),s.start()):Da(a)}function l(e){o&&Na(r,Gs,e?"off":"polite")}return{mount:function(){o&&(l(!t.Autoplay.isPaused()),Na(r,Ys,!0),a.textContent="…",i(Ss,Zo(l,!0)),i(Ns,Zo(l,!1)),i([us,_s],Zo(c,!0)))},disable:l,destroy:function(){Sa(r,[Gs,Ys,Js]),Da(a)}}}}),Pc={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:vc,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function Dc(e,t,n){var i=As(e).on;return{mount:function(){i([ss,vs],(function(){ea((function(){t.Slides.style("transition","opacity "+n.speed+"ms "+n.easing)}))}))},start:function(e,n){var i=t.Elements.track;Aa(i,"height",$a(Pa(i).height)),ea((function(){n(),Aa(i,"height","")}))},cancel:ta}}function zc(e,t,n){var i,r=As(e).bind,o=t.Move,a=t.Controller,s=t.Scroll,c=t.Elements.list,l=Zo(Aa,c,"transition");function u(){l(""),s.cancel()}return{mount:function(){r(c,"transitionend",(function(e){e.target===c&&i&&(u(),i())}))},start:function(t,r){var c=o.toPosition(t,!0),u=o.getPosition(),d=function(t){var i=n.rewindSpeed;if(e.is(kc)&&i){var r=a.getIndex(!0),o=a.getEnd();if(0===r&&t>=o||r>=o&&0===t)return i}return n.speed}(t);Ya(c-u)>=1&&d>=1?n.useScroll?s.scroll(c,d,!1,r):(l("transform "+d+"ms "+n.easing),o.translate(c,!0),i=r):(o.jump(t),r())},cancel:u}}var Bc=function(){function e(t,n){var i;this.event=As(),this.Components={},this.state=(i=1,{set:function(e){i=e},is:function(e){return pa(da(e),i)}}),this.splides=[],this._o={},this._E={};var r=sa(t)?Ua(document,t):t;Va(r,r+" is invalid."),this.root=r,n=Ea({label:Oa(r,Hs)||"",labelledby:Oa(r,qs)||""},Pc,e.defaults,n||{});try{Ea(n,JSON.parse(Oa(r,qa)))}catch(e){Va(!1,"Invalid JSON")}this._o=Object.create(Ea({},n))}var t,n,i,r=e.prototype;return r.mount=function(e,t){var n=this,i=this.state,r=this.Components;return Va(i.is([1,7]),"Already mounted!"),i.set(1),this._C=r,this._T=t||this._T||(this.is(Ic)?Dc:zc),this._E=e||this._E,_a(Ia({},Mc,this._E,{Transition:this._T}),(function(e,t){var i=e(n,r,n._o);r[t]=i,i.setup&&i.setup()})),_a(r,(function(e){e.mount&&e.mount()})),this.emit(ss),ga(this.root,"is-initialized"),i.set(3),this.emit(cs),this},r.sync=function(e){return this.splides.push({splide:e}),e.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),e.Components.Sync.remount()),this},r.go=function(e){return this._C.Controller.go(e),this},r.on=function(e,t){return this.event.on(e,t),this},r.off=function(e){return this.event.off(e),this},r.emit=function(e){var t;return(t=this.event).emit.apply(t,[e].concat(Qo(arguments,1))),this},r.add=function(e,t){return this._C.Slides.add(e,t),this},r.remove=function(e){return this._C.Slides.remove(e),this},r.is=function(e){return this._o.type===e},r.refresh=function(){return this.emit(vs),this},r.destroy=function(e){void 0===e&&(e=!0);var t=this.event,n=this.state;return n.is(1)?As(this).on(cs,this.destroy.bind(this,e)):(_a(this._C,(function(t){t.destroy&&t.destroy(e)}),!0),t.emit(Is),t.destroy(),e&&Yo(this.splides),n.set(7)),this},t=e,(n=[{key:"options",get:function(){return this._o},set:function(e){this._C.Media.set(e,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}])&&Ko(t.prototype,n),i&&Ko(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Uc=Bc;Uc.defaults={},Uc.STATES=Jo;function jc({vote_average:e,vote_count:t,popularity:n,original_title:i,genres:r,runtime:o,title:a,overview:s,poster_path:c},l){const u=`\n\n        <div class="modal_poster">\n                <img class="modal_poster__img" src="${`https://image.tmdb.org/t/p/original${c}`}" alt="${a}"/>\n        </div>\n\n        <div class="modal_info anim">\n            <div class="wrapper_info">\n            <h2 class="modal_info__title">${a}</h2>\n\n                <div class="info_data anim" style="--delay: .1s">\n                    <ul class="modal_info__list">\n                        <li class="modal_info__item">Vote / Votes <span class="modal_info_render__item">${e} / ${t}</span></li>\n                        <li class="modal_info__item">Popularity <span class="modal_info_render__item">${n}</span></li>\n                        <li class="modal_info__item">Original Title <span class="modal_info_render__item">${i}</span></li>\n                        <li class="modal_info__item">Genre <span class="modal_info_render__item">${r.map((e=>e.name)).join(" / ")}</span></li>\n                        <li class="modal_info__item">Duration <span class="modal_info_render__item">${o}m</span></li>\n                    </ul>\n                </div>\n            </div>\n\n            <div class="wrapper_about anim" style="--delay: .2s">\n            <h3 class="about__title">About</h3>\n            <p class="about__description">${s}</p>\n            </div>\n\n            <div class="wrapper_btn anim" style="--delay: .4s">\n                <button class="modal_btn btn_add" type="button">\n                </button>\n              \n                <button class="modal_btn btn_queue" type="button">\n                </button>\n            </div>\n            \n        </div>`;l.insertAdjacentHTML("beforeend",u)}const Fc=e=>null===localStorage.getItem(e)?[]:JSON.parse(localStorage.getItem(e)),Wc=(e,t)=>t.includes(e),$c=()=>document.querySelector(".btn_add"),Hc=()=>document.querySelector(".btn_queue"),qc=e=>{e?($c().classList.add("is-active"),$c().removeEventListener("click",Xc),$c().addEventListener("click",Gc)):($c().classList.remove("is-active"),$c().removeEventListener("click",Gc),$c().addEventListener("click",Xc)),$c().textContent=e?"REMOVE FROM WATCHED":"ADD TO WATCHED"},Vc=e=>{e?(Hc().classList.add("is-active"),Hc().removeEventListener("click",Kc),Hc().addEventListener("click",Jc)):(Hc().classList.remove("is-active"),Hc().removeEventListener("click",Jc),Hc().addEventListener("click",Kc)),Hc().textContent=e?"REMOVE FROM QUEUE":"ADD TO QUEUE"},Xc=()=>{nl.push(tl),localStorage.setItem(il,JSON.stringify(nl)),qc(!0)},Kc=()=>{el.push(tl),localStorage.setItem(rl,JSON.stringify(el)),Vc(!0)},Gc=()=>{const e=nl.indexOf(tl);nl.splice(e,1),localStorage.setItem(il,JSON.stringify(nl)),qc(!1)},Jc=()=>{const e=el.indexOf(tl);el.splice(e,1),localStorage.setItem(rl,JSON.stringify(el)),Vc(!1)},Yc=document.querySelector(".overlay"),Qc=document.querySelector(".modal_movie_card"),Zc=document.querySelector(".modal_template");let el=[],tl=0,nl=[];const il="watched-movies",rl="queued-movies",ol=new m;async function al(e){if("SPAN"===e.target.nodeName)return;Zc.classList.add("hide"),Yc.classList.remove("is-hidden");const t=e.target.closest("[id]");ol.movieId=t.id,tl=t.id;const n=await ol.fetchMovieForId();n||Zc.classList.remove("hide"),jc(n,Qc),nl=Fc(il),el=Fc(rl);const i=Wc(tl,nl),r=Wc(tl,el);qc(i),Vc(r)}var sl,cl=/^\s+|\s+$/g,ll=/^[-+]0x[0-9a-f]+$/i,ul=/^0b[01]+$/i,dl=/^0o[0-7]+$/i,fl=parseInt,pl="object"==typeof n&&n&&n.Object===Object&&n,hl="object"==typeof self&&self&&self.Object===Object&&self,ml=pl||hl||Function("return this")(),gl=Object.prototype.toString,yl=Math.max,vl=Math.min,bl=function(){return ml.Date.now()};function wl(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function xl(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==gl.call(e)}(e))return NaN;if(wl(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=wl(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(cl,"");var n=ul.test(e);return n||dl.test(e)?fl(e.slice(2),n?2:8):ll.test(e)?NaN:+e}sl=function(e,t,n){var i,r,o,a,s,c,l=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,s=setTimeout(g,t),u?p(e):a}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=o}function g(){var e=bl();if(m(e))return y(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?vl(n,o-(e-l)):n}(e))}function y(e){return s=void 0,f&&i?p(e):(i=r=void 0,a)}function v(){var e=bl(),n=m(e);if(i=arguments,r=this,c=e,n){if(void 0===s)return h(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),a}return t=xl(t)||0,wl(n)&&(u=!!n.leading,o=(d="maxWait"in n)?yl(xl(n.maxWait)||0,t):o,f="trailing"in n?!!n.trailing:f),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=c=r=s=void 0},v.flush=function(){return void 0===s?a:y(bl())},v};const kl={categoryList:document.querySelector('[data-list ="render"]'),mainContainer:document.querySelector(".main-container"),videos:document.querySelector(".videos"),sidebar:document.querySelector(".sidebar"),films:document.querySelector(".main-films"),pageTitle:document.querySelector(".main-header"),logo:document.querySelector(".logo-expand"),discover:document.querySelector('[data-name="discover"]'),trending:document.querySelector('[data-name="trending"]'),playlist:document.querySelector('[data-name="playlist"]'),openModal:document.querySelector("#js-team-modal"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector(".js-backdrop"),pageSubTitle:document.querySelector(".most-watched"),searchBar:document.querySelector(".search-bar"),overlay:document.querySelector(".overlay"),modalCardMovie:document.querySelector(".modal_movie_card"),pageSubTitle:document.querySelector(".most-watched"),modalCloseBtn:document.querySelector(".close-btn-card")};"New video"!==kl.pageTitle.textContent&&(kl.pageTitle.textContent="New video"),window.addEventListener("resize",(function(){window.innerWidth>1279?kl.sidebar.classList.remove("collapse"):kl.sidebar.classList.add("collapse")})),kl.modalCloseBtn.addEventListener("click",d),kl.openModal.addEventListener("click",(function(){window.addEventListener("keydown",c),document.body.classList.add("show-modal")})),kl.closeModalBtn.addEventListener("click",s),kl.backdrop.addEventListener("click",f),kl.logo.addEventListener("click",N),kl.playlist.addEventListener("click",(async function(){document.querySelector(".footer").classList.add("visually-hidden");const e=localStorage.getItem("watched-movies"),t=JSON.parse(e);console.log("watched-movies",t),Q.innerHTML="",Z.classList.add("visually-hidden"),Y.innerHTML="",E(),console.log(t);const n=await J(t);Y.insertAdjacentHTML("beforeend",n),SlickLoader.disable(),document.querySelector(".footer").classList.remove("visually-hidden")})),kl.overlay.addEventListener("click",f),document.addEventListener("keydown",(function(e){"Escape"===e.code&&d()})),addEventListener("DOMContentLoaded",(async function(){g(await v.fetchGenresDescription(),y)}),{once:!0}),addEventListener("DOMContentLoaded",N),kl.categoryList.addEventListener("click",(async function(e){const t=e.target.closest("li[data-id]");document.querySelector(".footer").classList.add("visually-hidden");const n=t.dataset.id;L.innerHTML="",T.innerHTML="",A.textContent=t.firstElementChild.textContent,R.classList.add("visually-hidden"),E();const i=await O.fetchMoviesForGenres(n,1);SlickLoader.disable();const{page:r,results:o,total_results:a}=i,s=I({page:r,itemsPerPage:o.length,totalItems:a});x(i.results,L),document.querySelector(".footer").classList.remove("visually-hidden"),s.on("afterMove",(async({page:e})=>{E();const i=await O.fetchMoviesForGenres(n,e);SlickLoader.disable(),T.innerHTML="",R.classList.add("visually-hidden"),L.innerHTML="",A.textContent=t.firstElementChild.textContent,x(i.results,L)}))})),kl.trending.addEventListener("click",(async function(e){const t=e.target.closest("li[data-name]");E();const n=await B.fetchTrendWeekMovie(1);SlickLoader.disable();const{page:i,results:r,total_results:o}=n,a=I({page:i,itemsPerPage:r.length,totalItems:o});M.innerHTML="",z.classList.add("visually-hidden"),D.innerHTML="",P.textContent=t.firstElementChild.textContent,x(n.results,D),document.querySelector(".footer").classList.remove("visually-hidden"),a.on("afterMove",(async({page:e})=>{E();const n=await B.fetchTrendWeekMovie(e);SlickLoader.disable(),M.innerHTML="",z.classList.add("visually-hidden"),D.innerHTML="",P.textContent=t.firstElementChild.textContent,x(n.results,D)}))})),addEventListener("DOMContentLoaded",(async function(){const e=(await j.fetchTrendDayMovie()).slice(0,2);U.innerHTML="";const t=e.map((e=>{const{title:t,vote_average:n,release_date:i,vote_count:r,poster_path:o,id:a}=e,s=i?i.slice(0,4):"&#128512",c="https://image.tmdb.org/t/p";return`\n    <div class="main-film  anim" id="${a}" style="--delay: .1s">\n        <h2 class="main-film__title">${t}</h2>\n        <div class="video-poster__wrapper">\n          <img class="video-poster lazyload" src="${c}/w342${o}"\n           srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="\n            data-srcset="${c}/w500${o} 500w,            \n            \n            ${c}/w780${o} 780w,\n            ${c}/original${o} 900w,"\n            data-sizes="auto"   \n           alt="${t}" />\n        </div>\n        \n        <div class="main-film__rating">\n            <div class="rating__wrapper">\n                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"\n                    stroke-linejoin="round" class="feather feather-check">\n                    <path d="M20 6L9 17l-5-5" />\n                </svg>\n                <p class="rating-value">${n?n.toFixed(1):"&#128512"}</p>\n            </div>\n            <div class="film-detail">\n                <p class="film-ganre"></p>\n                <p class="film-name"></p>\n                <p class="film-info">${r} views<span class="seperate"></span>${s}</p>\n            </div>\n        </div>\n        <span class="main-film__selection">...</span>\n    </div>`})).join("");var n;n=t,U.insertAdjacentHTML("beforeend",n)})),kl.videos.addEventListener("click",al),kl.films.addEventListener("click",al);kl.searchBar.addEventListener("input",t(sl)((async function(e){e.preventDefault();const t=e.target.value.trim();if(""===t&&(F.innerHTML="",H.classList.add("visually-hidden"),$.innerHTML="",W.classList.add("main-header__search-info"),W.classList.add("main-header__search-accent"),W.textContent="Enter a search value"),0===(await V.fetchSearchMovie(t,1)).results.length)F.innerHTML="",H.classList.add("visually-hidden"),$.innerHTML="",W.classList.add("main-header__search-info"),W.classList.add("main-header__search-accent"),W.textContent=`Oops! We didn't find: "${V.search}". Please try again.`;else{const e=await V.fetchSearchMovie(t,1),{page:n,results:i,total_results:r}=e,o=I({page:n,itemsPerPage:i.length,totalItems:r});F.innerHTML="",H.classList.add("visually-hidden"),$.innerHTML="",W.classList.remove("main-header__search-accent"),W.classList.add("main-header__search-info"),W.textContent=`Are You search: "${V.search}"?`,x(e.results,$),o.on("afterMove",(async({page:e})=>{const n=await V.fetchSearchMovie(t,e);F.innerHTML="",H.classList.add("visually-hidden"),$.innerHTML="",W.classList.remove("main-header__search-accent"),W.classList.add("main-header__search-info"),W.textContent=`Are You search: "${V.search}"?`,x(n.results,$)}))}q.value=""}),750)),new Uc(".splide",{perPage:3,gap:"2rem",breakpoints:{640:{perPage:2,gap:".7rem",height:"6rem"},480:{perPage:1,gap:".7rem",height:"12rem"}}}).mount(),kl.sidebar.addEventListener("click",(function(){let e,t=document.querySelectorAll(".side-menu__item");t.forEach((t=>{t.classList.contains("is-active")&&(e=t)})),t.forEach((t=>{t===event.target.closest("li")&&(e.classList.remove("is-active"),t.classList.add("is-active"),e=t)}))})),Wo(),kl.discover.addEventListener("click",(function(){location.reload()})),kl.logo.addEventListener("click",(function(){location.reload()}))}();
//# sourceMappingURL=index.86e3701e.js.map
