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
    <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
    <div class="tabs-wrapper">
      <ul class="history-tabs">
        <li class="history-tab" :class="{ select: selectTab == 0 }">
          <a @click="selectTab = 0" href="#history">1月~3月</a>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 1 }">
          <a @click="selectTab = 1" href="#history">4月~6月</a>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 2 }">
          <a @click="selectTab = 2" href="#history">7月~9月</a>
        </li>
        <li class="history-tab" :class="{ select: selectTab == 3 }">
          <a @click="selectTab = 3" href="#history">10月~12月</a>
        </li>
      </ul>
    </div>
    <div class="inner-wrapper">
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
  padding-left: 2.5em;
  padding-right: 2.5em;
  margin-left: auto;
  margin-right: auto;
}
.title-logo {
  width: 400px;
  margin: 0 auto;
}
.tabs-wrapper {
  position: sticky;
  top: 0;
  z-index: 10;
  overflow: auto;
  padding-bottom: 70px;
  scrollbar-width: none
}
.history-tabs {
  display: flex;
  padding-top: 70px;
  justify-content: center;
  min-width: 500px;
  gap: 1em;
}
.history-tabs::-webkit-scrollbar {
  display: none;
}
.history-tabs .history-tab a {
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
.history-tabs .history-tab.select a {
  color: #fff;
  background-color: var(--theme-color);
}
.history-tabs .history-tab a::before {
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
.history-tabs .history-tab.select a::before {
  opacity: 1;
}
.history-tabs .history-tab a:hover {
  background-color: var(--theme-color);
}
@media screen and (max-width: 768px) {
  .inner-wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .history-tabs {
    padding-top: 40px;
  }
  .history-tabs .history-tab a {
    width: 100px;
  }
  .history-tabs .history-tab a::before {
    width: 55px;
    height: 55px;
  }
}
</style>
