<template>
    <div>
        <div>
            トップ画面
        </div>
        <div @click="redirect">
            戻る
        </div>
    </div>
</template>

<script setup lang="ts">

const redirect = () => {
    return navigateTo("/");
}
</script>