(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[520],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3919:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return o}})},4996:function(e,t,r){"use strict";r.d(t,{C:function(){return a},Z:function(){return i}});var n=r(2263),o=r(3919);function a(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,i=a.forcePrependBaseUrl,p=void 0!==i&&i,l=a.absolute,s=void 0!==l&&l;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(p)return t+r;var c=r.startsWith(t)?r:t+r.replace(/^\//,"");return s?e+c:c}(a,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},1329:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=r(4996),p={id:"howto_democracy_referenda",title:"Participate in Referenda"},l={unversionedId:"howto_democracy_referenda",id:"howto_democracy_referenda",isDocsHomePage:!1,title:"Participate in Referenda",description:"This post provides a step-by-step guide on how to participate in referenda: vote in a referendum and propose a referendum.",source:"@site/docs/howto_democracy_referenda.md",sourceDirName:".",slug:"/howto_democracy_referenda",permalink:"/fr/howto_democracy_referenda",editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_democracy_referenda.md",version:"current",frontMatter:{id:"howto_democracy_referenda",title:"Participate in Referenda"},sidebar:"sidebar",previous:{title:"Create a new BSX Account",permalink:"/fr/create_account"},next:{title:"Participate in Council Elections",permalink:"/fr/howto_democracy_council_elections"}},s=[{value:"Vote in a Referendum",id:"vote",children:[{value:"Vote using Polkassembly",id:"vote-polkassembly",children:[]},{value:"Vote using Polkadot/apps",id:"vote-polkajs",children:[]}]},{value:"Propose a Referendum",id:"propose",children:[{value:"01 Submit preimage",id:"propose-01",children:[]},{value:"02 Submit proposal",id:"propose-02",children:[]}]}],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post provides a step-by-step guide on how to participate in referenda: ",(0,a.kt)("a",{parentName:"p",href:"#vote"},"vote in a referendum")," and ",(0,a.kt)("a",{parentName:"p",href:"#propose"},"propose a referendum"),"."),(0,a.kt)("p",null,"Before you decide to participate in democracy, we strongly encourage you to read through the ",(0,a.kt)("a",{parentName:"p",href:"/learn_democracy_referenda"},"referenda knowledge article")," in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda."),(0,a.kt)("h2",{id:"vote"},"Vote in a Referendum"),(0,a.kt)("p",null,"You can vote in Basilisk referenda either by using ",(0,a.kt)("a",{parentName:"p",href:"#vote-polkassembly"},"Polkassembly")," or directly from ",(0,a.kt)("a",{parentName:"p",href:"#vote-polkajs"},"Polkadot/apps"),"."),(0,a.kt)("h3",{id:"vote-polkassembly"},"Vote using Polkassembly"),(0,a.kt)("p",null,"To see all active and past referenda, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://basilisk.polkassembly.network/"},"Basilisk Polkassembly page"),". If this is the first time you use Polkassembly, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," (top right corner) and connect your wallet. If you are already registered, make sure you that your wallet is connected, otherwise do so via ",(0,a.kt)("inlineCode",{parentName:"p"},"Login"),"."),(0,a.kt)("p",null,"To see all active and past referenda, click on ",(0,a.kt)("a",{parentName:"p",href:"https://basilisk.polkassembly.network/referenda"},"Referenda"),"."),(0,a.kt)("p",null,"Click on an active referendum to see its details, the voting turnout, as well as the voting module."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/img/howto_democracy_referenda/polkassembly-vote.jpg")})),(0,a.kt)("p",null,"To cast your vote, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Vote")," and provide the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote with account")," - select the voting account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lock balance")," - this is the amount of BSX tokens you are willing to lock in support of the referendum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote lock")," - this is the multiplier which co-determines the ",(0,a.kt)("a",{parentName:"li",href:"/learn_democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,a.kt)("p",null,"After that, bring out your vote by clicking on ",(0,a.kt)("em",{parentName:"p"},"Nay")," (No) or ",(0,a.kt)("em",{parentName:"p"},"Aye")," (Yes) and sign the transaction."),(0,a.kt)("h3",{id:"vote-polkajs"},"Vote using Polkadot/apps"),(0,a.kt)("p",null,"You can see all referenda which are open for voting by navigating to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,a.kt)("p",null,"To vote in a referendum, click on the ",(0,a.kt)("em",{parentName:"p"},"Vote")," button next to it."),(0,a.kt)("p",null,"In the popup, fill in the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote value")," - this is the amount of BSX tokens you are willing to lock in support of the referendum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Conviction multiplier")," - this is the multiplier which co-determines the ",(0,a.kt)("a",{parentName:"li",href:"/learn_democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,a.kt)("p",null,"After that, bring out your vote by clicking on ",(0,a.kt)("em",{parentName:"p"},"Vote Nay")," (No) or ",(0,a.kt)("em",{parentName:"p"},"Vote Aye")," (Yes) and sign the transaction."),(0,a.kt)("h2",{id:"propose"},"Propose a Referendum"),(0,a.kt)("p",null,"You can propose a new referendum via Polkadot/apps. The process consists of two steps - ",(0,a.kt)("a",{parentName:"p",href:"#propose-01"},"submitting a preimage"),", and ",(0,a.kt)("a",{parentName:"p",href:"#propose-02"},"submitting the proposal on-chain"),"."),(0,a.kt)("h3",{id:"propose-01"},"01 Submit preimage"),(0,a.kt)("p",null,"To submit the preimage, visit Polkadot/apps and navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy")),"."),(0,a.kt)("p",null,"After clicking on ",(0,a.kt)("em",{parentName:"p"},"Submit preimage"),", you should see the following popup:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/img/howto_democracy_referenda/polkajs-preimage.jpg")})),(0,a.kt)("p",null,"Fill in the information in the fields show above. The most important parameters are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account from which the proposal is sent"),(0,a.kt)("li",{parentName:"ul"},"Proposal area"),(0,a.kt)("li",{parentName:"ul"},"Proposed action")),(0,a.kt)("p",null,"In the example above, the proposal area is ",(0,a.kt)("em",{parentName:"p"},"balances"),", and the action is ",(0,a.kt)("em",{parentName:"p"},"forceTransfer")," of tokens from one account to another."),(0,a.kt)("p",null,"Before submitting the preimage and signing the transaction, please make sure to copy the preimage hash. You will need it for the next step."),(0,a.kt)("h3",{id:"propose-02"},"02 Submit proposal"),(0,a.kt)("p",null,"To submit the referendum proposal, visit ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Frpc-01.basilisk.hydradx.io#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,a.kt)("p",null,"After clicking on ",(0,a.kt)("em",{parentName:"p"},"Submit proposal"),", you should see the following popup:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,i.Z)("/img/howto_democracy_referenda/polkajs-proposal.jpg")})),(0,a.kt)("p",null,"Enter the preimage hash from the previous step, and the amount of tokens you are willing to deposit for the proposal."),(0,a.kt)("p",null,"After submitting the proposal on-chain and signing the transaction, your proposal should appear in the list of proposed referenda."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Every voting period, the referendum proposal with the highest backing (",(0,a.kt)("em",{parentName:"p"},"seconding"),") enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time."),(0,a.kt)("p",{parentName:"div"},"Malicious referendum proposals are punished. The Basilisk Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt."))))}u.isMDXComponent=!0}}]);