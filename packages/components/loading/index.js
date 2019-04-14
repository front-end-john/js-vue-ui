// 为组件提供 install 方法，供组件对外按需引入
import jsLoading from './loading'

// 来保持实例，单例模式
let instance;
let el;

jsLoading.install = (Vue, options = {}) => {
  const defaultOptions = {
    text: "",
    textStyle: {
      fontSize: "14px",
      color: "#fff"
    },
    ringStyle: {
      width: "100px",
      height: "100px",
      color: "#407af3"
    },
    ...options
  };
  Vue.prototype.$loading = {
    show(options = {}) {
      if (!instance) {
        let LoadingInstance = Vue.extend(jsLoading);
        el = document.createElement("div");
        document.body.appendChild(el);
        instance = new LoadingInstance({
          propsData: { defaultOptions, ...options }
        }).$mount(el);
      } else {
        return instance;
      }
    },
    hide() {
      if (instance) {
        document.body.removeChild(document.getElementById("loading-wrapper"));
        instance = undefined;
      }
    }
  };
  // Vue.component(jsLoading.name, jsLoading)
}

export default jsLoading
