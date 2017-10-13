webpackJsonp([9,17,18],{483:function(t,e,o){function n(t){o(558)}var i=o(16)(o(560),o(561),n,null,null);t.exports=i.exports},484:function(t,e,o){function n(t){o(562)}var i=o(16)(o(564),o(565),n,null,null);t.exports=i.exports},488:function(t,e,o){function n(t){o(582)}var i=o(16)(o(584),o(585),n,null,null);t.exports=i.exports},536:function(t,e,o){"use strict";var n=o(35);e.a={getUserByEmail:function(t){return n.a.http.get("user/getuser/"+t)},updateUserSettings:function(t){return n.a.http.post("user/updateusersettings",t)},updateUserInformation:function(t){return n.a.http.post("user/updateuserinformation",t)},updateUserEmail:function(t){return n.a.http.post("user/updateuseremail",t)},updateUserPassword:function(t){return n.a.http.post("user/updateuserpassword",t)},completeTutorialTour:function(t){return n.a.http.post("user/completetutorialtour",t)}}},558:function(t,e,o){var n=o(559);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(478)("de1d225c",n,!0)},559:function(t,e,o){e=t.exports=o(477)(void 0),e.push([t.i,".q-btn.mail-button{padding:0 .5rem}.q-btn.mail-button .q-icon.has-mail{margin-right:2px}.q-btn.mail-button span{margin-left:2px}",""])},560:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(47),i=o(257);e.default={name:"PostloginHeader",mixins:[i.a],components:{QToolbar:n.Q,QToolbarTitle:n.R,QBtn:n.c,QIcon:n.n,QTabs:n.O,QRouteTab:n.D,QList:n.w,QItem:n.q,QItemSide:n.t,QItemMain:n.r,QSideLink:n.F},data:function(){return{tabRoutes:["/app/beacon","/app/map","/app/settings"],tab:""}},watch:{$route:function(t){this.tabRoutes.includes(t.path)||(this.tab="")}},methods:{toggleRight:function(){this.$q.events.$emit("emitResizeMap"),this.$emit("toggleRight")},checkBeaconStatus:function(t){return"active"===t?this.$store.state.user&&this.$store.state.user.beacon:"inactive"===t?this.$store.state.user&&!this.$store.state.user.beacon&&!this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest)&&!this.doesObjectExist(this.$store.state.user.connectedTo):"awaitingConnectionApproval"===t?this.$store.state.user&&!this.$store.state.user.beacon&&this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest):"connected"===t?this.$store.state.user&&!this.$store.state.user.beacon&&this.doesObjectExist(this.$store.state.user.connectedTo):void 0}}}},561:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{attrs:{id:"appHeader"}},[o("q-toolbar",{attrs:{color:"primary"},slot:"header"},[o("q-toolbar-title",[t._v("\n      Beacon\n      "),t.checkBeaconStatus("active")?o("div",{slot:"subtitle"},[t._v("Active")]):t._e(),t._v(" "),t.checkBeaconStatus("inactive")?o("div",{slot:"subtitle"},[t._v("Inactive")]):t._e(),t._v(" "),t.checkBeaconStatus("awaitingConnectionApproval")?o("div",{slot:"subtitle"},[t._v("Awaiting connection approval")]):t._e(),t._v(" "),t.checkBeaconStatus("connected")?o("div",{slot:"subtitle"},[t._v("Connected")]):t._e()]),t._v(" "),o("q-btn",{attrs:{flat:""},on:{click:function(e){t.toggleRight()}}},[o("q-icon",{attrs:{name:"menu"}})],1)],1),t._v(" "),o("q-tabs",{slot:"navigation",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-route-tab",{attrs:{name:"beacon",icon:"ion-flame",to:"/app/beacon",hide:"label",label:"Beacon"},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"map",icon:"map",to:"/app/map",hide:"label",label:"Map"},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"inbox",icon:"mail",to:"/app/connection-inbox",hide:"label",label:"Inbox",count:t.$store.state.user.beacon&&t.$store.state.user.beacon.incomingConnectionRequests.length},slot:"title"}),t._v(" "),o("q-route-tab",{attrs:{name:"settings",icon:"settings",to:"/app/settings",hide:"label",label:"Settings"},slot:"title"})],1)],1)},staticRenderFns:[]}},562:function(t,e,o){var n=o(563);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(478)("1c221f8c",n,!0)},563:function(t,e,o){e=t.exports=o(477)(void 0),e.push([t.i,'.sidebar-header{height:122px;padding:1rem;color:#fff;background:url("/assets/images/lighthouse.jpg") 0 20%;background-size:150%}.sidebar-header .sidebar-name{margin-bottom:0}',""])},564:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(47),i=o(257);e.default={name:"Sidebar",mixins:[i.a],components:{QList:n.w,QItem:n.q,QItemSide:n.t,QItemMain:n.r,QSideLink:n.F},methods:{toggleRight:function(){this.$emit("toggleRight")},countIncomingRequests:function(){return this.checkExistence(this.$store.state.user,["beacon","incomingConnectionRequests"])?" <strong>("+this.$store.state.user.beacon.incomingConnectionRequests.length+")</strong>":""},logout:function(){this.$cookie.delete("token"),this.$router.push("/")}}}},565:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-list",{staticClass:"no-padding",attrs:{"no-border":"",link:"","inset-delimiter":""}},[o("div",{staticClass:"sidebar-header column justify-end no-wrap"},[o("div",{staticClass:"sidebar-image"}),t._v(" "),this.$store.state.user?o("div",[o("img",{staticClass:"circular profile",attrs:{src:this.$store.state.user.gravatar}}),t._v(" "),o("h5",{staticClass:"sidebar-name"},[t._v("\n          "+t._s(this.$store.state.user.firstName)+"\n        ")])]):t._e()]),t._v(" "),o("q-side-link",{attrs:{item:"",to:"account"}},[o("q-item-side",{attrs:{icon:"account circle"}}),t._v(" "),o("q-item-main",{attrs:{label:"Account"}})],1),t._v(" "),o("q-item",{on:{click:function(e){t.logout()}}},[o("q-item-side",{attrs:{icon:"exit to app"}}),t._v(" "),o("q-item-main",{attrs:{label:"Logout"}})],1)],1)],1)},staticRenderFns:[]}},582:function(t,e,o){var n=o(583);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(478)("fcec1d3a",n,!0)},583:function(t,e,o){e=t.exports=o(477)(void 0),e.push([t.i,".postlogin-page-wrapper{width:500px;max-width:90vw}.colorpicker-block{padding:1px;background:rgba(0,0,0,.12);cursor:pointer}.colorpicker-block.disabled{opacity:.6}.colorpicker-wrapper{height:40px;cursor:pointer}.colorpicker{cursor:pointer;height:100%;position:absolute;top:0;right:0;bottom:0;left:0;padding:0;padding-bottom:0;border:0;opacity:0}.colorpicker:disabled{opacity:0!important}.colorpicker:focus{outline:0}.q-stepper.tutorial-tour{height:100%}.q-stepper.tutorial-tour .tutorial-step-list li:not(last-of-type){margin-bottom:1rem}.q-stepper.tutorial-tour .q-stepper-tab:nth-of-type(3).step-active{color:#ff9800}.q-stepper.tutorial-tour .q-stepper-tab:nth-of-type(4).step-active{color:#7cb342}",""])},584:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(47),i=o(483),a=o.n(i),s=o(484),r=o.n(s),c=o(536),l=o(254);e.default={name:"Postlogin",mixins:[l.a],components:{QLayout:n.v,QToolbar:n.Q,QToolbarTitle:n.R,QBtn:n.c,QIcon:n.n,QList:n.w,QListHeader:n.x,QItem:n.q,QItemSide:n.t,QItemMain:n.r,QSideLink:n.F,QModal:n.y,QStepper:n.K,QStep:n.J,QStepperNavigation:n.L,QInnerLoading:n.o,QSpinnerGears:n.I,PostloginHeader:a.a,Sidebar:r.a},data:function(){return{socketClientObj:{fullName:this.$store.state.user.fullName,email:this.$store.state.user.email,userId:this.$store.state.user._id},tourLoading:!1,tutorialStep:null}},computed:{},methods:{completeTutorialTour:function(){var t=this;this.tourLoading=!0,c.a.completeTutorialTour({userId:this.$store.state.user._id}).then(function(e){t.tourLoading=!1,t.$refs.tutorialTourModal.close()}).catch(function(){t.tourLoading=!1,t.$refs.tutorialTourModal.close(),t.createToast("Unable to fully complete tutorial tour at this time")})},getTutorialTourStepColor:function(){return"welcome"===this.tutorialStep||"announce"===this.tutorialStep||"wrap-up"===this.tutorialStep?"primary":"explore"===this.tutorialStep?"secondary":"connect"===this.tutorialStep?"tertiary":void 0},toggleRight:function(){this.$refs.layout.toggleRight()}},mounted:function(){this.$socket.emit("userNavigatedToPostlogin",this.socketClientObj),this.$store.state.user.hasCompletedTutorialTour||this.$refs.tutorialTourModal.open()},beforeDestroy:function(){this.$cookie.delete("has-seen-geolocation-alert"),this.$socket.emit("userNavigatedToPrelogin",this.socketClientObj)}}},585:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{ref:"layout",attrs:{view:"hHr Lpr fff","right-class":{"bg-grey-2":!0}}},[o("postlogin-header",{on:{toggleRight:t.toggleRight}}),t._v(" "),o("sidebar",{slot:"right"}),t._v(" "),o("router-view"),t._v(" "),o("audio",{attrs:{id:"horn"}},[o("source",{attrs:{src:"/assets/audio/horn.mp3",type:"audio/mpeg"}})]),t._v(" "),o("audio",{attrs:{id:"notification"}},[o("source",{attrs:{src:"/assets/audio/notification.mp3",type:"audio/mpeg"}})]),t._v(" "),o("q-modal",{ref:"tutorialTourModal",staticClass:"relative-position",attrs:{noEscDismiss:"",noBackdropDismiss:"","content-css":{maxWidth:"600px"}}},[o("q-stepper",{ref:"stepper",staticClass:"tutorial-tour",attrs:{flat:"",color:"primary","alternative-labels":""},model:{value:t.tutorialStep,callback:function(e){t.tutorialStep=e},expression:"tutorialStep"}},[o("q-step",{attrs:{default:"",name:"welcome",title:"Welcome",icon:"ion-android-hand","active-icon":"ion-android-hand"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Welcome to Beacon!")]),t._v(" "),o("p",[t._v("\n          This application is made for connecting with those around you. Before we let you loose, we'd like to explain the various features of Beacon so that you'll be able to jump in with full confidence.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"announce",title:"Announce",icon:"ion-flame","active-icon":"ion-flame"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Announce")]),t._v(" "),o("p",[t._v("\n          The cornerstones of Beacon are, well, the beacons.\n        ")]),t._v(" "),o("p",[t._v("\n          Beacons can only be placed on the beacon page at your "),o("strong",[t._v("current location")]),t._v(" and can be customized through titles, descriptions, colors, and tags.\n        ")]),t._v(" "),o("p",[t._v("\n          As the owner of a beacon, you are in charge of who gets to view and connect with it. You can filter out people based on age or gender and you can also set a beacon password for extra security.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"explore",title:"Explore",icon:"map","active-icon":"map"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Explore")]),t._v(" "),o("p",[t._v("\n          Hosting not your thing? Don't worry.\n        ")]),t._v(" "),o("p",[t._v("\n          Visit the map page to view the beacons around you. Beacons with age or gender restrictions that don't include you won't even appear on your map so you know that you'll be welcome at any beacons that do.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"connect",title:"Connect",icon:"fa-plug","active-icon":"fa-plug"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Connect")]),t._v(" "),o("p",[t._v("\n          Join forces via connections to strengthen a beacon's flame.\n        ")]),t._v(" "),o("p",[t._v("\n          When a connection request is sent to a beacon, it will appear in real-time in the beacon owner's inbox.\n        ")]),t._v(" "),o("p",[t._v("\n          Likewise, when the beacon owner decides to accept or deny the request, the user that sent it will be notified of their decision immediately.\n        ")]),t._v(" "),o("p",[t._v("\n          The more connections a beacon has, the "),o("strong",[t._v("bigger it will appear")]),t._v(" on the map.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"wrap-up",title:"Wrap-up",icon:"ion-flag","active-icon":"ion-flag"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Wrap-Up")]),t._v(" "),o("p",[t._v("\n          Here are some tips to make sure that your Beacon usage goes as smoothly as possible.\n        ")]),t._v(" "),o("ul",{staticClass:"tutorial-step-list"},[o("li",[t._v("\n            Remember that you must be "),o("strong",[t._v("within 250m")]),t._v(" of a beacon to connect to it.\n          ")]),t._v(" "),o("li",[t._v("\n            Try to use Wi-Fi or mobile data as opposed to a wired internet connection. Beacon relies heavily on accurate location data and wired connections are MUCH less accurate when compared to wireless alternatives.\n          ")]),t._v(" "),o("li",[t._v("\n            If your location is still inaccurate even while using a wireless internet connection, try moving to an open location that's both above ground and not surrounded by thick walls.\n          ")])]),t._v(" "),o("p",[t._v("\n          With all of that out of the way, we here at Beacon would like to thank you for using our application. We wish you the best of luck in the adventures it will bring. Now get out there and explore!\n        ")])]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n          Back\n        ")]):t._e(),t._v(" "),"wrap-up"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n          Continue\n        ")]):t._e(),t._v(" "),"wrap-up"===t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:t.completeTutorialTour}},[t._v("\n          Finish\n        ")]):t._e()],1)],1),t._v(" "),o("q-inner-loading",{attrs:{visible:t.tourLoading}},[o("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)],1)},staticRenderFns:[]}}});