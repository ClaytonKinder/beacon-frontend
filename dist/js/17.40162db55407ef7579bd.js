webpackJsonp([17],{482:function(t,e,s){function i(t){s(546)}var n=s(15)(s(548),s(549),i,null,null);t.exports=n.exports},546:function(t,e,s){var i=s(547);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(476)("1c221f8c",i,!0)},547:function(t,e,s){e=t.exports=s(475)(void 0),e.push([t.i,'.sidebar-header{height:122px;padding:1rem;color:#fff;background:url("/assets/images/lighthouse.jpg") 0 20%;background-size:150%}.sidebar-header .sidebar-name{margin-bottom:0}',""])},548:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(46),n=s(256);e.default={name:"Sidebar",mixins:[n.a],components:{QList:i.x,QItem:i.r,QItemSide:i.u,QItemMain:i.s,QSideLink:i.G},methods:{toggleRight:function(){this.$emit("toggleRight")},countIncomingRequests:function(){return this.checkExistence(this.$store.state.user,["beacon","incomingConnectionRequests"])?" <strong>("+this.$store.state.user.beacon.incomingConnectionRequests.length+")</strong>":""},logout:function(){this.$cookie.delete("token"),this.$router.push("/")}}}},549:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-list",{staticClass:"no-padding",attrs:{"no-border":"",link:"","inset-delimiter":""}},[s("div",{staticClass:"sidebar-header column justify-end no-wrap"},[s("div",{staticClass:"sidebar-image"}),t._v(" "),this.$store.state.user?s("div",[s("img",{staticClass:"circular profile",attrs:{src:this.$store.state.user.gravatar}}),t._v(" "),s("h5",{staticClass:"sidebar-name"},[t._v("\n          "+t._s(this.$store.state.user.firstName)+"\n        ")])]):t._e()]),t._v(" "),s("q-side-link",{attrs:{item:"",to:"account"}},[s("q-item-side",{attrs:{icon:"account circle"}}),t._v(" "),s("q-item-main",{attrs:{label:"Account"}})],1),t._v(" "),s("q-item",{on:{click:function(e){t.logout()}}},[s("q-item-side",{attrs:{icon:"exit to app"}}),t._v(" "),s("q-item-main",{attrs:{label:"Logout"}})],1)],1)],1)},staticRenderFns:[]}}});