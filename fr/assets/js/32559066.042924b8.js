(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(7),r=(t(0),t(90)),s=t(91),o={id:"start_nominating",title:"Devenez nominateur"},c={unversionedId:"start_nominating",id:"start_nominating",isDocsHomePage:!1,title:"Devenez nominateur",description:"En devenant un nominateur, vous stakez (d\xe9l\xe9guez) certains de vos tokens HDX pour aider \xe0 s\xe9curiser le r\xe9seau HydraDX et pour gagner des r\xe9compenses.  \xc0 l'inverse de faire fonctionner un node de validateur, le proc\xe9d\xe9 de nominer ne requiert pas de comp\xe9tences techniques avanc\xe9es, faisant ainsi de la nomination le choix recommand\xe9 pour quiconque ne souhaite pas devenir validateur.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/start_nominating.md",slug:"/start_nominating",permalink:"/fr/start_nominating",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/start_nominating.md",version:"current",sidebar:"sidebar",previous:{title:"R\xe9cup\xe9rer vos HDX",permalink:"/fr/claim"},next:{title:"Devenez validateur",permalink:"/fr/start_validating"}},u=[{value:"00 Interface de staking (d\xe9l\xe9gation)",id:"00-staking-ui",children:[]},{value:"01 Engager vos tokens HDX",id:"01-bond-hdx-tokens",children:[]},{value:"02 Nominer un validateur",id:"02-nominate-a-validator",children:[]},{value:"03 V\xe9rifier le statut de vos nominations",id:"03-check-the-status-of-your-nominations",children:[]},{value:"04 Adapter vos nominations",id:"04-adapter-vos-nominations",children:[]}],d={toc:u};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"En devenant un nominateur, vous stakez (d\xe9l\xe9guez) certains de vos tokens HDX pour aider \xe0 s\xe9curiser le r\xe9seau HydraDX et pour gagner des r\xe9compenses.  \xc0 l'inverse de faire fonctionner un node de validateur, le proc\xe9d\xe9 de nominer ne requiert pas de comp\xe9tences techniques avanc\xe9es, faisant ainsi de la nomination le choix recommand\xe9 pour quiconque ne souhaite pas devenir validateur."),Object(r.b)("p",null,"Au moment de nominer, les nominateurs fournissent leur stake (d\xe9l\xe9gation) \xe0 un validateur de leur choix. Ainsi, les nominateurs \xe9lisent l'ensemble actif de validateurs et re\xe7oivent des r\xe9compenses pour leur participation. La somme de r\xe9compenses que vous recevez en tant que nominateur d\xe9pend du pourcentage de la commission de r\xe9compense du validateur choisi - Plus la commission de r\xe9compense est grande, plus les r\xe9compenses que vous recevrez pour votre d\xe9l\xe9gation seront r\xe9duites. "),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'nominer est une forme de participation au processus de staking (d\xe9l\xe9gation) plus accessible, cependant cela comporte un certain niveau de risque. Si le validateur que vous avez nomin\xe9 se comporte de mani\xe8re non conforme (par exemple : ne parvient pas \xe0 maintenir le temps de fonctionnement requis), un "slashing" peut survenir qui peut causer \xe0 une perte involontaire partielle des fonds que vous avez d\xe9l\xe9gu\xe9. Nous recommandons fortement que vous fassiez vos recherches avant de nominez un validateur.\n'))),Object(r.b)("h2",{id:"00-staking-ui"},"00 Interface de staking (d\xe9l\xe9gation)"),Object(r.b)("p",null,"Pour acc\xe9der \xe0 l'interface de staking (d\xe9l\xe9gation), vous devez d'abord ouvrir Polkadot/apps, vous connecter \xe0 un de ses ",Object(r.b)("a",{parentName:"p",href:"/polkadotjs_apps_public"},"nodes publiques HydraDX RPC")," et assurez vous que vous pouvez voir votre ",Object(r.b)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc-01.snakenet.hydradx.io#/accounts"},"solde")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"\xcates vous toujours en possession de vos tokens xHDX que vous avez achet\xe9 pendant l'\xe9v\xe8nement de vente \"Balancer LBP\"? Vous devez d'abord ",Object(r.b)("a",{parentName:"p",href:"/claim"},"r\xe9cup\xe9rer vos HDX")," avant de continuer."))),Object(r.b)("p",null,"Apr\xe8s avoir v\xe9rifi\xe9 que vous voyez votre solde HDX, vous pouvez naviguer dans l'interface de Staking (d\xe9l\xe9gation): ",Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")),Object(r.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(r.b)("em",{parentName:"p"},"Staking")),Object(r.b)("p",null,"L'interface de Staking a les onglets de menu suivants:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Staking overview"),": ici, vous trouverez une liste de tous les validateurs actifs et quelques informations basiques sur chaque validateur, comme le montant de HDX d\xe9l\xe9gu\xe9s sur le node, le montant de d\xe9l\xe9gation du validateur lui-m\xeame, et le pourcentage de la comission de r\xe9compense. De plus, vous pouvez voir le nombre de points d'\xe8re gagn\xe9s par chaque validateur pendant l'\xe8re actuelle et le nombre du dernier bloc produit par le validateur."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actions sur le compte"),": Ici vous pouvez d\xe9l\xe9guer et nominer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Paiements"),": Ici, vous pouvez r\xe9clamer vos r\xe9compenses de d\xe9l\xe9gation."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Cibles"),": Ici, vous pouvez estimer vos gains. C'est un bon endroit pour commencer  lorsque vous cherchez un node validateur \xe0 nominer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"En attente"),": Ici, vous pouvez trouver  la liste d'attente des validateurs inactifs, avant d'\xeatre inclus dans l'ensemble de validateurs actifs. Un validateur va rester dans la file d'attente jusqu'\xe0 ce qu'il re\xe7oive un montant de HDX d\xe9l\xe9gu\xe9 suffisant pour entrer  dans l'ensemble des validateurs actifs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Statistiques du validateur"),": Ici, vous pouvez retrouver diff\xe9rentes informations, via l'adresse, d'un validateur un historique d\xe9taill\xe9 sur les points d'\xe8re gagn\xe9s, stake \xe9lu, r\xe9compenses, et \"slashes\" (punitions). Nous recommandons fortement que vous \xe9tudiiez cette information avant de faire confiance \xe0 un nominateur avec votre nomination.")),Object(r.b)("h2",{id:"01-bond-hdx-tokens"},"01 Engager vos tokens HDX"),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},'Les tokens HDX engag\xe9s sont en jeu pour garantir la s\xe9curit\xe9 du r\xe9seau. Les comportements non conformes du node validateur que vous avez nomin\xe9 peuvent \xeatre punis de "slashing" qui peut mener \xe0 une perte involontaire de vos fonds. Nous recommandons fortement que vous fassiez vos recherches quand vous choisissez des validateurs \xe0 nominer.'))),Object(r.b)("p",null,'Pour engager les tokens HDX, naviguez dans "Actions sur le compte" dans l\'interface de staking: ',Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")," > ",Object(r.b)("em",{parentName:"p"},"+ Stash")),Object(r.b)("p",null,"ou pour l'interface en fran\xe7ais: "),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Actions sur le compte")," > ",Object(r.b)("em",{parentName:"p"},"+ R\xe9serve")),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/bond-hdx-1.png")})),Object(r.b)("p",null,"Apr\xe8s avoir cliqu\xe9 sur le bouton ",Object(r.b)("em",{parentName:"p"},"R\xe9serve"),", vous devriez voir les pr\xe9f\xe9rences d'engagements avec quatre champs de saisie modifiables:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"stash account"),": Le compte contenant la plupart de vos tokens HDX. Les HDX vont \xeatre d\xe9l\xe9gu\xe9s depuis ce compte."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"controller account"),": un compte contenant une petite partie de HDX n\xe9cessaires pour couvrir les frais associ\xe9s \xe0 la mise en route et \xe0 l'arr\xeat du processus de nomination."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value bonded"),": La somme de HDX que vous engagez. N'engagez pas tous les HDX que vous poss\xe9dez - \xe0 la place, gardez-en un petit montant pour couvrir les frais de transactions qui surviendront plus tard."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"payment destination"),": Le compte sur lequel les r\xe9compenses de staking (d\xe9l\xe9gation) seront envoy\xe9es.")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"N'engagez pas tous vos tokens HDX disponibles. Gardez une petite r\xe9serve pour couvrir les frais des transactions. Si vous engagez tous les tokens HDX que vous poss\xe9dez, vous pourriez ne pas \xeatre capable de signer la transaction pour commencer le processus de nomination."))),Object(r.b)("p",null,"Apr\xe8s avoir ajust\xe9 vos pr\xe9f\xe9rences d'engagement, cliquez sur ",Object(r.b)("strong",{parentName:"p"},"Allouer")," et signer la transaction pour terminer le processus d'engagement."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Pour des raisons de s\xe9curit\xe9, il n'est pas recommand\xe9 d'avoir le m\xeame compte de R\xe9serve et de contr\xf4leur. Cependant, puisque les transferts sont d\xe9sactiv\xe9s sur Snakenet, Il n'est actuellement pas possible d'utiliser des comptes s\xe9par\xe9s. Nous recommandons fortement que vous passiez \xe0 des comptes de R\xe9serve et de Contr\xf4leur s\xe9par\xe9 d\xe8s que cela devient possible."))),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/bond-hdx-2.png")})),Object(r.b)("h2",{id:"02-nominate-a-validator"},"02 Nominer un validateur"),Object(r.b)("p",null,"Apr\xe8s avoir allou\xe9 vos HDX, vous pouvez nominez un validateur. Avant de proc\xe9der, Faites vos recherches pour d\xe9cider quel validateur vous aimeriez nomin\xe9 selon leur performance (historique). Pour ce faire, r\xe9f\xe9rez vous aux informations dans l'interface de staking ",Object(r.b)("a",{parentName:"p",href:"#00-staking-ui"},"mentionn\xe9e ci-dessus"),"."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Le Snakenet HydraDX a une ",Object(r.b)("strong",{parentName:"p"},"limite de 64 nominateurs  par node validateur"),". Quand vous choisissez un node \xe0 nominez, assurez vous que le validateur n'a pas atteint son quota maximum de nominations, autrement votre nomination va \xeatre invalide et vous ne recevrez pas de r\xe9compense pour votre stake (d\xe9l\xe9gation). Le nombre de nominations pour chaque validateur peut \xeatre trouv\xe9 dans l'onglet du menu \"En attente\" dans l'interface de staking."))),Object(r.b)("p",null,"Pour nominer un ou plusieurs validateurs, naviguer dans : ",Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")," > ",Object(r.b)("em",{parentName:"p"},"Nominate")," (Bouton \xe0 c\xf4t\xe9 de vos HDX engag\xe9s)"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Actions sur le compte")," > ",Object(r.b)("em",{parentName:"p"},"D\xe9signer")," (Bouton \xe0 c\xf4t\xe9 de vos HDX engag\xe9s)"),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-validator-1.png")})),Object(r.b)("p",null,"Apr\xe8s avoir cliqu\xe9 sur le bouton \"d\xe9signer\" vous devriez voir un popup appel\xe9 \"D\xe9signez des validateurs\". Ici vous pouvez s\xe9lectionner un ou plusieurs validateurs \xe0 nominer dans la liste des validateurs disponibles. Il est fortement recommand\xe9 de d\xe9signer plusieurs validateurs pour \xe9viter  d'\xeatre inactif si vous n'obtenez pas de place dans un validateur (par exemple : le validateur est surcharg\xe9 ou pas int\xe9gr\xe9 dans l'ensemble des validateurs actifs). vous pouvez d\xe9signer jusqu'\xe0 16 validateurs. Pour chaque \xe8re, seulement une de vos nominations peut \xeatre active, vous ne pouvez pas \xeatre choisi par plusieurs validateurs simultan\xe9ment. Votre stake va \xeatre automatiquement assign\xe9 \xe0 un des validateurs que vous avec s\xe9lectionn\xe9 de fa\xe7on \xe0 maximiser la d\xe9centralisation et les profits. Vous choisissez juste le montant de HDX engag\xe9s et les validateurs en qui vous avez confiance."),Object(r.b)("p",null,"Pour nominer les validateurs choisis, cliquez sur ",Object(r.b)("em",{parentName:"p"},"D\xe9signer")," et signez la transaction."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-validator-2.png")})),Object(r.b)("h2",{id:"03-check-the-status-of-your-nominations"},"03 V\xe9rifier le statut de vos nominations"),Object(r.b)("p",null,"Apr\xe8s  avoir compl\xe9t\xe9 le processus de nomination, vos nominations vont \xeatre inactives pour le restant de l'\xe8re en cours. Au d\xe9but de l'\xe8re suivante, vos nominations vont devenir actives, \xe0 condition qu'au moins un des nodes validateurs que vous avez nomin\xe9 soit inclus dans l'ensemble actif des validateurs et n'est pas surcharg\xe9, vous en excluant. Si tous vos validateurs restent en liste d'attente, vos nominations respectives vont aussi rester inactives et vous ne gagnerez pas de r\xe9compense pendant cette \xe8re."),Object(r.b)("p",null,"Pour v\xe9rifier le statut de vos nominations, naviguez \xe0: ",Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")),Object(r.b)("p",null,"ou pour l'interface en fran\xe7ais:"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Actions sur le compte")),Object(r.b)("p",null,'Vous pouvez voir vos nominations actives dans "en attente de nominations":'),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-validator-3.png")})),Object(r.b)("p",null,'Quand une nomination devient active, vous devriez la trouver dans la liste de "Nominations active".'),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-validator-4.png")})),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Assurez-vous de revisiter vos nominations de temps en temps. Il est possible que certains de vos validateurs changent leur pourcentage de commission ce qui impactera n\xe9gativement vos r\xe9compenses. En v\xe9rifiant le statut de vos nominations fr\xe9quemment, vous serez capable de r\xe9agir en mettant \xe0 jour la liste de vos validateurs d\xe9sign\xe9s."))),Object(r.b)("h2",{id:"04-adapter-vos-nominations"},"04 Adapter vos nominations"),Object(r.b)("p",null,"Si certains de vos validateurs deviennent surcharg\xe9s ou changent leur commission, vous pourriez avoir envie de changer vos nominations."),Object(r.b)("p",null,"Pour ce faire, ouvrez Polkadit/apps et naviguez dans: ",Object(r.b)("em",{parentName:"p"},"Network")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Account actions")),Object(r.b)("p",null,"ou pour l'interface en fran\xe7ais :"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"R\xe9seau")," > ",Object(r.b)("em",{parentName:"p"},"Staking")," > ",Object(r.b)("em",{parentName:"p"},"Actions sur le compte")),Object(r.b)("p",null,"Cliquez sur les trois points \xe0 c\xf4t\xe9 des d\xe9tails de votre compte et s\xe9lectionnez ",Object(r.b)("em",{parentName:"p"},"D\xe9finir les d\xe9sign\xe9s"),"."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-set-nominees.png")})),Object(r.b)("p",null,"Dans la fen\xeatre suivante, vous pouvez enlever des validateurs, et/ou en ajouter des nouveaux.\nAdapter vos nominations peut \xeatre fait \xe0 la vol\xe9e, Il n'y a pas besoin d'arr\xeater de nominer. Les changements seront appliqu\xe9s quand la nouvelle \xe8re commence (24h)."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{src:Object(s.a)("/nominator-guide/nominate-validator-2.png")})),Object(r.b)("p",null,"Merci de soutenir HydraDX en devenant un nominateur Snakenet! \ud83c\udf89"))}l.isMDXComponent=!0},90:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return v}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),d=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(t),m=a,v=l["".concat(s,".").concat(m)]||l[m]||p[m]||r;return t?i.a.createElement(v,o(o({ref:n},u),{},{components:t})):i.a.createElement(v,o({ref:n},u))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<r;u++)s[u]=t[u];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"a",(function(){return s}));var a=t(16),i=t(92);function r(){var e=Object(a.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,r=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,a){var r=void 0===a?{}:a,s=r.forcePrependBaseUrl,o=void 0!==s&&s,c=r.absolute,u=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if(Object(i.b)(t))return t;if(o)return n+t;var d=t.startsWith(n)?t:n+t.replace(/^\//,"");return u?e+d:d}(r,t,e,n)}}}function s(e,n){return void 0===n&&(n={}),(0,r().withBaseUrl)(e,n)}},92:function(e,n,t){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!a(e)}t.d(n,"b",(function(){return a})),t.d(n,"a",(function(){return i}))}}]);