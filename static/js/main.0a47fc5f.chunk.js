(this.webpackJsonpmonster_rolodex=this.webpackJsonpmonster_rolodex||[]).push([[0],[,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),s=t(1),c=t.n(s),o=t(3),r=t.n(o),a=(t(13),t(4)),h=t(5),l=t(7),u=t(6),d=(t(14),function(e){return Object(i.jsxs)("div",{className:"card-container",children:[Object(i.jsx)("img",{alt:"minions",src:"https://robohash.org/".concat(e.minions.id,"?set=set2&size=180x180")}),Object(i.jsx)("h2",{children:e.minions.name}),Object(i.jsxs)("p",{children:[" ",e.minions.email,"  "]})]})}),j=(t(15),function(e){return Object(i.jsx)("div",{className:"card-list",children:e.minions.map((function(e){return Object(i.jsx)(d,{minions:e},e.id)}))})}),m=(t(16),function(e){var n=e.placeholder,t=e.handleChange;return Object(i.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=(t(17),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(a.a)(this,t),(e=n.call(this)).state={minions:[],searchField:""},e}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({minions:n})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.minions,t=e.searchField,s=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("h1",{children:"Monsters Rolodex"}),Object(i.jsx)(m,{placeholder:"search minions",handleChange:this.handleChange}),Object(i.jsx)(j,{minions:s})]})}}]),t}(s.Component)),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,i=n.getFID,s=n.getFCP,c=n.getLCP,o=n.getTTFB;t(e),i(e),s(e),c(e),o(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.0a47fc5f.chunk.js.map