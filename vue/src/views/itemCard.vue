<template>
  <div>
    <h2>{{ title }}</h2>
    <img :src="image" alt="" />
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: String,
    description: String,
    image: String
  }
}
</script>

<style scoped></style>
