webpackJsonp([2,11],{477:function(t,e,r){function a(t){r(524)}var n=r(15)(r(526),r(527),a,"data-v-922a04e8",null);t.exports=n.exports},495:function(t,e,r){function a(t){r(631)}var n=r(15)(r(633),r(634),a,null,null);t.exports=n.exports},496:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.regex=e.ref=e.len=e.req=e.withParams=void 0;var a=r(499),n=function(t){return t&&t.__esModule?t:{default:t}}(a);e.withParams=n.default;var o=e.req=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t||!1===t)return!1;if("object"==typeof t){for(var e in t)return!0;return!1}return!!String(t).length};e.len=function(t){return Array.isArray(t)?t.length:"object"==typeof t?Object.keys(t).length:String(t).length},e.ref=function(t,e,r){return"function"==typeof t?t.call(e,r):r[t]},e.regex=function(t,e){return(0,n.default)({type:t},function(t){return!o(t)||e.test(t)})}},497:function(t,e,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.and=e.or=e.url=e.sameAs=e.requiredUnless=e.requiredIf=e.required=e.minLength=e.maxLength=e.email=e.between=e.numeric=e.alphaNum=e.alpha=void 0;var n=r(498),o=a(n),i=r(500),s=a(i),c=r(501),u=a(c),l=r(502),d=a(l),f=r(503),p=a(f),m=r(504),v=a(m),h=r(505),g=a(h),y=r(506),w=a(y),b=r(507),_=a(b),x=r(508),P=a(x),q=r(509),C=a(q),j=r(510),$=a(j),A=r(511),O=a(A),M=r(512),k=a(M);e.alpha=o.default,e.alphaNum=s.default,e.numeric=u.default,e.between=d.default,e.email=p.default,e.maxLength=v.default,e.minLength=g.default,e.required=w.default,e.requiredIf=_.default,e.requiredUnless=P.default,e.sameAs=C.default,e.url=$.default,e.or=O.default,e.and=k.default},498:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=(0,a.regex)("alpha",/^[a-zA-Z]*$/)},499:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(255).withParams;e.default=a},500:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},501:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=(0,a.regex)("numeric",/^[0-9]*$/)},502:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t,e){return(0,a.withParams)({type:"between",min:t,max:e},function(r){return!(0,a.req)(r)||!/\s/.test(r)&&+t<=+r&&+e>=+r})}},503:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496),n=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;e.default=(0,a.regex)("email",n)},504:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t){return(0,a.withParams)({type:"maxLength",max:t},function(e){return!(0,a.req)(e)||(0,a.len)(e)<=t})}},505:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t){return(0,a.withParams)({type:"minLength",min:t},function(e){return!(0,a.req)(e)||(0,a.len)(e)>=t})}},506:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=(0,a.withParams)({type:"required"},a.req)},507:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t){return(0,a.withParams)({type:"requiredIf",prop:t},function(e,r){return!(0,a.ref)(t,this,r)||(0,a.req)(e)})}},508:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t){return(0,a.withParams)({type:"requiredUnless",prop:t},function(e,r){return!!(0,a.ref)(t,this,r)||(0,a.req)(e)})}},509:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(t){return(0,a.withParams)({type:"sameAs",eq:t},function(e,r){return e===(0,a.ref)(t,this,r)})}},510:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496),n=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;e.default=(0,a.regex)("url",n)},511:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,a.withParams)({type:"or"},function(){for(var t=this,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];return e.length>0&&e.reduce(function(e,r){return e||r.apply(t,a)},!1)})}},512:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(496);e.default=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,a.withParams)({type:"and"},function(){for(var t=this,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];return e.length>0&&e.reduce(function(e,r){return e&&r.apply(t,a)},!0)})}},513:function(t,e,r){var a=r(33);t.exports=function(t,e,r,n){try{return n?e(a(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&a(o.call(t)),e}}},514:function(t,e,r){var a=r(48),n=r(16)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(a.Array===t||o[n]===t)}},515:function(t,e,r){var a=r(516),n=r(16)("iterator"),o=r(48);t.exports=r(47).getIteratorMethod=function(t){if(void 0!=t)return t[n]||t["@@iterator"]||o[a(t)]}},516:function(t,e,r){var a=r(88),n=r(16)("toStringTag"),o="Arguments"==a(function(){return arguments}()),i=function(t,e){try{return t[e]}catch(t){}};t.exports=function(t){var e,r,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=i(e=Object(t),n))?r:o?a(e):"Object"==(s=a(e))&&"function"==typeof e.callee?"Arguments":s}},517:function(t,e,r){var a=r(16)("iterator"),n=!1;try{var o=[7][a]();o.return=function(){n=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var r=!1;try{var o=[7],i=o[a]();i.next=function(){return{done:r=!0}},o[a]=function(){return i},t(o)}catch(t){}return r}},518:function(t,e,r){t.exports={default:r(519),__esModule:!0}},519:function(t,e,r){r(259),r(520),t.exports=r(47).Array.from},520:function(t,e,r){"use strict";var a=r(254),n=r(86),o=r(258),i=r(513),s=r(514),c=r(257),u=r(521),l=r(515);n(n.S+n.F*!r(517)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,n,d,f=o(t),p="function"==typeof this?this:Array,m=arguments.length,v=m>1?arguments[1]:void 0,h=void 0!==v,g=0,y=l(f);if(h&&(v=a(v,m>2?arguments[2]:void 0,2)),void 0==y||p==Array&&s(y))for(e=c(f.length),r=new p(e);e>g;g++)u(r,g,h?v(f[g],g):f[g]);else for(d=y.call(f),r=new p;!(n=d.next()).done;g++)u(r,g,h?i(d,v,[n.value,g],!0):n.value);return r.length=g,r}})},521:function(t,e,r){"use strict";var a=r(17),n=r(35);t.exports=function(t,e,r){e in t?a.f(t,e,n(0,r)):t[e]=r}},524:function(t,e,r){var a=r(525);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(476)("a65f9104",a,!0)},525:function(t,e,r){e=t.exports=r(475)(void 0),e.push([t.i,".prelogin-info-row[data-v-922a04e8]{margin-top:100px;padding:0 2rem}.prelogin-info-row .info-card[data-v-922a04e8]{margin-bottom:4rem}.prelogin-info-row .info-card .info-icon[data-v-922a04e8]{padding-top:.5rem;font-size:4rem;color:#fff}.prelogin-info-row .info-card .info-title[data-v-922a04e8]{color:#fff;padding-bottom:.5rem}.prelogin-info-row .info-card .info-text[data-v-922a04e8]{margin-top:1rem}",""])},526:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(518),n=r.n(a),o=r(46);e.default={name:"TripleIconCards",components:{QCard:o.e,QCardMedia:o.g,QCardTitle:o.h,QCardMain:o.f,QWindowResizeObservable:o.Q},data:function(){return{}},methods:{equalizeHeight:Object(o.S)(function(){var t=document.querySelectorAll(".info-card");if(t){n()(t).forEach(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement).style.height="initial"});var e=n()(t).map(function(t){return t.getBoundingClientRect().height}),r=e.reduce(function(t,e){return e>t?e:t},0);n()(t).forEach(function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:HTMLElement).style.height=r+"px"})}},100)}}},527:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"prelogin-info-row row lg-gutter no-vert-gutter"},[r("q-window-resize-observable",{on:{resize:t.equalizeHeight}}),t._v(" "),r("div",{staticClass:"col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin"},[r("q-card",{staticClass:"info-card"},[r("q-card-media",{staticClass:"info-icon text-center block bg-primary"},[t._t("card1-icon")],2),t._v(" "),r("q-card-title",{staticClass:"info-title text-center block bg-primary"},[t._t("card1-title")],2),t._v(" "),r("q-card-main",{staticClass:"info-text row justify-center"},[r("p",{staticClass:"col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10"},[t._t("card1-text")],2)])],1)],1),t._v(" "),r("div",{staticClass:"col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin"},[r("q-card",{staticClass:"info-card"},[r("q-card-media",{staticClass:"info-icon text-center block bg-secondary"},[t._t("card2-icon")],2),t._v(" "),r("q-card-title",{staticClass:"info-title text-center block bg-secondary"},[t._t("card2-title")],2),t._v(" "),r("q-card-main",{staticClass:"info-text row justify-center"},[r("p",{staticClass:"col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10"},[t._t("card2-text")],2)])],1)],1),t._v(" "),r("div",{staticClass:"col col-lg-4 col-md-6 col-sm-12 col-xs-12 no-margin"},[r("q-card",{staticClass:"info-card"},[r("q-card-media",{staticClass:"info-icon text-center block bg-tertiary"},[t._t("card3-icon")],2),t._v(" "),r("q-card-title",{staticClass:"info-title text-center block bg-tertiary"},[t._t("card3-title")],2),t._v(" "),r("q-card-main",{staticClass:"info-text row justify-center"},[r("p",{staticClass:"col col-xl-7 col-lg-10 col-md-11 col-sm-6 col-xs-10"},[t._t("card3-text")],2)])],1)],1)],1)},staticRenderFns:[]}},631:function(t,e,r){var a=r(632);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(476)("45b6d0ad",a,!0)},632:function(t,e,r){e=t.exports=r(475)(void 0),e.push([t.i,".prelogin-card{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px}.prelogin-card>i{font-size:5rem}.prelogin-card form{min-width:200px;width:50%;padding-bottom:1.5rem}.prelogin-card .button-wrapper{margin-top:1rem}.prelogin-card .forgot-password-form-title{font-size:.95rem;padding:14px 12px;color:#027be3;font-weight:500}",""])},633:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(46),n=r(497),o=(r.n(n),r(87)),i=r(477),s=r.n(i),c=r(253);e.default={name:"ResetPassword",components:{QBtn:a.d,QIcon:a.o,QField:a.n,QInput:a.q,QInnerLoading:a.p,QSpinnerGears:a.J,TripleIconCards:s.a},mixins:[c.a],data:function(){return{loading:!1,formData:{email:"",password:"",passwordConfirmation:"",resetPasswordToken:this.$route.params.resetPasswordToken}}},validations:{formData:{password:{required:n.required,minLength:Object(n.minLength)(8),maxLength:Object(n.maxLength)(50)},passwordConfirmation:{required:n.required,sameAsPassword:Object(n.sameAs)("password"),minLength:Object(n.minLength)(8),maxLength:Object(n.maxLength)(50)}}},methods:{resetPassword:function(){var t=this;this.loading=!0,o.a.resetPassword(this.formData).then(function(e){e.body?(t.loading=!1,t.createToast("positive","Your password has been successfully reset"),t.$router.push("/")):(t.loading=!1,t.createToast("negative","Could not reset your password at this time"))}).catch(function(e){t.loading=!1,t.createToast("negative",e.body.message)})}},mounted:function(){var t=this;if(this.$route.params&&this.$route.params.resetPasswordToken){var e={resetPasswordToken:this.$route.params.resetPasswordToken};o.a.validateResetPasswordToken(e).then(function(e){e.body?t.formData.email=e.body:(t.$router.push("/"),t.createToast("negative","Password reset is invalid or has expired"))}).catch(function(e){t.$router.push("/"),t.createToast("negative",e.body.message)})}else this.$router.push("/"),this.createToast("negative","A password reset token was not provided")}}},634:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"column items-center no-wrap"},[r("div",{staticClass:"prelogin-card shadow-4 bg-white column items-center justify-center no-wrap"},[r("div",{staticClass:"forgot-password-form-title"},[t._v("\n      Enter your new password below\n    ")]),t._v("\n    "+t._s(t.$route.query.resetPasswordToken)+"\n    "),r("form",{staticClass:"relative-position",attrs:{name:"passwordResetEmailForm"},on:{submit:function(e){e.preventDefault(),t.resetPassword(e)}}},[r("q-field",{attrs:{error:t.$v.formData.password.$dirty&&t.$v.formData.password.$invalid,"error-label":"Please enter a secure password that's between 8 and 50 characters"}},[r("q-input",{attrs:{"max-length":"50",type:"password","float-label":"Password"},on:{blur:function(e){t.$v.formData.password.$touch()}},model:{value:t.formData.password,callback:function(e){t.formData.password="string"==typeof e?e.trim():e},expression:"formData.password"}})],1),t._v(" "),r("q-field",{attrs:{error:t.$v.formData.passwordConfirmation.$dirty&&t.$v.formData.passwordConfirmation.$invalid,"error-label":"Please make sure that this matches your password"}},[r("q-input",{attrs:{"max-length":"50",type:"password","float-label":"Confirm Password"},on:{blur:function(e){t.$v.formData.passwordConfirmation.$touch()}},model:{value:t.formData.passwordConfirmation,callback:function(e){t.formData.passwordConfirmation="string"==typeof e?e.trim():e},expression:"formData.passwordConfirmation"}})],1),t._v(" "),r("div",{staticClass:"button-wrapper text-center"},[r("q-btn",{attrs:{disabled:t.$v.formData.$invalid,type:"submit",color:"primary"}},[t._v("\n          Submit\n        ")])],1),t._v(" "),r("q-inner-loading",{attrs:{visible:t.loading}},[r("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)]),t._v(" "),r("triple-icon-cards",[r("i",{staticClass:"icon ion-flame",slot:"card1-icon"}),t._v(" "),r("h4",{staticClass:"thin uppercase no-margin",slot:"card1-title"},[t._v("Announce")]),t._v(" "),r("span",{slot:"card1-text"},[t._v("\n      Put yourself on the map by lighting your beacon. Immediately appear on the radar of other users and show them why you're worth approaching.\n    ")]),t._v(" "),r("q-icon",{attrs:{name:"map"},slot:"card2-icon"}),t._v(" "),r("h4",{staticClass:"thin uppercase no-margin",slot:"card2-title"},[t._v("Explore")]),t._v(" "),r("span",{slot:"card2-text"},[t._v("\n      Explore the world around you. Go find out why so many beacons are lit at the new bar down the street or the seemingly-forgotten park a few blocks away.\n    ")]),t._v(" "),r("i",{staticClass:"fa fa-plug",slot:"card3-icon"}),t._v(" "),r("h4",{staticClass:"thin uppercase no-margin",slot:"card3-title"},[t._v("Connect")]),t._v(" "),r("span",{slot:"card3-text"},[t._v("\n      Connect with other beacons to stoke the flame and shine that much brighter to others on the map. Make friends, communicate, and take on the world together.\n    ")])],1)],1)},staticRenderFns:[]}}});