<template>
  <div class="home">
    <v-header title="首页"></v-header>
    <div>首页</div>
  </div>
</template>
<script>
import header from './Header.vue'
export default {
  data () {
    return {}
  },
  created () {
    this.$fetch.get('api/news/latest')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  },
  components: {
    'v-header': header
  }
}
</script>
