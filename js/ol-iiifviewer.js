/* IiifViewer; Copyright (C) 2014 - Klokan Technologies GmbH; Powered by OpenLayers 3 */
(function() {var h,l=l||{},m=this;function aa(){}
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){var b=p(a);return"array"==b||"object"==b&&"number"==typeof a.length}function t(a){return"string"==typeof a}var ba="closure_uid_"+(1E9*Math.random()>>>0),ca=0;function da(a,b,c){return a.call.apply(a.bind,arguments)}
function ea(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return u.apply(null,arguments)}
function z(a,b){var c=a.split("."),d=m;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function A(a,b){function c(){}c.prototype=b.prototype;a.da=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ta=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function B(a,b){return a<b?-1:a>b?1:0};var ga=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(t(a))return t(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=t(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ia=Array.prototype.map?function(a,b,c){return Array.prototype.map.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=t(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e};function ja(a){var b;a:{b=ka;for(var c=a.length,d=t(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:t(a)?a.charAt(b):a[b]};var D;a:{var la=m.navigator;if(la){var ma=la.userAgent;if(ma){D=ma;break a}}D=""};function na(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function oa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function pa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}function qa(a){return null!==a&&"withCredentials"in a}function ra(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}var sa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function ta(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sa.length;f++)c=sa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var ua=-1!=D.indexOf("Opera")||-1!=D.indexOf("OPR"),E=-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"),va=-1!=D.indexOf("Edge"),F=-1!=D.indexOf("Gecko")&&!(-1!=D.toLowerCase().indexOf("webkit")&&-1==D.indexOf("Edge"))&&!(-1!=D.indexOf("Trident")||-1!=D.indexOf("MSIE"))&&-1==D.indexOf("Edge"),G=-1!=D.toLowerCase().indexOf("webkit")&&-1==D.indexOf("Edge");
function wa(){var a=D;if(F)return/rv\:([^\);]+)(\)|;)/.exec(a);if(va)return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(G)return/WebKit\/(\S+)/.exec(a)}function xa(){var a=m.document;return a?a.documentMode:void 0}var ya=function(){if(ua&&m.opera){var a;var b=m.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=wa())&&(a=b?b[1]:"");return E&&(b=xa(),b>parseFloat(a))?String(b):a}(),za={};
function H(a){var b;if(!(b=za[a])){b=0;for(var c=fa(String(ya)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",x=RegExp("(\\d*)(\\D*)","g"),y=RegExp("(\\d*)(\\D*)","g");do{var n=x.exec(g)||["","",""],v=y.exec(k)||["","",""];if(0==n[0].length&&0==v[0].length)break;b=B(0==n[1].length?0:parseInt(n[1],10),0==v[1].length?0:parseInt(v[1],10))||B(0==n[2].length,0==v[2].length)||B(n[2],v[2])}while(0==b)}b=za[a]=0<=b}return b}
var Aa=m.document,Ba=Aa&&E?xa()||("CSS1Compat"==Aa.compatMode?parseInt(ya,10):5):void 0;var Ca=!E||9<=Ba,Da=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||ua&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");function I(){0!=Ea&&(this[ba]||(this[ba]=++ca));this.M=this.M;this.pa=this.pa}var Ea=0;I.prototype.M=!1;function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.j=!1;this.ca=!0}J.prototype.stopPropagation=function(){this.j=!0};J.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ca=!1};function K(a){K[" "](a);return a}K[" "]=aa;function L(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.u=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(F){var f;a:{try{K(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=G||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=G||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,
this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.u=a;a.defaultPrevented&&this.preventDefault()}}A(L,J);L.prototype.stopPropagation=function(){L.da.stopPropagation.call(this);this.u.stopPropagation?this.u.stopPropagation():this.u.cancelBubble=!0};
L.prototype.preventDefault=function(){L.da.preventDefault.call(this);var a=this.u;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Da)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var M="closure_listenable_"+(1E6*Math.random()|0),Fa=0;function Ga(a,b,c,d,e){this.listener=a;this.D=null;this.src=b;this.type=c;this.s=!!d;this.A=e;this.key=++Fa;this.o=this.w=!1}function N(a){a.o=!0;a.listener=null;a.D=null;a.src=null;a.A=null};function O(a){this.src=a;this.f={};this.H=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.f[f];a||(a=this.f[f]=[],this.H++);var g=P(a,b,d,e);-1<g?(b=a[g],c||(b.w=!1)):(b=new Ga(b,this.src,f,!!d,e),b.w=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.f))return!1;var e=this.f[a];b=P(e,b,c,d);return-1<b?(N(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.f[a],this.H--),!0):!1};
function Q(a,b){var c=b.type;if(c in a.f){var d=a.f[c],e=ga(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(N(b),0==a.f[c].length&&(delete a.f[c],a.H--))}}O.prototype.O=function(a,b,c,d){a=this.f[a.toString()];var e=-1;a&&(e=P(a,b,c,d));return-1<e?a[e]:null};O.prototype.hasListener=function(a,b){var c=void 0!==a,d=c?a.toString():"",e=void 0!==b;return na(this.f,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||e&&a[g].s!=b))return!0;return!1})};
function P(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.o&&f.listener==b&&f.s==!!c&&f.A==d)return e}return-1};var Ha="closure_lm_"+(1E6*Math.random()|0),Ia={},Ja=0;function Ka(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Ka(a,b[f],c,d,e);else c=La(c),a&&a[M]?a.i.add(String(b),c,!1,d,e):Ma(a,b,c,!1,d,e)}
function Ma(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=!!e,k=R(a);k||(a[Ha]=k=new O(a));c=k.add(b,c,d,e,f);if(!c.D){d=Na();c.D=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,g);else if(a.attachEvent)a.attachEvent(Oa(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");Ja++}}function Na(){var a=Pa,b=Ca?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}
function Qa(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Qa(a,b[f],c,d,e);else c=La(c),a&&a[M]?a.i.add(String(b),c,!0,d,e):Ma(a,b,c,!0,d,e)}function Ra(a,b,c,d,e){if("array"==p(b))for(var f=0;f<b.length;f++)Ra(a,b[f],c,d,e);else c=La(c),a&&a[M]?a.i.remove(String(b),c,d,e):a&&(a=R(a))&&(b=a.O(b,c,!!d,e))&&Sa(b)}
function Sa(a){if("number"!=typeof a&&a&&!a.o){var b=a.src;if(b&&b[M])Q(b.i,a);else{var c=a.type,d=a.D;b.removeEventListener?b.removeEventListener(c,d,a.s):b.detachEvent&&b.detachEvent(Oa(c),d);Ja--;(c=R(b))?(Q(c,a),0==c.H&&(c.src=null,b[Ha]=null)):N(a)}}}function Oa(a){return a in Ia?Ia[a]:Ia[a]="on"+a}function Ta(a,b,c,d){var e=!0;if(a=R(a))if(b=a.f[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.s==c&&!f.o&&(f=Ua(f,d),e=e&&!1!==f)}return e}
function Ua(a,b){var c=a.listener,d=a.A||a.src;a.w&&Sa(a);return c.call(d,b)}
function Pa(a,b){if(a.o)return!0;if(!Ca){var c;if(!(c=b))a:{c=["window","event"];for(var d=m,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new L(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(x){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.j&&0<=g;g--){c.currentTarget=e[g];var k=Ta(e[g],f,!0,c),d=d&&k}for(g=0;!c.j&&g<e.length;g++)c.currentTarget=
e[g],k=Ta(e[g],f,!1,c),d=d&&k}return d}return Ua(a,new L(b,this))}function R(a){a=a[Ha];return a instanceof O?a:null}var Va="__closure_events_fn_"+(1E9*Math.random()>>>0);function La(a){if("function"==p(a))return a;a[Va]||(a[Va]=function(b){return a.handleEvent(b)});return a[Va]};function Wa(a){for(var b=a.ia,c=a.ja||"jpg",d=a.ua||"native",e=a.width,f=a.height,g=a.tileSize||256,k=Math.max(Math.ceil(Math.log(e/g)/Math.LN2),Math.ceil(Math.log(f/g)/Math.LN2)),x=[],y=0;y<=k;y++){var n=Math.pow(2,k-y);x.push([Math.ceil(Math.ceil(e/n)/g),Math.ceil(Math.ceil(f/n)/g)])}var v=Math.min(window.devicePixelRatio||1,4),y=g/v,n=1==v?a.resolutions:ia(a.resolutions,function(a){return a*v});ol.source.TileImage.call(this,{tilePixelRatio:v,tileGrid:new ol.tilegrid.TileGrid({resolutions:n.reverse(),
origin:[0,0],tileSize:y}),tileUrlFunction:function(a){var w=a[0];if(!(k<w)){var r=x[w];if(r){var C=a[1];a=-a[2]-1;if(!(0>C||r[0]<=C||0>a||r[1]<=a)){w=Math.pow(2,k-w);r=g*w;C*=r;a*=r;var n=Math.min(C+r,e),r=Math.min(a+r,f),n=w*Math.floor(n/w),r=w*Math.floor(r/w);return b+("/"+C+","+a+","+(n-C)+","+(r-a)+"/pct:"+100/w+"/0/"+d+"."+c)}}}},crossOrigin:a.crossOrigin});ol.has.CANVAS&&this.setTileLoadFunction(function(a,b){var c=a.getImage();Qa(c,"load",function(){if(0<c.naturalWidth&&(c.naturalWidth!=g||
c.naturalHeight!=g)){var b=document.createElement(Xa);b.width=g;b.height=g;b.getContext("2d").drawImage(c,0,0);var d=ra(a,function(a){return a==c});d&&(a[d]=b)}},!0);c.src=b})}A(Wa,ol.source.TileImage);!F&&!E||E&&9<=Ba||F&&H("1.9.1");E&&H("9");var Xa="CANVAS";function Ya(){}Ya.prototype.U=null;function Za(a){return a.U||(a.U=a.Y())};var $a;function S(){}A(S,Ya);S.prototype.K=function(){var a=ab(this);return a?new ActiveXObject(a):new XMLHttpRequest};S.prototype.Y=function(){var a={};ab(this)&&(a[0]=!0,a[1]=!0);return a};
function ab(a){if(!a.W&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.W=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.W}$a=new S;function T(){}A(T,Ya);T.prototype.K=function(){var a=new XMLHttpRequest;if("withCredentials"in a)return a;if("undefined"!=typeof XDomainRequest)return new bb;throw Error("Unsupported browser");};T.prototype.Y=function(){return{}};
function bb(){this.g=new XDomainRequest;this.readyState=0;this.responseText=this.onreadystatechange=null;this.status=-1;this.statusText=this.responseXML=null;this.g.onload=u(this.la,this);this.g.onerror=u(this.V,this);this.g.onprogress=u(this.ma,this);this.g.ontimeout=u(this.na,this)}h=bb.prototype;h.open=function(a,b,c){if(null!=c&&!c)throw Error("Only async requests are supported.");this.g.open(a,b)};
h.send=function(a){if(a)if("string"==typeof a)this.g.send(a);else throw Error("Only string data is supported");else this.g.send()};h.abort=function(){this.g.abort()};h.setRequestHeader=function(){};h.getResponseHeader=function(a){return"content-type"==a.toLowerCase()?this.g.contentType:""};h.la=function(){this.status=200;this.responseText=this.g.responseText;cb(this,4)};h.V=function(){this.status=500;this.responseText=null;cb(this,4)};h.na=function(){this.V()};
h.ma=function(){this.status=200;cb(this,1)};function cb(a,b){a.readyState=b;if(a.onreadystatechange)a.onreadystatechange()}h.getAllResponseHeaders=function(){return"content-type: "+this.g.contentType};function U(){I.call(this);this.i=new O(this);this.ga=this;this.aa=null}A(U,I);U.prototype[M]=!0;h=U.prototype;h.addEventListener=function(a,b,c,d){Ka(this,a,b,c,d)};h.removeEventListener=function(a,b,c,d){Ra(this,a,b,c,d)};
h.dispatchEvent=function(a){var b,c=this.aa;if(c)for(b=[];c;c=c.aa)b.push(c);var c=this.ga,d=a.type||a;if(t(a))a=new J(a,c);else if(a instanceof J)a.target=a.target||c;else{var e=a;a=new J(d,c);ta(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.j&&0<=g;g--)f=a.currentTarget=b[g],e=V(f,d,!0,a)&&e;a.j||(f=a.currentTarget=c,e=V(f,d,!0,a)&&e,a.j||(e=V(f,d,!1,a)&&e));if(b)for(g=0;!a.j&&g<b.length;g++)f=a.currentTarget=b[g],e=V(f,d,!1,a)&&e;return e};
function V(a,b,c,d){b=a.i.f[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.o&&g.s==c){var k=g.listener,x=g.A||g.src;g.w&&Q(a.i,g);e=!1!==k.call(x,d)&&e}}return e&&0!=d.ca}h.O=function(a,b,c,d){return this.i.O(String(a),b,c,d)};h.hasListener=function(a,b){return this.i.hasListener(void 0!==a?String(a):void 0,b)};function db(a,b,c){if("function"==p(a))c&&(a=u(a,c));else if(a&&"function"==typeof a.handleEvent)a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:m.setTimeout(a,b||0)};function eb(a){a=String(a);if(/^\s*$/.test(a)?0:/^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g,"")))try{return eval("("+a+")")}catch(b){}throw Error("Invalid JSON string: "+a);};function fb(a){if(a.m&&"function"==typeof a.m)return a.m();if(t(a))return a.split("");if(q(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return oa(a)}
function gb(a,b){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,void 0);else if(q(a)||t(a))ha(a,b,void 0);else{var c;if(a.getKeys&&"function"==typeof a.getKeys)c=a.getKeys();else if(a.m&&"function"==typeof a.m)c=void 0;else if(q(a)||t(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=pa(a);for(var d=fb(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function W(a,b){this.b={};this.c=[];this.h=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}h=W.prototype;h.m=function(){X(this);for(var a=[],b=0;b<this.c.length;b++)a.push(this.b[this.c[b]]);return a};h.getKeys=function(){X(this);return this.c.concat()};
h.equals=function(a,b){if(this===a)return!0;if(this.h!=a.h)return!1;var c=b||hb;X(this);for(var d,e=0;d=this.c[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function hb(a,b){return a===b}h.isEmpty=function(){return 0==this.h};h.clear=function(){this.b={};this.h=this.c.length=0};h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.b,a)?(delete this.b[a],this.h--,this.c.length>2*this.h&&X(this),!0):!1};
function X(a){if(a.h!=a.c.length){for(var b=0,c=0;b<a.c.length;){var d=a.c[b];Object.prototype.hasOwnProperty.call(a.b,d)&&(a.c[c++]=d);b++}a.c.length=c}if(a.h!=a.c.length){for(var e={},c=b=0;b<a.c.length;)d=a.c[b],Object.prototype.hasOwnProperty.call(e,d)||(a.c[c++]=d,e[d]=1),b++;a.c.length=c}}h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.b,a)?this.b[a]:b};h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.b,a)||(this.h++,this.c.push(a));this.b[a]=b};
h.addAll=function(a){var b;a instanceof W?(b=a.getKeys(),a=a.m()):(b=pa(a),a=oa(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};h.forEach=function(a,b){for(var c=this.getKeys(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new W(this)};var ib=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function jb(a){U.call(this);this.headers=new W;this.J=a||null;this.l=!1;this.I=this.a=null;this.C=this.R="";this.v=this.P=this.B=this.N=!1;this.G=0;this.F=null;this.ba=kb;this.T=this.ra=this.sa=!1}A(jb,U);var kb="",lb=/^https?$/i,mb=["POST","PUT"];h=jb.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.R+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.R=a;this.C="";this.N=!1;this.l=!0;this.a=this.J?this.J.K():$a.K();this.I=this.J?Za(this.J):Za($a);this.a.onreadystatechange=u(this.$,this);this.ra&&"onprogress"in this.a&&(this.a.onprogress=u(function(a){this.Z(a,!0)},this),this.a.upload&&(this.a.upload.onprogress=u(this.Z,this)));try{this.P=!0,this.a.open(b,String(a),!0),this.P=!1}catch(f){nb(this,
f);return}a=c||"";var e=this.headers.clone();d&&gb(d,function(a,b){e.set(b,a)});d=ja(e.getKeys());c=m.FormData&&a instanceof m.FormData;!(0<=ga(mb,b))||d||c||e.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");e.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.ba&&(this.a.responseType=this.ba);qa(this.a)&&(this.a.withCredentials=this.sa);try{ob(this),0<this.G&&((this.T=pb(this.a))?(this.a.timeout=this.G,this.a.ontimeout=u(this.ea,this)):this.F=db(this.ea,this.G,
this)),this.B=!0,this.a.send(a),this.B=!1}catch(f){nb(this,f)}};function pb(a){return E&&H(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function ka(a){return"content-type"==a.toLowerCase()}h.ea=function(){"undefined"!=typeof l&&this.a&&(this.C="Timed out after "+this.G+"ms, aborting",this.dispatchEvent("timeout"),this.abort(8))};function nb(a,b){a.l=!1;a.a&&(a.v=!0,a.a.abort(),a.v=!1);a.C=b;qb(a);rb(a)}function qb(a){a.N||(a.N=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(){this.a&&this.l&&(this.l=!1,this.v=!0,this.a.abort(),this.v=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),rb(this))};h.$=function(){this.M||(this.P||this.B||this.v?sb(this):this.qa())};h.qa=function(){sb(this)};
function sb(a){if(a.l&&"undefined"!=typeof l&&(!a.I[1]||4!=Y(a)||2!=tb(a)))if(a.B&&4==Y(a))db(a.$,0,a);else if(a.dispatchEvent("readystatechange"),4==Y(a)){a.l=!1;try{if(ub(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<Y(a)?a.a.statusText:""}catch(c){b=""}a.C=b+" ["+tb(a)+"]";qb(a)}}finally{rb(a)}}}h.Z=function(a,b){this.dispatchEvent(vb(a,"progress"));this.dispatchEvent(vb(a,b?"downloadprogress":"uploadprogress"))};
function vb(a,b){return{type:b,lengthComputable:a.lengthComputable,loaded:a.loaded,total:a.total}}function rb(a){if(a.a){ob(a);var b=a.a,c=a.I[0]?aa:null;a.a=null;a.I=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){}}}function ob(a){a.a&&a.T&&(a.a.ontimeout=null);"number"==typeof a.F&&(m.clearTimeout(a.F),a.F=null)}
function ub(a){var b=tb(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=String(a.R).match(ib)[1]||null,!a&&m.self&&m.self.location&&(a=m.self.location.protocol,a=a.substr(0,a.length-1)),b=!lb.test(a?a.toLowerCase():"");c=b}return c}function Y(a){return a.a?a.a.readyState:0}function tb(a){try{return 2<Y(a)?a.a.status:-1}catch(b){return-1}}
h.getResponseHeader=function(a){return this.a&&4==Y(this)?this.a.getResponseHeader(a):void 0};h.getAllResponseHeaders=function(){return this.a&&4==Y(this)?this.a.getAllResponseHeaders():""};function Z(a,b,c,d,e){var f=document;a=t(a)?f.getElementById(a):a;if(!a)throw Error("Invalid element");this.oa=a;this.L=this.b=null;this.fa=1==d;this.S=e||null;this.X=c||null;this.ka=t(b)?b.substring(0,b.lastIndexOf("/")):null;wb(this,b)}Z.prototype.getMap=function(){return this.b};
function xb(a,b){var c=b.width,d=b.height,e=b["@id"];if(!e){var f=b.image_host,g=b.identifier;f&&g&&(e=f+g)}e||(e=a.ka);if(!e)throw Error("Unable to determine base url");g=(b.tiles||[{}])[0];f=new ol.proj.Projection({code:"IIIF",units:"pixels",extent:[0,-d,c,0]});e=new Wa({ia:e,width:c,height:d,resolutions:b.scale_factors||g.scaleFactors,ja:(b.formats||[])[0],tileSize:b.tile_width||g.width||void 0,projection:f,crossOrigin:a.fa?"":void 0});e=new ol.layer.Tile({source:e});a.b=new ol.Map({layers:[e],
target:a.oa,renderer:a.fa?"webgl":void 0,view:new ol.View({projection:f,extent:[0,-d,c,0]}),interactions:ol.interaction.defaults({mouseWheelZoom:null==a.S}),controls:[],logo:!1});a.S&&a.b.addInteraction(a.S);d=window.location.hash;if(0<d.length&&(0<d.indexOf("lat\x3d")||0<d.indexOf("x\x3d"))){c=[];d=d.split("\x26");d[0]=d[0].substring(1);for(f=0;f<d.length;f++)e=d[f].split("\x3d"),c[e[0]]=e[1];void 0!==c.zoom?(a.b.getView().setCenter([parseFloat(c.lon),parseFloat(c.lat)-a.L.height]),a.b.getView().setZoom(c.zoom)):
(a.b.getView().setCenter([parseFloat(c.y),-parseFloat(c.x)]),a.b.getView().setResolution(c.res))}else a.b.getView().fit(f.getExtent(),a.b.getSize()||null);a.X&&a.X(a)}function wb(a,b){if(t(b)){var c=new jb(new T);Ka(c,"complete",function(){if(ub(c)){var a;a=c.a?eb(c.a.responseText):void 0;wb(this,a)}},!1,a);c.send(b)}else a.L=b,xb(a,b)}
Z.prototype.ha=function(a){if(!1!==a){var b=null!=a.accuracy?a.accuracy:4,c=this.L.height;this.b.on("moveend",function(){var d=this.getView(),e=d.getCenter(),f="",f=parseFloat(e[1]);null!=a.geoFormat&&!1===a.geoFormat?f="res\x3d"+d.getResolution()+"\x26x\x3d"+Math.abs(f.toFixed(b))+"\x26y\x3d"+e[0].toFixed(b):(f+=c,f="zoom\x3d"+d.getZoom()+"\x26lat\x3d"+f.toFixed(b)+"\x26lon\x3d"+e[0].toFixed(b));null!=a.addToEnd&&(f+="\x26"+a.addToEnd);window.location.hash=f})}};z("IiifViewer",Z);z("IiifViewer.prototype.getMap",Z.prototype.getMap);z("IiifViewer.prototype.addPermalink",Z.prototype.ha);z("IiifSource",Wa);})();
