(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[905],{6905:function(t,e,n){"use strict";n.d(e,{x6:function(){return m},Pj:function(){return k},UJ:function(){return o}});var o=Symbol("modalApiKey"),i=n(9792),s=n.n(i),r=n(3555),a=n.n(r);const l={touchStarted:!1,touchEnded:!1,touchPoints:[],timeStart:0,clientXStart:0,clientYStart:0,clientXCurrent:0,clientYCurrent:0,timeCurrent:0};var c={name:"TouchCapture",props:{minSwipeDistance:{type:Number,default:30},maxSwipeDuration:{type:Number,default:300}},data:()=>({...l}),computed:{timeElapsed(){return this.timeCurrent-this.timeStart},changeY(){return this.clientYCurrent-this.clientYStart},changeX(){return this.clientXCurrent-this.clientXStart},direction(){const{changeY:t,changeX:e}=this;return Math.abs(t)>Math.abs(e)?t<0?"up":"down":e<0?"left":"right"},gesture(){const{changeY:t,changeX:e}=this;return{changeX:e,changeY:t}},isSwipeGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length&&this.timeElapsed<this.maxSwipeDuration&&(Math.abs(this.changeY)>this.minSwipeDistance||Math.abs(this.changeX)>this.minSwipeDistance)},isDragGesture(){return 0===this.touchPoints.filter((t=>1!==t)).length}},watch:{timeCurrent(){this.isDragGesture&&this.$emit(`on-drag-${this.direction}`,this.gesture)},touchEnded(t){t&&(this.isSwipeGesture?this.$emit(`on-swipe-${this.direction}`,this.gesture):this.isDragGesture&&this.$emit("on-drag-end",this.gesture),this.resetGesture())}},methods:{handleTouchEvent(t){switch(t.type){case"touchstart":this.touchStarted=!0,this.clientXStart=t.changedTouches[0].clientX,this.clientYStart=t.changedTouches[0].clientY,this.timeStart=t.timeStamp;break;case"touchmove":this.touchPoints.push(t.changedTouches.length),this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY,this.timeCurrent=t.timeStamp;break;case"touchend":this.touchEnded=!0,this.clientXCurrent=t.changedTouches[0].clientX,this.clientYCurrent=t.changedTouches[0].clientY}},resetGesture(){Object.entries(l).forEach((([t,e])=>{this[t]=e}))}}},d=n(1900),u=(0,d.Z)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{on:{touchstart:t.handleTouchEvent,touchmove:t.handleTouchEvent,touchend:t.handleTouchEvent}},[t._t("default")],2)}),[],!1,null,null,null).exports,h={name:"Modal",components:{PseudoWindow:a(),MTouchCapture:u},inject:{modalApi:o},props:{beforeClose:{type:Function,required:!1,default:void 0}},data(){return{modalStyles:{},isScrolledToTop:!0,onScroll:s()(this.setScrollTop,800)}},watch:{beforeClose:{immediate:!0,handler(t){this.modalApi.state.options.beforeCloseHook=t}}},methods:{setScrollTop(){this.$refs.modal.$el&&(this.isScrolledToTop=this.$refs.modal.$el.scrollTop<=0)},onSwipeDown(){this.isScrolledToTop&&this.modalApi.close()},onDragDown(t){if(this.isScrolledToTop){const e=`translateY(${t.changeY}px)`;this.modalStyles={transform:e,"backface-visibility":"hidden",overflow:"hidden",transition:"none"}}},onDragEnd(t){const e=.3*window.innerHeight;this.isScrolledToTop&&t.changeY>e?this.modalApi.close():this.modalStyles={}}}},p=n(5027),f=n.n(p);var m=(0,d.Z)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-touch-capture",{ref:"modal",class:t.$s.Modal,style:t.modalStyles,on:{"on-drag-down":t.onDragDown,"on-drag-end":t.onDragEnd,"on-swipe-down":t.onSwipeDown},nativeOn:{scroll:function(e){return t.onScroll.apply(null,arguments)}}},[t._t("default"),t._v(" "),n("pseudo-window",{attrs:{body:""},on:{touchmove:function(t){t.preventDefault()},scroll:function(t){t.preventDefault()}}})],2)}),[],!1,(function(t){this.$s=f().locals||f()}),null,null).exports,v=n(7818),g=n.n(v);(0,d.Z)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$s.ModalContent},[t._t("default")],2)}),[],!1,(function(t){this.$s=g().locals||g()}),null,null).exports;var y=n(1931),_=n(7062),w=n(9082),S=n(1838),b=n(5832);Symbol("PopoverConfig");const T=Symbol("PopoverLayer"),x={inject:{currentLayer:{default:void 0,from:o}},provide(){const t=this,e={state:y.Z.observable({vnode:void 0,options:{},isStacked:!!t.currentLayer,parentModal:t.currentLayer}),open(e,n={}){const o=e(t.$createElement);return this.state.vnode=o,this.state.options=n,()=>{this.state.vnode===o&&(this.state.vnode=void 0)}},async close(){if(!this.state.vnode&&t.currentLayer){var e;if("function"==typeof this.state.options.beforeCloseHook&&!await this.state.options.beforeCloseHook())return;null===(e=t.popoverApi)||void 0===e||e.closePopover(),t.$nextTick((()=>{t.currentLayer.state.vnode=void 0}))}}};return this.modalApi||(this.modalApi=e),{[o]:e}}};var M={name:"ModalLayer",components:{V:_.Z,PseudoWindow:a(),MTransitionFadeIn:w.j,MTransitionResponsive:S.w},mixins:[x],inject:{popoverApi:{from:T,default:void 0}},inheritAttrs:!1,apiMixin:x,data(){let t=b.rG,e=b.cT;return this.currentLayer.state.isStacked&&(t=b.iM,e=b.cT),{transitions:[{minWidth:b.iu,enter:b.vn,leave:b.w0},{minWidth:b.OE,enter:t,leave:e}]}},mounted(){const t=this;this.unwatchStackedModal=this.$watch((()=>t.modalApi.state.vnode),(()=>{const e=window.innerWidth>=b.OE,n=!e,o=!!t.modalApi.state.vnode,i=!o,s=this.$refs.baseModalLayer;s&&(e&&o?(0,b.vq)({element:s}):e&&i?(0,b.s4)({element:s}):n&&o?setTimeout((()=>{s.style.opacity="0%"}),b.AT):n&&i&&s.style.removeProperty("opacity"))}))},destroyed(){this.unwatchStackedModal()},methods:{closeOnClickOutside(t){const{closeOnClickOutside:e}=this.currentLayer.state.options,{modal:n}=this.$refs;n&&e&&!n.contains(t.target)&&this.modalApi.close()}}},C=n(5189),$=n.n(C);var k=(0,d.Z)(M,(function(){var t,e=this,n=e.$createElement,o=e._self._c||n;return o("div",{class:e.$s.Layer},[o("m-transition-fade-in",[e.currentLayer.state.vnode?o("div",{class:[e.$s.Translucent,(t={},t[e.$s.Transparent]=e.currentLayer.state.isStacked,t)]}):e._e()]),e._v(" "),o("m-transition-responsive",{attrs:{transitions:e.transitions}},[e.currentLayer.state.vnode?o("div",{ref:"baseModalLayer",class:e.$s.ModalLayer,on:{"!click":function(t){return e.closeOnClickOutside.apply(null,arguments)}}},[o("pseudo-window",{class:e.$s.disableScroll,attrs:{body:""}}),e._v(" "),o("div",{ref:"modal",class:e.$s.Container},[o("v",{attrs:{nodes:e.currentLayer.state.vnode}})],1)],1):e._e()]),e._v(" "),e.currentLayer.state.vnode?o("modal-layer"):e._e()],1)}),[],!1,(function(t){this.$s=$().locals||$()}),null,null).exports},9082:function(t,e,n){"use strict";n.d(e,{j:function(){return r}});var o=n(9211),i=n(5832),s={components:{MTransition:o.T},inheritAttrs:!1,data:()=>({fadeInFn:i.dx,fadeOutFn:i.vq})},r=(0,n(1900).Z)(s,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("m-transition",t._g(t._b({attrs:{enter:t.fadeInFn,leave:t.fadeOutFn}},"m-transition",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,null,null).exports},8856:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Modal_lWZo9 {\n\theight: 100%;\n\toverflow: scroll;\n\tbackground: #f5f6f7;\n\ttransition: transform 0.2s linear;\n}\n@media screen and (min-width: 840px) {\n.Modal_lWZo9 {\n\t\twidth: 600px;\n\t\tmin-height: 180px;\n\t\tmax-height: calc(100vh - 64px);\n}\n}\n",""]),o.locals={Modal:"Modal_lWZo9"},t.exports=o},619:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.ModalContent_EYuNB {\n\tpadding: 24px;\n}\n",""]),o.locals={ModalContent:"ModalContent_EYuNB"},t.exports=o},6851:function(t,e,n){var o=n(7705)((function(t){return t[1]}));o.push([t.id,"\n.Layer__MzTS {\n\tposition: relative;\n\tz-index: 1;\n}\n.ModalLayer_KtxAY {\n\tposition: fixed;\n\ttop: 200px;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n.Translucent_XItK4 {\n\tposition: fixed;\n\ttop: 200px;\n\tright: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: rgba(0, 0, 0, 0.3);\n}\n.Transparent_PPufJ {\n\tbackground-color: transparent;\n}\n.disableScroll_Qb9Nw {\n\toverflow: hidden;\n}\n.Container_Am6mM {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n\toverflow: hidden;\n}\n@media screen and (min-width: 840px) {\n.Container_Am6mM {\n\t\tdisplay: inline-block;\n\t\twidth: auto;\n\t\theight: auto;\n\t\tborder-radius: 8px;\n\t\tbox-shadow: 0 0 24px 8px rgba(0, 0, 0, 0.3);\n}\n}\n",""]),o.locals={Layer:"Layer__MzTS",ModalLayer:"ModalLayer_KtxAY",Translucent:"Translucent_XItK4",Transparent:"Transparent_PPufJ",disableScroll:"disableScroll_Qb9Nw",Container:"Container_Am6mM"},t.exports=o},5027:function(t,e,n){var o=n(8856);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("092310f5",o,!0,{})},7818:function(t,e,n){var o=n(619);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("179c170a",o,!0,{})},5189:function(t,e,n){var o=n(6851);o.__esModule&&(o=o.default),"string"==typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);(0,n(4023).Z)("7fc46ffb",o,!0,{})}}]);