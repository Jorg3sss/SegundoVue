<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import Weather from './Weather.vue';
</script>

<template>
  <div class="header">
    <h1>La temperatura actual es: <Weather></Weather> </h1>
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
