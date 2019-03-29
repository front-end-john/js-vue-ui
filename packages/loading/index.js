// 为组件提供 install 方法，供组件对外按需引入
import jsLoading from './loading'

jsLoading.install = Vue => {
  Vue.component(jsLoading.name, jsLoading)
}

export default jsLoading
