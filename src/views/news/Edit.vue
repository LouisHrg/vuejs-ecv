<template>
  <div>
    <label> Title </label>
    <input type="text" v-model="news.title" />
    <label> Content </label>
    <input type="text" v-model="news.content" />
    <button @click="save"> Create </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  methods: {
    ...mapActions({
      fetchNews: 'news/fetchNews',
      editNews: 'news/editNews'
    }),
    save () {
      this.editNews(this.news)
      this.$router.push({ name: 'news.index' })
    }
  },
  mounted () {
    this.fetchNews(this.$route.params.id)
  }
}
</script>
