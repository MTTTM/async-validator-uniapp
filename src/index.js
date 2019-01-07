import xxform from './xForm.vue'
import xxinput from './xInput.vue'
import checkboxGroup from './xCheckboxGroup.vue'
import checkbox from './xCheckbox.vue'
import radioGroup from './xRadioGroup.vue'
import radio from './xRadio.vue'
import picker from './xPicker.vue'
import textarea from './xTextarea.vue'
const xPlus = {};
xPlus.install = function(Vue, pr) {
	Vue.component("bl-form", xxform)
	Vue.component("bl-input", xxinput)
	Vue.component("bl-checkbox-group", checkboxGroup)
	Vue.component("bl-checkbox", checkbox)
	Vue.component("bl-radio-group", radioGroup)
	Vue.component("bl-radio", radio)
	Vue.component("bl-picker", picker)
	Vue.component("bl-textarea", textarea)
}
export const xForm=xxform;
export const xInput=xxinput;
export const xCheckboxGroup=checkboxGroup;
export const xCheckbox=checkbox;
export const xRadioGroup=radioGroup;
export const xRadio=radio;
export const xPicker=picker;		
export const xTextarea=textarea;	

export default xPlus;
