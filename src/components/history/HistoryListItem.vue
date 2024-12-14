<script setup lang="ts">
import type { HistoryItem } from '@/models/HistoryItem'

const { history } = defineProps<{
  history: HistoryItem
}>()

const getThumbnailPath = (fileName: string) => {
  return fileName;
  //return "/src/assets/img/history/" + fileName;
}
</script>

<template>
  <div class="history-item">
    <img :src="getThumbnailPath(history.thumbnail)" alt="" />
    <div>
      <small>{{ history.date }}</small>
      <h4>{{ history.title }}</h4>
    </div>
  </div>
</template>

<style scoped>
.history-item {
  padding-top: 15px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ccc;
}

h4 {
  font-size: 30px;
}
</style>
