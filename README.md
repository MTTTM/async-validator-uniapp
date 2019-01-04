## async-validator-uniapp
* 一个简单的表单校验组件
* 它类似于jquery validate
* 如果你使用过elementui或者iview的表单校验，你会很容易就喜欢上它
* 没错，它依赖了async-validator，同时提供了和elementui表单校验几乎一样的接口

## Usage
###安装
##### 若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
> npm init -y

##### 在项目根目录执行命令安装npm包：
> npm i async-validator-uniapp --save

##### 使用
> import xPlus  from 'async-validator-uniapp'

##### 提示
>  <font face="黑体" color="red" >[WARNING]</font> uniapp模块停止更新，如果需要拷贝到项目，请npm下载后拷贝使用，入口文件是index.js

### 全局导入

```html
    import xPlus from "async-validator-uniapp"
	xPlus.install(Vue);
```
### 局部引入
```javascript
 import {xForm} from "async-validator-uniapp";
 import {xInput} from "async-validator-uniapp";
 import {xCheckboxGroup} from "async-validator-uniapp";
 import {xCheckbox} from "async-validator-uniapp";
 import {xRadioGroup} from "async-validator-uniapp";
 import {xRadio} from "async-validator-uniapp";
 import {xPicker} from "async-validator-uniapp";
 import {xTextarea} from "async-validator-uniapp";
```
### API
 #### xPlus.install
##### 第一个参数是Vue
##### 第二个参数是你要给你的标签添加的前缀，如果不使用默认是"x"

#### validate  验证整个form是否通过校验
this.$refs['form的ref'].validate


#### validateField校验当个表单
this.$refs['form的ref'].validateField('对应表单的prop')
#### resetFields 清空某个表单或者整个from
this.$refs['form的ref'].resetFields('对应表单的prop,如果不填就是清空整个form')

### 标签
#####  x-form
#####  x-input
#####  x-checkbox-group
#####  x-radio-group
#####  x-picker
#####  x-radio
#####  x-checkbox
#####  x-textarea

### 标签属性(没有特殊说明的和uniapp保存一致)
 
#### x-form

属性名|类型|默认值|说明
---|:--:|:--:|---:
rules|object|--|必填，校验规则
model|object|--|必填，表单数据
ref|Object|--|x-form组件的应用可以调用validateField和validate

#### x-input
属性名|类型|默认值|说明
---|:--:|:--:|---:
type|string|--|默认text,类型请参考uniapp文档
value|string|Number|表单显示值
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

#### x-checkbox-group
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|Number|表单显示值
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

#### x-radio-group
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|Number|表单显示值
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

#### x-checkbox
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面
#### x-radio
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

#### x-textarea
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

#### x-picker
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|Number|表单显示值
disabled|Boolean|false|禁用
placeholder|String|"请选择"|占位符
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值得key保持一致
@input|Function|--|同步数据到当前页面

