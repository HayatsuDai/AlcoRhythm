<template>
  <div class="app">
      <section class="contents">
        <div class="info">
          <div class="title">{{ title }}</div>
          <div class="message">{{ message }}</div>
        </div>
        <div class="hr-contents">
          <p class="hr-title">歩いた軌跡</p>
          <hr>
        </div>
        <google-maps
          :lat-lng="latLng"
          class="gmap"
        />
        <div class="hr-contents">
          <p class="hr-title">タイム</p>
          <hr>
        </div>
        <div>
          開始時刻：{{ startTime }}<br>
          終了時刻：{{ progressTime }}<br>
        </div>
        <ul id="sample">
          <li v-for="item in latLng" :key="item.index">
            lat:{{ item.lat }}, lng{{ item.lng }}
          </li>
        </ul>
      </section>
        <button class="btn" @click="viewsAppHistory">履歴一覧に戻る</button>
        <button class="btn" @click="viewsAppTop">トップ画面に戻る</button>
  </div>
</template>

<script>
// props: {
//   latLng : {
//     type: Array,
//     default: () => {},
//     required: false,
//   },
//   title: {
//     type: String,
//     default: 'デフォルトタイトル',
//     required: false // TODO: 仕様通りならtrueにしたい！
//   },
//   message: {
//     type: String,
//     default: '',
//     required: false
//   },
//   startTime : {
//     type: String,
//     required: false,
//     default: '--:--:--'
//   },
//   progressTime : {
//     type: String,
//     required: false,
//     default: '--:--:--'
//   }
// };

const viewsAppHistory = () => {
  Router.push({
    name: 'AppHistory'
  });
},
const viewsAppTop = () => {
  Router.push({
    name: 'AppTop'
  });
};
</script>

<style scoped>
.info {
  width: 400px;
  margin-bottom: 50px;
}
.title {
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: bold;
}
.message {
  font-size: 15px;
}
.hr-title {
  text-align: left;
  margin-left: 20px;
  font-size: 25px;
  font-weight: bold;
}
.hr-contents {
  margin-top: 30px;
}
hr {
  border: none;
  border-bottom: 3px solid #CC9900;
  margin: 10px 0 30px 0;
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