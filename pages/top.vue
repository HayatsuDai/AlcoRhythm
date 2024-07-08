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
    
  });
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