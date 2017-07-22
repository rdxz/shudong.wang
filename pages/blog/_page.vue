<template>
  <section class="container">
    <div>
      	这个是blog页面
      	<article-list :article="article"></article-list>
    </div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
  import ArticleList from '~components/article/list'

  import Service from '~plugins/axios'
export default {
  components: {
    Logo,
    ArticleList
  },
  fetch ({ store, params }) {
      return Promise.all([
        store.dispatch('loadArticles',params),
        // store.dispatch('loadAnnouncements')
      ])
    },
    //     fetch ({ store, params }) {
    //   return store.dispatch('loadArticleDetail', params)
    // },
   computed: {
      article() {
        return this.$store.state.list.data
      }
    },
    methods: {
      loadmoreArticle() {
        this.$store.dispatch('loadArticles')
      }
    }
}
</script>

<style>

</style>
