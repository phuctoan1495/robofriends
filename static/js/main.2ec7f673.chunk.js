(this.webpackJsonprobofriend=this.webpackJsonprobofriend||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),i=(n(12),n(3)),l=n(4),s=n(6),h=n(5),u=function(e){return r.a.createElement("div",{className:"bg-light-green dib br3 ma2 pa3 grow"},r.a.createElement("img",{alt:"anh",src:"https://robohash.org/"+e.id+"?200x200"}),r.a.createElement("div",{className:"tc"},r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.email)))},m=function(e){var t=e.robots,n=t.map((function(e,n){return r.a.createElement(u,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}));return r.a.createElement("div",null,n)},d=function(e){var t=e.searchChange;return r.a.createElement("input",{type:"search",placeholder:"Search Robots",onChange:t})},f=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px",margin:"20px 0 0 0"}},e.children)},b=function(e){Object(s.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return this.state.robots.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(m,{robots:a}))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);c.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.2ec7f673.chunk.js.map