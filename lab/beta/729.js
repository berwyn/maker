(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[729],{3216:function(e,t,n){"use strict";n.d(t,{b:function(){return h}});var i=n(771),o=n.n(i),s=n(4185);var r={inject:{theme:{default:(0,s.uH)(),from:s.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:e=>o().valid(e)}},computed:{...(0,s.C9)("heading",["size","fontFamily","textColor"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){return{fontFamily:this.resolvedFontFamily,color:this.resolvedTextColor}}},render(e){const{$s:t,sizeClass:n,tag:i,inlineStyles:o}=this,s=this.$slots.default;return e(i,{class:[t.Heading,t[`size_${n}`]],style:o,attrs:this.$attrs,on:this.$listeners},s)}},a=n(1491),l=n.n(a);var h=(0,n(1900).Z)(r,undefined,undefined,!1,(function(e){this.$s=l().locals||l()}),null,null).exports},4185:function(e,t,n){"use strict";n.d(t,{qo:function(){return $},YH:function(){return a},uH:function(){return z},C9:function(){return g}});var i=n(5066),o=n.n(i),s=n(4299),r=n.n(s);var a=Symbol("ThemeKey"),l=n(643),h=n.n(l),f=n(2810),c=n.n(f),u=n(5692),p=n.n(u),d=n(7356);function v(e){return p()(e)&&e.startsWith("@")?this.getPath(e):e}function _(e){if(!p()(e))throw new Error(`cannot resolve pointer ${e} it is not a string`);if(!e.startsWith("@"))throw new Error(`cannot resolve pointer ${e} it is missed the @ prefix`);const t=e.slice(1),n=h()(this,t);if(c()(n))throw new Error(`invalid pointer ${e} does not point to a field that exists within the theme`);return n}function g(e,t){const n={};for(const o of t)n[`resolved${i=o,i[0].toUpperCase()+i.slice(1)}`]=function(){if(!c()(this[o]))return this[o];const t=this.theme[e][o];if(t){const n=t,i=this.theme.resolve(n),s=this.$vnode.componentOptions.Ctor.extendOptions.props[o].validator;return s&&d.Z.error(s(i),`Invalid value "${i}" for prop "${o}" for component "${e}" in theme.`),i}};var i;return n}function z(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,textColor:"@colors.text"},heading:{fontFamily:"inherit",size:2,textColor:"@colors.heading"},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:v,getPath:_}}function m(e,t,n,i){r()(e,t,n),r()(e,o()(e.profiles,{id:i})),e.colors={...e.colors},e.resolve=v,e.getPath=_}var x={inject:{parentTheme:{default:z(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return m(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"]}}},beforeUpdate(){m(this.$data,this.parentTheme,this.theme,this.profile)}},y=n(5004),b=n.n(y);var $=(0,n(1900).Z)(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=b().locals||b()}),null,null).exports},7356:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});const i="object"==typeof process&&"object"==typeof process.env&&!0,o=e=>[`%c @square/maker${e}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var s={warn(e,t,n){e||((e,t)=>{i&&console.warn(...o(t),e)})(t,n)},error(e,t,n){e||((e,t)=>{throw console.error(...o(t),e),new Error(`${(e=>`[@square/maker]${e}`)(t)} ${e}`)})(t,n)}}},8938:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Page_hD_dX {\n\tpadding: 32px;\n}\n.Nav_TyMTe {\n\tmargin-top: 32px;\n}\n.NavLink_Dfv6D {\n\tcolor: inherit;\n\tfont-size: 20px;\n\ttext-decoration: none\n}\n.NavLink_Dfv6D:hover {\n\t\ttext-decoration: underline;\n}\n",""]),i.locals={Page:"Page_hD_dX",Nav:"Nav_TyMTe",NavLink:"NavLink_Dfv6D"},e.exports=i},2630:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},e.exports=i},5820:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),i.locals={Theme:"Theme_rI2oH"},e.exports=i},4729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var i={components:{MHeading:n(3216).b},data(){return{experiments:this.getExperiments()}},methods:{getExperiments(){return this.$router.options.routes.map((e=>{const t=e.name?e:e.children.find((e=>!e.path));return{label:e.rawName.replace(/\.vue$/,""),name:t.name}})).filter((e=>"index"!==e.name))}}},o=n(2182),s=n.n(o);var r=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Page},[n("m-heading",{attrs:{size:4}},[e._v("\n\t\tLab experiments\n\t")]),e._v(" "),n("nav",{class:e.$s.Nav},e._l(e.experiments,(function(t){return n("li",{key:t.name},[n("router-link",{class:e.$s.NavLink,attrs:{to:{name:t.name}}},[e._v("\n\t\t\t\t"+e._s(t.label)+"\n\t\t\t")])],1)})),0)],1)}),[],!1,(function(e){this.$s=s().locals||s()}),null,null).exports},2182:function(e,t,n){var i=n(8938);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("304aafff",i,!0,{})},1491:function(e,t,n){var i=n(2630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("ceb27898",i,!0,{})},5004:function(e,t,n){var i=n(5820);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("12fe2849",i,!0,{})}}]);