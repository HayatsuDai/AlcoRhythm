<template>
    <div class="header">
        <router-link to="/top" class="header">
            <img src="/icons/歩くジョッキ君_透過.png" class="img">
        </router-link>
        <p class="header-user">ユーザー１</p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
    top: 0;
    height: 58px;
    box-shadow: 0px 3px 3px 0px #bababa80;
    width: 100%;
    background-color: #E6BF00;
    text-decoration: none;
}
.header-title {
    float: left;
    padding: 1.30rem;
    font-weight: bold;
}
.header-user {
    float: right;
    padding: 1.30rem;
    font-weight: bold;
}
a {
    display: flex;
    justify-content: flex-start;
}
.img {
    margin: 5px 5px 5px 10px;
}
</style>
