"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[295],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),k=o,h=d["".concat(p,".").concat(k)]||d[k]||c[k]||a;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),a=n(4996);const i={id:"howto_snek_lbp_buy",title:"Buy Tokens"},l=void 0,p={unversionedId:"howto_snek_lbp_buy",id:"howto_snek_lbp_buy",title:"Buy Tokens",description:"This page provides a step-by-step guide which will help you execute your first trades using Snek LBP.",source:"@site/docs/howto_snek_lbp_buy.md",sourceDirName:".",slug:"/howto_snek_lbp_buy",permalink:"/fr/howto_snek_lbp_buy",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/howto_snek_lbp_buy.md",tags:[],version:"current",frontMatter:{id:"howto_snek_lbp_buy",title:"Buy Tokens"},sidebar:"sidebar",previous:{title:"Provide Liquidity",permalink:"/fr/howto_snek_swap_provide_liquidity"},next:{title:"LBP Mechanics",permalink:"/fr/howto_snek_lbp_mechanics"}},s={},u=[{value:"Trade Screen",id:"trade-screen",level:2},{value:"Step 0: Bridge Tokens",id:"step-0-bridge-tokens",level:2},{value:"Step 1: Navigate to Snek LBP Page",id:"step-1-navigate-to-snek-lbp-page",level:2},{value:"Step 2: Connect to Your Account",id:"step-2-connect-to-your-account",level:2},{value:"Step 3: Execute a Trade",id:"step-3-execute-a-trade",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page provides a ",(0,o.kt)("strong",{parentName:"p"},"step-by-step guide")," which will ",(0,o.kt)("strong",{parentName:"p"},"help you execute your first trades")," using Snek LBP."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"DYOR!"),(0,o.kt)("p",{parentName:"admonition"},"If you have never traded in an LBP before, we stringly encourage you to read our ",(0,o.kt)("a",{parentName:"p",href:"/product_snek_lbp"},"product description of Snek LBP")," as well as ",(0,o.kt)("a",{parentName:"p",href:"/howto_snek_lbp_mechanics"},"this article on the mechanics of an LBP"),".")),(0,o.kt)("h2",{id:"trade-screen"},"Trade Screen"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{alt:"lbp",src:(0,a.Z)("/img/howto_lbp/lbp.jpg")})),(0,o.kt)("h2",{id:"step-0-bridge-tokens"},"Step 0: Bridge Tokens"),(0,o.kt)("p",null,"Before you can participate in an LBP, you need to make sure you have enough tokens from the asset which is being bootstrapped."),(0,o.kt)("p",null,"For example, if a project is bootstrapping KSM, you need to first bridge KSM into the Basilisk chain."),(0,o.kt)("p",null,"For this purpose, you can use one of the following bridges:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://apps.karura.network/bridge"},"Karura Bridge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://novawallet.io/"},"Nova Wallet")," (mobile)")),(0,o.kt)("p",null,"These bridges can also be used to bridge non-native assets out of the Basilisk chain."),(0,o.kt)("h2",{id:"step-1-navigate-to-snek-lbp-page"},"Step 1: Navigate to Snek LBP Page"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://app.basilisk.cloud/#/lbp"},"https://app.basilisk.cloud/#/lbp")),(0,o.kt)("h2",{id:"step-2-connect-to-your-account"},"Step 2: Connect to Your Account"),(0,o.kt)("p",null,"Click on ",(0,o.kt)("inlineCode",{parentName:"p"},"Connect Account")," ",(0,o.kt)("strong",{parentName:"p"},"(1 in image above)")," and connect to your BSX wallet. "),(0,o.kt)("p",null,"If you still do not have a BSX account, please ",(0,o.kt)("a",{parentName:"p",href:"https://docs.bsx.fi/create_account"},"follow this guide")," to create one."),(0,o.kt)("h2",{id:"step-3-execute-a-trade"},"Step 3: Execute a Trade"),(0,o.kt)("p",null,"The Snek LBP UI allows you to intuitively execute a trade:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the pair of tokens you intend to trade, which will include the LBP asset ",(0,o.kt)("strong",{parentName:"li"},"(2)"),"."),(0,o.kt)("li",{parentName:"ul"},"Enter the amount of tokens for the trade ",(0,o.kt)("strong",{parentName:"li"},"(3)"),".","  You can enter the amount of tokens you would like to pay with (e.g. 50 KSM), but you can also enter the amount of tokens you would like to receive (e.g. 10000 TNKR).\n"),(0,o.kt)("li",{parentName:"ul"},"If you would like to adjust your slippage preferences, you can do so by clicking on the ",(0,o.kt)("strong",{parentName:"li"},"Settings Icon (4).")),(0,o.kt)("li",{parentName:"ul"},"A price graph ",(0,o.kt)("strong",{parentName:"li"},"(5)")," tracking the LBP price history and price trajectory (without any new trades) is provided for users to reference when deciding when to make their purchase. You may toggle off the price trajectory without trades ",(0,o.kt)("strong",{parentName:"li"},"(6)")," if needed."),(0,o.kt)("li",{parentName:"ul"},"Price data denominated in US$ is also provided ",(0,o.kt)("strong",{parentName:"li"},"(7)")," for reference, along with the initial, current, and final weight of the LBP asset relative to the pool."),(0,o.kt)("li",{parentName:"ul"},"To complete the trade, click on ",(0,o.kt)("strong",{parentName:"li"},"Swap")," ",(0,o.kt)("strong",{parentName:"li"},"(8)")," and sign the transaction using your wallet app.")),(0,o.kt)("p",null,"Thanksss for using Snek LBP!"))}d.isMDXComponent=!0}}]);