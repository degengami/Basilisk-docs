"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[832],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const o={id:"product_snek_swap",title:"Snek Swap"},i=void 0,s={unversionedId:"product_snek_swap",id:"product_snek_swap",title:"Snek Swap",description:"Snek Swap is an AMM built for the Kusama ecosystem which enables users to trade tokens in a decentralized and permissionless manner using so-called XYK pools. With Snake Swap, users can trade tokens or become a liquidity provider and earn rewards from the generated trading fees.",source:"@site/docs/product_snek_swap.md",sourceDirName:".",slug:"/product_snek_swap",permalink:"/de/product_snek_swap",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/product_snek_swap.md",tags:[],version:"current",frontMatter:{id:"product_snek_swap",title:"Snek Swap"},sidebar:"sidebar",previous:{title:"Intro",permalink:"/de/"},next:{title:"Snek LBP",permalink:"/de/product_snek_lbp"}},l={},d=[{value:"A short intro into AMMs",id:"intro",level:2},{value:"Order Books",id:"intro-order-book",level:3},{value:"AMMs",id:"intro-amm",level:3},{value:"Mechanics of Snek Swap (XYK)",id:"xyk",level:2},{value:"Slippage",id:"slippage",level:3},{value:"Providing Liquidity",id:"lp",level:2},{value:"Impermanent Loss (IL)",id:"impermanent-loss",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Snek Swap is an ",(0,a.kt)("a",{parentName:"p",href:"#intro"},"AMM")," built for the Kusama ecosystem which enables users to trade tokens in a decentralized and permissionless manner using so-called ",(0,a.kt)("a",{parentName:"p",href:"#xyk"},"XYK pools"),". With Snake Swap, users can trade tokens or become a ",(0,a.kt)("a",{parentName:"p",href:"#lp"},"liquidity provider")," and earn rewards from the generated trading fees."),(0,a.kt)("p",null,"If you are looking for step-by-step guides, please check out our guides on ",(0,a.kt)("a",{parentName:"p",href:"/howto_snek_swap_trade"},"swapping tokens")," and on ",(0,a.kt)("a",{parentName:"p",href:"/howto_snek_swap_provide_liquidity"},"providing liquidity"),"."),(0,a.kt)("h2",{id:"intro"},"A short intro into AMMs"),(0,a.kt)("p",null,"In order to better understand Automated Market Makers (AMMs) and how they work, we should first take a look at their centralized counterpart: Order Books."),(0,a.kt)("h3",{id:"intro-order-book"},"Order Books"),(0,a.kt)("p",null,"Order Books provide a mechanism deployed by centralized exchanges to facilitate trading between two assets. Users can place a Buy or Sell order in an electronic list managed by the exchange. The orders in this so-called Order Book are organized by price level and progressively filled as demand shifts and orders are being matched."),(0,a.kt)("p",null,"The limitations of Order Books become apparent against the background of their centralized nature. The need for an intermediary to \u201ckeep\u201d the Order Books and to facilitate the process of order matching creates a dependency on this central authority."),(0,a.kt)("p",null,"The central authority has control over the trading and needs to be trusted by the participants. Currently in crypto, in moments of substantial volume traffic and volatility, halting of trading or degradated liquidity is not an uncommon mishap. Furthermore, the process of adding new tradable assets is permissioned; meaning that, it is dependent upon the approval by the same authority which operates the Order Book."),(0,a.kt)("h3",{id:"intro-amm"},"AMMs"),(0,a.kt)("p",null,"Automated Market Makers (AMMs) is the answer by the DeFi industry to centrally operated Order Books. AMMs provide a decentralized, permissionless way of trading tokens without the need to subdue oneself to a central authority of control."),(0,a.kt)("p",null,"AMMs consist of liquidity pools that hold the available liquidity of the underlying tradable assets. This liquidity is provided by users (the so-called \u201cliquidity providers\u201d) who are incentivized to do so by the prospect of earning rewards from the fees generated by trades in the pool."),(0,a.kt)("p",null,"In the case of AMMs, any user can execute a Buy or Sell order on top of a given trading pool. The price of a trade is determined on the spot by a deterministic algorithm which takes as input the relationship between the liquidity of the traded assets, together with other factors which depend on the particular AMM implementation in question."),(0,a.kt)("p",null,"At Basilisk, we have an implementation of the the most commonly used AMM model - XYK, which provides swap functionality. In the nearest future, we will deliver our implementation of Liquidity Bootstrapping Pools (LBP) which empowers early-staged projects by allowing them to autonomously bootstrap initial liquidity, navigate price discovery and achieve a fair token distribution."),(0,a.kt)("h2",{id:"xyk"},"Mechanics of Snek Swap (XYK)"),(0,a.kt)("p",null,"Snek Swap is built using the so-called XYK AMM model which is the most common AMM used to facilitate swaps from one asset to another. An XYK pool typically consists of a pair of tradable tokens, ",(0,a.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Y"),'. The relationship between the two assets is expressed by the so-called \u201cconstant product\u201d formula, which is also where the name "XYK" comes from:'),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"x * y = k")),(0,a.kt)("p",null,"A practical example would be helpful to understand the XYK mechanics. Imagine that a new pool is launched holding ",(0,a.kt)("inlineCode",{parentName:"p"},"100 tokens of X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"100 tokens of Y"),". In this example, the constant product would be ",(0,a.kt)("inlineCode",{parentName:"p"},"k = 10000"),"."),(0,a.kt)("p",null,"Now imagine that Bob wants to perform a trade to obtain ",(0,a.kt)("inlineCode",{parentName:"p"},"1 token of X")," by depositing ",(0,a.kt)("inlineCode",{parentName:"p"},"some amount tokens of Y"),". The constant product formula tells us how much ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens of Y")," there should be in order to keep the pool in balance after the trade:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Y_new = (k / X_new) = 10000/99 = 101.01")),(0,a.kt)("p",null,"In other words, Bob can withdraw ",(0,a.kt)("inlineCode",{parentName:"p"},"1 token of X")," under the condition that he deposits enough tokens to bring the amount of ",(0,a.kt)("inlineCode",{parentName:"p"},"Y = 101.01"),". This means that Bob needs to cover the difference between the old state (Y = 100) and the new state (Y = 101.01), resulting in ",(0,a.kt)("inlineCode",{parentName:"p"},"1.01 tokens of Y"),". This is the price of the swap."),(0,a.kt)("h3",{id:"slippage"},"Slippage"),(0,a.kt)("p",null,"When a trade is executed, users may experience a common side-effect of the XYK AMM known as ",(0,a.kt)("inlineCode",{parentName:"p"},"slippage"),". This is the difference between the expected price of a trade and the price when the trade is actually executed."),(0,a.kt)("p",null,"Slippage is determined by the amount of liquidity available within each trading pool. If there is a low amount of liquidity provided to a certain pair of assets, then the slippage percentage when transacting with big orders will be higher."),(0,a.kt)("p",null,"The table below demonstrates the effect of slippage on the trading price. Using the previous example of a pool containing ",(0,a.kt)("inlineCode",{parentName:"p"},"100 tokens of X")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"100 tokens of Y"),", we can see how the price for ",(0,a.kt)("inlineCode",{parentName:"p"},"1 token of X")," increases as the order grows."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Token X (Out)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Token Y (In)"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Price per X (in Y)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"1"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.01"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.01")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"5"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5.26"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.05")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"10"),(0,a.kt)("td",{parentName:"tr",align:"center"},"11.11"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.11")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"20"),(0,a.kt)("td",{parentName:"tr",align:"center"},"25 \xa0"),(0,a.kt)("td",{parentName:"tr",align:"center"},"1.25")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"50"),(0,a.kt)("td",{parentName:"tr",align:"center"},"100"),(0,a.kt)("td",{parentName:"tr",align:"center"},"2")))),(0,a.kt)("p",null,"Note that in Snek Swap, you can set the amount of Slippage you are willing to incur for any trade. This helps the user avoid any unfavorable trades out of their expectations."),(0,a.kt)("h2",{id:"lp"},"Providing Liquidity"),(0,a.kt)("p",null,"Thanks to the decentralized manner of an AMM, anyone can become a liquidity provider (LP) for a pool by depositing an equivalent value of each underlying token in return for an LP share."),(0,a.kt)("p",null,"LPs are rewarded with fees for providing this liquidity based on the trading activity experienced by this individual liquidity pool that they have selected to LP for."),(0,a.kt)("h3",{id:"impermanent-loss"},"Impermanent Loss (IL)"),(0,a.kt)("p",null,"A risk faced by LPs is called Impermanent loss (or divergence loss)."),(0,a.kt)("p",null,"This is the risk of the difference in value between holding tokens in an AMM liquidity pool and holding them in your wallet."),(0,a.kt)("p",null,"Liquidity pools consist of multiple tokens (usually two) paired together in a pool. IL occurs when the tokens inside the pool diverge in price. The greater the divergence, the greater the risk of negative returns for the pool's LPs."),(0,a.kt)("p",null,'The risk is referred to as "impermanent" because the loss is only realized when you withdraw your tokens from the pool. If the relative prices of tokens in the pool return to their original state when you deposited tokens, the loss is minimized or eliminated.'),(0,a.kt)("p",null,"The losses become ",(0,a.kt)("em",{parentName:"p"},"permanent")," the moment you withdraw your tokens, reducing your earnings and sometimes wiping out your entire share of profits. "),(0,a.kt)("p",null,"As such, LPs need to weigh the fees and rewards earned from being a LP versus simply holding your tokens in your wallet."))}c.isMDXComponent=!0}}]);