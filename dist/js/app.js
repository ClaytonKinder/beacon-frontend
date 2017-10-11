webpackJsonp([20],{253:function(e,t,n){"use strict";var s=n(46);t.a={methods:{createToast:function(e,t){t||(t="Something went wrong!"),s.R.create[e]({html:t})}}}},256:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__=__webpack_require__(277),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof__);__webpack_exports__.a={methods:{doesObjectExist:function(e){if(!e)return!1;for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1},checkExistence:function checkExistence(baseObj,pathArr){var _this=this,checkForNonexistence=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!this.doesObjectExist(baseObj))return!1;var build="baseObj",bool=function bool(){var val=!checkForNonexistence;return pathArr.forEach(function(e,i){build+="['"+e+"']";try{if(eval(build),void 0===eval(build))throw new Error;if(i===pathArr.length-1)if("object"===__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_typeof___default()(eval(build))){if(Array.isArray(eval(build))){if(0===eval(build).length)throw new Error}else if(!_this.doesObjectExist(eval(build)))throw new Error}else if("boolean"==typeof eval(build)&&!eval(build))throw new Error}catch(e){return val=checkForNonexistence}}),val};return bool()},generatePossessive:function(e){return"s"!==e.substr(e.length-1)?(e+="'",e+="s"):e+="'",e}}}},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(32),o=n(46),r=n(274),a=n(297),i=n(87),u=n(299),c=n(301),l=n.n(c),p=n(303),d=n.n(p),f=n(304),h=n.n(f),j=n(325),m=n.n(j),v=n(327),b=(n.n(v),n(465)),g=(n.n(b),n(467)),_=(n.n(g),n(469));n.n(_);n(268),n(270),n(273),s.a.use(d.a,h()("https://ck-beacon-backend.herokuapp.com"),u.a),s.a.use(n(461)),s.a.use(l.a),s.a.use(a.a),s.a.use(m.a),s.a.use(v,{load:{key:"AIzaSyCErpr4uHecZd50rWMsrR2rtbyHcuepDc4",libraries:"places"}}),console.log("MAIN.JS"),console.log("production"),console.log("AIzaSyCErpr4uHecZd50rWMsrR2rtbyHcuepDc4"),console.log("AIzaSyDB7lZd5FSWzgoGMMwnMEVmHPAUeor69MM"),console.log("https://ck-beacon-frontend.herokuapp.com"),console.log("https://ck-beacon-backend.herokuapp.com"),console.log("https://ck-beacon-backend.herokuapp.com/api/v1/"),r.a.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.requiresAuth})?i.a.isAuth().then(function(e){e.body&&m.a.get("token")?(u.a.commit("updateUser",e.body),n(e.body)):(m.a.delete("token"),n({path:"/"}))}).catch(function(){m.a.delete("token"),n({path:"/"})}):e.matched.some(function(e){return e.meta.onlyIfLoggedOut})?(e.name&&"reset-password"===e.name&&m.a.delete("token"),i.a.isAuth().then(function(e){e.body&&m.a.get("token")?(u.a.commit("updateUser",e.body),n("/app/beacon")):n()}).catch(function(){n()})):n()}),s.a.http.interceptors.push(function(e,t){e.headers.set("x-access-token",m.a.get("token")),t(function(e){if(e.headers.has("x-access-token")){var t=e.headers("x-access-token");m.a.set("token",t)}})}),s.a.config.productionTip=!1,s.a.use(o.T),n(463),s.a.http.options.root="https://ck-beacon-backend.herokuapp.com/api/v1/",o.T.start(function(){new s.a({el:"#q-app",router:r.a,store:u.a,VueGoogleMaps:v,render:function(e){return e(n(471))}})})},268:function(e,t){},272:function(e,t){},273:function(e,t){},274:function(e,t,n){"use strict";function s(e){return function(){return n(276)("./"+e+".vue")}}var o=n(32),r=n(275);o.a.use(r.a),t.a=new r.a({mode:"history",routes:[{path:"/",component:s("prelogin/Prelogin"),meta:{onlyIfLoggedOut:!0},children:[{path:"",components:{default:s("prelogin/home/Home")}},{path:"forgot-password",components:{default:s("prelogin/forgotPassword/ForgotPassword")}},{name:"reset-password",path:"reset-password/:resetPasswordToken",components:{default:s("prelogin/resetPassword/ResetPassword")}}]},{path:"/app",component:s("postlogin/Postlogin"),meta:{requiresAuth:!0},children:[{path:"account",component:s("postlogin/account/Account")},{path:"beacon",component:s("postlogin/beacon/Beacon")},{path:"map",component:s("postlogin/map/Map")},{path:"settings",component:s("postlogin/settings/Settings")},{path:"connection-inbox",component:s("postlogin/connectionInbox/ConnectionInbox")}]},{path:"*",redirect:"/app/beacon"}]})},276:function(e,t,n){function s(e){var t=o[e];return t?n.e(t[1]).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var o={"./postlogin/Postlogin.vue":[486,9],"./postlogin/account/Account.vue":[487,0],"./postlogin/beacon/Beacon.vue":[488,5],"./postlogin/connectionInbox/ConnectionInbox.vue":[489,13],"./postlogin/header/Header.vue":[481,18],"./postlogin/map/Map.vue":[490,10],"./postlogin/settings/Settings.vue":[491,12],"./postlogin/sidebar/Sidebar.vue":[482,17],"./prelogin/Prelogin.vue":[492,8],"./prelogin/footer/Footer.vue":[483,16],"./prelogin/forgotPassword/ForgotPassword.vue":[493,3],"./prelogin/header/Header.vue":[484,15],"./prelogin/home/Home.vue":[494,1],"./prelogin/resetPassword/ResetPassword.vue":[495,2],"./snippets/connectionSquare/ConnectionSquare.vue":[478,14],"./snippets/loginRegisterForms/LoginRegisterForms.vue":[485,4],"./snippets/loginRegisterForms/loginForm/LoginForm.vue":[479,7],"./snippets/loginRegisterForms/registerForm/RegisterForm.vue":[480,6],"./snippets/tripleIconCards/TripleIconCards.vue":[477,11]};s.keys=function(){return Object.keys(o)},s.id=276,e.exports=s},298:function(e,t){},299:function(e,t,n){"use strict";var s=n(32),o=n(300),r=n(87),a=n(253),i=n(256);s.a.use(o.a);var u=new o.a.Store({state:{user:null},getters:{getUser:function(e){return e.user}},mutations:{updateUser:function(e,t){e.user=t},deleteUser:function(e){e.user=null},updateBeacon:function(e,t){e.user.beacon=t},extinguishBeacon:function(e){e.user.beacon=null}},actions:{refreshUser:function(e){var t=i.a.methods.doesObjectExist(e.state.user.beacon)?e.state.user.beacon.incomingConnectionRequests.length:null;r.a.isAuth().then(function(n){e.commit("updateUser",n.body);var s=i.a.methods.doesObjectExist(e.state.user.beacon)?e.state.user.beacon.incomingConnectionRequests.length:null;t<s&&e.state.user.settings.playNotificationSound&&document.getElementById("notification").play()}).catch(function(){localStorage.setItem("userId",""),a.a.methods.createToast("negative","Could not update user information at this time")})},socket_socketEvent:function(e,t){t.dispatch&&e.dispatch(t.dispatch),t.type&&t.message&&a.a.methods.createToast(t.type,t.message)}}});t.a=u},322:function(e,t){},441:function(e,t,n){var s=n(15)(n(442),n(443),null,null,null);e.exports=s.exports},443:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{ref:"flyaway"},[e._t("default")],2)])},staticRenderFns:[]}},444:function(e,t,n){function s(e){n(445)}var o=n(15)(n(446),n(447),s,null,null);e.exports=o.exports},445:function(e,t){},447:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-map-container"},[n("div",{ref:"vue-map",staticClass:"vue-map"}),e._v(" "),n("div",{staticClass:"vue-map-hidden"},[e._t("default")],2),e._v(" "),e._t("visible")],2)},staticRenderFns:[]}},448:function(e,t,n){function s(e){n(449)}var o=n(15)(n(450),n(451),s,null,null);e.exports=o.exports},449:function(e,t){},451:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-street-view-pano-container"},[n("div",{ref:"vue-street-view-pano",staticClass:"vue-street-view-pano"}),e._v(" "),e._t("default")],2)},staticRenderFns:[]}},452:function(e,t,n){var s=n(15)(n(453),n(454),null,null,null);e.exports=s.exports},454:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",[n("span",{domProps:{textContent:e._s(e.label)}}),e._v(" "),n("input",{ref:"input",class:e.className,attrs:{type:"text",placeholder:e.placeholder}})])},staticRenderFns:[]}},455:function(e,t,n){var s=n(15)(n(456),n(460),null,null,null);e.exports=s.exports},460:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{ref:"input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.value}})},staticRenderFns:[]}},462:function(e,t,n){function s(e){return n(o(e))}function o(e){var t=r[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var r={"./af":138,"./af.js":138,"./ar":139,"./ar-dz":140,"./ar-dz.js":140,"./ar-kw":141,"./ar-kw.js":141,"./ar-ly":142,"./ar-ly.js":142,"./ar-ma":143,"./ar-ma.js":143,"./ar-sa":144,"./ar-sa.js":144,"./ar-tn":145,"./ar-tn.js":145,"./ar.js":139,"./az":146,"./az.js":146,"./be":147,"./be.js":147,"./bg":148,"./bg.js":148,"./bn":149,"./bn.js":149,"./bo":150,"./bo.js":150,"./br":151,"./br.js":151,"./bs":152,"./bs.js":152,"./ca":153,"./ca.js":153,"./cs":154,"./cs.js":154,"./cv":155,"./cv.js":155,"./cy":156,"./cy.js":156,"./da":157,"./da.js":157,"./de":158,"./de-at":159,"./de-at.js":159,"./de-ch":160,"./de-ch.js":160,"./de.js":158,"./dv":161,"./dv.js":161,"./el":162,"./el.js":162,"./en-au":163,"./en-au.js":163,"./en-ca":164,"./en-ca.js":164,"./en-gb":165,"./en-gb.js":165,"./en-ie":166,"./en-ie.js":166,"./en-nz":167,"./en-nz.js":167,"./eo":168,"./eo.js":168,"./es":169,"./es-do":170,"./es-do.js":170,"./es.js":169,"./et":171,"./et.js":171,"./eu":172,"./eu.js":172,"./fa":173,"./fa.js":173,"./fi":174,"./fi.js":174,"./fo":175,"./fo.js":175,"./fr":176,"./fr-ca":177,"./fr-ca.js":177,"./fr-ch":178,"./fr-ch.js":178,"./fr.js":176,"./fy":179,"./fy.js":179,"./gd":180,"./gd.js":180,"./gl":181,"./gl.js":181,"./gom-latn":182,"./gom-latn.js":182,"./he":183,"./he.js":183,"./hi":184,"./hi.js":184,"./hr":185,"./hr.js":185,"./hu":186,"./hu.js":186,"./hy-am":187,"./hy-am.js":187,"./id":188,"./id.js":188,"./is":189,"./is.js":189,"./it":190,"./it.js":190,"./ja":191,"./ja.js":191,"./jv":192,"./jv.js":192,"./ka":193,"./ka.js":193,"./kk":194,"./kk.js":194,"./km":195,"./km.js":195,"./kn":196,"./kn.js":196,"./ko":197,"./ko.js":197,"./ky":198,"./ky.js":198,"./lb":199,"./lb.js":199,"./lo":200,"./lo.js":200,"./lt":201,"./lt.js":201,"./lv":202,"./lv.js":202,"./me":203,"./me.js":203,"./mi":204,"./mi.js":204,"./mk":205,"./mk.js":205,"./ml":206,"./ml.js":206,"./mr":207,"./mr.js":207,"./ms":208,"./ms-my":209,"./ms-my.js":209,"./ms.js":208,"./my":210,"./my.js":210,"./nb":211,"./nb.js":211,"./ne":212,"./ne.js":212,"./nl":213,"./nl-be":214,"./nl-be.js":214,"./nl.js":213,"./nn":215,"./nn.js":215,"./pa-in":216,"./pa-in.js":216,"./pl":217,"./pl.js":217,"./pt":218,"./pt-br":219,"./pt-br.js":219,"./pt.js":218,"./ro":220,"./ro.js":220,"./ru":221,"./ru.js":221,"./sd":222,"./sd.js":222,"./se":223,"./se.js":223,"./si":224,"./si.js":224,"./sk":225,"./sk.js":225,"./sl":226,"./sl.js":226,"./sq":227,"./sq.js":227,"./sr":228,"./sr-cyrl":229,"./sr-cyrl.js":229,"./sr.js":228,"./ss":230,"./ss.js":230,"./sv":231,"./sv.js":231,"./sw":232,"./sw.js":232,"./ta":233,"./ta.js":233,"./te":234,"./te.js":234,"./tet":235,"./tet.js":235,"./th":236,"./th.js":236,"./tl-ph":237,"./tl-ph.js":237,"./tlh":238,"./tlh.js":238,"./tr":239,"./tr.js":239,"./tzl":240,"./tzl.js":240,"./tzm":241,"./tzm-latn":242,"./tzm-latn.js":242,"./tzm.js":241,"./uk":243,"./uk.js":243,"./ur":244,"./ur.js":244,"./uz":245,"./uz-latn":246,"./uz-latn.js":246,"./uz.js":245,"./vi":247,"./vi.js":247,"./x-pseudo":248,"./x-pseudo.js":248,"./yo":249,"./yo.js":249,"./zh-cn":250,"./zh-cn.js":250,"./zh-hk":251,"./zh-hk.js":251,"./zh-tw":252,"./zh-tw.js":252};s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=462},464:function(e,t){},466:function(e,t){},468:function(e,t){},470:function(e,t){},471:function(e,t,n){function s(e){n(472)}var o=n(15)(n(473),n(474),s,null,null);e.exports=o.exports},472:function(e,t){},473:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(46).a.set("#0050b0"),t.default={}},474:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},staticRenderFns:[]}},87:function(e,t,n){"use strict";var s=n(32);t.a={isAuth:function(){return s.a.http.post("auth/isauth")},login:function(e){return s.a.http.post("auth/authenticate",e)},register:function(e){return s.a.http.post("auth/register",e)},checkIfEmailIsUnique:function(e){return s.a.http.post("auth/checkifemailisunique/"+e)},forgotPassword:function(e){return s.a.http.post("auth/forgotpassword",e)},validateResetPasswordToken:function(e){return s.a.http.post("auth/validateresetpasswordtoken",e)},resetPassword:function(e){return s.a.http.post("auth/resetpassword",e)}}}},[267]);