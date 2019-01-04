import form from './x-form.vue'
import input from './x-input.vue'
import checkboxGroup from './x-checkbox-group.vue'
import checkbox from './x-checkbox.vue'
import radioGroup from './x-radio-group.vue'
import radio from './x-radio.vue'
import picker from './x-picker.vue'
import textarea from './x-textarea.vue'
const xPlus = {};
xPlus.install = function(Vue, pr) {
	let p = String(pr).length && /^[a-z]&/.test(pr) ? pr : 'x';
	Vue.component(`${p}-form`, form)
	Vue.component(`${p}-input`, input)
	Vue.component(`${p}-checkbox-group`, checkboxGroup)
	Vue.component(`${p}-checkbox`, checkbox)
	Vue.component(`${p}-radio-group`, radioGroup)
	Vue.component(`${p}-radio`, radio)
	Vue.component(`${p}-picker`, picker)
	Vue.component(`${p}-textarea`, textarea)
}
export const xForm=form;
export const xInput=input;
export const xFheckboxGroup=checkboxGroup;
export const xCheckbox=checkbox;
export const xRadioGroup=radioGroup;
export const xRadio=radio;
export const xPicker=picker;		
export const xTextarea=textarea;			
export default xPlus;
