<script setup lang="ts">
import historyLogo from '@/assets/img/logo/history_logo.webp'

</script>

<template>
  <section id="history">
    <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
    <div class="inner-wrapper">
      <ul class="history-tabs">
        <li class="history-tab">
          <p>1月~3月</p>
        </li>
        <li class="history-tab">
          <p>4月~6月</p>
        </li>
        <li class="history-tab">
          <p>7月~9月</p>
        </li>
        <li class="history-tab active">
          <p>10月~12月</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
#history {
  padding-top: 30px;
  padding-bottom: 40px;
}
.inner-wrapper {
  max-width: 1380px;
  padding-left: 1.5em;
  padding-right: 1.5em;

  margin-left: auto;
  margin-right: auto;
}
.title-logo {
  max-height: 130px;
  max-width: 350px;
  min-width: 90vw;
  width: auto;
  display: block;
  margin: 0 auto 40px;
}

.history-tabs {
  display: flex;
  justify-content: center;
  gap: 50px;
}

.history-tabs .history-tab p {
  position: relative;
  max-width: 150px;
  min-width: 80px;
  display: block;
  border: 1px solid var(--theme-color);
  border-radius: 20px;
  text-align: center;
}
</style>
