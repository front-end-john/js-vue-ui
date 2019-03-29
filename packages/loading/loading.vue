<template>
  <div class="js-loading">{{loadingText}}</div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Loading', // 这个名字很重要，它就是未来的标签名<i-loading></i-loading>
    data() {
      return {
        loadingText: 'loading...'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  .js-loading
    font-size 14px
</style>
