(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("64a9")},"2dfc":function(e,t){},"338e":function(e,t,n){},"41cb":function(e,t,n){"use strict";n("7f7f");var a=n("a026"),o=n("8c4f"),r=n("9225");n("c0d6");a["default"].use(o["a"]);var i=new o["a"]({mode:"history",routes:[{path:"/",name:"home",component:function(){return n.e("chunk-45cef788").then(n.bind(null,"7abe"))}},{path:"/install",name:"installer",component:function(){return n.e("chunk-5ace7ddd").then(n.bind(null,"a25c"))}},{path:"/:sname",component:function(){return n.e("chunk-45cef788").then(n.bind(null,"7abe"))},children:[{path:"/",name:"disk",component:function(){return n.e("chunk-f1a651ee").then(n.bind(null,"db7e"))}},{path:"pic",name:"pic",component:function(){return n.e("chunk-c39e5b9a").then(n.bind(null,"8a3a"))}},{path:"share",name:"share",component:function(){return n.e("chunk-77b2d504").then(n.bind(null,"e238"))}},{path:"recyclebin",name:"recyclebin",component:function(){return n.e("chunk-875b66d8").then(n.bind(null,"4438"))}}]},{path:"/s/:alias",name:"share-info",component:function(){return n.e("chunk-58993c8c").then(n.bind(null,"ce0d"))}},{path:"/s/:alias/draw",name:"share-draw",component:function(){return n.e("chunk-26cc1f8f").then(n.bind(null,"bc5a"))}},{path:"/settings",component:function(){return n.e("chunk-757d2a9b").then(n.bind(null,"61c2"))},children:[{path:"profile",name:"profile",component:function(){return n.e("chunk-4fae512a").then(n.bind(null,"31bb"))}},{path:"security",name:"security",component:function(){return n.e("chunk-141f1d87").then(n.bind(null,"2fff"))}},{path:"developer",name:"developer",component:function(){return n.e("chunk-51b64701").then(n.bind(null,"acca"))}}]},{path:"/admin",component:function(){return n.e("chunk-54185f58").then(n.bind(null,"2953"))},children:[{path:"dashboard",name:"admin",component:function(){return n.e("chunk-2d0a4fde").then(n.bind(null,"0998"))}},{path:"users",name:"users",component:function(){return n.e("chunk-251a991a").then(n.bind(null,"4da1"))}},{path:"storages",name:"storages",component:function(){return n.e("chunk-1029f285").then(n.bind(null,"6a72"))}},{path:"settings",name:"settings",component:function(){return n.e("chunk-5db82f0c").then(n.bind(null,"c6e4"))}},{path:"settings/email",name:"settings-email",component:function(){return n.e("chunk-22dece4e").then(n.bind(null,"0a01"))}}]},{path:"/u",component:function(){return n.e("chunk-5c753fc6").then(n.bind(null,"9ed6"))},children:[{path:"signin",name:"signin",meta:{title:"用户登录"},component:function(){return n.e("chunk-2d0daeb3").then(n.bind(null,"6e3a"))}},{path:"signout",name:"signout",meta:{title:"用户登出"},component:function(){return n.e("chunk-2d0d76a6").then(n.bind(null,"775e"))}},{path:"signin/:token64",name:"activate",meta:{title:"账户激活"},component:function(){return n.e("chunk-2d0afa39").then(n.bind(null,"0ed2"))}},{path:"signup",name:"signup",meta:{title:"用户注册"},component:function(){return n.e("chunk-2d0bce73").then(n.bind(null,"2a5c"))}},{path:"password-reset",name:"reset_apply",meta:{title:"密码找回"},component:function(){return n.e("chunk-2d0c5700").then(n.bind(null,"3ea9"))}},{path:"password-reset/:token64",name:"reset_confirm",meta:{title:"密码找回"},component:function(){return n.e("chunk-2d207759").then(n.bind(null,"a12e"))}}]}]}),s=function(e,t){a["default"].zpan.System.optGet("core.site").then((function(t){var n=t.data,a=n.name;e&&(a+="- ".concat(e)),window.document.title=a,r["a"].locale=n.locale})).catch((function(e){e.response&&520==e.response.status&&t({name:"installer"})}))};i.beforeEach((function(e,t,n){s(r["a"].t("title.".concat(e.name)),n),n()})),i.afterEach((function(){window.scrollTo(0,0)})),t["a"]=i},"423e":function(e){e.exports=JSON.parse('{"click-copy-link":"点击复制链接","copy-link":"复制链接","create-folder":"新建文件夹","day":"天","op":{"close":"关闭","confirm":"确认","init":"初始化","reset":"重置","cancel":"取消","enable":"启用","disable":"禁用","rename":"重命名","delete":"删除","batch-delete":"批量删除"},"msg":{"success":"成功","failed":"失败","batch-delete-success":"批量删除成功","create-success":"创建成功","delete-success":"删除成功","move-success":"移动成功","copy-success":"复制成功","copy-failed":"复制失败","rename-success":"重命名成功","save-success":"保存成功","clean-success":"清理成功","recovery-success":"恢复成功","cancel-success":"取消成功"},"dialog":{"moveto-title":"移动到","outlink-title":"下载外链","share-drawcode":"提取码","share-drawcode-switch":"使用提取码保护链接","share-expire-time":"有效期","share-link":"链接地址","share-title":"分享链接","upload-click":"点击上传","upload-tips":"将文件拖到此处，或","upload-title":"上传队列"},"disk":{"delete":"删除","download":"下载","folder":"新建","upload":"上传"},"ft":{"breadcrumb":"全部文件"},"ftb":{"move":"移动到","remove":"删除","rename":"重命名"},"fth":{"name":"名称","size":"大小","updated":"最近更新"},"leftnav":{"audio":"音频","doc":"文档","files":"全部文件","image":"图片","share":"我的分享","recyclebin":"回收站","storage":"存储空间","video":"视频"},"share":{"auto-download-tips":"您的文件已经开始下载，如果没有开始请点击此处重试","created":"分享时间","drawcode":"提取码","drawcode-placeholder":"请输入提取码","drawfile":"提取文件","expired":"失效时间","link":"链接","name":"名称","cancel":"取消分享"},"recyclebin":{"recovery":"确认恢复？","delete":"彻底删除？","clean":"清空回收站"},"tips":{"batch-delete":"此操作将永久删除所选文件，是否继续？","create-folder":"请输入新的文件夹名称","remove":"此操作将文件移动到回收站, 是否继续?","rename":"请输入新的名称","recyclebin":"提示：回收站也占用网盘空间，请及时清理哦~","share-cancel":"取消分享后，该条分享记录将被删除，好友将无法再访问此分享链接。 您确认要取消分享吗？","recovery":"确认还原选中的文件？","delete":"此操作将彻底删除该文件, 是否继续?","clean":"确认清空回收站？","deleting":"正在删除...","disable":"禁用后将不可用，是否继续？","enable":"确认启用？","secret-reset":"重置后，老的秘钥将无法使用，是否继续？","secret-init":"您尚未开通开发者权限，是否开通？"},"topbar":{"netdisk":"网盘","imghosting":"图床","search":"搜索...","profile":"个人主页","settings":"个人设置","s-platform":"管理后台","signout":"退出"},"title":{"disk":"我的文件","share":"我的分享","recyclebin":"回收站","picture":"我的图床","storage-quota":"存储配额","admin":"管理后台","storages":"存储管理","users":"用户管理","settings":"站点设置","settings-email":"发信邮箱"},"year":"年","admin":{"search-placeholder":"请输入要查找的用户邮箱...","storage-search-placeholder":"请输入要查找的存储空间...","btn-user-add":"添加新用户","btn-quota-update":"调整配额","btn-storage-add":"创建存储","btn-edit":"编辑","label-nickname":"用户昵称","label-email":"Email","label-role":"角色","label-status":"状态","label-storage":"配额","label-operation":"操作","label-quota":"存储配额","label-quota-change":"配额调整","label-password-reset":"密码重置","label-storage-manager":"存储管理","label-name":"名称","label-title":"标题","label-intro":"描述","label-bucket":"存储桶","label-endpoint":"接入点","label-region":"区域名称","label-custom_host":"自有域名","label-access_key":"AccessKey","label-secret_key":"SecretKey"},"cloudplatform":{"COS":"腾讯云","KODO":"七牛云","MINIO":"自建云","NOS":"网易云","OBS":"华为云","OSS":"阿里云","S3":"亚马逊","US3":"UColud","USS":"又拍云"}}')},"49f8":function(e,t,n){var a={"./en.json":"edd4","./zh-CN.json":"423e"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="49f8"},"54c7":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("a026"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{attrs:{id:"app"}})},r=[],i={data:function(){return{}},watch:{},computed:{},methods:{},mounted:function(){var e=this;this.$clipboard.on("success",(function(t){e.$message.success(e.$t("msg.copy-success")),t.clearSelection()})),this.$clipboard.on("error",(function(t){e.$message.error(e.$t("msg.copy-failed"))}))},beforeDestroy:function(){this.$clipboard.destroy()}},s=i,c=(n("034f"),n("2877")),l=Object(c["a"])(s,o,r,!1,null,null,null),u=l.exports,d=n("9225"),p=n("c0d6"),f=n("41cb"),m=n("bc3a"),h=n.n(m),v=n("5c96"),b=n.n(v),y={},w=h.a.create(y);w.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),w.interceptors.response.use((function(e){return e.data}),(function(e){if(h.a.isCancel(e))return Promise.reject(e.message?e.message:"Request canceled");if(e.response&&401==e.response.status)return window.location="/moreu/signin",Promise.reject("invalid login status");var t=e.message;return e.response&&(t=e.response.data.msg),v["Notification"].error(t),Promise.reject(e)})),Plugin.install=function(e,t){e.axios=w,window.axios=w,Object.defineProperties(e.prototype,{axios:{get:function(){return w}},$axios:{get:function(){return w}}})},a["default"].use(Plugin);Plugin;var g=n("c1df"),k=n.n(g);a["default"].prototype.$moment=k.a,a["default"].filter("moment",(function(e,t){return t=t||"YYYY-MM-DD HH:mm:ss",k()(e).format(t)})),String.prototype.moment||(String.prototype.moment=function(e){return e=e||"YYYY-MM-DD HH:mm:ss",k()(this).format(e)});n("0fae");a["default"].use(b.a);n("456d"),n("ac6a");var _=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-row",{staticClass:"header"},[n("el-breadcrumb",{staticClass:"bread",attrs:{"separator-class":"el-icon-arrow-right"}},e._l(e.breadcrumb,(function(t){return n("el-breadcrumb-item",{key:t.dir,attrs:{index:t.dir,to:e.buildQuery(t.dir)}},[e._v(e._s(t.name))])})),1),n("span",{staticClass:"loadtips",staticStyle:{float:"right"}},[e._v(e._s(e.loadedtips))])],1),"grid"==e.layout?n("GridExplorer",{attrs:{loading:e.loading,moreButtons:e.moreButtons},on:{"on-click":e.onClick},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}):n("ListExplorer",{attrs:{loading:e.loading,rowButtons:e.rowButtons,moreButtons:e.moreButtons},on:{"on-click":e.onClick,"scroll-end":e.onScrollEnd,"selection-change":e.onSelectionChange},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}}),n("MediaViewer",{attrs:{visible:e.mediavv},on:{close:function(t){e.mediavv=!1}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}}),n("PictureViewer",{ref:"photoView"})],1)},C=[],S=(n("a481"),n("f559"),n("28a5"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"explorer"},e._l(e.data,(function(t){return n("div",{key:t.alias,staticClass:"explorer-item",on:{click:function(n){return e.onNameClick(t)}}},[t.dirtype?n("i",{staticClass:"matter-icon el-icon-folder",staticStyle:{color:"#ffc402"}}):n("i",{class:"iconfont "+e.type2icon(t.type)}),n("p",[e._v(e._s(t.name))])])})),0)}),x=[],O=n("768b"),B=(n("6762"),{props:{value:Array,loading:!1,rowButtons:Array,moreButtons:Array},data:function(){return{data:[]}},watch:{value:function(e,t){this.data=e}},methods:{isOfficeFile:function(e){var t=["application/msword","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.presentationml.presentation"];return t.includes(e)},officeIcon:function(e){var t=["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],n=["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],a=["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"];return t.includes(e)?"icon-doc":n.includes(e)?"icon-excel":a.includes(e)?"icon-ppt":void 0},type2icon:function(e){console.log(e);var t=e.split("/"),n=Object(O["a"])(t,2),a=n[0],o=n[1],r=["pdf","html","xml","psd","rtf"];if(r.includes(o))return"icon-".concat(o);var i=["json","yaml","x-yaml"];if(i.includes(o))return"icon-html";var s=["zip","x-gzip"];if(s.includes(o))return"icon-compressed-file";if(this.isOfficeFile(e))return this.officeIcon(e);var c=["audio","video","image","text"];return c.includes(a)?"icon-".concat(a):"icon-file"},onNameClick:function(e){e.dirtype?this.$emit("on-click","folder",e):e.type.startsWith("image")?this.$emit("on-click","image",e):e.type.startsWith("audio")||e.type.startsWith("video")?this.$emit("on-click","media",e):this.isOfficeFile(e.type)&&this.$emit("on-click","doc",e)}}}),j=B,P={mixins:[j],data:function(){return{}},methods:{onSelectionChange:function(e){this.$emit("selection-change",e)},onSelectable:function(e,t){if(!e.dirtype)return!0},handleCommand:function(e){e.action(e.row)},onScrollEnd:function(){this.$emit("scroll-end")}}},D=P,E=(n("ac82"),Object(c["a"])(D,S,x,!1,null,"27e97df8",null)),$=E.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"el-table-infinite-scroll",rawName:"v-el-table-infinite-scroll",value:e.onScrollEnd,expression:"onScrollEnd"}],staticStyle:{width:"100%"},attrs:{height:"calc(100% - 55px)","tooltip-effect":"dark",size:"small",data:e.data,"highlight-current-row":""},on:{"selection-change":e.onSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"30",selectable:e.onSelectable}}),n("el-table-column",{attrs:{prop:"name",label:e.$t("fth.name"),"min-width":"200","show-overflow-tooltip":"",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.dirtype?n("i",{staticClass:"matter-icon el-icon-folder",staticStyle:{color:"#ffc402"}}):n("i",{class:"iconfont matter-icon "+e.type2icon(t.row.type)}),n("el-link",{staticClass:"matter-title",attrs:{underline:!1,href:"Javascript: void(0);"}},[n("span",{on:{click:function(n){return e.onNameClick(t.row)}}},[e._v(e._s(t.row.name))])])]}}])}),n("el-table-column",{attrs:{width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("div",{staticClass:"operation",staticStyle:{float:"right","vertical-align":"super"}},[e._l(e.rowButtons,(function(e){return n("el-link",{directives:[{name:"show",rawName:"v-show",value:!e.shown||e.shown(t.row),expression:"!item.shown || item.shown(scope.row)"}],key:e.name,attrs:{type:"primary",underline:!1}},[n("i",{class:e.icon+" el-icon--right",on:{click:function(n){return e.action(t.row)}}})])})),n("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:e.moreButtons&&e.moreButtons.length>0,expression:"moreButtons && moreButtons.length > 0"}],attrs:{trigger:"click"},on:{command:e.handleCommand}},[n("el-link",{staticClass:"el-dropdown-link",attrs:{type:"primary",underline:!1}},[n("i",{staticClass:"el-icon-more el-icon--right"})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreButtons,(function(a){return n("el-dropdown-item",{key:a.name,attrs:{command:{action:a.action,row:t.row}}},[e._v("\n              "+e._s(a.title)+"\n            ")])})),1)],1)],2)]}}])}),n("el-table-column",{attrs:{prop:"size",label:e.$t("fth.size"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.dirtype?n("div",[e._v("-")]):n("div",[e._v(e._s(t.row.size))])]}}])}),n("el-table-column",{attrs:{prop:"updated",label:e.$t("fth.updated"),width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("moment")(t.row.updated)))]}}])})],1)},U=[],z=n("521e"),M={mixins:[j],directives:{"el-table-infinite-scroll":z["a"]},data:function(){return{}},methods:{onSelectionChange:function(e){this.$emit("selection-change",e)},onSelectable:function(e,t){if(!e.dirtype)return!0},handleCommand:function(e){e.action(e.row)},onScrollEnd:function(){this.$emit("scroll-end")}}},R=M,L=(n("a604"),Object(c["a"])(R,N,U,!1,null,"0e9f5599",null)),A=L.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:e.value.name,visible:e.show,width:"30%"},on:{"update:visible":function(t){e.show=t},opened:e.onOpen,close:e.onClose}},[n("vue-plyr",{directives:[{name:"show",rawName:"v-show",value:"audio"==e.mediatype,expression:"mediatype == 'audio'"}],ref:"audio"},[n("audio",{attrs:{src:e.value.url}})]),n("vue-plyr",{directives:[{name:"show",rawName:"v-show",value:"video"==e.mediatype,expression:"mediatype == 'video'"}],ref:"video"},[n("video",{attrs:{src:e.value.url}})])],1)},F=[],q={props:{value:Object,visible:{type:Boolean,default:!1}},data:function(){return{show:!1}},watch:{visible:function(e,t){this.show=e}},methods:{onOpen:function(){this.player.play()},onClose:function(){this.$emit("close"),console.log(this.player),this.player.stop()}},computed:{filetype:function(){return this.value.type?this.value.type:""},mediatype:function(){return this.filetype.split("/")[0]},player:function(){return this.$refs[this.mediatype].player}}},I=q,Y=Object(c["a"])(I,T,F,!1,null,null,null),Q=Y.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pswp",attrs:{tabindex:"0",role:"dialog","aria-hidden":"true"}},[n("div",{staticClass:"pswp__bg"}),n("div",{staticClass:"pswp__scroll-wrap"},[n("div",{staticClass:"pswp__container"},[n("div",{staticClass:"pswp__item"}),n("div",{staticClass:"pswp__item"}),n("div",{staticClass:"pswp__item"})]),n("div",{staticClass:"pswp__ui pswp__ui--hidden"},[n("div",{staticClass:"pswp__top-bar"},[n("div",{staticClass:"pswp__counter"}),n("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),n("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),n("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),n("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),n("div",{staticClass:"pswp__preloader"},[n("div",{staticClass:"pswp__preloader__icn"},[n("div",{staticClass:"pswp__preloader__cut"},[n("div",{staticClass:"pswp__preloader__donut"})])])])]),n("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[n("div",{staticClass:"pswp__share-tooltip"})]),n("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),n("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),n("div",{staticClass:"pswp__caption"},[n("div",{staticClass:"pswp__caption__center"})])])])])}],H=n("b24f"),G=n.n(H),W=n("14fd"),J=n.n(W),Z=(n("343a"),n("3fb5"),{name:"PhotoPreview",methods:{open:function(e){var t=[{src:e,w:600,h:400}],n={index:0},a=document.querySelectorAll(".pswp")[0],o=new G.a(a,J.a,t,n);o.init()}}}),X=Z,ee=Object(c["a"])(X,K,V,!1,null,"9c4266e8",null),te=ee.exports,ne={components:{GridExplorer:$,ListExplorer:A,MediaViewer:Q,PictureViewer:te},props:{layout:{type:String,default:"list"},dataLoader:Function,linkLoader:Function,rowButtons:Array,moreButtons:Array,rootDir:{type:String,default:""}},data:function(){return{currentDir:"",loading:!1,offset:0,limit:100,rows:[],total:0,selection:Array,selected:{},mediavv:!1}},watch:{$route:"onRouteChange",layout:function(e,t){e!=t&&this.listRefresh()}},computed:{breadcrumb:function(){var e=[{name:this.$t("ft.breadcrumb"),dir:""}];if(!this.currentDir)return e;var t="";return this.currentDir.split("/").forEach((function(n){""!=n&&(e.push({name:n,dir:t+n+"/"}),t+="".concat(n,"/"))})),e},loadedtips:function(){var e=this.rows.length;return e==this.total?"已全部加载，共".concat(this.total,"个"):"已加载".concat(e,"个，共").concat(this.total,"个")}},methods:{onRouteChange:function(e,t){this.currentDir!=e.query.dir&&(this.currentDir=e.query.dir),this.listRefresh()},onSelectionChange:function(e){this.$emit("selection-change",e)},onScrollEnd:function(){0==this.total||this.rows.length!=this.total?this.listRefresh(this.offset,this.limit):console.log("no more")},listRefresh:function(e,t){var n=this;e||(e=0),t||(t=this.limit),this.loading=!0;var a=this.currentDir?this.currentDir:"";this.dataLoader(a,e,t).then((function(a){0==e?(n.rows=a.list,n.offset=t):(n.rows=n.rows.concat(a.list),n.offset+=n.limit),n.total=a.total,n.loading=!1}))},buildQuery:function(e){e.startsWith(this.rootDir)&&(e=e.replace(this.rootDir,""));var t=e?{dir:e}:{};return{query:t}},onClick:function(e,t){var n=this;"folder"!=e?this.linkLoader(t).then((function(a){switch(e){case"media":n.selected=t,n.selected.url=a,n.mediavv=!0;break;case"image":n.$refs.photoView.open(a);break;case"doc":window.open("http://view.officeapps.live.com/op/view.aspx?src="+encodeURIComponent(a));break}})):this.$router.push(this.buildQuery(t.fullpath))}},mounted:function(){this.currentDir=this.$route.query.dir?this.$route.query.dir:""}},ae=ne,oe=(n("a22d"),Object(c["a"])(ae,_,C,!1,null,"68e25eea",null)),re=oe.exports,ie={FileExplorer:re},se=function(e,t){Object.keys(ie).forEach((function(t){e.component(t,ie[t])}))},ce=se;a["default"].use(ce);var le=n("b311"),ue=n.n(le);a["default"].prototype.$clipboard=new ue.a(".copy-link");n("2dfc");var de=n("afa7");a["default"].use(de["a"],{plyr:{},emit:["ended"]});var pe=n("d225"),fe=n("b0b4"),me={baseURL:"/api"},he=h.a.create(me);he.interceptors.response.use((function(e){return e.data}),(function(e){if(e.response&&401==e.response.status)return window.location="/u/signin",Promise.reject("invalid login status");if(e.response&&520==e.response.status)return Promise.reject(e);var t=e.message;return e.response&&(t=e.response.data.msg),v["Notification"].error(t),Promise.reject(e)}));var ve=he,be=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"installDatabase",value:function(e){return ve.put("/system/database",e)}},{key:"createAdministrator",value:function(e){return ve.put("/system/account",e)}},{key:"optGet",value:function(e){return ve.get("/system/options/".concat(e))}},{key:"optSave",value:function(e,t){return ve.put("/system/options/".concat(e),t)}},{key:"matterPathEnvs",value:function(){return ve.get("/system/matter-path-envs")}},{key:"providers",value:function(){return ve.get("/system/providers")}}]),e}(),ye=be,we=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"signup",value:function(e){return ve.post("/users",e)}},{key:"activate",value:function(e,t){var n={token:t,activated:!0};return ve.patch("/users/".concat(e),n)}},{key:"applyPasswordReset",value:function(e){var t={email:e};return ve.post("/tokens",t)}},{key:"passwordReset",value:function(e,t,n){var a={token:t,password:n};return ve.patch("/users/".concat(e),a)}},{key:"signin",value:function(e){return ve.post("/tokens",e)}},{key:"signout",value:function(){return ve.delete("/tokens")}},{key:"profileGet",value:function(){return ve.get("/user")}},{key:"updateProfile",value:function(e){return ve.put("/user/profile",e)}},{key:"updatePassword",value:function(e){return ve.put("/user/password",e)}},{key:"list",value:function(e){return ve.get("/users",{params:e})}},{key:"find",value:function(e){return ve.get("/users/".concat(e))}},{key:"delete",value:function(e){return ve.delete("/users/".concat(e))}},{key:"updatePasswordByUser",value:function(e,t){return ve.put("/users/".concat(e,"/password"),t)}},{key:"updateStorageByUser",value:function(e,t){return ve.put("/users/".concat(e,"/storage"),t)}},{key:"updateStatusByUser",value:function(e,t){return ve.put("/users/".concat(e,"/status"),t)}}]),e}(),ge=we,ke=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"create",value:function(e){return ve.post("/user/keys",{name:e})}},{key:"list",value:function(e){return ve.get("/user/keys",{params:e})}},{key:"find",value:function(e){return ve.get("/user/keys/".concat(e))}},{key:"delete",value:function(e){return ve.delete("/user/keys/".concat(e))}},{key:"resetSecret",value:function(e,t){return ve.patch("/user/keys/".concat(e,"/secret"),t)}}]),e}(),_e=ke,Ce=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"list",value:function(e){return ve.get("/storages",{params:e})}},{key:"find",value:function(e){return ve.get("/storages/".concat(e))}},{key:"create",value:function(e){return ve.post("/storages",e)}},{key:"update",value:function(e){return ve.put("/storages/".concat(e.id),e)}},{key:"delete",value:function(e){return ve.delete("/storages/".concat(e))}}]),e}(),Se=Ce,xe=(n("7f7f"),n("b54a"),n("90fe")),Oe=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"upload",value:function(e,t,n,a){var o=this,r=t.file,i={sid:e,name:t.filename,type:r.type,size:r.size,dir:n};return new Promise((function(e,n){o.create(i).then((function(o){var r=o.data;xe["a"].upload(t,r.link,r.headers,a).then((function(){ve.patch("/matters/".concat(r.alias,"/done")).then((function(t){e(t)}))})).catch(n)})).catch(n)}))}},{key:"findLink",value:function(e){return new Promise((function(t,n){ve.get("/matters/".concat(e,"/link")).then((function(e){t(e.data)})).catch(n)}))}},{key:"download",value:function(e){var t=this;return new Promise((function(n,a){t.findLink(e).then((function(e){xe["a"].download(e.name,e.link).then((function(){n(e)})).catch(a)}))}))}},{key:"create",value:function(e){return ve.post("/matters",e)}},{key:"list",value:function(e){return new Promise((function(t,n){ve.get("/matters",{params:e}).then((function(e){var n=e.data;n.list=n.list.map((function(e){return e.size=xe["a"].formatBytes(e.size,1),e.fullpath="".concat(e.parent).concat(e.name),e.dirtype&&(e.fullpath+="/"),e})),t(n)})).catch(n)}))}},{key:"rename",value:function(e,t){return ve.patch("/matters/".concat(e,"/name"),{name:t})}},{key:"move",value:function(e,t){return ve.patch("/matters/".concat(e,"/location"),{dir:t})}},{key:"copy",value:function(e,t){return ve.patch("/matters/".concat(e,"/duplicate"),{path:t})}},{key:"delete",value:function(e){return ve.delete("/matters/".concat(e))}}]),e}(),Be=Oe,je=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"list",value:function(e){return ve.get("/shares",{params:e})}},{key:"find",value:function(e){return ve.get("/shares/".concat(e))}},{key:"create",value:function(e){return ve.post("/shares",e)}},{key:"remove",value:function(e){return ve.delete("/shares/".concat(e))}},{key:"draw",value:function(e,t){return ve.post("/shares/".concat(e,"/token"),{secret:t})}},{key:"findMatter",value:function(e){return ve.get("/shares/".concat(e,"/matter"))}},{key:"listMatters",value:function(e,t){return ve.get("/shares/".concat(e,"/matters"),{params:t})}}]),e}(),Pe=je,De=function(){function e(){Object(pe["a"])(this,e)}return Object(fe["a"])(e,[{key:"list",value:function(e){return new Promise((function(t,n){ve.get("/recycles",{params:e}).then((function(e){var n=e.data;t(n)})).catch(n)}))}},{key:"recovery",value:function(e){return ve.put("/recycles/".concat(e))}},{key:"delete",value:function(e){return ve.delete("/recycles/".concat(e))}},{key:"clean",value:function(e){return ve.delete("/recycles",{params:{sid:e}})}}]),e}(),Ee=De,$e=new ye,Ne=new ge,Ue=new _e,ze=new Se,Me=new Be,Re=new Pe,Le=new Ee,Ae={System:$e,User:Ne,UserKey:Ue,Storage:ze,File:Me,Share:Re,Recyclebin:Le},Te={install:function(e,t){e.zpan=Ae,window.zpan=Ae,Object.defineProperties(e.prototype,{zpan:{get:function(){return Ae}},$zpan:{get:function(){return Ae}}})}};a["default"].use(Te);a["default"].config.productionTip=!1,new a["default"]({i18n:d["a"],router:f["a"],store:p["a"],render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,n){},"90fe":function(e,t,n){"use strict";n("7f7f"),n("a481"),n("f559");var a=n("bc3a"),o=n.n(a),r={upload:function(e,t,n,a){var r=e.file;return new Promise((function(i,s){var c=o.a.CancelToken,l={headers:n,cancelToken:new c(a),onUploadProgress:function(t){r.percent=t.loaded/t.total*100,e.onProgress&&e.onProgress(r)}};window.axios.put(t,r,l).then((function(t){e.onSuccess&&e.onSuccess(),i(t)})).catch(s)}))},download:function(e,t){return new Promise((function(n,a){var o=document.createElement("a");o.href=t,o.download=e,o.click(),n()}))},formatBytes:function(e,t){if(0==e)return"0 Bytes";var n=1024,a=t+1||3,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],r=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/Math.pow(n,r)).toFixed(a))+" "+o[r]},setupPasteUpload:function(e){document.addEventListener("paste",(function(t){var n=null;if((t.clipboardData||t.originalEvent)&&(n=t.clipboardData||t.originalEvent.clipboardData),n&&n.items){t.preventDefault();var a=n.items[0];if(!a.type.startsWith("image"))return;var o=a.getAsFile(),r=o.name.replace("image",(new Date).getTime());e({file:o,filename:r})}}))},bytesUnits:function(){var e=1024,t=1024*e,n=1024*t,a=1024*n,o=1024*a,r=[{label:"KB",value:e},{label:"MB",value:t},{label:"GB",value:n},{label:"TB",value:a},{label:"PB",value:o}];return r},formatBytes2:function(e,t){var n={num:0,unitLabel:"Bytes",unitValue:0,format:function(){return"".concat(n.num," ").concat(n.unitLabel)}};if(!e)return n;for(var a=e,o=0;a>=1024;o++)a/=1024;var r=t+1||3;return n.num=parseFloat(a).toFixed(r),n.unitLabel=this.bytesUnits()[o-1].label,n.unitValue=this.bytesUnits()[o-1].value,Object.assign({},n)}};t["a"]=r},9225:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));n("4917"),n("ac6a");var a=n("a026"),o=n("a925");a["default"].use(o["a"]);var r="zpan-locale",i=n("49f8");function s(){var e={};return i.keys().forEach((function(t){var n=t.match(/([A-Za-z0-9-_]+)\./i);if(n&&n.length>1){var a=n[1];e[a]=i(t)}})),e}var c=new o["a"]({locale:"en",fallbackLocale:"en",messages:s()}),l=function(e){var t=localStorage.getItem(r);e?(t=e,localStorage.setItem(r,t)):t||(t=navigator.language),a["default"].config.locale=t,c.locale=t};l(),t["a"]=c},a22d:function(e,t,n){"use strict";n("54c7")},a604:function(e,t,n){"use strict";n("d57f")},ac82:function(e,t,n){"use strict";n("338e")},c0d6:function(e,t,n){"use strict";var a=n("a026"),o=n("2f62");a["default"].use(o["a"]),t["a"]=new o["a"].Store({state:{storages:[],cs:{}},mutations:{storages:function(e,t){e.storages=t},cs:function(e,t){e.cs=t}},actions:{}})},d57f:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"click-copy-link":"Click copy link","copy-link":"Copy Link","create-folder":"New Folder","day":"Days","op":{"close":"Close","confirm":"Confirm","cancel":"Cancel","enable":"Enable","disable":"Disable","rename":"Rename","delete":"Delete","batch-delete":"Batch Delete"},"msg":{"success":"Success","failed":"Failed","batch-delete-success":"Batch deleted!","create-success":"Created!","delete-success":"Deleted!","move-success":"Moved!","copy-success":"Copied!","copy-failed":"Copy failed","rename-success":"Renamed!","save-success":"Saved!","clean-success":"Cleaned!","recovery-success":"Recoveried!"},"dialog":{"moveto-title":"MoveTo","outlink-title":"Outlink","share-drawcode":"Draw Code","share-drawcode-switch":"Protect","share-expire-time":"Expire Time","share-link":"Link Address","share-title":"Share Link","upload-click":"click to upload","upload-tips":"Drag the file here, or","upload-title":"Upload Queue"},"disk":{"delete":"Delete","download":"Download","folder":"New Folder","upload":"Upload"},"ft":{"breadcrumb":"All files"},"ftb":{"move":"MoveTo","remove":"Remove","rename":"Rename"},"fth":{"name":"Name","size":"Size","updated":"LastUpdated"},"leftnav":{"audio":"Audios","doc":"Documents","files":"All Files","image":"Pictures","share":"Shares","recyclebin":"Recycle Bin","storage":"Storage","video":"Videos"},"share":{"auto-download-tips":"Your file has started downloading, if it has not started, please click here to try again","created":"ShareTime","drawcode":"DrawCode","drawcode-placeholder":"Please input your draw code","drawfile":"Draw","expired":"ExpireTime","link":"ShareLink","name":"Name"},"recyclebin":{"recovery":"Recover file(s)?","delete":"Delete forever?","clean":"Empty the recycle bin"},"tips":{"batch-delete":"This operation will permanently delete the selected files, do you want to continue?","create-folder":"Please input folder name","remove":"This operation will permanently delete the file, do you want to continue?","rename":"Please input newly name","recyclebin":"Tip: The recycle bin also occupies the network disk space, please clean it up in time~","recovery":"Are you sure you want to recover the selected file(s)?","delete":"Deleted files cannot be recovered, are you sure you want to permanently delete the selected file(s)?","clean":"Are you sure to empty the Recycle Bin?","deleting":"Deleting..."},"topbar":{"netdisk":"Netdisk","imghosting":"Image Hosting","search":"Searching...","profile":"Profile","settings":"Settings","s-platform":"Manage Panel","signout":"Sign out"},"title":{"disk":"My Files","share":"My Shares","recyclebin":"Recycle Bin","picture":"Image Hosting","storage-quota":"Storage Quota"},"year":"Years","admin":{"search-placeholder":"Input the email...","storage-search-placeholder":"Input the storage...","btn-user-add":"Add User","btn-quota-update":"Change Quota","btn-storage-add":"Create Storage","btn-edit":"Edit","label-nickname":"Nickname","label-email":"Email","label-role":"Role","label-status":"Status","label-storage":"Quota","label-operation":"Operation","label-quota":"Storage Quota","label-quota-change":"Quota Change","label-password-reset":"Password Reset","label-storage-manager":"Storage","label-name":"Name","label-title":"Label","label-intro":"Intro","label-bucket":"Bucket","label-endpoint":"Endpoint","label-region":"Region","label-custom_host":"CustomHost","label-access_key":"AccessKey","label-secret_key":"SecretKey"},"cloudplatform":{"COS":"TencentCloud","KODO":"QiniuCloud","MINIO":"Self-hosted","NOS":"Netease","OBS":"HuaweiCloud","OSS":"AliyunCloud","S3":"AWSCloud","US3":"UColud","USS":"UPYun"}}')},fd21:function(e,t,n){var a={"./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9"};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=r,e.exports=o,o.id="fd21"}}]);
//# sourceMappingURL=chunk-common.c48b0ea6.js.map