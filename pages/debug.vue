<template>
  <div>
    <div>
      <label for="id">inputId</label><input type="number" v-model="inputId" name="id">
    </div>
    <div>
      <label for="object">inputJson</label><textarea v-model="inputJson" name="object" class="input-text"></textarea>
    </div>
  </div>
  <div>
    <button @click="onClickInitDB">init</button>
  </div>
  <div>
    <button @click="onClickCreateRecord">create</button>
  </div>
  <div>
    <button @click="onClickUpdateOrCreate">updateOrCreate</button>
  </div>
  <div>
    <button @click="onClickSelect">select</button>
    <div>{{ selectObject }}</div>
  </div>
</template>

<script setup lang="ts">
  /** 準備部 */
  const id = ref(0);
  const inputId = ref(0);

  const selectObject = ref("");

  const defaultJson = JSON.stringify(debugData_1, null, 2);
  const inputJson = ref(defaultJson);


  /** function定義部 */
  const onClickInitDB = () => {
    initDB();
  }
  const onClickSelect = async () => {
    const tmp = await selectRecord(inputId.value);
    selectObject.value = JSON.stringify(tmp, null, 2);
  }
  const onClickCreateRecord = async () => {
    id.value = await createRecord(JSON.parse(inputJson.value));
    console.log(id.value);
  }
  const onClickUpdateOrCreate = async () => {
    await updateOrCreateRecord(JSON.parse(inputJson.value), inputId.value);
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
.input-text {
  width: 300px;
  height: 400px;
  word-break: keep-all;
}
</style>