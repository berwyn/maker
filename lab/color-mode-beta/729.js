(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[729],{3216:function(e,t,n){"use strict";n.d(t,{b:function(){return l}});var i={inheritAttrs:!1,props:{size:{type:Number,default:0,validator:e=>e>=-2&&e<=7},element:{type:String,default:void 0,validator:e=>["h1","h2","h3","h4","h5","h6","div"].includes(e)}},computed:{tag(){if(this.element)return this.element;return this.size>=4?"h1":this.size>=3?"h2":this.size>=2?"h3":this.size>=1?"h4":this.size>=0?"h5":"h6"},stringSize(){return this.size>=0?this.size.toString():`minus-${Math.abs(this.size)}`}},render(e){const{$s:t,stringSize:n,tag:i}=this;return e(i,{class:[t.Heading,t[`size_${n}`]],attrs:this.$attrs,on:this.$listeners},this.$slots.default)}},s=n(1491),a=n.n(s);var l=(0,n(1900).Z)(i,undefined,undefined,!1,(function(e){this.$s=a().locals||a()}),null,null).exports},8938:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n.Page_hD_dX {\n\tpadding: 32px;\n}\n.Nav_TyMTe {\n\tmargin-top: 32px;\n}\n.NavLink_Dfv6D {\n\tcolor: inherit;\n\tfont-size: 20px;\n\ttext-decoration: none\n}\n.NavLink_Dfv6D:hover {\n\t\ttext-decoration: underline;\n}\n",""]),i.locals={Page:"Page_hD_dX",Nav:"Nav_TyMTe",NavLink:"NavLink_Dfv6D"},e.exports=i},2630:function(e,t,n){var i=n(7705)((function(e){return e[1]}));i.push([e.id,"\n:root {\n\t--font-size-scale: 1.17;\n\t--font-size: 16px;\n\t--line-height: 1.5em;\n\t--line-height-scale: 0.95;\n}\n@media (min-width: 600px) {\n:root {\n\t\t--font-size-scale: 1.28;\n\t\t--font-size: 16px;\n}\n}\n\n/* stylelint-disable-next-line no-duplicate-selectors */\n:root {\n\t--font-step-minus-2-size: 12px;\n\t--font-step-minus-2-line-height: var(--line-height);\n\t--font-step-minus-1-size: 14px;\n\t--font-step-minus-1-line-height: var(--line-height);\n\t--font-step-0-size: var(--font-size);\n\t--font-step-0-line-height: var(--line-height);\n\t--font-step-1-size: calc(var(--font-step-0-size) * var(--font-size-scale));\n\t--font-step-1-line-height: calc(var(--font-step-0-line-height) * var(--line-height-scale));\n\t--font-step-2-size: calc(var(--font-step-1-size) * var(--font-size-scale));\n\t--font-step-2-line-height: calc(var(--font-step-1-line-height) * var(--line-height-scale));\n\t--font-step-3-size: calc(var(--font-step-2-size) * var(--font-size-scale));\n\t--font-step-3-line-height: calc(var(--font-step-2-line-height) * var(--line-height-scale));\n\t--font-step-4-size: calc(var(--font-step-3-size) * var(--font-size-scale));\n\t--font-step-4-line-height: calc(var(--font-step-3-line-height) * var(--line-height-scale));\n\t--font-step-5-size: calc(var(--font-step-4-size) * var(--font-size-scale));\n\t--font-step-5-line-height: calc(var(--font-step-4-line-height) * var(--line-height-scale));\n\t--font-step-6-size: calc(var(--font-step-5-size) * var(--font-size-scale));\n\t--font-step-6-line-height: calc(var(--font-step-5-line-height) * var(--line-height-scale));\n\t--font-step-7-size: calc(var(--font-step-6-size) * var(--font-size-scale));\n\t--font-step-7-line-height: calc(var(--font-step-6-line-height) * var(--line-height-scale));\n\t--font-step-1-size: 19px; /* Override Step 1 - Calculated value was too large for body text */\n}\n.Heading__6G7M {\n\tmargin: 0;\n\tcolor: var(--color-900);\n\tfont-family: inherit;\n}\n.Heading__6G7M.size_minus-2_MGt9D {\n\tfont-size: var(--font-step-minus-2-size);\n\tline-height: var(--font-step-minus-2-line-height);\n}\n.Heading__6G7M.size_minus-1_Bevg5 {\n\tfont-size: var(--font-step-minus-1-size);\n\tline-height: var(--font-step-minus-1-line-height);\n}\n.Heading__6G7M.size_0__pTXv {\n\tfont-size: var(--font-step-0-size);\n\tline-height: var(--font-step-0-line-height);\n}\n.Heading__6G7M.size_1_FlFbB {\n\tfont-size: var(--font-step-1-size);\n\tline-height: var(--font-step-1-line-height);\n}\n.Heading__6G7M.size_2__MGjo {\n\tfont-size: var(--font-step-2-size);\n\tline-height: var(--font-step-2-line-height);\n}\n.Heading__6G7M.size_3_pU0Gh {\n\tfont-size: var(--font-step-3-size);\n\tline-height: var(--font-step-3-line-height);\n}\n.Heading__6G7M.size_4_z8Jh6 {\n\tfont-size: var(--font-step-4-size);\n\tline-height: var(--font-step-4-line-height);\n}\n.Heading__6G7M.size_5_slwiN {\n\tfont-size: var(--font-step-5-size);\n\tline-height: var(--font-step-5-line-height);\n}\n.Heading__6G7M.size_6_z_Bam {\n\tfont-size: var(--font-step-6-size);\n\tline-height: var(--font-step-6-line-height);\n}\n.Heading__6G7M.size_7_N6H5I {\n\tfont-size: var(--font-step-7-size);\n\tline-height: var(--font-step-7-line-height);\n}\n",""]),i.locals={Heading:"Heading__6G7M","size_minus-2":"size_minus-2_MGt9D","size_minus-1":"size_minus-1_Bevg5",size_0:"size_0__pTXv",size_1:"size_1_FlFbB",size_2:"size_2__MGjo",size_3:"size_3_pU0Gh",size_4:"size_4_z8Jh6",size_5:"size_5_slwiN",size_6:"size_6_z_Bam",size_7:"size_7_N6H5I"},e.exports=i},4729:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var i={components:{MHeading:n(3216).b},data(){return{experiments:this.getExperiments()}},methods:{getExperiments(){return this.$router.options.routes.map((e=>{const t=e.name?e:e.children.find((e=>!e.path));return{label:e.rawName.replace(/\.vue$/,""),name:t.name}})).filter((e=>"index"!==e.name))}}},s=n(2182),a=n.n(s);var l=(0,n(1900).Z)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$s.Page},[n("m-heading",{attrs:{size:4}},[e._v("\n\t\tLab experiments\n\t")]),e._v(" "),n("nav",{class:e.$s.Nav},e._l(e.experiments,(function(t){return n("li",{key:t.name},[n("router-link",{class:e.$s.NavLink,attrs:{to:{name:t.name}}},[e._v("\n\t\t\t\t"+e._s(t.label)+"\n\t\t\t")])],1)})),0)],1)}),[],!1,(function(e){this.$s=a().locals||a()}),null,null).exports},2182:function(e,t,n){var i=n(8938);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("304aafff",i,!0,{})},1491:function(e,t,n){var i=n(2630);i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);(0,n(4023).Z)("ceb27898",i,!0,{})}}]);