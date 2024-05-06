<template>
  <div class="app">
      <app-header/>
      <section class="contents">
        <h1>アルコリズムを作成</h1>
        <h2>タイトルを入力する（必須）</h2>
        <input type="text" v-model="title">
        <h2>メッセージを入力する</h2>
        <input type="text" class="text-area" v-model="message">
        <button class="btn" @click="viewsAppAlcorhythm">アルコリズムを開始する</button>
      </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

const title = '';
const message = '';
const startTime = 0;

const viewsAppAlcorhythm = () => {
  // 処理
};
</script>

<style scoped>
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
  width: 300px;
  height: 40px;
  font-size: 25px;
  text-align: left;
}
.text-area {
  width: 300px;
  height: 150px;
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