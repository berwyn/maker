(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[852],{33216:function(e,t,n){"use strict";n.d(t,{b:function(){return f}});var s=n(60771),r=n.n(s),i=n(26613);const o=Object.freeze({small:"h6",medium:"h5",large:"h4",xlarge:"h3",xxlarge:"h2",headline:"h1"});var a={inject:{theme:{default:(0,i.uH)(),from:i.YH}},inheritAttrs:!1,props:{size:{type:String,default:void 0,validator:e=>["small","medium","large","xlarge","xxlarge","headline"].includes(e)},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:e=>r().valid(e)},weight:{type:Number,default:void 0,validator:e=>e>=100&&e<=900}},computed:{...(0,i.C9)("heading",["size","fontFamily","textColor","weight"]),tag(){return this.element?this.element:o[this.resolvedSize]},inlineStyles(){const{fonts:e}=this.theme;return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor,fontWeight:this.resolvedWeight,"--font-size":e.baseSize,"--font-size-scale":e.sizeScale}}},render(e){const{$s:t,resolvedSize:n,tag:s,inlineStyles:r}=this,i=this.$slots.default;return e(s,{class:[t.Heading,t[`size_${n}`]],style:r,attrs:this.$attrs,on:this.$listeners},i)}},l=n(71491),c=n.n(l);var f=(0,n(51900).Z)(a,undefined,undefined,!1,(function(e){this.$s=c().locals||c()}),null,null).exports},90487:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var s=n(60771),r=n.n(s);var i={name:"ProgressBar",props:{size:{type:String,default:"medium",validator:e=>["xsmall","small","medium","large"].includes(e)},shape:{type:String,default:"rounded",validator:e=>["squared","rounded","pill"].includes(e)},color:{type:String,default:"#000",validator:e=>r().valid(e)},progress:{type:Number,default:0,validator:e=>e>=0&&e<=100}},computed:{barStyles(){return{"--bar-color":this.color,"--fill-percent":`${this.progress}%`}}}},o=n(3619),a=n.n(o);var l=(0,n(51900).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:[e.$s.ProgressBarContainer,e.$s["size_"+e.size],e.$s["shape_"+e.shape]]},[n("div",{class:e.$s.ProgressBar,style:e.barStyles})])}),[],!1,(function(e){this.$s=a().locals||a()}),null,null).exports},26613:function(e,t,n){"use strict";n.d(t,{qo:function(){return C},YH:function(){return a},uH:function(){return g},C9:function(){return z}});var s=n(85066),r=n.n(s),i=n(54299),o=n.n(i);var a=Symbol("ThemeKey"),l=n(20643),c=n.n(l),f=n(92810),d=n.n(f),u=n(75692),p=n.n(u),h=n(32416);function _(e){return p()(e)&&e.startsWith("@")?this.getPath(e):e}function v(e){if(!p()(e))throw new Error(`cannot resolve pointer ${e} it is not a string`);if(!e.startsWith("@"))throw new Error(`cannot resolve pointer ${e} it is missed the @ prefix`);const t=e.slice(1),n=c()(this,t);if(d()(n))throw new Error(`invalid pointer ${e} does not point to a field that exists within the theme`);return n}function z(e,t){const n={};for(const r of t)n[`resolved${s=r,s[0].toUpperCase()+s.slice(1)}`]=function(){if(!d()(this[r]))return this[r];const t=this.theme[e][r];if(t){const n=t,s=this.theme.resolve(n),i=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return i&&h.Z.error(i(s),`Invalid value "${s}" for prop "${r}" for component "${e}" in theme.`),s}};var s;return n}function g(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:"14px",sizeScale:1.15},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:"large",textColor:"@colors.text",weight:300},heading:{fontFamily:"inherit",size:"large",textColor:"@colors.heading",weight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:_,getPath:v}}function m(e,t,n,s){o()(e,t,n),o()(e,r()(e.profiles,{id:s})),e.colors={...e.colors},e.resolve=_,e.getPath=v}var x={inject:{parentTheme:{default:g(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return m(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e,fonts:t}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"],"--font-size":t.baseSize,"--font-size-scale":t.sizeScale}}},beforeUpdate(){m(this.$data,this.parentTheme,this.theme,this.profile)}},b=n(35004),y=n.n(b);var C=(0,n(51900).Z)(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=y().locals||y()}),null,null).exports},32416:function(e,t,n){"use strict";var s=n(14219);const r={warn(e,t,n){e||(0,s.K)(t,n)},error(e,t,n){e||(0,s._)(t,n)}};t.Z=r},14219:function(e,t,n){"use strict";n.d(t,{_:function(){return i},K:function(){return o}});const s="object"==typeof process&&"object"==typeof process.env&&!0,r=e=>[`%c @square/maker${e}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],i=(e,t)=>{throw console.error(...r(t),e),new Error(`${(e=>`[@square/maker]${e}`)(t)} ${e}`)},o=(e,t)=>{s&&console.warn(...r(t),e)}},72630:function(e,t,n){var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tline-height: 1.5em;\n\n\t/* heading - small, text - small */\n\t--font-step-minus-1-size: max(12px, calc(var(--font-step-0-size) / var(--font-size-scale)));\n\n\t/* heading - medium, text - medium */\n\t--font-step-0-size: var(--font-size);\n\n\t/* text - large */\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\n\t/* heading - large */\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\n\t/* heading - xlarge */\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\n\t/* heading - xxlarge */\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\n\t/* skipped steps */\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-8-size: calc(var(--font-step-7-size) * var(--font-size-scale));\n\n\t/* heading - headline */\n\t--font-step-9-size: calc(var(--font-step-8-size) * var(--font-size-scale));\n}\n.Heading__6G7M.size_small_viCJL {\n\tfont-size: var(--font-step-minus-1-size);\n}\n.Heading__6G7M.size_medium_mRjvt {\n\tfont-size: var(--font-step-0-size);\n}\n.Heading__6G7M.size_large_GeAp4 {\n\tfont-size: var(--font-step-2-size);\n}\n.Heading__6G7M.size_xlarge__wZiT {\n\tfont-size: var(--font-step-4-size);\n}\n.Heading__6G7M.size_xxlarge_q_vTX {\n\tfont-size: var(--font-step-6-size);\n}\n.Heading__6G7M.size_headline_kqKxJ {\n\tfont-size: var(--font-step-9-size);\n}\n",""]),s.locals={Heading:"Heading__6G7M",size_small:"size_small_viCJL",size_medium:"size_medium_mRjvt",size_large:"size_large_GeAp4",size_xlarge:"size_xlarge__wZiT",size_xxlarge:"size_xxlarge_q_vTX",size_headline:"size_headline_kqKxJ"},e.exports=s},59802:function(e,t,n){var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.ProgressBarContainer__cJD1 {\n\twidth: 100%;\n\toverflow: hidden;\n\tbackground-color: #f5f4f4;\n}\n.ProgressBar_aeQRL {\n\twidth: var(--fill-percent, 0);\n\theight: 100%;\n\tbackground-color: var(--bar-color);\n\ttransition: width 100ms linear;\n}\n.ProgressBarContainer__cJD1.size_xsmall_xhxJO {\n\theight: 4px;\n}\n.ProgressBarContainer__cJD1.size_small_SYTJI {\n\theight: 8px;\n}\n.ProgressBarContainer__cJD1.size_medium__TVkx {\n\theight: 12px;\n}\n.ProgressBarContainer__cJD1.size_large_dC33B {\n\theight: 16px;\n}\n.ProgressBarContainer__cJD1.shape_squared_gzT9x,\n.ProgressBarContainer__cJD1.shape_squared_gzT9x .ProgressBar_aeQRL {\n\tborder-radius: 0;\n}\n.ProgressBarContainer__cJD1.shape_rounded_NBloK,\n.ProgressBarContainer__cJD1.shape_rounded_NBloK .ProgressBar_aeQRL,\n.ProgressBarContainer__cJD1.shape_pill_wddxw,\n.ProgressBarContainer__cJD1.shape_pill_wddxw .ProgressBar_aeQRL {\n\tborder-radius: 16px;\n}\n",""]),s.locals={ProgressBarContainer:"ProgressBarContainer__cJD1",ProgressBar:"ProgressBar_aeQRL",size_xsmall:"size_xsmall_xhxJO",size_small:"size_small_SYTJI",size_medium:"size_medium__TVkx",size_large:"size_large_dC33B",shape_squared:"shape_squared_gzT9x",shape_rounded:"shape_rounded_NBloK",shape_pill:"shape_pill_wddxw"},e.exports=s},35820:function(e,t,n){var s=n(77705)((function(e){return e[1]}));s.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n\n\t/* heading - small, text - small */\n\t--font-step-minus-1-size: max(12px, calc(var(--font-step-0-size) / var(--font-size-scale)));\n\n\t/* heading - medium, text - medium */\n\t--font-step-0-size: var(--font-size);\n\n\t/* text - large */\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\n\t/* heading - large */\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\n\t/* heading - xlarge */\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\n\t/* skipped step */\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\n\t/* heading - xxlarge */\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\n\t/* skipped steps */\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-8-size: calc(var(--font-step-7-size) * var(--font-size-scale));\n\n\t/* heading - headline */\n\t--font-step-9-size: calc(var(--font-step-8-size) * var(--font-size-scale));\n}\n",""]),s.locals={Theme:"Theme_rI2oH"},e.exports=s},71491:function(e,t,n){var s=n(72630);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("ceb27898",s,!0,{})},3619:function(e,t,n){var s=n(59802);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("2b496f20",s,!0,{})},35004:function(e,t,n){var s=n(35820);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.id,s,""]]),s.locals&&(e.exports=s.locals);(0,n(54023).Z)("12fe2849",s,!0,{})}}]);