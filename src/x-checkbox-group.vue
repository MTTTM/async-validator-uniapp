<template name="x-checkbox-group">
	<view class="booleen-x-input" :class="[errorTxt&&errorField==prop?'booleen-x-error-input-no-border ':'']" >
		<checkbox-group @change="onChange" :disabled="disabled">
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
			value: {
				type: Array,
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