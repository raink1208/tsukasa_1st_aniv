<script setup lang="ts">
import RankingListView from '@/components/ranking/RankingListView.vue'
import streamTime from  '@/assets/data/streamTime.json'
import lateTime from '@/assets/data/lateTime.json'
import { computed, onMounted, ref } from 'vue'
import type { StreamInfo } from '@/models/StreamInfo'
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/profile/ProfileArea.vue'
import HistoryArea from '@/components/history/HistoryArea.vue'
import LoadingTransition from '@/components/LoadingTransition.vue'

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

const loading = ref(true);
onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});

</script>

<template>
  <transition name="fade">
    <LoadingTransition v-if="loading"/>
  </transition>
  <div v-if="!loading">
    <FadeInContainer>
      <ProfileArea />
      <HistoryArea />
      <div class="inner-wrapper">
        <RankingListView title="年間配信時間合計" :totalTime="totalStreamTime" :data="streamTime" class="fade-in" data-anim-slide="bottomIn" select="streamTime" />
        <RankingListView title="年間遅刻時間合計" :totalTime="totalLateTime" :data="lateTime" class="fade-in" data-anim-slide="bottomIn" select="lateTime" />
      </div>
    </FadeInContainer>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
