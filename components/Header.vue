<template>
<div class="header">
    <div>
        <a href="/top">
            <img src="/icons/歩くジョッキ君_透過.png" class="img">
        </a>
    </div>
    <div>
        <p class="title">アルコリズム</p>
    </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header {
    display: flex;
    flex-wrap: wrap;
    height: 60px;
    width: 100%;
    margin-bottom: 30px;
    box-shadow: 0px 3px 3px 0px #bababa80;
    background-color: #E6BF00;
}
.title {
    font-size: 18px;
    font-weight: bold;
}
/* a {
    display: flex;
    justify-content: flex-start;
} */
.img {
    margin: 5px 5px 5px 10px;
    width: 50px;
    height: 50px;
}
</style>
