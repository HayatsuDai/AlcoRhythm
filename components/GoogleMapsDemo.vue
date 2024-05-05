<template>
    <GoogleMap api-key="YOUR_GOOGLE_MAPS_API_KEY" class="map" :center="center" :zoom="zoom">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
    components: { GoogleMap, Marker },
    setup() {
        const center = ref({ lat: 35.676764621841286, lng: 139.7336903131048 });
        const zoom = ref(18);
        return { center, zoom };
    },
})
</script>

<style scoped>
.map {
    position: relative;
    width: 100%;
    height: 950px;
}
</style>