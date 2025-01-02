<script setup lang="ts">
import type { StreamInfo } from '@/models/StreamInfo'
import SummaryListItem from '@/components/summary/SummaryListItem.vue'
import { toHMSTime } from '@/utils/TimeUtil'
import { onMounted, ref } from 'vue'

const {title, totalTime, data} = defineProps<{
  title: string,
  totalTime: number,
  data: Array<StreamInfo>,
  select: string
}>();

const animationDuration = 3000;

const rankingList = ref<Element | undefined>();
const delayFadeIn = ref<Element | undefined>();

const displayTime = ref<number>(0);
let animationFrameId: number | null = null;

const startAnimation = () => {
  if (!rankingList.value) return;
  if (animationFrameId !== null) return;

  const top = rankingList.value.getBoundingClientRect().top;
  const height = window.innerHeight;
  if (top >= height * 0.9) return;
  removeEventListener('scroll', startAnimation);

  const startTime = performance.now();
  const animate = (time: number) => {
    const elapsedTime = time - startTime;
    if (elapsedTime < animationDuration) {
      const value = totalTime * (elapsedTime / animationDuration);
      displayTime.value = Math.round(value);
      animationFrameId = requestAnimationFrame(animate);
    } else {
      displayTime.value = totalTime;
      delayFadeIn.value?.classList.add("is-view");
    }
  };
  animationFrameId = requestAnimationFrame(animate);
}

onMounted(() => {
  addEventListener("scroll", startAnimation);
});
</script>

<template>
  <div class="summary-list" ref="rankingList">
    <h3 class="title text-center">{{title}}</h3>
    <p class="time text-center">{{toHMSTime(displayTime)}}</p>
    <div class="description">
      <slot name="description"></slot>
    </div>
    <div class="grid grid-nogutter" data-anim-slide="delayBottomIn" ref="delayFadeIn">
      <div v-for="streamInfo in data.slice(0, 5)" v-bind:key="streamInfo.id">
        <SummaryListItem :streamInfo="streamInfo" :select="select" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.summary-list {
  padding-top: 30px;
  padding-bottom: 20px;
}
.title {
  font-size: 25px;
}

.time {
  font-size: 30px
}

.description {
  text-align: right;
  padding-right: 25px;
  padding-bottom: 5px;
}
</style>
