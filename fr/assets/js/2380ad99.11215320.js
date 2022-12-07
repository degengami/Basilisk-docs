"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=o.createContext({}),s=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7446:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905)),n=r(4996);const i={id:"howto_democracy_referenda",title:"Participate in Referenda"},p=void 0,l={unversionedId:"howto_democracy_referenda",id:"howto_democracy_referenda",title:"Participate in Referenda",description:"This post provides a step-by-step guide on how to participate in referenda: vote in a referendum and propose a referendum.",source:"@site/docs/howto_democracy_referenda.md",sourceDirName:".",slug:"/howto_democracy_referenda",permalink:"/fr/howto_democracy_referenda",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_democracy_referenda.md",tags:[],version:"current",frontMatter:{id:"howto_democracy_referenda",title:"Participate in Referenda"},sidebar:"sidebar",previous:{title:"Create a new BSX Account",permalink:"/fr/create_account"},next:{title:"Participate in Council Elections",permalink:"/fr/howto_democracy_council_elections"}},s={},c=[{value:"Vote in a Referendum",id:"vote",level:2},{value:"Vote using Subsquare",id:"vote-subsquare",level:3},{value:"Vote using Polkadot/apps",id:"vote-polkajs",level:3},{value:"Propose a Referendum",id:"propose",level:2},{value:"01 Submit preimage",id:"propose-01",level:3},{value:"02 Submit proposal",id:"propose-02",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This post provides a step-by-step guide on how to participate in referenda: ",(0,a.kt)("a",{parentName:"p",href:"#vote"},"vote in a referendum")," and ",(0,a.kt)("a",{parentName:"p",href:"#propose"},"propose a referendum"),"."),(0,a.kt)("p",null,"Before you decide to participate in democracy, we strongly encourage you to read through the ",(0,a.kt)("a",{parentName:"p",href:"/learn_democracy_referenda"},"referenda knowledge article")," in the Learn / Democracy section. There you will find some important details on the mechanics behind referenda."),(0,a.kt)("h2",{id:"vote"},"Vote in a Referendum"),(0,a.kt)("p",null,"You can vote in Basilisk referenda either by using ",(0,a.kt)("a",{parentName:"p",href:"#vote-subsquare"},"Subsquare")," or directly from ",(0,a.kt)("a",{parentName:"p",href:"#vote-polkajs"},"Polkadot/apps"),"."),(0,a.kt)("h3",{id:"vote-subsquare"},"Vote using Subsquare"),(0,a.kt)("p",null,"To see all active and past referenda, navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://basilisk.subsquare.io/"},"Basilisk Subsquare page"),". If this is the first time you use Subsquare, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," (top right corner) and connect your wallet. If you are already registered, make sure you that your wallet is connected, otherwise do so via ",(0,a.kt)("inlineCode",{parentName:"p"},"Login"),"."),(0,a.kt)("p",null,"To see all active and past referenda, click on ",(0,a.kt)("a",{parentName:"p",href:"https://basilisk.subsquare.io/democracy/referenda"},"Referenda"),"."),(0,a.kt)("p",null,"Click on an active referendum to see its details, the voting turnout, as well as the voting module."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,n.Z)("/img/howto_democracy_referenda/subsquare-vote.jpg")})),(0,a.kt)("p",null,"To cast your vote, click on ",(0,a.kt)("inlineCode",{parentName:"p"},"Vote")," and provide the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote with account")," - select the voting account."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Lock balance")," - this is the amount of BSX tokens you are willing to lock in support of the referendum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote lock")," - this is the multiplier which co-determines the ",(0,a.kt)("a",{parentName:"li",href:"/learn_democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,a.kt)("p",null,"After that, bring out your vote by clicking on ",(0,a.kt)("em",{parentName:"p"},"Nay")," (No) or ",(0,a.kt)("em",{parentName:"p"},"Aye")," (Yes) and sign the transaction."),(0,a.kt)("h3",{id:"vote-polkajs"},"Vote using Polkadot/apps"),(0,a.kt)("p",null,"You can see all referenda which are open for voting by navigating to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.basilisk.cloud#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,a.kt)("p",null,"To vote in a referendum, click on the ",(0,a.kt)("em",{parentName:"p"},"Vote")," button next to it."),(0,a.kt)("p",null,"In the popup, fill in the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vote value")," - this is the amount of BSX tokens you are willing to lock in support of the referendum."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Conviction multiplier")," - this is the multiplier which co-determines the ",(0,a.kt)("a",{parentName:"li",href:"/learn_democracy_referenda#referenda-votes-weighing"},"weight of your vote"),".")),(0,a.kt)("p",null,"After that, bring out your vote by clicking on ",(0,a.kt)("em",{parentName:"p"},"Vote Nay")," (No) or ",(0,a.kt)("em",{parentName:"p"},"Vote Aye")," (Yes) and sign the transaction."),(0,a.kt)("h2",{id:"propose"},"Propose a Referendum"),(0,a.kt)("p",null,"You can propose a new referendum via Polkadot/apps. The process consists of two steps - ",(0,a.kt)("a",{parentName:"p",href:"#propose-01"},"submitting a preimage"),", and ",(0,a.kt)("a",{parentName:"p",href:"#propose-02"},"submitting the proposal on-chain"),"."),(0,a.kt)("h3",{id:"propose-01"},"01 Submit preimage"),(0,a.kt)("p",null,"To submit the preimage, visit Polkadot/apps and navigate to ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.basilisk.cloud#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy")),"."),(0,a.kt)("p",null,"After clicking on ",(0,a.kt)("em",{parentName:"p"},"Submit preimage"),", you should see the following popup:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,n.Z)("/img/howto_democracy_referenda/polkajs-preimage.jpg")})),(0,a.kt)("p",null,"Fill in the information in the fields shown above. The most important parameters are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Account from which the proposal is sent"),(0,a.kt)("li",{parentName:"ul"},"Proposal area"),(0,a.kt)("li",{parentName:"ul"},"Proposed action")),(0,a.kt)("p",null,"In the example above, the proposal area is ",(0,a.kt)("em",{parentName:"p"},"balances"),", and the action is ",(0,a.kt)("em",{parentName:"p"},"forceTransfer")," of tokens from one account to another."),(0,a.kt)("p",null,"Before submitting the preimage and signing the transaction, please make sure to copy the preimage hash. You will need it for the next step."),(0,a.kt)("h3",{id:"propose-02"},"02 Submit proposal"),(0,a.kt)("p",null,"To submit the referendum proposal, visit ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.basilisk.cloud#/democracy"},(0,a.kt)("em",{parentName:"a"},"Governance > Democracy"))," in Polkadot/apps."),(0,a.kt)("p",null,"After clicking on ",(0,a.kt)("em",{parentName:"p"},"Submit proposal"),", you should see the following popup:"),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:(0,n.Z)("/img/howto_democracy_referenda/polkajs-proposal.jpg")})),(0,a.kt)("p",null,"Enter the preimage hash from the previous step, and the amount of tokens you are willing to deposit for the proposal."),(0,a.kt)("p",null,"After submitting the proposal on-chain and signing the transaction, your proposal should appear in the list of proposed referenda."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Every voting period, the referendum proposal with the highest backing (",(0,a.kt)("em",{parentName:"p"},"seconding"),") enters the voting round. As the amount of referenda grows, there is no guarantee that your proposal will ever gain sufficient seconding to enter voting. There is no option to withdraw a referendum proposal, meaning that your funds might remain locked for a longer period of time."),(0,a.kt)("p",{parentName:"admonition"},"Malicious referendum proposals are punished. The Basilisk Council and the Technical Committee have the right to cancel any referendum which was proposed in bad faith. As a result, the deposited tokens will be burnt.")))}d.isMDXComponent=!0}}]);