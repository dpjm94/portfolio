!function(e){function n(n){for(var i,a,s=n[0],r=n[1],c=n[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);for(d&&d(n);v.length;)v.shift()();return l.push.apply(l,c||[]),t()}function t(){for(var e,n=0;n<l.length;n++){for(var t=l[n],i=!0,s=1;s<t.length;s++){var r=t[s];0!==o[r]&&(i=!1)}i&&(l.splice(n--,1),e=a(a.s=t[0]))}return e}var i={},o={0:0},l=[];function a(n){if(i[n])return i[n].exports;var t=i[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=i,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)a.d(t,i,function(n){return e[n]}.bind(null,i));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var s=window.webpackJsonp=window.webpackJsonp||[],r=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var d=r;l.push([17,1]),t()}({17:function(e,n,t){"use strict";t.r(n);t(6),t(7);var i=t(4),o=t.n(i);function l(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".site-header__menu-icon"),this.menuContent=document.querySelector(".site-header__menu-content"),this.siteHeader=document.querySelector(".site-header"),this.events()}var n,t,i;return n=e,(t=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleTheMenu()}))}},{key:"toggleTheMenu",value:function(){this.menuContent.classList.toggle("site-header__menu-content--is-visible"),this.siteHeader.classList.toggle("site-header--is-expanded"),this.menuIcon.classList.toggle("site-header__menu-icon--close-x")}}])&&l(n.prototype,t),i&&l(n,i),e}(),s=t(5),r=t.n(s),c=t(1),d=t.n(c);function u(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var v=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.thresholdPercent=t,this.itemsToReveal=n,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=r()(this.calcCaller,200).bind(this),this.event()}var n,t,i;return n=e,(t=[{key:"event",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",d()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(n){0==n.isRevealed&&e.calculateIfScrolledTo(n)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().top/this.browserHeight*100<this.thresholdPercent&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&u(n.prototype,t),i&&u(n,i),e}();function h(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.injectHTML(),this.modal=document.querySelector(".modal"),this.closeIcon=document.querySelector(".modal__close"),this.openModalButtons=document.querySelectorAll(".open-modal"),this.events()}var n,t,i;return n=e,(t=[{key:"events",value:function(){var e=this;this.openModalButtons.forEach((function(n){return n.addEventListener("click",(function(n){return e.openTheModal(n)}))})),this.closeIcon.addEventListener("click",(function(){return e.closeTheModal()})),document.addEventListener("keyup",(function(n){return e.keyPressHandler(n)}))}},{key:"keyPressHandler",value:function(e){27==e.keyCode&&this.closeTheModal()}},{key:"openTheModal",value:function(e){e.preventDefault(),this.modal.classList.add("modal--is-visible")}},{key:"closeTheModal",value:function(){this.modal.classList.remove("modal--is-visible")}},{key:"injectHTML",value:function(){document.body.insertAdjacentHTML("beforeend",'\n      <div class="modal">\n      \n      <div class="modal__inner">\n      \n        <div class="wrapper modal__pull-left">\n        <div class="modal__title">About Me</div>\n        <h1>I\'m Developer, Artist & Footballer.</h1>\n          \n        <p class="modal__subtitle">I was born with a severe hearing loss and subsequently had a cochlear implant which greatly improved my hearing.\n        I enjoy turning complex problems into simple beautiful and intuitive designs. When I am not coding, you\'ll find me playing football, walking or drawing.<p>\n        \n        <h2 class="modal__skill_title">My Skills</h2>\n\n        <p>HTML</p>\n            <div class="modal__container">\n                <div class="modal__skills modal__html">90%</div>\n            </div>\n\n            <p>CSS</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__css">90%</div>\n                </div>\n\n            <p>JavaScript</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__js">65%</div>\n                </div>\n\n            <p>PHP</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__php">70%</div>\n                </div>\n\n            <p>Mobile design</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__mobile">85%</div>\n                </div>\n\n                <p>Photoshop</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__photo">85%</div>\n                </div>\n\n                <p>JAVA</p>\n                <div class="modal__container">\n                    <div class="modal__skills modal__java">50%</div>\n                </div>\n                \n        </div>\n\n      </div>\n      <div class="modal__close">X</div>\n    </div>\n      ')}}])&&h(n.prototype,t),i&&h(n,i),e}()),new o.a,new ClipboardJS(".btn"),new v(document.querySelectorAll(".contact-section"),80),new a},4:function(e,n){var t=document.createElement("div");t.className="shots__lightbox",document.body.appendChild(t),document.querySelectorAll(".shots__image").forEach((function(e){e.addEventListener("click",(function(n){t.classList.add("active");var i=document.createElement("img");for(i.src=e.src;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(i)}))})),t.addEventListener("click",(function(e){e.target===e.currentTarget&&t.classList.remove("active")}))},6:function(e,n,t){}});