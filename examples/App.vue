<template>
  <div id="app">
    <nav id="nav">
      <router-link
        v-for="item in navList"
        :to="item.val"
        :key="item.val">
        {{item.name}}
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'home',
    data() {
      return {
        navList: [{
          name: '首页',
          val: 'index'
        }, {
          name: '关于我们',
          val: 'aboutUs'
        }]
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scope>
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    padding 10px
    cursor pointer
    &.router-link-exact-active
      color #42b983
</style>
