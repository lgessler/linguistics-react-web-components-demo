!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(6)},function(e,t,n){var o=n(2);"string"==typeof o&&(o=[[e.i,o,""]]);n(4)(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}pre{text-align:left;text-align:initial}code{font-family:source-code-pro,Menlo,Monaco,Consolas,"Courier New",monospace}body,html{height:100%}body{background:#f0f0f0;margin:0 auto;line-height:1.5;max-width:800px}p{margin:1.5em 0}.token-list{background-color:#888;display:inline-flex;flex:1 1 auto;min-height:50px;padding:4px}.token{display:flex;flex-direction:column;justify-content:space-evenly}.token>*{background-color:#ddd;padding:4px;margin:2px;text-align:left;border:none}.token>.editing{background-color:#fff}.token>span.key{background-color:transparent;background-color:initial;font-style:italic}',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=function(e){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),n="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(n," */")}(o),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);o&&r[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},function(e,t,n){var o,r,a,i={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=o.apply(this,arguments)),r}),u=(a={},function(e,t){if("function"==typeof e)return e();if(void 0===a[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}a[e]=n}return a[e]}),c=null,p=0,l=[],f=n(5);function d(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(y(o.parts[a],t))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(y(o.parts[a],t));i[o.id]={id:o.id,refs:1,parts:s}}}}function _(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};o[i]?o[i].parts.push(s):n.push(o[i]={id:i,parts:[s]})}return n}function g(e,t){var n=u(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=u(e.insertAt.before,n);n.insertBefore(t,r)}}function m(e){var t;null!==e.parentNode&&(e.parentNode.removeChild(e),0<=(t=l.indexOf(e))&&l.splice(t,1))}function b(e){var t,o=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0!==e.attrs.nonce||(t=n.nc)&&(e.attrs.nonce=t),h(o,e.attrs),g(e,o),o}function h(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,o,r,a,i,s,u;if(t.transform&&e.css){if(!(n="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=n}return i=t.singleton?(o=p++,r=c=c||b(t),a=E.bind(null,r,o,!1),E.bind(null,r,o,!0)):e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=t,u=document.createElement("link"),void 0===s.attrs.type&&(s.attrs.type="text/css"),s.attrs.rel="stylesheet",h(u,s.attrs),g(s,u),a=function(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=f(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,r=u,t),function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(t),a=function(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),function(){m(r)}),a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=_(e,t);return d(n,t),function(e){for(var o=[],r=0;r<n.length;r++){var a=n[r];(s=i[a.id]).refs--,o.push(s)}e&&d(_(e,t),t);var s;for(r=0;r<o.length;r++)if(0===(s=o[r]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete i[s.id]}}};var v,C=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function E(e,t,n,o){var r,a,i=n?"":o.css;e.styleSheet?e.styleSheet.cssText=C(t,i):(r=document.createTextNode(i),(a=e.childNodes)[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r))}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(r=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:o+a.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(module,exports){(this["webpackJsonplinguistics-react-web-components-demo"]=this["webpackJsonplinguistics-react-web-components-demo"]||[]).push([[0],{13:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return mount}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(10),react_dom__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__),react_tools__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(14),react_tools__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react_tools__WEBPACK_IMPORTED_MODULE_2__),ReactTransform=react_tools__WEBPACK_IMPORTED_MODULE_2__.transformWithDetails,objectKeys=Object.keys||objectKeysShim,selfClosingTags=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],preserveReactAttributes=["onBeforeInput","onBeforeInputCapture","onCompositionEnd","onCompositionEndCapture","onCompositionStart","onCompositionStartCapture","onCompositionUpdate","onCompositionUpdateCapture","onChange","onChangeCapture","ResponderEventPlugin","SimpleEventPlugin","TapEventPlugin","EnterLeaveEventPlugin","ChangeEventPlugin","SelectEventPlugin","BeforeInputEventPlugin","AnalyticsEventPlugin","MobileSafariClickEventPlugin","onMouseEnter","onMouseLeave","onSelect","onSelectCapture","onBlur","onBlurCapture","onClick","onClickCapture","onContextMenu","onContextMenuCapture","onCopy","onCopyCapture","onCut","onCutCapture","onDoubleClick","onDoubleClickCapture","onDrag","onDragCapture","onDragEnd","onDragEndCapture","onDragEnter","onDragEnterCapture","onDragExit","onDragExitCapture","onDragLeave","onDragLeaveCapture","onDragOver","onDragOverCapture","onDragStart","onDragStartCapture","onDrop","onDropCapture","onFocus","onFocusCapture","onInput","onInputCapture","onKeyDown","onKeyDownCapture","onKeyPress","onKeyPressCapture","onKeyUp","onKeyUpCapture","onLoad","onLoadCapture","onError","onErrorCapture","onMouseDown","onMouseDownCapture","onMouseMove","onMouseMoveCapture","onMouseOut","onMouseOutCapture","onMouseOver","onMouseOverCapture","onMouseUp","onMouseUpCapture","onPaste","onPasteCapture","onReset","onResetCapture","onScroll","onScrollCapture","onSubmit","onSubmitCapture","onTouchCancel","onTouchCancelCapture","onTouchEnd","onTouchEndCapture","onTouchMove","onTouchMoveCapture","onTouchStart","onTouchStartCapture","onWheel","onWheelCapture","className"];function getNodes(e,t){for(var n,o,r,a,i=objectKeys(e),s=[],u=0;u<i.length;u++)i[u]=i[u].toUpperCase();if(0<=i.indexOf(t.nodeName.toUpperCase()))return[t];for(var c=0;c<i.length;c++)for(n=t.getElementsByTagName(i[c]),a=0;a<n.length;a++){for(o=n[a],r=!0;o=o.parentNode;){if(0<=i.indexOf(o.nodeName.toUpperCase())){r=!1;break}if(o===t)break}r&&s.push(n[a])}return s}function htmlToComponent(str,tags,opts){for(var keys=objectKeys(tags),props=opts.props||{},preserveAttributes=opts.preserveAttributes||[],tagAttributes=[],reactTags={},reactKeys=[],key,i=0;i<keys.length;i++){if(key="AB"+Math.random().toString(36).substring(2),"function"!=typeof tags[keys[i]]){if("function"!=typeof tags[keys[i]].slice)continue;tagAttributes=tags[keys[i]].slice(0,-1),reactTags[key]=tags[keys[i]].slice(-1)[0]}else reactTags[key]=tags[keys[i]];reactKeys.push(key),str=str.replace(new RegExp("(</?)"+keys[i]+"(?:[^>\"']|\".*\"|'.*')*>","ig"),(function(e,t){if("</"!==t)for(var n=0;n<tagAttributes.length;n++)e=replaceAttribute(e,tagAttributes[n],tagAttributes[n]);return e.replace(new RegExp(t+keys[i]+"(\\s|>)","i"),t+key+"$1")}))}str=str.replace(/<!--|-->/g,"");for(var attributes=preserveReactAttributes.concat(preserveAttributes),i=0;i<attributes.length;i++)str=replaceAttribute(str,attributes[i],attributes[i]);var jsx=htmlToJsx(str);for(var key in props)jsx=jsx.replace(new RegExp("({"+key+"})","g"),"{props['"+key+"']}");for(var component=ReactTransform(jsx).code,i=0;i<reactKeys.length;i++)component=component.replace(new RegExp(reactKeys[i],"g"),"reactTags['"+reactKeys[i]+"']");var React=react__WEBPACK_IMPORTED_MODULE_0___default.a;return console.log("evaling: ",component),eval(component)}function htmlToJsx(e){e=replaceAttribute(e,"for","htmlFor"),e=replaceAttribute(e,"class","className");for(var t=0;t<selfClosingTags.length;t++)e=e.replace(new RegExp("(<"+selfClosingTags[t]+"(?:[^>\"']|\".*\"|'.*')*)/?>","ig"),"$1 />");return(e=e.replace(/<(?:[^>\"']|\".*\"|'.*')*=(?:[^>\"']|\".*\"|'.*')*>/g,(function(e){return e.replace(/(?:"|')?(\{(?:[^\'"}]|".*"|'.*')*\})(?:"|')?(?:=""|='')?/g,"$1")}))).replace(/(<(?:[^>"']|".*"|'.*')*\sstyle\s*=\s*)((?:"(?:[^"]|\s)*")|(?:'(?:[^']|\s)*'))((?:[^>"']|".*"|'.*')*>)/gi,(function(e,t,n,o){var r="";return n.slice(1,-1).replace(/(&quot)|'/g,'"').replace(/\s*([^:;]*)\s*:\s*((?:[^;"]|".*")*)\s*;?/g,(function(e,t,n){return t=t.replace(/-([^-]*)/g,(function(e,t){return"ms"===t?t:t.charAt(0).toUpperCase()+t.slice(1)})),r+=t+":'"+n+"',",e})),t+"{{"+r.slice(0,-1)+"}}"+o}))}function mount(e,t){for(var n,o,r=getNodes(e,(t=t||{}).context||document.body),a=0;a<r.length;a++)n=htmlToComponent(r[a].outerHTML,e,t),console.log(n),(o="object"==typeof t.wrapper&&"function"==typeof t.wrapper.cloneNode?t.wrapper.cloneNode(!1):document.createElement("div")).className+=o.className?" react-mount":"react-mount",r[a].parentNode.replaceChild(o,r[a]),react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(n,o)}function objectKeysShim(e){var t,n=[];for(t in e)n.push(t);return n}function replaceAttribute(e,t,n){return e.replace(new RegExp("(<(?:[^>\"']|\".*\"|'.*')*\\s)"+t+"(s*=(?:[^>\"']|\".*\"|'.*')*>)","ig"),"$1"+n+"$2")}"object"==typeof window.React&&(window.React.mount=mount)},15:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t),n(5),n(10);var o=n(13);n(46),window.MOUNT=o.a},46:function(e,t,n){},9:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,(e.exports=n).id=9}},[[15,1,2]]])}]);