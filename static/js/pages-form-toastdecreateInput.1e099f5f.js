(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-form-toastdecreateInput"],{"47ff":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".title[data-v-3eb24f1a]{padding:10px 0!important}.model[data-v-3eb24f1a]{position:fixed;width:50%;height:200px;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);border:1px solid #000;z-index:9999;background:#00f;text-align:center;color:red}",""])},"5b39":function(t,e,n){"use strict";var i=n("aa45"),r=n.n(i);r.a},"5e46":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("x-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,toast:!0},on:{submit:function(e){e=t.$handleEvent(e),t.customerSubmit(e)}}},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("普通文字(改变的时候检测)"+t._s(t.form.input))]),n("x-input",{attrs:{type:"text",prop:"input"},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._l(t.inputArray,function(e){return n("v-uni-view",{key:e.key,staticClass:"uni-form-item uni-column",staticStyle:{position:"relative"}},[n("x-input",{attrs:{type:"text",prop:e.key,placeholder:"我系追加的，辣"},model:{value:t.form[e.key],callback:function(n){t.$set(t.form,e.key,n)},expression:"form[item.key]"}}),n("v-uni-button",{staticStyle:{position:"absolute",right:"5px",top:"15px","z-index":"20"},attrs:{size:"mini",type:"warn"},on:{click:function(n){n=t.$handleEvent(n),t.dele(e.key)}}},[t._v("删")])],1)}),n("v-uni-view",[n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.add(e)}}},[t._v("新增一个必填表单")])],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{formType:"submit"}},[t._v("使用Submit")]),n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.customerSubmit(e)}}},[t._v("不使用Submit提交")]),n("v-uni-button",{attrs:{type:"default",formType:"reset"}},[t._v("Reset")])],1)],2)],1)],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},"97f3":function(t,e,n){"use strict";n.r(e);var i=n("dbb9"),r=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=r.a},a8fd:function(t,e,n){"use strict";n.r(e);var i=n("5e46"),r=n("97f3");for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);n("5b39");var o=n("2877"),a=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,"3eb24f1a",null);e["default"]=a.exports},aa45:function(t,e,n){var i=n("47ff");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=n("4f06").default;r("74ee12f7",i,!0,{sourceMap:!1,shadowMode:!1})},dbb9:function(t,e,n){"use strict";function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"decreateInput",data:function(){return{modelShow:!1,keyx:0,inputArray:[],form:{input:"",input2:""},rules:{input:[{required:!0,message:"请输入txt",trigger:"change",sort:this.keyx}]}}},methods:{add:function(){this.keyx+=1;var t="x"+this.keyx;this.inputArray.push({key:t,value:"",sort:this.keyx}),this.form[t]="",this.rules[t]=[{required:!0,message:"请输入".concat("x"+this.keyx),trigger:"change"}],this.rules=i({},this.rules)},dele:function(t){this.inputArray=this.inputArray.filter(function(e){return e.key!=t}),delete this.form[t],delete this.rules[t]},customerSubmit:function(){this.$refs["ruleForm"].validate(function(t,e){if(!t)return uni.showToast({title:e.error[0].message,duration:1e3,icon:"none"}),!1;uni.showToast({title:"成功",duration:1e3,icon:"none"})})},validInput:function(t){this.$refs["ruleForm"].validateField(t)}}};e.default=u}}]);