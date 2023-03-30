<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">Cart</RouterLink>
  </nav>
  <!-- <ol>
    <TodoItem v-for="item in groceryList" :todo="item" :key="item.id"></TodoItem>
  </ol> -->
</template>

<script setup>
// import { ref } from 'vue'
// import TodoItem from './components/TodoItem.vue'

// const groceryList = ref([
//   { id: 0, text: 'Vegetables' },
//   { id: 1, text: 'Cheese' },
//   { id: 2, text: 'Whatever else humans are supposed to eat' }
// ])
</script>

<style scoped>
nav {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
