<template>
    <div class="app">
        <button @click="redirectCreate" class="btn">アルコリズムを作成する</button>
        <br>
        <button @click="redirectHistory" class="btn">履歴をみる</button>
    </div>
</template>

<script setup lang="ts">
const redirectCreate = () => {
    return navigateTo("/alcorhyth-create");
}
const redirectHistory = () => {
    return navigateTo("/alcorhyth-history");
}
</script>

<style scoped>
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
button:first-of-type {
    margin-top: 60px;
}
</style>