<template name="booleen-x-input">
	<view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-if="type==='text'">
		<input class="uni-input" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>
	<view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-else-if="type==='password'">
		<input class="uni-input" :value="value" :placeholder="placeholder" password="true" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>
    <view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-else-if="type==='number'">
		<input class="uni-input" :value="value" :placeholder="placeholder" type="number" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>
     <view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-else-if="type==='digit'">
		<input class="uni-input" :value="value" :placeholder="placeholder" type="digit" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>
	  <view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-else-if="type==='idcard'">
		<input class="uni-input" :value="value" :placeholder="placeholder"  type="idcard" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>
    <view class="booleen-x-input" :class="[errorClassName,disabledClassName,successClassName,disabled?'booleen-x-input-disabled':'']" v-else>
		<input class="uni-input" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<errorTip :errorTxtClassName="errorTxtClassName" v-if="errorTxt&&errorField==prop" :errorTxt="errorTxt"></errorTip>
	</view>

</template>
<script>
	import Mixins from "./mixins.js"
	export default {
		mixins: [Mixins],
		name: "booleen-x-input",
		props: {
			type: {
				type: String,
				required: true,
			},
// 			value: {
// 				type: [String, Number],
// 			},
// 			prop: {
// 				type: String
// 			},
// 			placeholder: {
// 				type: String,
// 				default: "请输入"
// 			},
// 			disabled: {
// 				type: Boolean,
// 				default: () => {
// 					return false;
// 				}
// 			},
// 			errorClass:{
// 				type:String,
// 				default:""
// 			},
// 			successClass:{
// 				type:String,
// 				default:""
// 			}
		}
	}
</script>
<style lang="less">
@import url("./style.less");
</style>