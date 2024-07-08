<template>
  <div class="container">
      <section class="contents">
        <div class="info">
          <div class="id">id: {{ alcorhythmId }}</div>
          <div class="title">title: {{ alcorhythm.title }}</div>
          <div class="description">desc: {{ alcorhythm.description }}</div>
        </div>
        <hr>
        <div class="time-block">
          <div class="timer">
            <p>開始</p>
            {{ alcorhythm.start_time }}<br>
          </div>
          <div class="timer">
            <p>経過</p>
            {{ currentTime }}<br>
          </div>
        </div>
        <hr>
        <div class="convenience-container">
          <div class="convenience-item">
            <div class="icon" @click="incrementCounter('seveneleven')">
              <div class="convinience-count">{{ alcorhythm.count.seveneleven }}</div>
              <div><img src="/icons/seveneleven.png"></div>
            </div>
            <div class="minus-button" @click="decrementCounter('seveneleven')">
              <img src="/icons/minus_button.png" alt="minus_button">
            </div>
          </div>

          <div class="convenience-item">
            <div class="icon" @click="incrementCounter('familymart')">
              <div class="convinience-count">{{ alcorhythm.count.familymart }}</div>
              <div><img src="/icons/familymart.png"></div>
            </div>
            <div class="minus-button" @click="decrementCounter('familymart')">
              <img src="/icons/minus_button.png" alt="minus_button">
            </div>
          </div>

          <div class="convenience-item">
            <div class="icon" @click="incrementCounter('lawson')">
              <div class="convinience-count">{{ alcorhythm.count.lawson }}</div>
              <div><img src="/icons/lawson.png"></div>
            </div>
            <div class="minus-button" @click="decrementCounter('lawson')">
              <img src="/icons/minus_button.png" alt="minus_button">
            </div>
          </div>
        </div>
        <button class="btn" @click="finish">アルコリズムを終了する</button>
        <!-- <button class="btn" @click="navigateToResult" style="background-color: #65e36f;">debug終了</button> -->
      </section>
  </div>
</template>

<script setup lang="ts">
import type { IAlcorhythm, latlng } from '~/types/IAlcorhythm';
import { updateOrCreateRecord } from '~/utils/indexeddb';
definePageMeta({
  path: "/action",
  layout: false,
});
const navigateToResult = () => {
  return navigateTo({
    path: '/result',
    query: {
      alcorhythmId: alcorhythmId
    }
  });
};

const alcorhythmId: number = Number(useRoute().query.alcorhythmId);
const tmp = await selectRecord(alcorhythmId);
const alcorhythm = ref<IAlcorhythm>(tmp);

/** 画面内の値 */
let currentTime = ref<string>('00:00:00');
let currentTimerId: NodeJS.Timeout;
let progressLatLngTimerId: NodeJS.Timeout;

onMounted(() => {
  console.log('init');
  // 経過時間の格納
  currentTimerId = setInterval(setCurrentTime, 1000);
  // 緯度経度情報の格納(60秒/回)
  progressLatLngTimerId = setInterval(setLatLng, 60000);
});

/** 現在時刻タイマー */
const setCurrentTime = () => {
  const date = new Date();
  currentTime.value = date.toLocaleTimeString('en-GB');
};

const latlng = ref<latlng[]>([]);
/** アルコリズムObjectに緯度経度を格納 */
const setLatLng = async () => {
  if (!navigator.geolocation) {
    // TODO: sw.jsでオフライン時の挙動を担保したい
    alert('緯度経度が取得できませんでした');
    return;
  }
  navigator.geolocation.getCurrentPosition((pos) => {
    latlng.value.push({
      lat: pos.coords.latitude,
      lng: pos.coords.longitude
    });
  }, (error) => {
    console.error(error);
  });
};

/** アルコリズム終了時処理 */
const finish = () => {
  const confirmMsg = 'アルコリズムを終了しますか？';
  if (!confirm(confirmMsg)) {
    // TODO: 画面離脱時にも処理を呼び出す必要がある
    return;
  }

  console.log('finish');
  // timer停止
  clearInterval(currentTimerId);
  clearInterval(progressLatLngTimerId);

  const date = new Date();
  alcorhythm.value.end_date = generateDate();
  alcorhythm.value.end_time = currentTime.value;

  setLatLng(); // 最終位置を取得
  alcorhythm.value.latlng = latlng.value;
  updateOrCreateRecord(JSON.parse(JSON.stringify(alcorhythm.value)), alcorhythmId); // アルコリズムの保存

  return navigateToResult();
};

const generateDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}/${month}/${date}`;
};

/** カウンター加算 */
const incrementCounter = (counterTarget: string) => {
  switch (counterTarget) {
    case 'seveneleven':
      ++alcorhythm.value.count.seveneleven;
      break;
    case 'familymart':
      ++alcorhythm.value.count.familymart;
      break;
    case 'lawson':
      ++alcorhythm.value.count.lawson;
      break;
    defalut:
      alert('incrementCounter unreachable code');
      break;
    }
};

/** カウンター減算 */
const decrementCounter = (counterTarget: string) => {
  switch (counterTarget) {
    case 'seveneleven':
      if (alcorhythm.value.count.seveneleven > 0) {
        --alcorhythm.value.count.seveneleven;
      }
      break;
    case 'familymart':
      if (alcorhythm.value.count.familymart > 0) {
        --alcorhythm.value.count.familymart;
      }
      break;
    case 'lawson':
      if (alcorhythm.value.count.lawson > 0) {
        --alcorhythm.value.count.lawson;
      }
      break;
    defalut:
      alert('incrementCounter unreachable code');
      break;
    }
};
</script>

<style scoped>
img {
  width: 60px;
}
.info {
  width: 400px;
  margin-bottom: 30px;
}
.title {
  font-size: 25px;
  margin-bottom: 10px;
}
.description {
  font-size: 15px;
}
.time-block {
  display: flex;
  justify-content: center;
  font-size: 30px;
}
.time-block * {
  margin: 0;
}
.timer {
  padding: 0 20px;
}
.convenience-container {
  display: flex;
  justify-content: center;
}
.convenience-item {
  margin: 10px auto;
}
.convinience-count {
  text-align: center;
}
hr {
  border: none;
  border-bottom: 3px solid #CC9900;
  margin: 10px 0;
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