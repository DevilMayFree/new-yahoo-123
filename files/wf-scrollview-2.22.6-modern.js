!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wafer-scrollview",[],t):"object"==typeof exports?exports["wafer-scrollview"]=t():(e.wafer=e.wafer||{},e.wafer.wafers=e.wafer.wafers||{},e.wafer.wafers["wafer-scrollview"]=t())}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var s=i[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="https://s.yimg.com/aaq/wf/",t(t.s="./src/entry.js")}({"./src/entry.js":function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var d=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),h="next",v="prev",f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=t.windowLimit,s=void 0===i?5:i;r(this,e),this.active=null,this.elemMapping=new Map,this.tail=null,this.cycle=!1,this.head=null,this.scrollItemsLimit=Math.floor(s/2)}return d(e,[{key:"add",value:function(e){var t=this.tail,i=this.elemMapping.size;if(t){var r=this.elemMapping.get(t);this.elemMapping.set(e,new Map([["index",i],[h,r.get(h)],[v,t]])),this.elemMapping.get(this.tail).set(h,e),this.elemMapping.get(this.head).set(v,e),this.tail=e}else this.elemMapping.set(e,new Map([["index",i],[h,e],[v,e]])),this.head=this.tail=e;this.active||(this.active=e)}},{key:"remove",value:function(e){var t=this.elemMapping.get(e),i=t.get(v),r=t.get(h),s=this.elemMapping.get(i),a=this.elemMapping.get(r);s.set(h,r),a.set(v,i),e===this.active&&(this.active=s),e===this.tail&&(this.tail=i),e===this.head&&(this.head=r),this.elemMapping.delete(e)}},{key:"getActive",value:function(){return this.active}},{key:"setNextAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(h)}},{key:"setPreviousAsActive",value:function(){this.active=this.elemMapping.get(this.active).get(v)}},{key:"getElementToAppend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;if(this.cycle){i<=2?r=0:i<=3&&(r=1);return this.getForward(r+1)}return t<r?null:i>t+r-1?this.getForward(r+1):null}},{key:"getElementToPrepend",value:function(){var e=this.elemMapping.get(this.active),t=e.get("index"),i=this.elemMapping.size,r=this.scrollItemsLimit;return this.cycle?this.getBackward(r):t>=i-r?null:t-r-1>=0?this.getBackward(r+1):null}},{key:"getForward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(h),!this.cycle&&i===this.head)return null}return i}},{key:"getBackward",value:function(e){for(var t=0,i=this.active;t++<e;){if(i=this.elemMapping.get(i).get(v),!this.cycle&&this.tail===i)return null}return i}},{key:"appendWithReplace",value:function(e,t){e=e||this.active;var i=this.elemMapping.get(e),r=i.get(v),s=i.get(h),a=t[0],n=a,l=r;this.elemMapping.get(r).set(h,n);for(var o=1;o<t.length;o++){var u=t[o];this.elemMapping.set(n,new Map([[h,u],[v,l]])),l=n,n=u}this.elemMapping.set(n).set(n,new Map([[h,s],[v,l]])),this.elemMapping.get(s).set(v,n),e===this.head?this.head=a:e===this.tail&&(this.tail=n),e===this.active&&(this.active=a),this.elemMapping.delete(e);for(var c=this.elemMapping.get(r),d=c.get("index");c;){var f=c.get(h);c=this.elemMapping.get(f),c.set("index",++d),f===this.tail&&(c=null)}}},{key:"size",get:function(){return this.elemMapping.size}}]),e}(),p=f,m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},g=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),w=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},y=window.wafer,b=y.base,_=y.constants,A=y.features,E=y.utils,S=y.WaferBaseClass,k=A.smoothScroll,C=A.transformProperty,L=_.ATTR_PREFIX,x=E.bindEvent,T=E.clearAndSetInnerHTML,O=E.clearTimeout,M=E.convertNodeListToArray,P=E.debounce,D=E.elementInView,W=E.fetchWithCache,B=E.findAncestor,I=E.getConfigFromJSONScriptNode,N=E.getFocusableElems,V=E.isVisible,j=E.removeTransition,F=E.setTimeout,X=E.setTransition,U=E.unbindEvent,z=5,Y=250,R="ease-out",H="active",q="visited",J=["indicatorClick","indicatorMouseLeave","indicatorMouseover","next","pause","prev","resume","stateDidUpdate","tabClick"],G=["index"],K="ontouchstart"in window,Q=function(e,t){K&&(e.style.cursor=t)},Z=function(){var e=[],t=!1;return{add:function(t,i){e.push(function(e){return function(){return t.call(e)}}(i)),this.exec(i._util.transitionDuration)},exec:function(i){var r=this;t||(t=!0,F(function(){var s=e.shift();switch(t=!1,s.call(),e.length){case 0:return;case 1:r.exec(i);case 2:r.exec(i+50);default:r.exec(0)}},i))}}}(),$=function(e){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.counter,s=void 0===r?0:r,l=i.syncDelay,o=void 0===l?25:l;a(this,t);var u=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,{},{STATE_ATTRS:G})),c=e.getAttribute(L+"behavior"),d=e.getAttribute(L+"snap-behavior"),h=e.getElementsByClassName("wafer-indicators-counts")[0],v=I(h).counts,f=e.getAttribute(L+"pagination-target"),g=parseInt(e.getAttribute(L+"has-indicator-pagination"),10)||0,w=f&&M(document.body.querySelectorAll(f))||M(e.getElementsByClassName("indicators")),y=e.getAttribute(L+"cycle"),_=void 0,A=void 0,E=void 0,S=void 0,k=void 0;if(w.some(function(e){_=e.getAttribute(L+"pagination-type")||"default","count"===_?(A=M(e.getElementsByClassName("current-page"))[0],S=e):(k=e,E=e?M(e.children):null)}),u._util=m({},u._util,{elem:e,indicatorCountElem:A,indicatorElems:w,indicatorItems:E,indicatorPagination:g,indicatorsCustomCount:v,indicatorType:_,indicatorWithCountElem:S,indicatorWithoutCountElem:k,snapBehavior:d,sliderElem:M(e.getElementsByClassName("slides"))[0]||e,behavior:c,nextBtn:M(e.getElementsByClassName("next-btn"))[0],prevBtn:M(e.getElementsByClassName("prev-btn"))[0]}),J.forEach(function(e){u[e]=u[e].bind(u)}),"native"===c){var C=e.getAttribute(L+"scroll-snap");u._state=u._state||{},u._util.isUsingScrollSnap=null===C||void 0===C?0:Number(C);var x=u._util.sliderElem;u._state.activeElem=null,u._syncWithDebounce=P(u.scrollViewWithNativeSync,o,u);var T=M(x.children);return T.some(function(e){return!!e.classList.contains(H)&&(u._state.activeElem=e,!0)}),C&&T.some(function(e){return!e.classList.contains("tab")||(e.classList.add("has-scrollsnap-click","has-click"),!1)}),u._state.activeElem=u._state.activeElem||T[0],u._state.activeElem.classList.add("active"),u.snapNativeScrollViewToActiveElement({calledOnLoad:!0,source:"onLoad"}),u.checkAndAddActiveClassForNativeOverflow(),u.addEventListeners(),n(u)}var O=e.getAttribute(L+"edge-padding")||"",D=parseInt(O,10)||0,W=parseInt(e.getAttribute(L+"right-padding"),10)||0,N=e.getAttribute(L+"resize-end"),V=e.getAttribute(L+"boundary"),j=e.getAttribute(L+"trigger-wf-during-transition"),U=e.getAttribute(L+"scrollview-td"),K=Number(e.getAttribute(L+"auto-switch"))||0,Z=Number(e.getAttribute(L+"auto-switch-disable-hover"))||0,$=Number(e.getAttribute(L+"disable-touch"))||0,ee=Number(e.getAttribute(L+"disable-click-navigation"))||0,te=Number(e.getAttribute(L+"auto-switch-timeout"))||2e3,ie=e.getAttribute(L+"scrollview-ttf"),re=new p({windowLimit:z}),se=V&&B(e,V);y=null===y||void 0===y?0:Number(y),re.cycle=y;var ae=u._util=m({},u._util,{autoSwitchDisableHover:Z,autoSwitchTimeout:te,_switchScrollTimeout:null,boundaryElem:se,counter:s,cycle:y,dataList:re,disableClickNavigation:ee,disableTouch:$,drag:{endX:0,endY:0,isVerticalDirection:!1,startX:0,startY:0},edgePadding:D,elem:e,index:null,resizeEnd:null===N||void 0===N?0:Number(N),rightPadding:W,shouldAutoSwitch:K,sliderItemsDataMapping:new Map,transitionDuration:null===U||void 0===U?Y:Number(U),transitionTimingFunction:null===ie||void 0===ie?R:ie,triggerWafersDuringTransition:"1"===j?1:0});O&&-1!==O.indexOf("%")&&(ae.edgePaddingPercentage=parseInt(O.replace("%",""),10),ae.edgePadding=0),u._state={autoSwitchInProgress:!1,autoSwitchPausedByUser:!1,hasBeenThreadmilled:!1,mouseOnElement:!1,slideWidth:null,triggerNodeMap:new Map,virtualCounter:null},ae.sliderItems=M(ae.sliderElem.children);var ne=ae.sliderItems.length;if(u._state.slideWidth=100/ne,u.updateWidth(),X(ae.sliderElem,"transform",ae.transitionDuration,ae.transitionTimingFunction),Q(ae.sliderElem,"-webkit-grab"),ae.edgePaddingPercentage){var le=ae.itemWidth*ae.edgePaddingPercentage/100;ae.sliderElem.style["padding-left"]=le+"px"}else ae.sliderElem.style["padding-left"]=ae.edgePadding+"px";for(var oe=document.createDocumentFragment(),ue=void 0,ce=!1,de=0;de<ne;de++){var he=ae.sliderItems[de];re.add(he),he.style.width=u._state.slideWidth+"%",!ce&&de>0&&he.classList.contains(H)&&(ue=de,ce=!0),oe.appendChild(he)}if(ae.sliderElem.appendChild(oe),ue)for(var ve=0;ve<ue;ve++)u.showCurrent(1);return u.addEventListeners(),u.addAriaAttributes(),0!==s||ue||(u.preFetch(),u.updateIndicators(s),u.updateButtons(!0),re.getActive().classList.add(H,q)),e.classList.add("wafer-scrollview-rendered"),window.wafer.ready(function(){F(function(){u._util.index&&u.scrollToIndex(u._util.index),u.setTimeoutForAutoSwitch(),b.emitWaferEvent("scrollview:ready",{elem:e,meta:{}})},40)}),u}return l(t,e),g(t,[{key:"addAriaAttributes",value:function(e){var t=this._util;t.sliderItems=M(t.sliderElem.children),e=e||t.dataList.getActive();for(var i=t.sliderItems.length,r=!1,s=0;s<i;s++){var a=t.sliderItems[s];r=e!==a,a.setAttribute("aria-hidden",r+"");var n=N(a);r?n.forEach(function(e){e.setAttribute("tabindex","-1")}):n.forEach(function(e){e.removeAttribute("tabindex")})}}},{key:"scrollViewWithNativeSync",value:function(){if(!this._state.locked){var e=this._util,t=e.sliderElem,i=e.indicatorItems,r=e.prevBtn,s=e.nextBtn;if(i||r||s){var a=this._state.activeElem,n=a,l=M(t.children),o=l.indexOf(n),u=window.getComputedStyle(t),c=0,d=-100;if(u){var h=u.getPropertyValue("padding-left");h&&(d=parseInt(h.replace("px",""),10),d=0===d?-100:-1*d)}a&&a.classList.remove("active");for(var v=0;v<l.length;v++){c=v;var f=l[v];if(D(f,{offsetX:d,offsetY:0},t.getBoundingClientRect())){this._state.activeElem=f,this._state.activeElem.classList.add("active");break}}var p=this._state.activeElem;this.updateButtons(!0),n!==p&&(this._state.scrollLeft=t.scrollLeft,this.updateIndicators(l.indexOf(p)||0),b.emitWaferEvent("scrollview:change",{elem:t,meta:{source:"scroll",index:c+1,prevIndex:o+1}}))}b.sync(t)}}},{key:"slidesHasBeenUpdated",value:function(){var e=this._util;e.sliderItems=M(e.sliderElem.children);var t=e.sliderItems.length;this._state.slideWidth=100/t;for(var i=0;i<t;i++){e.sliderItems[i].style.width=this._state.slideWidth+"%"}this.updateWidth()}},{key:"updateWidth",value:function(){var e=this._util,t=this._state.virtualCounter,i=e.edgePadding,r=e.edgePaddingPercentage,s=e.rightPadding,a=e.sliderElem,n=e.sliderItems;a.style.width="";var l=a.clientWidth;if(r){var o=l*e.edgePaddingPercentage/100;e.sliderElem.style["padding-left"]=o+"px",e.itemWidth=l-2*o}else e.itemWidth=i?l-2*i:s?l-s:l;a.style.width=e.itemWidth*n.length+"px",a.style[C]="translateX(-"+(t*e.itemWidth+this.negativeWidthCoefficient)+"px)"}},{key:"removeSlide",value:function(e){var t=this._util,i=t.sliderItems.indexOf(e);if(-1!==i){var r=t.indicatorItems[i],s=t.dataList;e.parentNode.removeChild(e),this.slidesHasBeenUpdated(),r.parentNode.removeChild(r),t.indicatorItems.splice(i,1),s.remove(e)}}},{key:"addEventListeners",value:function(){var e=this,i=this._util,r=i.behavior,s=i.elem,a=i.sliderElem,n="native"===r;n&&(window.wafer.ready(function(){window.wafer.on("video:mediacurrent",function(){var t=a.getElementsByClassName("active")[0],i=a.getElementsByClassName("wafer-playlist-active")[0],r=M(a.children).indexOf(i);if(t!==i&&-1!==r){var s=i.getBoundingClientRect(),n=s.width,l=r*n;t.classList.remove("active"),i.classList.add("active"),e._state.activeElem=i,k?a.scrollTo({behavior:"smooth",left:l,top:0}):a.scrollTo(l,0),e.updateButtons(!0)}})}),x(a||s,"scroll",this._syncWithDebounce));var l=this._util.indicatorItems;if(l){var o=this._util.indicatorWithoutCountElem;o&&(l.forEach(function(e,t){e.setAttribute("data-index",t)}),x(o,"click",this.indicatorClick));this._util.shouldAutoSwitch&&o&&(x(o,"mouseover",this.indicatorMouseover),x(o,"mouseleave",this.indicatorMouseLeave))}n||w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addEventListeners",this).call(this)}},{key:"scrollToIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.source,r=this._util,s=r.behavior,a=r.counter;if("native"===s){var n=this._state.activeElem,l=M(n.parentNode.children),o=l[e];if(o===n)return;n.classList.remove("active"),this._state.activeElem=o,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"indexChange"})}else if(a>e)for(var u=0;u<a-e;u++)this.showCurrent(-1,{source:i});else if(a<e)for(var c=0;c<e-a;c++)this.showCurrent(1,{source:i})}},{key:"pauseAutoSwitch",value:function(){if(this._util.shouldAutoSwitch){var e=this._util.sliderElem.parentNode;this._state.autoSwitchInProgress=!1,this._util._switchScrollTimeout&&O(this._util._switchScrollTimeout,this),e&&e.setAttribute("aria-busy","false")}}},{key:"setTimeoutForAutoSwitch",value:function(){var e=this;if(this._util.shouldAutoSwitch&&!this._state.autoSwitchPausedByUser&&!this._state.autoSwitchInProgress&&!this._state.mouseOnElement){this._state.autoSwitchInProgress=!0;var t=this._util.autoSwitchTimeout;this.pauseAutoSwitch(),this._util._switchScrollTimeout=F(function(){e.showCurrent(1,{source:"autoscroll",type:"next"})},t,this)}}},{key:"removeEventListeners",value:function(){var e=this._util,i=e.behavior,r=e.elem,s=e.indicatorWithCountElem,a=e.shouldAutoSwitch,n=e.sliderElem;if("native"===i)return void U(n||r,"scroll",this._syncWithThrottle);s&&U(s,"click",this.indicatorClick),a&&s&&(x(s,"mouseover",this.indicatorMouseover),x(s,"mouseleave",this.indicatorMouseLeave)),this.pauseAutoSwitch(),w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeEventListeners",this).call(this)}},{key:"preFetch",value:function(){if(!window.wafer.base.isBot)for(var e=this._util.dataList,t=0;t<3;t++){var i=e.getForward(t),r=e.getBackward(t);i&&this.renderSlide(i,{prefetch:!0}),r&&this.renderSlide(r,{prefetch:!0})}}},{key:"snapNativeScrollViewToActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.calledOnLoad,i=void 0!==t&&t,r=e.source,s=this._util,a=s.sliderElem,n=s.indicatorItems,l=this._state.activeElem;if(!l||i&&0===a.scrollLeft)return void this.updateButtons(!0);var o=this._util.isUsingScrollSnap,u=parseInt(window.getComputedStyle(a).scrollPaddingLeft.replace("px",""),10)||0,c=l.offsetLeft-a.scrollLeft;c-="click"===r?a.clientWidth/2-l.offsetWidth/2+u:l.offsetWidth/2,o?k?a.scrollBy({behavior:"smooth",left:c,top:0}):a.scrollBy(c,0):a.scrollLeft+=c,n||this.updateButtons(!0),b.emitWaferEvent("scrollview:change",{elem:l,meta:{source:r}})}},{key:"handleResize",value:function(){if("native"===this._util.behavior)return void this.checkAndAddActiveClassForNativeOverflow();var e=this._util.sliderElem;if(V(e)){j(e);var t=this._util,i=t.cycle,r=t.transitionDuration,s=t.transitionTimingFunction;i?this.slidesHasBeenUpdated():this.updateWidth(),F(function(){X(e,"transform",r,s)},0)}}},{key:"handleFetch",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.fetchBody,s=i.fetchUrl,a=i.prefetch,n=void 0!==a&&a,l=i.replace,o=void 0!==l&&l,u=i.resultSelector;if(!n||e.parentNode){var c=this._util,d=c.dataList,h=c.sliderItemsDataMapping;h.has(e)||h.set(e,{});var v=h.get(e);!s||void 0!==v.fetchStatus&&2!==v.fetchStatus?(n?b.prefetch(e):b.sync(e),o&&this.slidesHasBeenUpdated()):(v.fetchStatus=0,W(s,{body:r}).then(function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.assets,s=void 0===r?{}:r,a=i.html;if(!t._destroyed&&a){var l=void 0,c=!1;if(b.destroy(e),o){var h=document.createElement("div"),f=e.parentNode,p=M(f.children);h.innerHTML=a;var m=u&&h.querySelector(u),g=M((m||h||{}).children),w=p.indexOf(e),y=e===d.tail;d.appendWithReplace(e,g),-1!==w&&(g.forEach(function(t){f.insertBefore(t,e)}),y&&(f.removeChild(p[0]),t._state.virtualCounter=Math.floor(z/2),c=e!==d.tail),f.removeChild(e)),l=f,t._state.hasBeenThreadmilled=!1}else T(e,a),l=e;v.fetchStatus=1,b.syncAssets(s),n?b.prefetch(e):b.sync(l),c&&j(t._util.sliderElem),o&&t.slidesHasBeenUpdated()}}).catch(function(i){t._destroyed||(b.emitError({name:"WaferScrollview",elem:e,meta:{fetchUrl:s},stack:i.stack||i.message}),v.fetchStatus=2)}))}}},{key:"renderSlide",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.prefetch,r=void 0!==i&&i,s=this._util.sliderElem;if(!r||D(s,{offsetX:0,offsetY:0},b.viewport)){var a=void 0,n=void 0,l=void 0,o=void 0,u=e.getAttribute(L+"url");switch(u&&(a="fetch",l=!!Number(e.getAttribute(L+"replace")),n=e.getAttribute(L+"result-selector"),o=e.getAttribute(L+"body")),a){case"fetch":this.handleFetch(e,{fetchBody:o,fetchUrl:u,prefetch:r,replace:l,resultSelector:n});break;default:r?b.prefetch(e):F(function(){b.sync(e)},this._util.transitionDuration)}}}},{key:"updateElemsUsingVirtualElements",value:function(e,t){var i=this,r=this._util,s=this._state,a=r.cycle,n=r.dataList,l=r.itemWidth,o=r.sliderElem,u=r.transitionTimingFunction,c=r.transitionDuration,d=n.size,h=s.slideWidth,v=s.virtualCounter;if(1===e){var f=t+1>d;if(a||!f){var p=n.getElementToAppend();if(p&&(p.style.width=h+"%"),X(o,"transform",c,u),o.style[C]="translateX(-"+(((v||0)+1)*l+this.negativeWidthCoefficient)+"px)",null===v)return s.virtualCounter=1,this._util.counter=t,n.setNextAsActive(),void this.scrollViewTransformAnimationDidComplete();if(s.virtualCounter++,n.setNextAsActive(),!p)return;Z.add(function(){var e=r.itemWidth,t=r.sliderElem,a=M(t.children);t.removeChild(a[0]),t.appendChild(p),r.sliderItems=M(t.children),s.virtualCounter--,j(t),t.style[C]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}else if(-1===e){var m=t<0;if(a||!m){var g=n.getElementToPrepend();if(g&&(g.style.width=h+"%"),X(o,"transform",c,u),o.style[C]="translateX(-"+(v-1)*l+"px)",s.virtualCounter--,n.setPreviousAsActive(),!g)return;Z.add(function(){var e=r.itemWidth,t=r.sliderElem,a=M(t.children);t.removeChild(a[a.length-1]),t.prepend(g),r.sliderItems=M(t.children),s.virtualCounter++,j(t),t.style[C]="translateX(-"+s.virtualCounter*e+"px)",i.scrollViewTransformAnimationDidComplete()},this)}}}},{key:"showCurrent",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.source,r=this._util,a=r.boundaryElem,n=r.counter,l=r.cycle,o=r.dataList,u=r.elem,c=r.itemWidth,d=r.sliderElem,h=o.size,v=n;if(d.parentNode.setAttribute("aria-busy","true"),this.isValidMove(e)){if(l){if(1===e){var f=v+1>=h;v=f?0:n+e}else if(-1===e){var p=v<=0;v=p?h-1:n+e}}else v=n+e;if(o.getActive().classList.remove(H),v!==n){if(!this._state.hasBeenThreadmilled){for(;[].concat(s(d.children)).length>z;)d.removeChild(d.children[z]);r.sliderItems=M(d.children),this.slidesHasBeenUpdated(),this._state.hasBeenThreadmilled=!0}this.updateElemsUsingVirtualElements(e,v),this._util.counter=v;var m=o.getActive();m.classList.add(H,q),this.renderSlide(m),this.updateIndicators(v,n),this.updateButtons(),this.triggerOnChange(),this.preFetch(),v+1===h?(u.classList.add("wafer-scrollview-reached-end"),a&&a.classList.add("wafer-scrollview-boundary-reached-end")):(u.classList.remove("wafer-scrollview-reached-end"),a&&a.classList.remove("wafer-scrollview-boundary-reached-end")),b.emitWaferEvent("scrollview:change",{elem:u,meta:{source:i,index:v+1,prevIndex:n+1}})}else{o.getActive().classList.add(H,q);var g=this._state.virtualCounter,w="translateX(-"+(g*c+this.negativeWidthCoefficient)+"px)";w!==this._util.transformValue&&(d.style[C]=w,this._util.transformValue=w)}this._util.index=v,this.didComplete(null,v)}}},{key:"triggerOnChange",value:function(){var e=this._state.triggerNodeMap,t=this._util,i=t.dataList,r=i.getActive(),s=[];e.has(r)?s=e.get(r):(s=M(r.getElementsByClassName("wafer-scrollview-trigger-on-active")),e.set(r,s)),s.forEach(function(e){b.trigger(e)})}},{key:"updateIndicators",value:function(e,t){var i=this._util,r=i.indicatorElems,s=i.indicatorCountElem,a=i.indicatorsCustomCount,n=i.indicatorItems;if(n){if(this._util.shouldAutoSwitch)for(var l=0;l<n.length;l++){var o=n[l],u=l<e;u?o.classList.add(q):o.classList.remove(q)}var c=void 0;if(void 0===t){var d=r[0];d&&(c=d.getElementsByClassName(H)[0])}else c=n[t];var h=n[e];c&&(c.classList.remove(H),c.removeAttribute("aria-current")),h&&(h.classList.add(H,q),h.setAttribute("aria-current",!0))}s&&(s.innerHTML=a&&a[e]||e+1)}},{key:"updateButtons",value:function(e){var t=this._util,i=t.behavior,r=t.elem,s=t.sliderElem,a=t.nextBtn,n=t.prevBtn;if("native"!==i){var l=t.counter,o=t.cycle,u=t.dataList,c=u.size;a&&(o&&!e||l!==c-1?(r.classList.remove("wafer-scrollview-next-disabled"),a.removeAttribute("disabled")):(r.classList.add("wafer-scrollview-next-disabled"),a.setAttribute("disabled",!0))),n&&(o&&!e||0!==l?(r.classList.remove("wafer-scrollview-prev-disabled"),n.removeAttribute("disabled")):(r.classList.add("wafer-scrollview-prev-disabled"),n.setAttribute("disabled",!0)))}else if(a||n){var d=0===s.scrollLeft,h=Math.abs(s.scrollLeft)>=s.scrollWidth-s.clientWidth;a&&(h?(r.classList.add("wafer-scrollview-next-disabled"),a.setAttribute("disabled",!0)):(r.classList.remove("wafer-scrollview-next-disabled"),a.removeAttribute("disabled"))),n&&(d?(r.classList.add("wafer-scrollview-prev-disabled"),n.setAttribute("disabled",!0)):(r.classList.remove("wafer-scrollview-prev-disabled"),n.removeAttribute("disabled")))}}},{key:"updateAfterDrag",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag,i=t.currentDirection,r=t.endX,s=t.horizontalDirection,a=t.startX,n=r-a,l=i===s;l&&n>0&&Math.abs(n)>30?this.showCurrent(-1,e):l&&n<0&&Math.abs(n)>30?this.showCurrent(1,e):this.showCurrent()}},{key:"handlePause",value:function(){var e=this._util,t=e.elem,i=e.shouldAutoSwitch,r=e.sliderElem;i&&t.classList.add("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!0,this.pauseAutoSwitch();var s=r.parentNode;s&&s.setAttribute("aria-live","polite")}},{key:"handleResume",value:function(){var e=this._util.sliderElem;this.resetAutoSwitchState(),this.setTimeoutForAutoSwitch();var t=e.parentNode;t&&t.setAttribute("aria-live","off")}},{key:"didLock",value:function(){this.pauseAutoSwitch()}},{key:"didUnLock",value:function(){this.setTimeoutForAutoSwitch()}},{key:"isValidMove",value:function(e){var t=this._util,i=t.counter,r=t.cycle,s=t.dataList,a=s.size;return r?1===e&&i<=a-1||-1===e&&i>=0||0===e:1===e&&i<a-1||-1===e&&i>0||0===e}},{key:"grab",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this._util.drag;this._util.pointerDown=!1,t.endX&&this.updateAfterDrag(e),this.clearDrag()}},{key:"grabbing",value:function(){var e=this._util,t=e.drag,i=e.elem,r=e.itemWidth,s=e.sliderElem,a=e.triggerWafersDuringTransition,n=this._state.virtualCounter,l=t.startX,o=t.endX,u=-1*(n*r+(l-o)),c="translateX("+u+"px)";a&&2*Math.abs(u)>=r&&b.sync(i),c!==this._util.transformValue&&(this._util.drag.grabbing=!0,s.style[C]=c,this._util.transformValue=c)}},{key:"clearDrag",value:function(){var e=this;this._util.drag={currentDirection:null,endX:0,endY:0,grabbing:!1,horizontalDirection:0,last:0,startX:0,startY:0},this._util.grabTimeout&&O(this._grabTimeout),this._util.grabTimeout=F(function(){e._util.drag&&(e._util.drag.isVerticalDirection=!1)},50)}},{key:"indicatorClick",value:function(e){var t=e.target,i=t.getAttribute("data-index");i&&this.scrollToIndex(parseInt(i,10),{source:"indicator"})}},{key:"scrollViewTransformAnimationDidComplete",value:function(){var e=this._util,t=e.sliderElem;this._state.autoSwitchInProgress=!1,this.setTimeoutForAutoSwitch();var i=e.dataList;t.parentNode.setAttribute("aria-busy","false");var r=i.getActive();this.addAriaAttributes(r)}},{key:"indicatorMouseover",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!0,this.pauseAutoSwitch())}},{key:"indicatorMouseLeave",value:function(e){this._util.autoSwitchDisableHover||(this._state.mouseOnElement=!1,this.setTimeoutForAutoSwitch())}},{key:"getSnapSlideScrollToNode",value:function(e,t){var i=this._util.sliderElem,r=i.clientWidth,s=!1,a=200,n=!0;for("nextElementSibling"===t&&i.scrollLeft+i.clientWidth+i.clientWidth/2>=i.scrollWidth?s=!0:"previousElementSibling"===t&&i.scrollLeft<i.clientWidth&&(s=!0);e&&e[t]&&n;)a+=e.offsetWidth,!s&&a>=r?n=!1:e=e[t];return e}},{key:"checkAndAddActiveClassForNativeOverflow",value:function(){var e=this._util,t=e.elem,i=e.sliderElem;i.scrollWidth<=i.clientWidth?t.classList.add("wf-scrollview-inactive"):t.classList.remove("wf-scrollview-inactive")}},{key:"next",value:function(e){if(!this._util.disableClickNavigation)if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(1,{source:"button",type:"next",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.nextElementSibling,r=this._util.snapBehavior,s=i;i&&("snapSlide"===r&&(s=this.getSnapSlideScrollToNode(s,"nextElementSibling")),t.classList.remove("active"),this._state.activeElem=s,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"next"}))}}}},{key:"resetAutoSwitchState",value:function(){var e=this._util,t=e.elem;e.shouldAutoSwitch&&t.classList.remove("wafer-scrollview-autoswitch-paused-by-user","wafer-scrollview-autoswitch-paused"),this._state.autoSwitchPausedByUser=!1,this._state.mouseOnElement=!1}},{key:"pause",value:function(e){e.preventDefault(),e.stopPropagation(),this.handlePause()}},{key:"prev",value:function(e){if(!this._util.disableClickNavigation)if(e.preventDefault(),e.stopPropagation(),"native"!==this._util.behavior)this.showCurrent(-1,{source:"button",type:"prev",sourceEvent:e});else{var t=this._state.activeElem;if(t){var i=t.previousElementSibling,r=this._util.snapBehavior,s=i;i&&("snapSlide"===r&&(s=this.getSnapSlideScrollToNode(s,"previousElementSibling")),t.classList.remove("active"),this._state.activeElem=s,this._state.activeElem.classList.add("active"),this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"prev"}))}}}},{key:"resume",value:function(e){e.preventDefault(),e.stopPropagation(),this.handleResume()}},{key:"keydown",value:function(e){e=e||window.event,37===e.keyCode?this.showCurrent(-1,{source:"key",type:"prev"}):39===e.keyCode&&this.showCurrent(1,{source:"key",type:"next"})}},{key:"touchstart",value:function(e){if(!this._util.disableTouch){this.pauseAutoSwitch();var t=this._util,i=e.touches[0],r=i.pageX,s=i.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=r,t.drag.startY=s}}},{key:"touchend",value:function(){this._util.disableTouch||(this._util.pointerDown=!1,this.grab({source:"touch"}))}},{key:"touchmove",value:function(e){if(!this._util.disableTouch){var t=this._util,i=t.drag,r=i.startX,s=i.startY,a=e.touches[0],n=a.pageX,l=a.pageY,o=0;i.isVerticalDirection||(Math.abs(s-l)>8&&(i.isVerticalDirection=s>l?1:-1),r!==n&&(o=r>n?1:-1),i.horizontalDirection=o,i.last!==n&&(i.currentDirection=i.last>n?1:-1,i.last=n),t.pointerDown&&(i.endX=n,i.endY=l,this.isValidMove(o)&&(t.drag.grabbing&&e.cancelable&&e.preventDefault(),Math.abs(s-l)>8&&(i.isVerticalDirection=s>l?1:-1),o&&!i.isVerticalDirection&&this.grabbing())))}}},{key:"mousedown",value:function(e){if(!this._util.disableTouch){e.preventDefault&&e.preventDefault();var t=this._util,i=e.pageX,r=e.pageY;t.pointerDown=!0,t.drag.isVerticalDirection=!1,t.drag.startX=i,t.drag.startY=r}}},{key:"mouseover",value:function(){var e=this._util,t=e.autoSwitchDisableHover,i=e.disableTouch;if(!t&&!i){this._state.mouseOnElement=!0;var r=this._util,s=r.elem;r.shouldAutoSwitch&&s.classList.add("wafer-scrollview-autoswitch-paused"),this.pauseAutoSwitch()}}},{key:"mouseup",value:function(){if(!this._util.disableTouch){var e=this._util.sliderElem;Q(e,"-webkit-grab"),this.grab({source:"mouse"})}}},{key:"mouseleave",value:function(e){if(!this._util.disableTouch){var t=this._util.autoSwitchDisableHover;if(e.preventDefault(),!t){this._state.mouseOnElement=!1;var i=this._util,r=i.elem,s=i.shouldAutoSwitch;this._state.autoSwitchPausedByUser||(s&&r.classList.remove("wafer-scrollview-autoswitch-paused"),this.setTimeoutForAutoSwitch())}var a=this._util,n=a.drag,l=a.pointerDown,o=a.sliderElem;if(l){var u=e.pageX,c=e.pageY;n.endX=u,n.endY=c,Q(o,"-webkit-grabbing"),this.grabbing()}}}},{key:"mousemove",value:function(e){if(!this._util.disableTouch){var t=this._util,i=t.pointerDown,r=t.sliderElem,s=t.drag;if(i){var a=e.pageX,n=e.pageY;this._util.pointerDown=!1,Q(r,"-webkit-grab"),s.endX=a,s.endY=n,this.updateAfterDrag(),this.clearDrag()}}}},{key:"tabClick",value:function(e){"native"===this._util.behavior&&(this._util.isUsingScrollSnap&&(this._state.activeElem=e.target,this.snapNativeScrollViewToActiveElement({calledOnLoad:!1,source:"click"})))}},{key:"remove",value:function(){this._util.elem.remove()}},{key:"stateDidUpdate",value:function(){"index"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).stateAttr&&this.scrollToIndex(parseInt(this._util.index,10))}},{key:"destroy",value:function(){this.removeEventListeners(),w(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"negativeWidthCoefficient",get:function(){if(!this.isReady())return 0;var e=this._util,t=e.counter,i=e.dataList,r=e.resizeEnd,s=e.rightPadding;if(t>=i.size-2){if(s)return-s;if(r){var a=i.tail;if(!a)return 0;var n=a.style.width,l=a.getBoundingClientRect().width;a.style.width="";var o=a.getBoundingClientRect(),u=o.width;return a.style.width=n,-(l-Math.min(u,l))}}return 0}}]),t}(S);$.events={click:[["has-scrollsnap-click","tabClick"],["next-btn","next"],["pause-btn","pause"],["prev-btn","prev"],["resume-btn","resume"]],keydown:[["_self","keydown"]],mousedown:[["slides","mousedown"]],mouseleave:[["next-btn","mouseleave"],["prev-btn","mouseleave"],["_self","mouseleave"]],mousemove:[["slides","mousemove"]],mouseover:[["next-btn","mouseover"],["prev-btn","mouseover"],["_self","mouseover"]],mouseup:[["slides","mouseup"]],touchend:[["slides","touchend"]],touchmove:[["slides","touchmove"]],touchstart:[["slides","touchstart"]]};var ee=$,te=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),ie=function e(t,i,r){null===t&&(t=Function.prototype);var s=Object.getOwnPropertyDescriptor(t,i);if(void 0===s){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in s)return s.value;var n=s.get;if(void 0!==n)return n.call(r)},re=window.wafer,se=re.base,ae=re.controllers,ne=re.utils,le=ne.elementInView,oe=ne.throttle,ue=ae.WaferBaseController,ce=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=e.root,r=void 0===i?document:i,s=e.selector,a=void 0===s?".wafer-scrollview":s;o(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,{root:r,selector:a,WaferClass:ee}));return n.sync(),n._validateWithThrottle=oe(function(){n.validate()},25,n),n}return c(t,e),te(t,[{key:"handleVisibilityChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this._state.elementInstances,i=!0,r=!1,s=void 0;try{for(var a,n=t.values()[Symbol.iterator]();!(i=(a=n.next()).done);i=!0){var l=a.value,o=l.instance;if(o._util.shouldAutoSwitch)if(e){var u=o._state.autoSwitchPausedByUser;if(u)return;o.resetAutoSwitchState(),o.setTimeoutForAutoSwitch({force:!0})}else o.pauseAutoSwitch()}}catch(e){r=!0,s=e}finally{try{!i&&n.return&&n.return()}finally{if(r)throw s}}}},{key:"handleScroll",value:function(){this._validateWithThrottle()}},{key:"handleResize",value:function(){this._validateWithThrottle(),ie(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"handleResize",this).call(this)}},{key:"willValidate",value:function(e){var t=this._state.elementInstances;e.forEach(function(e){var i=t.get(e),r=i.instance;r._util.shouldAutoSwitch&&(le(e,{offsetX:0,offsetY:0},se.viewport)?r.setTimeoutForAutoSwitch():r.pauseAutoSwitch())})}}]),t}(ue),de=ce;t.default=new de({})}})});