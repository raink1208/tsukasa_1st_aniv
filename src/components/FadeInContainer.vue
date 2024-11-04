<script setup lang="ts">
import { onMounted, ref } from 'vue'

const animationContainer = ref<Element | undefined>(undefined);
onMounted(() => {
  fadeIn();
  window.addEventListener("scroll", fadeIn);
  window.addEventListener("resize", fadeIn);
});

const fadeIn = () => {
  const items = animationContainer.value.querySelectorAll(".fade-in") ?? [];
  items.forEach((item: Element) => {
    const top = item.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height * 0.9) item.classList.add("is-view");
  })
}
</script>

<template>
  <div ref="animationContainer">
    <slot></slot>
  </div>
</template>

<style>
[data-anim-slide] {
  opacity: 0;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-iteration-count: 1;
}
[data-anim-slide].is-view {
  animation-name: anim-slide;
  animation-fill-mode: forwards;
}
[data-anim-slide="bottomIn"].is-view {
  animation-name: anim-slide-bottomIn;
}
[data-anim-slide="leftIn"].is-view {
  animation-name: anim-slide-leftIn;
}
[data-anim-slide="rightIn"].is-view {
  animation-name: anim-slide-rightIn;
}
@keyframes anim-slide {
  0% {
    opacity: 0;
    transform: translateZ(0)
  }
  100% {
    opacity: 1;
    transform: translateZ(0)
  }
}
@keyframes anim-slide-bottomIn {
  0% {
    opacity: 0;
    transform: translate3d(0, 50px, 0)
  }
  100% {
    opacity: 1;
    transform: translateZ(0)
  }
}
@keyframes anim-slide-leftIn {
  0% {
    opacity: 0;
    transform: translate3d(-50px, 0, 0)
  }
  100% {
    opacity: 1;
    transform: translateZ(0)
  }
}
@keyframes anim-slide-rightIn {
  0% {
    opacity: 0;
    transform: translate3d(50px, 0, 0)
  }
  100% {
    opacity: 1;
    transform: translateZ(0)
  }
}

[data-anim-slide="delayBottomIn"].is-view > * {
  opacity: 0;
  animation-name: anim-slide-bottomIn;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-fill-mode: forwards;
}

[data-anim-slide="delayBottomIn"].is-view > *:nth-child(1) {
  animation-delay: 0s;
}
[data-anim-slide="delayBottomIn"].is-view > *:nth-child(2) {
  animation-delay: 0.2s;
}
[data-anim-slide="delayBottomIn"].is-view > *:nth-child(3) {
  animation-delay: 0.4s;
}
[data-anim-slide="delayBottomIn"].is-view > *:nth-child(4) {
  animation-delay: 0.6s;
}
[data-anim-slide="delayBottomIn"].is-view > *:nth-child(5) {
  animation-delay: 0.8s;
}

[data-anim-slide="delayLeftIn"].is-view > * {
  opacity: 0;
  animation-name: anim-slide-leftIn;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation-fill-mode: forwards;
}

[data-anim-slide="delayLeftIn"].is-view > *:nth-child(1) {
  animation-delay: 0s;
}
[data-anim-slide="delayLeftIn"].is-view > *:nth-child(2) {
  animation-delay: 0.2s;
}
[data-anim-slide="delayLeftIn"].is-view > *:nth-child(3) {
  animation-delay: 0.4s;
}
[data-anim-slide="delayLeftIn"].is-view > *:nth-child(4) {
  animation-delay: 0.6s;
}
[data-anim-slide="delayLeftIn"].is-view > *:nth-child(5) {
  animation-delay: 0.8s;
}
</style>
