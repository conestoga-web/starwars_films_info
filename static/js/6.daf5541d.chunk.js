(this.webpackJsonpstar_wars_explorer=this.webpackJsonpstar_wars_explorer||[]).push([[6],{133:function(e,t,n){"use strict";var a=n(1),r=n(84),i=n(0),o=(n(17),n(85)),s=n(86),c=n(92),l=i.forwardRef((function(e,t){var n=e.classes,s=e.className,l=e.color,d=void 0===l?"default":l,u=e.component,p=void 0===u?"li":u,j=e.disableGutters,b=void 0!==j&&j,m=e.disableSticky,h=void 0!==m&&m,f=e.inset,y=void 0!==f&&f,x=Object(r.a)(e,["classes","className","color","component","disableGutters","disableSticky","inset"]);return i.createElement(p,Object(a.a)({className:Object(o.a)(n.root,s,"default"!==d&&n["color".concat(Object(c.a)(d))],y&&n.inset,!h&&n.sticky,!b&&n.gutters),ref:t},x))}));t.a=Object(s.a)((function(e){return{root:{boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:e.palette.text.secondary,fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(14)},colorPrimary:{color:e.palette.primary.main},colorInherit:{color:"inherit"},gutters:{paddingLeft:16,paddingRight:16},inset:{paddingLeft:72},sticky:{position:"sticky",top:0,zIndex:1,backgroundColor:"inherit"}}}),{name:"MuiListSubheader"})(l)},134:function(e,t,n){"use strict";var a=n(1),r=n(84),i=n(0),o=(n(17),n(85)),s=n(86),c=n(176),l=n(105),d=i.forwardRef((function(e,t){var n=e.children,s=e.classes,d=e.className,u=e.disableTypography,p=void 0!==u&&u,j=e.inset,b=void 0!==j&&j,m=e.primary,h=e.primaryTypographyProps,f=e.secondary,y=e.secondaryTypographyProps,x=Object(r.a)(e,["children","classes","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"]),O=i.useContext(l.a).dense,g=null!=m?m:n;null==g||g.type===c.a||p||(g=i.createElement(c.a,Object(a.a)({variant:O?"body2":"body1",className:s.primary,component:"span",display:"block"},h),g));var v=f;return null==v||v.type===c.a||p||(v=i.createElement(c.a,Object(a.a)({variant:"body2",className:s.secondary,color:"textSecondary",display:"block"},y),v)),i.createElement("div",Object(a.a)({className:Object(o.a)(s.root,d,O&&s.dense,b&&s.inset,g&&v&&s.multiline),ref:t},x),g,v)}));t.a=Object(s.a)({root:{flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},multiline:{marginTop:6,marginBottom:6},dense:{},inset:{paddingLeft:56},primary:{},secondary:{}},{name:"MuiListItemText"})(d)},143:function(e,t,n){"use strict";var a=n(109),r=n(110);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),o=(0,a(n(111)).default)(i.createElement("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star");t.default=o},183:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),s=n(18),c=n(34),l=n(2),d=n(164),u=n(172),p=n(174),j=n(134),b=n(133),m=n(143),h=n.n(m),f=n(5),y=Object(d.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,position:"relative",overflow:"auto",maxHeight:600},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0}}}));function x(e){return Object(f.jsx)(p.a,Object(l.a)({button:!0,component:"a"},e))}var O=function(e){var t=e.planetList,n=e.loadingPlanetList,a=y();return Object(f.jsxs)("section",{children:[Object(f.jsx)("br",{}),n&&"Loading...",!n&&t&&Object(f.jsx)(u.a,{className:a.root,subheader:Object(f.jsx)("li",{}),children:t.map((function(e,t){return Object(f.jsx)("li",{className:a.listSection,children:Object(f.jsx)("ul",{className:a.ul,children:Object(f.jsx)(b.a,{children:Object(f.jsxs)(x,{href:"/planet/".concat(t+1),children:[Object(f.jsx)(h.a,{style:{marginRight:"0.5em"}}),Object(f.jsx)(j.a,{primary:e.name})]})})})},"section-".concat(t))}))})]})},g=n(45),v=r.a.useEffect,k=Object(c.b)((function(e){var t=e.planetList,n=e.loading;return{planetList:t.planetList,loadingPlanetList:n["planetList/GET_PLANETS"]}}),{getPlanets:g.b})((function(e){var t=e.getPlanets,n=e.planetList,a=e.loadingPlanetList;return v((function(){(function(){var e=Object(s.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(f.jsx)(O,{planetList:n,loadingPlanetList:a})})),L=(n(90),n(91));t.default=function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("header",{children:Object(f.jsx)(L.a,{title:"Planets"})}),Object(f.jsx)("section",{className:"container",children:Object(f.jsx)(k,{})})]})}},90:function(e,t,n){},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(96),r=n(0),i=n.n(r),o=n(164),s=n(167),c=n(170),l=n(176),d=n(171),u=n(95),p=n.n(u),j=n(178),b=n(173),m=n(175),h=n(5),f=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function y(e){var t=e.title,n=f(),r=i.a.useState(null),o=Object(a.a)(r,2),u=o[0],y=o[1],x=function(){y(null)};return Object(h.jsx)("div",{className:n.root,children:Object(h.jsx)(s.a,{position:"static",children:Object(h.jsxs)(c.a,{children:[Object(h.jsx)(d.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"menu","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},children:Object(h.jsx)(p.a,{})}),Object(h.jsxs)(j.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:x,children:[Object(h.jsx)(b.a,{onClick:x,children:Object(h.jsx)(m.a,{href:"/starwars_films_info/",underline:"none",children:"Home"})}),Object(h.jsx)(b.a,{onClick:x,children:Object(h.jsx)(m.a,{href:"/starwars_films_info/people",underline:"none",children:"People"})}),Object(h.jsx)(b.a,{onClick:x,children:Object(h.jsx)(m.a,{href:"/starwars_films_info/movies",underline:"none",children:"Movies"})}),Object(h.jsx)(b.a,{onClick:x,children:Object(h.jsx)(m.a,{href:"/starwars_films_info/planets",underline:"none",children:"Planets"})})]}),Object(h.jsx)(l.a,{variant:"h6",className:n.title,children:t})]})})})}}}]);
//# sourceMappingURL=6.daf5541d.chunk.js.map