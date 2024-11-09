<script setup lang="ts">
import type { HistoryItem } from '@/models/HistoryItem';

const {history} = defineProps<{
  history: HistoryItem,
}>();
</script>

<template>
  <img :src="history.thumbnail" alt="">
</template>

<style scoped>

</style>
