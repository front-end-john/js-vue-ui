<template>
  <div class="js-loading ellipsis">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'jsLoading', // 这个名字很重要，它就是未来的标签名<js-loading></js-loading>
    data() {
      return {
        loadingText: 'loading'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scope>
  @keyframes ellipsis {
    from {
      width: 2px;
    }
    to {
      width: 15px;
    }
  }
  .js-loading
    font-size 14px
    &.ellipsis:after
      color $fail-color
      font-weight bolder
      overflow hidden
      display inline-block
      vertical-align text-top
      animation ellipsis 3s infinite
      content '\2026' /* ascii code for the ellipsis character */
</style>
