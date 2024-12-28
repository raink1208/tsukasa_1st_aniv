<script setup lang="ts">
import ImageSwiperSlide from '@/components/ImageSwiperSlide.vue'

const horrorImages = [
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_face.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_charm.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/first_stream_guruguru.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/school_outfit_face.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/school_outfit_smile.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_hypnosis.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_chair.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/profile_slide/3D_weapon.webp",
];

const vlogImages = [
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/1_thumbnail.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/1_hitumabusi.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/1_massage.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/1_akiba.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/2_thumbnail.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/2_bonnnou.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/2_tororo.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/2_zazenn.webp",
  "https://1staniv-cdn.tsukasa-kingdom.net/vlog_slide/2_ecchi.webp",
]
</script>

<template>
  <div id="charm">
    <div class="inner-wrapper">
      <h2>
        <img data-anim-slide="bottomIn" alt="魅力 Charm" src="" />
      </h2>
      <div class="point">
        <h3 class="title fade-in" data-anim-slide="bottomIn"><span>ホラーゲームといえば</span><span>領国つかさ</span></h3>
        <div class="intro">
          <div class="intro-text">
            <p class="fade-in" data-anim-slide="rightIn">
              デビューから1年で 50タイトル以上 200時間越えと数多くのホラゲー配信をしてきた彼女。<br>
              暗闇とジャンプスケアが苦手であり、強がりながらも思わず漏れてしまう可愛らしいリアクションや、ガチの悲鳴が彼女の魅力の一つです。
              恐怖感を楽しむだけではなく、ホラーゲームのストーリーや設定に深く入り込み、シナリオを考察しながら進める姿勢は、真のホラーゲーム好きとしての一面を見せてくれます。<br>
              ホラーが苦手な領国民でも閣下のかわいいリアクションを楽しむことで恐怖心を和らげ、ストーリーを理解しつつ配信を楽しむことができるでしょう。
            </p>
          </div>
          <div class="intro-image">
            <div class="image-wrapper">
              <ImageSwiperSlide :images="horrorImages" class="fade-in" data-anim-slide="leftIn" />
            </div>
          </div>
        </div>
      </div>
      <div class="point">
        <h3 class="title fade-in" data-anim-slide="bottomIn">旅行の感想 + VLog</h3>
        <div class="intro">
          <div class="intro-image">
            <div class="image-wrapper">
              <ImageSwiperSlide :images="vlogImages" class="fade-in" data-anim-slide="rightIn" />
            </div>
          </div>
          <div class="intro-text">
            <p class="fade-in" data-anim-slide="leftIn">

            </p>
          </div>
        </div>
      </div>
      <div class="point">
        <h3 class="title fade-in" data-anim-slide="bottomIn">無軌道雑談</h3>
        <div class="intro">
          <div class="intro-text">
            <p class="fade-in" data-anim-slide="rightIn">
              紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文
            </p>
          </div>
          <div class="intro-image">
            <div class="image-wrapper">
              <ImageSwiperSlide :images="horrorImages" class="fade-in" data-anim-slide="leftIn" />
            </div>
          </div>
        </div>
      </div>
      <div class="point">
        <h3 class="title fade-in" data-anim-slide="bottomIn">3Dお披露目</h3>
        <div class="intro">
          <div class="intro-image">
            <div class="image-wrapper">
              <ImageSwiperSlide :images="vlogImages" class="fade-in" data-anim-slide="rightIn" />
            </div>
          </div>
          <div class="intro-text">
            <p class="fade-in" data-anim-slide="leftIn">
              あの天才最強中学生が3D化！
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: clamp(25px, 5vw, 40px);
  font-weight: bold;
  font-family: var(--font-round), cursive;
}

h3 span {
  display: inline-block;
}

.inner-wrapper {
  margin: 0 auto;
  padding: 0 4em;
  max-width: 1480px;
}

.title {
  padding-left: 20px;
}

.intro {
  display: flex;
  gap: 5%;
}

.intro-text {
  width: 40%;
  padding-top: 30px;
}

.intro-text p {
  font-size: 18px;
}

.intro-image {
  width: 55%;
}

@media screen and (max-width: 1050px) {
  .intro {
    flex-direction: column;
  }

  .intro-text {
    order: -1;
    width: revert;
  }

  .intro-text {
    padding-top: 10px;
  }

  .intro-image {
    width: revert;
  }
}

@media screen and (max-width: 768px) {
  .inner-wrapper {
    padding: 0 2em;
  }

  .title {
    padding-left: 0px;
  }

  .intro-text p {
    font-size: 16px;
  }
}

</style>
