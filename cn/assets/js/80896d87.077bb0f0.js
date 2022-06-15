(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[335],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,c(c({ref:t},s),{},{components:n})):o.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function o(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!o(e)}n.d(t,{b:function(){return o},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return c}});var o=n(2263),r=n(3919);function i(){var e=(0,o.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,o){var i=void 0===o?{}:o,c=i.forcePrependBaseUrl,a=void 0!==c&&c,l=i.absolute,u=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(a)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+s:s}(i,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8519:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),c=n(4996),a={id:"howto_democracy_council_elections",title:"Participate in Council Elections"},l={unversionedId:"howto_democracy_council_elections",id:"howto_democracy_council_elections",isDocsHomePage:!1,title:"Participate in Council Elections",description:"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate.",source:"@site/docs/howto_democracy_council_elections.md",sourceDirName:".",slug:"/howto_democracy_council_elections",permalink:"/cn/howto_democracy_council_elections",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_democracy_council_elections.md",version:"current",frontMatter:{id:"howto_democracy_council_elections",title:"Participate in Council Elections"},sidebar:"sidebar",previous:{title:"Participate in Referenda",permalink:"/cn/howto_democracy_referenda"},next:{title:"Introduction",permalink:"/cn/learn_democracy_intro"}},u=[{value:"Vote in Council member elections",id:"polkajs-vote",children:[]},{value:"Apply as a Council candidate",id:"polkajs-become_candidate",children:[]}],s={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article provides step-by-step guidance on how to participate in Council elections - voting for Council members and becoming a Council candidate."),(0,i.kt)("p",null,"If you are interested in how the election mechanism works, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/learn_democracy_council#elections"},"this post"),"."),(0,i.kt)("h2",{id:"polkajs-vote"},"Vote in Council member elections"),(0,i.kt)("p",null,"You can see the current Council members as well as the runners-up on the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/council"},(0,i.kt)("em",{parentName:"a"},"Governance > Council")," page")," in Polkadot/apps."),(0,i.kt)("p",null,"To bring out your vote for Council members, click on ",(0,i.kt)("em",{parentName:"p"},"Vote"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,c.Z)("/img/howto_democracy_council_elections/polkajs-vote.jpg")})),(0,i.kt)("p",null,"Enter the amount of tokens you are willing to lock in support of your candidates."),(0,i.kt)("p",null,"After that, select your candidates in order of preference by moving them from the left list to the right one. Remeber to select multiple candidates - this will help the algorithm select the optimal distribution of candidates to the Council."),(0,i.kt)("p",null,"To bring out your vote, click on ",(0,i.kt)("em",{parentName:"p"},"Vote")," and sign the transaction."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Locked tokens cannot be transferred, however they can still be used for staking and voting in referenda. Your tokens will remain locked and used for subsequent elections until you have decided to unlock them."))),(0,i.kt)("h2",{id:"polkajs-become_candidate"},"Apply as a Council candidate"),(0,i.kt)("p",null,"You can submit your application for Council membership by navigating to ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/council"},(0,i.kt)("em",{parentName:"a"},"Governance > Council"))," in Polkadot/apps."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("em",{parentName:"p"},"Submit candidacy")," which will trigger a popup."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:(0,c.Z)("/img/howto_democracy_council_elections/polkajs-run-for-council.jpg")})),(0,i.kt)("p",null,"Select the account which is running for Council membership, click on ",(0,i.kt)("em",{parentName:"p"},"Submit"),", and sign the transaction."))}p.isMDXComponent=!0}}]);