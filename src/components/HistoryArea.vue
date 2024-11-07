<script setup lang="ts">
import type {HistoryInfo} from '@/models/HistoryInfo'
import historyItem from "@/assets/data/historyItems.json";
import subscribers from "@/assets/data/subscribers.json";
import historyLogo from "@/assets/img/logo/history_logo.webp";
import type { SubscriberInfo } from '@/models/SubscriberInfo';

const getHistoryItem = (): HistoryInfo[] => {
  return historyItem;
}

const getSubscriberInfo = (): SubscriberInfo[] => {
  return subscribers;
}

const toImgFilePath = (name: string) => {
  return "/src/assets/img/history/" + name;
}

</script>

<template>
  <section id="history">
    <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
  </section>
  <div class="history-container">

  </div>
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
