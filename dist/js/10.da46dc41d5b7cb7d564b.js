webpackJsonp([10,14],{478:function(e,t,n){function o(e){n(529)}var a=n(15)(n(531),n(532),o,"data-v-7da23f5c",null);e.exports=a.exports},490:function(e,t,n){function o(e){n(611)}var a=n(15)(n(613),n(614),o,null,null);e.exports=a.exports},522:function(e,t,n){e.exports={default:n(523),__esModule:!0}},523:function(e,t,n){var o=n(47),a=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},528:function(e,t,n){"use strict";var o=n(32);t.a={createConnectionRequest:function(e){return o.a.http.post("connection/createconnectionrequest",e)},cancelConnectionRequest:function(e){return o.a.http.post("connection/cancelconnectionrequest",e)},approveConnectionRequest:function(e){return o.a.http.post("connection/approveconnectionrequest",e)},denyConnectionRequest:function(e){return o.a.http.post("connection/denyconnectionrequest",e)},removeConnection:function(e){return o.a.http.post("connection/removeconnection",e)},disconnectFromBeacon:function(e){return o.a.http.post("connection/disconnectfrombeacon",e)},createConnectionObject:function(e,t,n){return{userId:t._id,beaconId:e._id,beaconOwnerId:e.author._id,lat:e.position.lat,lng:e.position.lng,userLat:n.lat,userLng:n.lng,ownerName:e.author.fullName,name:t.fullName,gravatar:t.gravatar,user:t}}}},529:function(e,t,n){var o=n(530);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(476)("8e915d62",o,!0)},530:function(e,t,n){t=e.exports=n(475)(void 0),t.push([e.i,".connection-square[data-v-7da23f5c]{padding:1rem 1.5rem;color:#0c0c0c;transition:all .3s}.connection-square.map-modal[data-v-7da23f5c]{padding:0;font-size:.85rem}.connection-square[data-v-7da23f5c]:not(.map-modal){cursor:pointer}.connection-square[data-v-7da23f5c]:not(.map-modal):hover{background:#eee}.connection-square div.connection-name[data-v-7da23f5c]{text-overflow:ellipsis;max-width:100%;display:block;overflow:hidden}.connection-square span.connection-timestamp[data-v-7da23f5c]{color:#757575;font-size:90%;margin-top:.2rem}",""])},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"ConnectionSquare",props:["connection","mapModal"]}},532:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.connection?n("div",{staticClass:"connection-square text-center",class:{"map-modal":e.mapModal}},[n("img",{staticClass:"circular profile",attrs:{src:e.connection.gravatar}}),e._v(" "),n("div",{staticClass:"connection-name"},[e._v(e._s(e.connection.name))]),e._v(" "),e.mapModal?e._e():n("span",{staticClass:"connection-timestamp"},[e._v(e._s(e._f("moment")(e.connection.created,"from","now")))])]):e._e()},staticRenderFns:[]}},555:function(e,t,n){"use strict";var o=n(32);t.a={getCurrentPosition:function(){return o.a.http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDB7lZd5FSWzgoGMMwnMEVmHPAUeor69MM")},getBeaconDistance:function(e){return o.a.http.post("location/getbeacondistance",e)},createBeaconDistanceObject:function(e,t){return{beaconLat:e.position.lat,beaconLng:e.position.lng,userLat:t.lat,userLng:t.lng}}}},556:function(e,t,n){"use strict";var o=n(32);t.a={lightBeacon:function(e){return o.a.http.post("beacon/lightbeacon",e)},extinguishBeacon:function(e){return o.a.http.post("beacon/extinguishbeacon",e)},getNearbyBeacons:function(e){return o.a.http.post("beacon/getnearbybeacons",e)},verifyBeaconPassword:function(e){return o.a.http.post("beacon/verifybeaconpassword",e)}}},611:function(e,t,n){var o=n(612);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(476)("457a5142",o,!0)},612:function(e,t,n){t=e.exports=n(475)(void 0),t.push([e.i,".beaconMap{width:100%;height:400px}.map-modal .beacon-name{padding-top:1rem}.map-modal .beacon-tags,.map-modal .beacon-tags .beacon-tag{margin-bottom:.5rem}.map-modal .beacon-password-form{display:inline-block}.map-modal .connections-carousel{height:110px}.map-modal .connections-carousel .q-carousel-track{height:auto}.map-modal .connections-carousel .q-carousel-track>div{padding:0;min-height:0}.map-footer{height:50px;padding:0}.map-footer .q-btn{-webkit-box-flex:1;-ms-flex:1;flex:1;height:100%}",""])},613:function(e,t,n){"use strict";function o(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:null}Object.defineProperty(t,"__esModule",{value:!0});var a=n(522),s=n.n(a),c=n(46),i=n(556),r=n(253),d=n(256),l=n(555),u=n(528),m=n(478),p=n.n(m);t.default={name:"map",mixins:[r.a,d.a],components:{QWindowResizeObservable:c.Q,QModal:c.z,QModalLayout:c.A,QInput:c.q,QBtn:c.d,QIcon:c.o,QToolbar:c.O,QToolbarTitle:c.P,QChip:c.j,QTabs:c.M,QTab:c.K,QInnerLoading:c.p,QSpinnerGears:c.J,QCarousel:c.i,ConnectionSquare:p.a},data:function(){return{loading:!1,modalLoading:!1,distanceInfo:null,connectionErrors:[],beaconPassword:null,modalOpen:!1,mapOptions:{lat:0,lng:0,unitOfMeasurement:this.$store.state.user.settings.unitOfMeasurement||"miles",searchRadius:this.$store.state.user.settings.searchRadius||15,beaconLimit:this.$store.state.user.settings.beaconLimit||50,zoom:13,user:this.$store.state.user||{}},selectedBeacon:null,markers:null,mapHeight:"400px",currentPosition:{lng:null,lat:null},controlOptions:{zoomControl:!1,streetViewControl:!1,mapTypeControl:!1,fullscreenControl:!1}}},computed:{chunkedConnections:function(){if(this.selectedBeacon&&this.selectedBeacon.connections.length){for(var e=JSON.parse(s()(this.selectedBeacon.connections)),t=[];e.length>0;)t.push(e.splice(0,3));return t}return[]}},methods:{showButtons:function(e){return"connect"===e?!this.selectedBeacon.additionalSettings.password&&this.distanceInfo&&this.distanceInfo.canConnect&&this.$store.state.user.outgoingConnectionRequest.beaconId!==this.selectedBeacon._id&&this.$store.state.user.connectedTo.beaconId!==this.selectedBeacon._id&&!this.$store.state.user.beacon:"connect-password"===e?this.selectedBeacon.additionalSettings.password&&this.distanceInfo&&this.distanceInfo.canConnect&&this.$store.state.user.outgoingConnectionRequest.beaconId!==this.selectedBeacon._id&&this.$store.state.user.connectedTo.beaconId!==this.selectedBeacon._id&&!this.$store.state.user.beacon:"cancel-request"===e?this.$store.state.user.outgoingConnectionRequest.beaconId===this.selectedBeacon._id:"disconnect"===e?this.$store.state.user.connectedTo.beaconId===this.selectedBeacon._id:"extinguish"===e?this.$store.state.user.beacon&&this.$store.state.user.beacon._id===this.selectedBeacon._id:void 0},verifyBeaconPassword:function(){var e=this;this.modalLoading=!0;var t={beaconId:this.selectedBeacon._id,password:this.beaconPassword};i.a.verifyBeaconPassword(t).then(function(t){e.modalLoading=!1,t.body?e.createConnectionRequest(e.selectedBeacon):e.createToast("negative","Incorrect password")}).catch(function(t){e.modalLoading=!1,e.createToast("negative",t.body.message)})},disconnectFromBeacon:function(e){var t=this;this.modalLoading=!0,e.userId=this.$store.state.user._id,e.beaconId||(e.beaconId=e._id),u.a.disconnectFromBeacon(e).then(function(n){t.modalLoading=!1,t.$store.commit("updateUser",n.body);var o={toId:e.author._id,fromId:e.userId,fromName:e.name};t.$socket.emit("disconnectFromBeacon",o),t.$refs.mapModal.close()}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)})},extinguishBeacon:function(){var e=this;this.modalLoading=!0;var t=JSON.parse(s()(this.$store.state.user.beacon)),n={beaconId:t._id,userId:t.author};i.a.extinguishBeacon(n).then(function(n){e.modalLoading=!1,e.$store.commit("extinguishBeacon"),e.$store.commit("updateUser",n.body);var o={toIds:t.connections.map(function(e){return e.userId}),fromId:t.author,fromName:e.$store.state.user.fullName};e.$socket.emit("extinguishBeacon",o),e.loadMap(),e.$refs.mapModal.close()}).catch(function(t){e.beaconLit=!e.beaconLit,e.modalLoading=!1,e.createToast("negative",t.body.message)})},checkConnectionErrors:function(e,t){this.connectionErrors=[],t.canConnect||this.connectionErrors.push("You are not close enough to connect")},setMapCenter:function(e,t){var n=this.$store.state.user;this.doesObjectExist(n.beacon)&&!this.doesObjectExist(n.connectedTo)?(this.mapOptions.lng=n.beacon.location.coordinates[0],this.mapOptions.lat=n.beacon.location.coordinates[1]):this.doesObjectExist(n.connectedTo)&&!this.doesObjectExist(n.beacon)?(this.mapOptions.lng=n.connectedTo.lng,this.mapOptions.lat=n.connectedTo.lat):(this.mapOptions.lng=e,this.mapOptions.lat=t)},centerMap:function(){var e=new google.maps.LatLng(this.mapOptions.lat,this.mapOptions.lng);this.$refs.beaconMap.panTo(e)},getBeaconThemeColor:function(e){return e.additionalSettings.password?"secondary":"primary"},openMapModal:function(e){var t=this;this.modalLoading=!0,this.selectedBeacon=e,this.modalOpen=!0,this.$refs.connectionCarousel&&this.$refs.connectionCarousel.goToSlide(0),l.a.getBeaconDistance(l.a.createBeaconDistanceObject(e,this.currentPosition)).then(function(n){t.modalLoading=!1,t.distanceInfo=n.body,t.checkConnectionErrors(e,t.distanceInfo)}).catch(function(e){t.modalLoading=!1,t.$refs.mapModal.close(),t.createToast("negative",e.body.message)})},closeMapModal:function(){this.modalOpen=!1,this.$refs.mapModal.close()},createConnectionRequest:function(e){var t=this;this.modalLoading=!0;var n=u.a.createConnectionObject(e,this.$store.state.user,this.currentPosition);if(this.doesObjectExist(this.$store.state.user.outgoingConnectionRequest)&&this.$store.state.user.outgoingConnectionRequest.beaconId!==e.beaconId){var o=JSON.parse(s()(this.$store.state.user.outgoingConnectionRequest));u.a.cancelConnectionRequest(this.$store.state.user.outgoingConnectionRequest).then(function(e){var a={toId:o.beaconOwnerId,fromId:o.userId,fromName:o.name};t.$socket.emit("cancelConnectionRequest",a),u.a.createConnectionRequest(n).then(function(e){t.modalLoading=!1,t.$store.commit("updateUser",e.body),t.createToast("positive","Your connection request has been sent successfully");var n={toId:e.body.outgoingConnectionRequest.beaconOwnerId,fromId:e.body.outgoingConnectionRequest.userId,fromName:e.body.outgoingConnectionRequest.name};t.$socket.emit("createConnectionRequest",n),t.$refs.mapModal.close()}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)})}).catch(function(e){t.createToast("negative",e.body.message)})}else this.doesObjectExist(this.$store.state.user.connectedTo)&&this.$store.state.user.connectedTo.beaconId!==e.beaconId?u.a.disconnectFromBeacon(this.$store.state.user.connectedTo).then(function(o){t.modalLoading=!1,t.$store.commit("updateUser",o.body);var a={toId:e.author._id,fromId:e.userId,fromName:e.name};t.$socket.emit("disconnectFromBeacon",a),u.a.createConnectionRequest(n).then(function(e){t.modalLoading=!1,t.$store.commit("updateUser",e.body),t.createToast("positive","Your connection request has been sent successfully");var n={toId:e.body.outgoingConnectionRequest.beaconOwnerId,fromId:e.body.outgoingConnectionRequest.userId,fromName:e.body.outgoingConnectionRequest.name};t.$socket.emit("createConnectionRequest",n),t.$refs.mapModal.close()}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)})}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)}):u.a.createConnectionRequest(n).then(function(e){t.modalLoading=!1,t.$refs.mapModal.close(),t.$store.commit("updateUser",e.body),t.createToast("positive","Your connection request has been sent successfully");var n={toId:e.body.outgoingConnectionRequest.beaconOwnerId,fromId:e.body.outgoingConnectionRequest.userId,fromName:e.body.outgoingConnectionRequest.name};t.$socket.emit("createConnectionRequest",n)}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)})},cancelConnectionRequest:function(e){var t=this;this.modalLoading=!0,u.a.cancelConnectionRequest(e).then(function(n){t.modalLoading=!1,t.$store.commit("updateUser",n.body);var o={toId:e.beaconOwnerId,fromId:e.userId,fromName:e.name};t.$socket.emit("cancelConnectionRequest",o),t.$refs.mapModal.close()}).catch(function(e){t.modalLoading=!1,t.createToast("negative",e.body.message)})},checkLightOrDarkText:function(){var e=o(this.selectedBeacon.color),t=[e[0]/255,e[1]/255,e[2]/255];return t.forEach(function(e){e<=.03928?e/=12.92:e=Math.pow((e+.055)/1.055,2.4)}),.2126*t[0]+.7152*t[1]+.0722*t[2]>.179?"#0C0C0C":"#FFF"},updateMapHeight:function(){var e=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;this.mapHeight=e-122-50+"px",this.$refs.beaconMap.resizePreserveCenter()},generateMarkerSize:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:21,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:34,o=1;return e>0&&e<=10?o=1.05:e>10&&e<=25?o=1.15:e>25&&e<=100?o=1.25:e>100&&(o=1.35),new google.maps.Size(t*o,n*o)},loadMap:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=this||e;o.loading=!0,l.a.getCurrentPosition().then(function(e){o.setMapCenter(e.body.location.lng,e.body.location.lat),o.currentPosition.lng=o.mapOptions.lng,o.currentPosition.lat=o.mapOptions.lat,i.a.getNearbyBeacons(o.mapOptions).then(function(e){var t=new google.maps.LatLngBounds;if(e.body.length?(e.body.map(function(e){var n={lng:e.location.coordinates[0],lat:e.location.coordinates[1]},a={url:"http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|"+e.color.replace(/^#/,""),scaledSize:o.generateMarkerSize(e.connections.length),origin:new google.maps.Point(0,0),anchor:new google.maps.Point(10,34)};e.icon=a,e.opacity=e.author._id===o.$store.state.user._id?.3:1,e.zIndex=e.author._id===o.$store.state.user._id?10:1,e.title=e.author._id===o.$store.state.user._id?"Your beacon":e.author.firstName,t.extend(n),e.position=n}),o.markers=e.body):t.extend(o.currentPosition),n&&o.$refs.beaconMap.fitBounds(t),!o.doesObjectExist(o.$store.state.user.beacon)&&!o.doesObjectExist(o.$store.state.user.connectedTo)){var a="female"===o.$store.state.user.gender?"femaleMapMarker":"maleMapMarker";o.markers.push({position:{lng:o.mapOptions.lng,lat:o.mapOptions.lat},icon:"https://ck-beacon-frontend.herokuapp.com/assets/images/"+a+".png",opacity:1,zIndex:10,title:"You"})}o.loading=!1}).catch(function(){o.loading=!1,o.createToast("negative","Could not generate map at this time")})}).catch(function(){o.loading=!1,t.createToast("negative","Could not generate map at this time")})}},mounted:function(){var e=this;this.$q.events.$on("emitResizeMap",function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:300;e.$refs.beaconMap&&setTimeout(e.$refs.beaconMap.resizePreserveCenter,t)}),this.loadMap(this)}}},614:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative-position"},[n("q-window-resize-observable",{on:{resize:e.updateMapHeight}}),e._v(" "),n("gmap-map",{ref:"beaconMap",staticClass:"beaconMap",style:{height:e.mapHeight},attrs:{center:e.mapOptions,zoom:13,options:e.controlOptions,"map-type-id":"terrain"}},e._l(e.markers,function(t,o){return n("gmap-marker",{key:o,attrs:{icon:t.icon,opacity:t.opacity,zIndex:t.zIndex,title:t.title,position:t.position,clickable:!0},on:{click:function(n){e.openMapModal(t)}}})})),e._v(" "),n("q-modal",{ref:"mapModal",staticClass:"relative-position map-modal mobile-modal-padding footer-no-shadow",attrs:{"content-css":{minWidth:"400px",minHeight:"400px"}},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[e.selectedBeacon?n("q-modal-layout",[n("q-toolbar",{style:{background:e.selectedBeacon.color},slot:"header"},[n("div",{staticClass:"q-toolbar-title row justify-start align-center"},[n("img",{staticClass:"circular profile on-left",attrs:{src:e.selectedBeacon.author.gravatar}}),e._v(" "),n("div",{staticClass:"modal-header-name row items-center",style:{color:e.checkLightOrDarkText()}},[e._v("\n            "+e._s(e.selectedBeacon.author.firstName)+"\n          ")])])]),e._v(" "),n("h6",{staticClass:"text-center beacon-name"},[e._v(e._s(e.selectedBeacon.name))]),e._v(" "),n("div",{staticClass:"modal-body"},[n("div",[n("p",[e._v(e._s(e.selectedBeacon.description))])]),e._v(" "),n("div",{staticClass:"beacon-tags"},e._l(e.selectedBeacon.additionalSettings.tags,function(t){return n("q-chip",{key:t,staticClass:"beacon-tag on-left",attrs:{color:e.getBeaconThemeColor(e.selectedBeacon),small:""}},[e._v("\n            "+e._s(t)+"\n          ")])})),e._v(" "),e.connectionErrors.length?n("div",e._l(e.connectionErrors,function(t,o){return n("div",{key:o,staticClass:"info-block negative"},[n("q-icon",{attrs:{name:"fa-exclamation-circle"}}),e._v(" "),n("div",{attrs:{color:"negative"}},[e._v(e._s(t))])],1)})):e._e(),e._v(" "),n("div",[e.chunkedConnections.length<2?n("div",e._l(e.chunkedConnections,function(t,o){return n("div",{key:o,staticClass:"row"},e._l(e.chunkedConnections[o],function(e){return n("connection-square",{key:"connection.userId",staticClass:"col col-xs-4",attrs:{"map-modal":!0,connection:e}})}))})):e._e(),e._v(" "),e.chunkedConnections.length>=2?n("q-carousel",{ref:"connectionCarousel",staticClass:"connections-carousel",attrs:{dots:""}},e._l(e.chunkedConnections,function(t,o){return n("div",{key:o,staticClass:"row",slot:"slide"},e._l(e.chunkedConnections[o],function(e){return n("connection-square",{key:"connection.userId",staticClass:"col col-xs-4",attrs:{"map-modal":!0,connection:e}})}))})):e._e()],1)]),e._v(" "),n("q-toolbar",{staticClass:"bg-white",slot:"footer"},[n("div",{staticClass:"q-toolbar-title text-right"},[n("q-btn",{attrs:{flat:"",color:"primary"},on:{click:e.closeMapModal}},[e._v("Close")]),e._v(" "),e.showButtons("connect")?n("q-btn",{attrs:{color:"primary"},on:{click:function(t){e.createConnectionRequest(e.selectedBeacon)}}},[e._v("\n          Connect\n          ")]):e._e(),e._v(" "),e.showButtons("connect-password")?n("form",{ref:"beaconPasswordForm",staticClass:"beacon-password-form",on:{submit:function(t){t.preventDefault(),e.verifyBeaconPassword(t)}}},[n("q-input",{attrs:{"max-length":"50",type:"password",color:"secondary",placeholder:"Enter beacon password",inverted:"",after:[{icon:"arrow_forward",handler:e.verifyBeaconPassword}]},model:{value:e.beaconPassword,callback:function(t){e.beaconPassword=t},expression:"beaconPassword"}})],1):e._e(),e._v(" "),e.showButtons("cancel-request")?n("q-btn",{attrs:{color:"negative"},on:{click:function(t){e.cancelConnectionRequest(e.$store.state.user.outgoingConnectionRequest)}}},[e._v("\n          Cancel connection request\n          ")]):e._e(),e._v(" "),e.showButtons("disconnect")?n("q-btn",{attrs:{color:"negative"},on:{click:function(t){e.disconnectFromBeacon(e.selectedBeacon)}}},[e._v("\n          Disconnect\n          ")]):e._e(),e._v(" "),e.showButtons("extinguish")?n("q-btn",{attrs:{color:"negative"},on:{click:function(t){e.extinguishBeacon(e.selectedBeacon)}}},[e._v("\n          Extinguish\n          ")]):e._e()],1)])],1):e._e(),e._v(" "),n("q-inner-loading",{staticClass:"modal-inner-loading",attrs:{visible:e.modalLoading}},[n("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1),e._v(" "),n("q-toolbar",{staticClass:"map-footer row justify-center items-center"},[n("q-btn",{staticClass:"icon-button",attrs:{flat:"",icon:"my_location"},on:{click:function(t){t.preventDefault(),e.centerMap()}}}),e._v(" "),n("q-btn",{staticClass:"icon-button",attrs:{flat:"",icon:"ion-refresh"},on:{click:function(t){t.preventDefault(),e.loadMap(null,!1)}}})],1),e._v(" "),n("q-inner-loading",{attrs:{visible:e.loading}},[n("q-spinner-gears",{attrs:{size:"50px",color:"primary"}})],1)],1)},staticRenderFns:[]}}});