!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports={Paragraph:"📚0-0-0-semantic-release2eSb_","size_minus-1":"📚0-0-0-semantic-release1fPal",size_0:"📚0-0-0-semantic-release29fVJ",size_1:"📚0-0-0-semantic-release1ExO1"}},function(e,t,n){"use strict";var r=n(0),o=n.n(r);n.d(t,"default",(function(){return o.a}))},function(e,t,n){"use strict";n.r(t),n.d(t,"MText",(function(){return i}));var r={inheritAttrs:!1,props:{element:{type:String,default:"p",validator:e=>["p","span"].includes(e)},size:{type:Number,default:0,validator:e=>e>=-1&&e<=1}},computed:{stringSize(){return this.size>=0?this.size.toString():"minus-".concat(Math.abs(this.size))}},render(e){const{$s:t,stringSize:n,element:r}=this,o=this.$slots.default;return e(r,{class:[t.Paragraph,t["size_".concat(n)]],attrs:this.$attrs,on:this.$listeners},o)}},o=n(1);var i=function(e,t,n,r,o,i,s,a){var u,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),r&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},f._ssrRegister=u):o&&(u=a?function(){o.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(f.functional){f._injectStyles=u;var c=f.render;f.render=function(e,t){return u.call(t),c(e,t)}}else{var l=f.beforeCreate;f.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:f}}(r,undefined,undefined,!1,(function(e){this.$s=o.default.locals||o.default}),null,null).exports}])}));
//# sourceMappingURL=script.js.map