<template>
  <div class="items" v-if="page === 'products'">
    <HelloWorld />
  </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue'

const page = 'products'
</script>

<style scoped>
.text {
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 2rem;
}
</style>
