<script setup lang="ts">
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import type { StreamInfo } from '@/models/StreamInfo'
import { toHMSTime } from '@/utils/TimeUtil'
const {streamInfo} = defineProps<{
  streamInfo: StreamInfo,
  select: string,
}>();
const openUrl = (url: string) => {
  window.open(url, '_blank')
}
</script>

<template>
  <div class="item-row border-t-2">
    <div class="item" @click="openUrl(streamInfo.url)">
      <div class="thumbnail-column">
        <figure class="thumbnail rounded-xl">
          <img :src="streamInfo.thumbnail" alt="サムネイル">
        </figure>
      </div>
      <div class="content-column">
        <p>{{streamInfo.title}}</p>
        <p class="time">{{toHMSTime(streamInfo[select])}}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-row {
  padding: 5px 0;
}
.item {
  display: flex;
  gap: 5px;
  width: 100%;
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
.thumbnail-column {
  flex-shrink: 0;
}
.content-column {
  position: relative;
  flex-grow: 1;
}
.time {
  position: absolute;
  right: 2px;
  bottom: 2px;
}
@media screen and (max-width: 768px) {
  .item {
    display: revert;
  }
  .thumbnail {
    height: auto;
    width: 100%;
  }
  .time {
    position: revert;
    float: right;
  }
}
</style>
