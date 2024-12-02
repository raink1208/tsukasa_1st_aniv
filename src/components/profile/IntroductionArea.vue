<script setup lang="ts">

</script>

<template>
  <div class="profile-detail">
    <div class="inner-wrapper">
      <h4 class="fade-in data-row-title" data-anim-slide="leftIn">詳細</h4>
      <div class="data-row">
        <div class="tsukasa-info fade-in" data-anim-slide="leftIn">
          <dl>
            <dt>誕生日</dt>
            <dd>8月11日</dd>
          </dl>
          <dl>
            <dt>年齢</dt>
            <dd>15歳</dd>
          </dl>
          <dl>
            <dt>身長</dt>
            <dd>143cm</dd>
          </dl>
          <dl>
            <dt>職業</dt>
            <dd>中学生</dd>
          </dl>
          <dl>
            <dt>ママ (イラストレーター)</dt>
            <dd>とぴあ様 <a href="https://twitter.com/tpa425" target="_blank" class="link">@tpa425</a></dd>
          </dl>
          <dl>
            <dt>パパ (live2Dモデラー)</dt>
            <dd>星宮みづき様 <a href="https://twitter.com/Hoshi7Mizuki" target="_blank" class="link">@Hoshi7Mizuki</a></dd>
          </dl>
        </div>
        <div class="stream-info fade-in" data-anim-slide="leftIn">
          <dl>
            <dt>初配信日</dt>
            <dd>2024年 1月13日</dd>
          </dl>
          <dl>
            <dt>ファンネーム / メンバーシップネーム</dt>
            <dd>領国民 / オタク</dd>
          </dl>
          <dl>
            <dt>ファンマーク</dt>
            <dd>🎖️(勲章)</dd>
          </dl>
          <dl>
            <dt>好きなゲーム</dt>
            <dd>ホラー・ディストピア・ADV/RPG</dd>
          </dl>
          <dl>
            <dt>好きな食べ物</dt>
            <dd>
              うなぎ 牛乳 おでん 寿司 すき焼き<br>
              ハートチップル焙煎にんにく味<br>
              朝マック(ビックブレックファースト)
            </dd>
          </dl>
          <dl>
            <dt>目標</dt>
            <dd>
              「最強の国」の集会を開くこと!<br>
              僕に額づく人、100万人捕まえる!<br>
              ホラーゲームといえば僕!になりたい<br>
              みんなの拠り所になる
            </dd>
          </dl>
          <dl>
            <dt>ハッシュタグ</dt>
            <dd>
              #領国大使館: 総合タグ<br>
              #つかさ国営放送: 配信タグ<br>
              #つかさ肖像画: FAタグ
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h3 {
  font-size: 30px;
  font-family: var(--font-round),serif;
}

.inner-wrapper {
  max-width: 1280px;
  padding-left: 4em;
  padding-right: 4em;
  margin-left: auto;
  margin-right: auto;
}

.profile-detail {
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 30px;
  background-color: rgba(243, 243, 243, 0.8);
}

.data-row-title {
  margin-top: 10px;
  margin-bottom: 10px;
}

.data-row {
  display: flex;
  gap: 2rem;
}

.data-row .tsukasa-info {
  width: 50%;
}

.data-row .stream-info {
  width: 50%;
}

.data-row dl {
  margin: 20px 0;
  padding-left: 10px;
  padding-bottom: 15px;
}

.data-row dl:not(:last-child) {
  border-bottom: 2px dashed var(--accent-color-alpha);
}

.data-row dl dt {

}

.data-row dl dd {
  padding-top: 5px;
  padding-left: 20px;
}

.link {
  color: #2c2f75;
  text-decoration: underline;
}


@media screen and (max-width: 768px) {
  .inner-wrapper {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .profile-detail .inner-wrapper {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .data-row {
    display: revert;
  }

  .tsukasa-info {
    width: revert;
  }

  .stream-info {
    width: revert;
  }

  .data-row .tsukasa-info {
    width: revert;
  }

  .data-row .stream-info {
    width: revert;
  }

  .data-row .tsukasa-info dl:last-child {
    border-bottom: 2px dashed var(--accent-color-alpha);
  }
}
</style>
