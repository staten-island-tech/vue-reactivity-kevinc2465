<template>
  <div class="home">
    <Card />
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
</script>
