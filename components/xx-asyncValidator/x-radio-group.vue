<template name="x-radio-group">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input-no-border ':'']" >
		<radio-group @change="onChange">
			<slot></slot>
		</radio-group>
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
</template>

<script>
	import Mixins from "./x-mixins.js"

	export default {
		mixins:[Mixins],
		name: "radio-group",
		props: {
			val: {
				type: [String, Number],
			},
			prop: {
				type: String
			}
		}
	}
</script>

<style>
@import url("./x-style.css");
</style>