<template>
  <div>
    <IdCard
      v-for="item in items"
      :key="item.birthdate"
      :data="item"
    />
  </div>
</template>

<script>
import IdCard from '@/components/IdCard.vue'

export default {
  name: 'HelloWorld',
  components: {
    IdCard,
  },
  data () {
    return {
      items: [
        {
          firstname: "Michael",
          lastname: 'Jordan',
          birthdate: '20/11/1970',
          avatar: 'https://commons.wikimedia.org/wiki/File:Placeholder_no_text.svg',
        },
        {
          firstname: "Kevin",
          lastname: 'Durand',
          birthdate: '11/03/1985',
          avatar: 'https://commons.wikimedia.org/wiki/File:Placeholder_no_text.svg',
        }
      ]
    }
  }
}
</script>

