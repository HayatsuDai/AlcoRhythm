<template>
  <div class="container">
    <section class="contents">
      <h1>アルコリズムを作成</h1>
      <h2>タイトルを入力する（必須）</h2>
      <input type="text" v-model="alcorhythm.title" placeholder="タイトルを入力する">
      <h2>メッセージを入力する</h2>
      <input type="text" class="text-area" v-model="alcorhythm.description" placeholder="メッセージを入力する">
      <button class="btn" @click="navigateToAction">アルコリズムを開始する</button>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm } from '~/types/IAlcorhythm';
import { initAlcorhythmData } from '~/utils/initAlcorhythmData';
definePageMeta({
  path: "/create",
});

const alcorhythm = ref<IAlcorhythm>(initAlcorhythmData);
/** 画面のバリデーションを実装 */
let validationMsg = ref("");
const hasValidError = (): boolean => {
  if (!alcorhythm.value.title) {
    validationMsg.value = "タイトルを入力してください";
    return false;
  }

  return true; // 正常終了
}

/** Route操作 */
const navigateToAction = async () => {
  if (!hasValidError()) {
    alert(validationMsg.value);
    return;
  }

  const date = new Date();
  alcorhythm.value.start_date = generateDate();
  alcorhythm.value.start_time = date.toLocaleTimeString('en-GB');

  const alcorhythmId = await createRecord(JSON.parse(JSON.stringify(alcorhythm.value)));
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