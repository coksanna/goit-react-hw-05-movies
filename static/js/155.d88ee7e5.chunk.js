"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[155],{364:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(791),a=t(87),c=t(689),u={},s=t(184),i=function(e){var r=e.items,t=(0,c.TH)(),n=r.map((function(e){var r=e.id,n=e.title;return(0,s.jsx)(a.rU,{className:u.link,to:"/movie/".concat(r),state:{from:t},children:(0,s.jsx)("li",{className:u.item,children:(0,s.jsx)("p",{children:n})})},r)}));return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{className:u.list,children:n})})},o=(0,n.memo)(i);i.defaultProps={items:[]}},155:function(e,r,t){t.r(r),t.d(r,{default:function(){return w}});var n=t(433),a=t(861),c=t(439),u=t(757),s=t.n(u),i=t(791),o=t(87),f=t(364);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var v="movieSearchForm_form__3t533",m=t(184),d=function(e){e.initialState;var r=e.onSubmit,t=(0,i.useState)({search:""}),n=(0,c.Z)(t,2),a=n[0],u=n[1],s=a.search;return(0,m.jsx)("form",{className:v,onSubmit:function(e){e.preventDefault(),r(h({},a)),u({search:""})},children:(0,m.jsxs)("div",{children:[(0,m.jsx)("label",{htmlFor:"",children:"Search movies"}),(0,m.jsx)("input",{value:s,onChange:function(e){var r=e.target,t=r.name,n=r.value;u((function(e){return h(h({},e),{},p({},t,n))}))},name:"search",autoFocus:!0,placeholder:"Search movies",required:!0})]})})},b=(0,i.memo)(d);d.defaultProps={initialState:{search:""}};var g=t(256),x=t(799),j=function(){var e=(0,i.useState)([]),r=(0,c.Z)(e,2),t=r[0],u=r[1],p=(0,i.useState)(!1),l=(0,c.Z)(p,2),h=l[0],v=l[1],d=(0,i.useState)(null),j=(0,c.Z)(d,2),w=j[0],y=j[1],k=(0,o.lr)(),O=(0,c.Z)(k,2),Z=O[0],S=O[1],P=Z.get("search"),_=Z.get("page");(0,i.useEffect)((function(){if(P){var e=function(){var e=(0,a.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,(0,g.qF)(P,_);case 4:r=e.sent,u((function(e){return[].concat((0,n.Z)(e),(0,n.Z)(r))})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0.message);case 11:return e.prev=11,v(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}}),[P,_,v,u,y,S]);var F=(0,i.useCallback)((function(e){var r=e.search;S({search:r,page:1}),u([])}),[S]),C=(0,i.useCallback)((function(){S({search:P,page:Number(_)+1})}),[P,_,S]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(b,{initialState:{search:P},onSubmit:F}),(0,m.jsx)(f.Z,{items:t}),w&&(0,m.jsx)("p",{className:x.Z.errorMessage,children:w}),h&&(0,m.jsx)("p",{children:"...Load movies"}),Boolean(t.length)&&(0,m.jsx)("button",{onClick:C,children:"Load more"})]})},w=function(){return(0,m.jsx)(j,{})}},256:function(e,r,t){t.d(r,{Jh:function(){return p},Mc:function(){return o},d5:function(){return f},qF:function(){return s},z5:function(){return i}});var n=t(861),a=t(757),c=t.n(a),u=t(912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"a1735b4b403b356dec5f0993d9adcd8f"}}),s=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>1&&void 0!==s[1]?s[1]:1,e.next=3,u.get("/search/movie",{params:{page:t,query:r}});case 3:return n=e.sent,a=n.data,e.abrupt("return",a.results);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(){var r,t,n,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,e.next=3,u.get("/trending/movie/day?page=".concat(r));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.cast);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},799:function(e,r){r.Z={errorMessage:"movieSearch_errorMessage__bKo9H"}}}]);
//# sourceMappingURL=155.d88ee7e5.chunk.js.map