<template>
  <div>
    <h1> Mon application </h1>
    <user-list />
  </div>
</template>

<script>
import UserList from '@/components/UserList'

export default {
  components: {
    'user-list': UserList,
  }
}
</script>
