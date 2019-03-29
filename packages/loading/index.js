// 为组件提供 install 方法，供组件对外按需引入
import Loading from './loading'
Loading.install = Vue => {
  Vue.component(Loading.name, Loading)
}
export default Loading
