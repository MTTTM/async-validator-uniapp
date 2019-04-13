## <a name="async-validator-uniapp">async-validator-uniapp</a>
* 一个简单的表单校验组件
* 它类似于jquery validate
* 如果你使用过elementui或者iview的表单校验，你会很容易就喜欢上它
* 没错，它依赖了async-validator，同时提供了和elementui表单校验几乎一样的接口
* 支持自定义校验规则
* 支持动态新增或减少需要校验的表单元素
* 支持自定义错误//成功的样式
* 支持toast提示&&按次序校验
* [在线demo，请开启手机模拟](https://mtttm.github.io/async-validator-uniapp/#/)
* 新增div-table(额外)
* <a href="https://github.com/MTTTM/async-validator-dev/tree/master/pages/form" target="_blank">demo源码</a> 

 
## 简单实例demo源码(一般情况下，拷贝下面的demo，略修改下就可以投入生产)
* 可以看到下面html源码
* 我们只增加了一个自定义组件x-form
* 以及绑定的数据和对应的校验规则
* 还有toast来处理错误提示的方式

```html
  <template>
  	<view>
  		<view class="uni-padding-wrap uni-common-mt">
  			<x-form :rules="rules" :model="form" ref="ruleForm" @submit="customerSubmit" :toast="true">
  				<view class="uni-form-item uni-column">
  					<view class="title">普通文字(改变的时候检测){{form.input}}</view>
  					<input type="text" v-model="form.input" placeholder="我第二个校验"/>
  				</view>
  				<view class="uni-form-item uni-column">
  					<view class="title">普通文字(失去焦点的时候检测){{form.input2}}</view>
  					<input type="text" v-model="form.input2" placeholder="我先校验"/>
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

```

```javascript
<script>
	export default {
		data() {
			return {
				form: {
					input: "",
					input2: "",

				},
				rules: {
					input: [{
						required: true,
						message: '请输入txt',
                        trigger: 'change',
                        sort:3,
					}],
					input2: [{
						required: true,
						message: '请输入input2',
                        trigger: 'blur',
                        sort:2
					}]
				}
			}
		},
		methods: {
			customerSubmit() {
				this.$refs['ruleForm'].validate((valid,result) => {
					if (valid) {

					} else {
						uni.showToast({
                            title: result.error[0].message,
                            duration: 1000,
                            icon:"none"
                        });
						return false;
					}
				});
			}
		}
	}
</script>

```

## Usage
###安装
##### 若项目之前未使用npm管理依赖（项目根目录下无package.json文件），先在项目根目录执行命令初始化npm工程：
> npm init -y

##### 在项目根目录执行命令安装npm包：
> npm i async-validator-uniapp --save

##### 使用
> import xPlus  from 'async-validator-uniapp'

##### 提示
>  <font face="黑体" color="red" >[WARNING]</font> 1.0.3之后，可能会停止插件市场的更新，如果需要拷贝到项目，请npm下载后拷贝使用，入口文件是index.js

### 全局导入
在main.js里面注册，目前uniapp全局组件不支持xPlus.intall(Vue)的这种方式

```html

    import xform from './components/async-validator-uniapp/src/xForm.vue'
    import xinput from './components/async-validator-uniapp/src/xInput.vue'
    import xcheckboxGroup from './components/async-validator-uniapp/src/xCheckboxGroup.vue'
    import x from './components/async-validator-uniapp/src/xCheckbox.vue'
    import xradioGroup from './components/async-validator-uniapp/src/xRadioGroup.vue'
    import xradio from './components/async-validator-uniapp/src/xRadio.vue'
    import xpicker from './components/async-validator-uniapp/src/xPicker.vue'
    import xtextarea from './components/async-validator-uniapp/src/xTextarea.vue'
    
    Vue.component("x-form", xform)
    Vue.component("x-input", xinput)
    Vue.component("x-checkbox-group", xcheckboxGroup)
    Vue.component("x-checkbox", xcheckbox)
    Vue.component("x-radio-group", xradioGroup)
    Vue.component("x-radio", xradio)
    Vue.component("x-picker",xpicker)
    Vue.component("x-textarea", xtextarea)
```
### 局部引入
在需要的页面里面导入,并且注册
```javascript
 import {xForm} from "async-validator-uniapp";
 import {xInput} from "async-validator-uniapp";
 import {xCheckboxGroup} from "async-validator-uniapp";
 import {xCheckbox} from "async-validator-uniapp";
 import {xRadioGroup} from "async-validator-uniapp";
 import {xRadio} from "async-validator-uniapp";
 import {xPicker} from "async-validator-uniapp";
 import {xTextarea} from "async-validator-uniapp";
 export default {
	 components:{xForm,xInput,xCheckboxGroup,xCheckbox,xRadioGroup,xRadio,xPicker,xTextarea}
 }
```
### 在js里面触发校验和查看校验结果
### validate  验证整个form是否通过校验
this.$refs['form的ref'].validate
### validateField校验单个表单
this.$refs['form的ref'].validateField('对应表单的prop')
### resetFields 清空某个表单或者整个from
this.$refs['form的ref'].resetFields('对应表单的prop,如果不填就是清空整个form')

## 标签目录,很多情况下，你只需要用到x-form
#####  <a href="#x-form">x-form</a>
#####  <a href="#x-input">x-input</a>
#####  <a href="#x-checkbox-group">x-checkbox-group</a>
#####  <a href="#x-radio-group"> x-radio-group</a>
#####  <a href="#x-picker">x-picker</a>
#####  <a href="#x-radio">x-radio</a>
#####  <a href="#x-checkbox">x-checkbox</a>
#####  <a href="#x-textarea">x-textarea</a>

## 标签属性,(没有特殊说明的和uniapp保存一致)
 
#### <a name="x-form">x-form</a>

属性名|类型|默认值|说明
---|:--:|:--:|---:
rules|object|--|必填，校验规则
model|object|--|必填，表单数据
ref|Object|--|x-form组件的应用可以调用validateField和validate

#### <a name="x-input">x-input</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
type|string|--|默认text,类型请参考uniapp文档
value|string|--|表单显示值
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面

####  <a name="x-checkbox-group">x-checkbox-group</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面

#### <a name="x-radio-group">x-radio-group</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面

#### <a name="x-checkbox">x-checkbox</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面
####  <a name="x-radio">x-radio</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面

####  <a name="x-textarea">x-textarea</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
label|string|--|提示文字
disabled|Boolean|false|禁用
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面

#### <a name="x-picker">x-picker</a>
属性名|类型|默认值|说明
---|:--:|:--:|---:
value|string|--|表单显示值
disabled|Boolean|false|禁用
placeholder|String|"请选择"|占位符
prop|string|--|对应的校验规则，强烈推荐和该表单的绑定值的key保持一致
@input|Function|--|同步数据到当前页面
@cancel|Function|--|取消事件

## 更新日志
### 1.1.0
 ##### 替换掉@input的方式同步数据，使用v-model
 ##### checkboxgroup和radioxgroup使用:value.sync="mock"的方式同步数据
 ##### 新增顺序验证和toast提示的方式，toast提示方式不再做表单样式的修改
 ##### 新增自定义错误样式和成功样式


### <a href="#async-validator-uniapp"><font face="黑体" color="red" size="5" >回到顶部</font></a>


































