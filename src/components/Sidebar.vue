<!-- eslint-disable vue/multi-word-component-names -->
<script setup>

</script>

<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
      <li><router-link to="/Contador">Contador</router-link></li>
      <li><router-link to="/Lista">Lista</router-link></li>

    </ul>

  </div>

</template>

<style>
  .sidebar{
    width: 200px;
    background-color: #f0f0f0;
    padding: 20px;
  }
</style>
