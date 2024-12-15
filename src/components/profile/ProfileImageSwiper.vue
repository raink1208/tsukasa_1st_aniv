<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import {Pagination, Autoplay, EffectFade } from 'swiper/modules'

const images = [
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_face.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_charm.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_guruguru.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/school_outfit_face.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/school_outfit_smile.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_hypnosis.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_chair.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_weapon.webp",
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
