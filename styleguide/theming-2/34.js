(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{258:function(n,o,t){var a=t(490);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(3).default)("15142b83",a,!0,{})},259:function(n,o,t){var a=t(492);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(3).default)("4bf20f88",a,!0,{})},45:function(n,o,t){"use strict";t.r(o);var a=t(92),e=t(501),d=t(57);var r={name:"TransitionResize",data:()=>({leaveWidth:0,leaveHeight:0,enterWidth:0,enterHeight:0}),methods:{onBeforeEnter(n){n.style.setProperty("opacity","0%"),n.style.setProperty("overflow","hidden")},onEnter(n,o){if(this.enterWidth=n.offsetWidth,this.enterHeight=n.offsetHeight,this.leaveWidth===this.enterWidth&&this.leaveHeight===this.enterHeight)return n.style.removeProperty("overflow"),void Object(d.d)({element:n,onComplete:o});!function({element:n,startWidth:o,endWidth:t,startHeight:r,endHeight:i,onComplete:l}){const m=Object(a.a)(n),b=Object(d.o)(o,t,"width","px"),p=Object(d.o)(r,i,"height","px"),s=n=>({...b(n),...p(n)}),c=d.a;m.set(s(c.from)),m.render(),Object(e.a)({...c,...d.i,onUpdate(n){m.set(s(n))},onComplete:l})}({element:n,startWidth:this.leaveWidth,endWidth:this.enterWidth,startHeight:this.leaveHeight,endHeight:this.enterHeight,onComplete(){n.style.removeProperty("overflow"),Object(d.d)({element:n,onComplete:o})}})},onAfterEnter(n){window.setTimeout(()=>{n.style.removeProperty("opacity"),n.style.removeProperty("width"),n.style.removeProperty("height")},50)},onBeforeLeave(n){this.leaveWidth=n.offsetWidth,this.leaveHeight=n.offsetHeight},onLeave(n,o){Object(d.e)({element:n,onComplete:o})}}},i=t(0),l={components:{MTransitionResize:Object(i.a)(r,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("transition",n._g(n._b({attrs:{css:!1,mode:"out-in"},on:{"before-enter":n.onBeforeEnter,enter:n.onEnter,"after-enter":n.onAfterEnter,"before-leave":n.onBeforeLeave,leave:n.onLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({showSmall:!0}),methods:{toggleSmall(){this.showSmall=!this.showSmall}}},m=(t(489),Object(i.a)(l,(function(){var n=this.$createElement,o=this._self._c||n;return o("div",{staticClass:"bordered",on:{click:this.toggleSmall}},[o("m-transition-resize",[this.showSmall?o("div",{key:"small",staticClass:"smallTomato"},[o("p",{staticClass:"narrow"},[this._v("\n\t\t\t\tnarrow small tomato\n\t\t\t")])]):o("div",{key:"large",staticClass:"largeGold"},[o("p",{staticClass:"wide"},[this._v("\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t\twiiiiide large gooooold\n\t\t\t")])])])],1)}),[],!1,null,"2786be66",null).exports),b=t(59),p={components:{Demo0:m,DemoCollapse:b.DemoCollapse,SrcFile:b.SrcFile}},s=(t(491),Object(i.a)(p,(function(){var n=this.$createElement;this._self._c;return this._m(1)}),[function(){var n=this.$createElement,o=this._self._c||n;return o("table",[o("thead",[o("tr",[o("th",[this._v("Slot")]),this._v(" "),o("th",[this._v("Description")])])]),this._v(" "),o("tbody",[o("tr",[o("td",[this._v("default")]),this._v(" "),o("td",[this._v("content to animate")])])])])},function(){var n=this,o=n.$createElement,t=n._self._c||o;return t("div",{staticClass:"markdown-body"},[t("h1",[n._v("Transition Resize")]),n._v(" "),t("demo-collapse",[t("Demo0"),n._v(" "),t("src-file",{attrs:{name:"",language:"html"}},[[n._v('<template>\n\t<div\n\t\tclass="bordered"\n\t\t@click="toggleSmall"\n\t>\n\t\t<m-transition-resize>\n\t\t\t<div\n\t\t\t\tv-if="showSmall"\n\t\t\t\tkey="small"\n\t\t\t\tclass="smallTomato"\n\t\t\t>\n\t\t\t\t<p class="narrow">\n\t\t\t\t\tnarrow small tomato\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div\n\t\t\t\tv-else\n\t\t\t\tkey="large"\n\t\t\t\tclass="largeGold"\n\t\t\t>\n\t\t\t\t<p class="wide">\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t\twiiiiide large gooooold\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t</m-transition-resize>\n\t</div>\n</template>\n\n<script>\nimport { MTransitionResize } from \'@square/maker/components/TransitionResize\';\n\nexport default {\n\tcomponents: {\n\t\tMTransitionResize,\n\t},\n\tdata() {\n\t\treturn {\n\t\t\tshowSmall: true,\n\t\t};\n\t},\n\tmethods: {\n\t\ttoggleSmall() {\n\t\t\tthis.showSmall = !this.showSmall;\n\t\t},\n\t},\n};\n<\/script>\n\n<style scoped>\n.bordered {\n\tborder: 2px solid black;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.smallTomato {\n\tbackground-color: tomato;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.largeGold {\n\tbackground-color: gold;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.wide {\n\tmax-width: 300px;\n}\n.narrow {\n\tmax-width: 100px;\n}\n</style>\n')]],2)],1),n._v(" "),t("h2",[n._v("Slots")]),n._v(" "),n._m(0)],1)}],!1,null,"22965e28",null));o.default=s.exports},489:function(n,o,t){"use strict";t(258)},490:function(n,o,t){var a=t(1)(!1);a.push([n.i,"\n.bordered[data-v-2786be66] {\n\tborder: 2px solid black;\n\tdisplay: inline-block;\n\tcursor: pointer;\n}\n.smallTomato[data-v-2786be66] {\n\tbackground-color: tomato;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.largeGold[data-v-2786be66] {\n\tbackground-color: gold;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.wide[data-v-2786be66] {\n\tmax-width: 300px;\n}\n.narrow[data-v-2786be66] {\n\tmax-width: 100px;\n}\n",""]),n.exports=a},491:function(n,o,t){"use strict";t(259)},492:function(n,o,t){var a=t(1)(!1);a.push([n.i,'\n.markdown-body .octicon[data-v-22965e28] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-22965e28] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-22965e28]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-22965e28],\n.markdown-body h2 .octicon-link[data-v-22965e28],\n.markdown-body h3 .octicon-link[data-v-22965e28],\n.markdown-body h4 .octicon-link[data-v-22965e28],\n.markdown-body h5 .octicon-link[data-v-22965e28],\n.markdown-body h6 .octicon-link[data-v-22965e28] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-22965e28],\n.markdown-body h2:hover .anchor[data-v-22965e28],\n.markdown-body h3:hover .anchor[data-v-22965e28],\n.markdown-body h4:hover .anchor[data-v-22965e28],\n.markdown-body h5:hover .anchor[data-v-22965e28],\n.markdown-body h6:hover .anchor[data-v-22965e28] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-22965e28],\n.markdown-body h2:hover .anchor .octicon-link[data-v-22965e28],\n.markdown-body h3:hover .anchor .octicon-link[data-v-22965e28],\n.markdown-body h4:hover .anchor .octicon-link[data-v-22965e28],\n.markdown-body h5:hover .anchor .octicon-link[data-v-22965e28],\n.markdown-body h6:hover .anchor .octicon-link[data-v-22965e28] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-22965e28]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-22965e28]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-22965e28]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-22965e28]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-22965e28]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-22965e28]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-22965e28] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-22965e28] {\n  display: block;\n}\n.markdown-body summary[data-v-22965e28] {\n  display: list-item;\n}\n.markdown-body a[data-v-22965e28] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-22965e28]:active,\n.markdown-body a[data-v-22965e28]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-22965e28] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-22965e28] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-22965e28] {\n  border-style: none;\n}\n.markdown-body code[data-v-22965e28],\n.markdown-body kbd[data-v-22965e28],\n.markdown-body pre[data-v-22965e28] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-22965e28] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-22965e28] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-22965e28] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-22965e28] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-22965e28] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-22965e28] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-22965e28] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-22965e28]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-22965e28] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-22965e28] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-22965e28]:after,\n.markdown-body hr[data-v-22965e28]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-22965e28]:after {\n  clear: both;\n}\n.markdown-body table[data-v-22965e28] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-22965e28],\n.markdown-body th[data-v-22965e28] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-22965e28] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-22965e28] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-22965e28],\n.markdown-body h2[data-v-22965e28],\n.markdown-body h3[data-v-22965e28],\n.markdown-body h4[data-v-22965e28],\n.markdown-body h5[data-v-22965e28],\n.markdown-body h6[data-v-22965e28] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-22965e28] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-22965e28],\n.markdown-body h2[data-v-22965e28] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-22965e28] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-22965e28] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-22965e28],\n.markdown-body h4[data-v-22965e28] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-22965e28] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-22965e28] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-22965e28],\n.markdown-body h6[data-v-22965e28] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-22965e28] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-22965e28] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-22965e28] {\n  margin: 0;\n}\n.markdown-body ol[data-v-22965e28],\n.markdown-body ul[data-v-22965e28] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-22965e28],\n.markdown-body ul ol[data-v-22965e28] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-22965e28],\n.markdown-body ol ul ol[data-v-22965e28],\n.markdown-body ul ol ol[data-v-22965e28],\n.markdown-body ul ul ol[data-v-22965e28] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-22965e28] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-22965e28],\n.markdown-body pre[data-v-22965e28] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-22965e28] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-22965e28]::-webkit-inner-spin-button,\n.markdown-body input[data-v-22965e28]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-22965e28] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-22965e28] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-22965e28] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-22965e28] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-22965e28] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-22965e28] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-22965e28] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-22965e28] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-22965e28] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-22965e28] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-22965e28] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-22965e28] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-22965e28] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-22965e28] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-22965e28] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-22965e28],\n.markdown-body .px-3[data-v-22965e28] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-22965e28] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-22965e28] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-22965e28] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-22965e28] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-22965e28] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-22965e28] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-22965e28] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-22965e28] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-22965e28],\n.markdown-body .pl-s .pl-v[data-v-22965e28] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-22965e28],\n.markdown-body .pl-en[data-v-22965e28] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-22965e28],\n.markdown-body .pl-smi[data-v-22965e28] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-22965e28] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-22965e28] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-22965e28],\n.markdown-body .pl-s[data-v-22965e28],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-22965e28],\n.markdown-body .pl-sr[data-v-22965e28],\n.markdown-body .pl-sr .pl-cce[data-v-22965e28],\n.markdown-body .pl-sr .pl-sra[data-v-22965e28],\n.markdown-body .pl-sr .pl-sre[data-v-22965e28] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-22965e28],\n.markdown-body .pl-v[data-v-22965e28] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-22965e28] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-22965e28] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-22965e28] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-22965e28]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-22965e28] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-22965e28] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-22965e28],\n.markdown-body .pl-mh .pl-en[data-v-22965e28],\n.markdown-body .pl-ms[data-v-22965e28] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-22965e28] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-22965e28] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-22965e28] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-22965e28] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-22965e28] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-22965e28] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-22965e28] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-22965e28] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-22965e28] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-22965e28] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-22965e28] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-22965e28] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-22965e28] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-22965e28] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-22965e28] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-22965e28] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-22965e28] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-22965e28] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-22965e28] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-22965e28] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-22965e28] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-22965e28] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-22965e28] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-22965e28] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-22965e28] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-22965e28] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-22965e28] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-22965e28] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-22965e28] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-22965e28] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-22965e28]:after,\n.markdown-body[data-v-22965e28]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-22965e28]:after {\n  clear: both;\n}\n.markdown-body[data-v-22965e28]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-22965e28]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-22965e28]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-22965e28],\n.markdown-body details[data-v-22965e28],\n.markdown-body dl[data-v-22965e28],\n.markdown-body ol[data-v-22965e28],\n.markdown-body p[data-v-22965e28],\n.markdown-body pre[data-v-22965e28],\n.markdown-body table[data-v-22965e28],\n.markdown-body ul[data-v-22965e28] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-22965e28] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-22965e28] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-22965e28]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-22965e28]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-22965e28],\n.markdown-body h2[data-v-22965e28],\n.markdown-body h3[data-v-22965e28],\n.markdown-body h4[data-v-22965e28],\n.markdown-body h5[data-v-22965e28],\n.markdown-body h6[data-v-22965e28] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-22965e28] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-22965e28],\n.markdown-body h2[data-v-22965e28] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-22965e28] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-22965e28] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-22965e28] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-22965e28] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-22965e28] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-22965e28],\n.markdown-body ul[data-v-22965e28] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-22965e28],\n.markdown-body ol ul[data-v-22965e28],\n.markdown-body ul ol[data-v-22965e28],\n.markdown-body ul ul[data-v-22965e28] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-22965e28] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-22965e28] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-22965e28] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-22965e28] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-22965e28] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-22965e28] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-22965e28] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-22965e28] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-22965e28],\n.markdown-body table th[data-v-22965e28] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-22965e28] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-22965e28]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-22965e28] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-22965e28] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-22965e28] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-22965e28] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-22965e28] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-22965e28] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-22965e28] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-22965e28] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-22965e28],\n.markdown-body pre[data-v-22965e28] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-22965e28] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-22965e28] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-22965e28]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-22965e28] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-22965e28] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-22965e28] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-22965e28]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-22965e28]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-22965e28] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-22965e28] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-22965e28],\n.markdown-body .pl-token[data-v-22965e28]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-22965e28] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-22965e28] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-22965e28] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-22965e28] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-22965e28] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-22965e28] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-22965e28] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-22965e28] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-22965e28] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-22965e28] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-22965e28] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-22965e28] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-22965e28] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-22965e28] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-22965e28] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=a},57:function(n,o,t){"use strict";t.d(o,"h",(function(){return d})),t.d(o,"p",(function(){return r})),t.d(o,"j",(function(){return i})),t.d(o,"i",(function(){return l})),t.d(o,"a",(function(){return m})),t.d(o,"o",(function(){return p})),t.d(o,"d",(function(){return y})),t.d(o,"b",(function(){return h})),t.d(o,"e",(function(){return g})),t.d(o,"n",(function(){return f})),t.d(o,"k",(function(){return u})),t.d(o,"l",(function(){return x})),t.d(o,"m",(function(){return z})),t.d(o,"g",(function(){return C})),t.d(o,"c",(function(){return j})),t.d(o,"f",(function(){return _}));var a=t(92),e=t(501);const d=0,r=840,i=200,l={type:"spring",stiffness:600,damping:60,mass:1},m={from:0,to:100},b={from:100,to:0};function p(n,o,t,a){return e=>function(n,o,t,a,e){return{[a]:"".concat(n/100*(t-o)+o).concat(e)}}(e,n,o,t,a)}const s=p(0,100,"opacity","%"),c=p(0,100,"y","%"),v=p(0,100,"x","%"),w=p(40,0,"y","px"),k=n=>({...s(n),...w(n)});function y({element:n,onComplete:o}){const t=Object(a.a)(n),d=s,r=m;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function h({element:n,onComplete:o}){const t=Object(a.a)(n),d=s,r=m;t.set(d(r.from)),t.render(),setTimeout(()=>{Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})},i)}function g({element:n,onComplete:o}){const t=Object(a.a)(n),d=s,r=b;t.set(d(r.from)),t.render(),Object(e.a)({...b,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function f({element:n,onComplete:o}){const t=Object(a.a)(n),d=c,r=b;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function u({element:n,onComplete:o}){const t=Object(a.a)(n),d=c,r=m;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function x({element:n,onComplete:o}){const t=Object(a.a)(n),d=v,r=b;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function z({element:n,onComplete:o}){const t=Object(a.a)(n),d=v,r=m;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function C({element:n,onComplete:o}){const t=Object(a.a)(n),d=k,r=m;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}function j({element:n,onComplete:o}){const t=Object(a.a)(n),d=k,r=m;t.set(d(r.from)),t.render(),setTimeout(()=>{Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})},i)}function _({element:n,onComplete:o}){const t=Object(a.a)(n),d=k,r=b;t.set(d(r.from)),t.render(),Object(e.a)({...r,...l,onUpdate(n){t.set(d(n))},onComplete:o})}}}]);