<template>
  <div>
    <button @click="sortCard"> Sort card </button>
    <IdCard
      v-for="item in items"
      :key="item.age"
      :data="item"
    />
  </div>
</template>

<script>
import IdCard from '@/components/IdCard.vue'

export default {
  components: {
    IdCard,
  },
  data () {
    return {
      items: [
        {
          firstname: "Michael",
          lastname: 'Jordan',
          age: 56,
          avatar: 'https://via.placeholder.com/150',
        },
        {
          firstname: "Kevin",
          lastname: 'Durand',
          age: 35,
          avatar: 'https://via.placeholder.com/150',
        },
        {
          firstname: "Scottie",
          lastname: 'Pippen',
          age: 52,
          avatar: 'https://via.placeholder.com/150',
        }
      ],
      sorted: false,
    }
  },
  methods: {
    sortCard () {
      if (!this.sorted) {
        this.items = this.items.sort((a, b) => {
          return a.age > b.age
        })
        this.sorted = true
      } else {
        this.items = this.items.reverse()
        this.sorted = false
      }
    }
  }
}
</script>
