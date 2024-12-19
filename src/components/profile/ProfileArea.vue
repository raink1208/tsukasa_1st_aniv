<script setup lang="ts">
import profileLogo from '@/assets/img/logo/profile_logo.webp';
import standPicture from '@/assets/img/stand/tsukasa.webp';
import SNSList from '@/components/profile/SNSList.vue'
import IntroductionArea from '@/components/profile/IntroductionArea.vue'
import ImageSwiperSlide from '@/components/ImageSwiperSlide.vue'

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
  <section id="profile">
    <h2>
      <img class="title-logo fade-in" :src="profileLogo"  alt="プロフィール profile" data-anim-slide="bottomIn" />
    </h2>
    <div class="inner-wrapper">
      <div class="profile-row">
        <div class="stand-picture">
          <img :src="standPicture" loading="lazy" alt="">
        </div>
        <div class="profile-intro">
          <div class="name fade-in" data-anim-slide="leftIn">
            <h3>領国つかさ</h3>
            <small>Tsukasa Ryogoku</small>
          </div>
          <div class="intro fade-in" data-anim-slide="leftIn">
            <p>
              15歳の中学3年生。陰キャで傲慢不遜な女の子。 教室では一人でお弁当を食べるような日陰者だが、インターネットではイキイキしている。自分が悠々自適に過ごせる「最強の国」を作りたいと日々妄想しており、軍服を着て輩下を探している。
            </p>
          </div>
          <SNSList />
          <ImageSwiperSlide :images="images" class="fade-in" data-anim-slide="leftIn" />
        </div>
      </div>
    </div>
    <introductionArea />
  </section>
</template>

<style scoped>
#profile {
  margin: auto auto;
  padding-top: 40px;
}

.title-logo {
  width: 400px;
  margin: 0 auto;
}

.inner-wrapper {
  margin: 0 auto;
  padding: 0 4em;
  max-width: 1480px;
}

.profile-row {
  display: flex;
  justify-content: center;
}

.stand-picture {
  width: 50%;
  aspect-ratio: 1/1;
}

.stand-picture img {
  object-fit: contain;
  width: 100%;
  height: 100%;
}

.profile-intro {
  width: 50%;
}

.profile-intro .name {
  margin-left: 10px;
  margin-top: 20px;
  margin-bottom: 30px;
}

.profile-intro .name h3 {
  font-family: var(--font-round), serif;
  font-size: 40px;
  line-height: 40px;
}

.profile-intro .name small {
  font-size: 14px;
}

@media screen and (max-width: 768px) {
  .profile-row {
    display: revert;
  }

  .stand-picture {
    width: revert;
  }

  .profile-intro {
    width: revert;
  }

  .inner-wrapper {
    padding: 0 1em;
  }
}
</style>
