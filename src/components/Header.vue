<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Weather from './Weather.vue';
import { defineProps, ref, watch } from 'vue';


const props = defineProps(["mensaje"]);
const mensaje2 = ref(props.mensaje);

watch(() => props.mensaje,(newValue)=>{
  mensaje2.value = newValue;
})

</script>

<template>
  <div class="header">
    {{ mensaje2 }} <Weather></Weather>

  </div>

</template>

<style scoped>

  .header{
    display: flex;
    justify-content: center;
    align-items:stretch;
    padding: 10px 20px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: #333;
    color: white;
    margin-bottom: 100px;
    font-size: 13px;
  }

  h1{
    margin: 0;

  }
</style>
