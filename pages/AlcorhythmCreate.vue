<template>
  <div class="container">
    <section class="contents">
      <h1>アルコリズムを作成</h1>
      <h2>タイトルを入力する（必須）</h2>
      <input type="text" v-model="alcorhythm.title">
      <h2>メッセージを入力する</h2>
      <input type="text" class="text-area" v-model="alcorhythm.description">
      <button class="btn" @click="navigateToAction">アルコリズムを開始する</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm } from '~/types/IAlcorhythm';
definePageMeta({
  path: "/create",
});

const alcorhythm: IAlcorhythm = reactive({
    title: 'sample',
    description: 'sample',
    latlng: [],
    count: {
      seveneleven: 0,
      lawson: 0,
      familymart: 0,
    },
    start_date: null,
    start_time: null,
    end_date: null,
    end_time: null,
});
/** 画面のバリデーションを実装 */
let validationMsg = ref("");
const viewValidate = (): boolean => {
  if (!alcorhythm.title) {
    validationMsg.value = "タイトルを入力してください";
    return false;
  }

  return true; // 正常終了
}

const navigateToAction = () => {
  if (!viewValidate()) {
    alert(validationMsg.value);
    return;
  }

  // TODO: 現場の情報のみでindexeddb.createRecordをawaitで実行し、idを取得する
  // alcorhythmId = createRecord(// alcorhythm);
  alcorhythm.start_date = generateDate();
  alcorhythm.start_time = generateTime();
  createRecord(alcorhythm);
  const alcorhythmId = 1;

  console.log('--- create alcorhythm var ---');
  console.log(alcorhythm);
  alert('go?');
  return navigateTo({
    path: '/action',
    query: {
      alcorhythmId: alcorhythmId
    }
  });
};

const generateDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}/${month}/${date}`;
};
const generateTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();
  return `${hour}:${minutes}:${seconds}`;
};
</script>

<style scoped>
.container {
  width: auto;
}
h1 {
  font-size: 30px;
  margin-bottom: 30px;
}
h2 {
  background-color: #F2D16D;
  padding: 10px;
}
input {
  margin: 20px auto;
  text-align: center;
  height: 40px;
  font-size: 25px;
  text-align: left;
}
.text-area {
  height: 150px;
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