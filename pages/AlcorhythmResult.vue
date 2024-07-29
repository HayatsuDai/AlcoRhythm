<template>
  <div class="container">
      <section class="contents">
        タイトル：{{ alcorhythm.title }}<br>
        メッセージ：{{ alcorhythm.description }}<br>
        開始時刻：{{ alcorhythm.start_date }} {{ alcorhythm.start_time }}<br>
        終了時刻：{{ alcorhythm.end_date }} {{ alcorhythm.end_time }}<br>
        <ul>
          <li v-for="(item, index) in alcorhythm.latlng" :key="index">
            lat:{{ item.lat }}, lng{{ item.lng }}
          </li>
        </ul>
        <div class="button-container">
          <div>
            <button class="btn" @click="navigateToHistoryDetail">詳細の履歴をみる</button>
          </div>
          <div>
            <button class="btn" @click="navigateToTop">トップに戻る</button>
          </div>
        </div>
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
const tmp = await selectRecord(alcorhythmId);
const alcorhythm = ref<IAlcorhythm>(tmp);

</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  text-align: center;
}
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