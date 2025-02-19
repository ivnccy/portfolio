<script setup>
const projects = [
  {id: 1, title: 'Chun Amsterdam', link:"https://chunmatcha.com/", description: 'Worked with Chun Amsterdam to develop a webshop using Shopify.'},
]
</script>

<template>
  <div class="container">
    <h1>Projects I've worked on</h1>
    <div class="project">
      <a href="https://chunmatcha.com/">
        <img src="../assets/images/chun.png">
      </a>
      <div class="title">Chun Amsterdam</div>
      <div class="description">Worked with Chun Amsterdam to develop a webshop using Shopify.</div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding-top: 78px;
}
</style>