## 代码块
### 基础校验
```html
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
					<x-input type="text" :val="form.input" @input="form.input=$event" prop="input"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
					<x-input type="text" :val="form.input2" @input="form.input2=$event" prop="input2"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">密码:{{form.password}}</view>
					<x-input type="password" :val="form.password" @input="form.password=$event" prop="password"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">数字{{form.number}}</view>
					<x-input type="number" :val="form.number" @input="form.number=$event" prop="number"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">小数点数字{{form.digit}}</view>
					<x-input type="digit" :val="form.digit" @input="form.digit=$event" prop="digit"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">身份证{{form.idcard}}</view>
					<x-input type="idcard" :val="form.idcard" @input="form.idcard=$event" prop="idcard"></x-input>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">普通文字(改变的时候检测){{form.textarea}}</view>
					<x-textarea type="text" placeholder="羊羊得亿" :value="form.textarea" @input="form.textarea=$event" prop="textarea"></x-textarea>
				</view>
				

				<view class="uni-btn-v">
					<button formType="submit">使用Submit</button>
					<button @tap="customerSubmit">不使用Submit提交</button>
					<button type="default" formType="reset">Reset</button>
				</view>
			</x-form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			const customX = (rule, value, callback) => {
				if (value!==""&&value!=100) {
					callback(new Error('请输入100'));
				}
				else{
					callback();
				}
			};
			
			return {
				title: 'form',
				pickerHidden: true,
				chosen: '',
				form: {
					input: "zz00",
					input2: "zzyy",
					passwordx: "123456",
					number: "",
					digit: "",
					idcard: "",
					textarea: "",
				},
				rules: {
					textarea: [{
						required: true,
						message: '请输入textarea',
						trigger: 'change'
					}],
					input: [{
						required: true,
						message: '请输入txt',
						trigger: 'change'
					}],
					input2: [{
						required: true,
						message: '请输入input2',
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请选择密码',
						trigger: 'change'
					}],
					number: [{
						required: true,
						message: '请输入数字',
						trigger: 'change'
					}],
					digit: [{
						required: true,
						message: '请输入小数点数字',
						trigger: 'change'
					}],
					idcard: [{
						required: true,
						message: '请输入身份证',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			pickerConfirm: function(e) {
				this.pickerHidden = true
				this.chosen = e.target.value
			},
			pickerCancel: function(e) {
				this.pickerHidden = true
			},
			pickerShow: function(e) {
				this.pickerHidden = false
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function(e) {
				console.log("清空数据")
				this.chosen = ''
			},
			xchange() {
				console.log("改变")
			},
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			validInput(k) {
				this.$refs['ruleForm'].validateField(k)

			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>

```


### checkbox&&radio
```html
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">radio{{form.radio}}</view>
					<x-radio-group :val="form.radio" @input="form.radio=$event" prop="radio">
						<x-radio value="1" label="选项1" :checked="form.radio===1?true:false" :disabled="true" />
						<x-radio value="2" label="选项2" :checked="form.radio===2?true:false" :disabled="true" />
					</x-radio-group>
				</view>
				<view class="uni-form-item uni-column">
					<view class="title">checkbox</view>
					<x-checkbox-group :val="form.checkbox" @input="form.checkbox=$event" prop="checkbox" :disabled="true">
						<template v-for="item in items">
							<x-checkbox :key="item.value" :value="item.name" :label="item.value" :checked="form.checkbox.includes(item.name)"
							 :disabled="item.disabled" />
						</template>
					</x-checkbox-group>
					<button @tap="validInput('checkbox')">验证单个表单</button>
				</view>
				<view class="uni-btn-v">
					<button formType="submit">使用Submit</button>
					<button @tap="customerSubmit">不使用Submit提交</button>
					<button type="default" formType="reset">Reset</button>
				</view>
			</x-form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'form',
				pickerHidden: true,
				chosen: '',
				items: [{
						name: 'USA',
						value: '美国',
						disabled: true
					},
					{
						name: 'CHN',
						value: '中国'
					},
					{
						name: 'BRA',
						value: '巴西'
					},
					{
						name: 'JPN',
						value: '日本'
					},
					{
						name: 'ENG',
						value: '英国'
					},
					{
						name: 'TUR',
						value: '法国'
					}
				],
				form: {
					checkbox: [],
					radio: "",
			
				},
				rules: {
					checkbox: [{
							type: 'array',
							required: true,
							message: '请选择checkbox',
							trigger: 'change'
						},
						{
							type: 'array',
							min: 2,
							message: '请选择至少2个checkbox',
							trigger: 'change'
						},
					],
					radio: [{
						required: true,
						message: '请选择radio',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			pickerConfirm: function(e) {
				this.pickerHidden = true
				this.chosen = e.target.value
			},
			pickerCancel: function(e) {
				this.pickerHidden = true
			},
			pickerShow: function(e) {
				this.pickerHidden = false
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function(e) {
				console.log("清空数据")
				this.chosen = ''
			},
			xchange() {
				console.log("改变")
			},
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			validInput(k) {
				this.$refs['ruleForm'].validateField(k)

			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>

```


