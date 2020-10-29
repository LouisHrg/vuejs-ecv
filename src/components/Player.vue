<template>
  <div>
    <h2>{{ firstname+' '+lastname }}</h2>
    <p>{{ age }} yo</p>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    firstname: String,
    lastname: String,
    age: Number
  }
}
</script>
