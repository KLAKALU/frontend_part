(this.webpackJsonpfrontend_part=this.webpackJsonpfrontend_part||[]).push([[0],{67:function(t,e,n){},93:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n.n(o),a=n(21),r=n.n(a),i=(n(67),n(30)),s=n.n(i),l=n(45),u=n(15),d=n(29),b=n(126),j=n(31),p=n.n(j),f=n(121),x=n(125),h=n(128),m=n(127),O=n(132),g=n(131),v=n(129),y=n(6);var k=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),n=e[0],a=e[1],r=Object(o.useState)([]),i=Object(d.a)(r,2),j=i[0],k=i[1],S="http://localhost:3000/sures";Object(o.useEffect)((function(){function t(){return(t=Object(l.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get(S);case 2:e=t.sent,console.log(e),console.log(e.data),[{idnomber:1,like:0,bool:!1},{idnomber:2,like:0,bool:!1}],k(e.data);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var w=function(){a("")},C=function(){var t=Object(l.a)(s.a.mark((function t(e){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=j.map((function(t){return t.idnomber===e&&(null==t.bool?(p.a.patch(S+"/".concat(e),{like:1}),t.like+=1,t.bool=1):(p.a.patch(S+"/".concat(e),{like:2}),t.like-=1,t.bool=null)),t})),k(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(y.jsx)(c.a.Fragment,{children:Object(y.jsxs)(f.a,{maxWidth:"xs",children:[Object(y.jsx)(v.a,{style:{fontFamily:"Monoton",textAlign:"center",fontSize:"30px"},children:"3 Channel"}),Object(y.jsx)(x.a,{}),Object(y.jsxs)("form",{onSubmit:function(t){p.a.post(S,{content:n}).then((function(t){console.log("registration response",t.data),k([].concat(Object(u.a)(j),[{idnomber:t.data.idnomber,content:t.data.content,time:t.data.time,like:t.data.like}])),w()})),t.preventDefault()},children:[Object(y.jsx)(h.a,{type:"text",name:"content",value:n,placeholder:"Enter text",onChange:function(t){return a(t.target.value)}}),Object(y.jsx)(m.a,{type:"submit",variant:"contained",color:"text",children:"\u6295\u7a3f"})]}),Object(y.jsx)(O.a,{component:"ul",children:j.map((function(t){return Object(y.jsxs)(g.a,{style:{marginBottom:"9px"},children:[Object(y.jsxs)("div",{style:{display:"flex"},children:[Object(y.jsx)(v.a,{style:{fontSize:"17px",paddingRight:"9px",paddingLeft:"5px"},children:t.idnomber}),Object(y.jsx)(v.a,{color:"text.secondary",style:{fontSize:"14px"},children:t.time})]}),Object(y.jsxs)(v.a,{component:"div",children:[t.content,Object(y.jsx)(b.a,{color:t.bool?"red":"gray",size:16,onClick:function(){return C(t.idnomber)}}),t.like]})]},t.idnomber)}))})]})})};n(93);function S(){return Object(y.jsx)(k,{})}var w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),a(t),r(t)}))};r.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(S,{})}),document.getElementById("root")),w()}},[[94,1,2]]]);
//# sourceMappingURL=main.425defd0.chunk.js.map