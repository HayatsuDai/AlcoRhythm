<template>
  <div class="center">
    <button class="btn" @click="navigateToCreate">アルコリズムを作成する</button>
    <button class="btn" @click="navigateToHistory">履歴をみる</button>
    <button class="btn" @click="navigateToDebug">Debug画面</button>
  </div>
</template>

<script setup lang="ts">
  const navigateToCreate = () => {
    return navigateTo({
      path: '/create',
    });
  };
  const navigateToHistory = () => {
    return navigateTo({
      path: '/history',
    });
  };
  const navigateToDebug = () => {
    return navigateTo({
      path: '/debug',
    });
  };

  onMounted(() => {
    if (!('serviceWorker' in navigator)) {
        alert('service worker not in navigator');
        return;
    }
    /** キャッシュ設定 */
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        if (!registration) {
            console.log('ない');
            console.log(registration);
            return;
        }
        registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            console.log('New Service Worker found, installing.');
            if (!newWorker) {
                return;
            }
        });
    });
  });
  /** アプリ更新をユーザに通知する */
  const notifyUserAboutUpdate = (worker: ServiceWorker) => {
    let shouldUpdate = confirm('New version available. Refresh to update?');
    if (shouldUpdate) {
        worker.postMessage({ action: 'skipWaiting' });
    }
  }

</script>

<style scoped>
.center {
  text-align: center;
}

.link {
  background-color: #FFF15F;
  width: 300px;
  margin: 30px auto;
  padding: 30px 0px;
  color: #212529;
  font-size: 25px;
  border-radius: 100vh;
}
a:visited {
  color: inherit;
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