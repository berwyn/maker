(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[729],{3216:function(e,t,n){"use strict";n.d(t,{b:function(){return u}});var i=n(771),r=n.n(i),o=n(1098);var s={inject:{theme:{default:(0,o.uH)(),from:o.YH}},inheritAttrs:!1,props:{size:{type:Number,default:void 0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)},fontFamily:{type:String,default:void 0},textColor:{type:String,default:void 0,validator:e=>r().valid(e)}},computed:{...(0,o.C9)("heading",["size","textColor"]),tag(){if(this.element)return this.element;return this.resolvedSize>=4?"h1":this.resolvedSize>=3?"h2":this.resolvedSize>=2?"h3":this.resolvedSize>=1?"h4":this.resolvedSize>=0?"h5":"h6"},sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){return{color:this.resolvedTextColor}}},render(e){const{$s:t,sizeClass:n,tag:i,inlineStyles:r}=this,o=this.$slots.default;return e(i,{class:[t.Heading,t[`size_${n}`]],style:r,attrs:this.$attrs,on:this.$listeners},o)}},a=n(1491),l=n.n(a);var u=(0,n(1900).Z)(s,undefined,undefined,!1,(function(e){this.$s=l().locals||l()}),null,null).exports},1098:function(e,t,n){"use strict";n.d(t,{qo:function(){return $},YH:function(){return a},uH:function(){return m},C9:function(){return g}});var i=n(5066),r=n.n(i),o=n(4299),s=n.n(o);var a=Symbol("ThemeKey"),l=n(643),u=n.n(l),h=n(2810),f=n.n(h),d=n(5692),c=n.n(d),p=n(7356);function v(e){return c()(e)&&e.startsWith("@")?this.getPath(e):e}function _(e){if(!c()(e))throw new Error(`cannot resolve pointer ${e} it is not a string`);if(!e.startsWith("@"))throw new Error(`cannot resolve pointer ${e} it is missed the @ prefix`);const t=e.slice(1),n=u()(this,t);if(f()(n))throw new Error(`invalid pointer ${e} does not point to a field that exists within the theme`);return n}function g(e,t){const n={};for(const r of t)n[`resolved${i=r,i[0].toUpperCase()+i.slice(1)}`]=function(){if(!f()(this[r]))return this[r];const t=this.theme[e][r];if(t){const n=t,i=this.theme.resolve(n),o=this.$vnode.componentOptions.Ctor.extendOptions.props[r].validator;return o&&p.Z.error(o(i),`Invalid value "${i}" for prop "${r}" for component "${e}" in theme.`),i}};var i;return n}function m(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0},heading:{fontFamily:"inherit",size:2},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:v,getPath:_}}function z(e,t,n,i){s()(e,t,n),s()(e,r()(e.profiles,{id:i})),e.colors={...e.colors},e.resolve=v,e.getPath=_}var x={inject:{parentTheme:{default:m(),from:a}},provide(){return{[a]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const e={};return z(e,this.parentTheme,this.theme,this.profile),e},computed:{styles(){const{colors:e}=this;return{"--neutral-0":e["neutral-0"],"--neutral-10":e["neutral-10"],"--neutral-20":e["neutral-20"],"--neutral-80":e["neutral-80"],"--neutral-90":e["neutral-90"],"--neutral-100":e["neutral-100"],"--color-background":e.background,"--color-heading":e.heading,"--color-text":e.text,"--color-elevation":e["color-elevation"],"--color-overlay":e["color-overlay"]}}},beforeUpdate(){z(this.$data,this.parentTheme,this.theme,this.profile)}},b=n(5004),y=n.n(b);var $=(0,n(1900).Z)(x,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.$s.Theme,style:e.styles},[e._t("default")],2)}),[],!1,(function(e){this.$s=y().locals||y()}),null,null).exports},7356:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});const i="object"==typeof process&&"object"==typeof process.env&&!0,r=e=>[`%c @square/maker${e}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"];var o={warn(e,t,n){e||((e,t)=>{i&&console.warn(...r(t),e)})(t,n)},error(e,t,n){e||((e,t)=>{throw console.error(...r(t),e),new Error(`${(e=>`[@square/maker]${e}`)(t)} ${e}`)})(t,n)}}},8938:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Page_hD_dX {\n\tpadding: 32px;\n}\n.Nav_TyMTe {\n\tmargin-top: 32px;\n}\n.NavLink_Dfv6D {\n\tcolor: inherit;\n\tfont-size: 20px;\n\ttext-decoration: none\n}\n.NavLink_Dfv6D:hover {\n\t\ttext-decoration: underline;\n}\n",""]),i.locals={Page:"Page_hD_dX",Nav:"Nav_TyMTe",NavLink:"NavLink_Dfv6D"},e.exports=i},2630:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--color-heading);\n\tfont-weight: var(--font-weights-heading, bold);\n\tfont-family: var(--font-heading, inherit);\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},e.exports=i},5820:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),i.locals={Theme:"Theme_rI2oH"},e.exports=i},4729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var i={components:{MHeading:n(3216).b},data(){return{experiments:this.getExperiments()}},methods:{getExperiments(){return this.$router.options.routes.map((e=>{const t=e.name?e:e.children.find((e=>!e.path));return{label:e.rawName.replace(/\.vue$/,""),name:t.name}})).filter((e=>"index"!==e.name))}}},r=n(2182),o=n.n(r);var s=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Page},[n("m-heading",{attrs:{size:4}},[e._v("\n\t\tLab experiments\n\t")]),e._v(" "),n("nav",{class:e.$s.Nav},e._l(e.experiments,(function(t){return n("li",{key:t.name},[n("router-link",{class:e.$s.NavLink,attrs:{to:{name:t.name}}},[e._v("\n\t\t\t\t"+e._s(t.label)+"\n\t\t\t")])],1)})),0)],1)}),[],!1,(function(e){this.$s=o().locals||o()}),null,null).exports},2182:function(e,t,n){var i=n(8938);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("304aafff",i,!0,{})},1491:function(e,t,n){var i=n(2630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("ceb27898",i,!0,{})},5004:function(e,t,n){var i=n(5820);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("12fe2849",i,!0,{})}}]);