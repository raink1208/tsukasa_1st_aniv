<script setup lang="ts">
import Hls from 'hls.js'
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
const playlistURL = "https://1staniv-cdn.tsukasa-kingdom.net/first_view_hls/first_view.m3u8";
const videoRef = ref<HTMLVideoElement | null>(null);
let hls: Hls | null = null;
const props = defineProps<{
  loading: boolean
}>();
const emit = defineEmits(["hideLoading"]);
onMounted(() => {
  const video = videoRef.value
  if (!video) return
  video.addEventListener("canplay", () => {
    emit("hideLoading");
  });
  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(playlistURL);
    hls.attachMedia(video);
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = playlistURL;
  }
});
watch(props, () => {
  if (!props.loading) {
    videoRef.value?.play();
    setTimeout(() => {
      isAnimated.value = true;
    }, 500);
  }
});
onBeforeUnmount(() => {
  if (hls) {
    hls.destroy();
    hls = null;
  }
});
const message = '「領国つかさ、１周年おめでとう！」'
const isAnimated = ref(false);
</script>

<template>
  <section id="firstView">
    <div class="background">
      <video ref="videoRef" autoplay muted loop playsinline />
    </div>
    <div class="bg-mask">
      <div class="center">
        <div :class="['animate-message', { animated: isAnimated }]">
          <span
            v-for="(c, index) in message"
            :key="index"
            :style="{ transitionDelay: `${index * 0.05}s` }"
          >
            {{ c }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#firstView {
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
  height: 100dvh;
}
.bg-mask {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100dvh;
  background: rgba(51, 51, 51, 0.6) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAAXNSR0IArs4c6QAAAGlJREFUKFNdjwsNgDAMBW82hgywgQ10oAMb2AAZYGPkYFsamizp5/r6loAROPliBTbgrnVJNRGaK2ArAxeQGuDmHpQKMKgk4NBnqHS4Wetsoly/CUzRUyfbzb+nBvSb4TevJwGHUWmJnh6LfRfV9nhQ9AAAAABJRU5ErkJggg==) repeat;
}
.background {
  height: 100%;
  width: 100%;
}
.center {
  padding-top: 40vh;
}
h1 {
  font-size: 2rem;
  color: #fff;
  text-align: center;
}
h1 span {
  display: inline-block;
}
.background video {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
