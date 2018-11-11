!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!k[e]||!v[e])return;for(var t in v[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--g&&0===b&&O()}(e,t),n&&n(e,t)};var t,r=!0,o="52e9347ba502f9878aa5",c=1e4,i={},l=[],d=[];function a(e){var n=E[e];if(!n)return j;var r=function(r){return n.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(l=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),l=[]),j(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return j[e]},set:function(n){j[e]=n}}};for(var c in j)Object.prototype.hasOwnProperty.call(j,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(r,c,o(c));return r.e=function(e){return"ready"===u&&p("prepare"),b++,j.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===u&&(m[e]||x(e),0===b&&0===g&&O())}},r.t=function(e,n){return 1&n&&(e=r(e)),j.t(e,-2&n)},r}var s=[],u="idle";function p(e){u=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var f,h,y,g=0,b=0,m={},v={},k={};function w(e){return+e+""===e?+e:e}function C(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,p("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,c=j.p+""+o+".hot-update.json";r.open("GET",c,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+c+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+c+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return p("idle"),null;v={},m={},k=e.c,y=e.h,p("prepare");var n=new Promise(function(e,n){f={resolve:e,reject:n}});h={};return x(0),"prepare"===u&&0===b&&0===g&&O(),n})}function x(e){k[e]?(v[e]=!0,g++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=j.p+""+e+"."+o+".hot-update.js",n.appendChild(t)}(e)):m[e]=!0}function O(){p("ready");var e=f;if(f=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(w(t));e.resolve(n)}}function _(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,c,d,a;function s(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),c=o.id,i=o.chain;if((d=E[c])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(d.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var l=0;l<d.parents.length;l++){var a=d.parents[l],s=E[a];if(s){if(s.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([a]),moduleId:c,parentId:a};-1===n.indexOf(a)&&(s.hot._acceptedDependencies[c]?(t[a]||(t[a]=[]),f(t[a],[c])):(delete t[a],n.push(a),r.push({chain:i.concat([a]),id:a})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var g={},b=[],m={},v=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var C in h)if(Object.prototype.hasOwnProperty.call(h,C)){var x;a=w(C);var O=!1,_=!1,I=!1,D="";switch((x=h[C]?s(a):{type:"disposed",moduleId:C}).chain&&(D="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of self decline: "+x.moduleId+D));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(O=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+D));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(O=new Error("Aborted because "+a+" is not accepted"+D));break;case"accepted":n.onAccepted&&n.onAccepted(x),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),I=!0;break;default:throw new Error("Unexception type "+x.type)}if(O)return p("abort"),Promise.reject(O);if(_)for(a in m[a]=h[a],f(b,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,a)&&(g[a]||(g[a]=[]),f(g[a],x.outdatedDependencies[a]));I&&(f(b,[x.moduleId]),m[a]=v)}var H,P=[];for(r=0;r<b.length;r++)a=b[r],E[a]&&E[a].hot._selfAccepted&&P.push({module:a,errorHandler:E[a].hot._selfAccepted});p("dispose"),Object.keys(k).forEach(function(e){!1===k[e]&&function(e){delete installedChunks[e]}(e)});for(var B,M,S=b.slice();S.length>0;)if(a=S.pop(),d=E[a]){var X={},A=d.hot._disposeHandlers;for(c=0;c<A.length;c++)(t=A[c])(X);for(i[a]=X,d.hot.active=!1,delete E[a],delete g[a],c=0;c<d.children.length;c++){var q=E[d.children[c]];q&&((H=q.parents.indexOf(a))>=0&&q.parents.splice(H,1))}}for(a in g)if(Object.prototype.hasOwnProperty.call(g,a)&&(d=E[a]))for(M=g[a],c=0;c<M.length;c++)B=M[c],(H=d.children.indexOf(B))>=0&&d.children.splice(H,1);for(a in p("apply"),o=y,m)Object.prototype.hasOwnProperty.call(m,a)&&(e[a]=m[a]);var N=null;for(a in g)if(Object.prototype.hasOwnProperty.call(g,a)&&(d=E[a])){M=g[a];var T=[];for(r=0;r<M.length;r++)if(B=M[r],t=d.hot._acceptedDependencies[B]){if(-1!==T.indexOf(t))continue;T.push(t)}for(r=0;r<T.length;r++){t=T[r];try{t(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:a,dependencyId:M[r],error:e}),n.ignoreErrored||N||(N=e)}}}for(r=0;r<P.length;r++){var U=P[r];a=U.module,l=[a];try{j(a)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:a,error:t,originalError:e}),n.ignoreErrored||N||(N=t),N||(N=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:a,error:e}),n.ignoreErrored||N||(N=e)}}return N?(p("fail"),Promise.reject(N)):(p("idle"),new Promise(function(e){e(b)}))}var E={};function j(n){if(E[n])return E[n].exports;var r=E[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:C,apply:_,status:function(e){if(!e)return u;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:i[e]};return t=void 0,n}(n),parents:(d=l,l=[],d),children:[]};return e[n].call(r.exports,r,r.exports,a(n)),r.l=!0,r.exports}j.m=e,j.c=E,j.d=function(e,n,t){j.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},j.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.t=function(e,n){if(1&n&&(e=j(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(j.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)j.d(t,r,function(n){return e[n]}.bind(null,r));return t},j.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return j.d(n,"a",n),n},j.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},j.p="",j.h=function(){return o},a(0)(j.s=0)}([function(e,n,t){t(1),t(2),e.exports=t(3)},function(e,n){function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}new function e(){var n=this;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),t(this,"openClose",function(){0==n.tmpX?n.open():n.close()}),t(this,"open",function(){n.menuBlock.style.position="fixed",n.backgroundCircle.style.display="block";var e=n.backgroundCircle.offsetLeft+n.backgroundCircle.offsetWidth;n.backgroundCircle.style.right=document.getElementsByClassName("menuBlock")[0].offsetWidth-e+"px",n.backgroundCircle.style.width="25px",n.backgroundCircle.style.height="25px",n.backgroundCircle.style.top="33px";var t=setInterval(function(){n.tmpX=n.tmpX+1,n.menuHumburger.style.backgroundPosition="-"+n.tmpX+"00% -100%",n.backgroundCircle.style.width=parseInt(n.backgroundCircle.style.width)+250+"px",n.backgroundCircle.style.height=parseInt(n.backgroundCircle.style.height)+250+"px",n.backgroundCircle.style.right=parseInt(n.backgroundCircle.style.right)-125+"px",n.backgroundCircle.style.top=parseInt(n.backgroundCircle.style.top)-95+"px",9==n.tmpX&&(clearInterval(t),document.getElementsByClassName("menuBlock")[0].children[1].style.display="block")},100)}),t(this,"close",function(){var e=n.backgroundCircle.offsetLeft+n.backgroundCircle.offsetWidth;n.backgroundCircle.style.right=document.getElementsByClassName("menuBlock")[0].offsetWidth-e+"px",n.backgroundCircle.style.width=n.backgroundCircle.offsetWidth+"px",n.backgroundCircle.style.height=n.backgroundCircle.offsetWidth+"px",n.backgroundCircle.style.top=n.backgroundCircle.offsetTop+"px",document.getElementsByClassName("menuBlock")[0].children[1].style.display="none";var t=setInterval(function(){n.tmpX=n.tmpX-1,n.menuHumburger.style.backgroundPosition="-"+n.tmpX+"00% -100%",n.backgroundCircle.style.width=parseInt(n.backgroundCircle.style.width)-250+"px",n.backgroundCircle.style.height=parseInt(n.backgroundCircle.style.height)-250+"px",n.backgroundCircle.style.right=parseInt(n.backgroundCircle.style.right)+125+"px",n.backgroundCircle.style.top=parseInt(n.backgroundCircle.style.top)+95+"px",0==n.tmpX&&(clearInterval(t),n.backgroundCircle.style.display="none",n.menuBlock.style.position="absolute")},100)}),this.tmpX=0,this.backgroundCircle=document.querySelector(".backgroundCircle"),this.menuBlock=document.querySelector(".menuBlock"),this.menuHumburger=document.querySelector("#menuHumburger"),this.menuHumburger.addEventListener("click",function(){n.openClose()}),window.addEventListener("resize",function(){document.getElementsByClassName("menuBlock")[0].children[1].style.display="none",n.backgroundCircle.style.right="57%",n.backgroundCircle.style.width="25px",n.backgroundCircle.style.height="25px",n.backgroundCircle.style.top="33px",n.backgroundCircle.style.display="none",n.menuBlock.style.position="absolute"})}},function(e,n,t){},function(e,n,t){}]);
//# sourceMappingURL=bundle.js.map