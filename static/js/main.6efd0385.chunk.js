(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),i=t.n(c),s=(t(15),t(3)),l=t(4),m=t(7),o=t(5),u=t(8);var h=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};var p=function(e){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",{className:"title"},"PEEP SHOW"),r.a.createElement("li",null,e.label),r.a.createElement("li",null,"Score: ",e.score," | Top Score: ",e.topScore)))};var g=function(e){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Hooray! It's A Memory Game!"),r.a.createElement("h4",null,"Click on a character to earn points, but don't click on any more than once!"))};var d=function(e){return r.a.createElement("div",{className:"cards"},r.a.createElement("div",{className:"container mt-3"},r.a.createElement("div",{className:"row justify-content-center"},e.children),r.a.createElement("div",{className:"w-100 d-none d-md-block"})))},b=t(6);var f=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("div",{className:"character"},r.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.onClick(e.id)}}))))};var k=function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"caption"},"Watch all 9 series out now!")))},v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={characters:b,label:"Click an image to begin!",score:0,topScore:0,hasBeenClicked:[]},t.handleClick=function(e){var a=t.state,n=a.hasBeenClicked,r=a.topScore,c=a.score+1,i=c>r?c:r;12===n.length?t.resetGame():n.includes(e)?t.resetGame():(n.push(e),t.setState({hasBeenClicked:n,score:c,topScore:i}),t.shuffleCards())},t.resetGame=function(){t.shuffleCards(),t.setState({hasBeenClicked:[],score:0})},t.shuffleCards=function(){for(var e=t.state.characters,a=e.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),r=[e[n],e[a]];e[a]=r[0],e[n]=r[1]}t.setState({characters:e})},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(h,null,r.a.createElement(p,{score:this.state.score,topScore:this.state.topScore,label:this.state.label}),r.a.createElement(g,null),r.a.createElement(d,null,this.state.characters.map(function(a){return r.a.createElement(f,{id:a.id,name:a.name,key:a.name,image:a.image,onClick:e.handleClick})})),r.a.createElement(k,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{id:1,name:"April",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/april.png"},{id:2,name:"Big Suze",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/big-suze.png"},{id:3,name:"Dobby",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/dobby.png"},{id:4,name:"Gog",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/gog.jpg"},{id:5,name:"Jeff",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/jeff.png"},{id:6,name:"Jeremy",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/jeremy.png"},{id:7,name:"Johnson",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/johnson.png"},{id:8,name:"Mark",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/mark.png"},{id:9,name:"Nancy",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/nancy.png"},{id:10,name:"Sophie",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/sophie.png"},{id:11,name:"Super Hans",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/super-hans.png"},{id:12,name:"Toni",image:"https://raw.githubusercontent.com/harpalassi/Click-Memory-Game/master/public/images/toni.png"}]},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.6efd0385.chunk.js.map