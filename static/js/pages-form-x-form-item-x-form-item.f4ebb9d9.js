(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-form-x-form-item-x-form-item"],{"513e":function(t,e,n){"use strict";n.r(e);var i=n("cc60"),u=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=u.a},"719e":function(t,e,n){"use strict";var i=n("f738"),u=n.n(i);u.a},7639:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".title[data-v-fd9d4650]{padding:10px 0!important}",""])},"906e":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("x-form",{ref:"ruleForm",attrs:{rules:t.rules,model:t.form,toast:!0},on:{submit:function(e){e=t.$handleEvent(e),t.customerSubmit(e)}}},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("普通文字(改变的时候检测)"+t._s(t.form.input))]),n("v-uni-input",{attrs:{type:"text",placeholder:"我第二个校验"},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[t._v("普通文字(失去焦点的时候检测)"+t._s(t.form.input2))]),n("v-uni-input",{attrs:{type:"text",placeholder:"我先校验"},model:{value:t.form.input2,callback:function(e){t.$set(t.form,"input2",e)},expression:"form.input2"}})],1),n("v-uni-view",{staticClass:"uni-btn-v"},[n("v-uni-button",{attrs:{formType:"submit"}},[t._v("使用Submit")]),n("v-uni-button",{on:{click:function(e){e=t.$handleEvent(e),t.customerSubmit(e)}}},[t._v("不使用Submit提交")]),n("v-uni-button",{attrs:{type:"default",formType:"reset"}},[t._v("Reset")])],1)],1)],1)],1)},u=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return u})},a8b8:function(t,e,n){"use strict";n.r(e);var i=n("906e"),u=n("513e");for(var r in u)"default"!==r&&function(t){n.d(e,t,function(){return u[t]})}(r);n("719e");var o=n("2877"),s=Object(o["a"])(u["default"],i["a"],i["b"],!1,null,"fd9d4650",null);s.options.__file="x-form-item.vue",e["default"]=s.exports},cc60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{form:{input:"",input2:""},rules:{input:[{required:!0,message:"请输入txt",trigger:"change",sort:3}],input2:[{required:!0,message:"请输入input2",trigger:"blur",sort:2}]}}},methods:{customerSubmit:function(){this.$refs["ruleForm"].validate(function(t,e){if(!t)return uni.showToast({title:e.error[0].message,duration:1e3,icon:"none"}),!1;uni.showToast({title:"提交成功",duration:1e3})})}}};e.default=i},f738:function(t,e,n){var i=n("7639");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var u=n("4f06").default;u("06b0ff26",i,!0,{sourceMap:!1,shadowMode:!1})}}]);