/*! (C) Ionic https://ionicframework.com - Mit License */
(function(u){"use-strict";function q(a){return void 0!==a&&null!==a}function J(a){return"string"===typeof a||"number"===typeof a}function Y(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})}function Z(a){return a.replace(/([A-Z])/g,function(a){return"-"+a[0].toLowerCase()})}function O(){}function aa(a,b){if("child"===b)return a.firstElementChild;if("parent"===b){if(a.parentElement)return a.parentElement;if(a.parentNode&&a.parentNode.host)return a.parentNode.host}return"body"===b?a.ownerDocument.body:
"document"===b?a.ownerDocument:"window"===b?a.ownerDocument.defaultView:a}function ba(a){return"enter"===a?13:"escape"===a?27:"space"===a?32:"tab"===a?9:null}function K(a,b,c,e,f){return{c:a,b:b,i:c,f:e,a:f,o:void 0===b?void 0:b.key}}function P(a,b,c){a.Y="http://www.w3.org/2000/svg";if("foreignObject"!==c&&void 0!==b)for(a=0;a<b.length;++a)c=b[a].b,void 0!==c&&P(c,b[a].i,b[a].c)}function ca(a,b,c){var e={},f,d,g=void 0;a.nodeType&&(g=a);void 0!==c?(e=b,c&&c.constructor===Array?f=c:J(c)?d=c:c&&c.c&&
(f=[c])):void 0!==b&&(b&&b.constructor===Array?f=b:J(b)?d=b:b&&b.c?f=[b]:e=b);if(f&&f.constructor===Array)for(b=0;b<f.length;++b)J(f[b])&&(f[b]=K(void 0,void 0,void 0,f[b]));"s"!==a[0]||"v"!==a[1]||"g"!==a[2]||3!==a.length&&"."!==a[3]&&"#"!==a[3]||P(e,f,a);return K(a,e,f,d,g)}function da(a,b,c,e){if(a&&a.$meta){var f=a.$meta.listeners;if(f)for(var d=a.h=a.h||{},g=Object.keys(f),h=0;h<g.length;h++){var k=g[h],n=f[k];if(n.B===b){c&&!d[b]?d[b]=Q(a.$el,e?e+":"+b:b,a[k].bind(a),n):!c&&d[b]&&(d[b](),delete a.h[b]);
break}}}}function Q(a,b,c,e){if(!a)return O;null===L&&(L=ea(a));var f=L?{capture:!!e.capture,passive:!!e.passive}:!!e.capture;e=b.split(":");1<e.length&&(a=aa(a,e[0]),b=e[1]);e=b.split(".");if(1<e.length){b=e[0];var d=ba(e[1]);if(null!==d){var g=c;c=function(a){a.keyCode===d&&g(a)}}}a.addEventListener(b,c,f);return function(){a&&a.removeEventListener(b,c,f)}}function ea(a){var b=!1;try{var c=Object.defineProperty({},"passive",{get:function(){b=!0}});a.addEventListener("test",null,c)}catch(e){}return b}
function fa(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},e=c["class"]=c["class"]||{},f=a.mode,d=a.color;e[b]=!0;f&&(e[b+"-"+f]=!0,d&&(e[b+"-"+d]=e[b+"-"+f+"-"+d]=!0));return c}function ga(a,b,c,e){if("function"!==typeof a.CustomEvent){var f=function(a,b){b=b||{bubbles:!1,cancelable:!1,detail:void 0};var d=document.createEvent("CustomEvent");d.initCustomEvent(a,b.bubbles,b.cancelable,b.detail);return d};f.prototype=a.Event.prototype;a.CustomEvent=f}return{theme:fa,emit:function(d,
c){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};void 0===e.composed&&(e.composed=!0);b&&(c=b(c));d&&d.$el&&d.$el.dispatchEvent(new a.CustomEvent(c,e))},listener:{enable:da},controllers:{},dom:e,config:c}}function R(a){switch(a){case "0":return"default";case "1":return"ios";case "2":return"md";case "3":return"wp"}return a}function ha(a,b,c,e,f,d,g,h){var k={};Object.keys(g).forEach(function(n){function w(){return k[n]}function l(d){k[n]!==d&&(k[n]=d,m&&m(d),S(a,b,c,e,f))}var m=h[n]?
d[h[n].V].bind(d):null;k[n]=ia(b,e,d,g[n].type,n);Object.defineProperty(e,n,{configurable:!0,get:w,set:l});Object.defineProperty(d,n,{configurable:!0,get:w,set:l})})}function ia(a,b,c,e,f){return void 0!==b[f]?b[f]:void 0!==c[f]?c[f]:0===e?a.getBoolean(f):1===e?a.getNumber(f):a.get(f)}function S(a,b,c,e,f){e.J||(e.J=!0,a.nextTick(function(){var d=a.W(f),g=!1,h=e.u;h||(h=e.u=new d.U,h.$el=e,h.$meta=d,ha(a,b,c,e,f,h,d.props,d.L),a.M(e,d,h),g=!0);if(d.C){var k=h,n=h.l?h.l:e,w=h.w,l=h.render&&h.render();
l&&(l.a=w,delete l.c);k.l=c(n,l)}else g&&h.render&&(k=h.render(),k.a=e,c(e,k,!0));if(g){d=d.listeners;g=h;k=Object.keys(d);for(n=0;n<k.length;n++)w=k[n],l=d[w],!1!==l.enabled&&(g.h=g.h||{},g.h[l.B]=Q(g.$el,l.B,g[w].bind(g),l));h.ionViewDidLoad&&h.ionViewDidLoad()}e.J=!1}))}function ja(a,b,c,e,f){a.nextTick(function(){var d=f.tag,g=f.j[ka(a,b,e)];g||(g=f.j.default);a.X(g.T,f.Z,function(){S(a,b,c,e,d)})})}function ka(a,b,c){var e=c.mode;if(q(e))return e;e=a.R(c,"mode");return q(e)?e:b.get("mode","md")}
function T(a,b){var c,e,f=b.a;a=a.b.attrs;var d=b.b.attrs;if((a||d)&&a!==d){a=a||{};d=d||{};for(c in d)b=d[c],e=a[c],e!==b&&(U[c]?b?f.setAttribute(c,""):f.removeAttribute(c):120!==c.charCodeAt(0)?f.setAttribute(c,b):58===c.charCodeAt(3)?f.setAttributeNS("http://www.w3.org/XML/1998/namespace",c,b):58===c.charCodeAt(5)?f.setAttributeNS("http://www.w3.org/1999/xlink",c,b):f.setAttribute(c,b));for(c in a)c in d||f.removeAttribute(c)}}function V(a,b){var c,e=b.a;a=a.b["class"];var f=b.b["class"];if((a||
f)&&a!==f){a=a||{};f=f||{};for(c in a)f[c]||e.classList.remove(c);for(c in f)if(b=f[c],b!==a[c])e.classList[b?"add":"remove"](c)}}function W(a,b,c){if("function"===typeof a)a.call(b,c,b);else if("object"===typeof a)if("function"===typeof a[0])if(2===a.length)a[0].call(b,a[1],c,b);else{var e=a.slice(1);e.push(c);e.push(b);a[0].apply(b,e)}else for(b=0;b<a.length;b++)W(a[b])}function la(){return function b(c){var e=b.aa,f=c.type,d=e.b.on;d&&d[f]&&W(d[f],e,c)}}function M(a,b){var c=a.b.on,e=a.listener,
f=a.a,d=b&&b.b.on,g=b&&b.a,h;if(c!==d){if(c&&e)if(d)for(h in c)d[h]||f.removeEventListener(h,e,!1);else for(h in c)f.removeEventListener(h,e,!1);if(d)if(a=b.listener=a.listener||la(),a.aa=b,c)for(h in d)c[h]||g.addEventListener(h,a,!1);else for(h in d)g.addEventListener(h,a,!1)}}function X(a,b){var c,e,f=b.a;a=a.b.props;var d=b.b.props;if((a||d)&&a!==d){a=a||{};d=d||{};for(c in a)d[c]||delete f[c];for(c in d)b=d[c],e=a[c],e===b||"value"===c&&f[c]===b||(f[c]=b)}}function H(a,b){return a.o===b.o&&a.c===
b.c}function N(a){var b,c;if(void 0!==a.b&&(M(a),void 0!==a.i))for(c=0;c<a.i.length;++c)b=a.i[c],null==b||"string"===typeof b||N(b)}function C(a,b,c,e,f){var d;d="ionicplatform".replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");if(a=(a=(new RegExp("[\\?&]"+d+"=([^&#]*)")).exec(a))?decodeURIComponent(a[1].replace(/\+/g," ")):null)return a===c;b=b.toLowerCase();for(c=0;c<e.length;c++)if(-1<b.indexOf(e[c])){for(e=0;e<f.length;e++)if(-1<b.indexOf(f[e]))return!1;return!0}return!1}for(var L=null,t="allowfullscreen async autofocus autoplay checked controls disabled draggable enabled formnovalidate hidden multiple noresize readonly required selected spellcheck".split(" "),
U=Object.create(null),x=0,ma=t.length;x<ma;x++)U[t[x]]=!0;var I=K("",{},[],void 0,void 0),t=u.Ionic=u.Ionic||{};t.DomCtrl=function(a){function b(){f=!0;a.requestAnimationFrame(function(a){var d,h,k;try{for(d=performance.now();h=c.shift();)h(a);for(;(h=e.shift())&&!(h(a),8<performance.now()-d););}catch(n){k=n}f=!1;(c.length||e.length)&&b();if(k)throw k;})}var c=[],e=[],f=!1;return{read:function(a){c.push(a);f||b()},write:function(a){e.push(a);f||b()},raf:a.requestAnimationFrame.bind(a)}}(u);t.NextTickCtrl=
function(a){function b(){e=!1;for(var a=c.slice(0),b=c.length=0;b<a.length;b++)a[b]()}var c=[],e=!1,f=void 0,d=/iphone|ipad|ipod|ios/.test(a.navigator.userAgent.toLowerCase());if("undefined"!==typeof Promise&&-1!==Promise.toString().indexOf("[native code]"))var g=Promise.resolve(),h=function(a){console.error(a)},f=function(){g.then(b).catch(h);d&&setTimeout(O)};else f=function(){setTimeout(b,0)};return{nextTick:function(a){c.push(a);e||(e=!0,f())}}}(u);t.ConfigCtrl=function(a,b){function c(c){var e=
1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;if(void 0!==a[c])return a[c];for(var d,g=0;g<b.length;g++)if((d=b[g].settings)&&void 0!==d[c])return d[c];return e}a=a||{};return{get:c,getBoolean:function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!1,d=c(a);return null===d?b:"string"===typeof d?"true"===d:!!d},getNumber:function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:NaN,d=parseFloat(c(a));return isNaN(d)?b:d}}}(t.config,function(a,b,c,e){var f=
c.filter(function(d){return d.isMatch&&d.isMatch(a,b)});f.length||(f=c.filter(function(a){return a.name===e}));return f}(u.location.href,u.navigator.userAgent,[{name:"ipad",settings:{keyboardHeight:500},isMatch:function(a,b){return C(a,b,"ipad",["ipad"],["windows phone"])}},{name:"iphone",isMatch:function(a,b){return C(a,b,"iphone",["iphone"],["windows phone"])}},{name:"ios",settings:{autoFocusAssist:"delay",hoverCSS:!1,inputBlurring:!0,inputCloning:!0,keyboardHeight:300,mode:"ios",scrollAssist:!0,
statusbarPadding:!1,swipeBackEnabled:!0,tapPolyfill:!1,virtualScrollEventAssist:!1,disableScrollAssist:!0},isMatch:function(a,b){return C(a,b,"ios",["iphone","ipad","ipod"],["windows phone"])}},{name:"android",settings:{activator:"ripple",autoFocusAssist:"immediate",inputCloning:!0,scrollAssist:!0,hoverCSS:!1,keyboardHeight:300,mode:"md"},isMatch:function(a,b){return C(a,b,"android",["android","silk"],["windows phone"])}},{name:"windows",settings:{mode:"wp",autoFocusAssist:"immediate",hoverCSS:!1},
isMatch:function(a,b){return C(a,b,"windows",["windows phone"],[])}},{name:"core",settings:{mode:"md",keyboardHeight:290}}],"core"));x=function(a,b,c,e){function f(a){function c(){clearTimeout(f);e.onerror=e.onload=null;e.parentNode.removeChild(e);delete n[a]}var e=d("script");e.charset="utf-8";e.async=!0;e.src=a;var f=setTimeout(c,12E4);e.onerror=e.onload=c;b.head.appendChild(e)}function d(a){return b.createElement(a)}var g={},h={},k={},n={},w={},l={},m=!(a.ShadyDOM&&a.ShadyDOM.inUse),p=ga(a,c.eventNameFn,
c.ConfigCtrl,c.DomCtrl);c.loadComponents=function(a,b){var d=arguments;b(w,ca,p);for(var c=2;c<d.length;c++){var e,f=w,n=d[c],r,l=g[n[0]];l.listeners={};for(r=0;r<n[2].length;r++)e=n[2][r],l.listeners[e[0]]={B:e[1],capture:!!e[2],passive:!!e[3],enabled:!!e[4]};l.L={};for(r=0;r<n[3].length;r++)e=n[3][r],l.L[e[0]]={V:e[1]};l.C=!!n[4];"string"===typeof n[6]&&(r=l.j[R(n[5].toString())])&&(r.F=n[6]);l.U=f[n[1]];if(f=k[a]){n=0;for(l=f.length;n<l;n++)f[n]();delete k[a]}h[a]=!0}};return{$:function(a,b){var d=
b[0],c=b[1],e={color:{},mode:{}};if(c)for(var f=0;f<c.length;f++)e[c[f][0]]={type:c[f][1]};a=g[a]={tag:a,j:{},props:e,K:[]};0===b[2]&&(a.Z="low");b=Object.keys(d);for(c=0;c<b.length;c++)a.j[R(b[c].toString())]={T:d[b[c]]};b=Object.keys(a.props);for(c=0;c<b.length;c++)a.K.push(Z(b[c]));return a},W:function(a){return g[a]},X:function(b,d,e){if(h[b])e();else{k[b]?k[b].push(e):k[b]=[e];var g=c.staticDir+"bundles/ionic."+b+".js";n[g]||(n[g]=!0,"low"===d?"requestIdleCallback"in a?a.requestIdleCallback(function(){f(g)},
{timeout:2E3}):setTimeout(function(){f(g)},600):f(g))}},fa:function(a){return 1===a.nodeType},ga:function(a){return 3===a.nodeType},ea:function(a){return 8===a.nodeType},nextTick:e.nextTick.bind(e),O:d,P:function(a,d){return b.createElementNS(a,d)},G:function(a){return b.createTextNode(a)},N:function(a){return b.createComment(a)},g:function(a,b,d){a.insertBefore(b,d)},v:function(a,b){a.removeChild(b)},s:function(a,b){a.appendChild(b)},I:function(a){return a.parentNode},H:function(a){return a.nextSibling},
S:function(a){return(a.tagName||"").toLowerCase()},A:function(a,b){a.textContent=b},ba:function(a){return a.textContent},R:function(a,b){return a.getAttribute(b)},M:function(a,c,e){c.C&&(e.w=a.attachShadow({mode:"open"}));(a=c.j[e.mode]||c.j.default)&&a.F&&(c.C&&m?(a.D||(a.D=d("style"),a.D.innerHTML=a.F),e.w.appendChild(a.D.cloneNode(!0))):(c=c.tag+"."+e.mode,l[c]||(e=d("style"),e.dataset.cmpId=c,e.innerHTML=a.F.replace(/\:host\-context\((.*?)\)|:host\((.*?)\)|\:host/g,"__h"),b.head.appendChild(e),
l[c]=!0)))}}}(u,u.document,t,t.NextTickCtrl);(function(a,b,c,e,f){Object.keys(f||{}).forEach(function(d){class g extends HTMLElement {}var h=c.$(d,f[d]);g.prototype.connectedCallback=function(){ja(c,e,b,this,h)};g.prototype.attributeChangedCallback=function(a,b,c){b!==c&&(a=Y(a),(b=h.props[a])&&(this[a]=0===b.type?null===c||"false"===c?!1:!0:1===b.type?parseFloat(c):c))};g.prototype.disconnectedCallback=function(){if(this){var a=this.u;if(a){a.ionViewWillUnload&&a.ionViewWillUnload();var b=
a.h;if(b){for(var c=Object.keys(b),d=0;d<c.length;d++)b[c[d]]();a.h=null}a.l&&N(a.l);this.u=a.$el=a.$meta=a.w=a.l=null}}};g.observedAttributes=h.K;a.customElements.define(d,g)})})(u,function(a){function b(b){return function(){a.v(a.I(b),b)}}function c(b,e,f,k){var d=void 0,g=b.b;void 0!==g&&q(d=g.m)&&q(d=d.ca)&&(d(b),g=b.b);var h=b.i,m=b.c;if("!"===m)void 0===b.f&&(b.f=""),b.a=a.N(b.f);else if(k&&"slot"===m)for(;e=k.shift();){a.v(e.parentNode,e);if(0===k.length)return e;a.s(f,e)}else if(void 0!==
m){var p=m.indexOf("#");f=m.indexOf(".",p);var r=0<p?p:m.length,v=0<f?f:m.length,p=-1!==p||-1!==f?m.slice(0,Math.min(r,v)):m,g=b.a=q(g)&&q(d=g.Y)?a.P(d,p):a.O(p);r<v&&g.setAttribute("id",m.slice(r+1,v));0<f&&g.setAttribute("class",m.slice(v+1).replace(/\./g," "));T(I,b);V(I,b);M(I,b);X(I,b);if(h&&h.constructor===Array)for(d=0;d<h.length;++d)m=h[d],null!=m&&a.s(g,c(m,e,g,k));else J(b.f)&&a.s(g,a.G(b.f));d=b.b.m;q(d)&&(d.create&&d.create(I,b),d.da&&e.push(b))}else b.a=a.G(b.f);return b.a}function e(c,
e,f,k){for(;f<=k;++f){var d=void 0,g,h=e[f];null!=h&&(q(h.c)?(N(h),g=b(h.a),q(d=h.b)&&q(d=d.m)&&q(d=d.remove)?d(h,g):g()):a.v(c,h.a))}}function f(b,g,h,k){if(k||"slot"!==b.c){var d=void 0,w=void 0;q(d=g.b)&&q(w=d.m)&&q(d=w.ia)&&d(b,g);var l=g.a=b.a,m=b.i,p=g.i;if(b!==g){void 0!==g.b&&(T(b,g),V(b,g),M(b,g),X(b,g),d=g.b.m,q(d)&&q(d=d.update)&&d(b,g));if(void 0===g.f)if(q(m)&&q(p)){if(m!==p){var r=k?[]:null;if(k)for(var v=g.a.childNodes,y=0;y<v.length;y++)r.push(v[y]);for(var l=l.shadowRoot||l,t=0,y=
0,u=m.length-1,z=m[0],B=m[u],v=p.length-1,A=p[0],D=p[v],E=void 0,x,F;t<=u&&y<=v;)if(null==z)z=m[++t];else if(null==B)B=m[--u];else if(null==A)A=p[++y];else if(null==D)D=p[--v];else if(H(z,A))f(z,A,h,k),z=m[++t],A=p[++y];else if(H(B,D))f(B,D,h,k),B=m[--u],D=p[--v];else if(H(z,D))f(z,D,h,k),a.g(l,z.a,a.H(B.a)),z=m[++t],D=p[--v];else{if(H(B,A))f(B,A,h,k),a.g(l,B.a,z.a),B=m[--u];else{if(void 0===E){var G;x=m;F=u;for(var C={},E=t;E<=F;++E)G=x[E],null!=G&&(G=G.o,void 0!==G&&(C[G]=E));E=C}x=E[A.o];void 0===
x?a.g(l,c(A,h,l,r),z.a):(F=m[x],F.c!==A.c?a.g(l,c(A,h,l,r),z.a):(f(F,A,h,k),m[x]=void 0,a.g(l,F.a,z.a)))}A=p[++y]}if(t>u)for(k=null==p[v+1]?null:p[v+1].a,m=y;m<=v;++m)y=p[m],null!=y&&a.g(l,c(y,h,l,r),k);else y>v&&e(l,m,t,u)}}else if(q(p))for(q(b.f)&&a.A(l,""),r=0,k=p.length-1;r<=k;++r)m=p[r],null!=m&&a.g(l,c(m,h,l,null),null);else q(m)?e(l,m,0,m.length-1):q(b.f)&&a.A(l,"");else b.f!==g.f&&a.A(l,g.f);q(w)&&q(d=w.ha)&&d(b,g)}}}return function(b,g,h){var d,n=[];void 0!==b.c||void 0!==b.a||(b=K(a.S(b)+
(b.id?"#"+b.id:"")+(b.className?"."+b.className.split(" ").join("."):""),{},[],void 0,b));g.a||H(b,g)?f(b,g,n,h):(h=b.a,d=a.I(h),c(g,n,d,[]),null!==d&&(a.g(d,g.a,a.H(h)),e(d,[b],0,0)));return g}}(x),x,t.ConfigCtrl,t.components)})(window);