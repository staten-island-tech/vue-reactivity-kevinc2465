<template>
  <div class="home">
    <Card :v-for="item in items" :key="item.name" :title="item.name" />
  </div>
</template>

<script>
import itemCard from '../components/TodoItem.vue'

export default {
  name: 'Home',
  components: {
    itemCard
  },
  data() {
    return {
      selected: '',
      items: [
        {
          name: 'Shisui Uchiha',
          img: 'https://preview.redd.it/1ug45q9rdnc51.jpg?auto=webp&s=7a9c5db8593502ed6d25253a12057cd1807bfb2e',
          IQ: '100',
          Origin: 'Naruto'
        },
        {}
      ]
    }
  }
}
</script>
<!-- <script setup>
import { ref } from 'vue'
import TodoItem from '../components/TodoItem.vue'

const groceryList = ref([
  { id: 0, text: 'Vegetables' },
  { id: 1, text: 'Cheese' },
  { id: 2, text: 'Whatever else humans are supposed to eat' }
])
</script>

<template>
  <ol>
    <TodoItem v-for="item in groceryList" :todo="item" :key="item.id"></TodoItem>
  </ol>
</template> -->
