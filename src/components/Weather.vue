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
  <h1>La temperatura actual es: {{ weatherStore.temperatura }}°</h1>
</template>

<style scoped>

</style>
