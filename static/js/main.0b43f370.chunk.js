(this["webpackJsonpmovie-hooks"]=this["webpackJsonpmovie-hooks"]||[]).push([[0],{16:function(e,t,a){e.exports=a(28)},21:function(e,t,a){},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(21),a(4)),i=a(3),s=(a(22),a(6)),m=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],c=a[1];return r.a.createElement("form",{className:"search"},r.a.createElement("input",{value:o,onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("input",{onClick:function(t){t.preventDefault(),e.search(o),c("")},type:"submit",value:"SEARCH"}))},u=function(e){var t=e.movie,a=Object(i.f)(),n="N/A"===t.Poster?"https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg":t.Poster;return r.a.createElement("div",{className:"movie",onClick:function(e){a.push("/movie/"+e),console.log("movieId",e)}.bind(void 0,t.imdbID)},r.a.createElement("h2",null,t.Title),r.a.createElement("div",null,r.a.createElement("img",{width:"200",alt:"The movie titled: ".concat(t.Title),src:n})),r.a.createElement("p",null,"(",t.Year,")"))},E=function(e){var t=e.loading,a=e.errorMessage,n=e.movies;return r.a.createElement("div",{className:"movies"},t&&!a?r.a.createElement("span",null,"loading... "):a?r.a.createElement("div",{className:"errorMessage"},a):n.map((function(e,t){return r.a.createElement(u,{key:"".concat(t,"-").concat(e.Title),movie:e})})))},p=a(7),v={loading:!0,movies:[],errorMessage:null},d=function(e,t){switch(t.type){case"SEARCH_MOVIES_REQUEST":return Object(p.a)({},e,{loading:!0,errorMessage:null});case"SEARCH_MOVIES_SUCCESS":return Object(p.a)({},e,{loading:!1,movies:t.payload});case"SEARCH_MOVIES_FAILURE":return Object(p.a)({},e,{loading:!1,errorMessage:t.error});default:return e}},h=function(e){var t=Object(n.useReducer)(d,v),a=Object(s.a)(t,2),o=a[0],c=a[1];Object(n.useEffect)((function(){fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b").then((function(e){return e.json()})).then((function(e){c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search})}))}),[]);var l=o.movies,i=o.errorMessage,u=o.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{search:function(e){c({type:"SEARCH_MOVIES_REQUEST"}),fetch("https://www.omdbapi.com/?s=".concat(e,"&apikey=4a3b711b")).then((function(e){return e.json()})).then((function(e){"True"===e.Response?c({type:"SEARCH_MOVIES_SUCCESS",payload:e.Search}):c({type:"SEARCH_MOVIES_FAILURE",error:e.Error})}))}}),r.a.createElement("p",{className:"App-intro"},"Sharing a few of our favourite movies"),r.a.createElement(E,{movies:l,errorMessage:i,loading:u}))},f=function(e){return r.a.createElement("header",{className:"App-header"},r.a.createElement(l.b,{to:"/"},r.a.createElement("h2",null,e.text)))},S=function(e){var t=e.movieId;return console.log("MovieDetail:",t),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/"},"Go back"),r.a.createElement("h1",null,"Movie Detail"))},g=function(){return r.a.createElement(l.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(f,{text:"HOOKED"}),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:h,exact:!0}),r.a.createElement(i.a,{path:"/movie/:id",component:S,exact:!0}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.0b43f370.chunk.js.map