(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[669,636],{2313:function(t,n,e){"use strict";e.d(n,{i:function(){return l},X:function(){return u}});var s=Symbol("SegmentedControlKey"),r={inject:{controlState:s},props:{value:{type:void 0,required:!0}},computed:{isSelected(){return this.controlState.currentValue===this.value}},methods:{selectSelf(){this.controlState.currentValue=this.value}}},i=e(5891),a=e.n(i),o=e(1900);var l=(0,o.Z)(r,(function(){var t,n=this,e=n.$createElement;return(n._self._c||e)("button",{class:[n.$s.Button,n.$s["shape_"+n.controlState.shapeInner],n.$s["size_"+n.controlState.sizeInner],(t={},t[n.$s.selected]=n.isSelected,t)],on:{click:n.selectSelf}},[n._t("default")],2)}),[],!1,(function(t){this.$s=a().locals||a()}),null,null).exports,p={provide(){return{[s]:this.$data}},model:{prop:"selected",event:"segmented-control:update"},props:{selected:{type:void 0,required:!0},shape:{type:String,default:"rounded",validator:t=>["squared","rounded","pill"].includes(t)},size:{type:String,default:"medium",validator:t=>["small","medium"].includes(t)}},data(){return{currentValue:this.selected,shapeInner:this.shape,sizeInner:this.size}},watch:{currentValue(t){this.$emit("segmented-control:update",t)}}},c=e(5154),d=e.n(c);var u=(0,o.Z)(p,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{class:[t.$s.Container,t.$s["shape_"+t.shapeInner],t.$s["size_"+t.sizeInner]]},[t._t("default")],2)}),[],!1,(function(t){this.$s=d().locals||d()}),null,null).exports},7356:function(t,n,e){"use strict";e.d(n,{Z:function(){return i}});const s="object"==typeof process&&"object"==typeof process.env&&!0,r=t=>[`%c @square/maker${t}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var i={warn(t,n,e){t||((t,n)=>{s&&console.warn(...r(n),t)})(n,e)},error(t,n,e){t||((t,n)=>{throw console.error(...r(n),t),new Error(`${(t=>`[@square/maker]${t}`)(n)} ${t}`)})(n,e)}}},700:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.ActionBarWrapper_YYIEK {\n\t--regular-bottom-padding: 32px;\n\t--extra-bottom-padding-for-deadclick: 32px;\n\t--safe-area-inset-padding: env(safe-area-inset-bottom, 0);\n\t--actionbar-bottom-padding:\n\t\tcalc(\n\t\t\tvar(--regular-bottom-padding)\n\t\t\t+ var(--extra-bottom-padding-for-deadclick)\n\t\t\t+ var(--safe-area-inset-padding)\n\t\t);\n\t--actionbar-size: 64px;\n\t--actionbar-top-padding: 32px;\n\n\tpadding-bottom:\n\t\tcalc(\n\t\t\tvar(--actionbar-top-padding)\n\t\t\t+ var(--actionbar-size)\n\t\t\t+ var(--actionbar-bottom-padding)\n\t\t);\n}\n@media screen and (min-width: 840px) {\n.ActionBarWrapper_YYIEK {\n\t\t--actionbar-size: 48px;\n\t\t--actionbar-top-padding: 24px;\n\n\t\t/* no safe-area or deadclick issues on non-mobile resolutions */\n\t\t--actionbar-bottom-padding: var(--regular-bottom-padding);\n}\n}\n",""]),s.locals={ActionBarWrapper:"ActionBarWrapper_YYIEK"},t.exports=s},3721:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.Controls_aoFYY {\n\tpadding: 16px 24px 36px;\n\tbackground: #fff;\n}\n",""]),s.locals={Controls:"Controls_aoFYY"},t.exports=s},7889:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.Button_dVHkj {\n\tflex: 1 0 0;\n\tcolor: rgba(0, 0, 0, 0.6);\n\tfont-weight: 500;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tborder-radius: 4px;\n\toutline: none;\n\tcursor: pointer;\n}\n.shape_pill_xOf5O {\n\tborder-radius: 32px;\n}\n.shape_squared_wGub5 {\n\tborder-radius: 0;\n}\n.selected_JxSKs {\n\tcolor: black;\n\tbackground-color: white;\n\tbox-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);\n}\n",""]),s.locals={Button:"Button_dVHkj",shape_pill:"shape_pill_xOf5O",shape_squared:"shape_squared_wGub5",selected:"selected_JxSKs"},t.exports=s},124:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.Container_LEIzv {\n\tdisplay: flex;\n\tbox-sizing: border-box;\n\theight: 56px;\n\tpadding: 4px;\n\tfont-size: 14px;\n\tline-height: 24px;\n\tbackground-color: #f6f7f9;\n\tborder-radius: 4px;\n}\n.shape_pill_ssIJF {\n\tborder-radius: 32px;\n}\n.shape_squared_FwAaH {\n\tborder-radius: 0;\n}\n.size_small_QLXE_ {\n\theight: 40px;\n\tfont-size: 12px;\n\tline-height: 16px;\n}\n",""]),s.locals={Container:"Container_LEIzv",shape_pill:"shape_pill_ssIJF",shape_squared:"shape_squared_FwAaH",size_small:"size_small_QLXE_"},t.exports=s},5054:function(t,n,e){var s=e(7705)((function(t){return t[1]}));s.push([t.id,"\n.cover-photo[data-v-51ed5d70] {\n\twidth: 100%;\n\theight: 280px;\n}\n.image[data-v-51ed5d70] {\n\twidth: 100%;\n}\n.icon[data-v-51ed5d70] {\n\twidth: 16px;\n\theight: 16px;\n}\n",""]),t.exports=s},9722:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return g}});var s=e(6905),r=e(193),i=e(6951),a=e(7935),o=e(9211),l=e(9893),p=e.n(l),c=e(9546),d=e(7069),u=e(5832),f=e(7480),m={components:{MModal:s.x6,MActionBarButton:r.n5,MImage:a.F,MContainer:i.U,X:p(),MTransition:o.T,AtomicActionBar:f.Z},inject:{modalApi:s.UJ},inheritAttrs:!1,props:{enterDelay:{type:Number,default:void 0},springStiffness:{type:Number,default:void 0},springDamping:{type:Number,default:void 0},springMass:{type:Number,default:void 0}},data(){const t=(0,u.Y7)(0,100,"y","%");return{springUpFn:({element:n,onComplete:e})=>{const s=(0,c.ZP)(n),r=t,i=u.vP;s.set(r(i.from)),s.render(),(0,d.j)({...i,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){s.set(r(t))},onComplete:e})},springDownFn:({element:n,onComplete:e})=>{const s=(0,c.ZP)(n),r=t,i=u.hJ;s.set(r(i.from)),s.render(),(0,d.j)({...i,type:"spring",stiffness:this.springStiffness,damping:this.springDamping,mass:this.springMass,onUpdate(t){s.set(r(t))},onComplete:e})},loaded:!1}},mounted(){setTimeout((()=>{this.loaded=!0}),this.enterDelay)}},_=(e(7154),e(1805)),h=e.n(_);var g=(0,e(1900).Z)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-modal",[e("div",{staticClass:"cover-photo"},[e("m-image",{attrs:{src:"https://i.picsum.photos/id/507/900/900.jpg?hmac=NDltE7xXtFlZjUoyDqGjehzY5ORPtj4-d42qbFgAFkk"}})],1),t._v(" "),e("m-container",{scopedSlots:t._u([{key:"label",fn:function(){return[e("h1",[t._v("Modal with Inline Action Bar")])]},proxy:!0}])},[t._v(" "),t._l(100,(function(n){return e("div",{key:n},[t._v("\n\t\t\tLong text "+t._s(n)+"\n\t\t")])}))],2),t._v(" "),e("div",{class:t.$s.ActionBarWrapper},[e("m-transition",{attrs:{enter:t.springUpFn,leave:t.springDownFn}},[t.loaded?e("atomic-action-bar",t._g(t._b({},"atomic-action-bar",t.$attrs,!1),t.$listeners),[e("m-action-bar-button",{key:"close",attrs:{color:"#f6f6f6"},on:{click:function(n){return t.modalApi.close()}}},[e("x",{staticClass:"icon"})],1),t._v(" "),e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:function(n){return t.modalApi.close()}},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t\t\t$10.00\n\t\t\t\t\t")]},proxy:!0}],null,!1,627294226)},[t._v("\n\t\t\t\t\tAdd to Cart\n\t\t\t\t\t")])],1):t._e()],1)],1)],1)}),[],!1,(function(t){this.$s=h().locals||h()}),"51ed5d70",null).exports},3974:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return d}});var s=e(6905),r=e(193),i=e(6951),a=e(2313),o=e(9722),l={components:{MActionBar:r.MS,MActionBarButton:r.n5,MContainer:i.U,MSegmentedControl:a.X,MSegment:a.i},inject:{modalApi:s.UJ},data:()=>({enterDelay:800,springStiffness:400,springDamping:30,springMass:2}),methods:{openCart(){this.modalApi.open((t=>t(o.default,{props:{enterDelay:this.enterDelay,springStiffness:this.springStiffness,springDamping:this.springDamping,springMass:this.springMass}})))}}},p=e(1286),c=e.n(p);var d=(0,e(1900).Z)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("m-container",[e("h1",[t._v("Action bar test")]),t._v(" "),e("p",[t._v("To preview the persistent action bar, please view this page in a mobile browser.")]),t._v(" "),e("p",[t._v("\n\t\tOtherwise\n\t\t"),e("button",{on:{click:t.openCart}},[t._v("\n\t\t\tClick here\n\t\t")]),t._v("\n\t\tto open the item modal.\n\t")]),t._v(" "),e("div",{class:t.$s.Controls},[e("h4",[t._v("Delay (milliseconds)")]),t._v(" "),e("m-segmented-control",{attrs:{size:"small"},model:{value:t.enterDelay,callback:function(n){t.enterDelay=n},expression:"enterDelay"}},t._l(8,(function(n){return e("m-segment",{key:n,attrs:{value:100*n}},[t._v("\n\t\t\t\t"+t._s(100*n)+"\n\t\t\t")])})),1),t._v(" "),e("h4",[t._v("Stiffness")]),t._v(" "),e("p",[t._v("A higher stiffness will result in a snappier animation.")]),t._v(" "),e("m-segmented-control",{attrs:{size:"small"},model:{value:t.springStiffness,callback:function(n){t.springStiffness=n},expression:"springStiffness"}},t._l(10,(function(n){return e("m-segment",{key:n,attrs:{value:100*n}},[t._v("\n\t\t\t\t"+t._s(100*n)+"\n\t\t\t")])})),1),t._v(" "),e("h4",[t._v("Damping")]),t._v(" "),e("p",[t._v("\n\t\t\tThis is the opposing force to stiffness.\n\t\t\tAs you reduce this value, relative to stiffness,\n\t\t\tthe spring will become bouncier and the animation\n\t\t\twill last longer. Likewise, higher relative values will\n\t\t\thave less bounciness and result in shorter animations.\n\t\t")]),t._v(" "),e("m-segmented-control",{attrs:{size:"small"},model:{value:t.springDamping,callback:function(n){t.springDamping=n},expression:"springDamping"}},t._l(10,(function(n){return e("m-segment",{key:n,attrs:{value:10*n}},[t._v("\n\t\t\t\t"+t._s(10*n)+"\n\t\t\t")])})),1),t._v(" "),e("h4",[t._v("Mass")]),t._v(" "),e("p",[t._v("\n\t\t\tThis is the mass of the animating object.\n\t\t\tHeavier objects will take longer to speed up and slow down.\n\t\t")]),t._v(" "),e("m-segmented-control",{attrs:{size:"small"},model:{value:t.springMass,callback:function(n){t.springMass=n},expression:"springMass"}},t._l(10,(function(n){return e("m-segment",{key:n,attrs:{value:n/2}},[t._v("\n\t\t\t\t"+t._s(n/2)+"\n\t\t\t")])})),1)],1),t._v(" "),e("m-action-bar",[e("m-action-bar-button",{key:"primary",attrs:{align:"center","full-width":""},on:{click:t.openCart},scopedSlots:t._u([{key:"information",fn:function(){return[t._v("\n\t\t\t\t3 items\n\t\t\t")]},proxy:!0}])},[t._v("\n\t\t\tView Cart\n\t\t\t")])],1)],1)}),[],!1,(function(t){this.$s=c().locals||c()}),null,null).exports},1805:function(t,n,e){var s=e(700);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("077e2eb2",s,!0,{})},1286:function(t,n,e){var s=e(3721);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("02ca3834",s,!0,{})},5891:function(t,n,e){var s=e(7889);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("2714874e",s,!0,{})},5154:function(t,n,e){var s=e(124);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("b3262532",s,!0,{})},7154:function(t,n,e){var s=e(5054);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[t.id,s,""]]),s.locals&&(t.exports=s.locals);(0,e(4023).Z)("b9f00ffc",s,!0,{})}}]);