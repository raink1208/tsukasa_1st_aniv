<script setup lang="ts">
import RankingListView from '@/components/RankingListView.vue'
import streamTime from  '@/assets/data/streamTime.json'
import lateTime from '@/assets/data/lateTime.json'
import { computed } from 'vue'
import type { StreamInfo } from '@/models/StreamInfo'
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/ProfileArea.vue'
import HistoryArea from '@/components/HistoryArea.vue'

const totalStreamTime = computed(() => {
  let totalTime = 0;
  streamTime.map((it: StreamInfo) => {
    totalTime += it.streamTime
  });
  return totalTime;
});
const totalLateTime = computed(() => {
  let totalLateTime = 0;
  lateTime.forEach((it: StreamInfo) => {
    if (it.lateTime > 0) totalLateTime += it.lateTime
  });
  return totalLateTime;
})
</script>

<template>
  <FadeInContainer>
    <ProfileArea />
    <HistoryArea />
    <div class="inner-wrapper">
      <RankingListView title="年間配信時間合計" :time="totalStreamTime" :data="streamTime" class="fade-in" data-anim-slide="bottomIn" :countUp="4357" select="streamTime" />
      <RankingListView title="年間遅刻時間合計" :time="totalLateTime" :data="lateTime" class="fade-in" data-anim-slide="bottomIn" :countUp="235" select="lateTime" />
    </div>
  </FadeInContainer>
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
