<script setup lang="ts">
import streamData from  '@/assets/data/streamData.json';
import type { StreamInfo } from '@/models/StreamInfo';
import { onMounted, ref } from 'vue';
import SummaryList from './SummaryList.vue';
const streamTimeData = [...streamData].sort((a: StreamInfo, b: StreamInfo) => b.streamTime - a.streamTime);
const totalStreamTime = ref(0);
const lateTimeData = [...streamData].sort((a: StreamInfo, b: StreamInfo) => b.lateTime - a.lateTime);
const totalLateTime = ref(0);
const totalLateCount = ref(0);
const totalStreamCount = ref(0);
onMounted(() => {
  let streamTime = 0;
  let lateTime = 0;
  let streamCount = 0;
  let lateCount = 0;
  streamData.forEach((it: StreamInfo) => {
    if (it.lateTime > 180) {
      lateTime += it.lateTime;
      lateCount++;
    }
    streamTime += it.streamTime;
  });
  streamData.forEach((it: StreamInfo) => {
    if (it.streamTime > 0) streamCount++;
  });
  totalStreamTime.value = streamTime;
  totalLateTime.value = lateTime;
  totalStreamCount.value = streamCount;
  totalLateCount.value = lateCount;
});
</script>

<template>
  <section>
    <div class="inner-wrapper">
      <SummaryList title="配信時間合計" :totalTime="totalStreamTime" :data="streamTimeData" class="fade-in" data-anim-slide="bottomIn" select="streamTime">
        <template #description>
          <small>
            メン限を除く配信時間の合計 (配信数: {{totalStreamCount}})
          </small>
        </template>
      </SummaryList>
      <SummaryList title="遅刻時間合計" :totalTime="totalLateTime" :data="lateTimeData" class="fade-in" data-anim-slide="bottomIn" select="lateTime">
        <template #description>
          <small>
            3分以上遅刻した合計の記録 (遅刻数: {{totalLateCount}})
          </small>
        </template>
      </SummaryList>
    </div>
  </section>
</template>

<style scoped>
.inner-wrapper {
  padding-top: 100px;
  max-width: 1280px;
  padding-left: 4em;
  padding-right: 4em;
  margin-left: auto;
  margin-right: auto;
}
small {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .inner-wrapper {
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>
