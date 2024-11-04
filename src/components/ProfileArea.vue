<script setup lang="ts">
import profileLogo from '@/assets/img/logo/profile_logo.webp';
import standPicture from '@/assets/img/stand/tsukasa.webp';
import SNSList from '@/components/SNSList.vue'
</script>

<template>
  <section id="profile">
    <img class="title-logo fade-in" :src="profileLogo"  alt="" data-anim-slide="bottomIn" />
    <div class="inner-wrapper">
      <div class="profile-row">
        <div class="stand-picture">
          <img :src="standPicture" loading="lazy" alt="">
        </div>
        <div class="profile-intro">
          <div class="name fade-in" data-anim-slide="leftIn">
            <h2>領国つかさ</h2>
            <small>Tsukasa Ryogoku</small>
          </div>
          <div class="intro fade-in" data-anim-slide="leftIn">
            <p>
              15歳の中学3年生。陰キャで傲慢不遜な女の子。 教室では一人でお弁当を食べるような日陰者だが、インターネットではイキイキしている。自分が悠々自適に過ごせる「最強の国」を作りたいと日々妄想しており、軍服を着て輩下を探している。
            </p>
          </div>
          <SNSList />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#profile {
  margin: auto auto;
}

.title-logo {
  max-height: 130px;
  max-width: 350px;
  width: auto;
  display: block;
  margin: 0 auto;
}

.inner-wrapper {
  margin: 0 auto;
  padding: 0 4em;
  max-width: 1280px;
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

.profile-intro .name h2 {
  font-family: var(--font-round);
  font-size: 40px;
  line-height: 40px;
}

.profile-intro .name small {
  font-size: 14px;
}

@media screen and (max-width: 900px) {
  .profile-row {
    display: revert;
  }

  .stand-picture {
    width: revert;
  }

  .profile-intro {
    width: revert;
  }
}
</style>
