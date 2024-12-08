<script setup lang="ts">
import historyLogo from '@/assets/img/logo/history_logo.webp'

</script>

<template>
  <section id="history">
    <div class="inner-wrapper">
      <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
      <div class="history-tab">
        <div>
          <p>1月~3月</p>
        </div>
        <div>
          <p>4月~6月</p>
        </div>
        <div>
          <p>7月~9月</p>
        </div>
        <div>
          <p>10月~12月</p>
        </div>
      </div>
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
  width: auto;
  display: block;
  margin: 0 auto 40px;
}

.history-tab {
  padding-top: 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
}

.history-tab div {
  width: 130px;
  padding: 8px 0;
  border: 1px solid var(--theme-color);
  border-radius: 20px;
  text-align: center;
}
</style>
