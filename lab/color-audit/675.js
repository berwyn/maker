(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[675,924],{193:function(t,n,e){"use strict";e.d(n,{F:function(){return u}});var o=e(9082),r=e(1688);function s(){const t=new WeakMap,n=new IntersectionObserver((n=>{n.forEach((n=>t.get(n.target)(n)))}));return{watch(e,o){t.set(e,o),n.observe(e)},unwatch(e){n.unobserve(e),t.delete(e)}}}const i=new Set;let a;var l={components:{MTransitionFadeIn:o.j,MSkeletonBlock:r.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:i.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new s),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{i.add(this.src+this.srcset),this.loaded=!0}))}}},c=e(7548),d=e.n(c);var u=(0,e(1900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[e("m-transition-fade-in",[t.loaded?e("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):e("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},2492:function(t,n,e){"use strict";e.d(n,{x6:function(){return u},Pj:function(){return $},UJ:function(){return o}});var o=Symbol("modalApiKey"),r=e(771),s=e.n(r),i=e(1098),a={name:"Modal",inject:{modalApi:o,theme:{default:(0,i.uH)(),from:i.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>s().valid(t)},color:{type:String,default:void 0,validator:t=>s().valid(t)}},computed:{...(0,i.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor}}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}}},l=e(5027),c=e.n(l),d=e(1900);var u=(0,d.Z)(a,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.Modal,style:t.style},[t._t("default")],2)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports,f=e(7818),p=e.n(f);(0,d.Z)({},(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=p().locals||p()}),null,null).exports;var h=e(1931),v=e(7062),m=e(3555),_=e.n(m),g=e(9082),y=e(1838),b=e(5832);const k={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,n={state:h.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(n,e={}){const o=n(t.$createElement);return this.state.vnode=o,this.state.options=e,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;t.currentLayer.state.vnode=void 0}}};return this.modalApi||(this.modalApi=n),{[o]:n}}};var x={name:"ModalLayer",components:{V:v.Z,PseudoWindow:_(),MTransitionFadeIn:g.j,MTransitionResponsive:y.w},mixins:[k],inheritAttrs:!1,apiMixin:k,data(){let t=b.rG,n=b.cT;return this.currentLayer.state.isStacked&&(t=b.iM,n=b.cT),{transitions:[{minWidth:b.iu,enter:b.vn,leave:b.w0},{minWidth:b.OE,enter:t,leave:n}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const n=window.innerWidth>=b.OE,e=!n,o=!!t.modalApi.state.vnode,r=!o,s=this.$refs.baseModalLayer;s&&(n&&o?(0,b.vq)({element:s}):n&&r?(0,b.s4)({element:s}):e&&o?setTimeout((()=>{s.style.opacity="0%"}),b.AT):e&&r&&s.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:n}=this.currentLayer.state.options,{modal:e}=this.$refs;e&&n&&!e.contains(t.target)&&this.modalApi.close()}}},M=e(5189),w=e.n(M);var $=(0,d.Z)(x,(function(){var t,n=this,e=n.$createElement,o=n._self._c||e;return o("div",{class:n.$s.Layer},[o("m-transition-fade-in",[n.currentLayer.state.vnode?o("div",{class:[n.$s.Translucent,(t={},t[n.$s.Transparent]=n.currentLayer.state.isStacked,t)]}):n._e()]),n._v(" "),o("m-transition-responsive",{attrs:{transitions:n.transitions}},[n.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:n.$s.ModalLayer,on:{"!click":function(t){return n.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:n.$s.disableScroll,attrs:{body:""}}),n._v(" "),o("div",{ref:"modal",class:n.$s.Container},[o("v",{attrs:{nodes:n.currentLayer.state.vnode}})],1)],1):n._e()]),n._v(" "),n.currentLayer.state.vnode?o("modal-layer"):n._e()],1)}),[],!1,(function(t){this.$s=w().locals||w()}),null,null).exports},1688:function(t,n,e){"use strict";e.d(n,{s:function(){return a},p:function(){return u}});var o={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},r=e(2986),s=e.n(r),i=e(1900);var a=(0,i.Z)(o,undefined,undefined,!1,(function(t){this.$s=s().locals||s()}),null,null).exports,l={directives:{frag:e(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=e(2794),d=e.n(c);var u=(0,i.Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(n){return e("div",t._g(t._b({key:"skeleton-text-"+n,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},9082:function(t,n,e){"use strict";e.d(n,{j:function(){return i}});var o=e(9211),r=e(5832),s={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:r.dx,fadeOutFn:r.vq})},i=(0,e(1900).Z)(s,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},5227:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),o.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=o},8856:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},8647:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=o},3418:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),o.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=o},4751:function(t,n,e){var o=e(7705)((function(t){return t[1]}));o.push([t.id,"\n.cover-photo[data-v-0e744113] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-0e744113] {\n\twidth: 100%;\n}\n.icon[data-v-0e744113] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=o},3924:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return c}});var o=e(2492),r=e(567),s=e(193),i=e(9893),a=e.n(i),l={components:{MModal:o.x6,MInlineActionBar:r.pE,MActionBarButton:r.n5,MImage:s.F,X:a()},inject:{modalApi:o.UJ}},c=(e(326),(0,e(1900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1),t._v(" "),e("div",[e("h1",[t._v("Cart modal content")]),t._v(" "),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("m-inline-action-bar",[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(n){return t.modalApi.close()}}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(n){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t$10.00\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAdd to Cart\n\t\t\t")])],1)],1)}),[],!1,null,"0e744113",null).exports)},6675:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return a}});var o=e(2492),r=e(567),s=e(3924),i={components:{MActionBar:r.MS,MActionBarButton:r.n5},inject:{modalApi:o.UJ},methods:{openCart(){const t=this.$createElement;this.modalApi.open((()=>t(s.default)))}}},a=(0,e(1900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("root index")]),t._v(" "),e("m-action-bar",[e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:t.openCart},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t3 items\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView Cart\n\t\t\t")])],1)],1)}),[],!1,null,null,null).exports},7548:function(t,n,e){var o=e(5227);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("14393fff",o,!0,{})},5027:function(t,n,e){var o=e(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("092310f5",o,!0,{})},7818:function(t,n,e){var o=e(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("179c170a",o,!0,{})},5189:function(t,n,e){var o=e(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("7fc46ffb",o,!0,{})},2986:function(t,n,e){var o=e(8647);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("e53630ca",o,!0,{})},2794:function(t,n,e){var o=e(3418);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("54e85523",o,!0,{})},326:function(t,n,e){var o=e(4751);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,e(4023).Z)("049a13ad",o,!0,{})}}]);