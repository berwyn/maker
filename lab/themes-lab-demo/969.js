"use strict";(self.webpackChunk_square_maker=self.webpackChunk_square_maker||[]).push([[969],{8969:function(f,e,r){r.r(e),r.d(e,{generateNeutralColors:function(){return l}});var a=r(771),n=r.n(a);const t={light:{10:.05,20:.155,80:.527,90:.9},dark:{10:.255,20:.37,80:.55,90:.95}},l=f=>{const e=n()(f).luminance()>.32,r=e?"#000000":"#ffffff",a=e?t.light:t.dark,l={"neutral-0":e?"#ffffff":"#000000","neutral-100":e?"#000000":"#ffffff"};return Object.entries(a).forEach((([e,a])=>{l[`neutral-${e}`]=n().mix(f,r,a,"lab").hex()})),{...l,"color-elevation":e?"#ffffff":l["neutral-20"],"color-overlay":e?"rgba(0, 0, 0, 0.32)":"rgba(255, 255, 255, 0.32)"}}}}]);