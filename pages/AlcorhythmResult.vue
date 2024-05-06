<template>
  <div class="app">
      <section class="contents">
        タイトル：{{ title }}<br>
        メッセージ：{{ message }}<br>
        開始時刻：{{ startTime }}<br>
        終了時刻：{{ progressTime }}<br>
        <ul id="sample">
          <li v-for="(item, index) in latLng" :key="index">
            lat:{{ item.lat }}, lng{{ item.lng }}
          </li>
        </ul>
        <br>
        <a @click="viewsAppHistoryDetail">詳細の履歴をみる</a>
        <br>
        <router-link to="/app-top">トップに戻る</router-link>
      </section>
  </div>
</template>

<script setup lang="ts">

// latLng : {
//   type: Array,
//   default: () => {},
//   required: false,
// };
// title: {
//   type: String,
//   default: 'デフォルトタイトル',
//   required: false // TODO: 仕様通りならtrueにしたい！
// };
// message: {
//   type: String,
//   default: '',
//   required: false
// };
// startTime : {
//   type: String,
//   required: false,
//   default: '--:--:--'
// };
// progressTime : {
//   type: String,
//   required: false,
//   default: '--:--:--'
// };

const latLng = [
  {
    lat: 0,
    lng: 0,
  },
  {
    lat: 0,
    lng: 0,
  },
]
const title = '';
const message = '';
const startTime = '';
const progressTime = '';


const viewsAppHistoryDetail = () => {
  // 処理
};

// TODO: いまはrouter機能でデータ渡してるが、データ格納はDBとかvuexに委ねたい
// const viewsAppHistoryDetail = () => {
//   Router.push({
//     name: 'AppHistoryDetail',
//     params: {
//       latLng: this.latLng,
//       title: this.title,
//       message: this.message,
//       startTime: this.startTime,
//       progressTime: this.progressTime,
//     }
//   });
// };
</script>