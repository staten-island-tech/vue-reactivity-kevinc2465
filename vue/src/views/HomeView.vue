<!-- <template>
  <div class="home">
    <Card v-for="item in items" :key="item.name" :title="item.name" />
  </div>
</template>

<script>
import itemCard from '../components/itemCard.vue'

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
          name: 'Sneku Ishigami',
          img: '',
          IQ: '',
          Origin: 'Dr. Stone'
        }
      ]
    }
  }
}
</script> -->
<script setup>
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
</template>
