(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ace7ddd"],{"02b5":function(e,t,r){},"0a6e":function(e,t,r){"use strict";r("02b5")},"0b47":function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-header",[s("div",{staticClass:"logo"},[s("img",{attrs:{src:r("cf05"),alt:"ZPan"},on:{click:function(t){return e.$router.push("/")}}})]),e.showMenu?s("el-menu",{staticClass:"navbar",staticStyle:{width:"100%"},attrs:{"default-active":e.menuActive,mode:"horizontal",router:""}},[e._l(e.menus.slice(0,5),(function(t,r){return s("el-menu-item",{key:r,attrs:{index:"/"+t.name}},[e._v(e._s(t.title))])})),s("el-submenu",{directives:[{name:"show",rawName:"v-show",value:e.menus.length>5,expression:"menus.length > 5"}],attrs:{index:"more"}},[s("template",{slot:"title"},[e._v("更多")]),e._l(e.menus.slice(5),(function(t,r){return s("el-menu-item",{key:r,attrs:{index:t.path}},[e._v(e._s(t.title))])}))],2)],2):e._e(),s("div",{staticStyle:{position:"absolute",right:"20px"}},[s("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:e.logined,expression:"logined"}],attrs:{trigger:"click"},on:{command:e.onDropdown,"visible-change":e.onVisible}},[s("el-avatar",{staticStyle:{"vertical-align":"middle","margin-right":"4px"},attrs:{size:30,src:e.profile.avatar}}),s("span",[e._v(e._s(e.profile.nickname))]),s("el-dropdown-menu",{staticStyle:{width:"200px"},attrs:{slot:"dropdown"},slot:"dropdown"},[s("div",{staticStyle:{margin:"auto 20px"}},[s("el-row",{staticStyle:{"text-align":"center",margin:"10px 0"}},[s("el-avatar",{attrs:{size:50,src:e.profile.avatar}})],1),s("el-row",{staticClass:"storage"},[s("p",[s("span",{},[e._v(e._s(e.$t("leftnav.storage")))]),s("span",{staticStyle:{float:"right"}},[e._v(e._s(e.storage.percentage)+"%")])]),s("el-progress",{attrs:{percentage:e.storage.percentage,"show-text":!1}}),s("p",{staticStyle:{color:"rgba(0, 0, 0, 0.54)","font-size":"0.75rem"}},[e._v(e._s(e.storage.used)+"/"+e._s(e.storage.max))])],1)],1),s("el-dropdown-item",{attrs:{icon:"el-icon-setting",command:"profile",divided:""}},[e._v(e._s(e.$t("topbar.settings")))]),s("el-dropdown-item",{directives:[{name:"show",rawName:"v-show",value:e.showAdmin,expression:"showAdmin"}],attrs:{icon:"el-icon-set-up",command:"admin"}},[e._v(e._s(e.$t("topbar.s-platform")))]),s("el-dropdown-item",{attrs:{icon:"el-icon-switch-button",command:"signout"}},[e._v(e._s(e.$t("topbar.signout")))])],1)],1)],1)],1)},a=[],o=r("9225"),n=r("90fe"),i=r("a78e"),l=r.n(i),c="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",m={props:{menus:Array,logined:Boolean},data:function(){return{storage:{percentage:0},user:{},profile:{}}},watch:{$route:"onRouteChange",locale:function(e){Object(o["b"])(e)}},computed:{showMenu:function(){return this.menus&&this.menus.length>0},showAdmin:function(){return"admin"==l.a.get("z-role")},menuActive:function(){return"/".concat(this.$route.params.sname)}},methods:{onRouteChange:function(e,t){this.logined&&this.userInfo()},userInfo:function(){var e=this;this.$zpan.User.profileGet().then((function(t){e.user=t.data,e.profile=e.user.profile,""==e.profile.avatar&&(e.profile.avatar=c),e.profile.locale&&(e.$i18n.locale=e.profile.locale),e.storage={used:n["a"].formatBytes(e.user.storage.used,0),max:n["a"].formatBytes(e.user.storage.max,0),percentage:Math.round(e.user.storage.used/e.user.storage.max*1e4)/100}}))},onDropdown:function(e){this.$router.push({name:e})},onVisible:function(e){e&&this.userInfo()}},mounted:function(){this.logined&&this.userInfo()}},u=m,p=(r("a0b4"),r("2877")),d=Object(p["a"])(u,s,a,!1,null,null,null);t["a"]=d.exports},9884:function(e,t,r){},a0b4:function(e,t,r){"use strict";r("9884")},a25c:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("Topbar"),r("div",{staticClass:"installer"},[r("el-card",{staticStyle:{padding:"40px"},attrs:{shadow:"never"}},[r("el-steps",{staticClass:"step",attrs:{active:e.step,"finish-status":"success"}},[r("el-step",{attrs:{title:"配置数据库"}}),r("el-step",{attrs:{title:"配置管理员账号"}}),r("el-step",{attrs:{title:"安装完成"}})],1),r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.stepShown(0),expression:"stepShown(0)"}],staticClass:"form",attrs:{model:e.form.database,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"数据库类型",prop:"driver"}},[r("el-radio-group",{model:{value:e.form.database.driver,callback:function(t){e.$set(e.form.database,"driver",t)},expression:"form.database.driver"}},[r("el-radio",{attrs:{label:"sqlite3"}}),r("el-radio",{attrs:{label:"mysql"}}),r("el-radio",{attrs:{label:"postgres"}}),r("el-radio",{attrs:{label:"mssql"}})],1)],1),r("el-form-item",{attrs:{label:"DSN",prop:"dsn"}},[r("el-input",{model:{value:e.form.database.dsn,callback:function(t){e.$set(e.form.database,"dsn",t)},expression:"form.database.dsn"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.step++}}},[e._v("下一步")])],1)],1),r("el-form",{directives:[{name:"show",rawName:"v-show",value:e.stepShown(1),expression:"stepShown(1)"}],ref:"form",staticClass:"form",attrs:{model:e.form.administrator,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"管理员账号",prop:"email"}},[r("el-input",{model:{value:e.form.administrator.email,callback:function(t){e.$set(e.form.administrator,"email",t)},expression:"form.administrator.email"}})],1),r("el-form-item",{attrs:{label:"管理员密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.administrator.password,callback:function(t){e.$set(e.form.administrator,"password",t)},expression:"form.administrator.password"}})],1),r("el-form-item",{attrs:{label:"密码确认",prop:"passwordr"}},[r("el-input",{attrs:{type:"password"},model:{value:e.form.administrator.passwordr,callback:function(t){e.$set(e.form.administrator,"passwordr",t)},expression:"form.administrator.passwordr"}})],1),r("el-form-item",[r("el-button",{on:{click:function(t){e.step--}}},[e._v("上一步")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("form")}}},[e._v("开始安装")])],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.stepShown(3),expression:"stepShown(3)"}],staticStyle:{"text-align":"center"}},[r("h3",{staticStyle:{"margin-bottom":"50px"}},[e._v("恭喜！ZPan安装成功啦~")]),r("el-button",{attrs:{type:"primary"},on:{click:e.toSignin}},[e._v("去登录")])],1)],1)],1)],1)},a=[],o=r("0b47"),n={components:{Topbar:o["a"]},data:function(){var e=this,t=function(t,r,s){r?(""!==e.form.administrator.passwordr&&e.$refs.form.validateField("passwordr"),s()):s(new Error("请输入密码"))},r=function(t,r,s){r?r!==e.form.administrator.password?s(new Error("两次输入密码不一致!")):s():s(new Error("请再次输入密码"))};return{step:0,dsns:{sqlite3:"zpan.db",mysql:"user:pass@tcp(127.0.0.1:3306)/zpan?charset=utf8mb4&parseTime=True&loc=Local",postgres:"host=localhost user=admin password=admin dbname=zpan port=9920 sslmode=disable TimeZone=Asia/Shanghai",mssql:"sqlserver://zpan:LoremIpsum86@localhost:9930?database=zpan"},form:{database:{driver:"sqlite3",dsn:"zpan.db"},administrator:{email:"admin@zpan.space"}},rules:{email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],password:[{validator:t,trigger:"blur",required:!0}],passwordr:[{validator:r,trigger:"blur",required:!0}]}}},watch:{"form.database.driver":function(e,t){this.form.database.dsn=this.dsns[e]}},computed:{},methods:{stepShown:function(e){return this.step==e},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){console.log(e),e?(console.log(t.form),t.$zpan.System.installDatabase(t.form.database).then((function(e){setTimeout((function(){t.$zpan.System.createAdministrator(t.form.administrator).then((function(){t.$message({type:"success",message:"安装成功"}),t.step++,t.step++}))}),1e3)}))):console.log("error submit!!")}))},toSignin:function(){this.$router.push({name:"signin",params:{email:this.form.administrator.email}})}}},i=n,l=(r("0a6e"),r("2877")),c=Object(l["a"])(i,s,a,!1,null,null,null);t["default"]=c.exports},a78e:function(e,t,r){var s,a;
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */(function(o){var n;if(s=o,a="function"===typeof s?s.call(t,r,t,e):s,void 0===a||(e.exports=a),n=!0,e.exports=o(),n=!0,!n){var i=window.Cookies,l=window.Cookies=o();l.noConflict=function(){return window.Cookies=i,l}}})((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var r=arguments[e];for(var s in r)t[s]=r[s]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}function r(s){function a(){}function o(t,r,o){if("undefined"!==typeof document){o=e({path:"/"},a.defaults,o),"number"===typeof o.expires&&(o.expires=new Date(1*new Date+864e5*o.expires)),o.expires=o.expires?o.expires.toUTCString():"";try{var n=JSON.stringify(r);/^[\{\[]/.test(n)&&(r=n)}catch(c){}r=s.write?s.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var i="";for(var l in o)o[l]&&(i+="; "+l,!0!==o[l]&&(i+="="+o[l].split(";")[0]));return document.cookie=t+"="+r+i}}function n(e,r){if("undefined"!==typeof document){for(var a={},o=document.cookie?document.cookie.split("; "):[],n=0;n<o.length;n++){var i=o[n].split("="),l=i.slice(1).join("=");r||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var c=t(i[0]);if(l=(s.read||s)(l,c)||t(l),r)try{l=JSON.parse(l)}catch(m){}if(a[c]=l,e===c)break}catch(m){}}return e?a[e]:a}}return a.set=o,a.get=function(e){return n(e,!1)},a.getJSON=function(e){return n(e,!0)},a.remove=function(t,r){o(t,"",e(r,{expires:-1}))},a.defaults={},a.withConverter=r,a}return r((function(){}))}))},cf05:function(e,t){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-5ace7ddd.819b312f.js.map