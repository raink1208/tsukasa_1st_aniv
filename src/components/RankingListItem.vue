<script setup lang="ts">
import type { StreamInfo } from '@/models/StreamInfo'
import { toHMSTime } from '@/utils/TimeUtil'

const {streamInfo} = defineProps<{
  streamInfo: StreamInfo,
  select: string
}>();

const openUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="item-row border-t-2">
    <div class="flex gap-5 w-full" @click="openUrl(streamInfo.url)">
      <div class="flex-shrink-0">
        <figure class="thumbnail rounded-xl">
          <img :src="streamInfo.thumbnail" alt="サムネイル">
        </figure>
      </div>
      <div class="relative flex-grow">
        <p>{{streamInfo.title}}</p>
        <p class="absolute right-2 bottom-2">{{toHMSTime(streamInfo[select])}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-row {
  padding: 5px 0;
}

.thumbnail {
  height: 150px;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.thumbnail img {
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: center center;
}

.item-row:hover img {
  transform: scale(1.05, 1.05);
  transition: .5s all;
}
</style>
