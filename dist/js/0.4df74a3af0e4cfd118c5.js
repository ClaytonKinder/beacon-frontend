webpackJsonp([0],{489:function(t,e,r){function n(t){r(586)}var a=r(16)(r(588),r(602),n,null,null);t.exports=a.exports},498:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.regex=e.ref=e.len=e.req=e.withParams=void 0;var n=r(502),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.withParams=a.default;var o=e.req=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t||!1===t)return!1;if("object"==typeof t){for(var e in t)return!0;return!1}return!!String(t).length};e.len=function(t){return Array.isArray(t)?t.length:"object"==typeof t?Object.keys(t).length:String(t).length},e.ref=function(t,e,r){return"function"==typeof t?t.call(e,r):r[t]},e.regex=function(t,e){return(0,a.default)({type:t},function(t){return!o(t)||e.test(t)})}},499:function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.url=e.sameAs=e.requiredUnless=e.requiredIf=e.required=e.minLength=e.maxLength=e.email=e.between=e.numeric=e.alphaNum=e.alpha=void 0;var a=r(501),o=n(a),i=r(503),s=n(i),u=r(504),c=n(u),l=r(505),f=n(l),d=r(506),m=n(d),p=r(507),v=n(p),h=r(508),g=n(h),y=r(509),w=n(y),_=r(510),b=n(_),x=r(511),D=n(x),F=r(512),P=n(F),q=r(513),$=n(q),O=r(514),j=n(O),A=r(515),C=n(A);e.alpha=o.default,e.alphaNum=s.default,e.numeric=c.default,e.between=f.default,e.email=m.default,e.maxLength=v.default,e.minLength=g.default,e.required=w.default,e.requiredIf=b.default,e.requiredUnless=D.default,e.sameAs=P.default,e.url=$.default,e.or=j.default,e.and=C.default},500:function(t,e,r){var n=r(87),a=r(15)("toStringTag"),o="Arguments"==n(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=i(e=Object(t),a))?r:o?n(e):"Object"==(s=n(e))&&"function"==typeof e.callee?"Arguments":s}},501:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=(0,n.regex)("alpha",/^[a-zA-Z]*$/)},502:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(259).withParams;e.default=n},503:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=(0,n.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},504:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=(0,n.regex)("numeric",/^[0-9]*$/)},505:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t,e){return(0,n.withParams)({type:"between",min:t,max:e},function(r){return!(0,n.req)(r)||!/\s/.test(r)&&+t<=+r&&+e>=+r})}},506:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498),a=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;e.default=(0,n.regex)("email",a)},507:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t){return(0,n.withParams)({type:"maxLength",max:t},function(e){return!(0,n.req)(e)||(0,n.len)(e)<=t})}},508:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t){return(0,n.withParams)({type:"minLength",min:t},function(e){return!(0,n.req)(e)||(0,n.len)(e)>=t})}},509:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=(0,n.withParams)({type:"required"},n.req)},510:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t){return(0,n.withParams)({type:"requiredIf",prop:t},function(e,r){return!(0,n.ref)(t,this,r)||(0,n.req)(e)})}},511:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t){return(0,n.withParams)({type:"requiredUnless",prop:t},function(e,r){return!!(0,n.ref)(t,this,r)||(0,n.req)(e)})}},512:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(t){return(0,n.withParams)({type:"sameAs",eq:t},function(e,r){return e===(0,n.ref)(t,this,r)})}},513:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498),a=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;e.default=(0,n.regex)("url",a)},514:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"or"},function(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.length>0&&e.reduce(function(e,r){return e||r.apply(t,n)},!1)})}},515:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(498);e.default=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,n.withParams)({type:"and"},function(){for(var t=this,r=arguments.length,n=Array(r),a=0;a<r;a++)n[a]=arguments[a];return e.length>0&&e.reduce(function(e,r){return e&&r.apply(t,n)},!0)})}},516:function(t,e,r){var n=r(33);t.exports=function(t,e,r,a){try{return a?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},517:function(t,e,r){var n=r(48),a=r(15)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[a]===t)}},518:function(t,e,r){var n=r(500),a=r(15)("iterator"),o=r(48);t.exports=r(32).getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||o[n(t)]}},519:function(t,e,r){var n=r(15)("iterator"),a=!1;try{var o=[7][n]();o.return=function(){a=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var r=!1;try{var o=[7],i=o[n]();i.next=function(){return{done:r=!0}},o[n]=function(){return i},t(o)}catch(t){}return r}},520:function(t,e,r){"use strict";function n(t){var e,r;this.promise=new t(function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n}),this.resolve=a(e),this.reject=a(r)}var a=r(255);t.exports.f=function(t){return new n(t)}},521:function(t,e,r){t.exports={default:r(522),__esModule:!0}},522:function(t,e,r){r(258),r(523),t.exports=r(32).Array.from},523:function(t,e,r){"use strict";var n=r(253),a=r(86),o=r(260),i=r(516),s=r(517),u=r(256),c=r(524),l=r(518);a(a.S+a.F*!r(519)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,a,f,d=o(t),m="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,h=void 0!==v,g=0,y=l(d);if(h&&(v=n(v,p>2?arguments[2]:void 0,2)),void 0==y||m==Array&&s(y))for(e=u(d.length),r=new m(e);e>g;g++)c(r,g,h?v(d[g],g):d[g]);else for(f=y.call(d),r=new m;!(a=f.next()).done;g++)c(r,g,h?i(f,v,[a.value,g],!0):a.value);return r.length=g,r}})},524:function(t,e,r){"use strict";var n=r(17),a=r(36);t.exports=function(t,e,r){e in t?n.f(t,e,a(0,r)):t[e]=r}},525:function(t,e,r){var n=r(253),a=r(516),o=r(517),i=r(33),s=r(256),u=r(518),c={},l={},e=t.exports=function(t,e,r,f,d){var m,p,v,h,g=d?function(){return t}:u(t),y=n(r,f,e?2:1),w=0;if("function"!=typeof g)throw TypeError(t+" is not iterable!");if(o(g)){for(m=s(t.length);m>w;w++)if((h=e?y(i(p=t[w])[0],p[1]):y(t[w]))===c||h===l)return h}else for(v=g.call(t);!(p=v.next()).done;)if((h=a(v,y,p.value,e))===c||h===l)return h};e.BREAK=c,e.RETURN=l},526:function(t,e,r){var n=r(33),a=r(255),o=r(15)("species");t.exports=function(t,e){var r,i=n(t).constructor;return void 0===i||void 0==(r=n(i)[o])?e:a(r)}},527:function(t,e,r){var n,a,o,i=r(253),s=r(540),u=r(264),c=r(89),l=r(9),f=l.process,d=l.setImmediate,m=l.clearImmediate,p=l.MessageChannel,v=l.Dispatch,h=0,g={},y=function(){var t=+this;if(g.hasOwnProperty(t)){var e=g[t];delete g[t],e()}},w=function(t){y.call(t.data)};d&&m||(d=function(t){for(var e=[],r=1;arguments.length>r;)e.push(arguments[r++]);return g[++h]=function(){s("function"==typeof t?t:Function(t),e)},n(h),h},m=function(t){delete g[t]},"process"==r(87)(f)?n=function(t){f.nextTick(i(y,t,1))}:v&&v.now?n=function(t){v.now(i(y,t,1))}:p?(a=new p,o=a.port2,a.port1.onmessage=w,n=i(o.postMessage,o,1)):l.addEventListener&&"function"==typeof postMessage&&!l.importScripts?(n=function(t){l.postMessage(t+"","*")},l.addEventListener("message",w,!1)):n="onreadystatechange"in c("script")?function(t){u.appendChild(c("script")).onreadystatechange=function(){u.removeChild(this),y.call(t)}}:function(t){setTimeout(i(y,t,1),0)}),t.exports={set:d,clear:m}},528:function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},529:function(t,e,r){var n=r(33),a=r(35),o=r(520);t.exports=function(t,e){if(n(t),a(e)&&e.constructor===t)return e;var r=o.f(t);return(0,r.resolve)(e),r.promise}},530:function(t,e,r){"use strict";var n=r(34);e.a={getUserByEmail:function(t){return n.a.http.get("user/getuser/"+t)},updateUserSettings:function(t){return n.a.http.post("user/updateusersettings",t)},updateUserInformation:function(t){return n.a.http.post("user/updateuserinformation",t)},updateUserEmail:function(t){return n.a.http.post("user/updateuseremail",t)},updateUserPassword:function(t){return n.a.http.post("user/updateuserpassword",t)},completeTutorialTour:function(t){return n.a.http.post("user/completetutorialtour",t)},addCorrectedAddress:function(t){return n.a.http.post("user/addcorrectedaddress",t)},deleteCorrectedAddress:function(t){return n.a.http.post("user/deletecorrectedaddress",t)}}},531:function(t,e){t.exports=function(t,e,r,n){if(!(t instanceof e)||void 0!==n&&n in t)throw TypeError(r+": incorrect invocation!");return t}},532:function(t,e,r){var n=r(18);t.exports=function(t,e,r){for(var a in e)r&&t[a]?t[a]=e[a]:n(t,a,e[a]);return t}},537:function(t,e,r){t.exports={default:r(538),__esModule:!0}},538:function(t,e,r){r(262),r(258),r(261),r(539),r(543),r(544),t.exports=r(32).Promise},539:function(t,e,r){"use strict";var n,a,o,i,s=r(50),u=r(9),c=r(253),l=r(500),f=r(86),d=r(35),m=r(255),p=r(531),v=r(525),h=r(526),g=r(527).set,y=r(541)(),w=r(520),_=r(528),b=r(529),x=u.TypeError,D=u.process,F=u.Promise,P="process"==l(D),q=function(){},$=a=w.f,O=!!function(){try{var t=F.resolve(1),e=(t.constructor={})[r(15)("species")]=function(t){t(q,q)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(q)instanceof e}catch(t){}}(),j=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},A=function(t,e){if(!t._n){t._n=!0;var r=t._c;y(function(){for(var n=t._v,a=1==t._s,o=0;r.length>o;)!function(e){var r,o,i=a?e.ok:e.fail,s=e.resolve,u=e.reject,c=e.domain;try{i?(a||(2==t._h&&E(t),t._h=1),!0===i?r=n:(c&&c.enter(),r=i(n),c&&c.exit()),r===e.promise?u(x("Promise-chain cycle")):(o=j(r))?o.call(r,s,u):s(r)):u(n)}catch(t){u(t)}}(r[o++]);t._c=[],t._n=!1,e&&!t._h&&C(t)})}},C=function(t){g.call(u,function(){var e,r,n,a=t._v,o=k(t);if(o&&(e=_(function(){P?D.emit("unhandledRejection",a,t):(r=u.onunhandledrejection)?r({promise:t,reason:a}):(n=u.console)&&n.error&&n.error("Unhandled promise rejection",a)}),t._h=P||k(t)?2:1),t._a=void 0,o&&e.e)throw e.v})},k=function(t){if(1==t._h)return!1;for(var e,r=t._a||t._c,n=0;r.length>n;)if(e=r[n++],e.fail||!k(e.promise))return!1;return!0},E=function(t){g.call(u,function(){var e;P?D.emit("rejectionHandled",t):(e=u.onrejectionhandled)&&e({promise:t,reason:t._v})})},M=function(t){var e=this;e._d||(e._d=!0,e=e._w||e,e._v=t,e._s=2,e._a||(e._a=e._c.slice()),A(e,!0))},N=function(t){var e,r=this;if(!r._d){r._d=!0,r=r._w||r;try{if(r===t)throw x("Promise can't be resolved itself");(e=j(t))?y(function(){var n={_w:r,_d:!1};try{e.call(t,c(N,n,1),c(M,n,1))}catch(t){M.call(n,t)}}):(r._v=t,r._s=1,A(r,!1))}catch(t){M.call({_w:r,_d:!1},t)}}};O||(F=function(t){p(this,F,"Promise","_h"),m(t),n.call(this);try{t(c(N,this,1),c(M,this,1))}catch(t){M.call(this,t)}},n=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},n.prototype=r(532)(F.prototype,{then:function(t,e){var r=$(h(this,F));return r.ok="function"!=typeof t||t,r.fail="function"==typeof e&&e,r.domain=P?D.domain:void 0,this._c.push(r),this._a&&this._a.push(r),this._s&&A(this,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new n;this.promise=t,this.resolve=c(N,t,1),this.reject=c(M,t,1)},w.f=$=function(t){return t===F||t===i?new o(t):a(t)}),f(f.G+f.W+f.F*!O,{Promise:F}),r(49)(F,"Promise"),r(542)("Promise"),i=r(32).Promise,f(f.S+f.F*!O,"Promise",{reject:function(t){var e=$(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(s||!O),"Promise",{resolve:function(t){return b(s&&this===i?F:this,t)}}),f(f.S+f.F*!(O&&r(519)(function(t){F.all(t).catch(q)})),"Promise",{all:function(t){var e=this,r=$(e),n=r.resolve,a=r.reject,o=_(function(){var r=[],o=0,i=1;v(t,!1,function(t){var s=o++,u=!1;r.push(void 0),i++,e.resolve(t).then(function(t){u||(u=!0,r[s]=t,--i||n(r))},a)}),--i||n(r)});return o.e&&a(o.v),r.promise},race:function(t){var e=this,r=$(e),n=r.reject,a=_(function(){v(t,!1,function(t){e.resolve(t).then(r.resolve,n)})});return a.e&&n(a.v),r.promise}})},540:function(t,e){t.exports=function(t,e,r){var n=void 0===r;switch(e.length){case 0:return n?t():t.call(r);case 1:return n?t(e[0]):t.call(r,e[0]);case 2:return n?t(e[0],e[1]):t.call(r,e[0],e[1]);case 3:return n?t(e[0],e[1],e[2]):t.call(r,e[0],e[1],e[2]);case 4:return n?t(e[0],e[1],e[2],e[3]):t.call(r,e[0],e[1],e[2],e[3])}return t.apply(r,e)}},541:function(t,e,r){var n=r(9),a=r(527).set,o=n.MutationObserver||n.WebKitMutationObserver,i=n.process,s=n.Promise,u="process"==r(87)(i);t.exports=function(){var t,e,r,c=function(){var n,a;for(u&&(n=i.domain)&&n.exit();t;){a=t.fn,t=t.next;try{a()}catch(n){throw t?r():e=void 0,n}}e=void 0,n&&n.enter()};if(u)r=function(){i.nextTick(c)};else if(o){var l=!0,f=document.createTextNode("");new o(c).observe(f,{characterData:!0}),r=function(){f.data=l=!l}}else if(s&&s.resolve){var d=s.resolve();r=function(){d.then(c)}}else r=function(){a.call(n,c)};return function(n){var a={fn:n,next:void 0};e&&(e.next=a),t||(t=a,r()),e=a}}},542:function(t,e,r){"use strict";var n=r(9),a=r(32),o=r(17),i=r(19),s=r(15)("species");t.exports=function(t){var e="function"==typeof a[t]?a[t]:n[t];i&&e&&!e[s]&&o.f(e,s,{configurable:!0,get:function(){return this}})}},543:function(t,e,r){"use strict";var n=r(86),a=r(32),o=r(9),i=r(526),s=r(529);n(n.P+n.R,"Promise",{finally:function(t){var e=i(this,a.Promise||o.Promise),r="function"==typeof t;return this.then(r?function(r){return s(e,t()).then(function(){return r})}:t,r?function(r){return s(e,t()).then(function(){throw r})}:t)}})},544:function(t,e,r){"use strict";var n=r(86),a=r(520),o=r(528);n(n.S,"Promise",{try:function(t){var e=a.f(this),r=o(t);return(r.e?e.reject:e.resolve)(r.v),e.promise}})},566:function(t,e,r){var n=r(253),a=r(266),o=r(260),i=r(256),s=r(593);t.exports=function(t,e){var r=1==t,u=2==t,c=3==t,l=4==t,f=6==t,d=5==t||f,m=e||s;return function(e,s,p){for(var v,h,g=o(e),y=a(g),w=n(s,p,3),_=i(y.length),b=0,x=r?m(e,_):u?m(e,0):void 0;_>b;b++)if((d||b in y)&&(v=y[b],h=w(v,b,g),t))if(r)x[b]=h;else if(h)switch(t){case 3:return!0;case 5:return v;case 6:return b;case 2:x.push(v)}else if(l)return!1;return f?-1:c||l?l:x}}},581:function(t,e,r){var n=r(35);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},586:function(t,e,r){var n=r(587);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(478)("9ffeb2ee",n,!0)},587:function(t,e,r){e=t.exports=r(477)(void 0),e.push([t.i,".account-card:not(:first-of-type){margin-top:2rem}.account-card .account-card-title{color:#fff}.account-card form{padding:0 1rem 1.5rem}.account-card form .q-field-label-inner{width:100%!important}.account-card form .q-radio:not(:last-of-type){margin-bottom:.25rem}.account-card form .q-option .q-option-label{color:rgba(0,0,0,.54)}.account-card form .button-wrapper{margin-top:1rem}",""])},588:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(589),a=r.n(n),o=r(263),i=r.n(o),s=r(537),u=r.n(s),c=r(590),l=r.n(c),f=r(47),d=r(499),m=(r.n(d),r(88)),p=r(530),v=r(254),h=r(257),g=new l.a;e.default={name:"account",mixins:[v.a,h.a],components:{QBtn:f.e,QCard:f.f,QCardTitle:f.i,QField:f.p,QInput:f.s,QDatetime:f.o,QRadio:f.E,QList:f.z,QCollapsible:f.n,QInnerLoading:f.r,QSpinnerGears:f.L},data:function(){return{informationFormData:{userId:this.$store.state.user._id||"",firstName:this.$store.state.user.firstName||"",lastName:this.$store.state.user.lastName||"",gender:this.$store.state.user.gender||null,dateOfBirth:this.$store.state.user.dateOfBirth||""},emailFormData:{userId:this.$store.state.user._id||"",email:this.$store.state.user.email||""},passwordFormData:{userId:this.$store.state.user._id||"",currentPassword:"",newPassword:"",newPasswordConfirmation:""},originalInformationFormData:null,originalEmailFormData:null,originalPasswordFormData:null,emailErrorText:"Please enter a valid email address",loading:!1}},validations:{informationFormData:{firstName:{required:d.required,maxLength:Object(d.maxLength)(50)},lastName:{required:d.required,maxLength:Object(d.maxLength)(50)},dateOfBirth:{required:d.required,isInThePast:function(t){var e=new Date(t),r=new Date;return r.setHours(0,0,0,0),e<r},isOlderThanEighteen:function(t){var e=new Date,r=new Date(t),n=e.getFullYear()-r.getFullYear(),a=e.getMonth()-r.getMonth();return(a<0||0===a&&e.getDate()<r.getDate())&&n--,n>=18}}},emailFormData:{email:{required:d.required,email:d.email,maxLength:Object(d.maxLength)(100),isUnique:function(t){var e=this;return""===t.trim()||(this.emailErrorText="",new u.a(function(r,n){m.a.checkIfEmailIsUnique(t).then(function(t){t.body?e.emailErrorText="Please enter a valid email address":e.emailErrorText="This email address is already in use",r(t.body)}).catch(function(t){n(t.body.message),e.createToast("negative",t.body.message)})}))}}},passwordFormData:{currentPassword:{required:d.required,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(50)},newPassword:{required:d.required,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(50)},newPasswordConfirmation:{required:d.required,minLength:Object(d.minLength)(8),maxLength:Object(d.maxLength)(50),sameAsPassword:Object(d.sameAs)("newPassword")}}},methods:{updateUserInformation:function(){var t=this;this.loading||(this.loading=!0,p.a.updateUserInformation(this.informationFormData).then(function(e){t.loading=!1,t.originalInformationFormData=JSON.parse(i()(t.informationFormData)),t.$store.commit("updateUser",e.body),t.createToast("positive","Your information was successfully updated")}).catch(function(e){t.loading=!1,t.createToast("negative",e.body.message)}))},updateUserEmail:function(){var t=this;this.loading||(this.loading=!0,p.a.updateUserEmail(this.emailFormData).then(function(e){t.loading=!1,t.originalEmailFormData=JSON.parse(i()(t.emailFormData)),t.$store.commit("updateUser",e.body),t.createToast("positive","Your email was successfully updated")}).catch(function(e){t.loading=!1,t.createToast("negative",e.body.message)}))},updateUserPassword:function(){var t=this;this.loading||(this.loading=!0,p.a.updateUserPassword(this.passwordFormData).then(function(e){t.loading=!1,[].concat(a()(document.querySelectorAll('form[name="userPasswordForm"] input'))).map(function(t){t.blur()}),t.originalPasswordFormData={},t.passwordFormData={},t.$v.passwordFormData.$reset(),t.$store.commit("updateUser",e.body),t.createToast("positive","Your password was successfully updated")}).catch(function(e){t.loading=!1,t.createToast("negative",e.body.message)}))},delayTouch:function(t){t.$reset(),g.has(t)&&clearTimeout(g.get(t)),g.set(t,setTimeout(t.$touch,250))},openDeleteAccountDialog:function(){var t=this;f.c.create({title:"Are you sure you want to delete your account?",message:"This can never be undone and all of your data will be permanently deleted.",buttons:["Cancel",{label:"Delete account",color:"negative",handler:function(){t.loading=!0,m.a.deleteAccount({userId:t.$store.state.user._id}).then(function(e){t.loading=!1,e.body.extinguishSocketObj&&t.$socket.emit("extinguishBeacon",e.body.extinguishSocketObj),e.body.denySocketObj&&t.$socket.emit("denyConnectionRequest",e.body.denySocketObj),t.$cookie.delete("token"),t.$router.push("/")}).catch(function(){t.loading=!1,t.createToast("negative","Unable to delete your account at this time")})}}]})},deleteCorrectedAddress:function(t){var e=this;if(!this.loading){this.loading=!0;var r={userId:this.$store.state.user._id,correctedAddressId:t._id};p.a.deleteCorrectedAddress(r).then(function(t){e.loading=!1,t.body&&e.$store.commit("updateUser",t.body)}).catch(function(){e.createToast("negative","Could not delete the corrected address at this time"),e.loading=!1})}}},mounted:function(){this.originalInformationFormData=JSON.parse(i()(this.informationFormData)),this.originalEmailFormData=JSON.parse(i()(this.emailFormData)),this.originalPasswordFormData=JSON.parse(i()(this.passwordFormData))}}},589:function(t,e,r){"use strict";e.__esModule=!0;var n=r(521),a=function(t){return t&&t.__esModule?t:{default:t}}(n);e.default=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return(0,a.default)(t)}},590:function(t,e,r){t.exports={default:r(591),__esModule:!0}},591:function(t,e,r){r(262),r(261),r(592),r(598),r(600),t.exports=r(32).WeakMap},592:function(t,e,r){"use strict";var n,a=r(566)(0),o=r(90),i=r(265),s=r(595),u=r(596),c=r(35),l=r(37),f=r(581),d=i.getWeak,m=Object.isExtensible,p=u.ufstore,v={},h=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},g={get:function(t){if(c(t)){var e=d(t);return!0===e?p(f(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return u.def(f(this,"WeakMap"),t,e)}},y=t.exports=r(597)("WeakMap",h,g,u,!0,!0);l(function(){return 7!=(new y).set((Object.freeze||Object)(v),7).get(v)})&&(n=u.getConstructor(h,"WeakMap"),s(n.prototype,g),i.NEED=!0,a(["delete","has","get","set"],function(t){var e=y.prototype,r=e[t];o(e,t,function(e,a){if(c(e)&&!m(e)){this._f||(this._f=new n);var o=this._f[t](e,a);return"set"==t?this:o}return r.call(this,e,a)})}))},593:function(t,e,r){var n=r(594);t.exports=function(t,e){return new(n(t))(e)}},594:function(t,e,r){var n=r(35),a=r(267),o=r(15)("species");t.exports=function(t){var e;return a(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!a(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},595:function(t,e,r){"use strict";var n=r(51),a=r(91),o=r(52),i=r(260),s=r(266),u=Object.assign;t.exports=!u||r(37)(function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach(function(t){e[t]=t}),7!=u({},t)[r]||Object.keys(u({},e)).join("")!=n})?function(t,e){for(var r=i(t),u=arguments.length,c=1,l=a.f,f=o.f;u>c;)for(var d,m=s(arguments[c++]),p=l?n(m).concat(l(m)):n(m),v=p.length,h=0;v>h;)f.call(m,d=p[h++])&&(r[d]=m[d]);return r}:u},596:function(t,e,r){"use strict";var n=r(532),a=r(265).getWeak,o=r(33),i=r(35),s=r(531),u=r(525),c=r(566),l=r(11),f=r(581),d=c(5),m=c(6),p=0,v=function(t){return t._l||(t._l=new h)},h=function(){this.a=[]},g=function(t,e){return d(t.a,function(t){return t[0]===e})};h.prototype={get:function(t){var e=g(this,t);if(e)return e[1]},has:function(t){return!!g(this,t)},set:function(t,e){var r=g(this,t);r?r[1]=e:this.a.push([t,e])},delete:function(t){var e=m(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,r,o){var c=t(function(t,n){s(t,c,e,"_i"),t._t=e,t._i=p++,t._l=void 0,void 0!=n&&u(n,r,t[o],t)});return n(c.prototype,{delete:function(t){if(!i(t))return!1;var r=a(t);return!0===r?v(f(this,e)).delete(t):r&&l(r,this._i)&&delete r[this._i]},has:function(t){if(!i(t))return!1;var r=a(t);return!0===r?v(f(this,e)).has(t):r&&l(r,this._i)}}),c},def:function(t,e,r){var n=a(o(e),!0);return!0===n?v(t).set(e,r):n[t._i]=r,t},ufstore:v}},597:function(t,e,r){"use strict";var n=r(9),a=r(86),o=r(265),i=r(37),s=r(18),u=r(532),c=r(525),l=r(531),f=r(35),d=r(49),m=r(17).f,p=r(566)(0),v=r(19);t.exports=function(t,e,r,h,g,y){var w=n[t],_=w,b=g?"set":"add",x=_&&_.prototype,D={};return v&&"function"==typeof _&&(y||x.forEach&&!i(function(){(new _).entries().next()}))?(_=e(function(e,r){l(e,_,t,"_c"),e._c=new w,void 0!=r&&c(r,g,e[b],e)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(t){var e="add"==t||"set"==t;t in x&&(!y||"clear"!=t)&&s(_.prototype,t,function(r,n){if(l(this,_,t),!e&&y&&!f(r))return"get"==t&&void 0;var a=this._c[t](0===r?0:r,n);return e?this:a})}),y||m(_.prototype,"size",{get:function(){return this._c.size}})):(_=h.getConstructor(e,t,g,b),u(_.prototype,r),o.NEED=!0),d(_,t),D[t]=_,a(a.G+a.W+a.F,D),y||h.setStrong(_,t,g),_}},598:function(t,e,r){r(599)("WeakMap")},599:function(t,e,r){"use strict";var n=r(86);t.exports=function(t){n(n.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})}},600:function(t,e,r){r(601)("WeakMap")},601:function(t,e,r){"use strict";var n=r(86),a=r(255),o=r(253),i=r(525);t.exports=function(t){n(n.S,t,{from:function(t){var e,r,n,s,u=arguments[1];return a(this),e=void 0!==u,e&&a(u),void 0==t?new this:(r=[],e?(n=0,s=o(u,arguments[2],2),i(t,!1,function(t){r.push(s(t,n++))})):i(t,!1,r.push,r),new this(r))}})}},602:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout-padding row justify-center"},[r("div",{staticClass:"postlogin-page-wrapper"},[r("q-card",{staticClass:"account-card relative-position"},[r("q-card-title",{staticClass:"uppercase account-card-title text-center block bg-primary",attrs:{color:"white"}},[t._v("\n        Account\n      ")]),t._v(" "),r("q-list",[r("q-collapsible",{attrs:{group:"account",icon:"account_circle",label:"User information"}},[r("form",{staticClass:"relative-position",attrs:{name:"userInformationForm"},on:{submit:function(e){e.preventDefault(),t.updateUserInformation(e)}}},[r("q-field",{attrs:{error:t.$v.informationFormData.firstName.$dirty&&t.$v.informationFormData.firstName.$invalid,"error-label":"Please enter your first name"}},[r("q-input",{attrs:{type:"text","max-length":"50","float-label":"First Name"},on:{blur:function(e){t.$v.informationFormData.firstName.$touch()}},model:{value:t.informationFormData.firstName,callback:function(e){t.informationFormData.firstName="string"==typeof e?e.trim():e},expression:"informationFormData.firstName"}})],1),t._v(" "),r("q-field",{attrs:{error:t.$v.informationFormData.lastName.$dirty&&t.$v.informationFormData.lastName.$invalid,"error-label":"Please enter your last name"}},[r("q-input",{attrs:{type:"text","max-length":"50","float-label":"Last Name"},on:{blur:function(e){t.$v.informationFormData.lastName.$touch()}},model:{value:t.informationFormData.lastName,callback:function(e){t.informationFormData.lastName="string"==typeof e?e.trim():e},expression:"informationFormData.lastName"}})],1),t._v(" "),r("q-field",{attrs:{error:t.$v.informationFormData.dateOfBirth.$dirty&&t.$v.informationFormData.dateOfBirth.$invalid,"error-label":"You must be at least 18 years old"}},[r("q-datetime",{attrs:{"float-label":"Date of birth",type:"date"},on:{blur:function(e){t.$v.informationFormData.dateOfBirth.$touch()}},model:{value:t.informationFormData.dateOfBirth,callback:function(e){t.informationFormData.dateOfBirth=e},expression:"informationFormData.dateOfBirth"}})],1),t._v(" "),r("q-field",{attrs:{label:"Gender",labelWidth:11}}),t._v(" "),r("q-radio",{attrs:{val:"male",label:"Male"},model:{value:t.informationFormData.gender,callback:function(e){t.informationFormData.gender=e},expression:"informationFormData.gender"}}),r("br"),t._v(" "),r("q-radio",{attrs:{val:"female",label:"Female"},model:{value:t.informationFormData.gender,callback:function(e){t.informationFormData.gender=e},expression:"informationFormData.gender"}}),r("br"),t._v(" "),r("q-radio",{attrs:{val:null,label:"Prefer not to say"},model:{value:t.informationFormData.gender,callback:function(e){t.informationFormData.gender=e},expression:"informationFormData.gender"}}),t._v(" "),r("div",{staticClass:" button-wrapper text-right"},[r("q-btn",{attrs:{color:"primary",disabled:t.areObjectsEqual(t.originalInformationFormData,t.informationFormData)||t.$v.informationFormData.$invalid}},[t._v("\n                Update User Information\n              ")])],1)],1)]),t._v(" "),r("q-collapsible",{attrs:{group:"account",icon:"email",label:"Email address"}},[r("form",{staticClass:"relative-position",attrs:{name:"userEmailForm"},on:{submit:function(e){e.preventDefault(),t.updateUserEmail(e)}}},[r("q-field",{attrs:{error:t.$v.emailFormData.email.$dirty&&t.$v.emailFormData.email.$invalid,"error-label":t.emailErrorText}},[r("q-input",{attrs:{type:"email","max-length":"100","float-label":"Email"},on:{input:function(e){t.delayTouch(t.$v.emailFormData.email)},blur:function(e){t.$v.emailFormData.email.$touch()}},model:{value:t.emailFormData.email,callback:function(e){t.emailFormData.email="string"==typeof e?e.trim():e},expression:"emailFormData.email"}})],1),t._v(" "),r("div",{staticClass:" button-wrapper text-right"},[r("q-btn",{attrs:{color:"primary",disabled:t.areObjectsEqual(t.originalEmailFormData,t.emailFormData)||t.$v.emailFormData.$invalid}},[t._v("\n                Update Email Address\n              ")])],1)],1)]),t._v(" "),r("q-collapsible",{attrs:{group:"account",icon:"lock",label:"Password"}},[r("form",{staticClass:"relative-position",attrs:{name:"userPasswordForm"},on:{submit:function(e){e.preventDefault(),t.updateUserPassword(e)}}},[r("q-field",{attrs:{error:t.$v.passwordFormData.currentPassword.$dirty&&t.$v.passwordFormData.currentPassword.$invalid,"error-label":"Current password must be at least 8 characters"}},[r("q-input",{attrs:{type:"password","max-length":"50","float-label":"Current password"},on:{blur:function(e){t.$v.passwordFormData.currentPassword.$touch()}},model:{value:t.passwordFormData.currentPassword,callback:function(e){t.passwordFormData.currentPassword="string"==typeof e?e.trim():e},expression:"passwordFormData.currentPassword"}})],1),t._v(" "),r("q-field",{attrs:{error:t.$v.passwordFormData.newPassword.$dirty&&t.$v.passwordFormData.newPassword.$invalid,"error-label":"New password must be at least 8 characters"}},[r("q-input",{attrs:{type:"password","max-length":"50","float-label":"New password"},on:{blur:function(e){t.$v.passwordFormData.newPassword.$touch()}},model:{value:t.passwordFormData.newPassword,callback:function(e){t.passwordFormData.newPassword="string"==typeof e?e.trim():e},expression:"passwordFormData.newPassword"}})],1),t._v(" "),r("q-field",{attrs:{error:t.$v.passwordFormData.newPasswordConfirmation.$dirty&&t.$v.passwordFormData.newPasswordConfirmation.$invalid,"error-label":"New password confirmation must equal new password"}},[r("q-input",{attrs:{type:"password","max-length":"50","float-label":"Confirm new password"},on:{blur:function(e){t.$v.passwordFormData.newPasswordConfirmation.$touch()}},model:{value:t.passwordFormData.newPasswordConfirmation,callback:function(e){t.passwordFormData.newPasswordConfirmation="string"==typeof e?e.trim():e},expression:"passwordFormData.newPasswordConfirmation"}})],1),t._v(" "),r("div",{staticClass:" button-wrapper text-right"},[r("q-btn",{attrs:{color:"primary",disabled:t.areObjectsEqual(t.originalPasswordFormData,t.passwordFormData)||t.$v.passwordFormData.$invalid}},[t._v("\n                Update Password\n              ")])],1)],1)]),t._v(" "),r("q-collapsible",{attrs:{group:"account",icon:"photo",label:"Profile picture"}},[r("p",{staticClass:"text-center"},[t._v("\n            Beacon uses Gravatar for profile pictures."),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.gravatar.com",target:"_blank"}},[t._v("Click here to set up a Gravatar account.")])])]),t._v(" "),r("q-collapsible",{attrs:{group:"account",icon:"import_contacts",label:"Corrected addresses"}},[t.$store.state.user.correctedAddresses.length?t._e():r("p",{staticClass:"text-center"},[t._v("\n            You have no corrected addresses at this time\n          ")]),t._v(" "),t.$store.state.user.correctedAddresses.length?r("table",{staticClass:"q-table responsive striped-even"},[r("thead",[r("tr",[r("th",[t._v("\n                  Original\n                ")]),t._v(" "),r("th",[t._v("\n                  Corrected\n                ")])])]),t._v(" "),r("tbody",t._l(t.$store.state.user.correctedAddresses,function(e){return r("tr",{key:e._id},[r("td",{attrs:{"data-th":"Original"}},[t._v(t._s(e.original.address))]),t._v(" "),r("td",{attrs:{"data-th":"Corrected"}},[t._v(t._s(e.corrected.address))]),t._v(" "),r("td",[r("q-btn",{staticClass:"no-shadow text-center icon-button",attrs:{flat:"",color:"negative",icon:"ion-close-round"},on:{click:function(r){r.preventDefault(),t.deleteCorrectedAddress(e)}}})],1)])}))]):t._e()]),t._v(" "),r("q-collapsible",{attrs:{group:"account",icon:"ion-android-cancel",label:"Delete account"}},[r("div",{staticClass:"text-center"},[r("q-btn",{attrs:{color:"negative"},on:{click:function(e){e.preventDefault(),t.openDeleteAccountDialog(e)}}},[t._v("\n              Delete account\n            ")])],1)])],1),t._v(" "),r("q-inner-loading",{attrs:{visible:t.loading}},[r("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)],1)])},staticRenderFns:[]}}});