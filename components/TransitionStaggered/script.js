!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("../../utils/transitions"));else if("function"==typeof define&&define.amd)define(["../../utils/transitions"],e);else{var n="object"==typeof exports?e(require("../../utils/transitions")):e(t["../../utils/transitions"]);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}(this,(function(t){return function(){"use strict";var e={387:function(e){e.exports=t}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){o.r(r),o.d(r,{MTransitionStaggered:function(){return n}});var t=o(387);const e=[{minWidth:0,itemCount:1}];var n=function(t,e,n,o,r,i,s,a){var d,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=d):r&&(d=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),d)if(u.functional){u._injectStyles=d;var l=u.render;u.render=function(t,e){return d.call(e),l(t,e)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,d):[d]}return{exports:t,options:u}}({props:{staggerItemCount:{type:Array,default:()=>e,validator:t=>0!==t.length&&(0===t[0].minWidth&&t.every((t=>(t.minWidth||0===t.minWidth)&&t.itemCount)))}},data:()=>({viewportWidth:0}),mounted(){this.viewportWidth=window.innerWidth},methods:{handleEnter(e,n){(0,t.staggeredFloatUpFn)({element:e,onComplete:n})},handleLeave(e,n){(0,t.floatDownFn)({element:e,onComplete:n})},loadIndex(t){const{staggerItemCount:e,viewportWidth:n}=this;let o;if(e.forEach((t=>{t.minWidth<n&&(o=t.itemCount)})),1===o)return t;return t%o>0?t%o:o}}},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("transition",t._b({on:{enter:t.handleEnter,leave:t.handleLeave}},"transition",t.$attrs,!1),[t._t("default",null,{dataLoadIndex:t.loadIndex})],2)}),[],!1,null,null,null).exports}(),r}()}));
//# sourceMappingURL=script.js.map