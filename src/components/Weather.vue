<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { useWeather } from '@/composables/useWeather';
  import { onMounted } from 'vue';
  import { useWeatherStore } from '@/stores/weatherStore';

  const weatherStore = useWeatherStore();
  onMounted(() =>{
    useWeather();
  });
</script>

<template>
  {{ weatherStore.temperatura }}
</template>

<style scoped>

</style>
