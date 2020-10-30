<template>
  <div>
    <h2> {{ news.title }} </h2>
    <p> {{ news.content }} </p>
    <button @click="edit">Edit news</button>
    <button @click="deleteItem">Delete</button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchNews: 'news/fetchNews',
      deleteNews: 'news/deleteNews'
    }),
    edit () {
      this.$router.push({ name: 'news.edit', params: { id: this.news.id } })
    },
    deleteItem () {
      this.deleteNews(this.$route.params.id)
      this.$router.push({ name: 'news.index' })
    }
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
