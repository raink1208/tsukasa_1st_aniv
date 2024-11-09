<script setup lang="ts">
import type {HistoryInfo} from '@/models/HistoryInfo'
import historyInfo from "@/assets/data/historyItems.json";
import subscriberInfo from "@/assets/data/subscribers.json";
import historyLogo from "@/assets/img/logo/history_logo.webp";
import type { SubscriberInfo } from '@/models/SubscriberInfo';
import SubscriberCounter from './SubscriberCounter.vue';
import { onMounted, ref } from 'vue';
import HistoryListItem from './HistoryListItem.vue';
import type { HistoryItem } from '@/models/HistoryItem';
function convertToIso8601(dateStr: string): string {
  const [year, month, day] = dateStr.split('/');
  return `${year}-${month}-${day}T00:00:00Z`;
}
const getHistoryItemList = (): HistoryItem[] => {
  const histories: HistoryInfo[] = historyInfo;
  const subscriber: SubscriberInfo[] = subscriberInfo;
  const subscriberMap: Record<string, SubscriberInfo> = {};
  subscriber.forEach(subs => {
    subscriberMap[subs.date] = subs;
  });
  const historyItems: HistoryItem[] = histories.map(history => {
    const isoDate = convertToIso8601(history.date);
    const subscriberInfo = subscriberMap[isoDate];
    return {
      title: history.title,
      thumbnail: toImgFilePath(history.thumbnail),
      date: history.date,
      subscriber: subscriberInfo?.total
    };
  });
  return historyItems;
}
const toImgFilePath = (name: string) => {
  return "/src/assets/img/history/" + name;
}
const container = ref<Element>();
const count = ref<number>(0);
const callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target: HTMLElement = entry.target as HTMLElement;
      count.value = Number.parseInt(target.dataset.subsctiber!);
    }
  });
}
onMounted(() => {
  if (!container.value) return;
  const items = container.value.getElementsByClassName("historyItem");
  const options = {
    rootMargin: "-50% 0%"
  };
  const observer = new IntersectionObserver(callback, options);
  for (let i = 0; i < items.length; i++) {
    observer.observe(items[i]);
  }
})
</script>

<template>
  <section id="history">
    <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
  </section>
  <div class="history-container" ref="container">
    <SubscriberCounter :count="count" class="counter"/>
    <div v-for="history in getHistoryItemList()" v-bind:key="history.title" class="historyItem" :data-subsctiber="history.subscriber">
      <HistoryListItem :history="history"/>
    </div>
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
.history-container {
  position: relative;
}

.counter {
  top: 30%;
  padding-left: 500px;
  position: sticky;
}

.historyItem {
  margin-top: 30px;
  margin-bottom: 70px;
}
</style>
