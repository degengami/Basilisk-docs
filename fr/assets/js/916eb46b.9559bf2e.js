"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={id:"product_snek_lbp",title:"Snek LBP"},o=void 0,s={unversionedId:"product_snek_lbp",id:"product_snek_lbp",title:"Snek LBP",description:"Snek LBP (Liquidity Bootstrapping Pool) is a permissionless Automated Market Maker (AMM) built for the Kusama ecosystem. Its aim is to empower young crypto projects by allowing them to bootstrap liquidity and navigate initial price discovery while performing a fair distribution of tokens to their communities.",source:"@site/docs/product_snek_lbp.md",sourceDirName:".",slug:"/product_snek_lbp",permalink:"/fr/product_snek_lbp",draft:!1,editUrl:"https://github.com/galacticcouncil/Basilisk-docs/edit/main/docs/product_snek_lbp.md",tags:[],version:"current",frontMatter:{id:"product_snek_lbp",title:"Snek LBP"},sidebar:"sidebar",previous:{title:"Snek Swap",permalink:"/fr/product_snek_swap"},next:{title:"Contribute to Snek",permalink:"/fr/spending_fw"}},l={},p=[{value:"Raising liquidity with Snek LBP",id:"raising-liquidity-with-snek-lbp",level:2},{value:"Features of Snek LBP",id:"features-of-snek-lbp",level:2},{value:"Decentralized <strong>and permissionless</strong>",id:"decentralized-and-permissionless",level:3},{value:"<strong>Capital-efficient</strong>",id:"capital-efficient",level:3},{value:"<strong>Navigate price discovery</strong>",id:"navigate-price-discovery",level:3},{value:"<strong>More fair to humans</strong>",id:"more-fair-to-humans",level:3},{value:"Unique repayment mechanism",id:"unique-repayment-mechanism",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Snek LBP")," (Liquidity Bootstrapping Pool) is a ",(0,i.kt)("strong",{parentName:"p"},"permissionless Automated Market Maker (AMM)")," built for the Kusama ecosystem. Its aim is to ",(0,i.kt)("strong",{parentName:"p"},"empower young crypto projects")," by allowing them to ",(0,i.kt)("strong",{parentName:"p"},"bootstrap liquidity")," and ",(0,i.kt)("strong",{parentName:"p"},"navigate initial price discovery")," while performing a ",(0,i.kt)("strong",{parentName:"p"},"fair distribution of tokens to their communities"),"."),(0,i.kt)("p",null,"To achieve this, Snek LBP uses a ",(0,i.kt)("strong",{parentName:"p"},"mechanism of time-based weights shifting")," which exerts a ",(0,i.kt)("strong",{parentName:"p"},"continuous downward pressure")," on the price. This is being ",(0,i.kt)("strong",{parentName:"p"},"counteracted by any buy orders"),"  that change the amount of tokens in the pool and drive the price up."),(0,i.kt)("p",null,"You can ",(0,i.kt)("a",{parentName:"p",href:"/howto_snek_lbp_mechanics"},"learn more about the mechanics of an LBP")," and also visit our ",(0,i.kt)("a",{parentName:"p",href:"/howto_snek_lbp_buy"},"step-by-step guide for buying tokens in an LBP"),"."),(0,i.kt)("h2",{id:"raising-liquidity-with-snek-lbp"},"Raising liquidity with Snek LBP"),(0,i.kt)("p",null,"Raising early liquidity using Snek LBP has several advantages as compared to other methods. In the first place, it is ",(0,i.kt)("strong",{parentName:"p"},"decentralized")," and ",(0,i.kt)("strong",{parentName:"p"},"permissionless"),". In the second place, Snek LBP is ",(0,i.kt)("strong",{parentName:"p"},"more capital-efficient")," than traditional XYK swap pools. Thanks to the weights mechanism, ",(0,i.kt)("strong",{parentName:"p"},"only a fraction of liquidity")," is needed to kickstart an LBP. Finally, the shifting weights create the excitement needed to navigate price discovery while distributing your tokens to the community in a fair manner."),(0,i.kt)("p",null,"Looking across the other avenues of token distributions, the LBP solves many of the issues which plague the other launch methods."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Launch Method"),(0,i.kt)("th",{parentName:"tr",align:null},"Pros"),(0,i.kt)("th",{parentName:"tr",align:null},"Cons"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CEX"),(0,i.kt)("td",{parentName:"tr",align:null},"Increased visibility and exposure"),(0,i.kt)("td",{parentName:"tr",align:null},"Listing fees (for projects); Centralized")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Whitelist to XYK"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensures allocation for early community members"),(0,i.kt)("td",{parentName:"tr",align:null},"Subject to front-running bots when launching XYK; Permissioned")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Stealth Launch"),(0,i.kt)("td",{parentName:"tr",align:null},"Ensures \u201cequal opportunity\u201d to acquire token"),(0,i.kt)("td",{parentName:"tr",align:null},"Subject to front-running bots when launching XYK; Insiders likely contribute to front-running")))),(0,i.kt)("h2",{id:"features-of-snek-lbp"},"Features of Snek LBP"),(0,i.kt)("h3",{id:"decentralized-and-permissionless"},"Decentralized ",(0,i.kt)("strong",{parentName:"h3"},"and permissionless")),(0,i.kt)("p",null,"No whitelists, hard caps, or listing requirements. There is no minimum or maximum allocation. Just choose how much you would like to distribute to your community and let the LBP magic take care of the rest."),(0,i.kt)("h3",{id:"capital-efficient"},(0,i.kt)("strong",{parentName:"h3"},"Capital-efficient")),(0,i.kt)("p",null,"Kickstarting an LBP does not require big amounts of initial liquidity. Unlike a traditional XYK pool, the team is not required to put up 50% in value of the other token used to bootstrap liquidity. Instead, the LBP weights mechanism allows to reduce the amount of collatoral"),(0,i.kt)("p",null,"For the projects launching a direct XYK pool, the team is required to put up 50% in value of another token (likely a stablecoin or major token like DOT or KSM). This is capital intensive for any project at the beginning. With the LBP, the team is able to reduce the amount of  collateral put up by up to 99% through programmatically magnifying the project's token."),(0,i.kt)("h3",{id:"navigate-price-discovery"},(0,i.kt)("strong",{parentName:"h3"},"Navigate price discovery")),(0,i.kt)("p",null,"Because there is no bot artificially sniping 50% of the pool (like direct XYK pool launches) right from the get-go, participants have a chance to buy the token at the price point he/she thinks is acceptable. If they think the price is too high/low during the LBP, they can sell back/buy into the LBP, helping regulate the price."),(0,i.kt)("h3",{id:"more-fair-to-humans"},(0,i.kt)("strong",{parentName:"h3"},"More fair to humans")),(0,i.kt)("p",null,"There is no incentive to front-run because the price is intentionally set higher and slowly declines if there is no demand. The average Joe is able to have a chance to buy the token during the LBP without having to FOMO in at the beginning and competing in gas wars. The downward price pressure also acts as a whale deterrent and allows for a longer window for more people to participate."),(0,i.kt)("h3",{id:"unique-repayment-mechanism"},"Unique repayment mechanism"),(0,i.kt)("p",null,"In addition to the general LBP features, our Snek LBP product also allows creators to dynamically adjust fees received from the LBP. This allows the team to determine: 1) The amount of fees collected (at start and during LBP), and 2) The location of fee accrual (single or multi-wallet). This allows team to ensure launch costs are recuperated while setting aside part of the funds to seed the XYK pool after LBP. "),(0,i.kt)("p",null,"With our unique repayment mechanism, LBP creators are also able to potentially tap into the BSX treasury to borrow funds for the initial seed liquidity for their LBP. The borrowed funds would automatically first be repaid to the BSX treasury during the course of the LBP period. Once fully repaid, the team would then begin accruing the remaining fees earned."))}c.isMDXComponent=!0}}]);