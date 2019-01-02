<template name="x-checkbox-group">
	<view class="x-input" :class="[errorTxt&&errorField==prop?'x-error-input-no-border ':'']" >
		<checkbox-group @change="onChange">
			<slot></slot>
		</checkbox-group>
		<view class="x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
</template>

<script>
	import Mixins from "./mixins.js"
	export default {
		mixins:[Mixins],
		name: "x-checkbox-group",
		props: {
			val: {
				type: Array,
			},
			prop: {
				type: String
			}
		}
	}
</script>

<style>
@import url("./style.css");
</style>