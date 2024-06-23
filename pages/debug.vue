<template>
  <div>
    <button @click="onClickDBInit">init</button>
  </div>
  <div>
    <button @click="onClickCreateRecord">create</button>
  </div>
</template>

<script setup lang="ts">
const onClickDBInit = () => {
  const id = init();
}
const onClickCreateRecord = () => {
  const id = createRecord(debugData_1);
}
</script>

<style>
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