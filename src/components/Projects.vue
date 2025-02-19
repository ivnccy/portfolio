<script setup>
import chun from '@/assets/images/chun.png';
import eurowijzer from '@/assets/images/eurowijzer.png'

const projects = [
  {
    id: 1,
    title: 'Chun Amsterdam',
    link: 'https://chunmatcha.com/',
    description: 'Worked with Chun Amsterdam to develop a webshop using Shopify. Integrated Sendcloud with Shopify for smooth warehouse operations.',
    image: chun
  },
  {
    id: 2,
    title: 'EuroWijzer',
    link: 'https://github.com/ivnccy/EuroWijzer',
    description: 'University team project which aimed to create a website which displays the results of the elections in an understandable manner. ' +
        'Project stack: MySQL, Hibernate, Spring Boot and a custom XML parser for the backend, and Vue for the frontend. It is written in Java and TypeScript.',
    image: eurowijzer
  }
];
</script>

<template>
  <div class="container">
    <h1>Projects I've worked on</h1>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <a :href="project.link" target="_blank">
          <img :src="project.image" :alt="project.title">
        </a>
        <div class="title">{{ project.title }}</div>
        <div class="description">{{ project.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  padding-top: 78px;
}

.project{
  padding-top: 16px;
}
</style>