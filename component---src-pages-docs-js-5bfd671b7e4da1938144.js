(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{155:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=(t(158),t(161)),c=(t(35),Object(n.createContext)({format:"react",setFormat:function(){}})),m=function(e){var a=e.code;return l.a.createElement("pre",null,a)},i=function(e){return e.replace(/(class=)/g,"className=")},s=function(e){var a=e.code,t=Object(n.useState)(!1),r=t[0],s=t[1],o=function(e){s(!0),setTimeout(function(){s(!1)},1e3),function(e){var a=document.createRange();a.selectNode(e.target),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),window.getSelection().removeAllRanges()}(e)};return l.a.createElement(c.Consumer,null,function(e){var t=e.format,n=e.setFormat;return l.a.createElement("div",null,l.a.createElement("button",{className:"small "+("html"===t?"primary":"color-grey"),onClick:function(){n("html")}},"HTML")," ",l.a.createElement("button",{className:"small "+("react"===t?"primary":"color-grey"),onClick:function(){n("react")}},"ReactJS"),l.a.createElement("div",{className:"codeexample background-white",onClick:o,onChange:function(){},style:{position:"relative",overflowX:"auto"}},l.a.createElement(m,{code:"html"===t?a:i(a)}),l.a.createElement("div",{style:{position:"absolute",top:10,right:20,fontSize:10,opacity:.5}},r?"Copied!":"Click to copy on clipboard")))})},o="<div class='text-small'>Lorem ipsum dolor</div>\n<div>Lorem ipsum dolor</div>\n<div class='text-medium'>Lorem ipsum dolor</div>\n<div class='text-big'>Lorem ipsum dolor</div>\n",u="<div class='color-primary'>Lorem ipsum dolor</div>\n<div class='color-danger'>Lorem ipsum dolor</div>\n<div class='color-info'>Lorem ipsum dolor</div>\n",d=function(){return l.a.createElement("section",null,l.a.createElement("h3",null,"Font sizing"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(s,{code:o})),l.a.createElement("div",{className:"column padding-left-1 padding-top-1"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:o}}))),l.a.createElement("h3",null,"Font color"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(s,{code:u})),l.a.createElement("div",{className:"column padding-left-1 padding-top-1"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}))))},E='<section class="hero background-primary">\n    <footer class="container">\n        Foot\n    </footer>\n    <div class="measure">\n        <p>\n        Mon paragraphe\n        </p>\n    </div>\n    <header>\n        Head\n    </header>\n</section>\n',f=function(){var e=Object(n.useState)(!1),a=e[0],t=e[1],r=function(){t(!a)};return l.a.createElement("section",null,l.a.createElement("h2",null,"Heros"),l.a.createElement("div",{className:"modal "+(a&&"active")},l.a.createElement("div",null,l.a.createElement("header",null,"Mon header"),l.a.createElement("div",{className:"background-white"},"Mon body"),l.a.createElement("footer",{className:"text-right"},l.a.createElement("button",{onClick:r,className:"danger"},"Fermer")))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(s,{code:E})),l.a.createElement("div",{className:"column padding-top-1"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:E}}))),l.a.createElement("h2",null,"Modals"),l.a.createElement("div",{class:"modal "+(a&&"active")},l.a.createElement("div",null,l.a.createElement("header",null,"Mon header"),l.a.createElement("div",{className:"background-white"},"Mon body"),l.a.createElement("footer",{className:"text-right"},l.a.createElement("button",{onClick:r,className:"danger"},"Fermer")))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(s,{code:"<div class='modal'>\n    <div>\n        <header>Mon header</header>\n        <div>Mon body</div>\n        <footer>Mon footer</footer>\n    </div>\n</div>\n"})),l.a.createElement("div",{className:"column padding-top-1",style:{display:"flex",justifyContent:"center",alignItems:"center"}},l.a.createElement("button",{className:"primary",onClick:r},"Click to test"))))},v=function(){var e=Object(n.useState)("1"),a=e[0],t=e[1],r=Object(n.useState)(""),c=r[0],m=r[1],i=Object(n.useState)("1"),o=i[0],u=i[1],d=Object(n.useState)(""),E=d[0],f=d[1];return l.a.createElement("section",null,l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column",style:{flex:1}},l.a.createElement("h3",{className:"margin-0"},"Margin management"),l.a.createElement("p",{className:"text-small"},"The unit used is the line-height."),l.a.createElement(s,{code:"<div class='margin"+c+"-"+a+"'>Hello world</div>"}),l.a.createElement("div",{className:"margin-top-0-5"},l.a.createElement("button",{className:"small "+(""===c&&"primary"),onClick:function(){m("")}},"Every margin"),l.a.createElement("button",{className:"small "+("-top"===c&&"primary"),onClick:function(){m("-top")}},"Top margin"),l.a.createElement("button",{className:"small "+("-right"===c&&"primary"),onClick:function(){m("-right")}},"Right margin"),l.a.createElement("button",{className:"small "+("-bottom"===c&&"primary"),onClick:function(){m("-bottom")}},"Bottom margin"),l.a.createElement("button",{className:"small "+("-left"===c&&"primary"),onClick:function(){m("-left")}},"Left margin")),l.a.createElement("div",null,l.a.createElement("button",{className:"small "+("0-5"===a&&"primary"),onClick:function(){t("0-5")}},"0.5"),l.a.createElement("button",{className:"small "+("1"===a&&"primary"),onClick:function(){t("1")}},"1"),l.a.createElement("button",{className:"small "+("2"===a&&"primary"),onClick:function(){t("2")}},"2"),l.a.createElement("button",{className:"small "+("3"===a&&"primary"),onClick:function(){t("3")}},"3"))),l.a.createElement("div",{className:"column",style:{flex:1}},l.a.createElement("div",{className:"background-primary",style:{display:"inline-block"},dangerouslySetInnerHTML:{__html:"<div class='background-dark margin"+c+"-"+a+"'>Hello world</div>"}}))),l.a.createElement("div",{className:"columns margin-top-3"},l.a.createElement("div",{className:"column",style:{flex:1}},l.a.createElement("h3",{className:"margin-0"},"Padding management"),l.a.createElement("p",{className:"text-small"},"The unit used is the line-height."),l.a.createElement(s,{code:"<div class='padding"+c+"-"+a+"'>Hello world</div>"}),l.a.createElement("div",{className:"margin-top-0-5"},l.a.createElement("button",{className:"small "+(""===E&&"primary"),onClick:function(){f("")}},"Every margin"),l.a.createElement("button",{className:"small "+("-top"===E&&"primary"),onClick:function(){f("-top")}},"Top margin"),l.a.createElement("button",{className:"small "+("-right"===E&&"primary"),onClick:function(){f("-right")}},"Right margin"),l.a.createElement("button",{className:"small "+("-bottom"===E&&"primary"),onClick:function(){f("-bottom")}},"Bottom margin"),l.a.createElement("button",{className:"small "+("-left"===E&&"primary"),onClick:function(){f("-left")}},"Left margin")),l.a.createElement("div",null,l.a.createElement("button",{className:"small "+("0-5"===o&&"primary"),onClick:function(){u("0-5")}},"0.5"),l.a.createElement("button",{className:"small "+("1"===o&&"primary"),onClick:function(){u("1")}},"1"),l.a.createElement("button",{className:"small "+("2"===o&&"primary"),onClick:function(){u("2")}},"2"),l.a.createElement("button",{className:"small "+("3"===o&&"primary"),onClick:function(){u("3")}},"3"))),l.a.createElement("div",{className:"column",style:{flex:1}},l.a.createElement("div",{style:{display:"inline-block"},dangerouslySetInnerHTML:{__html:"<div class='background-dark padding"+E+"-"+o+"'>Hello world</div>"}}))))},p=function(){var e=Object(n.useState)("medium"),a=e[0],t=(e[1],Object(n.useState)(" fullwidth")),r=t[0],c=(t[1],Object(n.useState)(" primary")),m=c[0],i=(c[1],Object(n.useState)(" rounded")),o=i[0],u=(i[1],"<input\n    value='mbote na yo'\n    class='"+a+r+m+o+"'\n    />\n");return l.a.createElement("section",null,l.a.createElement("h3",{className:"margin-0"},"Input"),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column"},l.a.createElement(s,{code:u})),l.a.createElement("div",{className:"column padding-left-1 padding-top-1"},l.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}))))},g=function(e){var a=e.children,t=e.onClick;return l.a.createElement("div",{onClick:t,className:"box text-center margin-1 hover-primary",style:{flex:1}},a)};a.default=function(){var e=Object(n.useState)(!1),a=e[0],t=(e[1],Object(n.useState)("text")),m=t[0],i=t[1],s=Object(n.useState)("html"),o=s[0],u=s[1];return l.a.createElement(r.a,null,l.a.createElement("div",{className:"modal "+(a&&"active")},l.a.createElement("div",{className:"background-white",style:{height:"90%",width:"90%"}},"Cheat Sheet")),l.a.createElement("div",{className:"container margin-top-1 margin-bottom-1"},l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},l.a.createElement(g,{onClick:function(){i("text")}},l.a.createElement("div",{className:"height-2"},l.a.createElement("i",{className:"fas fa-paragraph fa-2x"})),l.a.createElement("small",null,"Text")),l.a.createElement(g,{onClick:function(){i("display")}},l.a.createElement("div",{className:"height-2"},l.a.createElement("i",{className:"fas fa-th-large fa-2x"})),l.a.createElement("small",null,"Display")),l.a.createElement(g,{onClick:function(){i("forms")}},l.a.createElement("div",{className:"height-2"},l.a.createElement("i",{className:"fas fa-cog fa-2x"})),l.a.createElement("small",null,"Components")),l.a.createElement(g,{onClick:function(){i("helpers")}},l.a.createElement("div",{className:"height-2"},l.a.createElement("i",{className:"fas fa-tools fa-2x"})),l.a.createElement("small",null,"Helpers")),l.a.createElement(g,{onClick:function(){i("forms")}},l.a.createElement("div",{className:"height-2"},l.a.createElement("i",{className:"fas fa-bars fa-2x"})),l.a.createElement("small",null,"Forms"))),l.a.createElement("hr",null),l.a.createElement(c.Provider,{value:{format:o,setFormat:function(e){u(e)}}},"text"===m?l.a.createElement(d,null):"display"===m?l.a.createElement(f,null):"helpers"===m?l.a.createElement(v,null):l.a.createElement(p,null))))}},156:function(e,a,t){var n;e.exports=(n=t(159))&&n.default||n},157:function(e,a,t){"use strict";t.d(a,"b",function(){return o});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),m=t(33),i=t.n(m);t.d(a,"a",function(){return i.a});t(156);var s=l.a.createContext({}),o=function(e){return l.a.createElement(s.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},158:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(14),c=function(e){var a=e.open,t=void 0!==a&&a;return l.a.createElement("i",{className:"fas fa-caret-left margin-left-1",style:{transition:"transform 50ms",transform:t?"rotate(-90deg)":"",float:"right"}})},m=function(e){var a=e.title,t=e.children,r=Object(n.useState)(!1),m=r[0],i=r[1];return l.a.createElement("li",{className:"margin-bottom-1"},l.a.createElement("div",{onClick:function(){i(!m)},className:"cursor-pointer padding-left-1 padding-right-1",style:{background:"rgba(0,0,0,0.2)"}},a," ",l.a.createElement(c,{open:m})),m&&l.a.createElement("p",null,t))},i=function(){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"no-style"},l.a.createElement(m,{title:"Getting started"},"ici"),l.a.createElement(m,{title:"Good practices"},"ici"),l.a.createElement(m,{title:"Components"},l.a.createElement("ul",{className:"no-style"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/docs/components/navbar"},"Navbar")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/docs/components/hero"},"Hero")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/docs/components/progress"},"Progress")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/docs/components/notification"},"Notification")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/docs/components/utils"},"Utils")))),l.a.createElement(m,{title:" Variables"},"ici")))};a.a=function(e){var a=e.children;e.style,e.className;return l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column background-primary",style:{width:400,flex:"none",height:"100vh",overflowY:"auto"}},l.a.createElement("div",{className:"padding-1"},l.a.createElement(i,null))),l.a.createElement("div",{className:"column",style:{height:"100vh",overflowY:"auto"}},l.a.createElement("div",{className:"padding-1"},a)))}},159:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),m=t(55),i=t(2),s=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(m.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=s},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Kitoko - The typography based CSS framework"}}}}},161:function(e,a,t){"use strict";var n=t(160),l=t(0),r=t.n(l),c=t(4),m=t.n(c),i=t(157),s=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar background-primary"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement("div",{className:"navbar-start"},r.a.createElement("div",{className:"item"},r.a.createElement("small",null,r.a.createElement(i.a,{to:"/"},r.a.createElement("i",{className:"fas fa-flag"})," "," ","Home"))),r.a.createElement("div",{className:"item"},r.a.createElement("small",null,r.a.createElement(i.a,{to:"/docs"},r.a.createElement("i",{className:"fas fa-book"})," "," ","Docs")))),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"item"},r.a.createElement("a",{href:"https://github.com/tonyjahim/kitokocss",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fab fa-github fa-2x"})))))))};s.propTypes={siteTitle:m.a.string},s.defaultProps={siteTitle:""};var o=s,u=(t(164),function(e){var a=e.children,t=e.className;return r.a.createElement(i.b,{query:"755544856",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o,{siteTitle:e.site.siteMetadata.title}),r.a.createElement("div",{className:t},r.a.createElement("main",null,a),r.a.createElement("footer",{className:"text-center"},r.a.createElement("small",null,"Built with ",r.a.createElement("i",{className:"fas fa-heart"})," by ",r.a.createElement("a",{href:"https://anthony.jeamme.fr"},"Anthony JEAMME")))))},data:n})});u.propTypes={children:m.a.node.isRequired};a.a=u}}]);
//# sourceMappingURL=component---src-pages-docs-js-5bfd671b7e4da1938144.js.map