<script setup lang="ts">
import type { HistoryItem } from '@/models/HistoryItem'

const { history } = defineProps<{
  history: HistoryItem
}>()

const getThumbnailPath = (fileName: string) => {
  //return fileName;
  return "/src/assets/img/history/" + fileName;
}
</script>

<template>
  <a :href="history.url" target="_blank">
    <div class="history-content">
      <div class="thumbnail">
        <img :src="getThumbnailPath(history.thumbnail)" alt="" />
      </div>
      <div class="description">
        <small>{{ history.date }}</small>
        <h4 class="title">{{ history.title }}</h4>
      </div>
    </div>
  </a>
</template>

<style scoped>
h4 {
  font-size: 30px;
}

.history-content {
  display: flex;
  gap: 2rem;
}

.history-content .thumbnail {
  aspect-ratio: 16/9;
  width: 35svw;
  border-radius: 10px;
  overflow: hidden;
}

.history-content .thumbnail img {
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center center;
}

.history-content .description {
  display: grid;
  align-items: center;
  align-content: center;

  width: 70%;
}

.history-content .description small {
  padding-left: 5px;
}

.history-content .description .title {
  font-size: 1.7em;
}

a:hover .history-content .thumbnail img {
  transform: scale(1.1, 1.1);
  transition: .5s all;
}

@media screen and (max-width: 768px) {
  .history-content {
    display: revert;
  }
  .history-content .thumbnail {
    width: revert;
  }
  .history-content .description {
    width: 100%;
    margin-top: 8px;
    padding-left: 10px;
  }
  .history-content .description .title {
    font-size: 20px;
  }
}
</style>
