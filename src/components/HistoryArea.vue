<script setup lang="ts">
import historyLogo from "@/assets/img/logo/history_logo.webp";

</script>

<template>
  <section id="history">
    <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
  </section>
</template>

<style scoped>
.title-logo {
  max-height: 130px;
  max-width: 350px;
  width: auto;
  display: block;
  margin: 0 auto;
}

</style>
