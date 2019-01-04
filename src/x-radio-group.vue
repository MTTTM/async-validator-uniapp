<template name="booleen-x-radio-group">
	<view class="booleen-x-input" :class="[errorTxt&&errorField==prop?'booleen-x-error-input-no-border ':'',disabled?'booleen-x-input-disabled':'']" >
		<radio-group @change="onChange">
			<slot></slot>
		</radio-group>
		<view class="booleen-x-error" v-if="errorTxt&&errorField==prop">{{errorTxt}}</view>
	</view>
</template>

<script>
	import Mixins from "./mixins.js"
	export default {
		mixins:[Mixins],
		name: "radio-group",
		props: {
			value: {
				type: [String, Number],
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