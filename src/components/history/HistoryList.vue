<script setup lang="ts">
import type { HistoryItem } from '@/models/HistoryItem'
import HistoryListItem from '@/components/history/HistoryListItem.vue'

const { histories } = defineProps<{
  histories: HistoryItem[]
}>();
</script>

<template>
  <div v-for="history in histories">
    <HistoryListItem :history="history" />
  </div>
</template>

<style scoped>

</style>
