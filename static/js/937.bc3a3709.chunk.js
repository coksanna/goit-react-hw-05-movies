"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[937],{937:function(t,r,e){e.r(r);var n=e(861),a=e(439),u=e(757),c=e.n(u),s=e(791),o=e(689),i=e(256),p=e(184);r.default=function(){var t=(0,o.UO)().id,r=(0,s.useState)([]),e=(0,a.Z)(r,2),u=e[0],f=e[1];return(0,s.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i.Jh)(t);case 3:e=r.sent,f(e),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),n=r.t0.response,console.log(n.data.message);case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[t]),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("ul",{children:u.map((function(t){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("p",{children:["Author: ",t.author]}),(0,p.jsx)("p",{children:t.content})]},t.id)}))})})}},256:function(t,r,e){e.d(r,{Jh:function(){return f},Mc:function(){return i},d5:function(){return p},qF:function(){return s},z5:function(){return o}});var n=e(861),a=e(757),u=e.n(a),c=e(912).Z.create({baseURL:"https:/api.themoviedb.org/3",params:{api_key:"a1735b4b403b356dec5f0993d9adcd8f"}}),s=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n,a,s=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=s.length>1&&void 0!==s[1]?s[1]:1,t.next=3,c.get("/search/movie",{params:{page:e,query:r}});case 3:return n=t.sent,a=n.data,console.log("movie",a.results),t.abrupt("return",a.results);case 7:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(){var r,e,n,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,c.get("/trending/movie/day?page=".concat(r));case 3:return e=t.sent,n=e.data,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.cast);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=937.bc3a3709.chunk.js.map