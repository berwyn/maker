(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[278],{193:function(t,e,n){"use strict";n.d(e,{F:function(){return u}});var s=n(9082),o=n(1688);function i(){const t=new WeakMap,e=new IntersectionObserver((e=>{e.forEach((e=>t.get(e.target)(e)))}));return{watch(n,s){t.set(n,s),e.observe(n)},unwatch(n){e.unobserve(n),t.delete(n)}}}const r=new Set;let a;var l={components:{MTransitionFadeIn:s.j,MSkeletonBlock:o.s},inheritAttrs:!1,props:{src:{type:String,default:void 0},srcset:{type:String,default:void 0}},data(){return{isIntersecting:!0,loaded:r.has(this.src+this.srcset)}},watch:{src:"load",srcset:"load"},mounted(){a||(a=new i),a.watch(this.$el,this.onIntersection)},beforeDestroy(){a.unwatch(this.$el)},methods:{onIntersection({isIntersecting:t}){this.isIntersecting=t,t&&this.load()},load(){if(this.loaded||!this.src&&!this.srcset)return;const t=new Image;this.src&&(t.src=this.src),this.srcset&&(t.srcset=this.srcset),t.addEventListener("load",(()=>{r.add(this.src+this.srcset),this.loaded=!0}))}}},c=n(7548),d=n.n(c);var u=(0,n(1900).Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$s.ImageWrapper},[t.isIntersecting?[n("m-transition-fade-in",[t.loaded?n("img",t._g(t._b({class:t.$s.Image,attrs:{src:t.src,srcset:t.srcset}},"img",t.$attrs,!1),t.$listeners)):n("m-skeleton-block")],1)]:t._e()],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},1688:function(t,e,n){"use strict";n.d(e,{s:function(){return a},p:function(){return u}});var s={inheritAttrs:!1,props:{loaded:{type:Boolean,default:!1}},render(t){return this.$slots.default?this.$slots.default:t("div",{class:[this.$s.SkeletonBlock,{[this.$s.loading]:!this.loaded}],on:this.$listeners,attrs:this.$attrs})}},o=n(2986),i=n.n(o),r=n(1900);var a=(0,r.Z)(s,undefined,undefined,!1,(function(t){this.$s=i().locals||i()}),null,null).exports,l={directives:{frag:n(8486).Z},inheritAttrs:!1,props:{lines:{type:[String,Number],default:1},loaded:{type:Boolean,default:!1}},computed:{children(){return this.$slots.default&&this.$slots.default.find((t=>t.tag||t.text.trim()))},linesNum(){return Number.parseInt(this.lines,10)}}},c=n(2794),d=n.n(c);var u=(0,r.Z)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"frag",rawName:"v-frag"}]},[t.loaded||t.children?[t._t("default")]:t._l(t.linesNum,(function(e){return n("div",t._g(t._b({key:"skeleton-text-"+e,class:t.$s.SkeletonText},"div",t.$attrs,!1),t.$listeners))}))],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},5227:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.ImageWrapper_emJCV {\n\tposition: relative;\n\twidth: 100%;\n\theight: 100%;\n}\n.Image_j_xX0 {\n\twidth: 100%;\n\theight: 100%;\n\t-o-object-fit: cover;\n\t   object-fit: cover;\n\t-o-object-position: center;\n\t   object-position: center;\n}\n",""]),s.locals={ImageWrapper:"ImageWrapper_emJCV",Image:"Image_j_xX0"},t.exports=s},8647:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonBlock__etLT {\n\twidth: 100%;\n\theight: 100%\n}\n.SkeletonBlock__etLT.loading_JOsYT {\n\t\tanimation: pulsing_sRbq0 0.5s ease-in-out infinite alternate;\n}\n@keyframes pulsing_sRbq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),s.locals={SkeletonBlock:"SkeletonBlock__etLT",loading:"loading_JOsYT",pulsing:"pulsing_sRbq0"},t.exports=s},3418:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.SkeletonText__QdYk {\n\tposition: relative\n}\n.SkeletonText__QdYk:last-child {\n\t\twidth: 66%;\n}\n.SkeletonText__QdYk::before {\n\t\t/* fill line-height */\n\t\tcontent: '\\00a0';\n}\n.SkeletonText__QdYk::after {\n\t\tposition: absolute;\n\t\ttop: 50%;\n\t\twidth: 100%;\n\t\theight: 75%;\n\t\tborder-radius: 8px;\n\t\ttransform: translateY(-50%);\n\t\tanimation: pulsing_HQVq0 0.5s ease-in-out infinite alternate;\n\t\tcontent: \"\";\n}\n@keyframes pulsing_HQVq0 {\n0% { background-color: #ebedef;\n}\n100% { background-color: #f5f6f7;\n}\n}\n",""]),s.locals={SkeletonText:"SkeletonText__QdYk",pulsing:"pulsing_HQVq0"},t.exports=s},5318:function(t,e,n){var s=n(7705)((function(t){return t[1]}));s.push([t.id,"\n.cover-photo[data-v-560b4120] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-560b4120] {\n\twidth: 100%;\n}\n.icon[data-v-560b4120] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=s},8278:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return d}});var s=n(6157),o=n(439),i=n(1397),r=n(193),a=n(9893),l=n.n(a),c={components:{MModal:s.x6,MActionBar:o.MS,MButton:i.G,MImage:r.F,X:l()}},d=(n(1384),(0,n(1900).Z)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("m-modal",[n("div",{staticClass:"cover-photo"},[n("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1),t._v(" "),n("div",[t._v("\n\t\tModal content\n\n\t\t"),n("router-link",{attrs:{to:{name:"stacked-modals-index-first-modal-second-modal"}}},[t._v("\n\t\t\tOpen second modal\n\t\t")]),t._v(" "),t._l(100,(function(e){return n("div",{key:e},[t._v("\n\t\t\tLong text "+t._s(e)+"\n\t\t")])}))],2),t._v(" "),n("router-view"),t._v(" "),n("m-action-bar",[n("router-link",{key:"close",attrs:{to:{name:"stacked-modals-index"}}},[n("m-button",{attrs:{size:"large",shape:"pill"}},[n("x",{staticClass:"icon"})],1)],1),t._v(" "),n("m-button",{key:"primary",attrs:{size:"large",shape:"pill",align:"center","full-width":""},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t$10.00\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tAction A\n\t\t\t")])],1)],1)}),[],!1,null,"560b4120",null).exports)},7548:function(t,e,n){var s=n(5227);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("14393fff",s,!0,{})},2986:function(t,e,n){var s=n(8647);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("e53630ca",s,!0,{})},2794:function(t,e,n){var s=n(3418);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("54e85523",s,!0,{})},1384:function(t,e,n){var s=n(5318);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,n(4023).Z)("96e37606",s,!0,{})}}]);