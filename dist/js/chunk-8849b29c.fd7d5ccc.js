(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8849b29c"],{"2e9a":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"manage-user"},[a("div",{staticClass:"manage-header"},[a("el-button",{attrs:{type:"primary"}},[e._v("新增")]),a("common-form",{attrs:{formLabel:e.formLabel,form:e.searchForm,inline:""}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.getUserList(e.searchForm.keyword)}}},[e._v("搜索")])],1)],1),a("div",{staticClass:"manage-table"},[a("common-table",{attrs:{tableLabel:e.tableLabel,tableData:e.tableData,config:e.config},on:{changPage:function(t){return e.getUserList()}}})],1)])},n=[],o=(a("d81d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form",{ref:"form",attrs:{model:e.form,inline:e.inline,"label-width":"100px"}},[e._l(e.formLabel,(function(t){return a("el-form-item",{key:t.model,attrs:{label:t.label}},["input"===t.type?a("el-input",{attrs:{placeholder:"请输入"+t.label},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}}):e._e(),"select"===t.type?a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form[t.model],callback:function(a){e.$set(e.form,t.model,a)},expression:"form[item.model]"}},e._l(t.opts,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):e._e(),"switch"===t.type?a("el-switch",{model:{value:e.form[t.v-e.model],callback:function(a){e.$set(e.form,t.v-e.model,a)},expression:"form[item.v-model]"}}):e._e(),"date"===t.type?a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form[t.v-e.model],callback:function(a){e.$set(e.form,t.v-e.model,a)},expression:"form[item.v-model]"}}):e._e()],1)})),a("el-form-item",[e._t("default")],2)],2)}),r=[],i={name:"commonForm",props:{form:Object,formLabel:Array,inline:Boolean}},c=i,s=a("2877"),u=Object(s["a"])(c,o,r,!1,null,"4420fbcb",null),m=u.exports,f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-table"},[a("el-table",{staticStyle:{width:"100%"},attrs:{height:"90%",data:e.tableData}},[a("el-table-column",{attrs:{label:"序号",width:"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(10*(e.config.page-1)+t.$index+1))])]}}])}),e._l(e.tableLabel,(function(t){return a("el-table-column",{attrs:{"show-overflow-tooltip":"",label:t.label},scopedSlots:e._u([{key:"default",fn:function(l){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(l.row[t.prop]))])]}}],null,!0)})})),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],2),a("el-pagination",{staticClass:"pages",attrs:{layout:"prev, pager, next",total:e.config.total,"current-page":e.config.page},on:{"update:currentPage":function(t){return e.$set(e.config,"page",t)},"update:current-page":function(t){return e.$set(e.config,"page",t)},"current-change":e.changPage}})],1)},p=[],d={name:"commonTable",props:{tableData:Array,tableLabel:Array,config:Object},methods:{changPage:function(e){this.$emit("changPage",e)}}},b=d,g=(a("e2ac"),Object(s["a"])(b,f,p,!1,null,"0dc22aea",null)),h=g.exports,v={components:{CommonForm:m,CommonTable:h},data:function(){return{searchForm:{keyword:""},formLabel:[{model:"keyword",label:"",type:"input"}],tableData:[],tableLabel:[{prop:"name",label:"姓名"},{prop:"age",label:"年龄"},{prop:"sexLabel",label:"性别"},{prop:"birth",label:"出生日期"},{prop:"addr",label:"地址"}],config:{page:1,total:20}}},methods:{getUserList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";t&&(this.config.page=1),this.$http.get("/api/user/getUserData",{params:{page:this.config.page,name:t}}).then((function(t){e.tableData=t.data.list.map((function(e){return e.sexLabel=0===e.sex?"女":"男",e})),console.log(t.data),e.config.total=t.data.count}))}},mounted:function(){this.getUserList()}},y=v,_=(a("f7aa"),Object(s["a"])(y,l,n,!1,null,"6653ace0",null));t["default"]=_.exports},c9a0:function(e,t,a){},d81d:function(e,t,a){"use strict";var l=a("23e7"),n=a("b727").map,o=a("1dde"),r=o("map");l({target:"Array",proto:!0,forced:!r},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e2ac:function(e,t,a){"use strict";a("c9a0")},f6f0:function(e,t,a){},f7aa:function(e,t,a){"use strict";a("f6f0")}}]);
//# sourceMappingURL=chunk-8849b29c.fd7d5ccc.js.map