<script setup lang="ts">
import type { StreamInfo } from '@/models/StreamInfo'
import { toHMSTime } from '@/utils/TimeUtil'

const {streamInfo} = defineProps<{
  streamInfo: StreamInfo
}>();
</script>

<template>
  <div class="item-row border-t-2">
    <div class="flex gap-5 w-full">
      <div class="flex-shrink-0">
        <img class="thumbnail rounded-xl" :src="streamInfo.thumbnail" alt="サムネイル">
      </div>
      <div class="relative flex-grow">
        <p>{{streamInfo.title}}</p>
        <p class="absolute right-2 bottom-2">{{toHMSTime(streamInfo.streamTime)}}</p>
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
}
</style>
