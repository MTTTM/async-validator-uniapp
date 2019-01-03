<template name="x-input">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'',disabled?'x-input-disabled':'']" v-if="type==='text'">
		<input class="uni-input" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur' :disabled="disabled" />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'',disabled?'x-input-disabled':'']" v-else-if="type==='password'">
		<input class="uni-input" password="true" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur'
		 :disabled="disabled" />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'',disabled?'x-input-disabled':'']" v-else-if="type==='number'">
		<input class="uni-input" type="number" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur'
		 :disabled="disabled" />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'',disabled?'x-input-disabled':'']" v-else-if="type==='digit'">
		<input class="uni-input" type="digit" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur'
		 :disabled="disabled" />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'',disabled?'x-input-disabled':'']" v-else-if="type==='idcard'">
		<input class="uni-input" type="idcard" :value="value" :placeholder="placeholder" @input="onChange" @blur='onBlur'
		 :disabled="disabled" />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>

</template>
<script>
	import Mixins from "./mixins.js"
	export default {
		mixins: [Mixins],
		name: "x-input",
		props: {
			type: {
				type: String,
				required: true,
			},
			value: {
				type: [String, Number],
			},
			prop: {
				type: String
			},
			placeholder: {
				type: String,
				default: "请输入"
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