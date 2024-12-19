<script setup lang="ts">
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const { images } = defineProps<{
  images: string[]
}>();


const uniqueId = ref(`swiper-${Date.now()}`);

</script>

<template>
  <div>
    <div class="swiper-container">
      <Swiper
        :modules="[Pagination, Autoplay, EffectFade]"
        :slidesPerView="1"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        :autoplay="{ delay: 5000 }"
        :speed="1000"
        :pagination="{ el: `#custom-pagination-${uniqueId}`, clickable: true }"
        loop
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <img :src="image" alt="Slide Image" class="slide-image" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div :id="`custom-pagination-${uniqueId}`" class="custom-pagination"></div>
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
