(this["webpackJsonphai-platform"]=this["webpackJsonphai-platform"]||[]).push([[0],{42:function(e,t,a){},52:function(e,t,a){e.exports=a(67)},57:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),o=a.n(r),c=(a(57),a(58),a(42),a(43)),i=a(44),s=a(46),u=a(45),m=a(39),p=a(27);function d(){return l.a.createElement("div",{className:"banner-wrapper p-4"},l.a.createElement("h1",null,"Welcome to the XAI Platform"),l.a.createElement("p",null,"This platform allows you to upload pictures and apply explainability models to it. You will work with methods for explaining model predictions in image classification tasks. Such explanations help users resolve questions around what\u2019s happening inside of the classification model and why. As users explore these explanations, they may come up with additional questions about the model, which possibly requires other kinds of explanations."))}var h=a(36);function E(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement("div",{className:"proceed-wrapper p-4"},l.a.createElement("h2",null,"What Should I Do?"),l.a.createElement("ul",{className:"what-to-do ml-5"},l.a.createElement("li",null,l.a.createElement("p",null,"Try the platform with several pictures"),l.a.createElement("p",null,"Does the model label them correctly?")),l.a.createElement("li",null,l.a.createElement("p",null,"Apply explainability models to those pictures."),l.a.createElement("p",null,"Did you find any image for which the algorithm does not give an explanation that is easy to understand for users?")),l.a.createElement("li",null,l.a.createElement("p",null,"Is the explanation sufficient to trust the model predictions?"),l.a.createElement("p",null,"When is it sufficient? When is it not sufficient? ")),l.a.createElement("li",null,l.a.createElement("p",null,"For insufficient predictions, what can you do to make the model label it correctly?"),l.a.createElement("p",null,"What kinds of additional information would you include in your explanation?"))),l.a.createElement("div",{className:"mx-auto"},l.a.createElement(h.a,{href:"/applyModels",type:"button",className:"getStarted-btn"},"Get Started")),l.a.createElement("hr",null),l.a.createElement("h2",{className:"mt-4"},"Explore What Others Found"),l.a.createElement("p",null,"Explore the observations done by other users and compare it to yours."),l.a.createElement(h.a,{href:"/explore",className:"explore-btn"},"Explore")))}var f=a(40),v=a(89),y=a(95),b=a(91),g=a(94),w=a(93),x=a(92),k=Object(v.a)((function(e){return{root:{width:"100%"},button:{marginRight:e.spacing(1)},instructions:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}}}));function N(){var e=k(),t=l.a.useState(0),a=Object(f.a)(t,2),n=a[0],r=a[1],o=l.a.useState(new Set),c=Object(f.a)(o,2),i=(c[0],c[1],["UPLOAD","APPLY MODEL","GET EXPLANATION","SUMMARIZE & SHARE"]);return l.a.createElement("div",{className:e.root},l.a.createElement(y.a,{activeStep:n},i.map((function(e,t){var a={};return l.a.createElement(b.a,Object.assign({key:e},{}),l.a.createElement(g.a,a,e))}))),l.a.createElement("div",null,n===i.length?l.a.createElement("div",null,l.a.createElement(x.a,{className:e.instructions},"All steps completed - you're finished"),l.a.createElement(w.a,{onClick:function(){r(0)},className:e.button},"Reset")):l.a.createElement("div",null,l.a.createElement(x.a,{className:e.instructions},function(e){switch(e){case 0:return"Upload pictures to apply the model on";case 1:return"Label model to pictures";case 2:return"Does the explanation make sense?";case 3:return"What did you learn?";default:return"Unknown step"}}(n)),l.a.createElement("div",null,l.a.createElement(w.a,{disabled:0===n,onClick:function(){r((function(e){return e-1}))},className:e.button},"Back"),l.a.createElement(w.a,{variant:"contained",color:"primary",onClick:function(){r((function(e){return e+1}))},className:e.button},n===i.length-1?"Finish":"Next")))))}function S(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Upload pictures"),l.a.createElement(N,null))}function O(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Explore Page"))}var A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{collapseOnSelect:!0,bg:"dark",variant:"dark"},l.a.createElement(m.a.Brand,{href:"/getStarted"},"XAIPlatform"),l.a.createElement(p.a,{className:"ml-auto"},l.a.createElement(p.a.Link,{href:"/getStarted"},"GET STARTED"),l.a.createElement(p.a.Link,{href:"/applyModels"},"APPLY MODELS"),l.a.createElement(p.a.Link,{href:"/explore"},"EXPLORE"))))}}]),a}(n.Component),L=a(24),P=a(8);var W=function(){return l.a.createElement("div",null,l.a.createElement(A,null),l.a.createElement(L.a,null,l.a.createElement(P.c,null,l.a.createElement(P.a,{exact:!0,path:"/getStarted",component:E}),l.a.createElement(P.a,{path:"/applyModels",component:S}),l.a.createElement(P.a,{path:"/explore",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(L.a,null,l.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.ea771bb3.chunk.js.map