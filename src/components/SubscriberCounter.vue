<script setup lang="ts">
import { ref, watch } from 'vue';
const props = defineProps<{
  count: number
}>();
const displayCount = ref<number>(0);
const targetCount = ref<number>(0);
let animationFrameId: number | null = null;
const countStart = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId);
  }
  const start = Number.parseInt(displayCount.value.toString());
  const end = Number.parseInt(targetCount.value.toString());
  const duration = 1000;
  const startTime = performance.now();
  const animate = (time: number) => {
    const elapsedTime = time - startTime;
    if (elapsedTime < duration) {
      const value = start + (end - start) * (elapsedTime / duration);
      displayCount.value = Math.round(value);
      animationFrameId = requestAnimationFrame(animate);
    } else {
      displayCount.value = end;
    }
  };
  animationFrameId = requestAnimationFrame(animate);
}
watch(props, () => {
  targetCount.value = props.count;
  countStart();
}, {immediate: true});
</script>

<template>
  <div>
    <p>チャンネル登録者数</p>
    <h2>{{ displayCount }}</h2>
  </div>
</template>

<style scoped>
h2 {
  font-size: 30px;
}
</style>
