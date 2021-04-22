<template>
  <div>
    <h1> Inscription </h1>
    <label>Email</label>
    <input v-model="email"/>
    <label>Password</label>
    <input type="password" v-model="password"/>
    <label>Prénom</label>
    <input v-model="firstname"/>
    <label>Nom</label>
    <input v-model="lastname"/>
    <button @click="submitForm">S'inscrire</button>
  </div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode"
export default {
  data () {
    return {
      email: null,
      password: null,
      firstname: null,
      lastname: null,
    }
  },
  methods: {
    async submitForm () {
      const res = await axios.post('http://localhost:3000/register', {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        lastname: this.lastname,
      })

      const { accessToken } = res.data

      const { sub } = jwt_decode(accessToken)

      localStorage.setItem('vuejs_token', accessToken)
      localStorage.setItem('vuejs_user_id', sub)
    }
  }
}
</script>
