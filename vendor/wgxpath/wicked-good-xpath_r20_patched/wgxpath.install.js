(function(){var h=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}function m(a){var b=n;function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.t=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function q(a,b,c){this.a=a;this.b=b||1;this.d=c||1};function fa(a,b){return a<b?-1:a>b?1:0};var r,ga,ha,ia;function ja(){return h.navigator?h.navigator.userAgent:null}ia=ha=ga=r=!1;var s;if(s=ja()){var ka=h.navigator;r=0==s.lastIndexOf("Opera",0);ga=!r&&(-1!=s.indexOf("MSIE")||-1!=s.indexOf("Trident"));ha=!r&&-1!=s.indexOf("WebKit");ia=!r&&!ha&&!ga&&"Gecko"==ka.product}var t=ga,la=ia,ma=ha;function na(){var a=h.document;return a?a.documentMode:void 0}var oa;
a:{var pa="",u;if(r&&h.opera)var qa=h.opera.version,pa="function"==typeof qa?qa():qa;else if(la?u=/rv\:([^\);]+)(\)|;)/:t?u=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ma&&(u=/WebKit\/(\S+)/),u)var ra=u.exec(ja()),pa=ra?ra[1]:"";if(t){var sa=na();if(sa>parseFloat(pa)){oa=String(sa);break a}}oa=pa}var ta={};
function ua(a){if(!ta[a]){for(var b=0,c=String(oa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var C=p.exec(g)||["","",""],Y=w.exec(l)||["","",""];if(0==C[0].length&&0==Y[0].length)break;b=fa(0==C[1].length?0:parseInt(C[1],10),0==Y[1].length?0:parseInt(Y[1],10))||fa(0==C[2].length,0==Y[2].length)||fa(C[2],
Y[2])}while(0==b)}ta[a]=0<=b}}var va=h.document,wa=va&&t?na()||("CSS1Compat"==va.compatMode?parseInt(oa,10):5):void 0;var v=t&&!(t&&9<=wa),xa=t&&!(t&&8<=wa);function x(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function ya(a,b){var c=xa&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new x(b,a,b.nodeName,c)};function za(a){this.b=a;this.a=0}function Aa(a){a=a.match(Ba);for(var b=0;b<a.length;b++)Ca.test(a[b])&&a.splice(b,1);return new za(a)}var Ba=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Ca=/^\s/;function y(a,b){return a.b[a.a+(b||0)]}function z(a){return a.b[a.a++]}function Da(a){return a.b.length<=a.a};var A=Array.prototype,Ea=A.indexOf?function(a,b,c){return A.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=A.forEach?function(a,b,c){A.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Fa=A.filter?function(a,b,c){return A.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=k(a)?
a.split(""):a,l=0;l<d;l++)if(l in g){var p=g[l];b.call(c,p,l,a)&&(e[f++]=p)}return e},D=A.reduce?function(a,b,c,d){d&&(b=da(b,d));return A.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;B(a,function(c,g){e=b.call(d,e,c,g,a)});return e},Ga=A.some?function(a,b,c){return A.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function Ha(a,b){var c;a:{c=a.length;for(var d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:k(a)?a.charAt(c):a[c]}function Ia(a){return A.concat.apply(A,arguments)}function Ja(a,b,c){return 2>=arguments.length?A.slice.call(a,b):A.slice.call(a,b,c)};!la&&!t||t&&t&&9<=wa||la&&ua("1.9.1");t&&ua("9");function Ka(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function La(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(t&&!(t&&9<=wa)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ma(a,b):!c&&Ka(e,b)?-1*Na(a,b):!d&&Ka(f,a)?Na(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:
a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(h.Range.START_TO_END,d)}function Na(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ma(d,a)}function Ma(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function E(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(v&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),v&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function F(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}xa&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function G(a,b,c,d,e){return(v?Oa:Pa).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new H)}
function Oa(a,b,c,d,e){if(a instanceof I||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Qa(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],l=0;b=f[l++];)F(b,c,d)&&g.push(b);f=g}for(l=0;b=f[l++];)"*"==a&&"!"==b.tagName||J(e,b);return e}Ra(a,b,c,d,e);return e}
function Pa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!t?(b=b.getElementsByName(d),B(b,function(b){a.a(b)&&J(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),B(b,function(b){b.className==d&&a.a(b)&&J(e,b)})):a instanceof K?Ra(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.d()),B(b,function(a){F(a,c,d)&&J(e,a)}));return e}
function Sa(a,b,c,d,e){var f;if((a instanceof I||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Qa(a);if("*"!=g&&(f=Fa(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=Fa(f,function(a){return F(a,c,d)}));B(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||J(e,a)});return e}return Ta(a,b,c,d,e)}function Ta(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.a(b)&&J(e,b);return e}
function Ra(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)F(b,c,d)&&a.a(b)&&J(e,b),Ra(a,b,c,d,e)}function Qa(a){if(a instanceof K){if(8==a.b)return"!";if(null===a.b)return"*"}return a.d()};function H(){this.b=this.a=null;this.i=0}function Ua(a){this.d=a;this.a=this.b=null}function Va(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.d,l=d.d;f==l||f instanceof x&&l instanceof x&&f.a==l.a?(f=c,c=c.a,d=d.a):0<La(c.d,d.d)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.i=g;return a}function Wa(a,b){var c=new Ua(b);c.a=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.i++}
function J(a,b){var c=new Ua(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.i++}function Xa(a){return(a=a.a)?a.d:null}function Ya(a){return(a=Xa(a))?E(a):""}function L(a,b){return new Za(a,!!b)}function Za(a,b){this.d=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function M(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.d};function n(a){this.g=a;this.b=this.e=!1;this.d=null}function N(a){return"\n  "+a.toString().split("\n").join("\n  ")}function $a(a,b){a.e=b}function ab(a,b){a.b=b}function O(a,b){var c=a.a(b);return c instanceof H?+Ya(c):+c}function P(a,b){var c=a.a(b);return c instanceof H?Ya(c):""+c}function Q(a,b){var c=a.a(b);return c instanceof H?!!c.i:!!c};function R(a,b,c){n.call(this,a.g);this.c=a;this.f=b;this.k=c;this.e=b.e||c.e;this.b=b.b||c.b;this.c==bb&&(c.b||c.e||4==c.g||0==c.g||!b.d?b.b||b.e||4==b.g||0==b.g||!c.d||(this.d={name:c.d.name,l:b}):this.d={name:b.d.name,l:c})}m(R);
function S(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof H&&c instanceof H){e=L(b);for(d=M(e);d;d=M(e))for(b=L(c),f=M(b);f;f=M(b))if(a(E(d),E(f)))return!0;return!1}if(b instanceof H||c instanceof H){b instanceof H?e=b:(e=c,c=b);e=L(e);b=typeof c;for(d=M(e);d;d=M(e)){switch(b){case "number":d=+E(d);break;case "boolean":d=!!E(d);break;case "string":d=E(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}R.prototype.a=function(a){return this.c.j(this.f,this.k,a)};R.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+N(this.f);return a+=N(this.k)};function cb(a,b,c,d){this.a=a;this.p=b;this.g=c;this.j=d}cb.prototype.toString=function(){return this.a};var db={};function T(a,b,c,d){if(db.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new cb(a,b,c,d);return db[a.toString()]=a}
T("div",6,1,function(a,b,c){return O(a,c)/O(b,c)});T("mod",6,1,function(a,b,c){return O(a,c)%O(b,c)});T("*",6,1,function(a,b,c){return O(a,c)*O(b,c)});T("+",5,1,function(a,b,c){return O(a,c)+O(b,c)});T("-",5,1,function(a,b,c){return O(a,c)-O(b,c)});T("<",4,2,function(a,b,c){return S(function(a,b){return a<b},a,b,c)});T(">",4,2,function(a,b,c){return S(function(a,b){return a>b},a,b,c)});T("<=",4,2,function(a,b,c){return S(function(a,b){return a<=b},a,b,c)});
T(">=",4,2,function(a,b,c){return S(function(a,b){return a>=b},a,b,c)});var bb=T("=",3,2,function(a,b,c){return S(function(a,b){return a==b},a,b,c,!0)});T("!=",3,2,function(a,b,c){return S(function(a,b){return a!=b},a,b,c,!0)});T("and",2,2,function(a,b,c){return Q(a,c)&&Q(b,c)});T("or",1,2,function(a,b,c){return Q(a,c)||Q(b,c)});function eb(a,b){if(b.a.length&&4!=a.g)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.g);this.c=a;this.f=b;this.e=a.e;this.b=a.b}m(eb);eb.prototype.a=function(a){a=this.c.a(a);return fb(this.f,a)};eb.prototype.toString=function(){var a;a="Filter:"+N(this.c);return a+=N(this.f)};function gb(a,b){if(b.length<a.o)throw Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given");if(null!==a.n&&b.length>a.n)throw Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given");a.s&&B(b,function(b,d){if(4!=b.g)throw Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b);});n.call(this,a.g);this.f=a;this.c=b;$a(this,a.e||Ga(b,function(a){return a.e}));ab(this,a.r&&!b.length||a.q&&!!b.length||Ga(b,function(a){return a.b}))}m(gb);
gb.prototype.a=function(a){return this.f.j.apply(null,Ia(a,this.c))};gb.prototype.toString=function(){var a="Function: "+this.f;if(this.c.length)var b=D(this.c,function(a,b){return a+N(b)},"Arguments:"),a=a+N(b);return a};function hb(a,b,c,d,e,f,g,l,p){this.h=a;this.g=b;this.e=c;this.r=d;this.q=e;this.j=f;this.o=g;this.n=void 0!==l?l:g;this.s=!!p}hb.prototype.toString=function(){return this.h};var ib={};
function U(a,b,c,d,e,f,g,l){if(ib.hasOwnProperty(a))throw Error("Function already created: "+a+".");ib[a]=new hb(a,b,c,d,!1,e,f,g,l)}U("boolean",2,!1,!1,function(a,b){return Q(b,a)},1);U("ceiling",1,!1,!1,function(a,b){return Math.ceil(O(b,a))},1);U("concat",3,!1,!1,function(a,b){return D(Ja(arguments,1),function(b,d){return b+P(d,a)},"")},2,null);U("contains",2,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);return-1!=b.indexOf(a)},2);U("count",1,!1,!1,function(a,b){return b.a(a).i},1,1,!0);
U("false",2,!1,!1,function(){return!1},0);U("floor",1,!1,!1,function(a,b){return Math.floor(O(b,a))},1);U("id",4,!1,!1,function(a,b){function c(a){if(v){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return Ha(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=P(b,a).split(/\s+/),f=[];B(d,function(a){a=c(a);!a||0<=Ea(f,a)||f.push(a)});f.sort(La);var g=new H;B(f,function(a){J(g,a)});return g},1);
U("lang",2,!1,!1,function(){return!1},1);U("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.d},0);U("local-name",3,!1,!0,function(a,b){var c=b?Xa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);U("name",3,!1,!0,function(a,b){var c=b?Xa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);U("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
U("normalize-space",3,!1,!0,function(a,b){return(b?P(b,a):E(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);U("not",2,!1,!1,function(a,b){return!Q(b,a)},1);U("number",1,!1,!0,function(a,b){return b?O(b,a):+E(a.a)},0,1);U("position",1,!0,!1,function(a){return a.b},0);U("round",1,!1,!1,function(a,b){return Math.round(O(b,a))},1);U("starts-with",2,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);return 0==b.lastIndexOf(a,0)},2);U("string",3,!1,!0,function(a,b){return b?P(b,a):E(a.a)},0,1);
U("string-length",1,!1,!0,function(a,b){return(b?P(b,a):E(a.a)).length},0,1);U("substring",3,!1,!1,function(a,b,c,d){c=O(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?O(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=P(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);U("substring-after",3,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
U("substring-before",3,!1,!1,function(a,b,c){b=P(b,a);a=P(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);U("sum",1,!1,!1,function(a,b){for(var c=L(b.a(a)),d=0,e=M(c);e;e=M(c))d+=+E(e);return d},1,1,!0);U("translate",3,!1,!1,function(a,b,c,d){b=P(b,a);c=P(c,a);var e=P(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);U("true",2,!1,!1,function(){return!0},0);function K(a,b){this.f=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function jb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}K.prototype.a=function(a){return null===this.b||this.b==a.nodeType};K.prototype.d=function(){return this.f};
K.prototype.toString=function(){var a="Kind Test: "+this.f;null===this.c||(a+=N(this.c));return a};function kb(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(kb);kb.prototype.a=function(){return this.c};kb.prototype.toString=function(){return"Literal: "+this.c};function I(a,b){this.h=a.toLowerCase();this.c=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}I.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.h&&this.h!=a.nodeName.toLowerCase()?!1:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};I.prototype.d=function(){return this.h};I.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.h};function lb(a){n.call(this,1);this.c=a}m(lb);lb.prototype.a=function(){return this.c};lb.prototype.toString=function(){return"Number: "+this.c};function mb(a,b){n.call(this,a.g);this.f=a;this.c=b;this.e=a.e;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.m||c.c!=nb||(c=c.k,"*"!=c.d()&&(this.d={name:c.d(),l:null}))}}m(mb);function ob(){n.call(this,4)}m(ob);ob.prototype.a=function(a){var b=new H;a=a.a;9==a.nodeType?J(b,a):J(b,a.ownerDocument);return b};ob.prototype.toString=function(){return"Root Helper Expression"};function pb(){n.call(this,4)}m(pb);pb.prototype.a=function(a){var b=new H;J(b,a.a);return b};pb.prototype.toString=function(){return"Context Helper Expression"};
function qb(a){return"/"==a||"//"==a}mb.prototype.a=function(a){var b=this.f.a(a);if(!(b instanceof H))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.i;c++){var e=a[c],f=L(b,e.c.a),g;if(e.e||e.c!=rb)if(e.e||e.c!=sb)for(g=M(f),b=e.a(new q(g));null!=(g=M(f));)g=e.a(new q(g)),b=Va(b,g);else g=M(f),b=e.a(new q(g));else{for(g=M(f);(b=M(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new q(g))}}return b};
mb.prototype.toString=function(){var a;a="Path Expression:"+N(this.f);if(this.c.length){var b=D(this.c,function(a,b){return a+N(b)},"Steps:");a+=N(b)}return a};function tb(a,b){this.a=a;this.b=!!b}
function fb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=L(b),f=b.i,g,l=0;g=M(e);l++){var p=a.b?f-l:l+1;g=d.a(new q(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof H)p=0<g.i;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.d;var w=p.a;if(!w)throw Error("Next must be called at least once before remove.");var C=w.b,w=w.a;C?C.a=w:g.a=w;w?w.b=C:g.b=C;g.i--;p.a=null}}return b}
tb.prototype.toString=function(){return D(this.a,function(a,b){return a+N(b)},"Predicates:")};function V(a,b,c,d){n.call(this,4);this.c=a;this.k=b;this.f=c||new tb([]);this.m=!!d;b=this.f;b=0<b.a.length?b.a[0].d:null;a.b&&b&&(a=b.name,a=v?a.toLowerCase():a,this.d={name:a,l:b.l});a:{a=this.f;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.e||1==c.g||0==c.g){a=!0;break a}a=!1}this.e=a}m(V);
V.prototype.a=function(a){var b=a.a,c=null,c=this.d,d=null,e=null,f=0;c&&(d=c.name,e=c.l?P(c.l,a):null,f=1);if(this.m)if(this.e||this.c!=ub)if(a=L((new V(vb,new K("node"))).a(a)),b=M(a))for(c=this.j(b,d,e,f);null!=(b=M(a));)c=Va(c,this.j(b,d,e,f));else c=new H;else c=G(this.k,b,d,e),c=fb(this.f,c,f);else c=this.j(a.a,d,e,f);return c};V.prototype.j=function(a,b,c,d){a=this.c.d(this.k,a,b,c);return a=fb(this.f,a,d)};
V.prototype.toString=function(){var a;a="Step:"+N("Operator: "+(this.m?"//":"/"));this.c.h&&(a+=N("Axis: "+this.c));a+=N(this.k);if(this.f.a.length){var b=D(this.f.a,function(a,b){return a+N(b)},"Predicates:");a+=N(b)}return a};function wb(a,b,c,d){this.h=a;this.d=b;this.a=c;this.b=d}wb.prototype.toString=function(){return this.h};var xb={};function W(a,b,c,d){if(xb.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new wb(a,b,c,!!d);return xb[a]=b}
W("ancestor",function(a,b){for(var c=new H,d=b;d=d.parentNode;)a.a(d)&&Wa(c,d);return c},!0);W("ancestor-or-self",function(a,b){var c=new H,d=b;do a.a(d)&&Wa(c,d);while(d=d.parentNode);return c},!0);
var nb=W("attribute",function(a,b){var c=new H,d=a.d();if("style"==d&&b.style&&v)return J(c,new x(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof K&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)v?f.nodeValue&&J(c,ya(b,f)):J(c,f);else(f=e.getNamedItem(d))&&(v?f.nodeValue&&J(c,ya(b,f)):J(c,f));return c},!1),ub=W("child",function(a,b,c,d,e){return(v?Sa:Ta).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new H)},!1,!0);W("descendant",G,!1,!0);
var vb=W("descendant-or-self",function(a,b,c,d){var e=new H;F(b,c,d)&&a.a(b)&&J(e,b);return G(a,b,c,d,e)},!1,!0),rb=W("following",function(a,b,c,d){var e=new H;do for(var f=b;f=f.nextSibling;)F(f,c,d)&&a.a(f)&&J(e,f),e=G(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);W("following-sibling",function(a,b){for(var c=new H,d=b;d=d.nextSibling;)a.a(d)&&J(c,d);return c},!1);W("namespace",function(){return new H},!1);
var yb=W("parent",function(a,b){var c=new H;if(9==b.nodeType)return c;if(2==b.nodeType)return J(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&J(c,d);return c},!1),sb=W("preceding",function(a,b,c,d){var e=new H,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,l=f.length;g<l;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var w=0,C=p.length;w<C;w++)b=p[w],F(b,c,d)&&a.a(b)&&J(e,b),e=G(a,b,c,d,e)}return e},!0,!0);
W("preceding-sibling",function(a,b){for(var c=new H,d=b;d=d.previousSibling;)a.a(d)&&Wa(c,d);return c},!0);var zb=W("self",function(a,b){var c=new H;a.a(b)&&J(c,b);return c},!1);function Ab(a){n.call(this,1);this.c=a;this.e=a.e;this.b=a.b}m(Ab);Ab.prototype.a=function(a){return-O(this.c,a)};Ab.prototype.toString=function(){return"Unary Expression: -"+N(this.c)};function Bb(a){n.call(this,4);this.c=a;$a(this,Ga(this.c,function(a){return a.e}));ab(this,Ga(this.c,function(a){return a.b}))}m(Bb);Bb.prototype.a=function(a){var b=new H;B(this.c,function(c){c=c.a(a);if(!(c instanceof H))throw Error("Path expression must evaluate to NodeSet.");b=Va(b,c)});return b};Bb.prototype.toString=function(){return D(this.c,function(a,b){return a+N(b)},"Union Expression:")};function Cb(a,b){this.a=a;this.b=b}function Db(a){for(var b,c=[];;){X(a,"Missing right hand side of binary expression.");b=Eb(a);var d=z(a.a);if(!d)break;var e=(d=db[d]||null)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new R(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new R(c.pop(),c.pop(),b);return b}function X(a,b){if(Da(a.a))throw Error(b);}function Fb(a,b){var c=z(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Gb(a){a=z(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Hb(a){a=z(a.a);if(2>a.length)throw Error("Unclosed literal string");return new kb(a)}function Ib(a){var b=z(a.a),c=b.indexOf(":");if(-1==c)return new I(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new I(b,a)}
function Jb(a){var b,c=[],d;if(qb(y(a.a))){b=z(a.a);d=y(a.a);if("/"==b&&(Da(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new ob;d=new ob;X(a,"Missing next location step.");b=Kb(a,b);c.push(b)}else{a:{b=y(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":z(a.a);b=Db(a);X(a,'unclosed "("');Fb(a,")");break;case '"':case "'":b=Hb(a);break;default:if(isNaN(+b))if(!jb(b)&&/(?![0-9])[\w]/.test(d)&&"("==y(a.a,1)){b=z(a.a);
b=ib[b]||null;z(a.a);for(d=[];")"!=y(a.a);){X(a,"Missing function argument list.");d.push(Db(a));if(","!=y(a.a))break;z(a.a)}X(a,"Unclosed function argument list.");Gb(a);b=new gb(b,d)}else{b=null;break a}else b=new lb(+z(a.a))}"["==y(a.a)&&(d=new tb(Lb(a)),b=new eb(b,d))}if(b)if(qb(y(a.a)))d=b;else return b;else b=Kb(a,"/"),d=new pb,c.push(b)}for(;qb(y(a.a));)b=z(a.a),X(a,"Missing next location step."),b=Kb(a,b),c.push(b);return new mb(d,c)}
function Kb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==y(a.a))return d=new V(zb,new K("node")),z(a.a),d;if(".."==y(a.a))return d=new V(yb,new K("node")),z(a.a),d;var f;if("@"==y(a.a))f=nb,z(a.a),X(a,"Missing attribute name");else if("::"==y(a.a,1)){if(!/(?![0-9])[\w]/.test(y(a.a).charAt(0)))throw Error("Bad token: "+z(a.a));c=z(a.a);f=xb[c]||null;if(!f)throw Error("No axis with name: "+c);z(a.a);X(a,"Missing node name")}else f=ub;c=y(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==
y(a.a,1)){if(!jb(c))throw Error("Invalid node type: "+c);c=z(a.a);if(!jb(c))throw Error("Invalid type name: "+c);Fb(a,"(");X(a,"Bad nodetype");e=y(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Hb(a);X(a,"Bad nodetype");Gb(a);c=new K(c,g)}else c=Ib(a);else if("*"==c)c=Ib(a);else throw Error("Bad token: "+z(a.a));e=new tb(Lb(a),f.a);return d||new V(f,c,e,"//"==b)}
function Lb(a){for(var b=[];"["==y(a.a);){z(a.a);X(a,"Missing predicate expression.");var c=Db(a);b.push(c);X(a,"Unclosed predicate expression.");Fb(a,"]")}return b}function Eb(a){if("-"==y(a.a))return z(a.a),new Ab(Eb(a));var b=Jb(a);if("|"!=y(a.a))a=b;else{for(b=[b];"|"==z(a.a);)X(a,"Missing next union location path."),b.push(Jb(a));a.a.a--;a=new Bb(b)}return a};function Mb(a){switch(a.nodeType){case 1:return ea(Nb,a);case 9:return Mb(a.documentElement);case 2:return a.ownerElement?Mb(a.ownerElement):Ob;case 11:case 10:case 6:case 12:return Ob;default:return a.parentNode?Mb(a.parentNode):Ob}}function Ob(){return null}function Nb(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Nb(a.parentNode,b):null};function Pb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=Aa(a);if(Da(c))throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=Db(new Cb(c,b));if(!Da(c))throw Error("Bad token: "+z(c));this.evaluate=function(a,b){var c=d.a(new q(a));return new Z(c,b)}}
function Z(a,b){if(0==b)if(a instanceof H)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof H))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof H?Ya(a):""+a;break;case 1:this.numberValue=a instanceof H?+Ya(a):+a;break;case 3:this.booleanValue=a instanceof H?0<a.i:!!a;break;case 4:case 5:case 6:case 7:var d=
L(a);c=[];for(var e=M(d);e;e=M(d))c.push(e instanceof x?e.a:e);this.snapshotLength=a.i;this.invalidIteratorState=!1;break;case 8:case 9:d=Xa(a);this.singleNodeValue=d instanceof x?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Z.ANY_TYPE=0;Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Qb(a){this.lookupNamespaceURI=Mb(a)};function Rb(a){a=a||h;var b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Pb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new Pb(a,b)},b.createNSResolver=function(a){return new Qb(a)})}var Sb=["wgxpath","install"],$=h;Sb[0]in $||!$.execScript||$.execScript("var "+Sb[0]);for(var Tb;Sb.length&&(Tb=Sb.shift());)Sb.length||void 0===Rb?$[Tb]?$=$[Tb]:$=$[Tb]={}:$[Tb]=Rb;})()
