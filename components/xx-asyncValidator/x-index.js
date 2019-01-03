import xForm from './x-form.vue'
import xInput from './x-input.vue'
import xCheckboxGroup from './x-checkbox-group.vue'
import xRadioGroup from './x-radio-group.vue'
import xPicker from './x-picker.vue'
const xPlus = {};
xPlus.install = function (Vue,pr) {
   let p=String(pr).length&&/^[a-z]&/.test(pr)?pr:'x';
   Vue.component(`${p}-input`,xInput)
   Vue.component(`${p}-form`,xForm)
   Vue.component(`${p}-checkbox-group`,xCheckboxGroup)
   Vue.component(`${p}-radio-group`,xRadioGroup)
   Vue.component(`${p}-picker`,xPicker)
}
export default  xPlus;