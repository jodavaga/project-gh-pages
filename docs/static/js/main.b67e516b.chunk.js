(this["webpackJsonpclase47-context-challenge"]=this["webpackJsonpclase47-context-challenge"]||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(8),i=c.n(s),o=(c(7),c(2)),a=c(10),l=c(0),j=r.a.createContext();function d(e){var t=e.children,c=Object(a.a)(e,["children"]);return Object(l.jsx)(j.Provider,Object(o.a)(Object(o.a)({},c),{},{children:t}))}var u=c(5);var b=function(){var e=Object(n.useState)(),t=Object(u.a)(e,2),c=t[0],r=t[1];Object(n.useEffect)((function(){s().then((function(e){!function(e){var t=e.map((function(e){return Object(o.a)(Object(o.a)({},e),{},{leido:!1})}));r(t)}(e)})).catch((function(e){return console.error(e)})),console.log("solo una vez")}),[]);var s=function(){return fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.error(e)}))};return{posts:c,setPosts:r}};var h=function(e){var t=e.title,c=e.readCondition,r=Object(n.useContext)(j),s=r.posts,i=r.setPosts,a=function(e){e.persist();var t=e.target,c=t.id,n=t.checked,r=s.map((function(e){return e.id===Number(c)?Object(o.a)(Object(o.a)({},e),{},{leido:n}):e}));i(r)};return Object(l.jsxs)("div",{className:"parent ".concat(c?"no-leidos":"leidos"),children:[Object(l.jsx)("div",{className:"context-title",children:t}),Object(l.jsx)("div",{className:"flex column libros",children:s&&s.filter((function(e){return e.leido===c})).map((function(e){return Object(l.jsxs)("div",{className:"libro",children:[Object(l.jsx)("span",{children:e.title}),Object(l.jsx)("input",{id:e.id,onChange:a,checked:e.leido,className:"check",type:"checkbox"})]},e.id)}))})]})},x=c(9);var O=function(){var e=Object(n.useContext)(j),t=e.libros,c=e.setLibros,r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1];return Object(l.jsxs)("div",{className:"flex column",children:[Object(l.jsx)("div",{className:"parents-title",children:"Agregar Libros"}),Object(l.jsx)("div",{className:"flex flex-center",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n={id:(parseInt(t[t.length-1].id)+1).toString(),nombre:i,leido:!1};c([].concat(Object(x.a)(t),[n])),o("")},children:[Object(l.jsx)("input",{type:"text",name:"libro",placeholder:"Nombre del libro",autoComplete:"off",value:i,onChange:function(e){return o(e.target.value)}}),Object(l.jsx)("button",{children:" Agregar "})]})})]})};var f=function(){return Object(l.jsx)("div",{className:"parents",children:Object(l.jsxs)("div",{className:"flex column",children:[Object(l.jsx)("div",{className:"parents-title",children:"MARCAP\xc1GINAS"}),Object(l.jsxs)("div",{className:"flex flex-center",children:[Object(l.jsx)(h,{title:"Libros por leer",readCondition:!1}),Object(l.jsx)(h,{title:"Libros leidos",readCondition:!0})]}),Object(l.jsx)(O,{})]})})};function p(){var e=b(),t=e.posts,c=e.setPosts;return Object(l.jsx)(d,{value:{posts:t,setPosts:c},children:Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(f,{})})})}i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},7:function(e,t,c){}},[[16,1,2]]]);
//# sourceMappingURL=main.b67e516b.chunk.js.map