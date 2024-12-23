<script setup lang="ts">
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/profile/ProfileArea.vue'
import HistoryArea from '@/components/history/HistoryArea.vue'
import CharmPointArea from '@/components/charm/CharmPointArea.vue'
import FirstViewArea from '@/components/firstView/FirstViewArea.vue'
import SummaryArea from '@/components/summary/SummaryArea.vue'
import LoadingTransition from '@/components/LoadingTransition.vue'
import { ref } from 'vue'
const loading = ref(true);
const hideLoading = () => {
  loading.value = false;
}
</script>

<template>
  <Transition>
    <LoadingTransition v-if="loading" />
  </Transition>
  <div v-show="!loading">
    <FadeInContainer>
      <FirstViewArea @hideLoading="hideLoading" :loading="loading" />
      <ProfileArea />
      <CharmPointArea />
      <HistoryArea />
      <SummaryArea />
    </FadeInContainer>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
