<template name="x-radio">
	<label class="x-input" :class="[disabled?'x-input-disabled':'']">
	  <radio :value="val" :checked="checked" :disabled="disabled" color="color" /><text class="x-input-label">{{label}}</text>
	</label>
</template>

<script>
	export default {
		name:"x-radio",
		props:{
			checked:{
				required: false,
				type:[Boolean],
				default:()=>{
					return false;
				}
			},
			val: {
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