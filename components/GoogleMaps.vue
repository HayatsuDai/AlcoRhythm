<template>
  <div ref="mapRef" class="map-container"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

interface LatLng {
  lat: number;
  lng: number;
}
interface IProps {
  latLngList: LatLng[];
}
const props = defineProps<IProps>();
const mapRef = ref<HTMLElement | null>(null);
let map: google.maps.Map | null = null;
const markers: google.maps.Marker[] = [];

const initMap = () => {
  if (mapRef.value) {
    map = new google.maps.Map(mapRef.value, {
      center: props.latLngList.length > 0 ? props.latLngList[0] : { lat: 0, lng: 0 },
      zoom: 12,
    });
    updateMarkers();
  }
};

const updateMarkers = () => {
  if (map) {
    // 既存のマーカーをクリア
    markers.forEach(marker => marker.setMap(null));
    markers.length = 0;

    // 新しいマーカーを追加
    props.latLngList.forEach(latlng => {
      const marker = new google.maps.Marker({
        position: latlng,
        map,
        title: `Location (${latlng.lat}, ${latlng.lng})`,
      });
      markers.push(marker);
    });
  }
};

onMounted(() => {
  if (window.google && window.google.maps) {
    initMap();
  } else {
    // Google Maps APIが読み込まれていない場合のフォールバック
    const interval = setInterval(() => {
      if (window.google && window.google.maps) {
        clearInterval(interval);
        initMap();
      }
    }, 100);
  }
});

watch(
  () => props.latLngList,
  () => {
    updateMarkers();
  },
  { deep: true }
);
</script>

<style scoped>
.map-container {
  width: 100%;
  height: 400px; /* 必要に応じて調整 */
}
</style>
