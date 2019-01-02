<template name="x-form">
	<form @submit="onSubmit" @reset="onReset">
		<slot @change="change"></slot>
	</form>
</template>

<script>
	let schema = require('async-validator').default;
	console.log("schema", schema)
	import Event from "./watch.js"
	export default {
		name: "x-form",
		data() {
			return {
				validKey: "",
				validVal: "",
				copyRules: {},
			};
		},
		props: {
			rules: {
				required: false,
				type: Object
			},
			model: {
				type: Object,
				required: false,
				default: () => {
					return {};
				}
			}
		},
		created() {
			Event.$on("change", (val) => {
				console.log("form-val", val)
				this.onChange(val);
			});
			Event.$on("blur", (val) => {
				console.log("blur", val)
				this.onBlur(val);
			});
		},
		methods: {
			onSubmit(e) {
				this.validate();
				this.$emit("submit", e)
			},
			onReset() {
				this.resetFields();
				this.$emit("reset", e)
			},
			onChange(data) {
				if(!this.rules[data.prop]){
					return;
				}
				let filterArray = this.rules[data.prop].filter((item) => {
					return String(item.trigger).trim().toLowerCase() === 'change' || !item.trigger;
				});
				this.beforeValid(data.prop, data.val, filterArray);
			},
			onBlur(data) {
				if(!this.rules[data.prop]){
					return;
				}
				let filterArray = this.rules[data.prop].filter((item) => {
					return String(item.trigger).trim().toLowerCase() === 'blur';
				});
				this.beforeValid(data.prop, data.val, filterArray);
			},
			/*
				验证当个表单,可以通过当前form组件调用
				prop {string} 对应表单的prop和rules的prop
				func {function} 回调函数
			*/
			async validateField(prop,func){
				 let t=await this.beforeValid(prop,this.model[prop]);
				 if(typeof func=="function"){
					 func(t);
				 }
			},
			/*
				验证from下的所有表单，,可以通过当前form组件调用
				func  {function} 回调函数
			*/
			async validate(func) {
				let pass = true;
				let promiseArray = [];
				//讲每个表单的校验放到promise里面
				for (let k of Object.keys(this.rules)) {
					let t = this.rules[k];
					if (t && Array.isArray(t)) {
						promiseArray.push(this.beforeValid(k, this.model[k]));
					}
				};
				//封装所有promise，到all里面等待所有结果
				const pAll = await Promise.all(promiseArray);
				let endArray = pAll.filter(item => !item);
				if (endArray.length) {
					pass = false;
				} else {
					pass = true;
				}
				if (typeof func == "function") {
					func(pass);
				}
			},
			/*
			清空form下的所有表单，可以同from组件调用
				prop {string} 对应表单标签的prop以及rules的key
			*/
			resetFields(prop) {
				//清空单一表单状态
				if (prop) {
					Event.$emit("valid", {
						p: true,
						prop: prop
					});
					return;
				}
				//清空所有表单状态
				for (let k of Object.keys(this.rules)) {
					Event.$emit("valid", {
						p: true,
						prop: k
					});
				};
			},
			/*
			  validator {object} validator
			  prop {string} prop
			  val {string} val
			*/
			valid(validator, prop, val) {
				return new Promise((reslove, reject) => {
					validator.validate({
						[prop]: val
					}, (errors, fields) => {
						if (errors) {

							reslove({
								p: false,
								error: errors,
								fields: fields,
								prop: prop
							});
						} else {
							reslove({
								p: true,
								prop: prop
							});
						}
					});
				})

			},
			/*
				prop {string} 对应表单的prop和rules的Key
				val {string} 对应表单的值
				rules {Array} 响应触发方式匹配到的规则
			*/
			async beforeValid(prop, val, rules) {
				if (!(this.rules[prop])) {
					return true;
				};
				let pass = true;
				//匹配到的规则数组
				let matchRules = Array.isArray(rules) ? rules : this.rules[prop];
				for (let i = 0; i < matchRules.length; i++) {
					let descriptor = {
						[prop]: matchRules[i]
					}
					console.log("descriptor", descriptor)
					let validator = new schema(descriptor);
					let result = await this.valid(validator, prop, val);
					Event.$emit("valid", { ...result
					});
					//某表单只要有其中一个规则不过就终止循环
					if (!result.p) {
						//this.copyRules[prop]=false;
						pass = false;
						break;
					}

				}
				return Promise.resolve(pass);

			}
		}
	}
</script>

<style>

</style>
