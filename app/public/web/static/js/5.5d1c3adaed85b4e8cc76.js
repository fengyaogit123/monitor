webpackJsonp([5],{MXFl:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("Xxa5"),a=r.n(n),s=r("exGp"),o=r.n(s),i=r("0jG4"),c=r("oAV5"),l={name:"ItemLog",props:{row:{type:Object,default:function(){return{}}}},render:function(){var t=arguments[0],e=this.row,r=e.errorInfo||e.actions;try{r=JSON.parse(r),c.a.is().Array(r)||(r=[])}catch(t){r=[]}return t("div",null,[t("h3",{class:"text14"},["浏览器信息："]),t("div",{class:"text14"},[e.browserName]),t("br",null),t("h3",{class:"text14"},["用户信息："]),t("div",{class:"text14"},[e.wxName]),t("br",null),t("h3",{class:"text14"},["路由或API："]),t("div",{class:"text14"},[e.route]),t("br",null),t("h3",{class:"text14"},["url信息："]),t("div",{class:"text14"},[e.url]),t("br",null),t("h3",{class:"text14"},["堆栈信息："]),t("Alert",{style:"width:700px",attrs:{type:"error"}},[e.errorDetails.split("\n").map(function(e){return t("p",null,[e])})]),t("br",null),t("h3",{class:"text14"},["操作信息："]),t("div",{style:"width:700px"},[r.map(function(e){return t("Alert",{attrs:{type:"success"},class:"text14"},["【",e.time,"】 ",e.type," ",e.target])})])])}},u=(r("1nuA"),{name:"Log",components:{ItemLog:l},data:function(){return{loading:!1,data:[],count:0,params:{pageNo:1,size:20},rows:[],columns:function(t){return[{type:"expand",width:50,render:function(e,r){var n=r.row;return e(t,{attrs:{row:n}})}},{type:"selection",width:60,align:"center"},{title:"设备",key:"phoneSystemType",align:"center",render:function(t,e){var r={IOS:"social-apple",Android:"social-android",PC:"android-desktop"}[e.row.phoneSystemType||"PC"];return r?t("Icon",{attrs:{size:30,type:r}}):""}},{title:"错误信息",key:"details",align:"center",width:400},{title:"ip",key:"userIP",align:"center"},{title:"用户名称",key:"userName",align:"center"},{title:"浏览器",key:"browserName",align:"center",render:function(t,e){var r=e.row;return r.browserName+" "+r.browserVer}},{title:"系统",key:"phoneSystemVer",align:"center",render:function(t,e){var r=e.row;return r.phoneSystemType+" "+r.phoneSystemVer}},{title:"上报时间",key:"createdAt",align:"center",render:function(t,e){var r=e.row;return new Date(r.createdAt).Format("yyyy-MM-dd hh:mm:ss")}}]}.call(this,l)}},created:function(){this.showList()},methods:{pageChange:function(t){this.params.pageNo=t,this.showList()},reset:function(){this.$refs.form.resetFields()},showList:function(){var t=this;return o()(a.a.mark(function e(){var r,n,s,o,c;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.get(t.params);case 2:r=e.sent,n=r.data,s=n.rows,o=void 0===s?[]:s,c=n.count,t.data=o,t.count=c,t.$Message.success("加载完成");case 8:case"end":return e.stop()}},e,t)}))()},selectChange:function(t){this.rows=t},deletes:function(){var t=this;return o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.$Modal.confirm({title:"提示",content:"是否确认删除？",onOk:function(){var e=o()(a.a.mark(function e(){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.delete({ids:t.rows.map(function(t){return t._id})});case 2:t.$Message.success("删除成功!"),t.showList();case 4:case"end":return e.stop()}},e,t)}));return function(){return e.apply(this,arguments)}}(),onCancel:function(){}});case 1:case"end":return e.stop()}},e,t)}))()}}}),p={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("FyLayout",{attrs:{id:"Log",bgColor:"#fff"}},[r("SearchBox",[r("Form",{ref:"form",attrs:{slot:"left",inline:"",model:t.params},slot:"left"},[r("Row",[r("FormItem",{attrs:{label:"项目",prop:"itemID"}},[r("Input",{staticClass:"w200",attrs:{placeholder:"请输入项目ID"},model:{value:t.params.itemID,callback:function(e){t.$set(t.params,"itemID",e)},expression:"params.itemID"}})],1),t._v(" "),r("FormItem",{attrs:{label:"用户名",prop:"userName"}},[r("Input",{staticClass:"w200",attrs:{placeholder:"请输入用户名"},model:{value:t.params.userName,callback:function(e){t.$set(t.params,"userName",e)},expression:"params.userName"}})],1)],1)],1),t._v(" "),r("Row",{attrs:{slot:"right"},slot:"right"},[r("Button",{attrs:{type:"primary"},on:{click:function(e){t.showList()}}},[t._v("查询")]),t._v(" "),r("Button",{attrs:{type:"error"},on:{click:function(e){t.deletes()}}},[t._v("删除")]),t._v(" "),r("Button",{attrs:{type:"ghost"},on:{click:function(e){t.reset()}}},[t._v("重置")])],1)],1),t._v(" "),r("Table",{attrs:{border:"",columns:t.columns,data:t.data},on:{"on-selection-change":t.selectChange}}),t._v(" "),r("Block",{attrs:{align:"right"}},[r("Page",{attrs:{total:t.count,"page-size":t.params.size,"show-elevator":"",current:t.params.pageNo,"show-total":""},on:{"update:current":function(e){t.$set(t.params,"pageNo",e)},"on-change":t.pageChange}})],1)],1)},staticRenderFns:[]};var d=r("VU/8")(u,p,!1,function(t){r("qj4j")},null,null);e.default=d.exports},qj4j:function(t,e){}});
//# sourceMappingURL=5.5d1c3adaed85b4e8cc76.js.map