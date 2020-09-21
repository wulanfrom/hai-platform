(this["webpackJsonphai-platform"]=this["webpackJsonphai-platform"]||[]).push([[0],{45:function(e,a,t){e.exports=t(66)},50:function(e,a,t){},51:function(e,a,t){},53:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(17),c=t.n(r),o=(t(50),t(51),t(52),t(23)),i=(t(53),t(32)),s=t(11),m=t(14),u=t(41),d=t(21);function p(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],c=function(){return r((function(e){return!e}))};return l.a.createElement("body",null,l.a.createElement("div",null,l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(i.a,{className:"gradient-nav",expand:"lg"},l.a.createElement(i.a.Brand,{id:"nav-brand",href:"#"},"Assignment 2: Explainability"),l.a.createElement("div",{className:"nav-links"},l.a.createElement(s.a,null,l.a.createElement(s.a.Link,{href:"#modeltuning"},"Model Tuning"),l.a.createElement(s.a.Link,{href:"#modelresult"},"Model Result"),l.a.createElement(s.a.Link,{href:"#report"},"Report Submissions"))),l.a.createElement("div",{className:"to-part-2"},l.a.createElement(m.a,{className:"part-button"},"Part 2"),l.a.createElement("p",null,l.a.createElement(u.a,{size:24}))),l.a.createElement("div",{className:"burger"},l.a.createElement("div",{onClick:c},t?l.a.createElement(d.b,{size:32}):l.a.createElement(d.a,{size:32})))),l.a.createElement("div",{onClick:c},l.a.createElement(s.a,{className:t?"dropdown-show":"dropdown-menu"},l.a.createElement("ul",{className:"dropdown-links"},l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#modeltuning"},"Model Tuning")),l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#modelresult"},"Model Result")),l.a.createElement("li",null,l.a.createElement(s.a.Link,{href:"#report"},"Report Submissions")))),l.a.createElement("div",{className:"background-shadow"})))))}var E=t(22),h=t(6),N=(t(57),[{id:"convo-layer",index:0,title:"Convolutional Layer",desc:"Core building block of CNN"},{id:"dense-layer",index:1,title:"Dense Layer",desc:"Core building block of CNN"},{id:"max-layer",index:2,title:"Max Pooling Layer",desc:"Reduces the amount of computation in the network"}]);t(58);function v(e){var a=e.props,t=(a.id,a.index,a.title),n=a.desc;return l.a.createElement("div",{className:"layer-card"},l.a.createElement("h6",null,t),l.a.createElement("p",{className:"layer-desc"},n),l.a.createElement("div",null,l.a.createElement(m.a,{className:"add-layer-button"},"+")))}var f=[{id:"input-layer",index:0,title:"Input Layer",desc:"Input Test and Training Images"},{id:"convo-layer",index:1,title:"Convolutional Layer",desc:"Ouput: (None, 0, 32, 32)"},{id:"max-layer",index:2,title:"Max Pooling Layer",desc:"Ouput: (None, 0, 32, 32)"},{id:"dense-layer",index:3,title:"Dense Layer",desc:"Ouput: (None, 0, 32, 32)"},{id:"flatten-layer",index:4,title:"Flatten Layer",desc:"Ouput: (None, 0, 32, 32)"},{id:"output-layer",index:5,title:"Output Layer",desc:"Labeled Images"}],g=t(16);t(59);function y(e){var a=e.props,t=(a.id,a.index,a.title),n=a.desc;return l.a.createElement("div",{className:"layerList-outer"},l.a.createElement("div",{className:"layerList-wrapper"},l.a.createElement("div",{className:"square"}),l.a.createElement("div",{className:"layer-desc"},l.a.createElement("p",null,t),l.a.createElement("p",null,n))))}function b(){var e=Object(n.useState)(0),a=Object(o.a)(e,2),t=(a[0],a[1],N.map((function(e){return l.a.createElement(v,{props:e})}))),r=f.map((function(e){return l.a.createElement(y,{props:e})}));return l.a.createElement("div",{className:"tuning-wrapper"},l.a.createElement("div",{className:"top-row"},l.a.createElement("div",{className:"input"},l.a.createElement("h5",null,"INPUT"),l.a.createElement("div",{className:"input-inside"},l.a.createElement("p",{className:"param-name"},"DATA DIVISION"),l.a.createElement("p",{className:"param-desc"},"How would you divide the training and testing data?"),l.a.createElement(g.a,null,l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"Train:Test = 1:1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5")))),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",{className:"param-name"},"BATCH SIZE"),l.a.createElement("p",{className:"param-desc"},"Number of Batches per Epochs"),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))),l.a.createElement("div",{className:"divider"}),l.a.createElement("p",{className:"param-name"},"EPOCHS"),l.a.createElement("p",{className:"param-desc"},"Number of passes through the entire training dataset"),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Control,{as:"select"},l.a.createElement("option",null,"1"),l.a.createElement("option",null,"2"),l.a.createElement("option",null,"3"),l.a.createElement("option",null,"4"),l.a.createElement("option",null,"5"))))),l.a.createElement("div",{className:"layers"},l.a.createElement("h5",null,"LAYERS"),l.a.createElement("div",{className:"layers-inside"},r))),l.a.createElement("div",{className:"addLayers"},l.a.createElement("h5",null,"ADD LAYERS"),l.a.createElement("div",{className:"add-inside"},t)),l.a.createElement(m.a,{className:"global-button make-model"},"Generate Model"))}t(60);var w=t(42);function x(){return l.a.createElement("div",{className:"result-wrapper"},l.a.createElement("div",{className:"result"},l.a.createElement("h5",null,"RESULT"),l.a.createElement("div",{className:"result-inside"},l.a.createElement("p",null,"Accuracy:"),l.a.createElement("p",null,"60.7%")),l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(w.a,{width:"600px",height:"400px",chartType:"Line",loader:l.a.createElement("div",null,"Getting Your Results..."),data:[["Percentage","Accuracy","Loss","Transformers: Age of Extinction"],[1,37.8,80.8,41.8],[2,30.9,69.5,32.4],[3,25.4,57,25.7],[4,11.7,18.8,10.5],[5,11.9,17.6,10.4],[6,8.8,13.6,7.7],[7,7.6,12.3,9.6],[8,12.3,29.2,10.6],[9,16.9,42.9,14.8],[10,12.8,30.9,11.6],[11,5.3,7.9,4.7],[12,6.6,8.4,5.2],[13,4.8,6.3,3.6],[14,4.2,6.2,3.4]],options:{chart:{title:"Comparison of Accuracy and Loss of the Model",subtitle:"in Percentage"}},rootProps:{"data-testid":"3"}}))))}t(61);function L(){return l.a.createElement("div",{className:"report-wrapper"},l.a.createElement("h5",null,"REPORT SUBMISSION"),l.a.createElement("div",{className:"report-inside"},l.a.createElement("p",null,"You can submit multiple times. The report you submit here will be used for grading."),l.a.createElement("div",{className:"give-report"},l.a.createElement(m.a,{className:"outline-button"}," Choose a file.."),l.a.createElement("p",null,"Example.pdf"))),l.a.createElement(m.a,{className:"global-button submit-button"},"Submit Report"))}t(62);function k(){return l.a.createElement("div",{className:"intro-wrapper"},l.a.createElement("h1",{className:"title"},"Assignment 2: Should I Trust You with My Decision? "),l.a.createElement("div",{className:"directions"},l.a.createElement("h3",{className:"sub-title"},"What do I do?"),l.a.createElement("p",null,"It's a two-part assignment. First, you will use our interactive platform to explore, implement, and inspect methods for detecting, scoring, and mitigating AI bias. Second, you will reflect on your activities through answering a series of discussion questions below."),l.a.createElement("h3",{className:"sub-title"},"Scenario"),l.a.createElement("p",{className:"scenario"},"\u201cYou are making an image classification model for a satellite to sense whether an area is densely packed with life or not. None densely packed areas will be used for building new cities for your client.\u201d"),l.a.createElement("h3",{className:"sub-title"},"Discussion Questions"),l.a.createElement("p",null,"Please answer the following questions after you complete the exploration and implementation through the platform above. Make sure to cite any external sources when you refer to examples, ideas, and quotes to support your arguments.")),l.a.createElement(E.b,{exact:!0,to:"modeltuning"},l.a.createElement(m.a,{className:"middle global-button"},"Proceed to Part 1")))}var S=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(E.a,null,l.a.createElement(h.a,{path:"/modeltuning"},l.a.createElement(b,null)),l.a.createElement(h.a,{path:"/modelresult"},l.a.createElement(x,null)),l.a.createElement(h.a,{path:"/report"},l.a.createElement(L,null)),l.a.createElement(h.a,{exact:!0,path:"/"},l.a.createElement(k,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.11513eac.chunk.js.map