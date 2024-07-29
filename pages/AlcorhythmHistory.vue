<template>
  <div>
      <section class="contents">
        <h1>アルコリズム履歴</h1>
        <div v-for="(alcorhythm, index) in alcorhythmList" :key="index">
          <a :href="`/history-detail?alcorhythmId=${index}`">{{ alcorhythm.start_date }} {{ alcorhythm.start_time }} {{ alcorhythm.title }} </a>
        </div>
        <div class="button-container">
          <button class="btn" @click="navigateToTop">トップに戻る</button>
        </div>
      </section>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm } from '~/types/IAlcorhythm';
import { initAlcorhythmData } from '~/utils/initAlcorhythmData';
definePageMeta({
  path: "/history"
});

const navigateToTop = () => {
  return navigateTo({
    path: '/top'
  });
};

const alcorhythmList = ref<IAlcorhythm[]>([initAlcorhythmData]);

onMounted(async () => {
  const tmpList = await selectAllRecord();
  tmpList.sort(historySortAlgo);
  alcorhythmList.value = tmpList;
});

/**
 * 履歴表示のソートロジック
 * - 日付順で降順
 * @param first 
 * @param seccond 
 */
 function historySortAlgo(first: IAlcorhythm, seccond: IAlcorhythm) {
 const dateForFirst = new Date(first.start_date! + " " + first.start_time!);
 const dateForSeccond = new Date(seccond.start_date! + " " + seccond.start_time!);
 
 if (dateForFirst > dateForSeccond) {
  return -1;
 } else if (dateForFirst < dateForSeccond) {
  return 1;
 }
 return 0;
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: center;
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