<template>
  <div class="home">
    <v-header title="首页">
      <span slot="menu" @click="showMenu">menu</span>
    </v-header>
    <section class="content">
      <ul class="content-list">
        <li v-for="(item, index) in stories" :key="item.id" @click="showNewsDetail(item.id)" class="content-item">
           <img :src="item.images[0] | attachImgUrl" :alt="item.id" :key="item.id" class="content-item-img"> 
          <span class="content-item-context">{{item.title}}</span>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
import header from './Header.vue'
export default {
  data () {
    return {
      stories: []
    }
  },
  created () {
    this.$fetch.get('api/news/latest')
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.stories = res.data.stories
        }
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {
    showNewsDetail (id) {
      this.$store.dispatch('setId', id)
      this.$router.push({
        name: 'NewsDetail',
        params: {
          id
        }
      })
    },
    showMenu () {
      console.log('you just click me')
    }
  },
  components: {
    'v-header': header
  }
}
</script>
<style rel="stylesheet/scss" scoped>
  .content {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .content-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .content-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    transition: background .3s;
  }
  .content-item:active {
    background: #ddd;
  }
  .content-item-img {
    width: 7rem;
  }
  .content-item-context {
    font-size: 1.5rem;
    width: 75%;
    user-select: none;
  }
</style>
