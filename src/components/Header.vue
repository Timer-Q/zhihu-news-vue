<template>
  <div class="header">
    {{title}}
    <slot name="menu"></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '知乎日报'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .header {
    position: sticky;
    top: 0;
    font-size: 1.8rem;
    line-height: 2;
    color: #fff;
    background: #028fd6;
    text-align: center;
  }
</style>
