<script setup>
import Head from './components/Head.vue'
import Projects from "@/components/Projectss.vue";
</script>

<template>
  <div class="main">
    <Head />
    <Projects />
  </div>
</template>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  padding: 2%;
  margin-left: 25%;
  margin-right: 25%;
}

@media only screen and (max-width: 600px) {
  .main{
    margin: 4%;
  }
}
</style>