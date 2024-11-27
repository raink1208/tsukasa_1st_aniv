<script setup lang="ts">
import type { HistoryInfo } from '@/models/HistoryInfo'
import historyInfo from '@/assets/data/historyItems.json'
import subscriberInfo from '@/assets/data/subscribers.json'
import historyLogo from '@/assets/img/logo/history_logo.webp'
import type { SubscriberInfo } from '@/models/SubscriberInfo'
import SubscriberCounter from './SubscriberCounter.vue'
import { onMounted, ref } from 'vue'
import HistoryListItem from './HistoryListItem.vue'
import type { HistoryItem } from '@/models/HistoryItem'

const convertToIso8601 = (dateStr: string): string => {
  const [year, month, day] = dateStr.split('/');
  const date = new Date(Date.UTC(Number(year), Number(month), Number(day)));
  date.setDate(date.getDate() + 1);
  const yearStr = date.getUTCFullYear().toString().padStart(4, '0');
  const monthStr = date.getUTCMonth().toString().padStart(2, '0');
  const dayStr = date.getUTCDate().toString().padStart(2, '0');
  return `${yearStr}-${monthStr}-${dayStr}T00:00:00Z`;
}

const getHistoryItemList = (): HistoryItem[] => {
  const histories: HistoryInfo[] = historyInfo;
  const subscriber: SubscriberInfo[] = subscriberInfo;
  const subscriberMap: Record<string, SubscriberInfo> = {};
  subscriber.forEach(subs => {
    subscriberMap[subs.date] = subs;
  });
  return histories.map(history => {
    const isoDate = convertToIso8601(history.date);
    const subscriberInfo = subscriberMap[isoDate];
    return {
      title: history.title,
      thumbnail: toImgFilePath(history.thumbnail),
      date: history.date,
      subscriber: subscriberInfo?.total
    };
  });
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
    <div class="inner-wrapper">
      <img class="title-logo fade-in" :src="historyLogo" alt="" data-anim-slide="bottomIn" />
      <div class="history-container" ref="container">
        <div class="history-corner">
          <div v-for="history in getHistoryItemList()" v-bind:key="history.title"
               :data-subsctiber="history.subscriber" class="historyItem">
            <HistoryListItem :history="history"/>
          </div>
        </div>
        <div class="counter-corner">
          <SubscriberCounter :count="count" class="counter"/>
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
.history-container {
  display: flex;
}
.history-corner {
  width: calc(100% - 100px);
}
.counter-corner {
  width: 100px;
}
.counter {
  position: sticky;
  top: 45%;
}
</style>
