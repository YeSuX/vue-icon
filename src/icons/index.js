import Vue from 'vue'
import SvgIcon from '../svgIcons'

Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
console.log(req.keys());
console.log(require('./svg/aixin.svg'));

requireAll(req)