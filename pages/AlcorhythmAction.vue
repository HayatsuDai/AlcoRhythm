<template>
  <div class="app">
      <section class="contents">
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="message">{{ message }}</div>
        </div>
        <hr>
        <div class="time-block">
          <div class="timer">
            <p>開始</p>
            {{ startTime }}<br>
          </div>
          <div class="timer">
            <p>経過</p>
            {{ progressTime }}<br>
          </div>
        </div>
        <hr>
        <div class="convenience">
          <div class="seven">
            <div>{{ countSeven }}</div>
            <img src="../../public/img/icons/seven_eleven.png">
          </div>
          <div class="famima">
            <div>{{ countFamima }}</div>
            <img src="../../public/img/icons/familymart.png">
          </div>
          <div class="lawson">
            <div>{{ countLawson }}</div>
            <img src="../../public/img/icons/lawson.png">
          </div>
        </div>
        <button class="btn" @click="viewsAppAlcorhythmResult">アルコリズムを終了する</button>
        <button class="btn" @click="debugFinish" style="background-color: #65e36f;">debug終了</button>
      </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';

let documentId = 'dummyDocumentId';
let latLng = [];
let startTime = '00:00:00';
let finishTime = '00:00:00';
let progressTime = '00:00:00';
let timerIdForProgressTime = '';
let timerIdForLatLng = '';
let countSeven = 0;
let countFamima = 0;
let countLawson = 0;

onMounted(() => {
    init();
    // 経過時間の格納
    timerIdForProgressTime = setInterval(setProgressTime, 500);
    // 緯度経度情報の格納(60秒/回)
    timerIdForLatLng = setInterval(setLatLng, 6000);
})

const init = () => {
  console.log('init');
  const date = new Date();
  startTime = date.toLocaleTimeString('en-GB');
  progressTime = date.toLocaleTimeString('en-GB');
  setLatLng();// 初期位置を取得
};
const finish = () => {
  console.log('finish');
  const date = new Date();
  finishTime = date.toLocaleTimeString('en-GB');

  setLatLng();// 最終位置を取得
  // this.setAlcorhythm(); // TODO: firebase実装とともにコメント外す
};
const setProgressTime = () => {
  const date = new Date();
  progressTime = date.toLocaleTimeString('en-GB');
};
const setLatLng = () => {
  console.log('latlng');
  navigator.geolocation.getCurrentPosition(
    success,
    fail
  );
};
const success = (position) => {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  latLng.push(
    {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    }
  );
};
const fail = (error) => {
  window.alert('位置情報の取得に失敗しました。エラーコード：' + error.code);
};

// async setAlcorhythm() {
//   // TODO: cloud firebaseにデータをブチ込む
//   // https://qiita.com/subaru44k/items/a88e638333b8d5cc29f2
//   // Add a new document with a generated id.
//   try {
//     // 省略
//     // (Cloud Firestoreのインスタンスを初期化してdbにセット)

//     const userRef = await db.collection('users').add({
//       name: {
//         first: 'tarou',
//         last: 'yamada',
//       },
//       score: 80,
//       birthday: firebase.firestore.Timestamp.fromDate(new Date(1980, 10, 15)),
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
//     })

//     const userDoc = await userRef.get()
//     console.log(userDoc.data())
//     // 出力例
//     // { birthday: Timestamp { seconds: 343062000, nanoseconds: 0 },
//     //   createdAt: Timestamp { seconds: 1571747519, nanoseconds: 521000000 },
//     //   name: { first: 'tarou', last: 'yamada' },
//     //   score: 80,
//     //   updatedAt: Timestamp { seconds: 1571747519, nanoseconds: 521000000 } }
// this.documentId = documentId;
// return 0;
//   } catch (err) {
//     console.log(`Error: ${JSON.stringify(err)}`)
// return 1;
//   }
// return 1;
// },

// 次画面にデータを送信する
const viewsAppAlcorhythmResult = () => {
  // タイマーの停止
  clearInterval(timerIdForProgressTime);
  clearInterval(timerIdForLatLng);

  // 終了地点の緯度経度を最後に取得して格納
  finish();
}

// TODO: いまはrouter機能でデータ渡してるが、firebaseDBにインサートする処理を設ける
// if (this.setAlcorhythm()) {
//   // error導線。ポップ出してトップ画面に遷移が無難かな
// }
// Router.push({
//   name: 'AppAlcorhythmResult',
//   params: {
//     // documentId: this.documentId,
//     latLng: this.latLng,
//     title: this.title,
//     message: this.message,
//     startTime: this.startTime,
//     progressTime: this.progressTime,
//   }
// });

const debugFinish = () => {
  latLng =  [{"lat":35.623047,"lng":139.720001},{"lat":35.623057,"lng":139.720042},{"lat":35.623067,"lng":139.720076},{"lat":35.623077,"lng":139.720230},{"lat":35.623087,"lng":139.720401},{"lat":35.623097,"lng":139.720501}];
  viewsAppAlcorhythmResult();
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
.message {
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