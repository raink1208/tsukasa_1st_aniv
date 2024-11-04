<script setup lang="ts">

import twitterLogo from '@/assets/img/icons/x-twitter_logo.webp'
import youtubeLogo from '@/assets/img/icons/youtube_logo.webp'
import twitchLogo from '@/assets/img/icons/twitch_logo.webp'
import marshmallowLogo from '@/assets/img/icons/marshmallow.webp'
import specialiteLogo from '@/assets/img/icons/specialite_logo.webp'
</script>

<template>
  <div class="sns">
    <ul class="sns-list fade-in" data-anim-slide="delayLeftIn">
      <li class="x-twitter ">
        <a href="https://twitter.com/tsukasa_ryogoku" target="_blank">
          <img :src="twitterLogo" alt="x-twitter-icon">
          <span>tsukasa_ryogoku(X)</span>
        </a>
      </li>
      <li class="youtube">
        <a href="https://www.youtube.com/@tsukasa_ryogoku" target="_blank">
          <img :src="youtubeLogo" alt="youtube-icon">
          <span>tsukasa_ryogoku(YouTube)</span>
        </a>
      </li>
      <li class="twitch">
        <a href="https://www.twitch.tv/tsukasa_ryogoku" target="_blank">
          <img :src="twitchLogo" alt="twitch-icon">
          <span>tsukasa_ryogoku(Twitch)</span>
        </a>
      </li>
      <li>
        <a href="https://marshmallow-qa.com/ss7bun5g8x1iwlg" target="_blank">
          <img :src="marshmallowLogo" alt="marshmallow">
          <span>ましゅまろ</span>
        </a>
      </li>
      <li>
        <a href="https://specialite.games/talents/tsukasa-ryogoku/" target="_blank">
          <img :src="specialiteLogo" alt="specialite-icon">
          <span>すぺしゃりて公式サイト</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sns {
  margin-top: 50px;
  margin-left: 10px;
}

.sns .sns-list li {
  margin-bottom: 5px;
  height: 35px;
}

.sns .sns-list li a {
  display: flex;
  gap: 15px;
  align-items: center;
}

.sns .sns-list li a img {
  width: 35px;
  height: 35px;
}

.sns .sns-list li span {
  position: relative;
}

.sns .sns-list li span::after {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #C0C0C0;
  left: 0;
  content: "";
  bottom: -3px;
}

.sns .sns-list li a:hover {
  opacity: 0.6;
}
</style>
