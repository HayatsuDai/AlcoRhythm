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
button {
    padding: 18px;
    margin: 10px;
    width: 300px;
    background-color: #FFF15F;
    margin: 10px 10px;
    padding: 10px 0px ;
    color: #212529;
    font-size: 18px;
    border-radius: 100vh;
}
</style>