###picker
```html
<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit">
				<view class="uni-form-item uni-column">
					<view class="title">时间选择:{{form.time}}</view>
					<x-picker mode="time" start="09:00" end="06:00" :value="form.time" @input="form.time=$event" prop="time"></x-picker>
				</view>
				<view class="uni-btn-v">
					<button formType="submit">使用Submit</button>
					<button @tap="customerSubmit">不使用Submit提交</button>
					<button type="default" formType="reset">Reset</button>
				</view>
			</x-form>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				title: 'form',
				pickerHidden: true,
				chosen: '',
			
				form: {
					time: "24:00"
				},
				rules: {
					time: [{
						required: true,
						message: '请选择time',
						trigger: 'change'
					}]
				}
			}
		},
		methods: {
			pickerConfirm: function(e) {
				this.pickerHidden = true
				this.chosen = e.target.value
			},
			pickerCancel: function(e) {
				this.pickerHidden = true
			},
			pickerShow: function(e) {
				this.pickerHidden = false
			},
			formSubmit: function(e) {
				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			},
			formReset: function(e) {
				console.log("清空数据")
				this.chosen = ''
			},
			xchange() {
				console.log("改变")
			},
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			validInput(k) {
				this.$refs['ruleForm'].validateField(k)

			}
		}
	}
</script>

<style>
	.title {
		padding: 10px 0 !important;
	}
</style>

```




### 自定义规则

```html
   <template>
   	<view>
   		<page-head :title="title"></page-head>
   		<view class="uni-padding-wrap uni-common-mt">
   			<x-form :rules="rules" :model="form" ref="ruleForm">
   				<view class="uni-form-item uni-column">
   					<view class="title">自定义规则，必须等于100</view>
   					<x-input type="text" :val="form.custom" @input="form.custom=$event" prop="custom"></x-input>
   				</view>
   				<view class="uni-btn-v">
   					<button formType="submit">使用Submit</button>
   					<button @tap="customerSubmit">不使用Submit提交</button>
   					<button type="default" formType="reset">Reset</button>
   				</view>
   			</x-form>
   		</view>
   	</view>
   </template>
   <script>
   	export default {
   		data() {
   			const customX = (rule, value, callback) => {
   				if (value!==""&&value!=100) {
   					callback(new Error('请输入100'));
   				}
   				else{
   					callback();
   				}
   			};
   			
   			return {
   				title: 'form',
   				pickerHidden: true,
   				chosen: '',
   				form: {
   					custom:""
   				},
   				rules: {
   					custom:[
   						{
   							required: true,
   							message: '请输入',
   							trigger: 'change'
   						},
   						{ validator: customX, trigger: 'blur' }
   					]
   				}
   			}
   		},
   		methods: {
   			pickerConfirm: function(e) {
   				this.pickerHidden = true
   				this.chosen = e.target.value
   			},
   			pickerCancel: function(e) {
   				this.pickerHidden = true
   			},
   			pickerShow: function(e) {
   				this.pickerHidden = false
   			},
   			formSubmit: function(e) {
   				console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
   			},
   			formReset: function(e) {
   				console.log("清空数据")
   				this.chosen = ''
   			},
   			xchange() {
   				console.log("改变")
   			},
   			customerSubmit() {
   				this.$refs['ruleForm'].validate((valid) => {
   					if (valid) {
   						alert('submit!');
   					} else {
   						console.log('error submit!!');
   						return false;
   					}
   				});
   			},
   			validInput(k) {
   				this.$refs['ruleForm'].validateField(k)
   
   			}
   		}
   	}
   </script>
   
   <style>
   	.title {
   		padding: 10px 0 !important;
   	}
   </style>
   
   
```




































