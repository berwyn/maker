(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[470],{33216:function(t,e,n){"use strict";n.d(e,{b:function(){return d}});var i=n(60771),s=n.n(i),o=n(26613);const a=Object.freeze({small:"h6",medium:"h5",large:"h4",xlarge:"h3",xxlarge:"h2",headline:"h1"});var r={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{size:{type:String,default:void 0,validator:t=>["small","medium","large","xlarge","xxlarge","headline"].includes(t)},element:{type:String,default:void 0,validator:t=>["h1","h2","h3","h4","h5","h6","div"].includes(t)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:t=>s().valid(t)},weight:{type:Number,default:void 0,validator:t=>t>=100&&t<=900}},computed:{...(0,o.C9)("heading",["size","fontFamily","textColor","weight"]),tag(){return this.element?this.element:a[this.resolvedSize]},inlineStyles(){const{fonts:t}=this.theme;return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor,fontWeight:this.resolvedWeight,"--font-size":t.baseSize,"--font-size-scale":t.sizeScale}}},render(t){const{$s:e,resolvedSize:n,tag:i,inlineStyles:s}=this,o=this.$slots.default;return t(i,{class:[e.Heading,e[`size_${n}`]],style:s,attrs:this.$attrs,on:this.$listeners},o)}},l=n(71491),c=n.n(l);var d=(0,n(51900).Z)(r,undefined,undefined,!1,(function(t){this.$s=c().locals||c()}),null,null).exports},33960:function(t,e,n){"use strict";n.d(e,{x6:function(){return v},nI:function(){return _},Pj:function(){return D},UJ:function(){return i}});var i=Symbol("modalApiKey"),s=n(69792),o=n.n(s),a=n(60771),r=n.n(a),l=n(26613);const c={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0};var d={name:"TouchCapture",props:{preventDefault:{type:Boolean,default:!1},minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...c}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(this.preventDefault&&t.preventDefault(),t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(c).forEach((([t,e])=>{this[t]=e}))}}},u=n(51900),h={name:"Modal",components:{MTouchCapture:(0,u.Z)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports},inject:{modalApi:i,theme:{default:(0,l.uH)(),from:l.YH}},props:{beforeClose:{type:Function,required:!1,default:void 0},bgColor:{type:String,default:void 0,validator:t=>r().valid(t)},color:{type:String,default:void 0,validator:t=>r().valid(t)}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:o()(this.setScrollTop,800),preventDefault:!1}},computed:{...(0,l.C9)("modal",["bgColor","color"]),style(){return{"--bg-color":this.resolvedBgColor,"--color":this.resolvedColor,...this.modalStyles}},scrollTop(){return this.$refs.modal&&this.$refs.modal.$el?this.$refs.modal.$el.scrollTop:0}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.isScrolledToTop=this.scrollTop<=0},onSwipeDown(){this.isScrolledToTop&&(this.preventDefault=!0,this.modalApi.close())},onDragDown(t){if(this.isScrolledToTop){this.preventDefault=!0;const e=`translateY(${t.changeY}px)`;this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():(this.preventDefault=!1,this.modalStyles={})}}},p=n(75027),f=n.n(p);var v=(0,u.Z)(h,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.style,attrs:{"prevent-default":t.preventDefault},on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default")],2)}),[],!1,(function(t){this.$s=f().locals||f()}),null,null).exports,m=n(27818),g=n.n(m);var _=(0,u.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=g().locals||g()}),null,null).exports,y=n(21931),z=n(27062),x=n(13555),S=n.n(x),b=n(79082),w=n(31838),T=n(45832),M=n(16825);const C={inject:{currentLayer:{default:void 0,from:i}},provide(){const t=this,e={state:y.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const i=e(t.$createElement);return this.state.vnode=i,this.state.options=n,()=>{this.state.vnode===i&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[i]:e}}};var $={name:"ModalLayer",components:{V:z.Z,PseudoWindow:S(),MTransitionFadeIn:b.j,MTransitionResponsive:w.w},mixins:[C],inject:{popoverApi:{from:M.y,default:void 0}},inheritAttrs:!1,apiMixin:C,data(){let t=T.rG,e=T.cT;return this.currentLayer.state.isStacked&&(t=T.iM,e=T.cT),{transitions:[{minWidth:T.iu,enter:T.vn,leave:T.w0},{minWidth:T.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=T.OE,n=!e,i=!!t.modalApi.state.vnode,s=!i,o=this.$refs.baseModalLayer;o&&(e&&i?(0,T.vq)({element:o}):e&&s?(0,T.s4)({element:o}):n&&i?setTimeout((()=>{o.style.opacity="0%"}),T.AT):n&&s&&o.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},k=n(95189),L=n.n(k);var D=(0,u.Z)($,(function(){var t,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{class:e.$s.Layer},[i("m-transition-fade-in",[e.currentLayer.state.vnode?i("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),i("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?i("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[i("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),i("div",{ref:"modal",class:e.$s.Container},[i("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?i("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=L().locals||L()}),null,null).exports},16825:function(t,e,n){"use strict";n.d(e,{f:function(){return i},y:function(){return s}});const i=Symbol("PopoverConfig"),s=Symbol("PopoverLayer")},79082:function(t,e,n){"use strict";n.d(e,{j:function(){return a}});var i=n(39211),s=n(45832),o={components:{MTransition:i.T},inheritAttrs:!1,data:()=>({fadeInFn:s.dx,fadeOutFn:s.vq})},a=(0,n(51900).Z)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},72630:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tline-height: 1.5em;\n\n\t/* heading - small, text - small */\n\t--font-step-minus-1-size: max(12px, calc(var(--font-step-0-size) / var(--font-size-scale)));\n\n\t/* heading - medium, text - medium */\n\t--font-step-0-size: var(--font-size);\n\n\t/* text - large */\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\n\t/* heading - large */\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\n\t/* heading - xlarge */\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\n\t/* heading - xxlarge */\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\n\t/* skipped steps */\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-8-size: calc(var(--font-step-7-size) * var(--font-size-scale));\n\n\t/* heading - headline */\n\t--font-step-9-size: calc(var(--font-step-8-size) * var(--font-size-scale));\n}\n.Heading__6G7M.size_small_viCJL {\n\tfont-size: var(--font-step-minus-1-size);\n}\n.Heading__6G7M.size_medium_mRjvt {\n\tfont-size: var(--font-step-0-size);\n}\n.Heading__6G7M.size_large_GeAp4 {\n\tfont-size: var(--font-step-2-size);\n}\n.Heading__6G7M.size_xlarge__wZiT {\n\tfont-size: var(--font-step-4-size);\n}\n.Heading__6G7M.size_xxlarge_q_vTX {\n\tfont-size: var(--font-step-6-size);\n}\n.Heading__6G7M.size_headline_kqKxJ {\n\tfont-size: var(--font-step-9-size);\n}\n",""]),i.locals={Heading:"Heading__6G7M",size_small:"size_small_viCJL",size_medium:"size_medium_mRjvt",size_large:"size_large_GeAp4",size_xlarge:"size_xlarge__wZiT",size_xxlarge:"size_xxlarge_q_vTX",size_headline:"size_headline_kqKxJ"},t.exports=i},58856:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tcolor: var(--color, inherit);\n\tbackground: var(--bg-color, #f5f6f7);\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),i.locals={Modal:"Modal_lWZo9"},t.exports=i},619:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),i.locals={ModalContent:"ModalContent_EYuNB"},t.exports=i},16851:function(t,e,n){var i=n(77705)((function(t){return t[1]}));i.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--color-overlay, rgba(0, 0, 0, 0.3));\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),i.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=i},71491:function(t,e,n){var i=n(72630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("ceb27898",i,!0,{})},75027:function(t,e,n){var i=n(58856);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("092310f5",i,!0,{})},27818:function(t,e,n){var i=n(619);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("179c170a",i,!0,{})},95189:function(t,e,n){var i=n(16851);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);(0,n(54023).Z)("7fc46ffb",i,!0,{})}}]);