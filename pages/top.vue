<template>
    <div>
        <div>
            <a href="/create" class="link">アルコリズムを作成する</a>
        </div>
        <div>
            <a href="/history" class="link">履歴をみる</a>
        </div>
        <div>
            <a href="/debug" class="link">Debug画面</a>
        </div>
    </div>
</template>

<script setup lang="ts">
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
.link {
    background-color: #FFF15F;
    width: 300px;
    margin: 30px 0px 50px 0px;
    padding: 10px 0px ;
    color: #212529;
    font-size: 18px;
    border-radius: 100vh;
}
</style>