<template>
  <div class="app">
      <section class="contents">
        <div class="info">
          <div class="id">{{ alcorhythmId }}</div>
          <div class="title">{{ alcorhythm.title }}</div>
          <div class="description">{{ alcorhythm.description }}</div>
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
        <div class="convenience">
          <div class="icon" @click="incrementCounter('seveneleven')">
            <div>{{ alcorhythm.count.seveneleven }}</div>
            <img src="/icons/seveneleven.png">
          </div>
          <div @click="decrementCounter('seveneleven')">
            <img src="/icons/minus_button.png" alt="minus_button">
          </div>
          <div class="icon" @click="incrementCounter('familymart')">
            <div>{{ alcorhythm.count.familymart }}</div>
            <img src="/icons/familymart.png">
          </div>
            <div @click="decrementCounter('familymart')">
              <img src="/icons/minus_button.png" alt="minus_button">
            </div>
          <div class="icon" @click="incrementCounter('lawson')">
            <div>{{ alcorhythm.count.lawson }}</div>
            <img src="/icons/lawson.png">
          </div>
          <div @click="decrementCounter('lawson')">
            <img src="/icons/minus_button.png" alt="minus_button">
          </div>
        </div>
        <button class="btn" @click="finish">アルコリズムを終了する</button>
        <!-- <button class="btn" @click="navigateToResult" style="background-color: #65e36f;">debug終了</button> -->
      </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import type { IAlcorhythm, latlng } from '~/types/IAlcorhythm';
import { updateOrCreate } from '~/utils/indexeddb';
definePageMeta({
  path: "/action"
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
const alcorhythm: IAlcorhythm = reactive(selectRecord(alcorhythmId));

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
  alcorhythm.end_date = date.toLocaleTimeString('en-GB');
  alcorhythm.end_time = currentTime.value;

  setLatLng(); // 最終位置を取得
  alcorhythm.latlng = latlng.value;
  updateOrCreate(alcorhythm); // アルコリズムの保存

  return navigateToResult();
};
/** カウンター加算 */
const incrementCounter = (counterTarget: string) => {
  switch (counterTarget) {
    case 'seveneleven':
      ++alcorhythm.count.seveneleven;
      break;
    case 'familymart':
      ++alcorhythm.count.familymart;
      break;
    case 'lawson':
      ++alcorhythm.count.lawson;
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
      --alcorhythm.count.seveneleven;
      break;
    case 'familymart':
      --alcorhythm.count.familymart;
      break;
    case 'lawson':
      --alcorhythm.count.lawson;
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
  margin-bottom: 50px;
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
.convenience {
  display: flex;
  justify-content: center;
}
.convenience * {
  margin: 10px
}
hr {
  border: none;
  border-bottom: 3px solid #CC9900;
  margin: 30px 0;
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