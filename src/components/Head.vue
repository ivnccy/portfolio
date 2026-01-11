<script setup>

</script>

<template>
  <div class="container">
    <section>
      <h1>Ivan Chan</h1>
      <p>Amsterdam, Netherlands</p>
    </section>
    <section>
      <p>Currently</p>
      <p>Software Engineering student at Hogeschool van Amsterdam and a web developer and part of the e-commerce deparment at Chun Amsterdam.</p>
    </section>
    <section>
      <p>What I work with</p>
      <p>
        Front-end: Vue js, React, TailwindCSS, GSAP
        <br />
        Back-end: Spring, Hibernate, MySQL
        <br />
        Languages: Java, TypeScript, JavaScript, HTML, CSS
      </p>
    </section>
    <section>
      <p>More about me</p>
      <p>I love to learn, especially when it's something I am passionate about. In my free time I am currently training for an Ironman, and building an app to optimize caffeine.</p>
    </section>
    <section>
      <p>Contact</p>
      <p id="links">
        Say hi to me through
        <a href="mailto:ivanccy04@gmail.com">Email,</a>
        <a href="https://www.linkedin.com/in/ivanccy/">LinkedIn</a>
        or have a look at my
        <a href="https://github.com/ivnccy">Github</a>
        .
      </p>
    </section>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20%;
  padding-right: 25%
}

section{
  display: flex;
  flex-direction: column;
  gap: 4px;
}

#links{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 4px;
}

a{
  text-decoration: underline;
}
</style>