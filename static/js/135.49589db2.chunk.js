"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[135],{731:function(e,t,n){n.d(t,{E9:function(){return c},Hx:function(){return d},I2:function(){return o},Y5:function(){return u},xc:function(){return l}});var r=n(861),a=n(757),s=n.n(a),i=n(340);i.Z.defaults.baseURL="https://api.themoviedb.org/3",i.Z.defaults.params={api_key:"bbbeb622f5d3f197e85f3129c81f41c1"};var c=function(){var e=(0,r.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/trending/all/day?language=en-US");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/credits"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("/movie/".concat(t,"/reviews"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},135:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),a=n(439),s=n(757),i=n.n(s),c=n(731),u=n(791),o=n(689),l=n(87),d=n(639),v="MovieDetails_nav_link__QFjvY",f="MovieDetails_cont_movie__ey8cO",p="MovieDetails_cont_movie_overview__P1YR8",h="MovieDetails_cont_add__qNbjd",_="MovieDetails_cont_add_link__+WFlS",m="MovieDetails_cont_link__iPAVu",x="MovieDetails_cont_movie_add__I6mu6",j="MovieDetails_mov_img__Ob5R+",w="MovieDetails_cont_add_title__UqecC",b=n(686),k=n.n(b),g=n(184),Z={color:"white",backgroundColor:"blue"},y=function(){var e,t,n=(0,u.useState)(null),s=(0,a.Z)(n,2),b=s[0],y=s[1],N=(0,u.useState)(!1),D=(0,a.Z)(N,2),M=D[0],O=D[1],S=(0,o.UO)().movieId,C=(0,o.TH)(),U=null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",A=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),e.prev=1,e.next=4,(0,c.Y5)(t);case 4:n=e.sent,(r=n.data)&&(O(!1),y(r)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),k().Notify.failure("Information for this movie not found!",{position:"center-center",timeout:3e3}),O(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){A(S)}),[S]);var I=null!==b&&void 0!==b?b:{},L=I.title,P=I.overview,R=I.genres,Y=I.poster_path,q=I.release_date,E=I.popularity;return(0,g.jsxs)("div",{children:[M&&(0,g.jsx)(d.Z,{}),null!==b&&(0,g.jsxs)("div",{children:[(0,g.jsxs)("div",{className:f,children:[(0,g.jsxs)("div",{className:x,children:[(0,g.jsx)(l.OL,{className:m,to:U,children:"Go back"}),(0,g.jsx)("img",{className:j,src:"https://www.themoviedb.org/t/p/w300"+Y,alt:"Poster"})]}),(0,g.jsxs)("div",{className:p,children:[(0,g.jsxs)("h2",{children:[L," (",q.slice(0,4),")"]}),(0,g.jsxs)("p",{children:["Popularity: ",E]}),(0,g.jsx)("h3",{children:"Overview"}),(0,g.jsx)("p",{children:P}),(0,g.jsx)("h3",{children:"Genres"}),(0,g.jsx)("p",{children:R.map((function(e){return e.name})).join(" ")})]})]}),(0,g.jsx)("h3",{className:w,children:"Additional information"}),(0,g.jsxs)("ul",{className:h,children:[(0,g.jsx)("li",{className:_,children:(0,g.jsx)(l.OL,{className:v,to:"cast",state:C.state,style:function(e){return e.isActive?Z:void 0},children:"Cast"})}),(0,g.jsx)("li",{className:_,children:(0,g.jsx)(l.OL,{className:v,to:"reviews",state:C.state,style:function(e){return e.isActive?Z:void 0},children:"Reviews"})})]}),(0,g.jsx)(u.Suspense,{fallback:(0,g.jsx)(d.Z,{}),children:(0,g.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=135.49589db2.chunk.js.map