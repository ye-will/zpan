(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54185f58"],{"0b47":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-header",[i("div",{staticClass:"logo"},[i("img",{attrs:{src:n("cf05"),alt:"ZPan"},on:{click:function(t){return e.$router.push("/")}}})]),e.showMenu?i("el-menu",{staticClass:"navbar",staticStyle:{width:"100%"},attrs:{"default-active":e.menuActive,mode:"horizontal",router:""}},[e._l(e.menus.slice(0,5),(function(t,n){return i("el-menu-item",{key:n,attrs:{index:"/"+t.name}},[e._v(e._s(t.title))])})),i("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.menus.length>5,expression:"menus.length > 5"}],attrs:{index:"more"}},[i("template",{slot:"title"},[e._v("更多")]),e._l(e.menus.slice(5),(function(t,n){return i("el-menu-item",{key:n,attrs:{index:t.path}},[e._v(e._s(t.title))])}))],2)],2):e._e(),i("div",{staticStyle:{position:"absolute",right:"20px"}},[i("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:e.logined,expression:"logined"}],attrs:{trigger:"click"},on:{command:e.onDropdown,"visible-change":e.onVisible}},[i("el-avatar",{staticStyle:{"vertical-align":"middle","margin-right":"4px"},attrs:{size:30,src:e.profile.avatar}}),i("span",[e._v(e._s(e.profile.nickname))]),i("el-dropdown-menu",{staticStyle:{width:"200px"},attrs:{slot:"dropdown"},slot:"dropdown"},[i("div",{staticStyle:{margin:"auto 20px"}},[i("el-row",{staticStyle:{"text-align":"center",margin:"10px 0"}},[i("el-avatar",{attrs:{size:50,src:e.profile.avatar}})],1),i("el-row",{staticClass:"storage"},[i("p",[i("span",{},[e._v(e._s(e.$t("leftnav.storage")))]),i("span",{staticStyle:{float:"right"}},[e._v(e._s(e.storage.percentage)+"%")])]),i("el-progress",{attrs:{percentage:e.storage.percentage,"show-text":!1}}),i("p",{staticStyle:{color:"rgba(0, 0, 0, 0.54)","font-size":"0.75rem"}},[e._v(e._s(e.storage.used)+"/"+e._s(e.storage.max))])],1)],1),i("el-dropdown-item",{attrs:{icon:"el-icon-setting",command:"profile",divided:""}},[e._v(e._s(e.$t("topbar.settings")))]),i("el-dropdown-item",{directives:[{name:"show",rawName:"v-show",value:e.showAdmin,expression:"showAdmin"}],attrs:{icon:"el-icon-set-up",command:"admin"}},[e._v(e._s(e.$t("topbar.s-platform")))]),i("el-dropdown-item",{attrs:{icon:"el-icon-switch-button",command:"signout"}},[e._v(e._s(e.$t("topbar.signout")))])],1)],1)],1)],1)},o=[],s=n("9225"),a=n("90fe"),r=n("a78e"),l=n.n(r),c="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",u={props:{menus:Array,logined:Boolean},data:function(){return{storage:{percentage:0},user:{},profile:{}}},watch:{$route:"onRouteChange",locale:function(e){Object(s["b"])(e)}},computed:{showMenu:function(){return this.menus&&this.menus.length>0},showAdmin:function(){return"admin"==l.a.get("z-role")},menuActive:function(){return"/".concat(this.$route.params.sname)}},methods:{onRouteChange:function(e,t){this.logined&&this.userInfo()},userInfo:function(){var e=this;this.$zpan.User.profileGet().then((function(t){e.user=t.data,e.profile=e.user.profile,""==e.profile.avatar&&(e.profile.avatar=c),e.profile.locale&&(e.$i18n.locale=e.profile.locale),e.storage={used:a["a"].formatBytes(e.user.storage.used,0),max:a["a"].formatBytes(e.user.storage.max,0),percentage:Math.round(e.user.storage.used/e.user.storage.max*1e4)/100}}))},onDropdown:function(e){this.$router.push({name:e})},onVisible:function(e){e&&this.userInfo()}},mounted:function(){this.logined&&this.userInfo()}},d=u,p=(n("a0b4"),n("2877")),f=Object(p["a"])(d,i,o,!1,null,null,null);t["a"]=f.exports},2953:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("Topbar",{attrs:{logined:""}}),n("el-container",{staticStyle:{height:"100%"}},[n("el-aside",{staticStyle:{height:"100%","background-color":"#f4f4f5"},attrs:{width:"200px"}},[n("el-menu",{attrs:{"default-active":e.routeFullPath,"background-color":"#f4f4f5",router:""}},[n("el-menu-item",{attrs:{index:"/admin/dashboard"}},[n("i",{staticClass:"el-icon-s-home"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页")])]),n("el-menu-item",{attrs:{index:"/admin/storages"}},[n("i",{staticClass:"el-icon-files"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("存储管理")])]),n("el-menu-item",{attrs:{index:"/admin/users"}},[n("i",{staticClass:"el-icon-user"}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v("用户管理")])]),n("el-submenu",{attrs:{index:"/admin/settings"}},[n("template",{slot:"title"},[n("i",{staticClass:"el-icon-files"}),n("span",[e._v("系统设置")])]),n("el-menu-item",{attrs:{index:"/admin/settings"}},[e._v("站点设置")]),n("el-menu-item",{attrs:{index:"/admin/settings/email"}},[e._v("发信邮箱")])],2)],1)],1),n("el-main",[n("router-view")],1)],1)],1)},o=[],s=n("0b47"),a={components:{Topbar:s["a"]},data:function(){return{routeFullPath:"disk"}},watch:{$route:function(e,t){this.routeFullPath=e.fullPath}},mounted:function(){this.routeFullPath=this.$route.fullPath}},r=a,l=(n("c71b"),n("2877")),c=Object(l["a"])(r,i,o,!1,null,"1df4bb25",null);t["default"]=c.exports},9884:function(e,t,n){},a0b4:function(e,t,n){"use strict";n("9884")},a78e:function(e,t,n){var i,o;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(s){var a;if(i=s,o="function"===typeof i?i.call(t,n,t,e):i,void 0===o||(e.exports=o),a=!0,e.exports=s(),a=!0,!a){var r=window.Cookies,l=window.Cookies=s();l.noConflict=function(){return window.Cookies=r,l}}})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var i in n)t[i]=n[i]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function n(i){function o(){}function s(t,n,s){if("undefined"!==typeof document){s=e({path:"/"},o.defaults,s),"number"===typeof s.expires&&(s.expires=new Date(1*new Date+864e5*s.expires)),s.expires=s.expires?s.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(c){}n=i.write?i.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var r="";for(var l in s)s[l]&&(r+="; "+l,!0!==s[l]&&(r+="="+s[l].split(";")[0]));return document.cookie=t+"="+n+r}}function a(e,n){if("undefined"!==typeof document){for(var o={},s=document.cookie?document.cookie.split("; "):[],a=0;a<s.length;a++){var r=s[a].split("="),l=r.slice(1).join("=");n||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(r[0]);if(l=(i.read||i)(l,c)||t(l),n)try{l=JSON.parse(l)}catch(u){}if(o[c]=l,e===c)break}catch(u){}}return e?o[e]:o}}return o.set=s,o.get=function(e){return a(e,!1)},o.getJSON=function(e){return a(e,!0)},o.remove=function(t,n){s(t,"",e(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}return n((function(){}))}))},aa05:function(e,t,n){},c71b:function(e,t,n){"use strict";n("aa05")},cf05:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-54185f58.b6470840.js.map