<script setup>

</script>

<template>
<div class="footer">
  <div class="above">
    <a href="mailto:ivanccy04@gmail.com" id="mail">Mail</a>
  </div>
  <div class="under">
    <a href="https://www.linkedin.com/in/ivanccy/">LinkedIn</a>
    <a href="https://github.com/ivnccy">GitHub</a>
  </div>
</div>
</template>

<style scoped>
.footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: white;
  height: 100vh;
}

.under{
  display: flex;
  gap: 20px;
  text-decoration: underline;
}

#mail{
  font-size: 80px;
  color: white;
}
</style>