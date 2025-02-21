<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
 import { defineProps } from 'vue';

 const props = defineProps(
  [
    'resultado'
  ]
 );
</script>

<template>
  <div class="resultado">
    {{ props.resultado }}
  </div>
</template>

<style scoped>
  .resultado{
    background-color: aquamarine;
  }
</style>
