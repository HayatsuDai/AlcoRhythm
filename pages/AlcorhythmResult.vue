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
        <button class="btn" @click="navigateToHistoryDetail">詳細の履歴をみる</button>
        <br>
        <button class="btn" @click="navigateToTop">トップに戻る</button>
      </section>
  </div>
</template>

<script setup lang="ts">
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

const alcorhythmId = useRoute().query.alcorhythmId;
console.log('alcorhythmId: ' + alcorhythmId);
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

// const navigateToHistoryDetail = () => {
//   return navigateTo({
//     path: '/history-detail',
//     query: {
//       alcorhythmId: 0 // TODO: IDを受け取りたい
//     }
//   });
// };

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