<template>
  <div>
    <GmapMap
      :center='center'
      :zoom='12'
      style='width:100%;  height: 400px;'
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      />
      <GmapPolyline
        :path.sync="latLng"
        :options="{ strokeColor:'#594623'}"
      />
    </GmapMap>
  </div>
</template>

<script>
const latLng = [];

const center = {
    lat: this.latLng[0].lat,
    lng: this.latLng[0].lng
  };
const markers = [];

onMounted(() => {
    this.addMarker();
});
const addMarker = () => {
  this.latLng.forEach(item => {
    const marker = {
      lat: item.lat,
      lng: item.lng,
    };
    this.markers.push({ position: marker });
  });
};
</script>
