(this.webpackJsonpmotion=this.webpackJsonpmotion||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(2),c=t.n(r),i=(t(13),t(3)),s=t(4),l=t(7),m=t(6),u=(t(14),t(5)),f=t.n(u),h=".moon",p=function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){return Object(i.a)(this,t),n.apply(this,arguments)}return Object(s.a)(t,[{key:"setMovement",value:function(e){var n=e.movementX,t=e.movementY,o=e.screenX-n-100,a=e.screenY-t-80;console.log(o,a),f()(h).css({left:o,top:a})}},{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App",onMouseMove:function(n){return e.setMovement(n)}},a.a.createElement("div",{className:"outer-div",onClick:function(){return h=""}}),a.a.createElement("h3",{className:"heading"},"Set postion of moon and star by one click."),a.a.createElement("div",{className:"moon",onClick:function(){return h=".moon"}}),new Array(30).fill().map((function(e,n){return a.a.createElement("img",{onClick:function(){return h=".star"+n},className:"star"+n,src:"https://www.nicepng.com/png/full/38-388189_star-transparent-circle.png",style:{width:Math.floor(8*Math.random())+"rem",top:Math.floor(400*Math.random())+"px",left:Math.floor(1196*Math.random())+"px",position:"absolute"}})})))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.ad61715f.chunk.js.map