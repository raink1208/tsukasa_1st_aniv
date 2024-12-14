<script setup lang="ts">
import historyData from '@/assets/data/historyItems.json'
import historyLogo from '@/assets/img/logo/history_logo.webp'
import { ref } from 'vue'
import type { HistoryItem } from '@/models/HistoryItem'
import HistoryList from '@/components/history/HistoryList.vue'
const selectTab = ref<number>(0)
const getHistories = (select: number): HistoryItem[] => {
  return historyData[select]
}
</script>

<template>
  <section id="history">
    <img
      class="title-logo fade-in"
      :src="historyLogo"
      alt=""
      data-anim-slide="bottomIn"
    />
    <div class="inner-wrapper">
      <ul class="history-tabs">
        <li class="history-tab" :class="{ select: selectTab == 0 }">
          <p @click="selectTab = 0">1月~3月</p>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 1 }">
          <p @click="selectTab = 1">4月~6月</p>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 2 }">
          <p @click="selectTab = 2">7月~9月</p>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 3 }">
          <p @click="selectTab = 3">10月~12月</p>
        </li>
      </ul>
      <HistoryList :histories="getHistories(selectTab)" />
    </div>
  </section>
</template>

<style scoped>
#history {
  padding-top: 30px;
}
.inner-wrapper {
  max-width: 1380px;
  padding-left: 1.5em;
  padding-right: 1.5em;
  margin-left: auto;
  margin-right: auto;
}
.title-logo {
  width: 400px;
  margin: 0 auto;
}
.history-tabs {
  display: flex;
  justify-content: center;
  gap: 50px;
  padding-top: 70px;
}
.history-tabs .history-tab p {
  position: relative;
  width: 150px;
  padding: 8px 0;
  display: block;
  border: 2px solid var(--theme-color);
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background: #fff;
}
.history-tabs .history-tab.select p {
  color: #fff;
  background-color: var(--theme-color);
}

.history-tabs .history-tab p::before {
  z-index: -1;
  display: block;
  position: absolute;
  margin: auto;
  right: 0;
  bottom: 60%;
  left: 0;
  width: 70px;
  height: 70px;
  content: '';
  background-image: url(@/assets/img/stand/tsukasaSD.webp);
  background-position: center top;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity 1s;
}

.history-tabs .history-tab.select p::before {
  opacity: 1;
}
</style>
