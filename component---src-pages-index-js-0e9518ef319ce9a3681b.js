(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(162),l=a(163),c=a(177),o=a.n(c);t.default=function(){var e=Object(r.useState)(!1),t=e[0];e[1];return n.a.createElement(s.a,{className:""+(t&&"grid")},n.a.createElement(l.a,{title:"Kitoko CSS",keywords:["css","framework","typography"]}),n.a.createElement("article",{className:"text-center"},n.a.createElement("div",{className:"hero large"},n.a.createElement("div",{className:"hero-body"},n.a.createElement("figure",{className:"height-4 padding-1"},n.a.createElement(o.a,{style:{height:"100%"}})),n.a.createElement("h1",{className:"margin-top-0 title color-info text-center"},"KITOKO"),n.a.createElement("p",{className:"subtitle"},"The Typography Based CSS Framework"),n.a.createElement("code",{className:"npm margin-auto",style:{width:250}},"npm install --save kitoko")))),n.a.createElement("div",{className:"hero small background-primary"},n.a.createElement("div",{className:"hero-body text-center"},n.a.createElement("article",{className:"measure margin-auto"},n.a.createElement("h2",null,"Everything is simpler"),n.a.createElement("p",null,"95% of the web is text. It's the reason why we have to care about how to present text properly."),n.a.createElement("p",null,"First set your typography parameters (typeface, line height, line width and font size) and then build your amazing website with proportions based on these parameters.")))),n.a.createElement("div",{className:"hero small"},n.a.createElement("div",{className:"hero-body text-center"},n.a.createElement("article",{className:"measure margin-auto"},n.a.createElement("h2",null,"Everything you need in one framework"),n.a.createElement("p",null,"There is plenty of amazing other CSS Frameworks out there. But with Kitoko you don't need them. Everything you need to build a wonderful website is included.")))),n.a.createElement("div",{className:"hero small background-primary"},n.a.createElement("div",{className:"hero-body text-center"},n.a.createElement("article",{className:"measure margin-auto"},n.a.createElement("h2",null,"You don't need to be an expert in Typography to use KitokoCSS"),n.a.createElement("p",null,"Typography exists since centuries and good practices emerged. KitokoCSS helps you to implements these good practices. You only need to know some basics principles to produce a good typographed website"),n.a.createElement("p",null,"If you are more advanced in typography, KitokoCSS will also help you with advanced parameters.")))),n.a.createElement("section",{className:"hero small background-info"},n.a.createElement("div",{className:"hero-body text-center"},n.a.createElement("article",{className:"measure margin-auto"},n.a.createElement("h2",null,"What is included ?"),n.a.createElement("p",null,"Heros, columns, forms, box, progressbar, table, tags and so on !")))),n.a.createElement("div",{className:"hero small"},n.a.createElement("div",{className:"hero-body text-center"},n.a.createElement("section",{className:"measure margin-auto"},n.a.createElement("h2",{className:"text-center"},"Just try in a minute !"),n.a.createElement("code",{className:"npm margin-auto",style:{width:250}},"npm install --save kitoko")))))}},156:function(e,t,a){var r;e.exports=(r=a(159))&&r.default||r},157:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var r=a(0),n=a.n(r),s=a(4),l=a.n(s),c=a(33),o=a.n(c);a.d(t,"a",function(){return o.a});a(156);var i=n.a.createContext({}),m=function(e){return n.a.createElement(i.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},159:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),s=a(4),l=a.n(s),c=a(55),o=a(2),i=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};i.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=i},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitoko - The typography based CSS framework"}}}}},162:function(e,t,a){"use strict";var r=a(160),n=a(0),s=a.n(n),l=a(4),c=a.n(l),o=a(157),i=function(){return s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar background-primary"},s.a.createElement("div",{className:"navbar-container"},s.a.createElement("div",{className:"navbar-start"},s.a.createElement(o.a,{to:"/"},s.a.createElement("div",{className:"item"},s.a.createElement("small",null,s.a.createElement("i",{className:"fas fa-flag"})," "," ","Home"))),s.a.createElement(o.a,{to:"/docs"},s.a.createElement("div",{className:"item"},s.a.createElement("small",null,s.a.createElement("i",{className:"fas fa-book"})," "," ","Docs")))),s.a.createElement("div",{className:"navbar-end"},s.a.createElement("a",{href:"https://github.com/tonyjahim/kitokocss",rel:"noopener noreferrer",target:"_blank"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"fab fa-github fa-2x"})))))))};i.propTypes={siteTitle:c.a.string},i.defaultProps={siteTitle:""};var m=i,d=(a(165),function(e){var t=e.children,a=e.className;return s.a.createElement(o.b,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{className:a},s.a.createElement("main",null,t),s.a.createElement("footer",{className:"text-center"},s.a.createElement("small",null,"Built with ",s.a.createElement("i",{className:"fas fa-heart"})," by ",s.a.createElement("a",{href:"https://anthony.jeamme.fr"},"Anthony JEAMME")))))},data:r})});d.propTypes={children:c.a.node.isRequired};t.a=d},163:function(e,t,a){"use strict";var r=a(164),n=a(0),s=a.n(n),l=a(4),c=a.n(l),o=a(166),i=a.n(o);function m(e){var t=e.description,a=e.lang,n=e.meta,l=e.keywords,c=e.title,o=r.data.site,m=t||o.siteMetadata.description;return s.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(n)})}m.defaultProps={lang:"en",meta:[],keywords:[],description:""},m.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=m},164:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitoko - The typography based CSS framework",description:"Kitoko - The typography based CSS framework"}}}}},177:function(e,t,a){var r=a(0);function n(e){return r.createElement("svg",e,[r.createElement("defs",{key:0},[r.createElement("style",{key:0},".cls-1{fill:url(#Dégradé_sans_nom_6);}.cls-2{fill:#4b5e63;}.cls-3{fill:#374c52;}.cls-4{fill:#243b41;}"),r.createElement("linearGradient",{id:"Dégradé_sans_nom_6",x1:"282.84",y1:"3.18",x2:"282.84",y2:"362.78",gradientTransform:"translate(202.07 -152.03) rotate(45) scale(1.02)",gradientUnits:"userSpaceOnUse",key:1},[r.createElement("stop",{offset:"0",stopColor:"#ffbf5e",key:0}),r.createElement("stop",{offset:"1",stopColor:"#ffc670",key:1})])]),r.createElement("title",{key:1},"logo_Fichier 5"),r.createElement("g",{id:"Calque_2","data-name":"Calque 2",key:2},r.createElement("g",{id:"Calque_1-2","data-name":"Calque 1"},[r.createElement("path",{className:"cls-1",d:"M130,21.87H335.65a100,100,0,0,1,100,100V327.49a0,0,0,0,1,0,0H130a0,0,0,0,1,0,0V21.87A0,0,0,0,1,130,21.87Z",transform:"translate(-40.68 251.16) rotate(-45)",key:0}),r.createElement("rect",{className:"cls-2",x:"19.58",y:"471.54",width:"107.71",height:"100",transform:"translate(-347.27 204.68) rotate(-45)",key:1}),r.createElement("rect",{className:"cls-2",x:"443.08",y:"469.7",width:"100",height:"105.35",transform:"translate(-224.95 501.66) rotate(-45)",key:2}),r.createElement("rect",{className:"cls-3",x:"90.78",y:"402.02",width:"104.35",height:"100",transform:"translate(-277.75 233.48) rotate(-45)",key:3}),r.createElement("rect",{className:"cls-3",x:"372.73",y:"399.84",width:"100",height:"104.35",transform:"translate(-195.81 431.31) rotate(-45)",key:4}),r.createElement("rect",{className:"cls-4",x:"291.09",y:"328.84",width:"132.94",height:"100",transform:"translate(-163.15 363.79) rotate(-45)",key:5}),r.createElement("rect",{className:"cls-4",x:"162.63",y:"324.65",width:"100",height:"117.38",transform:"translate(-208.78 262.63) rotate(-45)",key:6}),r.createElement("rect",{className:"cls-3",x:"232.84",y:"403.55",width:"100",height:"100",transform:"translate(-237.87 332.84) rotate(-45)",key:7}),r.createElement("rect",{className:"cls-3",x:"89.45",y:"257.38",width:"100",height:"105.57",transform:"translate(-178.47 189.45) rotate(-45)",key:8}),r.createElement("rect",{className:"cls-3",x:"373.38",y:"260",width:"106.04",height:"100",transform:"translate(-94.31 392.31) rotate(-45)",key:9}),r.createElement("rect",{className:"cls-2",x:"444.97",y:"191.42",width:"100",height:"100",transform:"translate(-25.74 420.71) rotate(-45)",key:10}),r.createElement("rect",{className:"cls-2",x:"20.71",y:"191.42",width:"100",height:"100",transform:"translate(-150 120.71) rotate(-45)",key:11})]))])}n.defaultProps={viewBox:"0 0 565.69 594.97"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-index-js-0e9518ef319ce9a3681b.js.map