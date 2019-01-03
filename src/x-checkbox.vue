<template name="x-checkbox">
	<label class="x-input" :class="[disabled?'x-input-disabled':'']">
	 <checkbox :value="value" :checked="checked" :disabled="disabled" color="color" /><text class="x-input-label">{{label}}</text>
	</label>
</template>

<script>
	export default {
		name:"x-checkbox",
		props:{
			checked:{
				required: false,
				type:[Boolean],
				default:()=>{
					return false;
				}
			},
			value: {
				required: false,
				type: [String, Number]
			},
			disabled: {
				type: Boolean,
				default: () => {
					return false;
				}
			},
			color:{
				type:String
			},
			label:{
				type:[String,Number],
				default:()=>{
					return ";"
				}
			}
		}
	}
</script>

<style lang="less">
@import url("./style.less");
</style>