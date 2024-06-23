<template>
  <div class="container">
      <section class="contents">
        タイトル：{{ alcorhythm.title }}<br>
        メッセージ：{{ alcorhythm.description }}<br>
        開始時刻：{{ alcorhythm.start_date }} {{ alcorhythm.start_time }}<br>
        終了時刻：{{ alcorhythm.end_date }} {{ alcorhythm.end_time }}<br>
        <ul id="sample">
          <li v-for="(item, index) in alcorhythm.latlng" :key="index">
            lat:{{ item.lat }}, lng{{ item.lng }}
          </li>
        </ul>
        <br>
        <button class="btn" @click="navigateToHistoryDetail">詳細の履歴をみる</button>
        <br>
        <button class="btn" @click="navigateToTop">トップに戻る</button>
      </section>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm } from '~/types/IAlcorhythm';

definePageMeta({
  path: "/result"
});
const navigateToHistoryDetail = () => {
  return navigateTo({
    path: '/history-detail',
    query: {
      alcorhythmId: alcorhythmId
    }
  });
};
const navigateToTop = () => {
  return navigateTo({
    path: '/top'
  });
};

const alcorhythmId: number = Number(useRoute().query.alcorhythmId);
const alcorhythm: IAlcorhythm = reactive(selectRecord(alcorhythmId));

</script>

<style scoped>
.btn {
  background-color: #FFF15F;
  width: 300px;
  height: 70px;
  margin: 20px 30px;
  padding: 10px 0px;
  color: #212529;
  font-size: 20px;
  border-radius: 100vh;
}
</style>