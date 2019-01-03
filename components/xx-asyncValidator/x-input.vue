<template name="x-input">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" v-if="type==='text'">
		<input class="uni-input" :value="val"  :placeholder="placeholder" @input="onChange" @blur='onBlur' />
		 <view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" v-else-if="type==='password'">
		<input class="uni-input" password="true" :value="val" :placeholder="placeholder" @input="onChange" @blur='onBlur' />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" v-else-if="type==='number'">
		<input class="uni-input" type="number" :value="val" :placeholder="placeholder" @input="onChange" @blur='onBlur' />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" v-else-if="type==='digit'">
		<input class="uni-input" type="digit" :value="val" :placeholder="placeholder" @input="onChange" @blur='onBlur' />
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input':'']" v-else-if="type==='idcard'">
		<input class="uni-input" type="idcard" :value="val" :placeholder="placeholder" @input="onChange" @blur='onBlur'/>
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
	
</template>
<script>
	
	import Mixins from "./x-mixins.js"

	export default {
		mixins:[Mixins],
		name: "x-input",
		props: {
			type: {
				type: String,
				required:true,
			},
			val:{
				type:[String,Number],
			},
			prop:{
				type:String
			},
			placeholder:{
				type:String,
				default:"请输入"
			}
		}
	}
</script>
<style>
@import url("./x-style.css");
</style>