webpackJsonp([6],{480:function(e,t,r){function a(e){r(537)}var n=r(15)(r(539),r(540),a,"data-v-092a69a0",null);e.exports=n.exports},496:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.regex=t.ref=t.len=t.req=t.withParams=void 0;var a=r(499),n=function(e){return e&&e.__esModule?e:{default:e}}(a);t.withParams=n.default;var i=t.req=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e||!1===e)return!1;if("object"==typeof e){for(var t in e)return!0;return!1}return!!String(e).length};t.len=function(e){return Array.isArray(e)?e.length:"object"==typeof e?Object.keys(e).length:String(e).length},t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]},t.regex=function(e,t){return(0,n.default)({type:e},function(e){return!i(e)||t.test(e)})}},497:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.and=t.or=t.url=t.sameAs=t.requiredUnless=t.requiredIf=t.required=t.minLength=t.maxLength=t.email=t.between=t.numeric=t.alphaNum=t.alpha=void 0;var n=r(498),i=a(n),o=r(500),u=a(o),s=r(501),f=a(s),l=r(502),d=a(l),m=r(503),c=a(m),p=r(504),v=a(p),h=r(505),b=a(h),g=r(506),y=a(g),_=r(507),D=a(_),w=r(508),$=a(w),q=r(509),x=a(q),P=r(510),O=a(P),j=r(511),L=a(j),M=r(512),N=a(M);t.alpha=i.default,t.alphaNum=u.default,t.numeric=f.default,t.between=d.default,t.email=c.default,t.maxLength=v.default,t.minLength=b.default,t.required=y.default,t.requiredIf=D.default,t.requiredUnless=$.default,t.sameAs=x.default,t.url=O.default,t.or=L.default,t.and=N.default},498:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=(0,a.regex)("alpha",/^[a-zA-Z]*$/)},499:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(255).withParams;t.default=a},500:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},501:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=(0,a.regex)("numeric",/^[0-9]*$/)},502:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},function(r){return!(0,a.req)(r)||!/\s/.test(r)&&+e<=+r&&+t>=+r})}},503:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496),n=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;t.default=(0,a.regex)("email",n)},504:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e){return(0,a.withParams)({type:"maxLength",max:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e})}},505:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e){return(0,a.withParams)({type:"minLength",min:e},function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e})}},506:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=(0,a.withParams)({type:"required"},a.req)},507:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)})}},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)})}},509:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(e){return(0,a.withParams)({type:"sameAs",eq:e},function(t,r){return t===(0,a.ref)(e,this,r)})}},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496),n=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[\/?#]\S*)?$/;t.default=(0,a.regex)("url",n)},511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},function(){for(var e=this,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce(function(t,r){return t||r.apply(e,a)},!1)})}},512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(496);t.default=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},function(){for(var e=this,r=arguments.length,a=Array(r),n=0;n<r;n++)a[n]=arguments[n];return t.length>0&&t.reduce(function(t,r){return t&&r.apply(e,a)},!0)})}},537:function(e,t,r){var a=r(538);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(476)("4babb39a",a,!0)},538:function(e,t,r){t=e.exports=r(475)(void 0),t.push([e.i,"form[data-v-092a69a0]{padding-bottom:1.5rem}.button-wrapper[data-v-092a69a0]{margin-top:1rem}",""])},539:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(46),n=r(497),i=(r.n(n),r(87)),o=r(253);t.default={name:"RegisterForm",mixins:[o.a],components:{QBtn:a.d,QField:a.n,QInput:a.q,QInnerLoading:a.p,QSpinnerGears:a.J,QDatetime:a.m},data:function(){return{formData:{firstName:"Hambone",lastName:"Fakenamington",email:"Hambone@gmail.com",dateOfBirth:"1994-10-21T04:00:00.000Z",password:"hambone123",passwordConfirmation:"hambone123"},loading:!1}},validations:{formData:{firstName:{required:n.required,maxLength:Object(n.maxLength)(50)},lastName:{required:n.required,maxLength:Object(n.maxLength)(50)},email:{required:n.required,email:n.email,maxLength:Object(n.maxLength)(100)},dateOfBirth:{required:n.required,isInThePast:function(e){var t=new Date(e),r=new Date;return r.setHours(0,0,0,0),t<r},isOlderThanEighteen:function(e){var t=new Date,r=new Date(e),a=t.getFullYear()-r.getFullYear(),n=t.getMonth()-r.getMonth();return(n<0||0===n&&t.getDate()<r.getDate())&&a--,a>=18}},password:{required:n.required,minLength:Object(n.minLength)(8),maxLength:Object(n.maxLength)(50)},passwordConfirmation:{required:n.required,sameAsPassword:Object(n.sameAs)("password"),minLength:Object(n.minLength)(8),maxLength:Object(n.maxLength)(50)}}},props:{},methods:{register:function(){var e=this;this.loading=!0,i.a.register(this.formData).then(function(t){e.$cookie.set("token",t.body.token),e.$router.push("/app/beacon"),e.loading=!1}).catch(function(t){e.createToast("negative",t.body.message),e.loading=!1})}}}},540:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"relative-position",attrs:{name:"registerForm"},on:{submit:function(t){t.preventDefault(),e.register(t)}}},[r("q-field",{attrs:{error:e.$v.formData.firstName.$dirty&&e.$v.formData.firstName.$invalid,"error-label":"Please enter your first name"}},[r("q-input",{attrs:{"max-length":"50",type:"text","float-label":"First Name"},on:{blur:function(t){e.$v.formData.firstName.$touch()}},model:{value:e.formData.firstName,callback:function(t){e.formData.firstName="string"==typeof t?t.trim():t},expression:"formData.firstName"}})],1),e._v(" "),r("q-field",{attrs:{error:e.$v.formData.lastName.$dirty&&e.$v.formData.lastName.$invalid,"error-label":"Please enter your last name"}},[r("q-input",{attrs:{"max-length":"50",type:"text","float-label":"Last Name"},on:{blur:function(t){e.$v.formData.lastName.$touch()}},model:{value:e.formData.lastName,callback:function(t){e.formData.lastName="string"==typeof t?t.trim():t},expression:"formData.lastName"}})],1),e._v(" "),r("q-field",{attrs:{error:e.$v.formData.email.$dirty&&e.$v.formData.email.$invalid,"error-label":"Please enter a valid email address"}},[r("q-input",{attrs:{"max-length":"50",type:"email","float-label":"Email"},on:{blur:function(t){e.$v.formData.email.$touch()}},model:{value:e.formData.email,callback:function(t){e.formData.email="string"==typeof t?t.trim():t},expression:"formData.email"}})],1),e._v(" "),r("q-field",{attrs:{error:e.$v.formData.dateOfBirth.$dirty&&e.$v.formData.dateOfBirth.$invalid,"error-label":"You must be at least 18 years old"}},[r("q-datetime",{attrs:{"float-label":"Date of birth",type:"date"},on:{blur:function(t){e.$v.formData.dateOfBirth.$touch()}},model:{value:e.formData.dateOfBirth,callback:function(t){e.formData.dateOfBirth=t},expression:"formData.dateOfBirth"}})],1),e._v(" "),r("q-field",{attrs:{error:e.$v.formData.password.$dirty&&e.$v.formData.password.$invalid,"error-label":"Please enter a secure password that's between 8 and 50 characters"}},[r("q-input",{attrs:{"max-length":"50",type:"password","float-label":"Password"},on:{blur:function(t){e.$v.formData.password.$touch()}},model:{value:e.formData.password,callback:function(t){e.formData.password="string"==typeof t?t.trim():t},expression:"formData.password"}})],1),e._v(" "),r("q-field",{attrs:{error:e.$v.formData.passwordConfirmation.$dirty&&e.$v.formData.passwordConfirmation.$invalid,"error-label":"Please make sure that this matches your password"}},[r("q-input",{attrs:{"max-length":"50",type:"password","float-label":"Confirm Password"},on:{blur:function(t){e.$v.formData.passwordConfirmation.$touch()}},model:{value:e.formData.passwordConfirmation,callback:function(t){e.formData.passwordConfirmation="string"==typeof t?t.trim():t},expression:"formData.passwordConfirmation"}})],1),e._v(" "),r("div",{staticClass:"button-wrapper text-center"},[r("q-btn",{attrs:{disabled:e.$v.formData.$invalid,type:"submit",color:"primary"}},[e._v("\n      Register\n    ")])],1),e._v(" "),r("q-inner-loading",{attrs:{visible:e.loading}},[r("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},staticRenderFns:[]}}});