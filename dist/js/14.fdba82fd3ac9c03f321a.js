webpackJsonp([14],{486:function(t,e,o){function n(t){o(572)}var a=o(16)(o(574),o(575),n,null,null);t.exports=a.exports},530:function(t,e,o){"use strict";var n=o(35);e.a={getUserByEmail:function(t){return n.a.http.get("user/getuser/"+t)},updateUserSettings:function(t){return n.a.http.post("user/updateusersettings",t)},updateUserInformation:function(t){return n.a.http.post("user/updateuserinformation",t)},updateUserEmail:function(t){return n.a.http.post("user/updateuseremail",t)},updateUserPassword:function(t){return n.a.http.post("user/updateuserpassword",t)},completeTutorialTour:function(t){return n.a.http.post("user/completetutorialtour",t)},addCorrectedAddress:function(t){return n.a.http.post("user/addcorrectedaddress",t)},deleteCorrectedAddress:function(t){return n.a.http.post("user/deletecorrectedaddress",t)}}},572:function(t,e,o){var n=o(573);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(478)("1a73eb98",n,!0)},573:function(t,e,o){e=t.exports=o(477)(void 0),e.push([t.i,".stepper-wrapper{position:absolute;top:0;right:0;bottom:0;left:0;background:#fff}.q-stepper.tutorial-tour:not(.mobile){height:100%}.q-stepper.tutorial-tour .tutorial-step-list li:not(last-of-type){margin-bottom:1rem}.q-stepper.tutorial-tour .q-stepper-tab:nth-of-type(3).step-active{color:#ff9800}.q-stepper.tutorial-tour .q-stepper-tab:nth-of-type(4).step-active{color:#7cb342}.q-stepper.tutorial-tour .q-stepper-nav{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.q-stepper.tutorial-tour.mobile{box-shadow:none}.q-stepper.tutorial-tour.mobile .q-stepper-header{width:100%}.q-stepper.tutorial-tour.mobile .q-stepper-step{max-width:100%}",""])},574:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(47),a=o(530),r=o(255),i=n.Z.viewport;e.default={name:"TutorialTour",mixins:[r.a],components:{QLayout:n.y,QToolbar:n.T,QToolbarTitle:n.U,QBtn:n.e,QIcon:n.q,QList:n.z,QListHeader:n.A,QItem:n.t,QItemSide:n.w,QItemMain:n.u,QSideLink:n.I,QModal:n.B,QStepper:n.N,QStep:n.M,QStepperNavigation:n.O,QInnerLoading:n.r,QSpinnerGears:n.L},data:function(){return{tourLoading:!1,showStepper:!1,tutorialStep:null}},computed:{tourModalWidth:function(){return this.$q.platform.is.mobile?"100%":i().width<=600?"100%":"600px"}},methods:{completeTutorialTour:function(){var t=this;this.tourLoading=!0,a.a.completeTutorialTour({userId:this.$store.state.user._id}).then(function(e){t.tourLoading=!1,t.showStepper=!1,t.$refs.tutorialTourModal.close()}).catch(function(){t.tourLoading=!1,t.showStepper=!1,t.$refs.tutorialTourModal.close(),t.createToast("Unable to fully complete tutorial tour at this time")})},getTutorialTourStepColor:function(){return"welcome"===this.tutorialStep||"announce"===this.tutorialStep||"wrap-up"===this.tutorialStep?"primary":"explore"===this.tutorialStep?"secondary":"connect"===this.tutorialStep?"tertiary":void 0}},mounted:function(){this.$socket.emit("userNavigatedToPostlogin",this.socketClientObj),this.$store.state.user.hasCompletedTutorialTour||(this.$q.platform.is.mobile?this.showStepper=!0:this.$refs.tutorialTourModal.open())}}},575:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("q-modal",{ref:"tutorialTourModal",staticClass:"relative-position",attrs:{noEscDismiss:"",noBackdropDismiss:"","content-css":{maxWidth:t.tourModalWidth}}},[o("q-stepper",{ref:"stepper",staticClass:"tutorial-tour",attrs:{flat:"",color:"primary","alternative-labels":"",contractable:""},model:{value:t.tutorialStep,callback:function(e){t.tutorialStep=e},expression:"tutorialStep"}},[o("q-step",{attrs:{default:"",name:"welcome",title:"Welcome",icon:"ion-android-hand","active-icon":"ion-android-hand"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Welcome to Beacon!")]),t._v(" "),o("p",[t._v("\n          This application is made for connecting with those around you. Before we let you loose, we'd like to explain the various features of Beacon so that you'll be able to jump in with full confidence.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"announce",title:"Announce",icon:"ion-flame","active-icon":"ion-flame"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Announce")]),t._v(" "),o("p",[t._v("\n          The cornerstones of Beacon are, well, the beacons.\n        ")]),t._v(" "),o("p",[t._v("\n          Beacons can only be placed on the beacon page at your "),o("strong",[t._v("current location")]),t._v(" and can be customized through titles, descriptions, colors, and tags.\n        ")]),t._v(" "),o("p",[t._v("\n          As the owner of a beacon, you are in charge of who gets to view and connect with it. You can filter out people based on age or gender and you can also set a beacon password for extra security.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"explore",title:"Explore",icon:"map","active-icon":"map"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Explore")]),t._v(" "),o("p",[t._v("\n          Hosting not your thing? Don't worry.\n        ")]),t._v(" "),o("p",[t._v("\n          Visit the map page to view the beacons around you. Beacons with age or gender restrictions that don't include you won't even appear on your map so you know that you'll be welcome at any beacons that do.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"connect",title:"Connect",icon:"fa-plug","active-icon":"fa-plug"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Connect")]),t._v(" "),o("p",[t._v("\n          Join forces via connections to strengthen a beacon's flame.\n        ")]),t._v(" "),o("p",[t._v("\n          When a connection request is sent to a beacon, it will appear in real-time in the beacon owner's inbox.\n        ")]),t._v(" "),o("p",[t._v("\n          Likewise, when the beacon owner decides to accept or deny the request, the user that sent it will be notified of their decision immediately.\n        ")]),t._v(" "),o("p",[t._v("\n          The more connections a beacon has, the "),o("strong",[t._v("bigger it will appear")]),t._v(" on the map.\n        ")])]),t._v(" "),o("q-step",{attrs:{name:"wrap-up",title:"Wrap-up",icon:"ion-flag","active-icon":"ion-flag"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Wrap-Up")]),t._v(" "),o("p",[t._v("\n          Here are some tips to make sure that your Beacon usage goes as smoothly as possible.\n        ")]),t._v(" "),o("ul",{staticClass:"tutorial-step-list"},[o("li",[t._v("\n            Remember that you must be "),o("strong",[t._v("within 250m")]),t._v(" of a beacon to connect to it.\n          ")]),t._v(" "),o("li",[t._v("\n            Try to use Wi-Fi or mobile data as opposed to a wired internet connection. Beacon relies heavily on accurate location data and wired connections are MUCH less accurate when compared to wireless alternatives.\n          ")]),t._v(" "),o("li",[t._v("\n            If your location is still inaccurate even while using a wireless internet connection, try moving to an open location that's both above ground and not surrounded by thick walls.\n          ")])]),t._v(" "),o("p",[t._v("\n          With all of that out of the way, we here at Beacon would like to thank you for using our application. We wish you the best of luck in the adventures it will bring. Now get out there and explore!\n        ")])]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n          Back\n        ")]):t._e(),t._v(" "),"wrap-up"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n          Continue\n        ")]):t._e(),t._v(" "),"wrap-up"===t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:t.completeTutorialTour}},[t._v("\n          Finish\n        ")]):t._e()],1),t._v(" "),o("q-inner-loading",{attrs:{visible:t.tourLoading}},[o("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)],1),t._v(" "),t.showStepper?o("div",{staticClass:"stepper-wrapper"},[o("q-stepper",{ref:"stepper",staticClass:"tutorial-tour mobile",attrs:{flat:"",color:"primary","alternative-labels":"",contractable:""},model:{value:t.tutorialStep,callback:function(e){t.tutorialStep=e},expression:"tutorialStep"}},[o("q-step",{attrs:{default:"",name:"welcome",title:"Welcome",icon:"ion-android-hand","active-icon":"ion-android-hand"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Welcome to Beacon!")]),t._v(" "),o("p",[t._v("\n          This application is made for connecting with those around you. Before we let you loose, we'd like to explain the various features of Beacon so that you'll be able to jump in with full confidence.\n        ")]),t._v(" "),o("q-stepper-navigation",[o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n            Continue\n          ")])],1)],1),t._v(" "),o("q-step",{attrs:{name:"announce",title:"Announce",icon:"ion-flame","active-icon":"ion-flame"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Announce")]),t._v(" "),o("p",[t._v("\n          The cornerstones of Beacon are, well, the beacons.\n        ")]),t._v(" "),o("p",[t._v("\n          Beacons can only be placed on the beacon page at your "),o("strong",[t._v("current location")]),t._v(" and can be customized through titles, descriptions, colors, and tags.\n        ")]),t._v(" "),o("p",[t._v("\n          As the owner of a beacon, you are in charge of who gets to view and connect with it. You can filter out people based on age or gender and you can also set a beacon password for extra security.\n        ")]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n            Back\n          ")]):t._e(),t._v(" "),o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n            Continue\n          ")])],1)],1),t._v(" "),o("q-step",{attrs:{name:"explore",title:"Explore",icon:"map","active-icon":"map"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Explore")]),t._v(" "),o("p",[t._v("\n          Hosting not your thing? Don't worry.\n        ")]),t._v(" "),o("p",[t._v("\n          Visit the map page to view the beacons around you. Beacons with age or gender restrictions that don't include you won't even appear on your map so you know that you'll be welcome at any beacons that do.\n        ")]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n            Back\n          ")]):t._e(),t._v(" "),o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n            Continue\n          ")])],1)],1),t._v(" "),o("q-step",{attrs:{name:"connect",title:"Connect",icon:"fa-plug","active-icon":"fa-plug"}},[o("h5",{staticClass:"text-center text-secondary"},[t._v("Connect")]),t._v(" "),o("p",[t._v("\n          Join forces via connections to strengthen a beacon's flame.\n        ")]),t._v(" "),o("p",[t._v("\n          When a connection request is sent to a beacon, it will appear in real-time in the beacon owner's inbox.\n        ")]),t._v(" "),o("p",[t._v("\n          Likewise, when the beacon owner decides to accept or deny the request, the user that sent it will be notified of their decision immediately.\n        ")]),t._v(" "),o("p",[t._v("\n          The more connections a beacon has, the "),o("strong",[t._v("bigger it will appear")]),t._v(" on the map.\n        ")]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n            Back\n          ")]):t._e(),t._v(" "),o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:function(e){t.$refs.stepper.next()}}},[t._v("\n            Continue\n          ")])],1)],1),t._v(" "),o("q-step",{attrs:{name:"wrap-up",title:"Wrap-up",icon:"ion-flag","active-icon":"ion-flag"}},[o("h5",{staticClass:"text-center text-primary"},[t._v("Wrap-Up")]),t._v(" "),o("p",[t._v("\n          Here are some tips to make sure that your Beacon usage goes as smoothly as possible.\n        ")]),t._v(" "),o("ul",{staticClass:"tutorial-step-list"},[o("li",[t._v("\n            Remember that you must be "),o("strong",[t._v("within 250m")]),t._v(" of a beacon to connect to it.\n          ")]),t._v(" "),o("li",[t._v("\n            Try to use Wi-Fi or mobile data as opposed to a wired internet connection. Beacon relies heavily on accurate location data and wired connections are MUCH less accurate when compared to wireless alternatives.\n          ")]),t._v(" "),o("li",[t._v("\n            If your location is still inaccurate even while using a wireless internet connection, try moving to an open location that's both above ground and not surrounded by thick walls.\n          ")])]),t._v(" "),o("p",[t._v("\n          With all of that out of the way, we here at Beacon would like to thank you for using our application. We wish you the best of luck in the adventures it will bring. Now get out there and explore!\n        ")]),t._v(" "),o("q-stepper-navigation",["welcome"!==t.tutorialStep?o("q-btn",{attrs:{color:t.getTutorialTourStepColor(),flat:""},on:{click:function(e){t.$refs.stepper.previous()}}},[t._v("\n            Back\n          ")]):t._e(),t._v(" "),o("q-btn",{attrs:{color:t.getTutorialTourStepColor()},on:{click:t.completeTutorialTour}},[t._v("\n            Finish\n          ")])],1)],1),t._v(" "),o("q-inner-loading",{attrs:{visible:t.tourLoading}},[o("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)],1):t._e()],1)},staticRenderFns:[]}}});