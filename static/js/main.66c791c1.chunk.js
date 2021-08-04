(this["webpackJsonpawesome-lists"]=this["webpackJsonpawesome-lists"]||[]).push([[0],{41:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},65:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),o=n(16),i=n.n(o),a=n(13),r=n(6),j=n(5),l=(n(41),n(0));var b=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=9").then((function(e){return e.json()})).then((function(e){return s(e.results)})).catch((function(){return console.log("Request failed")}))}),[]),Object(l.jsx)("div",{className:"PokemonList",children:n.map((function(e,t){var n=e.name;return Object(l.jsxs)("div",{className:"Pokemon",children:[Object(l.jsx)("img",{alt:n,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(n,".png"),width:150}),Object(l.jsx)("div",{className:"PokemonName",children:n})]},t)}))})},d=n(7),h=n.n(d),u=n(15),m=n.n(u);n(61);var O=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(0),i=Object(j.a)(o,2),a=i[0],r=i[1],b=Object(c.useState)([]),d=Object(j.a)(b,2),u=d[0],O=d[1],p=Object(c.useState)(""),x=Object(j.a)(p,2),f=x[0],v=x[1];Object(c.useEffect)((function(){m.a.get("https://pokeapi.co/api/v2/type").then((function(e){return e.data.results})).then((function(e){var t=e.filter((function(e){var t=e.name;return"shadow"!==t&&"unknown"!==t})).map((function(e){var t=e.url;return m.a.get(t).then((function(e){return e.data}))}));Promise.all(t).then((function(e){return O(e)}))})).catch((function(e){console.log("Request failed")}))}),[]),Object(c.useEffect)((function(){m.a.get("https://pokeapi.co/api/v2/pokemon?limit=721").then((function(e){return s(e.data.results)})).catch((function(e){console.log("Request failed")}))}),[]);var g=function(e){return e.slice(a,a+9)};return Object(l.jsxs)("div",{className:"PokemonByTypeList",children:[Object(l.jsx)("div",{className:"TypesContainer",children:u.map((function(e,t){var n=e.name;return Object(l.jsx)("span",{className:h()("TypeContainer","TypeContainer--".concat(n),f===n?"active":""),onClick:function(){return e=n,r(0),void v(e);var e},children:Object(l.jsx)("span",{className:"TypeName",children:n})},n)}))}),Object(l.jsx)("div",{className:"PokemonWrapper",children:function(){if(!f)return g(n);var e=u.find((function(e){return e.name===f})).pokemon.map((function(e){return e.pokemon.name})),t=n.filter((function(t){var n=t.name;return e.includes(n)}));return g(t)}().map((function(e,t){var n=e.name;return Object(l.jsxs)("div",{className:"Pokemon",children:[Object(l.jsx)("img",{alt:n,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(n,".png"),width:120}),Object(l.jsx)("div",{className:"PokemonName",children:n})]},t)}))}),Object(l.jsxs)("div",{className:"Pagination",children:[Object(l.jsx)("button",{disabled:0===a,onClick:function(){r(a-9)},children:"Prev"}),Object(l.jsx)("button",{onClick:function(){r(a+9)},className:"next",children:"Next"}),Object(l.jsx)("button",{onClick:function(){r(0),v("")},className:"next",children:"Reset"})]})]})};var p=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){m.a.get("https://pokeapi.co/api/v2/pokemon?limit=9").then((function(e){console.log(e),s(e.data.results)})).catch((function(e){console.log("Request failed")}))}),[]),n};n(62);var x=function(){var e=p();return Object(l.jsx)("div",{className:"PokemonAxiosList",children:e.map((function(e,t){var n=e.name;return Object(l.jsxs)("div",{className:"Pokemon",children:[Object(l.jsx)("img",{alt:n,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(n,".png"),width:150}),Object(l.jsx)("div",{className:"PokemonName",children:n})]},t)}))})};n(63);var f=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(0),i=Object(j.a)(o,2),a=i[0],r=i[1];return Object(c.useEffect)((function(){m.a.get("https://pokeapi.co/api/v2/pokemon?limit=9&offset=".concat(a)).then((function(e){console.log(e),s(e.data.results)})).catch((function(e){console.log("Request failed")}))}),[a]),Object(l.jsxs)("div",{className:"PokemonPagList",children:[Object(l.jsx)("div",{className:"PokemonWrapper",children:n.map((function(e,t){var n=e.name;return Object(l.jsxs)("div",{className:"Pokemon",children:[Object(l.jsx)("img",{alt:n,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(n,".png"),width:150}),Object(l.jsx)("div",{className:"PokemonName",children:n})]},t)}))}),Object(l.jsxs)("div",{className:"Pagination",children:[Object(l.jsx)("button",{disabled:0===a,onClick:function(){r(a-9)},children:"Prev"}),Object(l.jsx)("button",{onClick:function(){r(a+9)},className:"next",children:"Next"})]})]})},v=n(22),g=n(88),k=n(84),N=n(85),C=n(86),S=n(87);n(64),n(65);var P=function(){var e,t=Object(c.useState)([]),n=Object(j.a)(t,2),s=n[0],o=n[1],i=Object(c.useState)(!0),a=Object(j.a)(i,2),r=a[0],b=a[1],d=Object(c.useState)(!1),h=Object(j.a)(d,2),u=h[0],m=h[1],O=Object(c.useState)({}),p=Object(j.a)(O,2),x=p[0],f=p[1];Object(c.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=151").then((function(e){return e.json()})).then((function(e){b(!1),o(e.results)})).catch((function(){return console.log("Request failed")}))}),[]);var P=function(){return m(!u)};return Object(l.jsxs)("div",{className:"PokemonModalList",children:[r?"loading...":s.map((function(e,t){var n=e.name;return Object(l.jsxs)("div",{onClick:function(){return e={name:n,id:t+1},void fetch("https://pokeapi.co/api/v2/pokemon/".concat(e.id)).then((function(e){return e.json()})).then((function(t){f(Object(v.a)(Object(v.a)({},e),{},{abilities:t.abilities})),P()})).catch((function(){return console.log("Request failed")}));var e},className:"Pokemon",children:[Object(l.jsx)("img",{alt:n,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(n,".png"),width:"150"}),Object(l.jsx)("div",{className:"PokemonName",children:n})]},t)})),Object(l.jsxs)(g.a,{isOpen:u,toggle:P,children:[Object(l.jsx)(k.a,{toggle:P,children:x.name}),Object(l.jsxs)(N.a,{children:[Object(l.jsx)("img",{alt:x.name,src:"https://img.pokemondb.net/sprites/x-y/normal/".concat(x.name,".png"),width:"150"}),Object(l.jsx)("h3",{children:"abilities"}),null===(e=x.abilities)||void 0===e?void 0:e.map((function(e){var t=e.ability;return Object(l.jsx)("div",{children:t.name})}))]}),Object(l.jsx)(C.a,{children:Object(l.jsx)(S.a,{className:"PokemonModalCancelButton",color:"secondary",onClick:P,children:"Cancel"})})]})]})};var y=function(e){var t=e.item;return Object(l.jsx)("div",{className:"Composer",children:Object(l.jsxs)("div",{className:"Composer-inner",children:[Object(l.jsx)("div",{className:"Composer-front",children:Object(l.jsx)("img",{src:t.portrait,alt:t.complete_name})}),Object(l.jsxs)("div",{className:"Composer-back",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Composers Name:"})," ",t.complete_name]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Epoch:"})," ",t.epoch]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Birth:"})," ",t.birth]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Death:"})," ",t.death]})]})]})]})})};var w=function(e){var t=e.items;return Object(l.jsx)("div",{className:"ComposersGrid",children:t.map((function(e){return Object(l.jsx)(y,{item:e},e.id)}))})},E="https://api.openopus.org/composer/list/";var B=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],o=function(e){var t=e?"".concat(E,"/search/").concat(e,".json"):"".concat(E,"pop.json");s(null),fetch(t).then((function(e){if(!e.ok)throw new Error("Oh noo");return e.json()})).then((function(e){return s(e.composers||[])})).catch((function(e){return console.log(e.message)}))};return Object(c.useEffect)(o,[]),[n,o]};n(75);function L(){var e=B(),t=Object(j.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(""),i=Object(j.a)(o,2),a=i[0],r=i[1];return Object(l.jsxs)("div",{className:"ComposersList",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Hello Composers"})}),Object(l.jsxs)("div",{className:"SearchActions",children:[Object(l.jsx)("input",{onChange:function(e){return r(e.target.value)},className:"SearchInput",name:"search",placeholder:"Search composers..."}),Object(l.jsx)("button",{disabled:a.length<4,onClick:function(){return s(a)},className:"SearchButton",children:"Search"}),Object(l.jsx)("button",{onClick:function(){return s()},className:"SearchButton",children:"Give all"})]}),null===n?Object(l.jsx)("div",{children:"is loading"}):n.length?Object(l.jsx)(w,{items:n}):Object(l.jsx)("div",{children:"no result"})]})}n(76);var R=function(e){var t=e.item;return Object(l.jsx)("div",{className:"Composer",children:Object(l.jsxs)("div",{className:"Composer-inner",children:[Object(l.jsx)("div",{className:"Composer-front",children:Object(l.jsx)("img",{src:t.portrait,alt:t.complete_name})}),Object(l.jsxs)("div",{className:"Composer-back",children:[Object(l.jsx)("h1",{children:t.name}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Composers Name:"})," ",t.complete_name]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Epoch:"})," ",t.epoch]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Birth:"})," ",t.birth]}),Object(l.jsxs)("li",{children:[Object(l.jsx)("strong",{children:"Death:"})," ",t.death]})]})]})]})})};var A=function(e){var t=e.items;return Object(l.jsx)("div",{className:"ComposersGrid",children:t.map((function(e){return Object(l.jsx)(R,{item:e},e.id)}))})},q="https://api.openopus.org/composer/list/";var T=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],o=Object(c.useState)(!0),i=Object(j.a)(o,2),a=i[0],r=i[1],l=Object(c.useState)(!1),b=Object(j.a)(l,2),d=b[0],h=b[1],u=function(e){var t=e?"".concat(q,"/search/").concat(e,".json"):"".concat(q,"pop.json");r(!0),h(!1),fetch(t).then((function(e){if(!e.ok)throw new Error("Oh noo");return r(!1),e.json()})).then((function(e){return s(e.composers||[])})).catch((function(e){return h(!0)}))};return Object(c.useEffect)(u,[]),[n,u,a,d]};function D(){var e=T(),t=Object(j.a)(e,4),n=t[0],s=t[1],o=t[2],i=t[3],a=Object(c.useState)(""),r=Object(j.a)(a,2),b=r[0],d=r[1];return Object(l.jsxs)("div",{className:"ComposersListFlag",children:[Object(l.jsx)("div",{className:"title",children:Object(l.jsx)("h1",{children:"Hello Composers"})}),Object(l.jsxs)("div",{className:"SearchActions",children:[Object(l.jsx)("input",{onChange:function(e){return d(e.target.value)},className:"SearchInput",name:"search",placeholder:"Search composers..."}),Object(l.jsx)("button",{disabled:b.length<4,onClick:function(){return s(b)},className:"SearchButton",children:"Search"}),Object(l.jsx)("button",{onClick:function(){return s()},className:"SearchButton",children:"Give all"})]}),i?Object(l.jsx)("div",{children:"something went wrong :("}):o?Object(l.jsx)("div",{children:"is loading"}):n.length?Object(l.jsx)(A,{items:n}):Object(l.jsx)("div",{children:"no result"})]})}n(77);var F=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{path:"/pokemon",children:Object(l.jsx)(b,{})}),Object(l.jsx)(r.a,{path:"/pokemon-axios",children:Object(l.jsx)(x,{})}),Object(l.jsx)(r.a,{path:"/pokemon-pag",children:Object(l.jsx)(f,{})}),Object(l.jsx)(r.a,{path:"/pokemon-modal",children:Object(l.jsx)(P,{})}),Object(l.jsx)(r.a,{path:"/pokemon-by-type",children:Object(l.jsx)(O,{})}),Object(l.jsx)(r.a,{path:"/decomposing-composers",children:Object(l.jsx)(L,{})}),Object(l.jsx)(r.a,{path:"/decomposing-composers-loading",children:Object(l.jsx)(D,{})}),Object(l.jsx)(r.a,{path:"/",children:Object(l.jsxs)("header",{className:"App-header",children:[Object(l.jsx)("h1",{children:"Awesome lists!"}),Object(l.jsxs)("nav",{children:[Object(l.jsx)(a.b,{to:"/pokemon",children:"Pokemon"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/pokemon-axios",children:"Pokemon (axios and custom hook)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/pokemon-pag",children:"Pokemon (axios and pagination)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/pokemon-modal",children:"Pokemon (with bootstrap modal)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/pokemon-by-type",children:"Pokemon (filter by type)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/decomposing-composers",children:"Decomposing Composers (includes search and custom hook)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/decomposing-composers-loading",children:"Decomposing Composers (with isLoading flag)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/rick-and-morty",children:"Rick And Morty Characters"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/rick-and-morty-pag",children:"Rick And Morty Characters (with pagination)"}),Object(l.jsx)("br",{}),Object(l.jsx)(a.b,{to:"/doggos",children:"Doggos"}),Object(l.jsx)("br",{})]})]})})]})})},M=(n(81),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),o(e),i(e)}))});i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(a.a,{children:Object(l.jsx)(F,{})})}),document.getElementById("root")),M()}},[[82,1,2]]]);
//# sourceMappingURL=main.66c791c1.chunk.js.map