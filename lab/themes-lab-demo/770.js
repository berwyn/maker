(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[770],{569:function(n,t,e){var r=e(71),o=e(5989),i=e(6705),a=Math.max,u=Math.min;n.exports=function(n,t,e){var s,c,f,l,p,d,v=0,m=!1,y=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function g(t){var e=s,r=c;return s=c=void 0,v=t,l=n.apply(r,e)}function b(n){return v=n,p=setTimeout(O,t),m?g(n):l}function w(n){var e=n-d;return void 0===d||e>=t||e<0||y&&n-v>=f}function O(){var n=o();if(w(n))return k(n);p=setTimeout(O,function(n){var e=t-(n-d);return y?u(e,f-(n-v)):e}(n))}function k(n){return p=void 0,h&&s?g(n):(s=c=void 0,l)}function x(){var n=o(),e=w(n);if(s=arguments,c=this,d=n,e){if(void 0===p)return b(d);if(y)return clearTimeout(p),p=setTimeout(O,t),g(d)}return void 0===p&&(p=setTimeout(O,t)),l}return t=i(t)||0,r(e)&&(m=!!e.leading,f=(y="maxWait"in e)?a(i(e.maxWait)||0,t):f,h="trailing"in e?!!e.trailing:h),x.cancel=function(){void 0!==p&&clearTimeout(p),v=0,s=d=c=p=void 0},x.flush=function(){return void 0===p?l:k(o())},x}},5989:function(n,t,e){var r=e(4362);n.exports=function(){return r.Date.now()}},9792:function(n,t,e){var r=e(569),o=e(71);n.exports=function(n,t,e){var i=!0,a=!0;if("function"!=typeof n)throw new TypeError("Expected a function");return o(e)&&(i="leading"in e?!!e.leading:i,a="trailing"in e?!!e.trailing:a),r(n,t,{leading:i,maxWait:t,trailing:a})}},3555:function(n){n.exports=function(){"use strict";var n=function(n){var t=n.props,e=n.data,r=n.parent,o=function n(t){return Array.isArray(t)?(e=t=>n(t),t.reduce(((n,t)=>n.concat(e(t))),[])):null!==(r=t)&&"object"==typeof r?function(n){let t=[];for(const e in n)n[e]&&t.push(e);return t}(t):"string"==typeof t&&t?[t]:[];var e,r}([e.staticClass,e.class]);if(o){var i,a,u,s=(a=(i=t).body,u=i.document,a?window.document.body:!!u&&window.document.documentElement);if(s){var c=function(n,t){if(!t.length)return;const{classList:e}=n;return t.filter((n=>{if(!e.contains(n))return e.add(n),!0}))}(s,o),f=function(){!function(n,t){if(!t||!t.length)return;let e;for(;e=t.shift();)n.classList.remove(e);n.classList.length||n.removeAttribute("class")}(s,c)};r.$once("hook:beforeUpdate",f),r.$once("hook:destroyed",f)}}},t=Object.prototype.hasOwnProperty,e=function(n,t,e){var r="&"===t[0],o="~"===(t=r?t.slice(1):t)[0],i="!"===(t=o?t.slice(1):t)[0];return{o:n,t:t=i?t.slice(1):t,i:e,u:{once:o,capture:i,passive:r}}},r=function(n){var r,o,i,a=n.props,u=n.listeners,s=n.parent,c=function(n,r){var o,i,a=[];for(var u in r)if(o=r,i=u,t.call(o,i)){var s=r[u],c=e(n,u,s);c.o.addEventListener(c.t,c.i,c.u),a.push(c)}return a}((o=(r=a).body,i=r.document,o?window.document.body:i?window.document:window),u),f=function(){!function(n){for(var t;t=n.shift();)t.o.removeEventListener(t.t,t.i,t.u)}(c)};s.$once("hook:beforeUpdate",f),s.$once("hook:destroyed",f)},o=function(t){r(t),n(t)};return{name:"pseudo-window",functional:!0,props:{document:Boolean,body:Boolean},render:function(n,t){return t.parent._isMounted?o(t):t.parent.$once("hook:mounted",(function(){o(t)})),t.slots().default}}}()},7062:function(n,t){"use strict";var e=function(n){return n&&n.data&&(n.data.slot=void 0),n},r={functional:!0,render:function(n,t){var r=t.props;return Array.isArray(r.nodes)?r.nodes.map(e):e(r.nodes)}};t.Z=r},3883:function(n,t){"use strict";var e,r={"!":1,"&":2},o=/\B([A-Z])/g,i=/-(\w)/g;function a(n){return n.replace(i,(function(n,t){return t?t.toUpperCase():""}))}function u(n,t,e){if(e){var r=e.value,o=e.modifier,i=n[t];null==i||1===o?n[t]=r:2===o&&(Array.isArray(i)?Array.isArray(r)?i.push.apply(i,r):i.push(r):"object"==typeof i&&"object"==typeof r?Object.assign(i,r):"function"==typeof i&&"function"==typeof r?n[t]=function(){Reflect.apply(i,this,arguments),Reflect.apply(r,this,arguments)}:n[t]+=r)}}function s(n,t,e){n[t]||(n[t]={});var r=n[t];for(var o in e)u(r,o,e[o])}function c(n,t){if(t in n)return t;var e=t.replace(o,"-$1").toLowerCase();return e in n&&e}function f(n){var t={};for(var e in n){var o=n[e],i=r[e.slice(-1)];i?e=e.slice(0,-1):i=0,t[e]={value:o,modifier:i}}return t}function l(n,t){var e=a("static-"+t),r=[n[e],n[t]].filter(Boolean).flat(1/0);if(0!==r.length)return delete n[e],r}function p(n,t){var e=n[t];if(e)return delete n[t],e}function d(n){return n&&{value:n,modifier:0}}var v={functional:!0,render:function(n,t){var r=t.children,o=t.data;if(!r||function(n){for(var t in n)return!1;return!0}(o))return r;var i,v=f(o.attrs),m=f(o.on),y=f(o.nativeOn),h=p(v,"class")||d(l(o,"class")),g=p(v,"style")||d(l(o,"style")),b=p(v,"key")||d(o.key);return g&&"string"==typeof g.value&&(g.value=(i=g.value,Object.fromEntries(i.split(";").map((function(n){var t=n.split(":"),e=t[0],r=t[1];return e&&r&&[a(e.trim()),r.trim()]})).filter(Boolean)))),r.map((function(n){if((n=function(n){e||(e=Object.getPrototypeOf(n).constructor);var t=new e;return Object.assign(t,n),t.componentOptions&&(t.componentOptions=Object.assign({},t.componentOptions),t.componentOptions.propsData=Object.assign({},t.componentOptions.propsData)),t}(n)).tag){n.data||(n.data={});var t=Object.assign({},v),r=n,o=r.data,i=r.componentOptions;i?(s(i,"propsData",function(n,t){var e=n.Ctor.options.props,r={};if(e)for(var o in e){var i=c(t,o);i&&(r[o]=t[i],delete t[i])}return r}(i,t)),s(i,"listeners",m),s(o,"nativeOn",y),o.on=o.nativeOn):s(o,"on",m),s(o,"attrs",t),o.class=l(o,"class"),o.style=l(o,"style"),u(o,"class",h),u(o,"style",g),u(n,"key",b)}return n}))}};t.Z=v},3406:function(n,t,e){var r=e(7705)((function(n){return n[1]}));r.push([n.id,'\nhtml,\nbody {\n\tfont-family: "Square Market", system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;\n}\n',""]),n.exports=r},79:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return a}});var r=e(439),o=e(6157),i={components:{MActionBarLayer:r.$n,MModalLayer:o.Pj},mixins:[o.Pj.apiMixin]},a=(e(5353),(0,e(1900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("m-action-bar-layer",[e("router-view")],1),n._v(" "),e("m-modal-layer")],1)}),[],!1,null,null,null).exports)},5353:function(n,t,e){var r=e(3406);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[n.id,r,""]]),r.locals&&(n.exports=r.locals);(0,e(4023).Z)("50e3a689",r,!0,{})}}]);