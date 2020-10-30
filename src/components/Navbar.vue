<template>
  <div>
    <router-link
      :to="{name: 'login'}"
    >
      Login
    </router-link>
    <router-link
      :to="{name: 'register'}"
    >
      Register
    </router-link>
    <button @click="logout"> Logout </button>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

