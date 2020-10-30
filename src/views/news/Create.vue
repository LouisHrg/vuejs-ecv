<template>
  <div>
    <label> Title </label>
    <input type="text" v-model="title" />
    <label> Content </label>
    <input type="text" v-model="content" />
    <button @click="create"> Create </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: '',
      content: '',
      error: null
    }
  },
  methods: {
    ...mapActions({
      createNews: 'news/createNews'
    }),
    create () {
      const payload = { title: this.title, content: this.content }
      this.createNews(payload)
      this.$router.push({ name: 'news.index' })
    }
  },
}
</script>
