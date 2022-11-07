import{S as W,i as H,s as z,e as k,U as C,t as O,k as A,c as $,a as p,V as L,d as u,h as R,m as j,b as f,g as w,M as m,E as d,w as I,x as B,y as K,q as g,o as b,B as N,a8 as oe,l as q,n as ne,p as le,a9 as ie,N as ce,$ as X,I as fe,J as ue,K as de,L as me}from"./index-c32358ff.js";import{K as _e,a as pe,B as he,S as Y}from"./blocknative-847bc20d.js";import{q as ge,m as be,p as ve}from"./contexts-2aef7541.js";import"./scroll-5387a6f1.js";import{_ as ke}from"./preload-helper-60cab3ee.js";function se(s){return $e(s).replace(/\//g,"_")}function $e(s){return s.replace(/^\//,"").replace(/\/$/,"")}async function we(s,{fetch:e}){try{return await(await e(`/kit-docs/${s==="/"?"index":se(s.replace(/\.html$/,""))}.meta.json`)).json()}catch{return null}}async function ye(s,{url:e,fetch:r}){const t=Se(e,s);if(!t)return null;try{return(await r(`/kit-docs/${se(t)}.sidebar.json`)).json()}catch{return null}}function Se(s,e){if(ge(e))return e;const r=s.pathname,t=Object.keys(e).sort((a,n)=>n.length-a.length);for(const a of t)if(r.startsWith(a))return e[a];return null}function Ee(s={}){return async({url:e,fetch:r})=>{const t=await we(e.pathname,{fetch:r});return{props:s.sidebar?{meta:t,sidebar:await ye(s.sidebar,{url:e,fetch:r})}:{meta:t}}}}function De(s){let e,r,t,a,n,l,o,i,c,_,v,S,V,h,x,D,E;return{c(){e=k("div"),r=k("div"),t=C("svg"),a=C("path"),n=C("span"),l=O("Search"),o=A(),i=k("span"),c=k("span"),_=O("\u2318"),v=A(),S=k("span"),V=O("K"),h=A(),x=k("div"),D=C("svg"),E=C("path"),this.h()},l(y){e=$(y,"DIV",{class:!0});var P=p(e);r=$(P,"DIV",{class:!0});var F=p(r);t=L(F,"svg",{width:!0,height:!0,class:!0,viewBox:!0});var T=p(t);a=L(T,"path",{d:!0,stroke:!0,fill:!0,"fill-rule":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(a).forEach(u),n=L(T,"span",{});var J=p(n);l=R(J,"Search"),J.forEach(u),T.forEach(u),F.forEach(u),o=j(P),i=$(P,"SPAN",{class:!0});var M=p(i);c=$(M,"SPAN",{});var Q=p(c);_=R(Q,"\u2318"),Q.forEach(u),v=j(M),S=$(M,"SPAN",{});var U=p(S);V=R(U,"K"),U.forEach(u),M.forEach(u),P.forEach(u),h=j(y),x=$(y,"DIV",{class:!0});var Z=p(x);D=L(Z,"svg",{width:!0,height:!0,class:!0,viewBox:!0});var G=p(D);E=L(G,"path",{d:!0,stroke:!0,fill:!0,"fill-rule":!0,"stroke-linecap":!0,"stroke-linejoin":!0}),p(E).forEach(u),G.forEach(u),Z.forEach(u),this.h()},h(){f(a,"d","M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"),f(a,"stroke","currentColor"),f(a,"fill","none"),f(a,"fill-rule","evenodd"),f(a,"stroke-linecap","round"),f(a,"stroke-linejoin","round"),f(t,"width","20"),f(t,"height","20"),f(t,"class","DocSearch-Search-Icon"),f(t,"viewBox","0 0 20 20"),f(r,"class","flex-1 flex items-center"),f(i,"class","flex space-x-0.5 font-semibold"),f(e,"class","hidden w-full items-center rounded-sm border border-gray-divider bg-gray-elevate py-2.5 px-3 text-[15px] shadow-sm 992:flex"),f(E,"d","M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"),f(E,"stroke","currentColor"),f(E,"fill","none"),f(E,"fill-rule","evenodd"),f(E,"stroke-linecap","round"),f(E,"stroke-linejoin","round"),f(D,"width","20"),f(D,"height","20"),f(D,"class","DocSearch-Search-Icon"),f(D,"viewBox","0 0 20 20"),f(x,"class","flex h-12 w-12 items-center justify-center rounded-sm border-0 992:hidden text-gray-soft")},m(y,P){w(y,e,P),m(e,r),m(r,t),m(t,a),m(t,n),m(n,l),m(e,o),m(e,i),m(i,c),m(c,_),m(i,v),m(i,S),m(S,V),w(y,h,P),w(y,x,P),m(x,D),m(D,E)},p:d,i:d,o:d,d(y){y&&u(e),y&&u(h),y&&u(x)}}}class Ie extends W{constructor(e){super(),H(this,e,null,De,z,{})}}var Ke=Ie;function ee(s){let e,r;return e=new Ke({}),{c(){I(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){K(e,t,a),r=!0},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Ne(s){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function Pe(s){let e,r,t;var a=s[6].default;function n(l){return{props:{appId:l[0],indexName:l[1],apiKey:l[2],placeholder:l[3]}}}return a&&(e=new a(n(s))),{c(){e&&I(e.$$.fragment),r=q()},l(l){e&&B(e.$$.fragment,l),r=q()},m(l,o){e&&K(e,l,o),w(l,r,o),t=!0},p(l,o){const i={};if(o&1&&(i.appId=l[0]),o&2&&(i.indexName=l[1]),o&4&&(i.apiKey=l[2]),o&8&&(i.placeholder=l[3]),a!==(a=l[6].default)){if(e){ne();const c=e;b(c.$$.fragment,1,0,()=>{N(c,1)}),le()}a?(e=new a(n(l)),I(e.$$.fragment),g(e.$$.fragment,1),K(e,r.parentNode,r)):e=null}else a&&e.$set(i)},i(l){t||(e&&g(e.$$.fragment,l),t=!0)},o(l){e&&b(e.$$.fragment,l),t=!1},d(l){l&&u(r),e&&N(e,l)}}}function Ae(s){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function je(s){let e,r,t,a=!s[4]&&ee(),n={ctx:s,current:null,token:null,hasCatch:!1,pending:Ae,then:Pe,catch:Ne,value:6,blocks:[,,,]};return oe(s[5](),n),{c(){a&&a.c(),e=A(),r=q(),n.block.c()},l(l){a&&a.l(l),e=j(l),r=q(),n.block.l(l)},m(l,o){a&&a.m(l,o),w(l,e,o),w(l,r,o),n.block.m(l,n.anchor=o),n.mount=()=>r.parentNode,n.anchor=r,t=!0},p(l,[o]){s=l,s[4]?a&&(ne(),b(a,1,1,()=>{a=null}),le()):a?o&16&&g(a,1):(a=ee(),a.c(),g(a,1),a.m(e.parentNode,e)),ie(n,s,o)},i(l){t||(g(a),g(n.block),t=!0)},o(l){b(a);for(let o=0;o<3;o+=1){const i=n.blocks[o];b(i)}t=!1},d(l){a&&a.d(l),l&&u(e),l&&u(r),n.block.d(l),n.token=null,n=null}}}function Be(s,e,r){let{appId:t}=e,{indexName:a}=e,{apiKey:n}=e,{placeholder:l="Search documentation"}=e,o=!1;const i=async()=>{const c=await ke(()=>import("./AlgoliaSearch-ccd67425.js"),["chunks/AlgoliaSearch-ccd67425.js","chunks/index-c32358ff.js","chunks/contexts-2aef7541.js","chunks/singletons-37dfeae3.js","chunks/blocknative-847bc20d.js","assets/blocknative-ce591f8d.css","chunks/twitter-fill-a9ee53f3.js","chunks/scroll-5387a6f1.js","assets/scroll-8521731d.css","chunks/preload-helper-60cab3ee.js"]);return r(4,o=!0),c};return s.$$set=c=>{"appId"in c&&r(0,t=c.appId),"indexName"in c&&r(1,a=c.indexName),"apiKey"in c&&r(2,n=c.apiKey),"placeholder"in c&&r(3,l=c.placeholder)},[t,a,n,l,o,i]}class qe extends W{constructor(e){super(),H(this,e,Be,je,z,{appId:0,indexName:1,apiKey:2,placeholder:3})}}var xe=qe;function te(s){return document.title=s[3],{c:d,l:d,m:d,d}}function ae(s){let e;return{c(){e=k("meta"),this.h()},l(r){e=$(r,"META",{name:!0,content:!0}),this.h()},h(){f(e,"name","description"),f(e,"content",s[2])},m(r,t){w(r,e,t)},p(r,t){t&4&&f(e,"content",r[2])},d(r){r&&u(e)}}}function re(s){let e,r,t=s[3]&&te(s),a=s[2]&&ae(s);return{c(){t&&t.c(),e=A(),a&&a.c(),r=q()},l(n){t&&t.l(n),e=j(n),a&&a.l(n),r=q()},m(n,l){t&&t.m(n,l),w(n,e,l),a&&a.m(n,l),w(n,r,l)},p(n,l){n[3]?t||(t=te(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null),n[2]?a?a.p(n,l):(a=ae(n),a.c(),a.m(r.parentNode,r)):a&&(a.d(1),a=null)},d(n){t&&t.d(n),n&&u(e),a&&a.d(n),n&&u(r)}}}function Ve(s){let e;const r=s[9].default,t=fe(r,s,s[10],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,n){t&&t.m(a,n),e=!0},p(a,n){t&&t.p&&(!e||n&1024)&&ue(t,r,a,a[10],e?me(r,a[10],n,null):de(a[10]),null)},i(a){e||(g(t,a),e=!0)},o(a){b(t,a),e=!1},d(a){t&&t.d(a)}}}function Ce(s){let e,r,t,a,n,l="Web3-Onboard",o,i;return t=new he({}),{c(){e=k("div"),r=k("a"),I(t.$$.fragment),a=A(),n=k("span"),o=O(l),this.h()},l(c){e=$(c,"DIV",{slot:!0});var _=p(e);r=$(_,"A",{class:!0,href:!0});var v=p(r);B(t.$$.fragment,v),a=j(v),n=$(v,"SPAN",{class:!0});var S=p(n);o=R(S,l),S.forEach(u),v.forEach(u),_.forEach(u),this.h()},h(){f(n,"class","ml-4"),f(r,"class","text-base flex items-center"),f(r,"href","/"),f(e,"slot","navbar-left")},m(c,_){w(c,e,_),m(e,r),K(t,r,null),m(r,a),m(r,n),m(n,o),i=!0},p:d,i(c){i||(g(t.$$.fragment,c),i=!0)},o(c){b(t.$$.fragment,c),i=!1},d(c){c&&u(e),N(t)}}}function Le(s){let e,r;return e=new xe({props:{apiKey:"1bce9c4755cea3698e16830544503ee2",appId:"02BH13PRRI",indexName:"docsearch",placeholder:"Search documentation",slot:"search"}}),{c(){I(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){K(e,t,a),r=!0},p:d,i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Me(s){let e,r,t,a,n,l;return t=new Y({props:{type:"gitHub",href:"//github.com/blocknative/web3-onboard"}}),n=new Y({props:{type:"discord",href:"//discord.com/invite/KZaBVME"}}),{c(){e=k("div"),r=k("div"),I(t.$$.fragment),a=A(),I(n.$$.fragment),this.h()},l(o){e=$(o,"DIV",{slot:!0});var i=p(e);r=$(i,"DIV",{class:!0});var c=p(r);B(t.$$.fragment,c),a=j(c),B(n.$$.fragment,c),c.forEach(u),i.forEach(u),this.h()},h(){f(r,"class","flex"),f(e,"slot","navbar-right-alt")},m(o,i){w(o,e,i),m(e,r),K(t,r,null),m(r,a),K(n,r,null),l=!0},p:d,i(o){l||(g(t.$$.fragment,o),g(n.$$.fragment,o),l=!0)},o(o){b(t.$$.fragment,o),b(n.$$.fragment,o),l=!1},d(o){o&&u(e),N(t),N(n)}}}function Oe(s){let e,r;return e=new pe({props:{navbar:s[5],sidebar:s[1],search:!0,$$slots:{"navbar-right-alt":[Me],search:[Le],"navbar-left":[Ce],default:[Ve]},$$scope:{ctx:s}}}),{c(){I(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,a){K(e,t,a),r=!0},p(t,a){const n={};a&2&&(n.sidebar=t[1]),a&1024&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(g(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){N(e,t)}}}function Re(s){let e=s[4].url.pathname,r,t,a,n,l=re(s);return a=new _e({props:{meta:s[0],$$slots:{default:[Oe]},$$scope:{ctx:s}}}),{c(){l.c(),r=q(),t=A(),I(a.$$.fragment)},l(o){const i=ce('[data-svelte="svelte-3cm5o9"]',document.head);l.l(i),r=q(),i.forEach(u),t=j(o),B(a.$$.fragment,o)},m(o,i){l.m(document.head,null),m(document.head,r),w(o,t,i),K(a,o,i),n=!0},p(o,[i]){i&16&&z(e,e=o[4].url.pathname)?(l.d(1),l=re(o),l.c(),l.m(r.parentNode,r)):l.p(o,i);const c={};i&1&&(c.meta=o[0]),i&1026&&(c.$$scope={dirty:i,ctx:o}),a.$set(c)},i(o){n||(g(a.$$.fragment,o),n=!0)},o(o){b(a.$$.fragment,o),n=!1},d(o){u(r),l.d(o),o&&u(t),N(a,o)}}}const Qe=!0,Ue=Ee({sidebar:{"/":"/","/docs":"/docs","/faq":"/faq","/examples":"/examples","/theming-tool":"/theming-tool"}});function ze(s,e,r){let t,a,n,l,o;X(s,ve,h=>r(4,o=h));let{$$slots:i={},$$scope:c}=e,{meta:_=null}=e,{sidebar:v=null}=e;const S={links:[{title:"Documentation",slug:"/docs",match:/\/docs/},{title:"Examples",slug:"/examples",match:/\/examples/},{title:"FAQ",slug:"/faq",match:/\/faq/},{title:"Blog",slug:"https://www.blocknative.com/blog/tag/web3-onboard"}]},{activeCategory:V}=be(v);return X(s,V,h=>r(8,l=h)),s.$$set=h=>{"meta"in h&&r(0,_=h.meta),"sidebar"in h&&r(1,v=h.sidebar),"$$scope"in h&&r(10,c=h.$$scope)},s.$$.update=()=>{s.$$.dirty&256&&r(7,t=l?`${l}: `:""),s.$$.dirty&129&&r(3,a=_?`${t}${_.title} | Web3-Onboard`:null),s.$$.dirty&1&&r(2,n=_==null?void 0:_.description)},[_,v,n,a,o,S,V,t,l,i,c]}class Ze extends W{constructor(e){super(),H(this,e,ze,Re,z,{meta:0,sidebar:1})}}export{Ke as A,Ze as _,Ue as l,Qe as p};