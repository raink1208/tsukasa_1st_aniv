<script setup lang="ts"></script>

<template>
  <div id="charm">
    <div class="inner-wrapper">
      <h2>
        <img data-anim-slide="bottomIn" alt="魅力 Charm" src="" />
      </h2>
      <div class="point">
        <h3 class="title">ホラーゲーム</h3>
        <div class="intro">
          <div class="intro-body">
            <p></p>
            <div class="image-wrapper">
              <img src="/src/assets/img/history/first_streaming.webp" />
            </div>
          </div>
          <div class="video-wrapper">
            <video />
          </div>
        </div>
      </div>
      <div class="point">
        <h3 class="title">VLog</h3>
        <div class="intro">
          <div class="intro-video">
            <div class="video-wrapper">
              <video />
            </div>
          </div>
          <div class="intro-body">
            <p>
              紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文
            </p>
            <div class="image-wrapper">
              <img src="/src/assets/img/history/first_streaming.webp" />
            </div>
          </div>
        </div>
      </div>
      <div class="point">
        <h3 class="title">雑談</h3>
        <div class="intro">
          <div class="intro-body">
            <p>
              紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文紹介文
            </p>
            <div class="image-wrapper">
              <img src="/src/assets/img/history/first_streaming.webp" />
            </div>
          </div>
          <div class="intro-video">
            <div class="video-wrapper">
              <video />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 50px;
  font-weight: bold;
  font-family: var(--font-round), cursive;
}

.inner-wrapper {
  margin: 0 auto;
  padding: 0 4em;
  max-width: 1580px;
}

.point {
  height: 800px;
}

.title {
  padding-left: 20px;
}

.intro {
  display: flex;
  gap: 5%;
}

.intro-body {
  width: 40%;
  padding-top: 30px;
}

.intro-body p {
  font-size: 18px;
}

.intro-video {
  width: 55%;
}

.intro-video {
}

.image-wrapper {
  border-radius: 16px;
  overflow: hidden;
}

.video-wrapper {
  margin-top: 120px;
  overflow: hidden;
  border-radius: 10px;
}

.video-wrapper video {
  width: 100%;
  height: 100%;
}
</style>
