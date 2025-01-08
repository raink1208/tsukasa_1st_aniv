<script setup lang="ts">
import FadeInContainer from '@/components/FadeInContainer.vue'
import ProfileArea from '@/components/profile/ProfileArea.vue'
import HistoryArea from '@/components/history/HistoryArea.vue'
import CharmPointArea from '@/components/charm/CharmPointArea.vue'
import FirstViewArea from '@/components/firstView/FirstViewArea.vue'
import SummaryArea from '@/components/summary/SummaryArea.vue'
import LoadingTransition from '@/components/LoadingTransition.vue'
import { onBeforeMount, onMounted, ref } from 'vue'
import FooterArea from '@/components/footer/FooterArea.vue'
const loading = ref(true);
const hideLoading = () => {
  loading.value = false;
}
let observer: MutationObserver | null = null;
onMounted(() => {
  observer = new MutationObserver((mutationList) => {
    mutationList.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        const bodyClasses = document.body.classList;
        if (bodyClasses.contains('pace-done')) {
          hideLoading();
        }
      }
    })
  });
  observer.observe(document.body, {
    attributes: true,
    attributeFilter: ['class']
  })
});
onBeforeMount(() => {
  if (observer) {
    observer.disconnect();
  }
});
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
