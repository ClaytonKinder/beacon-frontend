webpackJsonp([18],{483:function(t,e,o){function n(t){o(558)}var s=o(16)(o(560),o(561),n,null,null);t.exports=s.exports},558:function(t,e,o){var n=o(559);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(478)("de1d225c",n,!0)},559:function(t,e,o){e=t.exports=o(477)(void 0),e.push([t.i,".q-btn.mail-button{padding:0 .5rem}.q-btn.mail-button .q-icon.has-mail{margin-right:2px}.q-btn.mail-button span{margin-left:2px}",""])},560:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(47),s=o(257);e.default={name:"PostloginHeader",mixins:[s.a],components:{QToolbar:n.Q,QToolbarTitle:n.R,QBtn:n.c,QIcon:n.n,QTabs:n.O,QRouteTab:n.D,QList:n.w,QItem:n.q,QItemSide:n.t,QItemMain:n.r,QSideLink:n.F},data:function(){return{tabRoutes:["/app/beacon","/app/map","/app/settings"],tab:""}},watch:{$route:function(t){this.tabRoutes.includes(t.path)||(this.tab="")}},methods:{toggleRight:function(){this.$q.events.$emit("emitResizeMap"),this.$emit("toggleRight")},checkBeaconStatus:function(t){return"active"===t?this.$store.state.user&&this.$store.state.user.beacon:"inactive"===t?this.$store.state.user&&!this.$store.state.user.beacon&&!this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest)&&!this.doesObjectExist(this.$store.state.user.connectedTo):"awaitingConnectionApproval"===t?this.$store.state.user&&!this.$store.state.user.beacon&&this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest):"connected"===t?this.$store.state.user&&!this.$store.state.user.beacon&&this.doesObjectExist(this.$store.state.user.connectedTo):void 0}}}},561:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"appHeader"}},[o("q-toolbar",{attrs:{color:"primary"},slot:"header"},[o("q-toolbar-title",[t._v("\n      Beacon\n      "),t.checkBeaconStatus("active")?o("div",{slot:"subtitle"},[t._v("Active")]):t._e(),t._v(" "),t.checkBeaconStatus("inactive")?o("div",{slot:"subtitle"},[t._v("Inactive")]):t._e(),t._v(" "),t.checkBeaconStatus("awaitingConnectionApproval")?o("div",{slot:"subtitle"},[t._v("Awaiting connection approval")]):t._e(),t._v(" "),t.checkBeaconStatus("connected")?o("div",{slot:"subtitle"},[t._v("Connected")]):t._e()]),t._v(" "),o("q-btn",{attrs:{flat:""},on:{click:function(e){t.toggleRight()}}},[o("q-icon",{attrs:{name:"menu"}})],1)],1),t._v(" "),o("q-tabs",{slot:"navigation",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-route-tab",{attrs:{name:"beacon",icon:"ion-flame",to:"/app/beacon",hide:"label",label:"Beacon"},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"map",icon:"map",to:"/app/map",hide:"label",label:"Map"},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"inbox",icon:"mail",to:"/app/connection-inbox",hide:"label",label:"Inbox",count:t.$store.state.user.beacon&&t.$store.state.user.beacon.incomingConnectionRequests.length},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"settings",icon:"settings",to:"/app/settings",hide:"label",label:"Settings"},slot:"title"})],1)],1)},staticRenderFns:[]}}});