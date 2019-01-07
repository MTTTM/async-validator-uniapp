import Event from "./watch.js"
export default {
	data() {
		return {
			inputValue: "",
			errorTxt: "",
			errorField: ""
		}
	},
	created() {
		//校验
		Event.$on("valid", (data) => {
			if(data.prop!==this.prop){
				return;
			}
			let t = data.error;
			if (data.p) {
				this.errorTxt = '';
				return;
			}
			if (!t) {
				return;
			}
			if (t[0] && this.prop !== t[0].field) {
				return;
			}
			if (t && t[0]) {
				this.errorTxt = t[0].message;
				this.errorField = t[0].field;
			}
		});

		//重置
		Event.$on("reset", (e) => {
			this.inputValue="";
			//不需要通知Form
			//通知本组件
			this.$emit("input",this.inputValue)
		});

	},
	methods: {
		onChange(e) {
			if(!e.detail){
				return;
			}
			this.inputValue = e.detail.value;
			let _this = this;
			Event.$emit("change", {
				val: _this.inputValue,
				prop: this.prop
			})
			//通知本组件
			this.$emit("input",_this.inputValue)
		},
		onBlur(e) {
			if(!e.detail){
				return;
			}
			this.inputValue = e.detail.value;
			let _this = this;
			Event.$emit("blur", {
				val: _this.inputValue,
				prop: this.prop
			});
		}
		
	}
};
