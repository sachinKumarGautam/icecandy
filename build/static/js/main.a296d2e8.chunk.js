(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),a=n.n(i),s=n(18),l=n.n(s),o=(n(25),n(11)),r=n(2),j=n(9),h=n(10),u=n(13),b=n(12),d=(n(26),"data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiMWE2MzUwN2U4YTc0ODJkZWI1NTc3MzE3ODA0MTFiNTQuanBnIjs=");console.log("Homepage image ",d);var p=[{innerTileImage:"data:image/jpeg;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiNDdkNjgyNDhjMjU4MGY0NDAyYWFmZGJhMmVkYWI0ZTUuanBnIjs=",smallTile:"data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiZDkyOTBlMWQ2MjVhM2Q1YjI5ZGJhMjI0OWNjYWFlY2EucG5nIjs=",hoverText:"Kit vs Kat",hoverColor:"rgb(99,202,58)"}],m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var c=arguments.length,i=new Array(c),a=0;a<c;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={showTile:!1,selectedTile:{},openPopup:!1},e.toggleTiles=function(){e.setState((function(e){return{showTile:!0}}),(function(){setTimeout((function(){window.scrollTo({top:window.innerHeight,left:0,behavior:"smooth"})}),100)}))},e.openTile=function(t){e.setState({selectedTile:t,openPopup:!0})},e.closePopup=function(){e.setState({openPopup:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedTile;return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"home",src:d,alt:"Homepage"}),Object(c.jsxs)("div",{className:"ctaContainer",children:[Object(c.jsx)("div",{className:"cta",onClick:this.toggleTiles,children:"WORK"}),Object(c.jsx)(o.b,{className:"cta",to:"/about",children:"ABOUT"})]})]}),this.state.showTile?Object(c.jsxs)(a.a.Fragment,{children:[Object(c.jsx)("div",{className:"tiles-container",children:Object(c.jsx)("div",{className:"tiles-grid-wrapper",children:p.map((function(t,n){return Object(c.jsxs)("div",{className:"tile",onClick:function(){return e.openTile(t)},children:[Object(c.jsx)("img",{src:"".concat(t.smallTile),alt:"tile",className:"tile-img"}),Object(c.jsx)("div",{className:"tile-hover-text",style:{backgroundColor:t.hoverColor},children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:t.hoverText},style:t.hoverTextColor?{color:t.hoverTextColor}:{}})})]},n)}))})}),this.state.openPopup?Object(c.jsx)("div",{className:"popup",children:Object(c.jsxs)("div",{className:"overlay",children:[Object(c.jsx)("div",{onClick:function(){return e.closePopup()},className:"close-btn",children:"X"}),Object(c.jsx)("img",{className:"tile-bg",src:"".concat(t.innerTileImage),alt:"tile-bg"})]})}):null]}):null]})}}]),n}(a.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:"This is about page"})}}]),n}(a.a.Component);var O=function(){return Object(c.jsx)(o.a,{children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",children:Object(c.jsx)(m,{})}),Object(c.jsx)(r.a,{exact:!0,path:"/about",children:Object(c.jsx)(g,{})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),x()}},[[35,1,2]]]);
//# sourceMappingURL=main.a296d2e8.chunk.js.map