<template>
  <div v-html="innerContent">新闻详情</div>
</template>
<script>
export default {
  data () {
    return {
      innerContent: ''
    }
  },
  created () {
    this.$fetch.get('api/news/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        console.log(this.$store.getters.getId)
        this.innerContent = res.data.body
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
