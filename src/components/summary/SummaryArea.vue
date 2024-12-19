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

onMounted(() => {
  let streamTime = 0;
  let lateTime = 0;
  let lateCount = 0;
  streamData.forEach((it: StreamInfo) => {
    if (it.lateTime > 180) {
      lateTime += it.lateTime;
      lateCount++;
    }
    streamTime += it.streamTime;
  });
  totalStreamTime.value = streamTime;
  totalLateTime.value = lateTime;
  totalLateCount.value = lateCount;
});
</script>

<template>
  <div class="inner-wrapper">
    <SummaryList title="年間配信時間合計" :totalTime="totalStreamTime" :data="streamTimeData" class="fade-in" data-anim-slide="bottomIn" select="streamTime">
      <template #description>
        <small>

        </small>
      </template>
    </SummaryList>
    <SummaryList title="年間遅刻時間合計" :totalTime="totalLateTime" :data="lateTimeData" class="fade-in" data-anim-slide="bottomIn" select="lateTime">
      <template #description>
        <small>

        </small>
      </template>
    </SummaryList>
  </div>
</template>

<style scoped>
.inner-wrapper {
  max-width: 1280px;
  padding-left: 4em;
  padding-right: 4em;

  margin-left: auto;
  margin-right: auto;
}
</style>
