<template>
  <p class="quote">
    {{ text }}
    <a href="https://www.siths.org/apps/email/index.jsp?uREC_ID=1284494"> Michael Whalen</a>
  </p>
  <h2>
    Total Amount:
    <img
      src="https://media.istockphoto.com/id/1012682886/vector/infinity-symbol-black-simple-with-discontinuation-isolated-vector.jpg?s=612x612&w=0&k=20&c=CFVfjIg4yAHCPFpBq_wWjkZtc7GekfGO6nfqjI9CQM4="
      alt="infinite picture"
    />
  </h2>
</template>

<script setup>
const text = 'If you really want to get smarter, contact and bribe the following person: '
</script>

<style scoped>
.quote {
  font-size: 5rem;
  text-align: center;
}
h2 {
  text-align: center;
  font-size: 4rem;
}
img {
  width: 20%;
  text-align: center;
  margin-top: 2%;
}
</style>
