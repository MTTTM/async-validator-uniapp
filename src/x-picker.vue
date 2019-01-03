<template name="x-picker">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" >
		 <picker class="picker-item" :mode="mode" :start="start" :end="end" @change="onChange" :disabled="disabled">
			<x-input type="text" :val="inputValue" prop="input" :disabled="disabled"></x-input>
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
			val: {
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