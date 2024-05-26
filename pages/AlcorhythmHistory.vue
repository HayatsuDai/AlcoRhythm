<template>
  <div>
      <section class="contents">
        <h1>アルコリズム履歴</h1>
        <div v-for="(alcorhythm, index) in alcorhythmList" :key="index">
          <a :href="`/history-detail?alcorhythmId=${index}`">{{ alcorhythm.start_date }} {{ alcorhythm.title }} </a>
        </div>
        <button class="btn" @click="navigateToTop">トップに戻る</button>
      </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  path: "/history"
});
const alcorhythmList = reactive(selectAllRecord());

const navigateToTop = () => {
  return navigateTo({
    path: '/top'
  });
};
</script>

<style scoped>
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