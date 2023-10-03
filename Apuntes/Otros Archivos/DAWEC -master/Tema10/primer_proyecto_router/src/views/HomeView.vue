<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p>{{ id, nombre }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  props:["id","nombre"],
  components: {
    HelloWorld
  }
}
</script>
