<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
  import { ref, computed } from 'vue';
  import Resultado from '../components/Resultado.vue';

  const valor = ref("");
  const valorCalculado = computed(() => {
    return valor.value * 3;
  });

  const mostrar = computed (() => {
    return valor.value > 10;
  });

</script>

<template>
  <h3>Propiedades computadas</h3>
  <input type="text" v-model="valor">
  {{ valorCalculado }}
  <Resultado v-if="mostrar" :resultado="valorCalculado"></Resultado>
  <div v-else-if="isNaN(valor)">Tiene que ser un número</div>
  <div v-else>Aquí no hay nada</div>

</template>


<style scoped>

</style>


