(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c39e5b9a"],{"8a3a":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{attrs:{action:"","list-type":"picture-card","http-request":e.handleUpload,accept:e.acceptImgs,"file-list":e.fileList,"on-preview":e.showPicPreview,"before-remove":e.handleRemove}},[i("i",{staticClass:"el-icon-plus"})]),i("el-dialog",{attrs:{visible:e.dialog.show,title:e.dialog.title,center:""},on:{"update:visible":function(t){return e.$set(e.dialog,"show",t)}}},[i("img",{attrs:{width:"100%",src:e.dialog.imgUrl,alt:""}}),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{staticClass:"copy-link",attrs:{type:"primary","data-clipboard-text":e.dialog.imgUrl},on:{click:function(t){e.dialog.show=!1}}},[e._v(e._s(e.$t("copy-link")))])],1)])],1)},a=[],l=i("90fe"),o=i("ebbf"),n={mixins:[o["a"]],data(){return{picHost:"",acceptImgs:"image/jpeg,image/png,image/gif",fileList:[],dialog:{show:!1,title:"",imgUrl:""}}},methods:{getLink(e){return new Promise((t,i)=>{this.$zpan.File.get(e).then(e=>{t(e.url)})})},listRefresh(){this.$zpan.File.list({sid:this.getSid(),type:"image"}).then(e=>{this.fileList=e.list.map(e=>({alias:e.alias,name:e.name,url:e.url})),this.fileList.forEach(e=>{this.getLink(e.alias).then(t=>{e.url=t})}),this.loading=!1})},handleUpload(e){const t=this.$loading({lock:!0,text:"Uploading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});var i=(new Date).getTime();e.filename=e.file.name.replace("image",i),this.$zpan.File.upload(this.getSid(),e).then(i=>{let s={name:e.filename,url:i.data.url};this.showPicPreview(s),this.listRefresh(),t.close()}).catch(()=>{this.listRefresh(),t.close()})},handleRemove(e,t){return this.$confirm(this.$t("tips.remove"),this.$t("op.delete")+" "+e.name,{type:"warning",confirmButtonText:this.$t("op.confirm"),cancelButtonText:this.$t("op.cancel")}).then(()=>{this.$zpan.File.delete(e.alias).then(e=>{this.$message({type:"success",message:this.$t("msg.delete-success")})})})},showPicPreview(e){this.dialog={show:!0,title:e.name,imgUrl:e.url}}},mounted(){this.listRefresh(),l["a"].setupPasteUpload(this.handleUpload)}},r=n,h=i("2877"),c=Object(h["a"])(r,s,a,!1,null,"53e19936",null);t["default"]=c.exports},ebbf:function(e,t,i){"use strict";i.d(t,"a",(function(){return a})),i.d(t,"b",(function(){return o}));const s={data(){return{cs:{}}},watch:{$route(e,t){this.setCs()}},computed:{},methods:{setCs(){this.$store.state.storages.forEach(e=>{e.name==this.$route.params.sname&&(this.cs=e)})},getSid(){return this.cs.id}},mounted(){this.setCs()}};var a=s;const l={data(){return{visible:!1}},watch:{visible(e){!e&&this.$destroy()}},mounted(){document.body.appendChild(this.$el),this.visible=!0},destroyed(){this.$el.parentNode.removeChild(this.$el)},methods:{open(){this.visible=!0},close(){this.visible=!1},completed(){this.$emit("completed")},finish(){this.close(),this.completed()}}};var o=l}}]);