(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[4261],{70990:function(n,o,a){"use strict";a.d(o,{H:function(){return b}});var t=a(60771),d=a.n(t),r=a(44185);var e={inject:{theme:{default:(0,r.uH)(),from:r.YH}},inheritAttrs:!1,props:{element:{type:String,default:"p",validator:n=>["p","span","li"].includes(n)},size:{type:Number,default:void 0,validator:n=>n>=-2&&n<=1},fontFamily:{type:String,default:void 0},fontWeight:{type:Number,default:void 0,validator:n=>n>=100&&n<=900},color:{type:String,default:void 0,validator:n=>d().valid(n)},fontStyle:{type:String,default:"inherit",validator:n=>["inherit","normal","italic"].includes(n)},textTransform:{type:String,default:"inherit",validator:n=>["inherit","none","uppercase"].includes(n)},textAlign:{type:String,default:"inherit",validator:n=>["inherit","left","right","center"].includes(n)}},computed:{...(0,r.C9)("text",["size","fontFamily","fontWeight","color"]),sizeClass(){return this.resolvedSize>=0?this.resolvedSize.toString():`minus${this.resolvedSize}`},inlineStyles(){const{fonts:n}=this.theme;return{fontFamily:this.resolvedFontFamily,fontWeight:this.resolvedFontWeight,color:this.resolvedColor,"--mobile-base-font-size":n.baseSize,"--mobile-font-size-scale":n.sizeScale}}},render(n){const{$s:o,sizeClass:a,element:t,inlineStyles:d,fontStyle:r,textTransform:e,textAlign:i}=this,l=this.$slots.default;return n(t,{class:[o.Paragraph,o[`size_${a}`],{[o[`fontstyle_${r}`]]:"inherit"!==r,[o[`texttransform_${e}`]]:"inherit"!==e,[o[`textalign_${i}`]]:"inherit"!==i}],attrs:this.$attrs,style:d,on:this.$listeners},l)}},i=a(7493),l=a.n(i);var b=(0,a(51900).Z)(e,undefined,undefined,!1,(function(n){this.$s=l().locals||l()}),null,null).exports},44185:function(n,o,a){"use strict";a.d(o,{qo:function(){return x},YH:function(){return i},uH:function(){return k},C9:function(){return y}});var t=a(85066),d=a.n(t),r=a(54299),e=a.n(r);var i=Symbol("ThemeKey"),l=a(20643),b=a.n(l),f=a(92810),m=a.n(f),s=a(75692),v=a.n(s),c=a(32416);function p(n){return v()(n)&&n.startsWith("@")?this.getPath(n):n}function h(n){if(!v()(n))throw new Error(`cannot resolve pointer ${n} it is not a string`);if(!n.startsWith("@"))throw new Error(`cannot resolve pointer ${n} it is missed the @ prefix`);const o=n.slice(1),a=b()(this,o);if(m()(a))throw new Error(`invalid pointer ${n} does not point to a field that exists within the theme`);return a}function y(n,o){const a={};for(const d of o)a[`resolved${t=d,t[0].toUpperCase()+t.slice(1)}`]=function(){if(!m()(this[d]))return this[d];const o=this.theme[n][d];if(o){const a=o,t=this.theme.resolve(a),r=this.$vnode.componentOptions.Ctor.extendOptions.props[d].validator;return r&&c.Z.error(r(t),`Invalid value "${t}" for prop "${d}" for component "${n}" in theme.`),t}};var t;return a}function k(){return{colors:{"neutral-0":"#ffffff","neutral-10":"#f1f1f1","neutral-20":"#d3d3d3","neutral-80":"#707070","neutral-90":"#1b1b1b","neutral-100":"#000000",background:"#ffffff",heading:"#000000",text:"#000000",elevation:"#ffffff",overlay:"rgba(0, 0, 0, 0.3)",primary:"#000000"},fonts:{baseSize:16,sizeScale:1.17},profiles:[{id:"defaultProfile"}],button:{size:"medium",variant:"primary",shape:"rounded",color:"@colors.primary",textColor:void 0,fullWidth:!1,align:"center"},textbutton:{color:"@colors.primary",size:"medium"},actionbarbutton:{color:"@colors.primary",shape:"pill",textColor:void 0,fullWidth:!1,align:"center"},text:{fontFamily:"inherit",size:0,color:"@colors.text",fontWeight:400},heading:{fontFamily:"inherit",size:2,color:"@colors.heading",fontWeight:700},choice:{selectedColor:void 0},stepper:{color:'@colors["neutral-10"]',textColor:'@colors["neutral-90"]',shape:"pill"},notice:{color:void 0},modal:{color:void 0,bgColor:void 0},container:{color:void 0,bgColor:void 0},resolve:p,getPath:h}}function w(n,o,a,t){e()(n,o,a),e()(n,d()(n.profiles,{id:t})),n.colors={...n.colors},n.resolve=p,n.getPath=h}var g={inject:{parentTheme:{default:k(),from:i}},provide(){return{[i]:this.$data}},inheritAttrs:!1,props:{theme:{type:Object,default:()=>({})},profile:{type:String,default:"defaultProfile"}},data(){const n={};return w(n,this.parentTheme,this.theme,this.profile),n},computed:{styles(){const{colors:n}=this;return{"--neutral-0":n["neutral-0"],"--neutral-10":n["neutral-10"],"--neutral-20":n["neutral-20"],"--neutral-80":n["neutral-80"],"--neutral-90":n["neutral-90"],"--neutral-100":n["neutral-100"],"--color-background":n.background,"--color-heading":n.heading,"--color-text":n.text,"--color-elevation":n["color-elevation"],"--color-overlay":n["color-overlay"]}}},beforeUpdate(){w(this.$data,this.parentTheme,this.theme,this.profile)}},u=a(35004),_=a.n(u);var x=(0,a(51900).Z)(g,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("div",{class:n.$s.Theme,style:n.styles},[n._t("default")],2)}),[],!1,(function(n){this.$s=_().locals||_()}),null,null).exports},32416:function(n,o,a){"use strict";var t=a(14219);const d={warn(n,o,a){n||(0,t.K)(o,a)},error(n,o,a){n||(0,t._)(o,a)}};o.Z=d},14219:function(n,o,a){"use strict";a.d(o,{_:function(){return r},K:function(){return e}});const t="object"==typeof process&&"object"==typeof process.env&&!0,d=n=>[`%c @square/maker${n}`,"background:#212121; padding:2px; border: 1px solid #646464; border-radius:3px; color:#fff"],r=(n,o)=>{throw console.error(...d(o),n),new Error(`${(n=>`[@square/maker]${n}`)(o)} ${n}`)},e=(n,o)=>{t&&console.warn(...d(o),n)}},62716:function(n,o,a){var t=a(77705)((function(n){return n[1]}));t.push([n.id,"\n.Paragraph_zo1hq {\n\t/* min breakpoint config */\n\t--min-resolution: 320; /* arbitrary value */\n\t--min-font-size: var(--mobile-base-font-size);\n\t--min-font-size-scale: var(--mobile-font-size-scale);\n\n\t/* min type scale */\n\t--min-fs--2: calc(var(--min-fs--1) / var(--min-font-size-scale));\n\t--min-fs--1: calc(var(--min-fs-0) / var(--min-font-size-scale));\n\t--min-fs-0: var(--min-font-size);\n\t--min-fs-1: calc(var(--min-fs-0) * var(--min-font-size-scale));\n\n\t/* max breakpoint config */\n\t--max-resolution: 1280; /* arbitrary value */\n\t--max-font-size: var(--min-font-size);\n\t--max-font-size-scale: calc(var(--min-font-size-scale) + 0.11); /* arbitrary value */\n\n\t/* max type scale */\n\t--max-fs--2: calc(var(--max-fs--1) / var(--max-font-size-scale));\n\t--max-fs--1: calc(var(--max-fs-0) / var(--max-font-size-scale));\n\t--max-fs-0: var(--max-font-size);\n\t--max-fs-1: calc(var(--max-fs-0) * var(--max-font-size-scale));\n\n\t/* interpolation variables */\n\t--resolution-range: calc(var(--max-resolution) - var(--min-resolution));\n\t--resolution: 100vw;\n\t--resolution-progress: calc(var(--resolution) - (var(--min-resolution) * 1px));\n\t--interpolate-by: calc(var(--resolution-progress) / var(--resolution-range));\n\t--range-fs--2: calc(var(--max-fs--2) - var(--min-fs--2));\n\t--range-fs--1: calc(var(--max-fs--1) - var(--min-fs--1));\n\t--range-fs-0: calc(var(--max-fs-0) - var(--min-fs-0));\n\t--range-fs-1: calc(var(--max-fs-1) - var(--min-fs-1));\n\n\t/* fluid type scale */\n\t--fs--2: max(12px, calc(var(--min-fs--2) * 1px + var(--range-fs--2) * var(--interpolate-by)));\n\t--fs--1: max(14px, calc(var(--min-fs--1) * 1px + var(--range-fs--1) * var(--interpolate-by)));\n\t--fs-0: calc(var(--min-fs-0) * 1px + var(--range-fs-0) * var(--interpolate-by));\n\t--fs-1: calc(var(--min-fs-1) * 1px + var(--range-fs-1) * var(--interpolate-by));\n\n\t/* line height config */\n\t--line-height: 1.5;\n\t--line-height-scale: 0.95;\n\n\t/* line height scale */\n\t--lh--2: calc(var(--lh--1) / var(--line-height-scale));\n\t--lh--1: calc(var(--lh-0) / var(--line-height-scale));\n\t--lh-0: var(--line-height);\n\t--lh-1: calc(var(--lh-0) * var(--line-height-scale));\n}\n.fontstyle_normal_iP1T1 {\n\tfont-style: normal;\n}\n.fontstyle_italic_SXlyN {\n\tfont-style: italic;\n}\n.texttransform_none_Oy5pc {\n\ttext-transform: none;\n}\n.texttransform_uppercase_bTyzJ {\n\ttext-transform: uppercase;\n}\n.textalign_left_Ijj1T {\n\ttext-align: left;\n}\n.textalign_right__rrDl {\n\ttext-align: right;\n}\n.textalign_center_c6Xty {\n\ttext-align: center;\n}\n@media (min-width: 1200px) {\n.Paragraph_zo1hq {\n\t\t--resolution: 1200px;\n}\n}\n.Paragraph_zo1hq.size_minus-2_MXP4r {\n\tfont-size: var(--fs--2);\n\tline-height: var(--lh--2);\n}\n.Paragraph_zo1hq.size_minus-1_EEwzY {\n\tfont-size: var(--fs--1);\n\tline-height: var(--lh--1);\n}\n.Paragraph_zo1hq.size_0_W7uVy {\n\tfont-size: var(--fs-0);\n\tline-height: var(--lh-0);\n}\n.Paragraph_zo1hq.size_1_sEevC {\n\tfont-size: var(--fs-1);\n\tline-height: var(--lh-1);\n}\n",""]),t.locals={Paragraph:"Paragraph_zo1hq",fontstyle_normal:"fontstyle_normal_iP1T1",fontstyle_italic:"fontstyle_italic_SXlyN",texttransform_none:"texttransform_none_Oy5pc",texttransform_uppercase:"texttransform_uppercase_bTyzJ",textalign_left:"textalign_left_Ijj1T",textalign_right:"textalign_right__rrDl",textalign_center:"textalign_center_c6Xty","size_minus-2":"size_minus-2_MXP4r","size_minus-1":"size_minus-1_EEwzY",size_0:"size_0_W7uVy",size_1:"size_1_sEevC"},n.exports=t},35820:function(n,o,a){var t=a(77705)((function(n){return n[1]}));t.push([n.id,"\n.Theme_rI2oH {\n\tcolor: var(--color-text);\n\tbackground-color: var(--color-background);\n}\n",""]),t.locals={Theme:"Theme_rI2oH"},n.exports=t},74037:function(n,o,a){var t=a(77705)((function(n){return n[1]}));t.push([n.id,'\n.markdown-body .octicon[data-v-69bf2400] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-69bf2400] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-69bf2400]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-69bf2400],\n.markdown-body h2 .octicon-link[data-v-69bf2400],\n.markdown-body h3 .octicon-link[data-v-69bf2400],\n.markdown-body h4 .octicon-link[data-v-69bf2400],\n.markdown-body h5 .octicon-link[data-v-69bf2400],\n.markdown-body h6 .octicon-link[data-v-69bf2400] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-69bf2400],\n.markdown-body h2:hover .anchor[data-v-69bf2400],\n.markdown-body h3:hover .anchor[data-v-69bf2400],\n.markdown-body h4:hover .anchor[data-v-69bf2400],\n.markdown-body h5:hover .anchor[data-v-69bf2400],\n.markdown-body h6:hover .anchor[data-v-69bf2400] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-69bf2400],\n.markdown-body h2:hover .anchor .octicon-link[data-v-69bf2400],\n.markdown-body h3:hover .anchor .octicon-link[data-v-69bf2400],\n.markdown-body h4:hover .anchor .octicon-link[data-v-69bf2400],\n.markdown-body h5:hover .anchor .octicon-link[data-v-69bf2400],\n.markdown-body h6:hover .anchor .octicon-link[data-v-69bf2400] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-69bf2400]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-69bf2400]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-69bf2400]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-69bf2400]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-69bf2400]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-69bf2400]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-69bf2400] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-69bf2400] {\n  display: block;\n}\n.markdown-body summary[data-v-69bf2400] {\n  display: list-item;\n}\n.markdown-body a[data-v-69bf2400] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-69bf2400]:active,\n.markdown-body a[data-v-69bf2400]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-69bf2400] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-69bf2400] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-69bf2400] {\n  border-style: none;\n}\n.markdown-body code[data-v-69bf2400],\n.markdown-body kbd[data-v-69bf2400],\n.markdown-body pre[data-v-69bf2400] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-69bf2400] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-69bf2400] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-69bf2400] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-69bf2400] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-69bf2400] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-69bf2400] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-69bf2400] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-69bf2400]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-69bf2400] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-69bf2400] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-69bf2400]:after,\n.markdown-body hr[data-v-69bf2400]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-69bf2400]:after {\n  clear: both;\n}\n.markdown-body table[data-v-69bf2400] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-69bf2400],\n.markdown-body th[data-v-69bf2400] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-69bf2400] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-69bf2400] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-69bf2400],\n.markdown-body h2[data-v-69bf2400],\n.markdown-body h3[data-v-69bf2400],\n.markdown-body h4[data-v-69bf2400],\n.markdown-body h5[data-v-69bf2400],\n.markdown-body h6[data-v-69bf2400] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-69bf2400] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-69bf2400],\n.markdown-body h2[data-v-69bf2400] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-69bf2400] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-69bf2400] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-69bf2400],\n.markdown-body h4[data-v-69bf2400] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-69bf2400] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-69bf2400] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-69bf2400],\n.markdown-body h6[data-v-69bf2400] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-69bf2400] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-69bf2400] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-69bf2400] {\n  margin: 0;\n}\n.markdown-body ol[data-v-69bf2400],\n.markdown-body ul[data-v-69bf2400] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-69bf2400],\n.markdown-body ul ol[data-v-69bf2400] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-69bf2400],\n.markdown-body ol ul ol[data-v-69bf2400],\n.markdown-body ul ol ol[data-v-69bf2400],\n.markdown-body ul ul ol[data-v-69bf2400] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-69bf2400] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-69bf2400],\n.markdown-body pre[data-v-69bf2400] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-69bf2400] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-69bf2400]::-webkit-inner-spin-button,\n.markdown-body input[data-v-69bf2400]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-69bf2400] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-69bf2400] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-69bf2400] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-69bf2400] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-69bf2400] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-69bf2400] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-69bf2400] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-69bf2400] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-69bf2400] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-69bf2400] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-69bf2400] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-69bf2400] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-69bf2400] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-69bf2400] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-69bf2400] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-69bf2400],\n.markdown-body .px-3[data-v-69bf2400] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-69bf2400] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-69bf2400] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-69bf2400] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-69bf2400] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-69bf2400] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-69bf2400] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-69bf2400] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-69bf2400] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-69bf2400],\n.markdown-body .pl-s .pl-v[data-v-69bf2400] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-69bf2400],\n.markdown-body .pl-en[data-v-69bf2400] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-69bf2400],\n.markdown-body .pl-smi[data-v-69bf2400] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-69bf2400] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-69bf2400] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-69bf2400],\n.markdown-body .pl-s[data-v-69bf2400],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-69bf2400],\n.markdown-body .pl-sr[data-v-69bf2400],\n.markdown-body .pl-sr .pl-cce[data-v-69bf2400],\n.markdown-body .pl-sr .pl-sra[data-v-69bf2400],\n.markdown-body .pl-sr .pl-sre[data-v-69bf2400] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-69bf2400],\n.markdown-body .pl-v[data-v-69bf2400] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-69bf2400] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-69bf2400] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-69bf2400] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-69bf2400]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-69bf2400] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-69bf2400] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-69bf2400],\n.markdown-body .pl-mh .pl-en[data-v-69bf2400],\n.markdown-body .pl-ms[data-v-69bf2400] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-69bf2400] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-69bf2400] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-69bf2400] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-69bf2400] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-69bf2400] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-69bf2400] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-69bf2400] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-69bf2400] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-69bf2400] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-69bf2400] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-69bf2400] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-69bf2400] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-69bf2400] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-69bf2400] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-69bf2400] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-69bf2400] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-69bf2400] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-69bf2400] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-69bf2400] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-69bf2400] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-69bf2400] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-69bf2400] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-69bf2400] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-69bf2400] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-69bf2400] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-69bf2400] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-69bf2400] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-69bf2400] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-69bf2400] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-69bf2400] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-69bf2400]:after,\n.markdown-body[data-v-69bf2400]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-69bf2400]:after {\n  clear: both;\n}\n.markdown-body[data-v-69bf2400]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-69bf2400]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-69bf2400]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-69bf2400],\n.markdown-body details[data-v-69bf2400],\n.markdown-body dl[data-v-69bf2400],\n.markdown-body ol[data-v-69bf2400],\n.markdown-body p[data-v-69bf2400],\n.markdown-body pre[data-v-69bf2400],\n.markdown-body table[data-v-69bf2400],\n.markdown-body ul[data-v-69bf2400] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-69bf2400] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-69bf2400] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-69bf2400]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-69bf2400]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-69bf2400],\n.markdown-body h2[data-v-69bf2400],\n.markdown-body h3[data-v-69bf2400],\n.markdown-body h4[data-v-69bf2400],\n.markdown-body h5[data-v-69bf2400],\n.markdown-body h6[data-v-69bf2400] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-69bf2400] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-69bf2400],\n.markdown-body h2[data-v-69bf2400] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-69bf2400] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-69bf2400] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-69bf2400] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-69bf2400] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-69bf2400] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-69bf2400],\n.markdown-body ul[data-v-69bf2400] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-69bf2400],\n.markdown-body ol ul[data-v-69bf2400],\n.markdown-body ul ol[data-v-69bf2400],\n.markdown-body ul ul[data-v-69bf2400] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-69bf2400] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-69bf2400] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-69bf2400] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-69bf2400] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-69bf2400] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-69bf2400] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-69bf2400] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-69bf2400] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-69bf2400],\n.markdown-body table th[data-v-69bf2400] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-69bf2400] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-69bf2400]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-69bf2400] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-69bf2400] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-69bf2400] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-69bf2400] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-69bf2400] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-69bf2400] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-69bf2400] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-69bf2400] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-69bf2400],\n.markdown-body pre[data-v-69bf2400] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-69bf2400] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-69bf2400] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-69bf2400]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-69bf2400] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-69bf2400] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-69bf2400] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-69bf2400]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-69bf2400]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-69bf2400] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-69bf2400] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-69bf2400],\n.markdown-body .pl-token[data-v-69bf2400]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-69bf2400] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-69bf2400] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-69bf2400] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-69bf2400] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-69bf2400] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-69bf2400] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-69bf2400] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-69bf2400] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-69bf2400] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-69bf2400] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-69bf2400] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-69bf2400] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-69bf2400] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-69bf2400] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-69bf2400] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},84261:function(n,o,a){"use strict";a.r(o),a.d(o,{default:function(){return l}});var t={components:{MText:a(70990).H}},d=a(51900),r=(0,d.Z)(t,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",n._l([1,0,-1,-2],(function(o){return a("m-text",{key:o,attrs:{size:o}},[n._v("\n\t\tText (Size "+n._s(o)+")\n\t")])})),1)}),[],!1,null,null,null).exports,e=a(415),i={components:{Demo0:r,DemoCollapse:e.DemoCollapse,SrcFile:e.SrcFile}},l=(a(57220),(0,d.Z)(i,(function(){var n=this,o=n.$createElement;n._self._c;return n._m(3)}),[function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("p",[n._v("Supports attributes from "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p"}},[a("code",[n._v("<p>")])]),n._v(".")])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Prop")]),n._v(" "),a("th",[n._v("Type")]),n._v(" "),a("th",[n._v("Default")]),n._v(" "),a("th",[n._v("Possible values")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("element")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'p'")])]),n._v(" "),a("td",[a("code",[n._v("p")]),n._v(", "),a("code",[n._v("span")]),n._v(", "),a("code",[n._v("li")])]),n._v(" "),a("td",[n._v("HTML Element wrapper")])]),n._v(" "),a("tr",[a("td",[n._v("size")]),n._v(" "),a("td",[a("code",[n._v("number")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[a("code",[n._v("1")]),n._v(", "),a("code",[n._v("0")]),n._v(", "),a("code",[n._v("-1")]),n._v(", "),a("code",[n._v("-2")])]),n._v(" "),a("td",[n._v("Size of text")])]),n._v(" "),a("tr",[a("td",[n._v("font-family")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Font family")])]),n._v(" "),a("tr",[a("td",[n._v("font-weight")]),n._v(" "),a("td",[a("code",[n._v("number")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[a("code",[n._v("100")]),n._v(", "),a("code",[n._v("200")]),n._v(", "),a("code",[n._v("300")]),n._v(", "),a("code",[n._v("400")]),n._v(", "),a("code",[n._v("500")]),n._v(", "),a("code",[n._v("600")]),n._v(", "),a("code",[n._v("700")]),n._v(", "),a("code",[n._v("800")]),n._v(", "),a("code",[n._v("900")])]),n._v(" "),a("td",[n._v("Font weight with standard numeric keyword values")])]),n._v(" "),a("tr",[a("td",[n._v("color")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("—")]),n._v(" "),a("td",[n._v("Color")])]),n._v(" "),a("tr",[a("td",[n._v("font-style")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'inherit'")])]),n._v(" "),a("td",[a("code",[n._v("inherit")]),n._v(", "),a("code",[n._v("normal")]),n._v(", "),a("code",[n._v("italic")])]),n._v(" "),a("td",[n._v("font style")])]),n._v(" "),a("tr",[a("td",[n._v("text-transform")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'inherit'")])]),n._v(" "),a("td",[a("code",[n._v("inherit")]),n._v(", "),a("code",[n._v("none")]),n._v(", "),a("code",[n._v("uppercase")])]),n._v(" "),a("td",[n._v("text transform")])]),n._v(" "),a("tr",[a("td",[n._v("text-align")]),n._v(" "),a("td",[a("code",[n._v("string")])]),n._v(" "),a("td",[a("code",[n._v("'inherit'")])]),n._v(" "),a("td",[a("code",[n._v("inherit")]),n._v(", "),a("code",[n._v("left")]),n._v(", "),a("code",[n._v("right")]),n._v(", "),a("code",[n._v("center")])]),n._v(" "),a("td",[n._v("text align")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Slot")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("default")]),n._v(" "),a("td",[n._v("text content")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Text")]),n._v(" "),a("p",[n._v("Use the Text component for regular body text. There are 4 text sizes. The font family, font weight, and text color are customizable.")]),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div>\n\t\t<m-text\n\t\t\tv-for="size in [1, 0, -1, -2]"\n\t\t\t:key="size"\n\t\t\t:size="size"\n\t\t>\n\t\t\tText (Size {{ size }})\n\t\t</m-text>\n\t</div>\n</template>\n\n<script>\nimport { MText } from \'@square/maker/components/Text\';\n\nexport default {\n\tcomponents: {\n\t\tMText,\n\t},\n};\n<\/script>\n')]],2)],1),n._v(" "),a("h2",[n._v("Props")]),n._v(" "),n._m(0),n._v(" "),n._m(1),n._v(" "),a("h2",[n._v("Slots")]),n._v(" "),n._m(2)],1)}],!1,null,"69bf2400",null).exports)},7493:function(n,o,a){var t=a(62716);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("8cb0142e",t,!0,{})},35004:function(n,o,a){var t=a(35820);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("12fe2849",t,!0,{})},57220:function(n,o,a){var t=a(74037);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("4e059660",t,!0,{})}}]);