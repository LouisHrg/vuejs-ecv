<template>
  <div>
    <h1>{{ msg }}</h1>
    <div
      v-for="player in players"
      :key="player.lastname"
    >
      <Player
        :firstname="player.firstname"
        :lastname="player.lastname"
        :age="player.age"
      />
    </div>
  </div>
</template>

<script>
import Player from '@/components/Player.vue'

export default {
  name: 'HelloWorld',
  components: {
    Player
  },
  props: {
    msg: String
  },
  data () {
    return {
      players: [
        {
          firstname: 'Michael',
          lastname: 'Jordan',
          age: 55
        },
        {
          firstname: 'Kevin',
          lastname: 'Durand',
          age: 35
        }
      ]
    }
  }
}
</script>
