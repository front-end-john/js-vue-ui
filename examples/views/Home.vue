<template>
  <div class="home">
    <div class="content">
      <js-loading v-if="visible">
        loading
      </js-loading>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// @ is an alias to /src
export default {
  name: 'home',
  data() {
    return {
      visible: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.visible = false
      }, 800)
    })
  }
}
</script>
