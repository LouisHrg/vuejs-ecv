<template>
  <div>
    <h2> {{ news.title }} </h2>
    <p> {{ news.content }} </p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchNews: 'news/fetchNews'
    })
  },
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  mounted () {
    this.fetchNews(this.$route.params.id)
  }
}
</script>
