<template>
  <div class="js-loading ellipsis">
    <div class="loading-ring" :style="ringStyle">
      <div class="outer" />
      <div class="middle" />
      <div class="inner" />
    </div>
    <div class="text" :style="textStyle" v-if="text">
      {{ text }}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'jsLoading', // 这个名字很重要，它就是未来的标签名<js-loading></js-loading>
    props: {
      text: {
        type: String,
        default: "加载中"
      },
      textStyle: {
        type: Object,
        default: function() {
          return {
            fontSize: "14px",
            color: "#fff"
          };
        }
      },
      ringStyle: {
        type: Object,
        default: function() {
          return {
            width: "100px",
            height: "100px",
            color: "#407af3"
          };
        }
      }
    },
    methods: {
      preventDefault(e) {
        // 禁止body的滚动
        console.log(e);
        e.preventDefault();
        e.stopPropagation();
      }
    },
    mounted() {
      document
        .querySelector("body")
        .addEventListener("touchmove", this.preventDefault);
    },
    destroyed() {
      document
        .querySelector("body")
        .removeEventListener("touchmove", this.preventDefault);
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
    & > .text:after
      color $fail-color
      font-weight bolder
      overflow hidden
      display inline-block
      vertical-align text-top
      animation ellipsis 3s infinite
      content '\2026' /* ascii code for the ellipsis character */
  .js-loading {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .loading-ring {
      position: relative;
      width: 200px;
      height: 200px;
      .outer,
      .inner,
      .middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: currentColor;
        &::after {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 100%;
          border-left: 10px solid currentColor;
          border-right: 10px solid currentColor;
          border-top: 10px solid currentColor;
          border-bottom: 10px solid transparent;
        }
      }

      .outer {
        width: 100%;
        height: 100%;
        &::after {
          animation: anticlockwise 1.5s infinite linear;
        }
      }
      .inner {
        width: calc(100% * 0.6);
        height: calc(100% * 0.6);
        &::after {
          animation: anticlockwise 1.5s infinite linear;
        }
      }
      .middle {
        width: calc(100% * 0.8);
        height: calc(100% * 0.8);
        &::after {
          animation: clockwise 1.5s infinite linear;
        }
      }
    }

    .text {
      color: #fff;
      font-size: 14px;
      padding: 30px;
      width: 250px;
      text-align: center;
    }
  }

  @keyframes clockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes anticlockwise {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
</style>
