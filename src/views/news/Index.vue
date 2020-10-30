<template>
  <div>
    <ul>
      <li
      v-for="item in news"
      :key="item.id"
      >
    <router-link
      :to="{name: 'news.show', params: {id: item.id}}"
    >
    {{ item.title }}
    </router-link>
    </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions({
      fetchManyNews: 'news/fetchManyNews'
    })
  },
  computed: {
    ...mapState({
      news: state => state.news.manyNews
    })
  },
  mounted () {
    this.fetchManyNews()
  }
}
</script>
