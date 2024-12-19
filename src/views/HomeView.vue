<script setup lang="ts">
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/profile/ProfileArea.vue'
import HistoryArea from '@/components/history/HistoryArea.vue'
import LoadingTransition from '@/components/LoadingTransition.vue'
import CharmPointArea from '@/components/charm/CharmPointArea.vue'
import FirstViewArea from '@/components/firstView/FirstViewArea.vue'
import SummaryArea from '@/components/summary/SummaryArea.vue'
</script>

<template>
  <transition name="fade">
    <LoadingTransition v-if="loading"/>
  </transition>
  <div v-if="!loading">
    <FadeInContainer>
      <FirstViewArea />
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
