<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import "swiper/swiper-bundle.css"
import {Pagination, Autoplay, EffectFade } from 'swiper/modules'

const images = [
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide_002.png",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide_005.png",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide_006.png",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide_003.png",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide_007.png",
]
</script>

<template>
  <div>
    <div class="swiper-container fade-in" data-anim-slide="leftIn">
      <Swiper
        :modules="[Pagination, Autoplay, EffectFade]"
        :slidesPerView="1"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :autoplay="{ delay: 5000 }"
        :speed="1000"
        :pagination="{ el: '.custom-pagination', clickable: true }"
        loop
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slide Image" class="slide-image" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="custom-pagination"></div>
  </div>
</template>

<style scoped>
.swiper-container {
  margin-top: 30px;
  border-radius: 16px;
  overflow: hidden;
}

.custom-pagination {
  text-align: center;
}

</style>
