(function(e){function t(t){for(var r,c,o=t[0],s=t[1],u=t[2],p=0,f=[];p<o.length;p++)c=o[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"squares__alert"},[n("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v(" "+e._s(e.textMessage)+" ")])]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.isGameOver,expression:"isGameOver"}],staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.generator}},[e._v("Начать игру")]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.isGameOver,expression:"!isGameOver"}],staticClass:"squares__action"},e._l(e.defaultBtn,(function(t,r){return n("button",{key:t,staticClass:"btn btn-outline-primary me-3 js-btn",attrs:{type:"button"},on:{click:function(t){return e.onClick(r)}}},[e._v("Primary")])})),0)])])},i=[],c=n("1da1"),o=n("668b"),s=(n("96cf"),n("d3b7"),n("fb6a"),n("caad"),n("2532"),{name:"App",data:function(){return{defaultBtn:4,generate:[],clickMap:[],delayTime:1500,round:1,maxRound:3,isClick:!1,click:1,message:["Первый раунд","Второй раунд","Третий раунд"],isGameOver:!0,isWin:!0}},computed:{textMessage:function(){return this.isWin?this.isClick?this.message[this.round-1]:"Подготовка к раунду":"Вы проиграли"}},methods:{addButtonColor:function(e,t){return new Promise((function(n){setTimeout(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.classList.remove("btn-outline-primary"),e.classList.add("btn-danger"),n();case 3:case"end":return t.stop()}}),t)}))),t)}))},changeButtonColor:function(e,t,n){var r=this;return new Promise((function(a){setTimeout(Object(c["a"])(regeneratorRuntime.mark((function i(){var o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:o=0;case 1:if(!(o<r.generate[t])){i.next=8;break}return i.next=4,r.addButtonColor(e,n);case 4:setTimeout(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.classList.remove("btn-danger"),e.classList.add("btn-outline-primary");case 2:case"end":return t.stop()}}),t)}))),200);case 5:o++,i.next=1;break;case 8:a();case 9:case"end":return i.stop()}}),i)}))),n)}))},generator:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,r,a,i,c,s,u,l,p,f;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(e.isWin=!0,e.isGameOver=!1,e.isClick=!1,e.generate=[],e.click=1,e.clickMap=[],n=e.$el.querySelectorAll(".js-btn"),r=0,a=1;a<e.defaultBtn+1;a++)e.generate.push(e.random(a));i=!0,c=!1,t.prev=11,u=Object(o["a"])(n);case 13:return t.next=15,u.next();case 15:return l=t.sent,i=l.done,t.next=19,l.value;case 19:if(p=t.sent,i){t.next=28;break}return f=p,t.next=24,e.changeButtonColor(f,r,e.delayTime);case 24:r++;case 25:i=!0,t.next=13;break;case 28:t.next=34;break;case 30:t.prev=30,t.t0=t["catch"](11),c=!0,s=t.t0;case 34:if(t.prev=34,t.prev=35,i||null==u.return){t.next=39;break}return t.next=39,u.return();case 39:if(t.prev=39,!c){t.next=42;break}throw s;case 42:return t.finish(39);case 43:return t.finish(34);case 44:e.isClick=!0;case 45:case"end":return t.stop()}}),t,null,[[11,30,34,44],[35,,39,43]])})))()},changeLevel:function(){var e=this;return new Promise((function(t){e.round<e.maxRound?(e.defaultBtn++,e.delayTime=e.delayTime-500,e.round++):e.gameOver(),t()}))},gameOver:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.isWin=e,console.log("игра закончена"),this.defaultBtn=4,this.delayTime=1500,this.round=1,this.isGameOver=!0,this.isClick=!1},random:function(e){var t=1,n=t+Math.random()*(e+1-t);return Math.floor(n)},onClick:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.isClick){n.next=19;break}if(t.clickMap[e]||(t.clickMap[e-1]&&t.clickMap[e-1]!==t.generate[e-1]&&(console.log("Конец хода, предыдущий шаг небыла заполненна полностью"),t.gameOver(!1)),t.click=1),t.clickMap[e]=t.click,t.clickMap=t.clickMap.slice(),t.clickMap.includes(void 0)&&(console.log("Конец хода, перепрыгнули через шаг"),t.gameOver(!1)),t.click>t.generate[e]&&(console.log("Конец хода, значение шага выше чем количество мерцаний"),t.gameOver(!1)),t.generate.length===t.clickMap.length){n.next=10;break}t.click++,n.next=19;break;case 10:if(t.generate[t.generate.length-1]===t.clickMap[t.clickMap.length-1]){n.next=14;break}t.click++,n.next=19;break;case 14:return console.log("Следующий раунд"),n.next=17,t.changeLevel();case 17:return n.next=19,t.generator();case 19:case"end":return n.stop()}}),n)})))()}}}),u=s,l=(n("5c0b"),n("2877")),p=Object(l["a"])(u,a,i,!1,null,null,null),f=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.efc20110.js.map