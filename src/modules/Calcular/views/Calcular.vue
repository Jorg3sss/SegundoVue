<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { ref, computed } from 'vue';
  import Resultado from '../components/Resultado.vue';

  const valor = ref("");
  const valorCalculado = computed(() => {
    return valor.value * 3;
  });
</script>

<template>
  <h3>Propiedades computadas</h3>
  <input type="text" v-model="valor">
  {{ valorCalculado }}
  <Resultado :resultado="valorCalculado"></Resultado>

</template>


<style scoped>

</style>


