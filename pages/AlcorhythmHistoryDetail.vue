<template>
  <div class="app">
    <section class="contents">
      <div class="info">
        <div class="title">{{ alcorhythm.title }}</div>
        <div class="description">{{ alcorhythm.description }}</div>
      </div>
      <div class="hr-contents">
        <p class="hr-title">歩いた軌跡</p>
        <hr>
      </div>
      <!-- <google-maps
        :lat-lng="alcorhythm.latLng"
        class="gmap"
      /> -->
      <div class="hr-contents">
        <p class="hr-title">タイム</p>
        <hr>
      </div>
      <div>
        開始時刻：{{ alcorhythm.start_date }} {{ alcorhythm.start_time }}<br>
        終了時刻：{{ alcorhythm.end_date }} {{ alcorhythm.end_time }}<br>
      </div>
      <ul id="sample">
        <li v-for="(item, index) in alcorhythm.latlng" :key="index">
          lat:{{ item.lat }}, lng{{ item.lng }}
        </li>
      </ul>
    </section>
    <a href="/history">履歴一覧に戻る</a>
    <br>
    <a href="/top">トップ画面に戻る</a>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm } from '~/types/IAlcorhythm';
definePageMeta({
  path: "/history-detail"
});

const alcorhythmId: number = Number(useRoute().query.alcorhythmId);
const alcorhythm: IAlcorhythm = reactive(selectRecord(alcorhythmId));
</script>

<style scoped>
.info {
  width: 400px;
  margin-bottom: 50px;
}
.title {
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
}
.message {
  font-size: 15px;
}
.hr-title {
  text-align: left;
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
}
.hr-contents {
  margin-top: 30px;
}
hr {
  border: none;
  border-bottom: 3px solid #CC9900;
  margin: 10px 0 30px 0;
}
.btn {
  background-color: #FFF15F;
  width: 300px;
  margin: 20px 30px;
  padding: 10px 0px ;
  color: #212529;
  font-size: 18px;
  border-radius: 0.5rem;
  border-radius: 100vh;
}
</style>