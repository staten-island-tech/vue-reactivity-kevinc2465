<template>
  <div class="items" v-if="page === 'about'">
    <WelcomeItem />
  </div>
</template>

<script setup>
import WelcomeItem from '../components/WelcomeItem.vue'
const page = 'about'
</script>
<style></style>
