<template name="x-picker">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" >
		 <picker class="picker-item" :mode="mode" :start="start" :end="end" @change="onChange" :disabled="disabled">
			<x-input type="text" :value="value" prop="input" :disabled="disabled" :placeholder="placeholder"></x-input>
         </picker>
		 <view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
</template>

<script>
	import Mixins from "./mixins.js"
	export default {
		mixins:[Mixins],
		name: "x-picker",
		props: {
			placeholder:{
				type:String,
				default:()=>{
					return "请选择"
				}
			},
			start: {
				type: String,
				required:true,
			},
			end: {
				type: String,
				required:true,
			},
			mode: {
				type: String,
				required:true,
			},
			range:{
				type:Array
			},
			"range-key":{
			    type:String,
				default:"text"
			},
			value: {
				type: String
			},
			prop: {
				type: String
			},
			disabled: {
				type: Boolean,
				default: () => {
					return false;
				}
			}
		}
	}
</script>

<style lang="less">
@import url("./style.less");
</style>