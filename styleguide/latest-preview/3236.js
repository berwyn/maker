(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[3236],{39211:function(n,o,a){"use strict";a.d(o,{T:function(){return r}});var t=a(31838),d=a(45832),b={components:{MTransitionResponsive:t.w},inheritAttrs:!1,props:{enter:{type:Function,required:!0},leave:{type:Function,required:!0}},computed:{transitions(){return[{minWidth:d.iu,enter:this.enter,leave:this.leave}]}}},r=(0,a(51900).Z)(b,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("m-transition-responsive",n._g(n._b({attrs:{transitions:n.transitions}},"m-transition-responsive",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},31838:function(n,o,a){"use strict";a.d(o,{w:function(){return d}});var t={inheritAttrs:!1,props:{transitions:{type:Array,required:!0,validator:n=>{if(0===n.length)return!1;return 0===n[0].minWidth&&n.every((n=>(n.minWidth||0===n.minWidth)&&n.enter&&n.leave))}}},methods:{handleEnter(n,o){this.getResponsiveTransition().enter({element:n,onComplete:o})},handleLeave(n,o){this.getResponsiveTransition().leave({element:n,onComplete:o})},getResponsiveTransition(){if(1===this.transitions.length)return this.transitions[0];const n=window.innerWidth;let o;return this.transitions.forEach((a=>{n>=a.minWidth&&(o=a)})),o}}},d=(0,a(51900).Z)(t,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("transition",n._g(n._b({attrs:{css:!1},on:{enter:n.handleEnter,leave:n.handleLeave}},"transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},45832:function(n,o,a){"use strict";a.d(o,{iu:function(){return b},OE:function(){return r},AT:function(){return c},ST:function(){return i},hJ:function(){return f},Y7:function(){return s},dx:function(){return u},s4:function(){return x},vq:function(){return z},vn:function(){return _},w0:function(){return C},I0:function(){return M},$y:function(){return S},rG:function(){return Z},iM:function(){return j},tq:function(){return E},cT:function(){return T},uL:function(){return $},C9:function(){return L}});var t=a(19546),d=a(47069);const b=0,r=840,e="spring",c=200,i={type:e,stiffness:600,damping:60,mass:1},m={type:e,stiffness:400,damping:40,mass:1},l={type:e,stiffness:400,damping:30,mass:1.5},f={from:0,to:100},p={from:100,to:0};function s(n,o,a,t){return d=>function(n,o,a,t,d){return{[t]:`${n/100*(a-o)+o}${d}`}}(d,n,o,a,t)}const v=s(0,100,"opacity","%"),w=s(0,100,"y","%"),k=s(0,100,"x","%"),y=s(40,0,"y","px"),h=n=>({...v(n),...y(n)}),g=(n,o)=>{const a=s(o,0,"y","px");return{...v(n),...a(n)}};function u({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=v,r=f;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function x({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=v,r=f;a.set(b(r.from)),a.render(),setTimeout((()=>{(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}),c)}function z({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=v,r=p;a.set(b(r.from)),a.render(),(0,d.j)({...p,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function _({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=w,r=p;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function C({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=w,r=f;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function M({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=k,r=p;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function S({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=k,r=f;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function Z({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=h,r=f;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function j({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=h,r=f;a.set(b(r.from)),a.render(),setTimeout((()=>{(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}),c)}function E({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=g,r=f,e=20+5*n.dataset.loadIndex;a.set(b(r.from)),a.render(),(0,d.j)({...r,...m,onUpdate(n){a.set(b(n,e))},onComplete:o})}function T({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=h,r=p;a.set(b(r.from)),a.render(),(0,d.j)({...r,...i,onUpdate(n){a.set(b(n))},onComplete:o})}function $({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=w,r=p;a.set(b(r.from)),a.render(),(0,d.j)({...r,...l,onUpdate(n){a.set(b(n))},onComplete:o})}function L({element:n,onComplete:o}){const a=(0,t.ZP)(n),b=w,r=f;a.set(b(r.from)),a.render(),(0,d.j)({...r,...l,onUpdate(n){a.set(b(n))},onComplete:o})}},25426:function(n,o,a){var t=a(77705)((function(n){return n[1]}));t.push([n.id,"\n.container[data-v-4e528960] {\n    width: 300px;\n    height: 500px;\n    overflow: hidden;\n}\n.gray-box[data-v-4e528960] {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px 0 0 16px;\n    background-color: #ccc;\n}\n",""]),n.exports=t},2271:function(n,o,a){var t=a(77705)((function(n){return n[1]}));t.push([n.id,'\n.markdown-body .octicon[data-v-bc68f4bc] {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-bottom;\n}\n.markdown-body .anchor[data-v-bc68f4bc] {\n  float: left;\n  line-height: 1;\n  margin-left: -20px;\n  padding-right: 4px;\n}\n.markdown-body .anchor[data-v-bc68f4bc]:focus {\n  outline: none;\n}\n.markdown-body h1 .octicon-link[data-v-bc68f4bc],\n.markdown-body h2 .octicon-link[data-v-bc68f4bc],\n.markdown-body h3 .octicon-link[data-v-bc68f4bc],\n.markdown-body h4 .octicon-link[data-v-bc68f4bc],\n.markdown-body h5 .octicon-link[data-v-bc68f4bc],\n.markdown-body h6 .octicon-link[data-v-bc68f4bc] {\n  color: #1b1f23;\n  vertical-align: middle;\n  visibility: hidden;\n}\n.markdown-body h1:hover .anchor[data-v-bc68f4bc],\n.markdown-body h2:hover .anchor[data-v-bc68f4bc],\n.markdown-body h3:hover .anchor[data-v-bc68f4bc],\n.markdown-body h4:hover .anchor[data-v-bc68f4bc],\n.markdown-body h5:hover .anchor[data-v-bc68f4bc],\n.markdown-body h6:hover .anchor[data-v-bc68f4bc] {\n  text-decoration: none;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-bc68f4bc],\n.markdown-body h2:hover .anchor .octicon-link[data-v-bc68f4bc],\n.markdown-body h3:hover .anchor .octicon-link[data-v-bc68f4bc],\n.markdown-body h4:hover .anchor .octicon-link[data-v-bc68f4bc],\n.markdown-body h5:hover .anchor .octicon-link[data-v-bc68f4bc],\n.markdown-body h6:hover .anchor .octicon-link[data-v-bc68f4bc] {\n  visibility: visible;\n}\n.markdown-body h1:hover .anchor .octicon-link[data-v-bc68f4bc]:before,\n.markdown-body h2:hover .anchor .octicon-link[data-v-bc68f4bc]:before,\n.markdown-body h3:hover .anchor .octicon-link[data-v-bc68f4bc]:before,\n.markdown-body h4:hover .anchor .octicon-link[data-v-bc68f4bc]:before,\n.markdown-body h5:hover .anchor .octicon-link[data-v-bc68f4bc]:before,\n.markdown-body h6:hover .anchor .octicon-link[data-v-bc68f4bc]:before {\n  width: 16px;\n  height: 16px;\n  content: \' \';\n  display: inline-block;\n  background-image: url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 16 16\' version=\'1.1\' width=\'16\' height=\'16\' aria-hidden=\'true\'%3E%3Cpath fill-rule=\'evenodd\' d=\'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\'%3E%3C/path%3E%3C/svg%3E");\n}.markdown-body[data-v-bc68f4bc] {\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  line-height: 1.5;\n  color: #24292e;\n  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;\n  font-size: 16px;\n  line-height: 1.5;\n  word-wrap: break-word;\n}\n.markdown-body details[data-v-bc68f4bc] {\n  display: block;\n}\n.markdown-body summary[data-v-bc68f4bc] {\n  display: list-item;\n}\n.markdown-body a[data-v-bc68f4bc] {\n  background-color: transparent;\n  background-color: initial;\n}\n.markdown-body a[data-v-bc68f4bc]:active,\n.markdown-body a[data-v-bc68f4bc]:hover {\n  outline-width: 0;\n}\n.markdown-body strong[data-v-bc68f4bc] {\n  font-weight: inherit;\n  font-weight: bolder;\n}\n.markdown-body h1[data-v-bc68f4bc] {\n  font-size: 2em;\n  margin: .67em 0;\n}\n.markdown-body img[data-v-bc68f4bc] {\n  border-style: none;\n}\n.markdown-body code[data-v-bc68f4bc],\n.markdown-body kbd[data-v-bc68f4bc],\n.markdown-body pre[data-v-bc68f4bc] {\n  font-family: monospace,monospace;\n  font-size: 1em;\n}\n.markdown-body hr[data-v-bc68f4bc] {\n  box-sizing: content-box;\n  box-sizing: initial;\n  height: 0;\n  overflow: visible;\n}\n.markdown-body input[data-v-bc68f4bc] {\n  font: inherit;\n  margin: 0;\n}\n.markdown-body input[data-v-bc68f4bc] {\n  overflow: visible;\n}\n.markdown-body [type=checkbox][data-v-bc68f4bc] {\n  box-sizing: border-box;\n  padding: 0;\n}\n.markdown-body *[data-v-bc68f4bc] {\n  box-sizing: border-box;\n}\n.markdown-body input[data-v-bc68f4bc] {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n.markdown-body a[data-v-bc68f4bc] {\n  color: #0366d6;\n  text-decoration: none;\n}\n.markdown-body a[data-v-bc68f4bc]:hover {\n  text-decoration: underline;\n}\n.markdown-body strong[data-v-bc68f4bc] {\n  font-weight: 600;\n}\n.markdown-body hr[data-v-bc68f4bc] {\n  height: 0;\n  margin: 15px 0;\n  overflow: hidden;\n  background: transparent;\n  border: 0;\n  border-bottom: 1px solid #dfe2e5;\n}\n.markdown-body hr[data-v-bc68f4bc]:after,\n.markdown-body hr[data-v-bc68f4bc]:before {\n  display: table;\n  content: "";\n}\n.markdown-body hr[data-v-bc68f4bc]:after {\n  clear: both;\n}\n.markdown-body table[data-v-bc68f4bc] {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n.markdown-body td[data-v-bc68f4bc],\n.markdown-body th[data-v-bc68f4bc] {\n  padding: 0;\n}\n.markdown-body details summary[data-v-bc68f4bc] {\n  cursor: pointer;\n}\n.markdown-body kbd[data-v-bc68f4bc] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body h1[data-v-bc68f4bc],\n.markdown-body h2[data-v-bc68f4bc],\n.markdown-body h3[data-v-bc68f4bc],\n.markdown-body h4[data-v-bc68f4bc],\n.markdown-body h5[data-v-bc68f4bc],\n.markdown-body h6[data-v-bc68f4bc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-bc68f4bc] {\n  font-size: 32px;\n}\n.markdown-body h1[data-v-bc68f4bc],\n.markdown-body h2[data-v-bc68f4bc] {\n  font-weight: 600;\n}\n.markdown-body h2[data-v-bc68f4bc] {\n  font-size: 24px;\n}\n.markdown-body h3[data-v-bc68f4bc] {\n  font-size: 20px;\n}\n.markdown-body h3[data-v-bc68f4bc],\n.markdown-body h4[data-v-bc68f4bc] {\n  font-weight: 600;\n}\n.markdown-body h4[data-v-bc68f4bc] {\n  font-size: 16px;\n}\n.markdown-body h5[data-v-bc68f4bc] {\n  font-size: 14px;\n}\n.markdown-body h5[data-v-bc68f4bc],\n.markdown-body h6[data-v-bc68f4bc] {\n  font-weight: 600;\n}\n.markdown-body h6[data-v-bc68f4bc] {\n  font-size: 12px;\n}\n.markdown-body p[data-v-bc68f4bc] {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n.markdown-body blockquote[data-v-bc68f4bc] {\n  margin: 0;\n}\n.markdown-body ol[data-v-bc68f4bc],\n.markdown-body ul[data-v-bc68f4bc] {\n  padding-left: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body ol ol[data-v-bc68f4bc],\n.markdown-body ul ol[data-v-bc68f4bc] {\n  list-style-type: lower-roman;\n}\n.markdown-body ol ol ol[data-v-bc68f4bc],\n.markdown-body ol ul ol[data-v-bc68f4bc],\n.markdown-body ul ol ol[data-v-bc68f4bc],\n.markdown-body ul ul ol[data-v-bc68f4bc] {\n  list-style-type: lower-alpha;\n}\n.markdown-body dd[data-v-bc68f4bc] {\n  margin-left: 0;\n}\n.markdown-body code[data-v-bc68f4bc],\n.markdown-body pre[data-v-bc68f4bc] {\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n}\n.markdown-body pre[data-v-bc68f4bc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body input[data-v-bc68f4bc]::-webkit-inner-spin-button,\n.markdown-body input[data-v-bc68f4bc]::-webkit-outer-spin-button {\n  margin: 0;\n  -webkit-appearance: none;\n  appearance: none;\n}\n.markdown-body :checked+.radio-label[data-v-bc68f4bc] {\n  position: relative;\n  z-index: 1;\n  border-color: #0366d6;\n}\n.markdown-body .border[data-v-bc68f4bc] {\n  border: 1px solid #e1e4e8!important;\n}\n.markdown-body .border-0[data-v-bc68f4bc] {\n  border: 0!important;\n}\n.markdown-body .border-bottom[data-v-bc68f4bc] {\n  border-bottom: 1px solid #e1e4e8!important;\n}\n.markdown-body .rounded-1[data-v-bc68f4bc] {\n  border-radius: 3px!important;\n}\n.markdown-body .bg-white[data-v-bc68f4bc] {\n  background-color: #fff!important;\n}\n.markdown-body .bg-gray-light[data-v-bc68f4bc] {\n  background-color: #fafbfc!important;\n}\n.markdown-body .text-gray-light[data-v-bc68f4bc] {\n  color: #6a737d!important;\n}\n.markdown-body .mb-0[data-v-bc68f4bc] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-bc68f4bc] {\n  margin-top: 8px!important;\n  margin-bottom: 8px!important;\n}\n.markdown-body .pl-0[data-v-bc68f4bc] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-bc68f4bc] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-bc68f4bc] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-bc68f4bc] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-bc68f4bc] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-bc68f4bc],\n.markdown-body .px-3[data-v-bc68f4bc] {\n  padding-left: 16px!important;\n}\n.markdown-body .px-3[data-v-bc68f4bc] {\n  padding-right: 16px!important;\n}\n.markdown-body .pl-4[data-v-bc68f4bc] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-bc68f4bc] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-bc68f4bc] {\n  padding-left: 40px!important;\n}\n.markdown-body .f6[data-v-bc68f4bc] {\n  font-size: 12px!important;\n}\n.markdown-body .lh-condensed[data-v-bc68f4bc] {\n  line-height: 1.25!important;\n}\n.markdown-body .text-bold[data-v-bc68f4bc] {\n  font-weight: 600!important;\n}\n.markdown-body .pl-c[data-v-bc68f4bc] {\n  color: #6a737d;\n}\n.markdown-body .pl-c1[data-v-bc68f4bc],\n.markdown-body .pl-s .pl-v[data-v-bc68f4bc] {\n  color: #005cc5;\n}\n.markdown-body .pl-e[data-v-bc68f4bc],\n.markdown-body .pl-en[data-v-bc68f4bc] {\n  color: #6f42c1;\n}\n.markdown-body .pl-s .pl-s1[data-v-bc68f4bc],\n.markdown-body .pl-smi[data-v-bc68f4bc] {\n  color: #24292e;\n}\n.markdown-body .pl-ent[data-v-bc68f4bc] {\n  color: #22863a;\n}\n.markdown-body .pl-k[data-v-bc68f4bc] {\n  color: #d73a49;\n}\n.markdown-body .pl-pds[data-v-bc68f4bc],\n.markdown-body .pl-s[data-v-bc68f4bc],\n.markdown-body .pl-s .pl-pse .pl-s1[data-v-bc68f4bc],\n.markdown-body .pl-sr[data-v-bc68f4bc],\n.markdown-body .pl-sr .pl-cce[data-v-bc68f4bc],\n.markdown-body .pl-sr .pl-sra[data-v-bc68f4bc],\n.markdown-body .pl-sr .pl-sre[data-v-bc68f4bc] {\n  color: #032f62;\n}\n.markdown-body .pl-smw[data-v-bc68f4bc],\n.markdown-body .pl-v[data-v-bc68f4bc] {\n  color: #e36209;\n}\n.markdown-body .pl-bu[data-v-bc68f4bc] {\n  color: #b31d28;\n}\n.markdown-body .pl-ii[data-v-bc68f4bc] {\n  color: #fafbfc;\n  background-color: #b31d28;\n}\n.markdown-body .pl-c2[data-v-bc68f4bc] {\n  color: #fafbfc;\n  background-color: #d73a49;\n}\n.markdown-body .pl-c2[data-v-bc68f4bc]:before {\n  content: "^M";\n}\n.markdown-body .pl-sr .pl-cce[data-v-bc68f4bc] {\n  font-weight: 700;\n  color: #22863a;\n}\n.markdown-body .pl-ml[data-v-bc68f4bc] {\n  color: #735c0f;\n}\n.markdown-body .pl-mh[data-v-bc68f4bc],\n.markdown-body .pl-mh .pl-en[data-v-bc68f4bc],\n.markdown-body .pl-ms[data-v-bc68f4bc] {\n  font-weight: 700;\n  color: #005cc5;\n}\n.markdown-body .pl-mi[data-v-bc68f4bc] {\n  font-style: italic;\n  color: #24292e;\n}\n.markdown-body .pl-mb[data-v-bc68f4bc] {\n  font-weight: 700;\n  color: #24292e;\n}\n.markdown-body .pl-md[data-v-bc68f4bc] {\n  color: #b31d28;\n  background-color: #ffeef0;\n}\n.markdown-body .pl-mi1[data-v-bc68f4bc] {\n  color: #22863a;\n  background-color: #f0fff4;\n}\n.markdown-body .pl-mc[data-v-bc68f4bc] {\n  color: #e36209;\n  background-color: #ffebda;\n}\n.markdown-body .pl-mi2[data-v-bc68f4bc] {\n  color: #f6f8fa;\n  background-color: #005cc5;\n}\n.markdown-body .pl-mdr[data-v-bc68f4bc] {\n  font-weight: 700;\n  color: #6f42c1;\n}\n.markdown-body .pl-ba[data-v-bc68f4bc] {\n  color: #586069;\n}\n.markdown-body .pl-sg[data-v-bc68f4bc] {\n  color: #959da5;\n}\n.markdown-body .pl-corl[data-v-bc68f4bc] {\n  text-decoration: underline;\n  color: #032f62;\n}\n.markdown-body .mb-0[data-v-bc68f4bc] {\n  margin-bottom: 0!important;\n}\n.markdown-body .my-2[data-v-bc68f4bc] {\n  margin-bottom: 8px!important;\n}\n.markdown-body .my-2[data-v-bc68f4bc] {\n  margin-top: 8px!important;\n}\n.markdown-body .pl-0[data-v-bc68f4bc] {\n  padding-left: 0!important;\n}\n.markdown-body .py-0[data-v-bc68f4bc] {\n  padding-top: 0!important;\n  padding-bottom: 0!important;\n}\n.markdown-body .pl-1[data-v-bc68f4bc] {\n  padding-left: 4px!important;\n}\n.markdown-body .pl-2[data-v-bc68f4bc] {\n  padding-left: 8px!important;\n}\n.markdown-body .py-2[data-v-bc68f4bc] {\n  padding-top: 8px!important;\n  padding-bottom: 8px!important;\n}\n.markdown-body .pl-3[data-v-bc68f4bc] {\n  padding-left: 16px!important;\n}\n.markdown-body .pl-4[data-v-bc68f4bc] {\n  padding-left: 24px!important;\n}\n.markdown-body .pl-5[data-v-bc68f4bc] {\n  padding-left: 32px!important;\n}\n.markdown-body .pl-6[data-v-bc68f4bc] {\n  padding-left: 40px!important;\n}\n.markdown-body .pl-7[data-v-bc68f4bc] {\n  padding-left: 48px!important;\n}\n.markdown-body .pl-8[data-v-bc68f4bc] {\n  padding-left: 64px!important;\n}\n.markdown-body .pl-9[data-v-bc68f4bc] {\n  padding-left: 80px!important;\n}\n.markdown-body .pl-10[data-v-bc68f4bc] {\n  padding-left: 96px!important;\n}\n.markdown-body .pl-11[data-v-bc68f4bc] {\n  padding-left: 112px!important;\n}\n.markdown-body .pl-12[data-v-bc68f4bc] {\n  padding-left: 128px!important;\n}\n.markdown-body hr[data-v-bc68f4bc] {\n  border-bottom-color: #eee;\n}\n.markdown-body kbd[data-v-bc68f4bc] {\n  display: inline-block;\n  padding: 3px 5px;\n  font: 11px SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  line-height: 10px;\n  color: #444d56;\n  vertical-align: middle;\n  background-color: #fafbfc;\n  border: 1px solid #d1d5da;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 #d1d5da;\n}\n.markdown-body[data-v-bc68f4bc]:after,\n.markdown-body[data-v-bc68f4bc]:before {\n  display: table;\n  content: "";\n}\n.markdown-body[data-v-bc68f4bc]:after {\n  clear: both;\n}\n.markdown-body[data-v-bc68f4bc]>:first-child {\n  margin-top: 0!important;\n}\n.markdown-body[data-v-bc68f4bc]>:last-child {\n  margin-bottom: 0!important;\n}\n.markdown-body a[data-v-bc68f4bc]:not([href]) {\n  color: inherit;\n  text-decoration: none;\n}\n.markdown-body blockquote[data-v-bc68f4bc],\n.markdown-body details[data-v-bc68f4bc],\n.markdown-body dl[data-v-bc68f4bc],\n.markdown-body ol[data-v-bc68f4bc],\n.markdown-body p[data-v-bc68f4bc],\n.markdown-body pre[data-v-bc68f4bc],\n.markdown-body table[data-v-bc68f4bc],\n.markdown-body ul[data-v-bc68f4bc] {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n.markdown-body hr[data-v-bc68f4bc] {\n  height: .25em;\n  padding: 0;\n  margin: 24px 0;\n  background-color: #e1e4e8;\n  border: 0;\n}\n.markdown-body blockquote[data-v-bc68f4bc] {\n  padding: 0 1em;\n  color: #6a737d;\n  border-left: .25em solid #dfe2e5;\n}\n.markdown-body blockquote[data-v-bc68f4bc]>:first-child {\n  margin-top: 0;\n}\n.markdown-body blockquote[data-v-bc68f4bc]>:last-child {\n  margin-bottom: 0;\n}\n.markdown-body h1[data-v-bc68f4bc],\n.markdown-body h2[data-v-bc68f4bc],\n.markdown-body h3[data-v-bc68f4bc],\n.markdown-body h4[data-v-bc68f4bc],\n.markdown-body h5[data-v-bc68f4bc],\n.markdown-body h6[data-v-bc68f4bc] {\n  margin-top: 24px;\n  margin-bottom: 16px;\n  font-weight: 600;\n  line-height: 1.25;\n}\n.markdown-body h1[data-v-bc68f4bc] {\n  font-size: 2em;\n}\n.markdown-body h1[data-v-bc68f4bc],\n.markdown-body h2[data-v-bc68f4bc] {\n  padding-bottom: .3em;\n  border-bottom: 1px solid #eaecef;\n}\n.markdown-body h2[data-v-bc68f4bc] {\n  font-size: 1.5em;\n}\n.markdown-body h3[data-v-bc68f4bc] {\n  font-size: 1.25em;\n}\n.markdown-body h4[data-v-bc68f4bc] {\n  font-size: 1em;\n}\n.markdown-body h5[data-v-bc68f4bc] {\n  font-size: .875em;\n}\n.markdown-body h6[data-v-bc68f4bc] {\n  font-size: .85em;\n  color: #6a737d;\n}\n.markdown-body ol[data-v-bc68f4bc],\n.markdown-body ul[data-v-bc68f4bc] {\n  padding-left: 2em;\n}\n.markdown-body ol ol[data-v-bc68f4bc],\n.markdown-body ol ul[data-v-bc68f4bc],\n.markdown-body ul ol[data-v-bc68f4bc],\n.markdown-body ul ul[data-v-bc68f4bc] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.markdown-body li[data-v-bc68f4bc] {\n  word-wrap: break-all;\n}\n.markdown-body li>p[data-v-bc68f4bc] {\n  margin-top: 16px;\n}\n.markdown-body li+li[data-v-bc68f4bc] {\n  margin-top: .25em;\n}\n.markdown-body dl[data-v-bc68f4bc] {\n  padding: 0;\n}\n.markdown-body dl dt[data-v-bc68f4bc] {\n  padding: 0;\n  margin-top: 16px;\n  font-size: 1em;\n  font-style: italic;\n  font-weight: 600;\n}\n.markdown-body dl dd[data-v-bc68f4bc] {\n  padding: 0 16px;\n  margin-bottom: 16px;\n}\n.markdown-body table[data-v-bc68f4bc] {\n  display: block;\n  width: 100%;\n  overflow: auto;\n}\n.markdown-body table th[data-v-bc68f4bc] {\n  font-weight: 600;\n}\n.markdown-body table td[data-v-bc68f4bc],\n.markdown-body table th[data-v-bc68f4bc] {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n.markdown-body table tr[data-v-bc68f4bc] {\n  background-color: #fff;\n  border-top: 1px solid #c6cbd1;\n}\n.markdown-body table tr[data-v-bc68f4bc]:nth-child(2n) {\n  background-color: #f6f8fa;\n}\n.markdown-body img[data-v-bc68f4bc] {\n  max-width: 100%;\n  box-sizing: content-box;\n  box-sizing: initial;\n  background-color: #fff;\n}\n.markdown-body img[align=right][data-v-bc68f4bc] {\n  padding-left: 20px;\n}\n.markdown-body img[align=left][data-v-bc68f4bc] {\n  padding-right: 20px;\n}\n.markdown-body code[data-v-bc68f4bc] {\n  padding: .2em .4em;\n  margin: 0;\n  font-size: 85%;\n  background-color: rgba(27,31,35,.05);\n  border-radius: 3px;\n}\n.markdown-body pre[data-v-bc68f4bc] {\n  word-wrap: normal;\n}\n.markdown-body pre>code[data-v-bc68f4bc] {\n  padding: 0;\n  margin: 0;\n  font-size: 100%;\n  word-break: normal;\n  white-space: pre;\n  background: transparent;\n  border: 0;\n}\n.markdown-body .highlight[data-v-bc68f4bc] {\n  margin-bottom: 16px;\n}\n.markdown-body .highlight pre[data-v-bc68f4bc] {\n  margin-bottom: 0;\n  word-break: normal;\n}\n.markdown-body .highlight pre[data-v-bc68f4bc],\n.markdown-body pre[data-v-bc68f4bc] {\n  padding: 16px;\n  overflow: auto;\n  font-size: 85%;\n  line-height: 1.45;\n  background-color: #f6f8fa;\n  border-radius: 3px;\n}\n.markdown-body pre code[data-v-bc68f4bc] {\n  display: inline;\n  max-width: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  line-height: inherit;\n  word-wrap: normal;\n  background-color: transparent;\n  background-color: initial;\n  border: 0;\n}\n.markdown-body .commit-tease-sha[data-v-bc68f4bc] {\n  display: inline-block;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 90%;\n  color: #444d56;\n}\n.markdown-body .full-commit .btn-outline[data-v-bc68f4bc]:not(:disabled):hover {\n  color: #005cc5;\n  border-color: #005cc5;\n}\n.markdown-body .blob-wrapper[data-v-bc68f4bc] {\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n.markdown-body .blob-wrapper-embedded[data-v-bc68f4bc] {\n  max-height: 240px;\n  overflow-y: auto;\n}\n.markdown-body .blob-num[data-v-bc68f4bc] {\n  width: 1%;\n  min-width: 50px;\n  padding-right: 10px;\n  padding-left: 10px;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(27,31,35,.3);\n  text-align: right;\n  white-space: nowrap;\n  vertical-align: top;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.markdown-body .blob-num[data-v-bc68f4bc]:hover {\n  color: rgba(27,31,35,.6);\n}\n.markdown-body .blob-num[data-v-bc68f4bc]:before {\n  content: attr(data-line-number);\n}\n.markdown-body .blob-code[data-v-bc68f4bc] {\n  position: relative;\n  padding-right: 10px;\n  padding-left: 10px;\n  line-height: 20px;\n  vertical-align: top;\n}\n.markdown-body .blob-code-inner[data-v-bc68f4bc] {\n  overflow: visible;\n  font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n  font-size: 12px;\n  color: #24292e;\n  word-wrap: normal;\n  white-space: pre;\n}\n.markdown-body .pl-token.active[data-v-bc68f4bc],\n.markdown-body .pl-token[data-v-bc68f4bc]:hover {\n  cursor: pointer;\n  background: #ffea7f;\n}\n.markdown-body .tab-size[data-tab-size="1"][data-v-bc68f4bc] {\n  -moz-tab-size: 1;\n  -o-tab-size: 1;\n     tab-size: 1;\n}\n.markdown-body .tab-size[data-tab-size="2"][data-v-bc68f4bc] {\n  -moz-tab-size: 2;\n  -o-tab-size: 2;\n     tab-size: 2;\n}\n.markdown-body .tab-size[data-tab-size="3"][data-v-bc68f4bc] {\n  -moz-tab-size: 3;\n  -o-tab-size: 3;\n     tab-size: 3;\n}\n.markdown-body .tab-size[data-tab-size="4"][data-v-bc68f4bc] {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n.markdown-body .tab-size[data-tab-size="5"][data-v-bc68f4bc] {\n  -moz-tab-size: 5;\n  -o-tab-size: 5;\n     tab-size: 5;\n}\n.markdown-body .tab-size[data-tab-size="6"][data-v-bc68f4bc] {\n  -moz-tab-size: 6;\n  -o-tab-size: 6;\n     tab-size: 6;\n}\n.markdown-body .tab-size[data-tab-size="7"][data-v-bc68f4bc] {\n  -moz-tab-size: 7;\n  -o-tab-size: 7;\n     tab-size: 7;\n}\n.markdown-body .tab-size[data-tab-size="8"][data-v-bc68f4bc] {\n  -moz-tab-size: 8;\n  -o-tab-size: 8;\n     tab-size: 8;\n}\n.markdown-body .tab-size[data-tab-size="9"][data-v-bc68f4bc] {\n  -moz-tab-size: 9;\n  -o-tab-size: 9;\n     tab-size: 9;\n}\n.markdown-body .tab-size[data-tab-size="10"][data-v-bc68f4bc] {\n  -moz-tab-size: 10;\n  -o-tab-size: 10;\n     tab-size: 10;\n}\n.markdown-body .tab-size[data-tab-size="11"][data-v-bc68f4bc] {\n  -moz-tab-size: 11;\n  -o-tab-size: 11;\n     tab-size: 11;\n}\n.markdown-body .tab-size[data-tab-size="12"][data-v-bc68f4bc] {\n  -moz-tab-size: 12;\n  -o-tab-size: 12;\n     tab-size: 12;\n}\n.markdown-body .task-list-item[data-v-bc68f4bc] {\n  list-style-type: none;\n}\n.markdown-body .task-list-item+.task-list-item[data-v-bc68f4bc] {\n  margin-top: 3px;\n}\n.markdown-body .task-list-item input[data-v-bc68f4bc] {\n  margin: 0 .2em .25em -1.6em;\n  vertical-align: middle;\n}\n',""]),n.exports=t},23236:function(n,o,a){"use strict";a.r(o),a.d(o,{default:function(){return l}});var t=a(39211),d=a(45832),b={components:{MTransition:t.T},inheritAttrs:!1,data:()=>({springLeftFn:d.I0,springRightFn:d.$y})},r=a(51900),e={components:{MTransitionSpringLeft:(0,r.Z)(b,(function(){var n=this,o=n.$createElement;return(n._self._c||o)("m-transition",n._g(n._b({attrs:{enter:n.springLeftFn,leave:n.springRightFn}},"m-transition",n.$attrs,!1),n.$listeners),[n._t("default")],2)}),[],!1,null,null,null).exports},data:()=>({shown:!0}),mounted(){setInterval((()=>{this.shown=!this.shown}),2e3)}},c=(a(93972),(0,r.Z)(e,(function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",[a("div",{staticClass:"container"},[a("m-transition-spring-left",[n.shown?a("div",{staticClass:"gray-box"}):n._e()])],1),n._v(" "),a("p",[n._v("\n\t\t"+n._s(n.shown?"Visible":"Hidden")+"\n\t")])])}),[],!1,null,"4e528960",null).exports),i=a(415),m={components:{Demo0:c,DemoCollapse:i.DemoCollapse,SrcFile:i.SrcFile}},l=(a(37062),(0,r.Z)(m,(function(){var n=this,o=n.$createElement;n._self._c;return n._m(1)}),[function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("table",[a("thead",[a("tr",[a("th",[n._v("Slot")]),n._v(" "),a("th",[n._v("Description")])])]),n._v(" "),a("tbody",[a("tr",[a("td",[n._v("default")]),n._v(" "),a("td",[n._v("content to spring left")])])])])},function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",{staticClass:"markdown-body"},[a("h1",[n._v("Transition Spring Left")]),n._v(" "),a("demo-collapse",[a("Demo0"),n._v(" "),a("src-file",{attrs:{name:"",language:"html"}},[[n._v("<template>\n\t<div>\n\t\t<div class=\"container\">\n\t\t\t<m-transition-spring-left>\n\t\t\t\t<div\n\t\t\t\t\tv-if=\"shown\"\n\t\t\t\t\tclass=\"gray-box\"\n\t\t\t\t/>\n\t\t\t</m-transition-spring-left>\n\t\t</div>\n\t\t<p>\n\t\t\t{{ shown ? 'Visible' : 'Hidden' }}\n\t\t</p>\n\t</div>\n</template>\n\n<script>\nimport { MTransitionSpringLeft } from '@square/maker/components/TransitionSpringLeft';\n\nexport default {\n\tcomponents: {\n\t\tMTransitionSpringLeft,\n\t},\n\n\tdata() {\n\t\treturn {\n\t\t\tshown: true,\n\t\t};\n\t},\n\n\tmounted() {\n\t\tconst transitionIntervalMs = 2000;\n\t\tsetInterval(() => {\n\t\t\tthis.shown = !this.shown;\n\t\t}, transitionIntervalMs);\n\t},\n};\n<\/script>\n\n<style scoped>\n.container {\n    width: 300px;\n    height: 500px;\n    overflow: hidden;\n}\n\n.gray-box {\n    width: 100%;\n    height: 100%;\n    border-radius: 16px 0 0 16px;\n    background-color: #ccc;\n}\n</style>\n")]],2)],1),n._v(" "),a("h2",[n._v("Slots")]),n._v(" "),n._m(0)],1)}],!1,null,"bc68f4bc",null).exports)},93972:function(n,o,a){var t=a(25426);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("f8265480",t,!0,{})},37062:function(n,o,a){var t=a(2271);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[n.id,t,""]]),t.locals&&(n.exports=t.locals);(0,a(54023).Z)("a974a356",t,!0,{})}}]);