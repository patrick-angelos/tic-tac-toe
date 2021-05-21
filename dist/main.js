(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".row {\n  display: flex;\n  width: 150px;\n  height: 50px;\n}\n\n.row div {\n  height: 49px;\n  width: 49px;\n  text-align: center;\n  font-size: 40px;\n  cursor: pointer;\n}\n\n.row:not(:last-of-type) div {\n  border-bottom: 1px solid black;\n}\n\n.row div:not(:last-of-type) {\n  border-right: 1px solid black;\n}",""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],s=n[c]||0,u="".concat(c," ").concat(s);n[c]=s+1;var f=a(u),d={css:l[1],media:l[2],sourceMap:l[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:u,updater:p(d,t),references:1}),r.push(u)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function f(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function d(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function p(e,t){var n,r,o;if(t.singleton){var i=v++;n=h||(h=c(t)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=c(t),r=d.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=l(e,t),s=0;s<n.length;s++){var u=a(n[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}n=c}}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(e,t)=>({getInfo:()=>({name:e,symbol:t}),makeMove:(e,n,r=null)=>{n.setCell(e,t),r&&(r.textContent=t)}}),t=()=>{const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let t=Array.apply(null,Array(9)).map((()=>""));return{win:()=>{for(let n=0;n<e.length;n++){const r=e[n];if(""!=t[r[0]]&&t[r[0]]===t[r[1]]&&t[r[0]]===t[r[2]])return!0}return!1},checkMove:e=>!(e<0||e>8)&&""===t[e],setBoard:e=>{t=[...e]},setCell:(e,n)=>{t[e]=n},getBoard:()=>t}};var r=n(379),o=n.n(r),i=n(426);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;const a=document.querySelectorAll(".row div"),l=document.querySelector("button");let c=t();const s=e("Player1","X"),u=((n,r)=>{const o=e("Player","X"),{makeMove:i,getInfo:a}=e(n,r),l=e=>{const t=[],n=e.getBoard();for(let e=0;e<n.length;e++)""===n[e]&&t.push(e);return t},c=(e,t)=>{const n=l(e);if(0===n.length)return 0;const r=[];let a=0;if("bot"===t){for(let t=0;t<n.length;t++){if(i(n[t],e),e.win())return e.setCell(n[t],""),1;a=c(e,"player"),r.push(a),e.setCell(n[t],"")}return Math.max(...r)}for(let t=0;t<n.length;t++){if(o.makeMove(n[t],e),e.win())return e.setCell(n[t],""),-1;a=c(e,"bot"),r.push(a),e.setCell(n[t],"")}return Math.min(...r)};return{makeMove:i,getInfo:a,randomMove:e=>{let t=-1;for(;!e.checkMove(t);)t=Math.floor(8*Math.random());return t},chooseMove:e=>{const n=t();return n.setBoard(e.getBoard()),(e=>{const t=l(e),n=[];for(let r=0;r<t.length;r++){let o=0;if(i(t[r],e),e.win())return t[r];o=c(e,"player"),n.push({move:t[r],score:o}),e.setCell(t[r],"")}return(e=>{let t=-10;const n=[];for(let n=0;n<e.length;n++){const{score:r}=e[n];t=r>t?r:t}for(let r=0;r<e.length;r++){const{move:o,score:i}=e[r];i===t&&n.push(o)}return n[Math.floor(Math.random()*n.length)]})(n)})(n)}}})("Player2","O");let f=s,d=!1,h=0;const v=e=>{if(d)return d;if(f===u)return!1;const t=e.target,n=t.id;if(c.checkMove(n)){if(f.makeMove(n,c,t),h+=1,console.log("next"),c.win())return d=f;if(h>=9)return d="draw";f=u,setTimeout((function(){const e=u.chooseMove(c),t=document.getElementById(`${e}`);if(u.makeMove(e,c,t),h+=1,c.win())return d=f;f=s}),1e3)}};for(let e=0;e<a.length;e++)a[e].addEventListener("click",v.bind(void 0));l.addEventListener("click",(()=>{if(f!==u||d){for(let e=0;e<a.length;e++)a[e].textContent="";c=t(),d=!1,h=0,f=s}}))})()})();