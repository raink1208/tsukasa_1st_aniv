<script setup lang="ts">

</script>

<template>
  <section id="firstView">
    <div class="background">
      <video src="https://1staniv-cdn.tsukasa-kingdom.net/first_view.mp4" autoplay muted loop />
    </div>
    <div class="bg-mask">
      <div class="center">
<!--        <h1 class="fade-in" data-anim-slide="bottomIn"><span>領国つかさ</span> <span>1周年記念サイト</span></h1>-->
      </div>
    </div>
  </section>
</template>

<style scoped>
#firstView {
  width: -webkit-fill-available;
  width: -moz-available;
  width: stretch;
  height: 100vh;
}

.bg-mask {
  position: absolute;
  z-index: 2;
  top: 0;
  width: 100%;
  height: 100%;
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
</style>
