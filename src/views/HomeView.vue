<script setup lang="ts">
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/profile/ProfileArea.vue'
import HistoryArea from '@/components/history/HistoryArea.vue'
import CharmPointArea from '@/components/charm/CharmPointArea.vue'
import FirstViewArea from '@/components/firstView/FirstViewArea.vue'
import SummaryArea from '@/components/summary/SummaryArea.vue'
import LoadingTransition from '@/components/LoadingTransition.vue'
import { ref } from 'vue'
import FooterArea from '@/components/footer/FooterArea.vue'
const loading = ref(true);
const hideLoading = () => {
  loading.value = false;
}
Pace.on('done', hideLoading);
</script>

<template>
  <Transition>
    <LoadingTransition v-if="loading" />
  </Transition>
  <div v-show="!loading">
    <FadeInContainer>
      <FirstViewArea :loading="loading" />
      <ProfileArea />
      <CharmPointArea />
      <HistoryArea />
      <SummaryArea />
    </FadeInContainer>
    <FooterArea />
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
