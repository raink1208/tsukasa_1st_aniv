<script setup lang="ts">
import { ref, onMounted } from "vue";

const message = "「領国つかさ、１周年おめでとう！」";
const isAnimated = ref(false);

onMounted(() => {
  setTimeout(() => {
    isAnimated.value = true;
  }, 500);
});
</script>

<template>
  <div class="transition">
    <div :class="['animate-message', { animated: isAnimated }]">
      <span v-for="(c, index) in message" :key="index" :style="{ transitionDelay: `${index * 0.05}s` }">
        {{ c }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.transition {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkgray;
  overflow: hidden;
}

.animate-message {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
}

.animate-message span {
  display: inline-block;
  opacity: 0;
  filter: blur(10px);
  transform: translate(-100%, -100%) scale(2);
}

.animate-message.animated span {
  opacity: 1;
  filter: blur(0px);
  transform: translate(0%, 0%) scale(1);
  transition: 1.2s cubic-bezier(0.22, 1, 0.36, 1);
}
</style>
