<template>
    <div>
        <SplashScreen @click="redirect"></SplashScreen>
    </div>
</template>

<script setup lang="ts">

const redirect = () => {
    return navigateTo("/top");
}
definePageMeta({
    layout: false
})
</script>