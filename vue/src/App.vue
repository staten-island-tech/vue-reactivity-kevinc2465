<template>
  <header>
    <div class="wrapper">
      <h1 class="green">{{ title }}</h1>
      <h3>{{ quote }}</h3>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Cart</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

const title = 'Braincell Market'
const quote = 'Wish to get smarter? We got your back!'
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  margin-bottom: 2rem;
  font-size: 2rem;
  padding: 1rem;
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
header .wrapper {
  width: 100%;
  text-align: center;
}
header .green {
  font-size: 3.5rem;
}
h3 {
  font-size: 2rem;
  color: #b5bec6;
}
</style>
