(this["webpackJsonphai-platform"]=this["webpackJsonphai-platform"]||[]).push([[0],{36:function(e,a,t){e.exports=t(54)},41:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(17),o=t.n(r),c=(t(41),t(42),t(43),t(22)),i=(t(44),t(31)),s=t(11),m=t(14),u=t(34),d=t(20);function E(){var e=Object(n.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],o=function(){return r((function(e){return!e}))};return l.a.createElement("body",null,l.a.createElement("div",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(i.a,{className:"gradient-nav",expand:"lg"},l.a.createElement(i.a.Brand,{id:"nav-brand",href:"#"},"Assignment 2: Explainability"),l.a.createElement("div",{className:"nav-links"},l.a.createElement(s.a,null,l.a.createElement(s.a.Link,{href:"#modeltuning"},"Model Tuning"),l.a.createElement(s.a.Link,{href:"#modelresult"},"Model Result"),l.a.createElement(s.a.Link,{href:"#report"},"Report Submissions"))),l.a.createElement("div",{className:"to-part-2"},l.a.createElement(m.a,{className:"part-button"},"Part 2"),l.a.createElement("p",null,l.a.createElement(u.a,{size:24}))),l.a.createElement("div",{className:"burger"},l.a.createElement("div",{onClick:o},t?l.a.createElement(d.b,{size:32}):l.a.createElement(d.a,{size:32})))),l.a.createElement("div",{onClick:o},l.a.createElement(s.a,{className:t?"dropdown-show":"dropdown-menu"},l.a.createElement("ul",{className:"dropdown-links"},l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#modeltuning"},"Model Tuning")),l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#modelresult"},"Model Result")),l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#report"},"Report Submissions")))),l.a.createElement("div",{className:"background-shadow"})))))}var p=t(21),h=t(6),v=(t(48),[{id:"convo-layer",index:0,title:"Convolutional Layer",desc:"Core building block of CNN"},{id:"dense-layer",index:1,title:"Dense Layer",desc:"Core building block of CNN"},{id:"max-layer",index:2,title:"Max Pooling Layer",desc:"Reduces the amount of computation in the network"}]);t(49);function f(e){var a=e.props,t=(a.id,a.index,a.title),n=a.desc;return l.a.createElement("div",{className:"layer-card"},l.a.createElement("h6",null,t),l.a.createElement("p",{className:"layer-desc"},n),l.a.createElement("div",null,l.a.createElement(m.a,{className:"add-layer-button"},"+")))}var g=t(16);function N(){var e=Object(n.useState)(0),a=Object(c.a)(e,2),t=(a[0],a[1],v.map((function(e){return l.a.createElement(f,{props:e})})));return l.a.createElement("div",{className:"tuning-wrapper"},l.a.createElement("div",{className:"top-row"},l.a.createElement("div",{className:"input"},l.a.createElement("h5",null,"INPUT"),l.a.createElement("div",{className:"input-inside"},l.a.createElement("p",null,"DATA DIVISION"),l.a.createElement("h6",null,"How would you divide the training and testing data?"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"Train:Test = 1:1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")))),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,"BATCH SIZE"),l.a.createElement("h6",null,"Number of Batches per Epochs"),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",null,"EPOCHS"),l.a.createElement("h6",null,"Number of passes through the entire training dataset"),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))))),l.a.createElement("div",{className:"layers"},l.a.createElement("h5",null,"LAYERS"),l.a.createElement("div",{className:"layers-inside"}))),l.a.createElement("div",{className:"addLayers"},l.a.createElement("h5",null,"ADD LAYERS"),l.a.createElement("div",{className:"add-inside"},t)),l.a.createElement(m.a,{className:"global-button make-model"},"Generate Model"))}function b(){return l.a.createElement("div",null,"this is modelResult")}function w(){return l.a.createElement("div",null,"this is report submission")}t(50);function y(){return l.a.createElement("div",{className:"intro-wrapper"},l.a.createElement("h1",{className:"title"},"Assignment 2: Should I Trust You with My Decision? "),l.a.createElement("div",{className:"directions"},l.a.createElement("h3",{className:"sub-title"},"What do I do?"),l.a.createElement("p",null,"It's a two-part assignment. First, you will use our interactive platform to explore, implement, and inspect methods for detecting, scoring, and mitigating AI bias. Second, you will reflect on your activities through answering a series of discussion questions below."),l.a.createElement("h3",{className:"sub-title"},"Scenario"),l.a.createElement("p",{className:"scenario"},"\u201cYou are making an image classification model for a satellite to sense whether an area is densely packed with life or not. None densely packed areas will be used for building new cities for your client.\u201d"),l.a.createElement("h3",{className:"sub-title"},"Discussion Questions"),l.a.createElement("p",null,"Please answer the following questions after you complete the exploration and implementation through the platform above. Make sure to cite any external sources when you refer to examples, ideas, and quotes to support your arguments.")),l.a.createElement(p.b,{exact:!0,to:"modeltuning"},l.a.createElement(m.a,{className:"middle global-button"},"Proceed to Part 1")))}var k=function(){return l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(p.a,null,l.a.createElement(h.a,{path:"/modeltuning"},l.a.createElement(N,null)),l.a.createElement(h.a,{path:"/modelresult"},l.a.createElement(b,null)),l.a.createElement(h.a,{path:"/report"},l.a.createElement(w,null)),l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(y,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.1cbd88ed.chunk.js.map