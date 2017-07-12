<template>
  <div class="news-detail-content">
    <link rel="stylesheet" :href="newsDetailData.css[0]">
    <div v-html="newsDetailData.body">新闻详情</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      newsDetailData: {
        body: '',
        css: []
      }
    }
  },
  created () {
    this.$fetch.get('api/news/' + this.$route.params.id)
      .then(res => {
        console.log(res)
        console.log(this.$store.getters.getId)
        Object.assign(this.newsDetailData, res.data)
        this.$nextTick(() => {
          var imgPlaceHolder = document.querySelector('.img-place-holder')
          imgPlaceHolder.style.backgroundImage = `url(${this.newsDetailData.image})`
          imgPlaceHolder.style.backgroundRepeat = 'no-repeat'
          imgPlaceHolder.style.backgroundPosition = 'center'
          imgPlaceHolder.style.backgroundSize = 'cover'
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
  .headline .img-place-holder {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
