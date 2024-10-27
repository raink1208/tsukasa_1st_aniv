<script setup lang="ts">
import type { StreamInfo } from '@/models/StreamInfo'
import RankingListItem from '@/components/RankingListItem.vue'
import { toHMSTime } from '@/utils/TimeUtil'
import { onMounted, onUnmounted, ref } from 'vue'

const {title, time, data, countUp} = defineProps<{
  title: string,
  time: number,
  data: Array<StreamInfo>,
  countUp: number,
  select: string
}>();

const rankingList = ref<Element | undefined>();
const delayFadeIn = ref<Element | undefined>();
const animatedTime = ref(0);

let timer;

const startAnimation = () => {
  const top = rankingList.value.getBoundingClientRect().top;
  const height = window.innerHeight;
  if (top < height * 0.9) {
    if (timer) return;
    timer = setInterval(() => {
      if (animatedTime.value < time) {
        const next = animatedTime.value + countUp;
        animatedTime.value = Math.min(next, time);
      } else {
        clearInterval(timer);
        delayFadeIn.value?.classList.add("is-view");
        removeEventListener('scroll', startAnimation);
      }
    }, 5);
  }
}

onUnmounted(() => {
  clearInterval(timer);
});

onMounted(() => {
  startAnimation()
  addEventListener("scroll", startAnimation);
})
</script>

<template>
  <div ref="rankingList">
    <h3 class="title text-center">{{title}}</h3>
    <p class="time text-center">{{toHMSTime(animatedTime)}}</p>
    <div class="grid grid-nogutter" data-anim-slide="delayBottomIn" ref="delayFadeIn">
      <div v-for="streamInfo in data.slice(0, 5)" v-bind:key="streamInfo.id">
        <RankingListItem :streamInfo="streamInfo" :select="select" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 25px;
}

.time {
  font-size: 30px
}
</style>
