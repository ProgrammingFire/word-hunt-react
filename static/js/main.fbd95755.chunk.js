(this["webpackJsonpword-hunt"]=this["webpackJsonpword-hunt"]||[]).push([[0],{66:function(e,t,a){},67:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(66),a(67),a(138)),u=a(37),s=a.n(u),o=a(49),b=a(13),j=a(52),d=a.n(j),h=[{label:"English",value:"en"},{label:"Spanish",value:"es"},{label:"French",value:"fr"},{label:"Japanese",value:"ja"},{label:"Russian",value:"ru"},{label:"German",value:"de"},{label:"Italian",value:"it"},{label:"Korean",value:"ko"},{label:"Brazilian Portuguese",value:"pt-BR"},{label:"Arabic",value:"ar"},{label:"Turkish",value:"tr"},{label:"Hindi",value:"hi"}],p=a(129),v=a(139),O=a(134),x=a(133),f=a(96),g=a(135),m=a(136),y=a(34),w=a(7),k=Object(p.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}})),S=function(){var e=k(),t=Object(n.useState)([]),a=Object(b.a)(t,2),r=a[0],c=a[1],i=Object(n.useState)(""),l=Object(b.a)(i,2),u=l[0],j=l[1],p=Object(n.useState)("en"),S=Object(b.a)(p,2),A=S[0],C=S[1],F=function(){var e=Object(o.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==u){e.next=4;break}return e.abrupt("return");case 4:return e.prev=4,e.next=7,d.a.get("https://api.dictionaryapi.dev/api/v2/entries/".concat(A,"/").concat(u));case 7:t=e.sent,c(t.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){F()}),[u,A]),Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(y.a,{variant:"h2",style:{margin:12},children:"Word Hunt"}),Object(w.jsx)(v.a,{onChange:function(e){return j(e.target.value)},id:"word",placeholder:"Type The Word",variant:"outlined"}),Object(w.jsx)(v.a,{id:"lang",select:!0,label:"Language",variant:"outlined",onChange:function(e){return C(e.target.value)},children:h.map((function(e,t){return Object(w.jsx)(O.a,{value:e.value,children:e.label},t)}))}),r.map((function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(y.a,{variant:"h3",style:{margin:16},children:e.word.toUpperCase()}),e.meanings.map((function(e,t){return Object(w.jsxs)(x.a,{style:{textAlign:"center"},children:[Object(w.jsx)(y.a,{variant:"h4",children:e.partOfSpeech.toUpperCase()}),e.definitions.map((function(e,t){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.a,{style:{textAlign:"center"},children:Object(w.jsx)(g.a,{children:e.definition})},t),Object(w.jsx)(m.a,{})]})}))]},t)}))]})}))]})},A=a(55),C=a(137),F=Object(A.a)({palette:{type:"dark"}});var T=function(){return Object(w.jsx)("div",{children:Object(w.jsx)(C.a,{theme:F,children:Object(w.jsx)(l.a,{maxWidth:"md",style:{textAlign:"center"},children:Object(w.jsx)(S,{})})})})};i.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(T,{})}),document.getElementById("root"))}},[[93,1,2]]]);
//# sourceMappingURL=main.fbd95755.chunk.js.map