<script setup lang="ts">
import type { HistoryItem } from '@/models/HistoryItem'
import HistoryListItem from '@/components/history/HistoryListItem.vue'

const { histories } = defineProps<{
  histories: HistoryItem[]
}>()
</script>

<template>
  <ul class="history-list fade-in" data-anim-slide="bottomIn">
    <li v-for="history in histories" v-bind:key="history.title">
      <HistoryListItem :history="history" />
    </li>
  </ul>
</template>

<style scoped>
.history-list li {
  border-bottom: 2px dashed var(--accent-color-alpha);

  padding-top: 1.5em;
  padding-bottom: 1em;
}

</style>
