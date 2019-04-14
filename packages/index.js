// https://juejin.im/post/5c95c61f6fb9a070c40acf65
import jsLoading from './components/loading'
/*import {
  // style
  Style,
  // locale
  Locale,
  // popup
  Popup,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  // module
  BetterScroll,
  createAPI
} from './module'*/

// 所有组件列表
const components = [
  jsLoading,
  /*// style
  Style,
  // locale
  Locale,
  // popup
  Popup,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  // module
  BetterScroll,
  createAPI*/
]

// 定义 install 方法，接收Vue作为参数
const install = function (Vue) {
  // 判断是否安装，安装过就不继续往下执行
  if (install.installed) return
  install.installed = true
  // 遍历注册所有组件
  components.map(component => Vue.component(component.name, component))
  // 等价于下面这个写法
  // components.map(component => Vue.use(component))
}

// 监测到 Vue 才执行，毕竟我们是基于Vue的
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  // 所有组件，必须具有install，才能使用Vue.use()
  ...components
}
