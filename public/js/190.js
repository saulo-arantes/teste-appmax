(self.webpackChunk=self.webpackChunk||[]).push([[190],{7959:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>a});var r=n(3645),s=n.n(r)()((function(t){return t[1]}));s.push([t.id,".header[data-v-95954666]{position:fixed;width:100%;padding:15px;background-color:#f0f0f0}.header .buttons[data-v-95954666]{display:flex;justify-content:flex-end}.header .buttons .btn-primary[data-v-95954666],.header .buttons .btn-success[data-v-95954666]{margin-right:15px}.products-index[data-v-95954666]{padding:15px}.products-index .index[data-v-95954666]{margin-top:65px}.products-index .index .quantity[data-v-95954666]{display:flex}.products-index .index .quantity .low-quantity[data-v-95954666]{color:#dc3545}",""]);const a=s},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var s={};if(r)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(s[o]=!0)}for(var i=0;i<t.length;i++){var d=[].concat(t[i]);r&&s[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},4190:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>s});const r={props:{products:Array,createUrl:String},mounted:function(){console.log(this.create_url)}};n(3774);const s=(0,n(1900).Z)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-sm"},[n("div",{staticClass:"header"},[n("div",{staticClass:"buttons"},[n("inertia-link",{staticClass:"btn btn-success",attrs:{href:t.createUrl}},[t._v("Add Produto")]),t._v(" "),n("inertia-link",{staticClass:"btn btn-primary",attrs:{href:"/reports"}},[t._v("Relatórios")]),t._v(" "),n("inertia-link",{staticClass:"btn btn-secondary",attrs:{href:"/logout",method:"post",as:"button",type:"button"}},[t._v("Logout")])],1)]),t._v(" "),n("div",{staticClass:"products-index"},[n("div",{staticClass:"index"},[n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),n("tbody",t._l(t.products,(function(e){return n("tr",{key:e.sku},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.sku))]),t._v(" "),n("td",[n("div",{staticClass:"quantity"},[t._v("\n                                    "+t._s(e.quantity)+"\n                                     \n                                    "),e.quantity<100?n("div",{staticClass:"low-quantity",attrs:{title:"Estoque abaixo do esperado"}},[n("font-awesome-icon",{attrs:{icon:"exclamation"}}),t._v(" "),n("small",[t._v("Estoque abaixo do esperado")])],1):t._e()])]),t._v(" "),n("td",[n("inertia-link",{staticClass:"btn btn-primary",attrs:{href:"/products/"+e.id}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1)],1),t._v(" "),n("td",[n("inertia-link",{staticClass:"btn btn-danger",attrs:{href:"/products/"+e.id,method:"delete",as:"button",type:"button"}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)],1)])})),0)])])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("Produto")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("SKU")]),t._v(" "),n("th",{attrs:{scope:"col"}},[t._v("Quantidade")]),t._v(" "),n("th",{attrs:{scope:"col"}}),t._v(" "),n("th",{attrs:{scope:"col"}})])])}],!1,null,"95954666",null).exports},1900:(t,e,n)=>{"use strict";function r(t,e,n,r,s,a,o,i){var d,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),o?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=d):s&&(d=i?function(){s.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:s),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,e){return d.call(e),l(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:c}}n.d(e,{Z:()=>r})},3774:(t,e,n)=>{var r=n(7959);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);(0,n(5346).Z)("0fbeb729",r,!0,{})},5346:(t,e,n)=>{"use strict";function r(t,e){for(var n=[],r={},s=0;s<e.length;s++){var a=e[s],o=a[0],i={id:t+":"+s,css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}n.d(e,{Z:()=>v});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=s&&(document.head||document.getElementsByTagName("head")[0]),i=null,d=0,c=!1,l=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,s){c=n,u=s||{};var o=r(t,e);return h(o),function(e){for(var n=[],s=0;s<o.length;s++){var i=o[s];(d=a[i.id]).refs--,n.push(d)}e?h(o=r(t,e)):o=[];for(s=0;s<n.length;s++){var d;if(0===(d=n[s]).refs){for(var c=0;c<d.parts.length;c++)d.parts[c]();delete a[d.id]}}}}function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=a[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(m(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(s=0;s<n.parts.length;s++)o.push(m(n.parts[s]));a[n.id]={id:n.id,refs:1,parts:o}}}}function _(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(c)return l;r.parentNode.removeChild(r)}if(f){var s=d++;r=i||(i=_()),e=y.bind(null,r,s,!1),n=y.bind(null,r,s,!0)}else r=_(),e=C.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}var b,g=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function y(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,s);else{var a=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function C(t,e){var n=e.css,r=e.media,s=e.sourceMap;if(r&&t.setAttribute("media",r),u.ssrId&&t.setAttribute(p,e.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}}]);