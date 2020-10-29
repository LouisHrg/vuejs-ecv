<template>
  <div>
    <img :src="data.avatar" />
    <p>{{ data.birthdate }}</p>
    <p>{{ fullname }}</p>
  </div>
</template>

<script>
export default {
  name: 'id-card',
  props: {
    data: Object
  },
  computed: {
    fullname () {
      return `${this.data.firstname} ${this.data.lastname}`
    }
  }
}
</script>
