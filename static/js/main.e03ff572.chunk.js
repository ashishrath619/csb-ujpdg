(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{13:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c(6),r=c.n(n),a=c(5),i=c(3),l=c(2),o=c.n(l),d=c(0),j=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(!0),l=Object(i.a)(r,2),j=l[0],b=l[1],h=Object(s.useState)(""),u=Object(i.a)(h,2),p=u[0],O=u[1],x=Object(s.useState)([]),f=Object(i.a)(x,2),m=f[0],v=f[1];console.log("view",m.address);var w=function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.t0=n,e.next=6,t.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(a.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:return c=e.sent,e.t0=v,e.next=6,c.json();case 6:e.t1=e.sent,(0,e.t0)(e.t1),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){w()}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{style:{display:"flex"},children:[Object(d.jsxs)("div",{style:{width:"70%",marginLeft:"20px"},children:[Object(d.jsx)("nav",{className:"navbar navbar-light bg-dark",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",style:{color:"white"},children:"Todos"}),Object(d.jsx)("form",{className:"d-flex",children:Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:" Search by Title","aria-label":"Search",value:p,onChange:function(e){O(e.target.value)}})})]})}),Object(d.jsxs)("table",{className:"table caption-top",style:{border:"1px solid black",width:"100%"},children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"col",children:"ToDo ID"}),Object(d.jsx)("th",{scope:"col",children:"Title"}),Object(d.jsx)("th",{scope:"col",children:"Status"}),Object(d.jsx)("th",{scope:"col",children:"Action"})]})}),Object(d.jsx)("tbody",{children:c.filter((function(e){return""===p||e.title.toLowerCase().includes(p.toLowerCase())?e:void 0})).map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{scope:"row",children:e.id}),Object(d.jsx)("td",{children:e.title}),Object(d.jsx)("td",{children:1==e.completed?"true":"false"}),Object(d.jsxs)("td",{children:[" ",Object(d.jsx)("button",{className:"btn btn-warning",style:{width:"90%",backgroundColor:"white"},onClick:function(){return t=e.id,void y(t);var t},children:"View User"})]})]})}))})]})]}),Object(d.jsx)("div",{children:j?Object(d.jsx)("p",{children:"Click any view botton"}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("p",{children:[" ID: ",m.id]}),Object(d.jsxs)("p",{children:[" Name: ",m.name]}),Object(d.jsxs)("p",{children:["UserName: ",m.username]}),Object(d.jsxs)("p",{children:["Email: ",m.email]}),Object(d.jsxs)("p",{children:["address: ",m.address.street]}),Object(d.jsxs)("p",{children:["city :",m.address.city]}),Object(d.jsxs)("p",{children:["zipcode :",m.address.zipcode]})]})})})," "]})})},b=document.getElementById("root");r.a.render(Object(d.jsx)(s.StrictMode,{children:Object(d.jsx)(j,{})}),b)}},[[13,1,2]]]);
//# sourceMappingURL=main.e03ff572.chunk.js.map